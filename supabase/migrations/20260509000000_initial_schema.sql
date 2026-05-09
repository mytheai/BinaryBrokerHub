-- BinaryBrokerHub.com — Initial schema
-- Methodology v1.0 (2026-05-09)
--
-- Design decisions (per sparring 2026-05-09):
--   1. Score storage: raw criterion scores + materialized final_score (computed app-side)
--   2. Per-geo: separate broker_geo_scores table, queryable by country
--   3. Click PII: hash IP + 30 day retention (GDPR/PDPA compliant)
--   4. Versioning: append-only — every (broker, version, system, scored_at) is a new row

-- ====================================================================
-- 1. REGULATORS — list of authority bodies (FCA, CySEC, SVG, RBI, ...)
-- ====================================================================
create table regulators (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  name text not null,
  country_code text not null,
  tier text not null check (tier in ('tier-1', 'tier-2', 'tier-3', 'offshore', 'warning-list-only')),
  website_url text,
  register_url text,
  notes text,
  created_at timestamptz not null default now()
);

comment on table regulators is 'Regulatory authorities. Tier-1 = FCA/CySEC/ASIC/CFTC. Offshore = SVG/Mwali/Vanuatu. Warning-list-only = RBI/BAPPEBTI (do not license but issue alerts).';

-- ====================================================================
-- 2. BROKERS — main broker entity
-- ====================================================================
create table brokers (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  website_url text not null,
  affiliate_base_url text,
  year_founded integer,
  hq_country_code text,
  status text not null default 'active' check (status in ('active', 'suspended', 'closed', 'discontinued')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index brokers_status_idx on brokers (status);

comment on column brokers.affiliate_base_url is 'Base URL with affiliate placeholder, e.g., "https://pocketoption.com/?utm_source=BBH&sub_id={CLICK_ID}". App replaces {CLICK_ID} at redirect time.';

-- ====================================================================
-- 3. BROKER_LICENSES — many-to-many: brokers × regulators
-- ====================================================================
create table broker_licenses (
  id uuid primary key default gen_random_uuid(),
  broker_id uuid not null references brokers(id) on delete cascade,
  regulator_id uuid not null references regulators(id),
  license_number text,
  status text not null check (status in ('active', 'suspended', 'expired', 'revoked', 'never-held')),
  valid_from date,
  valid_to date,
  notes text,
  verification_screenshot_url text,
  created_at timestamptz not null default now()
);

create index broker_licenses_broker_idx on broker_licenses (broker_id);
create unique index broker_licenses_unique on broker_licenses (broker_id, regulator_id, license_number);

-- ====================================================================
-- 4. BROKER_WARNINGS — public regulator warnings/alerts
-- ====================================================================
create table broker_warnings (
  id uuid primary key default gen_random_uuid(),
  broker_id uuid not null references brokers(id) on delete cascade,
  regulator_id uuid not null references regulators(id),
  warning_type text not null check (warning_type in ('alert-list', 'public-warning', 'cease-and-desist', 'investor-bulletin')),
  issue_date date not null,
  source_url text not null,
  notes text,
  created_at timestamptz not null default now()
);

create index broker_warnings_broker_idx on broker_warnings (broker_id);
create index broker_warnings_issue_date_idx on broker_warnings (issue_date desc);

-- ====================================================================
-- 5. METHODOLOGY_VERSIONS — track methodology iterations
-- ====================================================================
create table methodology_versions (
  version text primary key,
  published_at date not null,
  weights jsonb not null,
  notes text,
  created_at timestamptz not null default now()
);

comment on column methodology_versions.weights is 'Snapshot of weights per ranking_system. Example: {"best_regulated": {"regulation": 0.40, "withdrawal": 0.15, "platform": 0.15, "support": 0.10, "payout": 0.10, "fees": 0.05, "education": 0.05}, "best_for_beginners": {"min_deposit": 0.20, "platform": 0.20, "demo": 0.15, "withdrawal": 0.15, "education": 0.15, "payout": 0.10, "regulation_transparency": 0.05}}';

-- ====================================================================
-- 6. BROKER_SCORES — append-only score per (broker, version, system)
-- ====================================================================
create table broker_scores (
  id uuid primary key default gen_random_uuid(),
  broker_id uuid not null references brokers(id) on delete cascade,
  methodology_version text not null references methodology_versions(version),
  ranking_system text not null check (ranking_system in ('best_regulated', 'best_for_beginners')),
  scored_at date not null,
  -- Raw criterion scores (0-10 each):
  score_regulation numeric(3,1),
  score_withdrawal numeric(3,1),
  score_platform numeric(3,1),
  score_support numeric(3,1),
  score_payout numeric(3,1),
  score_fees numeric(3,1),
  score_education numeric(3,1),
  -- Beginners-only criteria:
  score_min_deposit numeric(3,1),
  score_demo numeric(3,1),
  score_regulation_transparency numeric(3,1),
  -- Computed final score (app-side from raw × weights):
  final_score numeric(4,2) not null,
  notes text,
  created_at timestamptz not null default now(),
  unique (broker_id, methodology_version, ranking_system, scored_at)
);

create index broker_scores_lookup_idx on broker_scores (broker_id, ranking_system, scored_at desc);
create index broker_scores_ranking_idx on broker_scores (ranking_system, final_score desc);

comment on table broker_scores is 'Append-only history. Each (broker, methodology_version, ranking_system, scored_at) is a unique row. New score = new row, never UPDATE.';

-- ====================================================================
-- 7. BROKER_GEO_SCORES — per-country adjusted scores
-- ====================================================================
create table broker_geo_scores (
  id uuid primary key default gen_random_uuid(),
  broker_score_id uuid not null references broker_scores(id) on delete cascade,
  country_code text not null,
  modifier_total numeric(3,1) not null default 0,
  modifier_breakdown jsonb not null default '[]'::jsonb,
  geo_final_score numeric(4,2) not null,
  created_at timestamptz not null default now(),
  unique (broker_score_id, country_code)
);

create index broker_geo_scores_country_ranking_idx on broker_geo_scores (country_code, geo_final_score desc);

comment on column broker_geo_scores.modifier_breakdown is 'Array of applied modifiers. Example: [{"type": "rbi_alert", "value": -1.5, "source_url": "https://rbi.org.in/Scripts/Alert_list.aspx", "issued_date": "2023-11-24"}, {"type": "no_sharia", "value": -0.5}]';

-- ====================================================================
-- 8. AFFILIATE_CLICKS — click tracking with PII hashing + 30d retention
-- ====================================================================
create table affiliate_clicks (
  -- This UUID becomes sub_id passed to broker for postback matching
  id uuid primary key default gen_random_uuid(),
  broker_id uuid not null references brokers(id),
  source_path text,
  country_code text,
  browser_family text,
  ip_hash text,
  referrer_domain text,
  clicked_at timestamptz not null default now()
);

create index affiliate_clicks_broker_idx on affiliate_clicks (broker_id, clicked_at desc);
create index affiliate_clicks_retention_idx on affiliate_clicks (clicked_at);

comment on table affiliate_clicks is 'GDPR/PDPA-compliant click tracking. ip_hash = SHA-256(IP + daily_salt). browser_family = "Chrome"/"Firefox" (no version). 30-day retention enforced via scheduled job.';

-- ====================================================================
-- 9. AFFILIATE_CONVERSIONS — postback conversion events
-- ====================================================================
create table affiliate_conversions (
  id uuid primary key default gen_random_uuid(),
  click_id uuid references affiliate_clicks(id) on delete set null,
  broker_id uuid not null references brokers(id),
  event_type text not null check (event_type in ('register', 'first_deposit', 'qualified', 'commission_paid')),
  deposit_amount numeric(12,2),
  commission_amount numeric(12,2),
  currency text default 'USD',
  postback_received_at timestamptz not null default now(),
  broker_user_id text,
  notes text
);

create index affiliate_conversions_click_idx on affiliate_conversions (click_id);
create index affiliate_conversions_broker_event_idx on affiliate_conversions (broker_id, event_type, postback_received_at desc);

comment on column affiliate_conversions.click_id is 'Nullable because click row may have been retention-deleted (>30d) by the time broker postback arrives. Conversion still preserved.';

-- ====================================================================
-- 10. ROW LEVEL SECURITY
-- ====================================================================

-- Public read for content tables (rendered via SSG/ISR — Vercel anon key)
alter table regulators enable row level security;
alter table brokers enable row level security;
alter table broker_licenses enable row level security;
alter table broker_warnings enable row level security;
alter table methodology_versions enable row level security;
alter table broker_scores enable row level security;
alter table broker_geo_scores enable row level security;

create policy "public_read_regulators" on regulators for select using (true);
create policy "public_read_brokers" on brokers for select using (status != 'closed');
create policy "public_read_broker_licenses" on broker_licenses for select using (true);
create policy "public_read_broker_warnings" on broker_warnings for select using (true);
create policy "public_read_methodology" on methodology_versions for select using (true);
create policy "public_read_broker_scores" on broker_scores for select using (true);
create policy "public_read_broker_geo_scores" on broker_geo_scores for select using (true);

-- Authenticated write for editor (you, via Supabase Studio or admin UI later):
-- Default Supabase: only service_role can INSERT/UPDATE without explicit policies.
-- Editor uses service_role key from server actions. No public write needed.

-- Click tracking: anon can INSERT (the public click endpoint), no public read
alter table affiliate_clicks enable row level security;
create policy "public_insert_clicks" on affiliate_clicks for insert with check (true);
-- No public select policy → only service_role can read clicks (admin only)

-- Conversions: only service role (broker postback endpoint) can write
alter table affiliate_conversions enable row level security;
-- No public policies → only service_role access

-- ====================================================================
-- 11. SEED methodology v1.0
-- ====================================================================
insert into methodology_versions (version, published_at, weights, notes) values (
  'v1.0',
  '2026-05-09',
  '{
    "best_regulated": {
      "regulation": 0.40,
      "withdrawal": 0.15,
      "platform": 0.15,
      "support": 0.10,
      "payout": 0.10,
      "fees": 0.05,
      "education": 0.05
    },
    "best_for_beginners": {
      "min_deposit": 0.20,
      "platform": 0.20,
      "demo": 0.15,
      "withdrawal": 0.15,
      "education": 0.15,
      "payout": 0.10,
      "regulation_transparency": 0.05
    }
  }'::jsonb,
  'Initial publication. Two ranking systems. Per-geo modifiers handled in broker_geo_scores.'
);

-- ====================================================================
-- 12. SEED minimum regulators (for reference; expand as needed)
-- ====================================================================
insert into regulators (code, name, country_code, tier, website_url, register_url) values
  ('fca',      'Financial Conduct Authority',           'GB', 'tier-1',             'https://www.fca.org.uk',     'https://register.fca.org.uk/s/'),
  ('cysec',    'Cyprus Securities and Exchange Commission', 'CY', 'tier-1',         'https://www.cysec.gov.cy',   'https://www.cysec.gov.cy/en-GB/entities/'),
  ('asic',     'Australian Securities and Investments Commission', 'AU', 'tier-1', 'https://asic.gov.au',        'https://connectonline.asic.gov.au'),
  ('cftc',     'Commodity Futures Trading Commission',  'US', 'tier-1',             'https://www.cftc.gov',       'https://sirt.cftc.gov'),
  ('svg-fsa',  'Saint Vincent and the Grenadines FSA',  'VC', 'offshore',           'https://svgfsa.com',         null),
  ('mwali',    'Mwali International Services Authority', 'KM', 'offshore',          null,                          null),
  ('vfsc',     'Vanuatu Financial Services Commission', 'VU', 'offshore',           'https://www.vfsc.vu',        null),
  ('rbi',      'Reserve Bank of India (Alert List)',    'IN', 'warning-list-only',  'https://rbi.org.in',         'https://rbi.org.in/Scripts/Alert_list.aspx'),
  ('bappebti', 'Indonesia Commodity Futures Trading Regulatory Agency', 'ID', 'warning-list-only', 'https://www.bappebti.go.id', null),
  ('secp',     'Securities and Exchange Commission of Pakistan', 'PK', 'warning-list-only', 'https://www.secp.gov.pk', null),
  ('esma',     'European Securities and Markets Authority', 'EU', 'warning-list-only', 'https://www.esma.europa.eu', null);

-- ====================================================================
-- 13. SEED initial brokers (3 MVP)
-- ====================================================================
insert into brokers (slug, name, website_url, affiliate_base_url, year_founded, hq_country_code, status) values
  ('pocket-option', 'Pocket Option', 'https://pocketoption.com', 'https://pocketoption.com/?utm_source=BBH&sub_id={CLICK_ID}', 2017, 'KM', 'active'),
  ('quotex',        'Quotex',        'https://quotex.io',        'https://quotex.io/?utm_source=BBH&sub_id={CLICK_ID}',        2020, 'VC', 'active'),
  ('iq-option',     'IQ Option',     'https://iqoption.com',     'https://iqoption.com/?utm_source=BBH&sub_id={CLICK_ID}',     2013, 'CY', 'active');

-- ====================================================================
-- 14. PG_CRON retention job (clicks > 30 days)
-- ====================================================================
-- Run daily at 03:00 UTC. Requires pg_cron extension enabled in Supabase project.
-- (Supabase enables pg_cron via dashboard: Database > Extensions > pg_cron)
--
-- After enabling extension, run:
-- select cron.schedule(
--   'delete_old_affiliate_clicks',
--   '0 3 * * *',
--   $$ delete from affiliate_clicks where clicked_at < now() - interval '30 days' $$
-- );
