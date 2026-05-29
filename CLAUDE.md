# BinaryBrokerHub — Project Guide

## What This Is
Affiliate review site for binary options brokers. Next.js 15 + App Router + next-intl (en/ru/es) + Tailwind CSS.
Hosted on Vercel, domain: binarybrokerhub.com (DNS via Hostinger).

## Broker Priority
1. **Pocket Option** (9.5/10) — Primary push
2. **Quotex** (9.4/10) — Primary push
3. **IQ Option** (9.2/10) — Secondary
4. **Deriv** (9.0/10) — Secondary (trust anchor)
5. **Olymp Trade** (8.6/10) — Secondary
6. **Binomo** (8.2/10) — Secondary
7. **ExpertOption** (7.8/10) — Secondary

CTA priority: Pocket Option > Quotex > others. Always push PO and Quotex in recommendations.

## Affiliate Links
File: `src/lib/affiliateLinks.ts` — centralized config, all CTAs go through `CtaButton` component.
- **Pocket Option**: LIVE — `u3.shortink.io` tracking (campaign 847168, promo WELCOME50)
- **Quotex**: LIVE — `broker-qx.pro` tracking (lid 2135323)
- **IQ Option / Deriv / Olymp Trade / Binomo / ExpertOption**: Still using official URLs (pending approval)
- `withUtm()` helper auto-skips URLs that already contain UTM params

## Available Slash Commands
- `/status` — Full project health check (build, pages, git, SEO)
- `/seo-audit` — SEO meta tags, sitemap, robots, verification
- `/content-map` — Complete content inventory with word counts
- `/deploy` — Build + commit + push to Vercel
- `/live-check` — Verify live site via WebFetch
- `/keyword-gaps` — Compare keyword strategy vs existing content

## Start of Session
Run `/status` first to get current project state before doing any work.

## Key Directories
- `src/app/[locale]/` — All pages (broker reviews, blog, tools)
- `src/components/` — Header, Footer, BrokerCard, CtaButton, TrustBanner
- `src/lib/affiliateLinks.ts` — Affiliate URLs + UTM helper
- `src/messages/{en,ru,es}/` — i18n translations
- `research/` — Keyword strategy docs

## Social & Distribution (added 2026-05-29)
- **X (Twitter)**: @BinaryBrokerHub — active, bot auto-posts Mon/Wed/Fri 14:00 UTC
- **RSS Feed**: `binarybrokerhub.com/feed.xml` — 20 blog posts, auto-generated
- **Facebook/Instagram**: SKIPPED — Meta bans BO content (Policy 4.8), high risk of page deletion
- **Bot code**: `src/lib/socialContent.ts` (50 tweet pool) + `src/app/api/social/tweet/route.ts` (OAuth 1.0a)
- **Cron**: `vercel.json` — schedule `0 14 * * 1,3,5`
- **Env vars** (Vercel Production): TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET, CRON_SECRET

## Session Log — 2026-05-29

### Completed
1. **Homepage Risk Disclaimer** — YMYL compliance, links to /methodology + affiliate disclosure
2. **Payout claims standardized** — Homepage table changed from "Max Payout" (advertised) to "Peak Payout*" (tested ranges) with footnote. E.g., PO "92%" → "89–92%", Quotex "98%" → "90–95%"
3. **Regulation cross-links** — All 7 broker reviews now link to `/scams` + `/methodology` in regulation sections
4. **FAQ inline sections** — PO, Quotex, IQ Option: 6-item accordion FAQ + faqSchema updated (3→6 items each)
5. **Blog expansion** — Trading guide: +2 sections ("Math Behind Payouts" + "Trading Psychology", ~1,500 words). Best brokers: +2 sections ("Regulation Tiers" + "Red Flags", ~1,500 words)
6. **RSS Feed** — `/feed.xml` route handler, 20 blog posts, RSS 2.0
7. **X/Twitter Bot** — Auto-post 3x/week from 50-tweet content pool, OAuth 1.0a, Vercel Cron
8. **Affiliate links LIVE** — Pocket Option + Quotex tracking links integrated site-wide
9. **Favicon redesign** — Emerald "B" + upward trading arrow, gradient dark background

### Key Decisions & Rationale
- **Peak payout (tested) over max payout (advertised)**: Aligns with USP "trung thực". IQ Option already used honest format; standardized across all brokers
- **X only, skip Facebook/Instagram**: Meta bans BO content → page deletion risk. X is most tolerant for finance/trading niche
- **50 pre-written tweets, not AI-generated**: Avoids USP conflict + platform suppression of bot-generated content
- **3x/week posting, not daily**: Brand presence goal doesn't need daily volume; reduces spam detection risk
- **withUtm() skip logic**: PO affiliate link already contains UTM params → helper now auto-detects and skips to avoid duplication

### Next Session Priorities
1. **Regenerate X API keys** — Keys were exposed in chat, must regenerate on developer.x.com then update Vercel env vars
2. **Check Search Console** — Verify indexed page count, crawl errors, and initial organic impressions
3. **Apply remaining affiliate programs** — IQ Option, Deriv, Olymp Trade, Binomo, ExpertOption
4. **Content depth** — Add FAQ inline to remaining 4 broker reviews (Deriv, Olymp Trade, Binomo, ExpertOption)
5. **Expand more blog posts** — Strategy guides and broker-specific posts to 4,500+ words
6. **Geo hub pages** — India, Pakistan, Nigeria content quality check (planned in MVP but not audited this session)
7. **E-E-A-T signals** — Consider adding author bio, "About Us" page depth, expert reviewer recruitment

## Rules
- All pages are client components ('use client') with SSG via generateStaticParams
- Scores and rankings must be consistent across: Header, Homepage, Compare, BrokerCard, individual review pages
- Never expose API keys or affiliate tracking IDs in public code
- Risk disclaimers required on every page with trading CTAs
- Payout claims must use tested peak ranges, not advertised maximums
- All broker review regulation sections must link to /scams + /methodology
