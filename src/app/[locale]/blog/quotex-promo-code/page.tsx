'use client';

import CtaButton from '@/components/CtaButton';

export default function QuotexPromoCodePage() {
  return (
    <article className="section-container py-16 max-w-4xl mx-auto">
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge-green">Bonus Guide</span>
          <span className="text-xs text-gray-600">Updated May 2026 • 5 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          Quotex Promo Code 2026 — Latest Deposit Bonus Codes
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Active Quotex promo codes and deposit bonus offers for May 2026.
          Plus what you need to know about bonus terms before using them.
        </p>
      </header>

      {/* Current Offers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Current Active Offers (May 2026)</h2>
        <div className="space-y-4">
          <div className="glass-card p-6 border-emerald-500/20">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-white">30% First Deposit Bonus</h3>
              <span className="badge-green">Active</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Get a 30% bonus on your first deposit when you deposit $100 or more.
              Applied automatically through our link — no promo code needed.
            </p>
            <CtaButton broker="quotex" label="Claim 30% Bonus →" campaign="promo_quotex" className="w-full sm:w-auto" />
          </div>

          <div className="glass-card p-6 border-amber-500/20">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-white">Risk-Free Trade</h3>
              <span className="badge-gold">Periodic</span>
            </div>
            <p className="text-sm text-gray-400">
              Quotex sometimes offers risk-free trades as a reward — if conditions are met, you get guaranteed income;
              if not, the trade amount is returned. Check inside the platform for availability.
            </p>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-white">Trading Tournaments</h3>
              <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">Occasional</span>
            </div>
            <p className="text-sm text-gray-400">
              Quotex runs trading tournaments with cash prizes. Check the platform for current tournament schedules and entry rules.
            </p>
          </div>
        </div>
      </section>

      {/* Important Warning */}
      <section className="mb-12">
        <div className="border border-amber-500/30 bg-amber-500/[0.03] rounded-xl p-6">
          <h2 className="text-lg font-bold text-amber-400 mb-3">⚠️ Important: Read Before Using Any Bonus</h2>
          <div className="space-y-3 text-sm text-gray-300">
            <p>Based on our analysis of Quotex&apos;s bonus terms:</p>
            <ul className="space-y-2 ml-4">
              <li>• <strong className="text-white">Bonuses are virtual funds</strong> — your deposited money is used first</li>
              <li>• <strong className="text-white">Bonus funds cannot be withdrawn</strong> — only profits from bonus trades</li>
              <li>• <strong className="text-white">If you withdraw deposited funds early</strong>, Quotex can debit all credited bonuses</li>
              <li>• <strong className="text-white">Bonus rules can change</strong> at any time at Quotex&apos;s discretion</li>
            </ul>
            <p className="mt-4 text-amber-200/70">
              <strong>Our recommendation:</strong> Don&apos;t choose a broker based on bonuses. The 30% bonus is a nice extra,
              but the real value of Quotex is its high payouts (up to 98%) and fast execution. Focus on profitable trading, not free money.
            </p>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How to Get the Deposit Bonus</h2>
        <div className="space-y-4">
          {[
            { step: '1', title: 'Open Account', desc: 'Click our link below to register. Takes under 2 minutes, no documents needed.' },
            { step: '2', title: 'Deposit $100+', desc: 'Use any method (crypto is fastest). The 30% bonus is applied to deposits of $100 or more.' },
            { step: '3', title: 'Bonus Auto-Applied', desc: 'The bonus will be credited to your account automatically. No promo code required when using our link.' },
            { step: '4', title: 'Start Trading', desc: 'Your deposited funds are used first. Bonus funds activate after your deposit is used.' },
          ].map((s) => (
            <div key={s.step} className="glass-card p-5 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-400 font-bold text-sm">{s.step}</span>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="glass-card p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Start?</h2>
        <p className="text-gray-400 mb-6 text-sm">
          Open your account through our link for the 30% deposit bonus.
          Or try the free demo first — no deposit required.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <CtaButton broker="quotex" label="Open Account + 30% Bonus" campaign="promo_quotex_bottom" />
          <CtaButton broker="quotex" type="demo" label="Try Free Demo First" variant="secondary" campaign="promo_quotex_bottom" />
        </div>
      </section>
    </article>
  );
}
