'use client';

import CtaButton from '@/components/CtaButton';

export default function ExpertOptionPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="relative section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="badge-green">Score: 7.8/10</span>
              <span className="badge-gold">Social Trading</span>
              <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">Last Updated: May 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              ExpertOption Review 2026
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
              ExpertOption is a social trading-focused binary options platform with 40M+ registered users.
              Up to 95% payouts, 100+ assets, and a built-in social feed showing what other traders are doing in real-time.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              EOLabs LLC (SVG) &bull; No financial regulation &bull; 150+ countries &bull; Est. 2014
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CtaButton broker="expertOption" label="Open ExpertOption Account" campaign="expert_hero" size="lg" />
              <CtaButton broker="expertOption" type="demo" label="Free Demo ($10K)" variant="secondary" campaign="expert_hero" size="lg" />
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
            { label: 'Max. Payout', value: 'Up to 95%' },
            { label: 'Registered Users', value: '40M+' },
            { label: 'Total Assets', value: '100+' },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <div className="text-xl md:text-2xl font-bold text-purple-400">{s.value}</div>
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
            ExpertOption&apos;s strength is its <strong className="text-white">social trading features</strong>. You can see what other traders
            are buying/selling in real-time, follow successful traders, and learn from the community. With 40M+ users and
            30M+ monthly trades, there&apos;s a large active community to learn from.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The critical weakness: <strong className="text-red-400">zero financial regulation</strong>. Not even FinaCom membership.
            This is the highest-risk broker on our list. Your funds have no regulatory protection whatsoever.
            We include ExpertOption for completeness, but <strong className="text-amber-300">strongly recommend choosing a more regulated alternative</strong> unless
            the social trading features are specifically what you need.
          </p>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="section-container pb-8">
        <div className="border border-red-500/30 bg-red-500/[0.03] rounded-xl p-6">
          <h2 className="text-lg font-bold text-red-400 mb-3">Regulation Warning</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            ExpertOption (EOLabs LLC) is <strong className="text-red-400">completely unregulated</strong> by any financial authority.
            Unlike competitors with FinaCom membership (Binomo, Olymp Trade) or CySEC/MFSA licenses (IQ Option, Deriv),
            ExpertOption provides <strong className="text-red-400">no dispute resolution mechanism and no fund protection</strong>.
            Trade with extreme caution and only risk amounts you can afford to lose entirely.
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
                'Social trading: see trades from other users in real-time on charts',
                '40M+ registered users — large active community',
                'Up to 95% payouts — competitive with industry leaders',
                '100+ assets (currencies, stocks, commodities, crypto)',
                'Free demo account with $10,000 virtual balance',
                'Custom deal durations — flexible expiry times',
                'Multiple account types with progressive benefits',
                'Good mobile app experience',
                'Available in 150+ countries including India, Pakistan, SE Asia',
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
                'ZERO financial regulation — highest risk broker on this list',
                'No FinaCom or any dispute resolution body membership',
                'Client funds not segregated or protected',
                'Verification process can take up to 30 days',
                'Not available in USA, UK, EU, Japan, Russia, Australia',
                'Some withdrawal complaints in forums',
                'Less established brand compared to IQ Option or Binomo',
                'No copy trading automation (social features are observational only)',
                'Limited educational content compared to Olymp Trade',
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
            { category: 'Social Features', score: 9.0, note: 'Best social trading overlay in binary options' },
            { category: 'Payouts', score: 8.5, note: 'Up to 95% — competitive with top brokers' },
            { category: 'Platform & UX', score: 8.0, note: 'Clean interface with unique social overlay' },
            { category: 'Asset Variety', score: 7.5, note: '100+ assets — adequate but not extensive' },
            { category: 'Deposits & Withdrawals', score: 7.5, note: '$10 min. Some verification delays reported' },
            { category: 'Regulation & Trust', score: 4.0, note: 'Zero regulation. No fund protection. Highest risk' },
            { category: 'Customer Support', score: 7.0, note: 'Chat + email. Mixed reviews on response quality' },
            { category: 'Mobile Experience', score: 8.0, note: 'Good mobile app with social features' },
          ].map((r) => (
            <div key={r.category} className="flex items-center gap-4 py-3 border-b border-white/[0.04] last:border-0">
              <div className="w-48 text-sm text-gray-300 flex-shrink-0">{r.category}</div>
              <div className="flex-1">
                <div className="w-full bg-white/[0.05] rounded-full h-2.5">
                  <div className={`h-2.5 rounded-full ${r.score >= 7 ? 'bg-purple-500' : 'bg-red-500'}`} style={{ width: `${r.score * 10}%` }} />
                </div>
              </div>
              <div className="w-12 text-right text-sm font-bold text-white">{r.score}</div>
              <div className="w-72 text-xs text-gray-500 hidden lg:block">{r.note}</div>
            </div>
          ))}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <span className="font-bold text-lg">Overall Score</span>
            <span className="text-2xl font-extrabold text-purple-400">7.8 / 10</span>
          </div>
        </div>
      </section>

      {/* Social Trading Feature */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Social Trading — ExpertOption&apos;s Key Feature</h2>
        <div className="glass-card p-6">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            ExpertOption overlays real-time trade data from other users directly on the chart. You can see:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { feature: 'Live Trade Feed', desc: 'See what assets others are trading, direction (up/down), and amounts — in real-time on the chart.' },
              { feature: 'Sentiment Indicator', desc: 'Shows the percentage of traders going UP vs DOWN on each asset. Useful for contrarian strategies.' },
              { feature: 'Top Trader Profiles', desc: 'View profiles of successful traders, their win rates, and recent trading history.' },
              { feature: 'Trade Alerts', desc: 'Get notified when top-performing traders make moves on assets you\'re watching.' },
            ].map((f) => (
              <div key={f.feature} className="bg-white/[0.03] rounded-lg p-4">
                <h4 className="font-semibold text-purple-400 text-sm">{f.feature}</h4>
                <p className="text-xs text-gray-400 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border border-amber-500/20 rounded-lg p-4">
            <p className="text-xs text-gray-400">
              <strong className="text-amber-400">Note:</strong> Unlike Pocket Option&apos;s copy trading (which automatically replicates trades),
              ExpertOption&apos;s social features are observational — you see what others do but must manually execute your own trades.
              This gives you more control but requires more active involvement.
            </p>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Account Types</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { tier: 'Basic', deposit: '$10', payout: '80%', perks: ['10 assets', 'Basic education'] },
            { tier: 'Silver', deposit: '$500', payout: '84%', perks: ['30 assets', 'Daily analysis', 'Personal manager'] },
            { tier: 'Gold', deposit: '$2,500', payout: '88%', perks: ['50 assets', 'Priority withdrawal', 'Insurance'] },
            { tier: 'Exclusive', deposit: '$5,000+', payout: '95%', perks: ['100+ assets', 'Fastest withdrawals', 'VIP events', 'Full insurance'] },
          ].map((t) => (
            <div key={t.tier} className={`glass-card p-5 ${t.tier === 'Exclusive' ? 'border border-purple-500/30' : ''}`}>
              <h3 className={`font-bold mb-1 ${t.tier === 'Exclusive' ? 'text-purple-400' : t.tier === 'Gold' ? 'text-yellow-500' : 'text-gray-300'}`}>{t.tier}</h3>
              <p className="text-xs text-gray-500 mb-2">Min: {t.deposit}</p>
              <div className="text-lg font-bold text-white mb-3">Up to {t.payout}</div>
              <ul className="space-y-1">
                {t.perks.map((p) => (
                  <li key={p} className="text-xs text-gray-400 flex gap-1.5">
                    <span className="text-emerald-400">✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Better Alternatives */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Should You Choose ExpertOption?</h2>
        <div className="glass-card p-6">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            We believe in honest reviews. ExpertOption has unique social features, but the lack of any regulation is a serious concern.
            Here&apos;s how it compares to alternatives with similar features:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/[0.03] rounded-lg p-4 text-center">
              <h4 className="font-semibold text-blue-400 text-sm mb-2">Want Copy Trading?</h4>
              <p className="text-xs text-gray-400">Choose <strong className="text-white">Pocket Option</strong> — automated copy trading + IFMRRC regulation</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4 text-center">
              <h4 className="font-semibold text-emerald-400 text-sm mb-2">Want Trust + Safety?</h4>
              <p className="text-xs text-gray-400">Choose <strong className="text-white">Deriv</strong> — MFSA Tier-1 + 26 years operating</p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4 text-center">
              <h4 className="font-semibold text-green-400 text-sm mb-2">Want Best Platform?</h4>
              <p className="text-xs text-gray-400">Choose <strong className="text-white">IQ Option</strong> — CySEC license + award-winning UX</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            ExpertOption is best for traders who specifically want the social trading overlay and are comfortable with the
            regulatory risk. For everyone else, the alternatives above offer better protection.
          </p>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="section-container py-16">
        <div className="glass-card p-8 md:p-10 border border-purple-500/20">
          <h2 className="text-2xl font-bold mb-4">Final Verdict: 7.8/10</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            ExpertOption earns points for its <strong className="text-white">innovative social trading features</strong>, competitive payouts,
            and large user base. The ability to see what 40M+ traders are doing in real-time is genuinely useful for learning
            and sentiment analysis.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            However, the <strong className="text-red-400">complete lack of regulation</strong> puts it at the bottom of our rankings.
            We can&apos;t recommend it as a primary broker. Use it as a supplementary platform for social insights,
            but keep your main trading funds with a more regulated broker like Quotex, Pocket Option, IQ Option, or Deriv.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CtaButton broker="expertOption" label="Open ExpertOption Account" campaign="expert_verdict" />
            <CtaButton broker="expertOption" type="demo" label="Try Free Demo ($10K)" variant="secondary" campaign="expert_verdict" />
          </div>
        </div>
      </section>
    </div>
  );
}
