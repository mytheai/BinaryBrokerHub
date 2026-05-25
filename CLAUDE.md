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
File: `src/lib/affiliateLinks.ts` — currently using official URLs (no affiliate IDs yet, pending broker approval).

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

## Rules
- All pages are client components ('use client') with SSG via generateStaticParams
- Scores and rankings must be consistent across: Header, Homepage, Compare, BrokerCard, individual review pages
- Never expose API keys or affiliate tracking IDs in public code
- Risk disclaimers required on every page with trading CTAs
