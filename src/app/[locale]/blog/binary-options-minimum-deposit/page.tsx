'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';

export default function BinaryOptionsMinimumDepositPage() {
  const locale = useLocale();

  return (
    <article className="section-container py-16 max-w-4xl mx-auto">
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge-blue">Money Guide</span>
          <span className="text-xs text-gray-600">Updated May 2026 &bull; 10 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          Binary Options Minimum Deposit Comparison 2026 — Start from $5
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Compare minimum deposit requirements across all major binary options brokers. Find the best
          platform for your budget, whether you&apos;re starting with $5, $10, $50, or $100.
        </p>
      </header>

      {/* Risk Disclaimer */}
      <section className="border border-amber-500/30 bg-amber-500/[0.03] rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-amber-400 mb-3">Important Risk Disclaimer</h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          Binary options trading involves substantial risk of loss. Starting with a small deposit does not
          reduce the risk of losing your investment.
          <strong className="text-white"> Never deposit money you cannot afford to lose. Always start with a demo account first.</strong>
        </p>
      </section>

      {/* Quick Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Quick Answer: Lowest Minimum Deposits</h2>
        <div className="glass-card p-6">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/[0.03] rounded-lg p-4 text-center border border-emerald-500/20">
              <div className="text-2xl font-bold text-emerald-400">$5</div>
              <div className="text-white font-medium text-sm mt-1">Pocket Option</div>
              <div className="text-xs text-gray-400 mt-1">Lowest in the industry</div>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">$5</div>
              <div className="text-white font-medium text-sm mt-1">Deriv</div>
              <div className="text-xs text-gray-400 mt-1">Tied for lowest</div>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">$10</div>
              <div className="text-white font-medium text-sm mt-1">Quotex</div>
              <div className="text-xs text-gray-400 mt-1">Best value at $10</div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Comparison Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Complete Minimum Deposit Comparison — All 7 Brokers</h2>
        <div className="glass-card overflow-hidden">
          <div className="grid grid-cols-5 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
            <div>Broker</div>
            <div className="text-center">Min Deposit</div>
            <div className="text-center">Min Trade</div>
            <div className="text-center">Demo Account</div>
            <div className="text-center">Our Score</div>
          </div>
          {[
            { name: 'Pocket Option', deposit: '$5', trade: '$1', demo: 'Yes ($50K)', score: '9.5/10' },
            { name: 'Quotex', deposit: '$10', trade: '$1', demo: 'Yes ($10K)', score: '9.4/10' },
            { name: 'IQ Option', deposit: '$10', trade: '$1', demo: 'Yes ($10K)', score: '9.2/10' },
            { name: 'Deriv', deposit: '$5', trade: '$0.35', demo: 'Yes ($10K)', score: '9.0/10' },
            { name: 'Olymp Trade', deposit: '$10', trade: '$1', demo: 'Yes ($10K)', score: '8.6/10' },
            { name: 'Binomo', deposit: '$10', trade: '$1', demo: 'Yes ($1K)', score: '8.2/10' },
            { name: 'ExpertOption', deposit: '$10', trade: '$1', demo: 'Yes ($10K)', score: '7.8/10' },
          ].map((broker, i) => (
            <div key={i} className={`grid grid-cols-5 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
              <div className="text-white font-medium">{broker.name}</div>
              <div className="text-center text-emerald-400 font-bold">{broker.deposit}</div>
              <div className="text-center text-gray-300">{broker.trade}</div>
              <div className="text-center text-gray-300">{broker.demo}</div>
              <div className="text-center text-gray-400">{broker.score}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3">
          * Minimum deposits may vary by payment method and region. Crypto deposits often have lower minimums.
          Data verified May 2026.
        </p>
      </section>

      {/* Best Broker by Budget */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Best Broker for Each Budget Level</h2>

        {/* $5 Budget */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-emerald-400">$5</span>
            <h3 className="text-lg font-bold text-white">Micro Budget — Testing the Waters</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold text-white text-sm mb-2">Best Choice: Pocket Option</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                At $5 minimum deposit and $1 minimum trade, Pocket Option gives you 5 trades to test
                your strategy with real money. While $5 won&apos;t make you rich, it&apos;s perfect for
                transitioning from demo to live trading with minimal risk.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-2">Also Consider: Deriv</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Deriv also accepts $5 deposits and offers even lower minimum trades ($0.35), giving you
                up to 14 trades with your $5. However, Deriv&apos;s platform has a steeper learning curve
                for beginners.
              </p>
            </div>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-3">
            <p className="text-xs text-gray-400">
              <strong className="text-amber-400">Reality check:</strong> With $5, you have very limited
              margin for error. We recommend spending at least 2 weeks on demo before depositing even $5.
              Read our{' '}
              <Link href={`/${locale}/pocket-option`} className="text-blue-400 hover:underline">
                Pocket Option review
              </Link>{' '}
              for more details.
            </p>
          </div>
        </div>

        {/* $10 Budget */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-blue-400">$10</span>
            <h3 className="text-lg font-bold text-white">Starter Budget — The Sweet Spot</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold text-white text-sm mb-2">Best Choice: Quotex</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Quotex shines at the $10 level. You get 10 trades at $1 each, the highest payouts in
                the industry (up to 95%), and a clean, beginner-friendly interface. The combination of
                low entry and high payouts makes Quotex the best value proposition at this budget level.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-2">Also Consider: IQ Option</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                IQ Option offers the most polished platform at $10 minimum deposit. Their educational
                resources and CySEC regulation make them a solid choice for cautious beginners who
                want EU-level protection.
              </p>
            </div>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-3">
            <p className="text-xs text-gray-400">
              <strong className="text-emerald-400">Why $10 is the sweet spot:</strong> You have enough for
              10 trades with proper 1-2% risk management at $1 per trade, but the amount is small enough
              that losing it won&apos;t impact your finances. Check our{' '}
              <Link href={`/${locale}/quotex`} className="text-blue-400 hover:underline">
                Quotex review
              </Link>{' '}
              for the full breakdown.
            </p>
          </div>
        </div>

        {/* $50 Budget */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-amber-400">$50</span>
            <h3 className="text-lg font-bold text-white">Comfortable Budget — Room to Learn</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold text-white text-sm mb-2">Best Choice: Pocket Option</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                With $50, you can trade $1 per position (2% risk) and have 50 trades to develop your
                skills. Pocket Option&apos;s social trading feature at this level is valuable — you can
                observe and copy experienced traders while learning. Their bonus program also often
                provides deposit matches that stretch your $50 further.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-2">Why $50 Works Well</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                At $50, you have enough capital to properly practice money management. Trading $1 per
                position gives you 50 attempts — enough to test a strategy across different market
                conditions and build statistical confidence in your approach.
              </p>
            </div>
          </div>
        </div>

        {/* $100 Budget */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-purple-400">$100</span>
            <h3 className="text-lg font-bold text-white">Serious Budget — Ready for Consistent Trading</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold text-white text-sm mb-2">Best Choice: Pocket Option or Quotex</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                At $100, both top platforms deliver excellent value. With 1-2% risk per trade ($1-2),
                you have 50-100 trades of runway. This budget allows you to properly implement all 5
                strategies from our{' '}
                <Link href={`/${locale}/blog/binary-options-strategy-beginners`} className="text-blue-400 hover:underline">
                  beginner strategies guide
                </Link>{' '}
                with meaningful position sizing.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm mb-2">Account Tier Benefits</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Some brokers offer enhanced features at $100+. Pocket Option unlocks higher-tier account
                benefits, and Quotex provides improved payout percentages. At this level, you&apos;re
                also eligible for more withdrawal methods with lower fees.
              </p>
            </div>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-3">
            <p className="text-xs text-gray-400">
              <strong className="text-emerald-400">Pro tip:</strong> Even with $100, stick to $1-2 trades.
              The urge to trade $5-10 per position will be strong, but proper risk management is what
              separates successful traders from those who blow their accounts.
            </p>
          </div>
        </div>
      </section>

      {/* Deposit Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Deposit Methods That Work for Small Amounts</h2>
        <div className="glass-card p-6">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Not every payment method supports small deposits. Here&apos;s what works best for each
            budget level:
          </p>
          <div className="space-y-4">
            <div className="bg-white/[0.03] rounded-lg p-4">
              <h3 className="font-semibold text-white text-sm mb-2">Cryptocurrency (USDT, BTC, ETH)</h3>
              <p className="text-gray-400 text-sm">
                Best for small deposits ($5-20). Usually lowest or zero fees, instant processing, and
                most brokers set their lowest minimums for crypto deposits. USDT (TRC20) is the most
                cost-effective option with minimal network fees.
              </p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4">
              <h3 className="font-semibold text-white text-sm mb-2">E-Wallets (Perfect Money, Skrill, Neteller)</h3>
              <p className="text-gray-400 text-sm">
                Good for $10-50 deposits. Processing is usually instant, but e-wallets may charge their
                own fees for funding. Perfect Money is popular among binary options traders for its
                low fees and wide acceptance.
              </p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4">
              <h3 className="font-semibold text-white text-sm mb-2">Credit/Debit Cards (Visa, Mastercard)</h3>
              <p className="text-gray-400 text-sm">
                Convenient for $10+ deposits. Instant processing, but minimum deposit via card may be
                higher ($10-20) at some brokers. Your bank may also charge international transaction
                fees. Some cards block transactions to binary options brokers.
              </p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4">
              <h3 className="font-semibold text-white text-sm mb-2">Bank Transfer</h3>
              <p className="text-gray-400 text-sm">
                Usually requires $50-100+ minimum deposit. Processing takes 1-5 business days. Not
                recommended for small deposits due to higher minimums and potential wire fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="glass-card p-5">
            <h3 className="font-semibold text-white text-sm mb-2">Can I really start trading with $5?</h3>
            <p className="text-gray-400 text-sm">
              Yes, Pocket Option and Deriv accept $5 minimum deposits. At $1 minimum trade size, $5 gives
              you 5 trades. While it&apos;s enough to test live trading, we recommend at least $10-50 for
              a more meaningful experience with proper risk management.
            </p>
          </div>
          <div className="glass-card p-5">
            <h3 className="font-semibold text-white text-sm mb-2">Do I need to verify my identity for small deposits?</h3>
            <p className="text-gray-400 text-sm">
              Most brokers allow you to deposit and trade without verification, but you&apos;ll need to
              complete KYC (Know Your Customer) verification before making your first withdrawal. We
              recommend verifying your account immediately after registration to avoid delays later.
              See our{' '}
              <Link href={`/${locale}/blog/how-to-withdraw-binary-options`} className="text-blue-400 hover:underline">
                withdrawal guide
              </Link>{' '}
              for details.
            </p>
          </div>
          <div className="glass-card p-5">
            <h3 className="font-semibold text-white text-sm mb-2">Are there deposit fees?</h3>
            <p className="text-gray-400 text-sm">
              Most brokers don&apos;t charge deposit fees themselves. However, your payment provider
              (bank, e-wallet, or crypto network) may charge transaction fees. Crypto (USDT TRC20) typically
              has the lowest fees, while bank transfers may have wire fees of $10-30.
            </p>
          </div>
          <div className="glass-card p-5">
            <h3 className="font-semibold text-white text-sm mb-2">Should I deposit more for better payouts?</h3>
            <p className="text-gray-400 text-sm">
              Some brokers offer higher payouts or account tier benefits for larger deposits. However,
              never deposit more than you&apos;re comfortable losing. A higher payout percentage doesn&apos;t
              help if you&apos;re losing money through poor strategy or risk management.
            </p>
          </div>
          <div className="glass-card p-5">
            <h3 className="font-semibold text-white text-sm mb-2">Can I withdraw my deposit if I change my mind?</h3>
            <p className="text-gray-400 text-sm">
              Yes, you can withdraw your deposit at any time (minus any trading losses). Be aware that
              if you accepted a bonus, there may be trading volume requirements before withdrawal.
              Always read bonus terms carefully. Check the{' '}
              <Link href={`/${locale}/blog/binary-options-regulation`} className="text-blue-400 hover:underline">
                regulation guide
              </Link>{' '}
              to understand your rights.
            </p>
          </div>
        </div>
      </section>

      {/* Tips for Small Deposit Traders */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">5 Tips for Small Deposit Traders</h2>
        <div className="glass-card p-6">
          <div className="space-y-4">
            {[
              { tip: 'Start on demo first — always', detail: 'Spend at least 2 weeks on demo until you\'re consistently profitable. Every broker offers a free demo account with virtual funds.' },
              { tip: 'Trade $1 maximum per position', detail: 'With a $5-$50 account, never trade more than $1. This keeps your risk at 2-20% per trade (ideally under 5%).' },
              { tip: 'Focus on one strategy only', detail: 'Don\'t try all 5 strategies at once. Master one (we recommend support/resistance) before adding others.' },
              { tip: 'Choose crypto deposits to minimize fees', detail: 'USDT (TRC20) has the lowest fees and fastest processing. Every dollar saved on fees is a dollar you can trade with.' },
              { tip: 'Don\'t chase bonuses', detail: 'Deposit bonuses come with trading volume requirements. A 50% bonus on $10 gives you $5 extra but may require $500+ in trading volume before withdrawal.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-emerald-400 font-bold flex-shrink-0">{i + 1}.</span>
                <div>
                  <span className="text-white font-medium text-sm">{item.tip}</span>
                  <p className="text-gray-400 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href={`/${locale}/blog/how-to-withdraw-binary-options`} className="glass-card p-4 hover:bg-white/[0.05] transition-colors">
            <h3 className="font-semibold text-white text-sm mb-1">How to Withdraw from Binary Options Brokers</h3>
            <p className="text-gray-400 text-xs">Complete withdrawal guide — methods, times, and fees.</p>
          </Link>
          <Link href={`/${locale}/blog/binary-options-strategy-beginners`} className="glass-card p-4 hover:bg-white/[0.05] transition-colors">
            <h3 className="font-semibold text-white text-sm mb-1">5 Best Strategies for Beginners</h3>
            <p className="text-gray-400 text-xs">Proven strategies to maximize your small deposit.</p>
          </Link>
          <Link href={`/${locale}/blog/pocket-option-withdrawal`} className="glass-card p-4 hover:bg-white/[0.05] transition-colors">
            <h3 className="font-semibold text-white text-sm mb-1">Pocket Option Withdrawal Guide</h3>
            <p className="text-gray-400 text-xs">Detailed deposit and withdrawal methods for Pocket Option.</p>
          </Link>
          <Link href={`/${locale}/blog/binary-options-regulation`} className="glass-card p-4 hover:bg-white/[0.05] transition-colors">
            <h3 className="font-semibold text-white text-sm mb-1">Binary Options Regulation Guide</h3>
            <p className="text-gray-400 text-xs">Understand which brokers are licensed and safe to use.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="glass-card p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Start Trading with Just $5-$10</h2>
        <p className="text-gray-400 mb-6 text-sm max-w-lg mx-auto">
          Try our top-rated brokers with the lowest minimum deposits in the industry.
          Start with a free demo account, then deposit as little as $5 when you&apos;re ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <CtaButton broker="pocketOption" label="Pocket Option — $5 Minimum" campaign="minimum_deposit" />
          <CtaButton broker="quotex" label="Quotex — $10 Minimum" variant="secondary" campaign="minimum_deposit" />
        </div>
      </section>

      {/* Final Disclaimer */}
      <section className="mt-10 border border-gray-700/50 rounded-xl p-5">
        <p className="text-xs text-gray-500 leading-relaxed">
          <strong className="text-gray-400">Disclaimer:</strong> Binary options trading involves substantial risk
          of loss. Minimum deposit amounts are subject to change and may vary by payment method and region.
          Information verified as of May 2026. Always check the broker&apos;s website for the most current
          deposit requirements. This article does not constitute financial advice. Never invest money you
          cannot afford to lose.
        </p>
      </section>
    </article>
  );
}
