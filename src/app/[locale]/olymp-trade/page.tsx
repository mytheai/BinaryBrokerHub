'use client';

import CtaButton from '@/components/CtaButton';

export default function OlympTradePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        <div className="relative section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="badge-green">Score: 8.6/10</span>
              <span className="badge-gold">#1 in India & Indonesia</span>
              <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">Last Updated: May 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Olymp Trade Review 2026
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
              Olymp Trade dominates emerging markets with 80M+ registered users across India, Indonesia, Brazil and MENA.
              Fixed Time Trading (FTT) with up to 93% payouts, 190+ assets, and strong localized support.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Inlustris Ltd (SVG) &bull; VFSC Vanuatu &bull; FinaCom Category A (€20K compensation) &bull; Est. 2014
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CtaButton broker="olympTrade" label="Open Olymp Trade Account" campaign="olymp_hero" size="lg" />
              <CtaButton broker="olympTrade" type="demo" label="Free Demo ($10K)" variant="secondary" campaign="olymp_hero" size="lg" />
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
            { label: 'Max. Payout', value: 'Up to 93%' },
            { label: 'Total Assets', value: '190+' },
            { label: 'Registered Users', value: '80M+' },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <div className="text-xl md:text-2xl font-bold text-blue-400">{s.value}</div>
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
            Olymp Trade is the <strong className="text-white">undisputed champion of emerging markets</strong>. If you&apos;re trading from India,
            Indonesia, Brazil, or the Middle East, Olymp Trade likely offers the best localized experience: INR/IDR/BRL deposits,
            local language support, region-specific payment methods, and educational content tailored to your market.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The FinaCom Category A membership provides <strong className="text-white">€20,000 dispute resolution coverage</strong> — more protection
            than most offshore brokers. However, it lacks <strong className="text-amber-300">Tier-1 regulation</strong> and the platform
            is simpler than IQ Option or Deriv. Best for beginners and intermediate traders in target markets.
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
                '80M+ registered users — massive community validation',
                'FinaCom Category A — €20,000 compensation fund per dispute',
                'Excellent localization: Hindi, Indonesian, Portuguese, Arabic, Thai support',
                'Local payment methods: UPI, Net Banking, OVO, GoPay, PIX, local banks',
                '190+ assets including OTC instruments for weekend trading',
                'Progressive account tiers: Starter → Advanced → Expert with increasing benefits',
                'Free $10,000 refillable demo account',
                'Extensive educational library: 200+ articles, video courses, webinars',
                'OTC trading available on weekends (unique feature)',
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
                'No Tier-1 regulation (VFSC offshore + FinaCom only)',
                'Banned in: USA, Canada, Australia, Japan, EU, Russia',
                'Lower payouts than Quotex (max 93% vs 98%)',
                'Expert account requires high trading volume to unlock',
                'Simpler charting tools compared to IQ Option',
                'Some withdrawal delays reported in forums (India market)',
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
            { category: 'Emerging Market Fit', score: 9.8, note: 'Best localization in India, Indonesia, Brazil, MENA' },
            { category: 'Education & Learning', score: 9.0, note: '200+ articles, video courses, webinars, strategies' },
            { category: 'Platform & UX', score: 8.0, note: 'Clean and simple. Good for beginners, limited for pros' },
            { category: 'Payouts', score: 8.3, note: 'Up to 93% for Expert accounts, 80-85% for Starter' },
            { category: 'Deposits & Withdrawals', score: 8.5, note: '$10 min, local methods. Some withdrawal delays reported' },
            { category: 'Regulation & Trust', score: 7.5, note: 'FinaCom A (€20K) is decent, but no Tier-1 license' },
            { category: 'Asset Variety', score: 8.5, note: '190+ assets including OTC for weekends' },
            { category: 'Customer Support', score: 8.5, note: 'Multilingual support in local languages. Responsive chat' },
          ].map((r) => (
            <div key={r.category} className="flex items-center gap-4 py-3 border-b border-white/[0.04] last:border-0">
              <div className="w-48 text-sm text-gray-300 flex-shrink-0">{r.category}</div>
              <div className="flex-1">
                <div className="w-full bg-white/[0.05] rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${r.score * 10}%` }} />
                </div>
              </div>
              <div className="w-12 text-right text-sm font-bold text-white">{r.score}</div>
              <div className="w-72 text-xs text-gray-500 hidden lg:block">{r.note}</div>
            </div>
          ))}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <span className="font-bold text-lg">Overall Score</span>
            <span className="text-2xl font-extrabold text-blue-400">8.6 / 10</span>
          </div>
        </div>
      </section>

      {/* Account Tiers */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Account Tiers</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { tier: 'Starter', req: 'Min. $10 deposit', payout: '80-82%', perks: ['Basic education', 'Standard assets', 'Email support', '1 hour min withdrawal'] },
            { tier: 'Advanced', req: 'Status points earned', payout: '84-86%', perks: ['Advanced strategies', 'All assets unlocked', 'Priority support', 'Personal consultant', 'Risk-free trades'] },
            { tier: 'Expert', req: 'High volume trading', payout: '90-93%', perks: ['Highest payouts', 'Exclusive strategies', 'Personal analyst', 'VIP support 24/7', 'Risk-free trades', 'Faster withdrawals'] },
          ].map((t) => (
            <div key={t.tier} className={`glass-card p-6 ${t.tier === 'Expert' ? 'border border-amber-500/30' : ''}`}>
              <h3 className={`font-bold text-lg mb-1 ${t.tier === 'Expert' ? 'text-amber-400' : t.tier === 'Advanced' ? 'text-blue-400' : 'text-gray-300'}`}>{t.tier}</h3>
              <p className="text-xs text-gray-500 mb-3">{t.req}</p>
              <div className="text-lg font-bold text-white mb-3">{t.payout} payout</div>
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
      </section>

      {/* Final Verdict */}
      <section className="section-container py-16">
        <div className="glass-card p-8 md:p-10 border border-blue-500/20">
          <h2 className="text-2xl font-bold mb-4">Final Verdict: 8.6/10</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Olymp Trade is the <strong className="text-white">best localized binary options experience</strong> for traders in India, Indonesia,
            Brazil, and MENA. The combination of local language support, local payment methods, educational content, and FinaCom
            protection makes it the most accessible platform for emerging market beginners.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            It won&apos;t win on payouts (Quotex is higher) or platform depth (IQ Option is deeper) or trust (Deriv is more regulated) —
            but for its target audience, the <strong className="text-white">localized experience is unmatched</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CtaButton broker="olympTrade" label="Open Olymp Trade Account" campaign="olymp_verdict" />
            <CtaButton broker="olympTrade" type="demo" label="Try Free Demo ($10K)" variant="secondary" campaign="olymp_verdict" />
          </div>
        </div>
      </section>
    </div>
  );
}
