'use client';

import CtaButton from '@/components/CtaButton';

export default function DerivPage() {
  return (
    <div>
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
            No other binary options broker comes close on trust and longevity.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The unique selling point is <strong className="text-white">Synthetic Indices</strong> — proprietary instruments tradeable 24/7/365,
            even weekends and holidays. The trade-off: the platform is <strong className="text-amber-300">more complex</strong> than competitors,
            with multiple interfaces (DTrader, SmartTrader, DBot, MT5) that can overwhelm beginners. If you value trust and unique products
            over simplicity, Deriv is the pick.
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
                'Synthetic Indices are proprietary — cant verify pricing independently',
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

      {/* Synthetic Indices */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Synthetic Indices — Deriv&apos;s Killer Feature</h2>
        <div className="glass-card p-6">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Synthetic Indices are Deriv&apos;s proprietary instruments that simulate real market conditions using a cryptographically
            secure random number generator. They&apos;re available <strong className="text-white">24 hours a day, 7 days a week, 365 days a year</strong> —
            including weekends and holidays when real markets are closed.
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

      {/* Deposit & Withdrawal */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Deposits & Withdrawals</h2>
        <div className="glass-card overflow-hidden">
          <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
            <div>Method</div>
            <div className="text-center">Min Deposit</div>
            <div className="text-center">Processing</div>
            <div className="text-center">Fee</div>
          </div>
          {[
            { method: 'Visa/Mastercard', min: '$5', time: 'Instant / 1 business day', fee: 'Free' },
            { method: 'Skrill', min: '$5', time: 'Instant / 1 business day', fee: 'Free' },
            { method: 'Neteller', min: '$5', time: 'Instant / 1 business day', fee: 'Free' },
            { method: 'Fasapay', min: '$5', time: 'Instant / 1 business day', fee: 'Free' },
            { method: 'Perfect Money', min: '$5', time: 'Instant / 1 business day', fee: 'Free' },
            { method: 'Crypto (BTC/ETH/USDT)', min: '$5', time: '1-30 min / up to 24 hrs', fee: 'Free' },
            { method: 'Bank Transfer', min: '$5', time: '1 day / 1-3 days', fee: 'Free' },
            { method: 'UPI / Local Methods', min: '$5', time: 'Instant / varies', fee: 'Free' },
          ].map((d, i) => (
            <div key={i} className={`grid grid-cols-4 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
              <div className="text-gray-300 font-medium">{d.method}</div>
              <div className="text-center text-white">{d.min}</div>
              <div className="text-center text-gray-400">{d.time}</div>
              <div className="text-center text-emerald-400">{d.fee}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3">* All deposits and withdrawals are fee-free from Deriv. 30+ payment methods available depending on region.</p>
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
          </p>
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
            Deriv is the clear winner.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CtaButton broker="deriv" label="Open Deriv Account" campaign="deriv_verdict" />
            <CtaButton broker="deriv" type="demo" label="Try Free Demo" variant="secondary" campaign="deriv_verdict" />
          </div>
        </div>
      </section>
    </div>
  );
}
