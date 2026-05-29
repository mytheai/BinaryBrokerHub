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

### Completed (Batch 1)
1. **Homepage Risk Disclaimer** — YMYL compliance, links to /methodology + affiliate disclosure
2. **Payout claims standardized** — Homepage table "Max Payout" → "Peak Payout*" (tested ranges) with footnote
3. **Regulation cross-links** — All 7 broker reviews link to `/scams` + `/methodology`
4. **FAQ inline (3 primary brokers)** — PO, Quotex, IQ Option: 6-item accordion FAQ + faqSchema (3→6)
5. **Blog expansion** — Trading guide + Best brokers: +3,000 words (Math Behind Payouts, Trading Psychology, Regulation Tiers, Red Flags)
6. **RSS Feed** — `/feed.xml` route, 20 blog posts, RSS 2.0
7. **X/Twitter Bot** — Auto-post 3x/week, 50-tweet pool, OAuth 1.0a, Vercel Cron
8. **Affiliate links LIVE** — Pocket Option + Quotex tracking links site-wide
9. **Favicon redesign** — Emerald "B" + upward trading arrow

### Completed (Batch 2)
10. **FAQ inline (4 secondary brokers)** — Deriv, Olymp Trade, Binomo, ExpertOption: 6-item accordion + faqSchema (3→6)
11. **Payout standardized ALL 7 broker Quick Info boxes** — "Max. Payout" → "Peak Payout" tested ranges
12. **Payout standardized ALL 5 broker comparison tables** — Same change inside broker review pages
13. **Geo pages audit + fix** — India, Nigeria, Philippines: payout tables → tested ranges. All 5 geo pages: /scams + /methodology cross-links added
14. **Security: .gitignore** — Added API Keys*, *.keys, *.secret patterns to prevent credential commits

### Completed (Batch 3)
15. **Compare pages payout standardized** — All 7 compare files (6 H2H + index): "Max Payout" → "Peak Payout" tested ranges. 0 instances of "Max Payout" remain site-wide.

### Key Decisions & Rationale
- **Peak payout (tested) over max payout (advertised)**: USP "trung thực". Standardized across ALL pages site-wide
- **X only, skip Facebook/Instagram**: Meta bans BO content → page deletion risk
- **50 pre-written tweets, not AI-generated**: Avoids USP conflict + platform suppression
- **3x/week posting, not daily**: Brand presence goal, reduces spam detection risk
- **withUtm() skip logic**: PO link already has UTM → auto-detect and skip

### Next Session Priorities
1. **E-E-A-T: Strengthen About page** — Add team credentials, editorial process, testing transparency
2. **Expand blog posts** — Strategy guides and broker-specific posts to 4,500+ words
3. **Check Search Console** — Verify indexed page count, crawl errors, organic impressions
4. **Apply remaining affiliate programs** — IQ Option, Deriv, Olymp Trade, Binomo, ExpertOption

## Rules
- All pages are client components ('use client') with SSG via generateStaticParams
- Scores and rankings must be consistent across: Header, Homepage, Compare, BrokerCard, individual review pages
- Never expose API keys or affiliate tracking IDs in public code
- Risk disclaimers required on every page with trading CTAs
- Payout claims must use tested peak ranges, not advertised maximums
- All broker review regulation sections must link to /scams + /methodology
