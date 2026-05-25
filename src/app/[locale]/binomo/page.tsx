'use client';

import CtaButton from '@/components/CtaButton';

export default function BinomoPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 to-transparent" />
        <div className="relative section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="badge-green">Score: 8.2/10</span>
              <span className="badge-gold">Best Tournaments</span>
              <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">Last Updated: May 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Binomo Review 2026
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
              Binomo is a Fixed Time Trading platform with 850K+ daily active traders, known for daily tournaments
              with real cash prizes and massive brand recognition in India through cricket sponsorships.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Dolphin Corp (SVG) &bull; FinaCom Category A ($20K compensation) &bull; 180+ countries &bull; Est. 2014
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CtaButton broker="binomo" label="Open Binomo Account" campaign="binomo_hero" size="lg" />
              <CtaButton broker="binomo" type="demo" label="Free Demo ($1K)" variant="secondary" campaign="binomo_hero" size="lg" />
            </div>
            <p className="text-xs text-gray-600 mt-3">Your capital is at risk. Only trade with money you can afford to lose.</p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="section-container pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Min. Deposit', value: '$10' },
            { label: 'Max. Payout', value: 'Up to 90%' },
            { label: 'Daily Active', value: '850K+' },
            { label: 'Min. Trade', value: '$1' },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <div className="text-xl md:text-2xl font-bold text-amber-400">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Verdict */}
      <section className="section-container pb-16">
        <div className="glass-card p-8 md:p-10">
          <h2 className="text-xl font-bold mb-4">Quick Verdict</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Binomo is the <strong className="text-white">most gamified binary options platform</strong> on the market. Daily tournaments
            with cash prizes, tiered accounts with progressive perks, and an interface designed to feel like a game rather than
            a trading platform. This makes it extremely popular with beginners, especially in India where
            cricket sponsorships built massive brand awareness.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The trade-off: <strong className="text-amber-300">no real financial regulation</strong> (FinaCom is an industry body, not a government regulator),
            payouts max at 90% (lower than competitors), and Gold/VIP accounts require $15K-$30K deposits.
            Good for beginners who want a fun entry point; serious traders should consider IQ Option or Deriv instead.
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
                '850K+ daily active traders — one of the most active communities',
                'Daily tournaments with real cash prize pools',
                'FinaCom Category A — $20,000 dispute resolution coverage',
                '$1 minimum trade — lowest barrier to start trading',
                'Free $1,000 refillable demo account',
                'Gamified experience appeals to absolute beginners',
                'Strong mobile app (1M+ downloads)',
                'Cricket sponsorships = massive brand trust in India',
                'Investment insurance on Gold/VIP accounts',
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
                'No government financial regulation — FinaCom is not a regulator',
                'On RBI (India) Alert List — unauthorized forex trading platform',
                'Lower payouts: max 90% vs 95-98% on competitors',
                'Gold account requires $15,000+ deposit (unrealistic for most)',
                'VIP account requires $30,000+ deposit',
                'Only 70+ assets — far less than IQ Option (250+)',
                'Officially banned in Indonesia since Feb 2022',
                'Some withdrawal delay complaints in Indian forums',
                'Limited charting tools compared to professional platforms',
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
            { category: 'Beginner Friendliness', score: 9.5, note: 'Most accessible platform for absolute beginners' },
            { category: 'Tournaments & Gamification', score: 9.5, note: 'Daily tournaments with cash prizes — unique selling point' },
            { category: 'Brand Recognition', score: 9.0, note: 'Cricket sponsorships = household name in India' },
            { category: 'Platform & UX', score: 8.0, note: 'Simple and clean. Limited tools for advanced traders' },
            { category: 'Payouts', score: 7.5, note: 'Max 90% — below industry leaders' },
            { category: 'Regulation & Trust', score: 6.5, note: 'FinaCom only. RBI Alert List. No government license' },
            { category: 'Asset Variety', score: 7.0, note: '70+ assets — adequate but limited vs competitors' },
            { category: 'Deposits & Withdrawals', score: 8.0, note: '$10 min, local methods available. Some delay reports' },
          ].map((r) => (
            <div key={r.category} className="flex items-center gap-4 py-3 border-b border-white/[0.04] last:border-0">
              <div className="w-48 text-sm text-gray-300 flex-shrink-0">{r.category}</div>
              <div className="flex-1">
                <div className="w-full bg-white/[0.05] rounded-full h-2.5">
                  <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: `${r.score * 10}%` }} />
                </div>
              </div>
              <div className="w-12 text-right text-sm font-bold text-white">{r.score}</div>
              <div className="w-72 text-xs text-gray-500 hidden lg:block">{r.note}</div>
            </div>
          ))}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <span className="font-bold text-lg">Overall Score</span>
            <span className="text-2xl font-extrabold text-amber-400">8.2 / 10</span>
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Tournaments — Binomo&apos;s Killer Feature</h2>
        <div className="glass-card p-6">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Binomo&apos;s daily and weekly tournaments are its biggest differentiator. Compete against other traders
            for real cash prizes using a separate tournament balance (not your real funds).
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {[
              { type: 'Daily Free', entry: 'Free', prize: '$100-$300 pool', desc: 'Free entry, compete for small prizes. Great for practice.' },
              { type: 'Daily Paid', entry: '$5-$20', prize: '$500-$3,000 pool', desc: 'Small entry fee, larger prizes. Good risk/reward.' },
              { type: 'Weekly Premium', entry: '$20-$50', prize: '$5,000-$20,000 pool', desc: 'Larger prize pools for serious competitors.' },
              { type: 'VIP Exclusive', entry: 'VIP only', prize: '$50,000+ pool', desc: 'Top-tier events for Gold/VIP account holders.' },
            ].map((t) => (
              <div key={t.type} className="bg-white/[0.03] rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-amber-400 text-sm">{t.type}</h4>
                  <span className="text-xs text-gray-500">Entry: {t.entry}</span>
                </div>
                <div className="text-white text-sm font-bold mb-1">{t.prize}</div>
                <p className="text-xs text-gray-400">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Tiers */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Account Types</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { tier: 'Standard', req: '$10 deposit', payout: 'Up to 85%', perks: ['70+ assets', 'Basic tournaments', 'Standard support', 'Demo account'] },
            { tier: 'Gold', req: '$15,000+ total', payout: 'Up to 86%', perks: ['All Standard perks', '+5% profit bonus', 'Investment insurance', 'Personal manager', 'Premium tournaments'] },
            { tier: 'VIP', req: '$30,000+ total', payout: 'Up to 90%', perks: ['All Gold perks', 'Highest payouts', 'VIP-only tournaments', 'Priority withdrawals', 'Personal analyst', 'Exclusive strategies'] },
          ].map((t) => (
            <div key={t.tier} className={`glass-card p-6 ${t.tier === 'VIP' ? 'border border-amber-500/30' : ''}`}>
              <h3 className={`font-bold text-lg mb-1 ${t.tier === 'VIP' ? 'text-amber-400' : t.tier === 'Gold' ? 'text-yellow-500' : 'text-gray-300'}`}>{t.tier}</h3>
              <p className="text-xs text-gray-500 mb-3">{t.req}</p>
              <div className="text-lg font-bold text-white mb-3">{t.payout}</div>
              <ul className="space-y-1">
                {t.perks.map((p) => (
                  <li key={p} className="text-xs text-gray-400 flex gap-2">
                    <span className="text-emerald-400">✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 border border-amber-500/20 rounded-lg p-4">
          <p className="text-xs text-gray-400">
            <strong className="text-amber-400">Our honest take:</strong> Gold ($15K) and VIP ($30K) thresholds are very high.
            Most traders will remain on Standard. The payout difference (85% → 90%) doesn&apos;t justify a $30K deposit for most.
            Consider Quotex (95%+ at $10 deposit) or Pocket Option (92% at $5 deposit) for better value.
          </p>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="section-container py-16">
        <div className="glass-card p-8 md:p-10 border border-amber-500/20">
          <h2 className="text-2xl font-bold mb-4">Final Verdict: 8.2/10</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Binomo is the <strong className="text-white">best entry point for absolute beginners</strong> who want a gamified, tournament-driven
            trading experience. The brand recognition in India is unmatched, and the $1 minimum trade makes it virtually risk-free to learn.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            However, serious traders will quickly outgrow it. Lower payouts, limited assets, and expensive premium tiers mean
            you&apos;ll likely migrate to Quotex, IQ Option, or Deriv as your skills develop.
            <strong className="text-white"> Think of Binomo as trading school — excellent to start, but you&apos;ll graduate.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CtaButton broker="binomo" label="Open Binomo Account" campaign="binomo_verdict" />
            <CtaButton broker="binomo" type="demo" label="Try Free Demo ($1K)" variant="secondary" campaign="binomo_verdict" />
          </div>
        </div>
      </section>
    </div>
  );
}
