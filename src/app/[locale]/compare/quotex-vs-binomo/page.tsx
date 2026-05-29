'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import BrokerLogo from '@/components/BrokerLogo';
import Breadcrumbs from '@/components/Breadcrumbs';

const comparisonRows = [
  { feature: 'Our Score', quotex: '9.4/10', binomo: '8.2/10', winner: 'quotex' },
  { feature: 'Founded', quotex: '2019', binomo: '2014', winner: 'binomo' },
  { feature: 'Min Deposit', quotex: '$10', binomo: '$10', winner: 'tie' },
  { feature: 'Min Trade', quotex: '$1', binomo: '$1', winner: 'tie' },
  { feature: 'Peak Payout', quotex: '90–95%', binomo: '85–90%', winner: 'quotex' },
  { feature: 'Total Assets', quotex: '95+', binomo: '70+', winner: 'quotex' },
  { feature: 'Demo Account', quotex: '$10,000 free', binomo: '$1,000 free', winner: 'quotex' },
  { feature: 'Copy Trading', quotex: 'Limited', binomo: 'Not available', winner: 'quotex' },
  { feature: 'Tournaments', quotex: 'Limited', binomo: 'Daily (industry best)', winner: 'binomo' },
  { feature: 'Regulation', quotex: 'None (IFMRRC expired)', binomo: 'FinaCom A', winner: 'binomo' },
  { feature: 'Platform Speed', quotex: 'Ultra-fast execution', binomo: 'Standard', winner: 'quotex' },
  { feature: 'Desktop App', quotex: 'Web only', binomo: 'Web only', winner: 'tie' },
  { feature: 'Crypto Withdrawal', quotex: '~47 min avg', binomo: '1-24 hrs', winner: 'quotex' },
  { feature: 'Account Tiers', quotex: 'Standard only', binomo: 'Standard, Gold, VIP', winner: 'binomo' },
  { feature: 'Best For', quotex: 'Maximum payouts', binomo: 'Tournaments & beginners', winner: 'tie' },
];

export default function QuotexVsBinomoPage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Compare', href: `/${locale}/compare` }, { label: 'Quotex vs Binomo' }]} />
      {/* Hero Section */}
      <section className="section-container py-16 md:py-24 text-center">
        <span className="badge-gold mb-4">Head-to-Head Comparison</span>
        <div className="flex items-center justify-center gap-3 mt-4 mb-4">
          <BrokerLogo broker="quotex" size={40} />
          <span className="text-gray-500 text-xl font-bold">vs</span>
          <BrokerLogo broker="binomo" size={40} />
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Quotex vs Binomo: Which Broker Pays More in 2026?
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Comparing the highest-payout broker Quotex (rated 9.4/10) against the tournament king Binomo
          (rated 8.2/10). Real data from our hands-on testing of both platforms.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <CtaButton broker="quotex" label="Try Quotex" campaign="compare_quotex_binomo" size="md" />
          <CtaButton broker="binomo" label="Try Binomo" variant="secondary" campaign="compare_quotex_binomo" size="md" />
        </div>
      </section>

      {/* Quick Verdict */}
      <section className="section-container pb-12">
        <div className="glass-card p-6 md:p-8 border border-emerald-500/20">
          <h2 className="text-xl font-bold mb-3 text-emerald-400">Quick Verdict</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong className="text-white">Quotex dominates on payouts</strong> — its 98% maximum payout
            crushes Binomo&apos;s 90%, making it the clear winner for traders focused on maximizing
            returns per trade. Quotex also offers a faster, more responsive platform with quicker
            withdrawals. However, <strong className="text-white">Binomo excels at competitive trading</strong> with
            the best tournament system in the industry. If you enjoy competing against other traders for
            prizes, Binomo&apos;s daily tournaments are unmatched. For pure trading performance, Quotex
            wins decisively.
          </p>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="section-container pb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Side-by-Side Comparison</h2>
        <div className="glass-card overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left p-3 text-xs font-semibold text-gray-400 w-40">Feature</th>
                <th className="p-3 text-center">
                  <Link href={`/${locale}/quotex`} className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                    Quotex
                  </Link>
                  <div className="text-xs font-bold mt-1 text-emerald-400">9.4/10</div>
                </th>
                <th className="p-3 text-center">
                  <Link href={`/${locale}/binomo`} className="text-sm font-semibold text-white hover:text-amber-400 transition-colors">
                    Binomo
                  </Link>
                  <div className="text-xs font-bold mt-1 text-amber-400">8.2/10</div>
                </th>
                <th className="p-3 text-center text-xs font-semibold text-gray-400 w-24">Winner</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.feature} className={`border-b border-white/[0.03] ${i % 2 ? 'bg-white/[0.01]' : ''}`}>
                  <td className="p-3 text-xs font-medium text-gray-400">{row.feature}</td>
                  <td className={`p-3 text-center text-xs ${row.winner === 'quotex' ? 'text-emerald-400 font-bold' : 'text-gray-300'}`}>
                    {row.quotex} {row.winner === 'quotex' && <span>★</span>}
                  </td>
                  <td className={`p-3 text-center text-xs ${row.winner === 'binomo' ? 'text-emerald-400 font-bold' : 'text-gray-300'}`}>
                    {row.binomo} {row.winner === 'binomo' && <span>★</span>}
                  </td>
                  <td className="p-3 text-center text-xs text-gray-400">
                    {row.winner === 'quotex' && <span className="badge-green">Quotex</span>}
                    {row.winner === 'binomo' && <span className="badge-green">Binomo</span>}
                    {row.winner === 'tie' && <span className="text-gray-500">Tie</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">★ = Winner in category. Data from real-money testing + official broker documentation, May 2026.</p>
      </section>

      {/* Detailed Section: Payouts */}
      <section className="section-container pb-12">
        <h2 className="text-2xl font-bold mb-6">Payouts Comparison</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-emerald-400 mb-3">Quotex — Up to 98%</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Quotex offers the highest payouts in the binary options industry, with a maximum of 98% on
              select assets during optimal market conditions. Average payouts on major currency pairs
              typically range from 85-92%, significantly higher than most competitors.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              The platform&apos;s payout rates are transparent and displayed before you place each trade.
              With 95+ assets available, traders can shop for the best rates across forex, crypto,
              commodities, and indices. This payout advantage is Quotex&apos;s strongest selling point
              and the primary reason it earned a 9.4/10 rating.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-amber-400 mb-3">Binomo — Up to 90%</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Binomo&apos;s maximum payout of 90% is 8 percentage points lower than Quotex&apos;s ceiling.
              In practice, the gap is even wider — Binomo&apos;s average payouts on popular pairs sit
              around 75-82%, considerably below Quotex&apos;s averages.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Binomo&apos;s tiered account system means your payout rates improve as you move from Standard
              to Gold to VIP, but even VIP traders don&apos;t reach Quotex&apos;s standard rates. The
              tournament prizes partially offset lower payouts, but only if you consistently place
              well in competitions.
            </p>
          </div>
        </div>
        <div className="glass-card p-4 mt-4 border border-emerald-500/10">
          <p className="text-sm text-gray-300">
            <strong className="text-emerald-400">Verdict:</strong> Quotex wins decisively on payouts.
            The 98% vs 90% maximum gap is the largest difference in this comparison. Over 100 trades
            at $50 each, the payout difference could mean hundreds of dollars more profit with Quotex.
          </p>
        </div>
      </section>

      {/* Detailed Section: Platform & UX */}
      <section className="section-container pb-12">
        <h2 className="text-2xl font-bold mb-6">Platform &amp; User Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-emerald-400 mb-3">Quotex Platform</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Quotex&apos;s platform is built for speed. Trade execution is near-instant, and the
              interface loads quickly even on slower connections. The charting tools are solid with
              standard technical indicators and multiple timeframes. The platform feels modern and
              minimalist — no unnecessary clutter.
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Ultra-fast trade execution</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Clean, minimalist interface</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>$10,000 demo account</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Real-time payout display before trade</span>
              </li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-amber-400 mb-3">Binomo Platform</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Binomo&apos;s platform prioritizes engagement over pure performance. The gamified interface
              with account progression, achievements, and tournaments creates a unique trading
              experience. It&apos;s slower than Quotex but more visually engaging and beginner-friendly
              with guided tutorials integrated into the platform.
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span>Gamified, engaging interface</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span>Integrated tutorials and guides</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span>Account tier progression system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span>Daily tournament integration</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="glass-card p-4 mt-4 border border-emerald-500/10">
          <p className="text-sm text-gray-300">
            <strong className="text-emerald-400">Verdict:</strong> Quotex delivers a faster, more
            professional platform built for trading performance. Binomo&apos;s gamified approach
            is more fun and engaging, especially for beginners, but sacrifices speed and simplicity.
          </p>
        </div>
      </section>

      {/* Detailed Section: Regulation & Safety */}
      <section className="section-container pb-12">
        <h2 className="text-2xl font-bold mb-6">Regulation &amp; Safety</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-emerald-400 mb-3">Quotex — No Active Regulation</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Quotex previously held IFMRRC certification, but this has expired and not been renewed
              as of 2026. This means Quotex currently operates without any third-party regulatory
              oversight. Despite this, the platform has maintained a generally positive reputation
              with fast withdrawal processing. However, the lack of regulation is the weakest point
              in Quotex&apos;s profile and the main reason it doesn&apos;t score higher than 9.4.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-amber-400 mb-3">Binomo — FinaCom Category A</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Binomo holds active Category A membership in the Financial Commission (FinaCom), providing
              up to $20,000 compensation per complaint through its dedicated fund. While FinaCom is not
              a government regulator, it offers independent dispute resolution and financial protection
              that Quotex currently lacks. Binomo has maintained this membership continuously since
              its early years of operation.
            </p>
          </div>
        </div>
        <div className="glass-card p-4 mt-4 border border-amber-500/10">
          <p className="text-sm text-gray-300">
            <strong className="text-amber-400">Verdict:</strong> Binomo wins on regulation with its active
            FinaCom membership and $20K compensation fund. Quotex has no current regulatory coverage.
            If regulatory safety is your priority, neither broker is ideal — consider{' '}
            <Link href={`/${locale}/deriv`} className="text-blue-400 hover:underline">Deriv (MFSA Tier-1)</Link>{' '}
            or <Link href={`/${locale}/iq-option`} className="text-blue-400 hover:underline">IQ Option (CySEC)</Link>.
          </p>
        </div>
      </section>

      {/* Detailed Section: Features */}
      <section className="section-container pb-12">
        <h2 className="text-2xl font-bold mb-6">Unique Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-emerald-400 mb-3">Quotex Exclusive Features</h3>
            <ul className="text-sm text-gray-300 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">98% Maximum Payout</strong>
                  <p className="text-gray-400 mt-1">The highest payout ceiling in the binary options industry. No other broker matches this rate.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">Instant Execution</strong>
                  <p className="text-gray-400 mt-1">Near-zero latency trade execution. Orders fill at the price you see, minimizing slippage.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">Fast Crypto Withdrawals</strong>
                  <p className="text-gray-400 mt-1">Average crypto withdrawal processed in approximately 47 minutes — much faster than Binomo&apos;s 1-24 hours.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">OTC Weekend Trading</strong>
                  <p className="text-gray-400 mt-1">Trade OTC assets on weekends when traditional markets are closed, keeping your capital working.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-amber-400 mb-3">Binomo Exclusive Features</h3>
            <ul className="text-sm text-gray-300 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">Daily Cash Tournaments</strong>
                  <p className="text-gray-400 mt-1">The industry&apos;s best tournament system with daily free and paid competitions. Win cash prizes independent of trade outcomes.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">Tiered Account System</strong>
                  <p className="text-gray-400 mt-1">Standard, Gold, and VIP tiers unlock progressively better payouts, assets, and features as you grow.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">$20K FinaCom Protection</strong>
                  <p className="text-gray-400 mt-1">Category A membership provides up to $20,000 compensation per dispute — a safety net Quotex doesn&apos;t offer.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">India/SEA Localization</strong>
                  <p className="text-gray-400 mt-1">UPI payments, local language support, and region-specific customer service for Indian and SEA traders.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who Should Choose Which */}
      <section className="section-container pb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Who Should Choose Which Broker?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 border border-emerald-500/20">
            <h3 className="text-lg font-bold text-emerald-400 mb-4">Choose Quotex If You...</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Want the highest payouts available (up to 98%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Prioritize fast trade execution speed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Need quick crypto withdrawals (~47 min)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Prefer a clean, no-frills trading platform</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Want to trade OTC assets on weekends</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Focus on maximizing return per trade</span>
              </li>
            </ul>
            <div className="mt-6">
              <CtaButton broker="quotex" label="Open Quotex Account" campaign="compare_quotex_binomo_choose" size="md" />
            </div>
          </div>
          <div className="glass-card p-6 border border-amber-500/20">
            <h3 className="text-lg font-bold text-amber-400 mb-4">Choose Binomo If You...</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-amber-400">→</span>
                <span>Love competitive tournament-style trading</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">→</span>
                <span>Want regulatory protection (FinaCom $20K fund)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">→</span>
                <span>Are a beginner wanting a gamified learning path</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">→</span>
                <span>Trade from India or Southeast Asia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">→</span>
                <span>Enjoy unlocking features through account tiers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">→</span>
                <span>Prefer video-based learning resources</span>
              </li>
            </ul>
            <div className="mt-6">
              <CtaButton broker="binomo" label="Open Binomo Account" campaign="compare_quotex_binomo_choose" size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: 'Which has higher payouts, Quotex or Binomo?', a: 'Quotex offers up to 98% payouts versus Binomo\'s maximum of 90%. Quotex has a significant advantage on payout percentages across all asset classes.' },
            { q: 'Which has a lower minimum deposit?', a: 'Both require a $10 minimum deposit and offer $1 minimum trade sizes, making them equal on minimum entry.' },
            { q: 'Which is better for beginners?', a: 'Binomo has a simpler interface and better structured educational content. Quotex has a cleaner design but fewer learning resources. Binomo edges out for complete beginners.' },
            { q: 'Which is more trustworthy?', a: 'Quotex has IFMRRC certification (though expired). Binomo has faced regulatory warnings in several countries. Neither has tier-1 regulation. Quotex has a slightly better trust profile.' },
            { q: 'Which has faster withdrawals?', a: 'Quotex processes crypto withdrawals in about 47 minutes. Binomo typically takes 1-3 business days. Quotex is significantly faster for cryptocurrency withdrawals.' },
          ].map((faq, i) => (
            <div key={i} className="glass-card p-5">
              <h3 className="font-bold text-white text-sm mb-2">{faq.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-container pb-12">
        <h2 className="text-xl font-bold mb-6">Read Our Full Reviews</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href={`/${locale}/quotex`}>
            <div className="glass-card p-4 hover:border-emerald-500/30 transition-colors">
              <div className="text-xs text-emerald-400 font-semibold mb-1">9.4/10</div>
              <h3 className="font-bold text-white text-sm">Quotex Review</h3>
              <p className="text-xs text-gray-400 mt-1">Highest payout broker reviewed in depth</p>
            </div>
          </Link>
          <Link href={`/${locale}/binomo`}>
            <div className="glass-card p-4 hover:border-amber-500/30 transition-colors">
              <div className="text-xs text-amber-400 font-semibold mb-1">8.2/10</div>
              <h3 className="font-bold text-white text-sm">Binomo Review</h3>
              <p className="text-xs text-gray-400 mt-1">Tournament king reviewed with real data</p>
            </div>
          </Link>
          <Link href={`/${locale}/pocket-option`}>
            <div className="glass-card p-4 hover:border-emerald-500/30 transition-colors">
              <div className="text-xs text-emerald-400 font-semibold mb-1">9.5/10</div>
              <h3 className="font-bold text-white text-sm">Pocket Option Review</h3>
              <p className="text-xs text-gray-400 mt-1">Top-rated broker with copy trading</p>
            </div>
          </Link>
          <Link href={`/${locale}/compare`}>
            <div className="glass-card p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-xs text-blue-400 font-semibold mb-1">All Brokers</div>
              <h3 className="font-bold text-white text-sm">Full Comparison Table</h3>
              <p className="text-xs text-gray-400 mt-1">Compare all 7 brokers side by side</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="section-container pb-16">
        <div className="glass-card p-6 border border-red-500/10">
          <h3 className="text-sm font-bold text-red-400 mb-2">Risk Disclaimer</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Binary options trading involves substantial risk of loss and is not suitable for all investors.
            You should not invest money that you cannot afford to lose. Past performance is not indicative
            of future results. The information on this page is for educational purposes only and does not
            constitute financial advice. Quotex currently has no active regulatory oversight. Binomo is a
            member of FinaCom but is not regulated by a government financial authority. Please ensure you
            fully understand the risks before trading. This page contains affiliate links — we may earn a
            commission at no extra cost to you.
          </p>
        </div>
      </section>
    </div>
  );
}
