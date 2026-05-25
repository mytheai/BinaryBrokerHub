'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function DerivPage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Broker Reviews', href: undefined }, { label: 'Deriv' }]} />
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent" />
        <div className="relative section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="badge-green">Score: 9.0/10</span>
              <span className="badge-gold">Most Trusted — 26 Years</span>
              <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">Last Updated: May 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Deriv Review 2026
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
              Formerly Binary.com (est. 1999), Deriv is the longest-operating binary options broker in the world with
              MFSA Malta (Tier-1) regulation. Home of unique Synthetic Indices tradeable 24/7 — even on weekends.
              Unlike newer brokers such as{' '}
              <Link href={`/${locale}/pocket-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option</Link> or{' '}
              <Link href={`/${locale}/quotex`} className="text-emerald-400 underline hover:text-emerald-300">Quotex</Link>,
              Deriv brings over two decades of operational history and institutional-grade regulation.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Deriv.com Limited (Guernsey, reg. 71479) &bull; MFSA Malta IS/70156 &bull; Labuan FSA &bull; VFSC Vanuatu &bull; Est. 1999
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CtaButton broker="deriv" label="Open Deriv Account" campaign="deriv_hero" size="lg" />
              <CtaButton broker="deriv" type="demo" label="Try Free Demo ($10K)" variant="secondary" campaign="deriv_hero" size="lg" />
            </div>
            <p className="text-xs text-gray-600 mt-3">Your capital is at risk. Only trade with money you can afford to lose.</p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="section-container pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Min. Deposit', value: '$5' },
            { label: 'Max. Payout', value: 'Up to 95%' },
            { label: 'Years Operating', value: '26 years' },
            { label: 'Regulation', value: 'MFSA (Tier 1)' },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <div className="text-xl md:text-2xl font-bold text-emerald-400">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Verdict */}
      <section className="section-container pb-16">
        <div className="glass-card p-8 md:p-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Quick Verdict
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Deriv is the <strong className="text-white">most trustworthy broker on this list</strong>, period. Operating since 1999 with an
            <strong className="text-white"> MFSA Malta Tier-1 license</strong>, 3M+ active traders, and the cleanest regulatory record in the industry.
            No other binary options broker comes close on trust and longevity — not{' '}
            <Link href={`/${locale}/pocket-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option</Link>,
            not <Link href={`/${locale}/quotex`} className="text-emerald-400 underline hover:text-emerald-300">Quotex</Link>,
            and not <Link href={`/${locale}/iq-option`} className="text-emerald-400 underline hover:text-emerald-300">IQ Option</Link>.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The unique selling point is <strong className="text-white">Synthetic Indices</strong> — proprietary instruments tradeable 24/7/365,
            even weekends and holidays. The trade-off: the platform is <strong className="text-amber-300">more complex</strong> than competitors,
            with multiple interfaces (DTrader, SmartTrader, DBot, MT5) that can overwhelm beginners. If you value trust and unique products
            over simplicity, Deriv is the pick. For a full breakdown of how Deriv stacks up, see our{' '}
            <Link href={`/${locale}/compare`} className="text-emerald-400 underline hover:text-emerald-300">broker comparison page</Link>.
          </p>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Pros & Cons</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-emerald-400 mb-4 text-lg">Strengths</h3>
            <ul className="space-y-3">
              {[
                '26 years of continuous operation (since 1999) — longest in the industry',
                'MFSA Malta Tier-1 regulation + Labuan, VFSC, BVI multi-jurisdiction',
                'Synthetic Indices — unique instruments tradeable 24/7, even weekends',
                'Lowest min deposit: just $5',
                'Multiple platform choices: DTrader, SmartTrader, DBot, DerivX, MT5',
                'DBot — visual automated trading builder (no coding needed)',
                '30+ fee-free deposit/withdrawal methods',
                'Won "Most Trusted Binary Broker 2025" award',
                'Cleanest regulatory record — no major warnings or scandals',
              ].map((p) => (
                <li key={p} className="flex gap-2 text-sm text-gray-300">
                  <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-red-400 mb-4 text-lg">Weaknesses</h3>
            <ul className="space-y-3">
              {[
                'Multiple platforms can be confusing for beginners',
                'No copy/social trading feature',
                'Customer support limited on weekends',
                'Less "flashy" UI compared to Quotex/Pocket Option',
                'Binary options via offshore entities only (Vanuatu/BVI/SVG)',
                'Synthetic Indices are proprietary — can\u2019t verify pricing independently',
              ].map((c) => (
                <li key={c} className="flex gap-2 text-sm text-gray-300">
                  <span className="text-red-400 flex-shrink-0 mt-0.5">✗</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Rating Breakdown</h2>
        <div className="glass-card p-6">
          {[
            { category: 'Trust & Regulation', score: 9.8, note: 'MFSA Tier-1 + 26 years + cleanest record in BO industry' },
            { category: 'Platform & Technology', score: 8.5, note: 'Powerful but complex. Multiple interfaces for different needs' },
            { category: 'Unique Products', score: 9.5, note: 'Synthetic Indices are one-of-a-kind. 24/7 trading' },
            { category: 'Payouts', score: 8.5, note: 'Up to 95%, competitive but not the absolute highest' },
            { category: 'Deposits & Withdrawals', score: 9.0, note: '$5 min, 30+ methods, no fees. Excellent' },
            { category: 'Asset Variety', score: 8.5, note: '100+ real-market instruments + synthetic indices' },
            { category: 'Customer Support', score: 7.5, note: 'Live chat + email. Limited weekend support' },
            { category: 'Automation (DBot)', score: 9.0, note: 'Visual bot builder — unique feature, no coding needed' },
          ].map((r) => (
            <div key={r.category} className="flex items-center gap-4 py-3 border-b border-white/[0.04] last:border-0">
              <div className="w-48 text-sm text-gray-300 flex-shrink-0">{r.category}</div>
              <div className="flex-1">
                <div className="w-full bg-white/[0.05] rounded-full h-2.5">
                  <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: `${r.score * 10}%` }} />
                </div>
              </div>
              <div className="w-12 text-right text-sm font-bold text-white">{r.score}</div>
              <div className="w-72 text-xs text-gray-500 hidden lg:block">{r.note}</div>
            </div>
          ))}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <span className="font-bold text-lg">Overall Score</span>
            <span className="text-2xl font-extrabold text-emerald-400">9.0 / 10</span>
          </div>
        </div>
      </section>

      {/* Payout Analysis */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-4">Payout Analysis</h2>
        <p className="text-gray-400 text-sm mb-10 max-w-3xl">
          Deriv&apos;s payouts vary significantly by asset class, trade type, and expiry duration. While{' '}
          <Link href={`/${locale}/pocket-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option</Link>{' '}
          advertises up to 92% and{' '}
          <Link href={`/${locale}/quotex`} className="text-emerald-400 underline hover:text-emerald-300">Quotex</Link>{' '}
          up to 98%, Deriv&apos;s payouts reach up to 95% on Synthetic Indices — with the advantage of 24/7 availability.
        </p>
        <div className="glass-card overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
              <div>Asset Class</div>
              <div className="text-center">Rise/Fall</div>
              <div className="text-center">Higher/Lower</div>
              <div className="text-center">Touch/No Touch</div>
            </div>
            {[
              { asset: 'Volatility Indices', riseFall: '80–95%', higherLower: '70–90%', touch: '75–95%' },
              { asset: 'Crash/Boom', riseFall: '75–90%', higherLower: '65–85%', touch: 'N/A' },
              { asset: 'Forex Majors', riseFall: '70–88%', higherLower: '65–82%', touch: '70–90%' },
              { asset: 'Forex Minors', riseFall: '65–82%', higherLower: '60–78%', touch: '65–85%' },
              { asset: 'Commodities', riseFall: '65–85%', higherLower: '60–80%', touch: '65–85%' },
              { asset: 'Stock Indices', riseFall: '60–80%', higherLower: '55–75%', touch: '60–80%' },
              { asset: 'Step Index', riseFall: '85–95%', higherLower: 'N/A', touch: 'N/A' },
            ].map((row, i) => (
              <div key={row.asset} className={`grid grid-cols-4 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                <div className="text-gray-300 font-medium">{row.asset}</div>
                <div className="text-center text-white">{row.riseFall}</div>
                <div className="text-center text-gray-400">{row.higherLower}</div>
                <div className="text-center text-gray-400">{row.touch}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 border border-amber-500/20 rounded-lg p-4">
          <p className="text-xs text-gray-400">
            <strong className="text-amber-400">Important:</strong> Payouts are dynamic and fluctuate based on market conditions,
            time of day, and expiry duration. Shorter expiries (ticks, 1 minute) tend to offer higher payouts than longer durations.
            Synthetic Indices generally provide the most consistent payouts since they are not affected by real-market liquidity.
          </p>
        </div>
      </section>

      {/* Synthetic Indices */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Synthetic Indices — Deriv&apos;s Killer Feature</h2>
        <div className="glass-card p-6">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Synthetic Indices are Deriv&apos;s proprietary instruments that simulate real market conditions using a cryptographically
            secure random number generator. They&apos;re available <strong className="text-white">24 hours a day, 7 days a week, 365 days a year</strong> —
            including weekends and holidays when real markets are closed. This is a feature no other broker offers — not{' '}
            <Link href={`/${locale}/iq-option`} className="text-emerald-400 underline hover:text-emerald-300">IQ Option</Link>,
            not <Link href={`/${locale}/pocket-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option</Link>,
            and not <Link href={`/${locale}/quotex`} className="text-emerald-400 underline hover:text-emerald-300">Quotex</Link>.
            For a deeper exploration, read our{' '}
            <Link href={`/${locale}/blog/deriv-synthetic-indices-guide`} className="text-emerald-400 underline hover:text-emerald-300">
              complete Synthetic Indices guide
            </Link>.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {[
              { type: 'Volatility Indices', desc: 'V10, V25, V50, V75, V100 — constant volatility levels for consistent trading conditions' },
              { type: 'Crash/Boom', desc: 'Crash 300/500/1000, Boom 300/500/1000 — price drops/spikes at specific frequencies' },
              { type: 'Step Index', desc: 'Equal probability of up/down with fixed step size. Simplest synthetic to understand' },
              { type: 'Range Break', desc: 'Price fluctuates within a range and occasionally breaks out. Trade the breakouts' },
              { type: 'Jump Indices', desc: 'J10, J25, J50, J75, J100 — volatility with sudden jumps at defined probabilities' },
              { type: 'Drift Switch', desc: 'Market switches between bullish and bearish drift at regular intervals' },
            ].map((s) => (
              <div key={s.type} className="bg-white/[0.03] rounded-lg p-4">
                <h4 className="font-semibold text-emerald-400 text-sm">{s.type}</h4>
                <p className="text-xs text-gray-400 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border border-amber-500/20 rounded-lg p-4">
            <p className="text-xs text-gray-400">
              <strong className="text-amber-400">Note:</strong> Synthetic Indices are proprietary to Deriv — pricing is generated algorithmically,
              not from real market data. While audited for fairness, you cannot independently verify prices against external feeds.
              This is a trade-off for 24/7 availability.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Trading Platforms</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'DTrader', desc: 'Main digital options trading. Simple interface for rise/fall, higher/lower, touch/no-touch, and more.', best: 'Binary options' },
            { name: 'SmartTrader', desc: 'Classic Binary.com interface. Customizable parameters, multiple trade types, advanced options.', best: 'Power users' },
            { name: 'DBot', desc: 'Visual drag-and-drop bot builder. Create automated trading strategies without coding.', best: 'Automation' },
            { name: 'DerivX', desc: 'Multi-asset CFD platform. Custom watchlists, advanced charting, flexible leverage.', best: 'CFD trading' },
            { name: 'MT5', desc: 'Industry-standard MetaTrader 5. Expert Advisors, advanced analysis, algo trading.', best: 'Forex/CFDs' },
            { name: 'Deriv GO', desc: 'Mobile-first multiplier trading app. Simplified interface for on-the-go trading.', best: 'Mobile traders' },
          ].map((p) => (
            <div key={p.name} className="glass-card p-5">
              <h3 className="font-semibold text-white mb-1">{p.name}</h3>
              <span className="text-xs text-emerald-400">Best for: {p.best}</span>
              <p className="text-xs text-gray-400 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DBot — Automated Trading Deep Dive */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-4">DBot — Automated Trading</h2>
        <p className="text-gray-400 text-sm mb-10 max-w-3xl">
          DBot is Deriv&apos;s visual bot builder that lets you create fully automated trading strategies without writing a single line of code.
          This is a genuinely unique feature — no other binary options broker offers anything comparable. While{' '}
          <Link href={`/${locale}/iq-option`} className="text-emerald-400 underline hover:text-emerald-300">IQ Option</Link> has removed
          most automation features and{' '}
          <Link href={`/${locale}/pocket-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option</Link>{' '}
          offers copy trading instead, Deriv gives you full control over strategy logic.
        </p>
        <div className="glass-card p-6">
          <h3 className="font-bold text-white mb-4 text-lg">How DBot Works</h3>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-emerald-400 text-sm mb-2">Drag-and-Drop Interface</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                DBot uses a Blockly-based visual programming environment (similar to Scratch). You drag logic blocks —
                conditions, actions, loops — onto a canvas and connect them to build your trading strategy. No coding knowledge required.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-emerald-400 text-sm mb-2">Pre-Built Strategies</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Deriv provides several ready-made bot templates including Martingale, D&apos;Alembert, and Oscar&apos;s Grind strategies.
                You can use these as-is, modify them, or build entirely custom logic from scratch.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-emerald-400 text-sm mb-2">Backtesting & Simulation</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Test your bot against historical data before risking real money. The built-in statistics panel shows profit/loss,
                number of trades, and win rate. You can also run bots on the demo account with virtual $10,000.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-emerald-400 text-sm mb-2">24/7 Synthetic Trading</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Because DBot works with Synthetic Indices, your bot can trade around the clock — weekends and holidays included.
                This means no downtime and continuous strategy execution, something impossible on real-market-only platforms.
              </p>
            </div>
          </div>
          <div className="border border-amber-500/20 rounded-lg p-4">
            <p className="text-xs text-gray-400">
              <strong className="text-amber-400">Warning:</strong> Automated trading does not guarantee profits. Strategies like Martingale
              can lead to rapid account depletion during losing streaks. Always test thoroughly on a demo account first and set strict
              stop-loss limits. Past performance of any bot does not guarantee future results.
            </p>
          </div>
        </div>
      </section>

      {/* Deposits & Withdrawals — Expanded */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Deposits & Withdrawals</h2>
        <div className="glass-card overflow-x-auto">
          <div className="min-w-[700px]">
            <div className="grid grid-cols-5 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
              <div>Method</div>
              <div className="text-center">Min Deposit</div>
              <div className="text-center">Deposit Speed</div>
              <div className="text-center">Withdrawal Speed</div>
              <div className="text-center">Fee</div>
            </div>
            {[
              { method: 'Visa/Mastercard', min: '$5', depositSpeed: 'Instant', withdrawSpeed: '1 business day', fee: 'Free' },
              { method: 'Skrill', min: '$5', depositSpeed: 'Instant', withdrawSpeed: '1 business day', fee: 'Free' },
              { method: 'Neteller', min: '$5', depositSpeed: 'Instant', withdrawSpeed: '1 business day', fee: 'Free' },
              { method: 'Fasapay', min: '$5', depositSpeed: 'Instant', withdrawSpeed: '1 business day', fee: 'Free' },
              { method: 'Perfect Money', min: '$5', depositSpeed: 'Instant', withdrawSpeed: '1 business day', fee: 'Free' },
              { method: 'Bitcoin (BTC)', min: '$5', depositSpeed: '10–30 min', withdrawSpeed: 'Up to 24 hrs', fee: 'Free' },
              { method: 'Ethereum (ETH)', min: '$5', depositSpeed: '5–15 min', withdrawSpeed: 'Up to 24 hrs', fee: 'Free' },
              { method: 'Tether (USDT)', min: '$5', depositSpeed: '1–10 min (TRC20)', withdrawSpeed: 'Up to 24 hrs', fee: 'Free' },
              { method: 'Bank Transfer', min: '$5', depositSpeed: '1 business day', withdrawSpeed: '1–3 business days', fee: 'Free' },
              { method: 'UPI (India)', min: '$5', depositSpeed: 'Instant', withdrawSpeed: '1 business day', fee: 'Free' },
              { method: 'AstroPay', min: '$5', depositSpeed: 'Instant', withdrawSpeed: '1 business day', fee: 'Free' },
              { method: 'Jeton', min: '$5', depositSpeed: 'Instant', withdrawSpeed: '1 business day', fee: 'Free' },
            ].map((d, i) => (
              <div key={i} className={`grid grid-cols-5 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                <div className="text-gray-300 font-medium">{d.method}</div>
                <div className="text-center text-white">{d.min}</div>
                <div className="text-center text-emerald-400">{d.depositSpeed}</div>
                <div className="text-center text-gray-400">{d.withdrawSpeed}</div>
                <div className="text-center text-emerald-400">{d.fee}</div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          * All deposits and withdrawals are fee-free from Deriv&apos;s side. 30+ payment methods available depending on region.
          Crypto withdrawal times depend on network congestion. Bank transfers may take longer in certain countries.
          Withdrawal processing is handled during business hours (Mon–Fri).
        </p>
      </section>

      {/* Customer Support */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Customer Support</h2>
        <div className="glass-card p-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white/[0.03] rounded-lg p-4">
              <h4 className="font-semibold text-emerald-400 text-sm mb-2">Live Chat</h4>
              <p className="text-xs text-gray-400">Available 24/5 (Monday–Friday). Average response time: under 2 minutes. Accessible directly from the trading platform and website.</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4">
              <h4 className="font-semibold text-emerald-400 text-sm mb-2">Email Support</h4>
              <p className="text-xs text-gray-400">Available 24/7 via support@deriv.com. Response time: typically 4–12 hours for general queries, faster for account-critical issues.</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4">
              <h4 className="font-semibold text-emerald-400 text-sm mb-2">Help Center</h4>
              <p className="text-xs text-gray-400">Comprehensive self-service knowledge base with 200+ articles, video tutorials, and step-by-step guides covering all platforms.</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4">
              <h4 className="font-semibold text-emerald-400 text-sm mb-2">Community Forum</h4>
              <p className="text-xs text-gray-400">Active community forum where traders share DBot strategies, discuss Synthetic Indices, and help each other troubleshoot issues.</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4">
              <h4 className="font-semibold text-emerald-400 text-sm mb-2">WhatsApp</h4>
              <p className="text-xs text-gray-400">Available in select regions. Convenient for quick questions and account verifications. Response times similar to live chat.</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4">
              <h4 className="font-semibold text-amber-400 text-sm mb-2">Weekend Limitation</h4>
              <p className="text-xs text-gray-400">Live chat is unavailable on weekends. Only email support and the Help Center are accessible Saturday–Sunday. This is a notable weakness since Synthetic Indices trade 24/7.</p>
            </div>
          </div>
          <div className="border border-amber-500/20 rounded-lg p-4">
            <p className="text-xs text-gray-400">
              <strong className="text-amber-400">Weekend gap:</strong> This is Deriv&apos;s biggest support weakness. You can trade Synthetic Indices
              on weekends, but if you encounter an issue, live chat won&apos;t be available until Monday. Email may take 12–24 hours on weekends.
              By comparison,{' '}
              <Link href={`/${locale}/pocket-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option</Link>{' '}
              offers 24/7 live chat support.
            </p>
          </div>
        </div>
      </section>

      {/* Regulation */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Regulation & Licenses</h2>
        <div className="glass-card p-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { regulator: 'MFSA Malta', license: 'IS/70156', tier: 'Tier 1', entity: 'Deriv Investments (Europe) Ltd', color: 'text-emerald-400' },
              { regulator: 'Labuan FSA', license: 'MB/18/0024', tier: 'Tier 3', entity: 'Deriv (FX) Ltd', color: 'text-blue-400' },
              { regulator: 'VFSC Vanuatu', license: '014556', tier: 'Offshore', entity: 'Deriv (V) Ltd', color: 'text-amber-400' },
              { regulator: 'BVI FSC', license: 'SIBA/L/18/1114', tier: 'Offshore', entity: 'Deriv (BVI) Ltd', color: 'text-amber-400' },
            ].map((r) => (
              <div key={r.regulator} className="bg-white/[0.03] rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`font-semibold ${r.color}`}>{r.regulator}</h4>
                  <span className="text-xs bg-white/[0.05] px-2 py-0.5 rounded text-gray-400">{r.tier}</span>
                </div>
                <p className="text-xs text-gray-400">License: {r.license}</p>
                <p className="text-xs text-gray-400">{r.entity}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Deriv is the only binary options broker with a Tier-1 MFSA Malta license.
            Combined with 26 years of operation, this makes it the most trustworthy choice in the industry.
            For more on how regulation impacts your safety, read our{' '}
            <Link href={`/${locale}/blog/binary-options-regulation`} className="text-emerald-400 underline hover:text-emerald-300">
              binary options regulation guide
            </Link>.
          </p>
        </div>
      </section>

      {/* Deriv vs Competitors */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-4">Deriv vs Competitors</h2>
        <p className="text-gray-400 text-sm mb-10 max-w-3xl">
          How does Deriv stack up against the top binary options brokers? Here&apos;s a side-by-side comparison.
          For a more detailed analysis, visit our{' '}
          <Link href={`/${locale}/compare/iq-option-vs-deriv`} className="text-emerald-400 underline hover:text-emerald-300">
            IQ Option vs Deriv comparison
          </Link>{' '}or the full{' '}
          <Link href={`/${locale}/compare`} className="text-emerald-400 underline hover:text-emerald-300">broker comparison page</Link>.
        </p>
        <div className="glass-card overflow-hidden overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                <th className="text-left p-3 text-gray-400 font-semibold text-xs">Feature</th>
                <th className="text-center p-3 text-emerald-400 font-semibold text-xs">Deriv</th>
                <th className="text-center p-3 text-gray-400 font-semibold text-xs">Pocket Option</th>
                <th className="text-center p-3 text-gray-400 font-semibold text-xs">Quotex</th>
                <th className="text-center p-3 text-gray-400 font-semibold text-xs">IQ Option</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Score', deriv: '9.0/10', pocket: '9.5/10', quotex: '9.4/10', iq: '9.2/10' },
                { feature: 'Founded', deriv: '1999', pocket: '2017', quotex: '2019', iq: '2013' },
                { feature: 'Top Regulation', deriv: 'MFSA (Tier 1)', pocket: 'MISA (Offshore)', quotex: 'Unregulated', iq: 'CySEC (Tier 1)' },
                { feature: 'Min Deposit', deriv: '$5', pocket: '$5', quotex: '$10', iq: '$10' },
                { feature: 'Max Payout', deriv: 'Up to 95%', pocket: 'Up to 92%', quotex: 'Up to 98%', iq: 'Up to 95%' },
                { feature: 'Demo Account', deriv: '$10,000', pocket: '$50,000', quotex: '$10,000', iq: '$10,000' },
                { feature: '24/7 Trading', deriv: 'Yes (Synthetics)', pocket: 'OTC only', quotex: 'OTC only', iq: 'No' },
                { feature: 'Automated Trading', deriv: 'DBot (visual)', pocket: 'Copy trading', quotex: 'No', iq: 'No' },
                { feature: 'Copy Trading', deriv: 'No', pocket: 'Yes', quotex: 'No', iq: 'No' },
                { feature: 'Platforms', deriv: '6 platforms', pocket: '1 platform', quotex: '1 platform', iq: '1 platform' },
                { feature: 'Weekend Support', deriv: 'Email only', pocket: '24/7 chat', quotex: 'Email only', iq: 'No' },
                { feature: 'Deposit Methods', deriv: '30+', pocket: '50+', quotex: '20+', iq: '20+' },
              ].map((row, i) => (
                <tr key={row.feature} className={`${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                  <td className="p-3 text-gray-300 font-medium">{row.feature}</td>
                  <td className="p-3 text-center text-white font-medium">{row.deriv}</td>
                  <td className="p-3 text-center text-gray-400">{row.pocket}</td>
                  <td className="p-3 text-center text-gray-400">{row.quotex}</td>
                  <td className="p-3 text-center text-gray-400">{row.iq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          * Deriv&apos;s key advantages are regulation strength, longevity, and unique product offerings.
          Its main disadvantage versus competitors is platform complexity and limited weekend support.
        </p>
      </section>

      {/* Who Is Deriv Best For? */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Who Is Deriv Best For?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-bold text-white mb-3 text-lg">Safety-First Traders</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              If your top priority is depositing money with a broker you can <strong className="text-white">actually trust</strong>,
              Deriv is the clear choice. MFSA Tier-1 regulation, 26 years of operation, no major scandals — no other binary options
              broker matches this track record. You&apos;ll sleep better at night knowing your funds are with the industry&apos;s most
              established operator.
            </p>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-bold text-white mb-3 text-lg">Automation Enthusiasts</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              If you want to build and run automated trading bots without coding, DBot is unmatched in the binary options space.
              Combined with Synthetic Indices that trade 24/7, you can run strategies around the clock. No other broker offers
              this combination of visual bot building plus always-available markets.
            </p>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl mb-3">🌙</div>
            <h3 className="font-bold text-white mb-3 text-lg">Weekend & Night Traders</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              If your schedule only allows trading on evenings and weekends, Deriv&apos;s Synthetic Indices solve the market-closed problem.
              While{' '}
              <Link href={`/${locale}/pocket-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option</Link> and{' '}
              <Link href={`/${locale}/quotex`} className="text-emerald-400 underline hover:text-emerald-300">Quotex</Link>{' '}
              offer OTC assets on weekends, Deriv&apos;s synthetics have more variety and are specifically designed for continuous trading.
            </p>
          </div>
        </div>
        <div className="glass-card p-6 mt-6">
          <h3 className="font-bold text-amber-400 mb-3 text-lg">Who Should Look Elsewhere?</h3>
          <ul className="space-y-2">
            <li className="flex gap-2 text-sm text-gray-300">
              <span className="text-amber-400 flex-shrink-0 mt-0.5">→</span>
              <span><strong className="text-white">Complete beginners</strong> who want the simplest possible interface should consider{' '}
                <Link href={`/${locale}/quotex`} className="text-emerald-400 underline hover:text-emerald-300">Quotex</Link> or{' '}
                <Link href={`/${locale}/pocket-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option</Link> first.
              </span>
            </li>
            <li className="flex gap-2 text-sm text-gray-300">
              <span className="text-amber-400 flex-shrink-0 mt-0.5">→</span>
              <span><strong className="text-white">Social/copy traders</strong> who want to follow other traders&apos; strategies should go with{' '}
                <Link href={`/${locale}/pocket-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option</Link>,
                which has a built-in copy trading feature Deriv lacks.
              </span>
            </li>
            <li className="flex gap-2 text-sm text-gray-300">
              <span className="text-amber-400 flex-shrink-0 mt-0.5">→</span>
              <span><strong className="text-white">Bonus seekers</strong> who want deposit bonuses and tournaments — Deriv doesn&apos;t offer
                promotional bonuses the way{' '}
                <Link href={`/${locale}/pocket-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option</Link> does.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="section-container py-16">
        <div className="glass-card p-8 md:p-10 border border-emerald-500/20">
          <h2 className="text-2xl font-bold mb-4">Final Verdict: 9.0/10</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Deriv is the <strong className="text-white">trust benchmark</strong> of the binary options industry. No other broker can match
            26 years of continuous operation, multi-jurisdiction regulation including Tier-1 MFSA Malta, and a spotless track record.
            The Synthetic Indices product line is genuinely innovative — 24/7 trading availability is a game-changer for traders in any timezone.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            The platform complexity is the main barrier for beginners — but that&apos;s also its strength for experienced traders who want
            depth and flexibility. If you want the <strong className="text-white">safest, most established broker</strong> in binary options,
            Deriv is the clear winner. For the highest payouts and simplest UI, consider{' '}
            <Link href={`/${locale}/quotex`} className="text-emerald-400 underline hover:text-emerald-300">Quotex</Link> or{' '}
            <Link href={`/${locale}/pocket-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option</Link> instead.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CtaButton broker="deriv" label="Open Deriv Account" campaign="deriv_verdict" />
            <CtaButton broker="deriv" type="demo" label="Try Free Demo" variant="secondary" campaign="deriv_verdict" />
          </div>
        </div>
      </section>

      {/* Related Reviews & Guides */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Related Reviews & Guides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Pocket Option Review', desc: 'Top-rated broker with 9.5/10 score, copy trading, and 50+ deposit methods.', href: `/${locale}/pocket-option` },
            { title: 'Quotex Review', desc: 'Highest payouts (up to 98%) with the cleanest, most beginner-friendly interface.', href: `/${locale}/quotex` },
            { title: 'IQ Option Review', desc: 'CySEC-regulated broker with 100M+ users and an award-winning platform.', href: `/${locale}/iq-option` },
            { title: 'IQ Option vs Deriv', desc: 'Head-to-head comparison of two Tier-1 regulated brokers with different strengths.', href: `/${locale}/compare/iq-option-vs-deriv` },
            { title: 'Compare All Brokers', desc: 'Side-by-side comparison of all 7 brokers we review — scores, features, and payouts.', href: `/${locale}/compare` },
            { title: 'Deriv Synthetic Indices Guide', desc: 'Deep dive into Volatility, Crash/Boom, Step Index, and how to trade them.', href: `/${locale}/blog/deriv-synthetic-indices-guide` },
            { title: 'Binary Options Regulation', desc: 'How regulation works, which licenses matter, and how to verify broker legitimacy.', href: `/${locale}/blog/binary-options-regulation` },
            { title: 'Best Binary Options Brokers', desc: 'Our complete ranking of the top brokers for 2026 with detailed scoring methodology.', href: `/${locale}/blog/best-binary-options-brokers` },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="glass-card p-5 hover:border-emerald-500/30 transition-colors group">
              <h3 className="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">{link.title}</h3>
              <p className="text-xs text-gray-400">{link.desc}</p>
              <span className="text-xs text-emerald-400 mt-2 inline-block">Read more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="section-container py-12">
        <div className="glass-card p-6 border border-red-500/20">
          <h3 className="font-bold text-red-400 mb-3 text-sm">Risk Disclaimer</h3>
          <p className="text-xs text-gray-400 leading-relaxed mb-2">
            <strong className="text-gray-300">Binary options trading involves substantial risk of loss and is not suitable for all investors.</strong>{' '}
            You should not invest money that you cannot afford to lose. Past performance is not indicative of future results.
            The high degree of leverage can work against you as well as for you.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed mb-2">
            Before deciding to trade binary options, you should carefully consider your investment objectives, level of experience,
            and risk appetite. There is a possibility that you could sustain a loss of some or all of your initial investment.
            You should be aware of all the risks associated with binary options trading and seek advice from an independent financial advisor if you have any doubts.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            BinaryBrokerHub.com is an independent review site. We may receive compensation from brokers we review through affiliate links,
            but this does not influence our ratings or reviews. Our scores are based on objective criteria including regulation, platform quality,
            payout rates, and user experience. Please read our full disclaimer for more details.
          </p>
        </div>
      </section>
    </div>
  );
}
