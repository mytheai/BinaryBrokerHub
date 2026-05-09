// One-shot migration runner. Reads .env.local via --env-file flag.
// Run: node --env-file=.env.local scripts/apply-migration.mjs

import pg from 'pg';
import { readFileSync } from 'node:fs';

function parseDbUrl(url) {
  const i = url.indexOf('://');
  const after = url.slice(i + 3);
  const atIdx = after.lastIndexOf('@');
  const auth = after.slice(0, atIdx);
  const rest = after.slice(atIdx + 1);
  const colon = auth.indexOf(':');
  const user = auth.slice(0, colon);
  const password = decodeURIComponent(auth.slice(colon + 1));
  const slash = rest.indexOf('/');
  const hostPort = rest.slice(0, slash);
  const database = rest.slice(slash + 1).split('?')[0];
  const [host, port] = hostPort.split(':');
  return { host, port: Number(port), user, password, database };
}

const cfg = parseDbUrl(process.env.DATABASE_URL);
console.log(`Connecting to ${cfg.host}:${cfg.port} as ${cfg.user}...`);

const client = new pg.Client({ ...cfg, ssl: { rejectUnauthorized: false } });
await client.connect();
console.log('Connected.\n');

const sqlPath = './supabase/migrations/20260509000000_initial_schema.sql';
const sql = readFileSync(sqlPath, 'utf8');
console.log(`Applying migration: ${sqlPath} (${sql.length} bytes)...`);

try {
  await client.query(sql);
  console.log('Migration applied successfully.\n');
} catch (e) {
  console.error('Migration failed:', e.message);
  await client.end();
  process.exit(1);
}

// Schedule pg_cron retention job if extension is enabled
const ext = await client.query(
  "SELECT extname FROM pg_extension WHERE extname = 'pg_cron'"
);
if (ext.rows.length > 0) {
  console.log('pg_cron extension detected. Scheduling retention job...');
  try {
    await client.query(`
      select cron.schedule(
        'delete_old_affiliate_clicks',
        '0 3 * * *',
        $$ delete from affiliate_clicks where clicked_at < now() - interval '30 days' $$
      )
    `);
    console.log('Retention job scheduled (daily 03:00 UTC).\n');
  } catch (e) {
    if (e.message.includes('already exists') || e.message.includes('duplicate')) {
      console.log('Retention job already scheduled (idempotent).\n');
    } else {
      console.warn('Could not schedule cron job:', e.message, '\n');
    }
  }
} else {
  console.warn(
    'pg_cron NOT enabled. Enable in Dashboard > Database > Extensions, then re-run this script.\n'
  );
}

// Verify
const v = await client.query(`
  select
    (select count(*) from regulators)::int as regulators,
    (select count(*) from brokers)::int as brokers,
    (select count(*) from methodology_versions)::int as methodology_versions,
    (select count(*) from broker_scores)::int as broker_scores
`);
console.log('Verification (row counts):');
console.log(`  regulators:           ${v.rows[0].regulators}  (expected 11)`);
console.log(`  brokers:              ${v.rows[0].brokers}  (expected 3)`);
console.log(`  methodology_versions: ${v.rows[0].methodology_versions}  (expected 1)`);
console.log(`  broker_scores:        ${v.rows[0].broker_scores}  (expected 0 — populated later when scoring)`);

await client.end();
console.log('\nDone.');
