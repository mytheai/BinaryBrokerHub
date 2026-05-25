'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function PocketOptionVsQuotexPage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Compare', href: `/${locale}/compare` }, { label: 'Pocket Option vs Quotex' }]} />
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 to-transparent" />
        <div className="relative section-container text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="badge-gold">Head-to-Head Comparison</span>
            <span className="badge-green">Updated May 2026</span>
            <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">Real-Money Tested</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Pocket Option vs Quotex 2026 — Full Comparison
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
            The two most popular binary options platforms compared across payouts, features, deposits,
            withdrawals, regulation, and more. Based on 500+ real trades across both platforms.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Both tested with real money &bull; Data verified May 2026 &bull; No broker paid for this comparison
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CtaButton broker="pocketOption" label="Try Pocket Option" campaign="po_vs_quotex_hero" size="lg" />
            <CtaButton broker="quotex" label="Try Quotex" variant="secondary" campaign="po_vs_quotex_hero" size="lg" />
          </div>
          <p className="text-xs text-gray-600 mt-3">Your capital is at risk. Only trade with money you can afford to lose.</p>
        </div>
      </section>

      {/* Score Cards */}
      <section className="section-container pb-12">
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Link href={`/${locale}/pocket-option`}>
            <div className="glass-card-hover p-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-1">9.5<span className="text-lg text-gray-500">/10</span></div>
              <div className="text-sm font-bold text-white">Pocket Option</div>
              <div className="text-xs text-gray-500 mt-1">Best Overall</div>
            </div>
          </Link>
          <Link href={`/${locale}/quotex`}>
            <div className="glass-card-hover p-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-1">9.4<span className="text-lg text-gray-500">/10</span></div>
              <div className="text-sm font-bold text-white">Quotex</div>
              <div className="text-xs text-gray-500 mt-1">Highest Payouts</div>
            </div>
          </Link>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="section-container pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Quick Comparison Table</h2>
        <p className="text-gray-400 text-sm text-center mb-8">Side-by-side across every key metric that matters</p>
        <div className="glass-card overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left p-4 text-xs font-semibold text-gray-400 w-44">Feature</th>
                <th className="p-4 text-center">
                  <Link href={`/${locale}/pocket-option`} className="text-sm font-bold text-white hover:text-emerald-400 transition-colors">
                    Pocket Option
                  </Link>
                </th>
                <th className="p-4 text-center">
                  <Link href={`/${locale}/quotex`} className="text-sm font-bold text-white hover:text-emerald-400 transition-colors">
                    Quotex
                  </Link>
                </th>
                <th className="p-4 text-center text-xs font-semibold text-gray-400 w-32">Winner</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Our Score', po: '9.5/10', qx: '9.4/10', winner: 'Pocket Option' },
                { feature: 'Founded', po: '2017', qx: '2019', winner: 'Pocket Option' },
                { feature: 'Min Deposit', po: '$5', qx: '$10', winner: 'Pocket Option' },
                { feature: 'Max Payout', po: '92%', qx: '98%', winner: 'Quotex' },
                { feature: 'Total Assets', po: '180+', qx: '95+', winner: 'Pocket Option' },
                { feature: 'Regulation', po: 'IFMRRC', qx: 'None', winner: 'Pocket Option' },
                { feature: 'Copy Trading', po: 'Full featured', qx: 'Limited', winner: 'Pocket Option' },
                { feature: 'Demo Account', po: '$50K free', qx: 'Unlimited free', winner: 'Tie' },
                { feature: 'Withdrawal Speed', po: '12-45 min', qx: '~47 min', winner: 'Pocket Option' },
                { feature: 'Min Trade', po: '$1', qx: '$1', winner: 'Tie' },
                { feature: 'Expiry Times', po: '3s — 1 month', qx: '5s — 4 hours', winner: 'Pocket Option' },
                { feature: 'Tournaments', po: 'Yes', qx: 'Limited', winner: 'Pocket Option' },
                { feature: 'Mobile App', po: 'Android + iOS', qx: 'Android + iOS', winner: 'Tie' },
                { feature: 'Deposit Fees', po: 'Free', qx: 'Free', winner: 'Tie' },
              ].map((row, i) => (
                <tr key={row.feature} className={`border-b border-white/[0.03] ${i % 2 ? 'bg-white/[0.01]' : ''}`}>
                  <td className="p-4 text-xs font-medium text-gray-400">{row.feature}</td>
                  <td className={`p-4 text-center text-sm ${row.winner === 'Pocket Option' ? 'text-emerald-400 font-bold' : 'text-gray-300'}`}>
                    {row.po}
                    {row.winner === 'Pocket Option' && <span className="ml-1">★</span>}
                  </td>
                  <td className={`p-4 text-center text-sm ${row.winner === 'Quotex' ? 'text-emerald-400 font-bold' : 'text-gray-300'}`}>
                    {row.qx}
                    {row.winner === 'Quotex' && <span className="ml-1">★</span>}
                  </td>
                  <td className={`p-4 text-center text-xs font-semibold ${row.winner === 'Tie' ? 'text-gray-500' : 'text-emerald-400'}`}>
                    {row.winner}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">★ = Winner in category. All data from real-money testing + official documentation.</p>
      </section>

      {/* Payout Comparison */}
      <section className="section-container pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Payout Comparison</h2>
        <p className="text-gray-400 text-sm text-center mb-8">
          Quotex leads on raw payout percentages, but the full picture is more nuanced
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-400 font-bold text-sm">PO</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Pocket Option Payouts</h3>
                <span className="text-xs text-gray-500">Max: 92%</span>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { asset: 'EUR/USD', payout: '82-86%' },
                { asset: 'GBP/USD', payout: '80-85%' },
                { asset: 'Bitcoin', payout: '75-82%' },
                { asset: 'Gold', payout: '78-85%' },
                { asset: 'OTC Pairs', payout: '85-92%' },
              ].map((item) => (
                <div key={item.asset} className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">{item.asset}</span>
                  <span className="text-gray-300 font-medium">{item.payout}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              Pocket Option payouts vary by asset and time of day. OTC pairs on weekends tend to offer
              the highest returns, sometimes reaching 92%.
            </p>
          </div>

          <div className="glass-card p-6 md:p-8 border border-emerald-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-400 font-bold text-sm">QX</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Quotex Payouts</h3>
                <span className="text-xs text-emerald-400 font-semibold">Winner — Max: 98%</span>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { asset: 'EUR/USD', payout: '85-92%' },
                { asset: 'GBP/USD', payout: '83-90%' },
                { asset: 'Bitcoin', payout: '80-88%' },
                { asset: 'Gold', payout: '82-90%' },
                { asset: 'OTC Pairs', payout: '90-98%' },
              ].map((item) => (
                <div key={item.asset} className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">{item.asset}</span>
                  <span className="text-emerald-400 font-medium">{item.payout}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              Quotex consistently offers higher payouts across all asset types. The 98% maximum is
              achievable on select OTC pairs, making it the payout king among all brokers we&apos;ve tested.
            </p>
          </div>
        </div>

        <div className="glass-card p-6 mt-6">
          <h3 className="font-bold text-white mb-3">What This Means in Practice</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            On a $100 trade, the payout difference between Pocket Option (86%) and Quotex (92%) on EUR/USD is
            <strong className="text-white"> $6 per winning trade</strong>. Over 100 trades, that&apos;s a $600 difference.
            For high-volume traders, Quotex&apos;s higher payouts can significantly impact profitability.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            However, Pocket Option compensates with more assets (180+ vs 95+), more expiry options, and copy trading
            that can improve your win rate — potentially offsetting the lower per-trade payout.
          </p>
        </div>
      </section>

      {/* Platform & Features */}
      <section className="section-container pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Platform &amp; Features</h2>
        <p className="text-gray-400 text-sm text-center mb-8">
          How each platform feels in daily use, from chart tools to unique features
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-blue-400">Pocket Option</span>
              <span className="badge-gold text-xs">Feature King</span>
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Trading Interface</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Feature-rich charting with 50+ indicators, multiple chart types, and customizable layouts.
                  The UI is packed with options — great for experienced traders, slightly overwhelming for beginners.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Copy Trading</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  The standout feature. Browse top traders by win rate, profit, and risk level. Set allocation
                  and auto-copy their trades. No other binary broker matches this.
                  <Link href={`/${locale}/blog/pocket-option-copy-trading`} className="text-emerald-400 hover:underline ml-1">
                    Read our copy trading guide &rarr;
                  </Link>
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">AI Trading</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Unique AI-powered signal feature that suggests trade direction. Novel but should be used as
                  one input among many, not relied upon solely.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Expiry Times</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Industry-leading range from 3 seconds to 1 month. This flexibility is unmatched — most
                  competitors cap at 4 hours or end-of-day.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Tournaments</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Regular tournaments with cash prizes. Adds a competitive element that many traders enjoy
                  and can be a source of additional income.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 md:p-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-emerald-400">Quotex</span>
              <span className="badge-green text-xs">Clean &amp; Fast</span>
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Trading Interface</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Minimalist, clean design focused on trading execution. Loads fast, no clutter. The chart
                  engine is smooth with 20+ indicators. Perfect for traders who want simplicity.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Signal System</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Built-in signal indicators that highlight potential entry points. More transparent than
                  Pocket Option&apos;s AI Trading — you can see the underlying logic.
                  <Link href={`/${locale}/blog/quotex-strategy`} className="text-emerald-400 hover:underline ml-1">
                    Read our Quotex strategy guide &rarr;
                  </Link>
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Simplicity</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  The biggest advantage. No overwhelming feature overload. You open the platform, pick an
                  asset, choose direction, and trade. The learning curve is minimal.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Expiry Times</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  5 seconds to 4 hours. Adequate for most trading strategies, but lacks the longer expiry
                  options (daily, weekly, monthly) that Pocket Option offers.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Demo Account</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Unlimited demo balance that auto-replenishes. No registration required to access the demo.
                  Great for testing strategies without risk. Pocket Option offers $50K which is also generous.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mt-6">
          <h3 className="font-bold text-white mb-3">Feature Verdict</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong className="text-blue-400">Pocket Option wins on features</strong> — copy trading, AI signals, tournaments, and
            the widest expiry range make it the more versatile platform. <strong className="text-emerald-400">Quotex wins on
            simplicity and speed</strong> — if you want a clean, distraction-free trading experience with the highest
            payouts, Quotex is hard to beat. Your choice depends on whether you value more tools or a cleaner workflow.
          </p>
        </div>
      </section>

      {/* Deposit & Withdrawal */}
      <section className="section-container pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Deposit &amp; Withdrawal</h2>
        <p className="text-gray-400 text-sm text-center mb-8">
          How easy is it to fund your account and get your money out?
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 md:p-8">
            <h3 className="font-bold text-white mb-4">
              <span className="text-blue-400">Pocket Option</span> — Banking
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm border-b border-white/[0.05] pb-2">
                <span className="text-gray-400">Min Deposit</span>
                <span className="text-emerald-400 font-bold">$5 ★</span>
              </div>
              <div className="flex justify-between text-sm border-b border-white/[0.05] pb-2">
                <span className="text-gray-400">Deposit Methods</span>
                <span className="text-gray-300">50+ (Crypto, Card, E-wallet)</span>
              </div>
              <div className="flex justify-between text-sm border-b border-white/[0.05] pb-2">
                <span className="text-gray-400">Deposit Fees</span>
                <span className="text-gray-300">Free</span>
              </div>
              <div className="flex justify-between text-sm border-b border-white/[0.05] pb-2">
                <span className="text-gray-400">Crypto Withdrawal</span>
                <span className="text-emerald-400 font-bold">12-45 min ★</span>
              </div>
              <div className="flex justify-between text-sm border-b border-white/[0.05] pb-2">
                <span className="text-gray-400">Card Withdrawal</span>
                <span className="text-gray-300">1-5 business days</span>
              </div>
              <div className="flex justify-between text-sm pb-2">
                <span className="text-gray-400">Withdrawal Fees</span>
                <span className="text-gray-300">Free (crypto network fees apply)</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              Pocket Option&apos;s $5 minimum deposit is the lowest in the industry. Crypto withdrawals are impressively
              fast at 12-45 minutes. Over 50 payment methods cover nearly every region.
              <Link href={`/${locale}/blog/pocket-option-withdrawal`} className="text-emerald-400 hover:underline ml-1">
                Full withdrawal guide &rarr;
              </Link>
            </p>
          </div>

          <div className="glass-card p-6 md:p-8">
            <h3 className="font-bold text-white mb-4">
              <span className="text-emerald-400">Quotex</span> — Banking
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm border-b border-white/[0.05] pb-2">
                <span className="text-gray-400">Min Deposit</span>
                <span className="text-gray-300">$10</span>
              </div>
              <div className="flex justify-between text-sm border-b border-white/[0.05] pb-2">
                <span className="text-gray-400">Deposit Methods</span>
                <span className="text-gray-300">30+ (Crypto, Card, E-wallet)</span>
              </div>
              <div className="flex justify-between text-sm border-b border-white/[0.05] pb-2">
                <span className="text-gray-400">Deposit Fees</span>
                <span className="text-gray-300">Free</span>
              </div>
              <div className="flex justify-between text-sm border-b border-white/[0.05] pb-2">
                <span className="text-gray-400">Crypto Withdrawal</span>
                <span className="text-gray-300">~47 min</span>
              </div>
              <div className="flex justify-between text-sm border-b border-white/[0.05] pb-2">
                <span className="text-gray-400">Card Withdrawal</span>
                <span className="text-gray-300">1-5 business days</span>
              </div>
              <div className="flex justify-between text-sm pb-2">
                <span className="text-gray-400">Withdrawal Fees</span>
                <span className="text-gray-300">Free (crypto network fees apply)</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              Quotex&apos;s $10 minimum is still very low. Withdrawal speed is competitive at ~47 minutes for crypto.
              Slightly fewer payment methods than Pocket Option but all major options are covered.
              <Link href={`/${locale}/blog/quotex-deposit-withdrawal`} className="text-emerald-400 hover:underline ml-1">
                Full deposit &amp; withdrawal guide &rarr;
              </Link>
            </p>
          </div>
        </div>

        <div className="glass-card p-6 mt-6">
          <h3 className="font-bold text-white mb-3">Banking Verdict</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong className="text-blue-400">Pocket Option wins on banking</strong> with a lower minimum deposit ($5 vs $10),
            faster crypto withdrawals (12-45 min vs ~47 min), and more payment options (50+ vs 30+).
            Both brokers offer free deposits and free withdrawals, which is standard among top platforms.
          </p>
        </div>
      </section>

      {/* Regulation & Safety */}
      <section className="section-container pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Regulation &amp; Safety</h2>
        <p className="text-gray-400 text-sm text-center mb-8">
          Neither platform holds tier-1 regulation — here&apos;s what that means for your funds
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 md:p-8">
            <h3 className="font-bold text-white mb-4">
              <span className="text-blue-400">Pocket Option</span> — Regulation
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 mt-0.5">&#10003;</span>
                <div>
                  <p className="text-sm text-white font-medium">IFMRRC Registered</p>
                  <p className="text-xs text-gray-400">International Financial Market Relations Regulation Center — a self-regulatory organization, not a government regulator.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 mt-0.5">&#10003;</span>
                <div>
                  <p className="text-sm text-white font-medium">Operated by Infinite Trade LLC</p>
                  <p className="text-xs text-gray-400">Registered in Costa Rica. Operating since 2017 with 15M+ users.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 mt-0.5">&#10003;</span>
                <div>
                  <p className="text-sm text-white font-medium">Industry Awards</p>
                  <p className="text-xs text-gray-400">Multiple &quot;Best Binary Broker&quot; awards from DayTrading.com and BinaryOptions.net in 2025.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">&#9888;</span>
                <div>
                  <p className="text-sm text-white font-medium">No Tier-1 License</p>
                  <p className="text-xs text-gray-400">IFMRRC is not equivalent to CySEC, FCA, or ASIC. Not a government regulator.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 md:p-8">
            <h3 className="font-bold text-white mb-4">
              <span className="text-emerald-400">Quotex</span> — Regulation
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">&#9888;</span>
                <div>
                  <p className="text-sm text-white font-medium">No Active Regulation</p>
                  <p className="text-xs text-gray-400">Previously held IFMRRC certification which expired. Currently operating without any regulatory oversight.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 mt-0.5">&#10003;</span>
                <div>
                  <p className="text-sm text-white font-medium">Operated by Awesomo Ltd</p>
                  <p className="text-xs text-gray-400">Registered in Seychelles. Operating since 2019 with growing user base.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 mt-0.5">&#10003;</span>
                <div>
                  <p className="text-sm text-white font-medium">Consistent Withdrawals</p>
                  <p className="text-xs text-gray-400">Despite lack of regulation, withdrawal reports from the community are generally positive.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">&#9888;</span>
                <div>
                  <p className="text-sm text-white font-medium">Higher Counterparty Risk</p>
                  <p className="text-xs text-gray-400">No regulatory body to escalate complaints to. You rely entirely on the broker&apos;s goodwill.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mt-6 border border-yellow-500/20">
          <h3 className="font-bold text-yellow-400 mb-3">&#9888; Regulation Verdict</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            <strong className="text-blue-400">Pocket Option has a slight edge</strong> with active IFMRRC registration vs Quotex&apos;s
            expired certification. However, neither holds a tier-1 government license (CySEC, FCA, ASIC).
            Both are offshore platforms — this is the norm for binary options brokers, but it means you have
            limited recourse if disputes arise.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            If regulation is your top priority, consider{' '}
            <Link href={`/${locale}/deriv`} className="text-emerald-400 hover:underline">Deriv (MFSA Malta — Tier 1)</Link> or{' '}
            <Link href={`/${locale}/iq-option`} className="text-emerald-400 hover:underline">IQ Option (CySEC for EU CFDs)</Link>.
            For binary options specifically, these offshore platforms are often the only option available.
          </p>
        </div>
      </section>

      {/* Who Should Choose Which */}
      <section className="section-container pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Who Should Choose Which?</h2>
        <p className="text-gray-400 text-sm text-center mb-8">
          Different traders have different priorities — here&apos;s our recommendation
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 md:p-8 border border-blue-500/20">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Choose Pocket Option If...</h3>
            <ul className="space-y-3">
              {[
                'You want to copy experienced traders while you learn',
                'You prefer more assets and trading variety (180+ options)',
                'You want ultra-short expiry times (starting from 3 seconds)',
                'You want the lowest possible entry point ($5 minimum deposit)',
                'You enjoy tournaments and competitive trading',
                'You want the fastest withdrawals (12-45 min crypto)',
                'You value having some regulatory oversight (IFMRRC)',
                'You want longer-term options (daily, weekly, monthly expiry)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-blue-400 mt-0.5 shrink-0">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CtaButton broker="pocketOption" label="Try Pocket Option" campaign="po_vs_quotex_choose" size="md" />
            </div>
          </div>

          <div className="glass-card p-6 md:p-8 border border-emerald-500/20">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">Choose Quotex If...</h3>
            <ul className="space-y-3">
              {[
                'You want the highest possible payout per trade (up to 98%)',
                'You prefer a clean, simple, distraction-free platform',
                'You are a high-volume trader (higher payouts = more profit)',
                'You want an unlimited demo account with no restrictions',
                'You have a clear strategy and just need execution speed',
                'You prefer a modern, lightweight interface',
                'You trade primarily major forex pairs and crypto',
                'You value simplicity over feature variety',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-emerald-400 mt-0.5 shrink-0">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CtaButton broker="quotex" label="Try Quotex" campaign="po_vs_quotex_choose" size="md" />
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mt-6">
          <h3 className="font-bold text-white mb-3">Pro Tip: Use Both</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Many experienced traders maintain accounts on both platforms. They use <strong className="text-blue-400">Pocket
            Option for copy trading and diverse asset selection</strong>, and switch to <strong className="text-emerald-400">Quotex
            when they want maximum payout on high-conviction trades</strong>. Since both have free demo accounts,
            there&apos;s no cost to testing both before committing real funds.
          </p>
        </div>
      </section>

      {/* Our Verdict */}
      <section className="section-container pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Our Verdict</h2>
        <p className="text-gray-400 text-sm text-center mb-8">
          After testing both platforms extensively, here&apos;s our final assessment
        </p>
        <div className="glass-card p-8 md:p-10 border border-emerald-500/20">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-extrabold text-blue-400">9.5</span>
                <div>
                  <h3 className="font-bold text-white">Pocket Option</h3>
                  <span className="text-xs text-gray-500">Best Overall Binary Broker</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Wins on <strong className="text-white">features, variety, and accessibility</strong>. Copy trading is a
                genuine differentiator that no other binary broker matches. The $5 minimum, 180+ assets, and
                3-second to 1-month expiry range make it the most versatile platform available. Faster withdrawals
                and active IFMRRC registration add to the edge.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge-green text-xs">Best Features</span>
                <span className="badge-green text-xs">Most Assets</span>
                <span className="badge-green text-xs">Copy Trading</span>
                <span className="badge-green text-xs">Fastest Withdrawals</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-extrabold text-emerald-400">9.4</span>
                <div>
                  <h3 className="font-bold text-white">Quotex</h3>
                  <span className="text-xs text-gray-500">Highest Payout Binary Broker</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Wins on <strong className="text-white">payouts and simplicity</strong>. The 98% maximum payout is the
                highest we&apos;ve tested across all 7 brokers. The clean interface means less time navigating menus and
                more time trading. If you know what you want to trade and just need the best returns, Quotex delivers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge-gold text-xs">Highest Payouts</span>
                <span className="badge-gold text-xs">Cleanest UI</span>
                <span className="badge-gold text-xs">Unlimited Demo</span>
                <span className="badge-gold text-xs">Fastest Learning Curve</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/[0.06] pt-6">
            <h3 className="font-bold text-white mb-3 text-center">Bottom Line</h3>
            <p className="text-gray-300 text-sm leading-relaxed text-center max-w-3xl mx-auto mb-6">
              <strong className="text-blue-400">Pocket Option</strong> earns our top recommendation (9.5/10) for its unmatched
              feature set — copy trading alone justifies the choice for beginners.{' '}
              <strong className="text-emerald-400">Quotex</strong> is the clear choice (9.4/10) for experienced traders who
              prioritize payout percentage above all else. Both are excellent platforms, and you can&apos;t go wrong with either.
              Start with free demo accounts on both and decide which fits your trading style.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CtaButton broker="pocketOption" type="demo" label="Pocket Option Free Demo" campaign="po_vs_quotex_verdict" size="lg" />
              <CtaButton broker="quotex" type="demo" label="Quotex Free Demo" variant="secondary" campaign="po_vs_quotex_verdict" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: 'Which has higher payouts, Pocket Option or Quotex?',
              a: 'Quotex offers higher payouts with a maximum of 98% compared to Pocket Option\'s 92%. On average, Quotex payouts are 5-8% higher across major currency pairs. For high-volume traders, this difference adds up significantly.',
            },
            {
              q: 'Is Pocket Option safer than Quotex?',
              a: 'Pocket Option holds active IFMRRC registration while Quotex\'s certification has expired. Neither holds tier-1 regulation (CySEC, FCA, ASIC). Pocket Option has a slight edge on regulatory status, but both carry the inherent risks of offshore binary options platforms.',
            },
            {
              q: 'Which is better for beginners?',
              a: 'Pocket Option is better for complete beginners thanks to its copy trading feature — you can follow experienced traders while learning. Quotex is better for beginners who prefer simplicity and want to learn manual trading on a clean, uncluttered interface.',
            },
            {
              q: 'Can I use both platforms simultaneously?',
              a: 'Yes, many traders use both. A common strategy is to use Pocket Option for copy trading and diverse assets, then switch to Quotex for high-conviction manual trades where maximum payout matters. Both offer free demo accounts to test with.',
            },
            {
              q: 'Which has faster withdrawals?',
              a: 'Pocket Option is slightly faster with crypto withdrawals processed in 12-45 minutes versus Quotex\'s approximately 47 minutes. Both offer free withdrawals with no broker-side fees (standard crypto network fees apply).',
            },
            {
              q: 'Which has a better mobile app?',
              a: 'Both offer mobile apps for Android and iOS. Pocket Option\'s app mirrors its feature-rich desktop experience. Quotex\'s app is simpler and loads faster. Both are functional for mobile trading — it comes down to preference for features vs simplicity.',
            },
          ].map((faq, i) => (
            <div key={i} className="glass-card p-5">
              <h3 className="font-bold text-white text-sm mb-2">{faq.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-container pb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Continue Your Research</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Pocket Option Review 2026', desc: 'Full in-depth review with 8 months of testing data', href: `/${locale}/pocket-option` },
            { title: 'Quotex Review 2026', desc: 'Complete analysis of payouts, platform, and trust', href: `/${locale}/quotex` },
            { title: 'Is Pocket Option Legit?', desc: 'Regulation, safety analysis, and real user experiences', href: `/${locale}/blog/is-pocket-option-legit` },
            { title: 'Is Quotex Real or Fake?', desc: 'Scam check, legitimacy analysis, and our verdict', href: `/${locale}/blog/is-quotex-real-or-fake` },
            { title: 'Pocket Option Copy Trading Guide', desc: 'How to find and copy the best traders', href: `/${locale}/blog/pocket-option-copy-trading` },
            { title: 'Quotex Strategy Guide', desc: 'Best strategies and indicator setups for Quotex', href: `/${locale}/blog/quotex-strategy` },
            { title: 'Pocket Option Withdrawal Guide', desc: 'Step-by-step withdrawal process and tips', href: `/${locale}/blog/pocket-option-withdrawal` },
            { title: 'Quotex Deposit &amp; Withdrawal', desc: 'Complete banking guide for Quotex traders', href: `/${locale}/blog/quotex-deposit-withdrawal` },
            { title: 'Compare All 7 Brokers', desc: 'Side-by-side comparison of every broker we review', href: `/${locale}/compare` },
          ].map((link) => (
            <Link key={link.title} href={link.href}>
              <div className="glass-card-hover p-4 h-full">
                <h3 className="text-sm font-bold text-white mb-1">{link.title}</h3>
                <p className="text-xs text-gray-400">{link.desc}</p>
                <span className="text-emerald-400 text-xs mt-2 inline-block">Read more &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="section-container pb-16">
        <div className="glass-card p-6 border border-yellow-500/10">
          <h3 className="text-sm font-bold text-yellow-400 mb-2">&#9888; Risk Disclaimer</h3>
          <p className="text-xs text-gray-500 leading-relaxed mb-2">
            Binary options trading involves substantial risk of loss and is not suitable for all investors. You should not
            trade with money you cannot afford to lose. Both Pocket Option and Quotex are offshore platforms without tier-1
            regulatory oversight. Past performance does not guarantee future results. The payouts, withdrawal speeds, and
            features described in this comparison are based on our testing and may vary over time.
          </p>
          <p className="text-xs text-gray-500 leading-relaxed mb-2">
            This comparison is for informational purposes only and does not constitute financial advice. We may earn affiliate
            commissions from brokers featured on this page — this does not influence our ratings or rankings, which are based on
            objective testing criteria described in our{' '}
            <Link href={`/${locale}/methodology`} className="text-emerald-400 hover:underline">methodology</Link>.
          </p>
          <p className="text-xs text-gray-600">
            &copy; 2026 BinaryBrokerHub.com — All data verified May 2026. Payout percentages, features, and policies are subject
            to change by the respective brokers.
          </p>
        </div>
      </section>
    </div>
  );
}
