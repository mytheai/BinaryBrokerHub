'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';

const comparisonRows = [
  { feature: 'Our Score', po: '9.5/10', binomo: '8.2/10', winner: 'po' },
  { feature: 'Founded', po: '2017', binomo: '2014', winner: 'binomo' },
  { feature: 'Min Deposit', po: '$5', binomo: '$10', winner: 'po' },
  { feature: 'Min Trade', po: '$1', binomo: '$1', winner: 'tie' },
  { feature: 'Max Payout', po: '92%', binomo: '90%', winner: 'po' },
  { feature: 'Total Assets', po: '180+', binomo: '70+', winner: 'po' },
  { feature: 'Demo Account', po: '$50,000 free', binomo: '$1,000 free', winner: 'po' },
  { feature: 'Copy Trading', po: 'Full featured', binomo: 'Not available', winner: 'po' },
  { feature: 'Tournaments', po: 'Yes', binomo: 'Daily (industry best)', winner: 'binomo' },
  { feature: 'Regulation', po: 'IFMRRC', binomo: 'FinaCom A', winner: 'tie' },
  { feature: 'Crypto Withdrawal', po: '12-45 min', binomo: '1-24 hrs', winner: 'po' },
  { feature: 'Desktop App', po: 'Web only', binomo: 'Web only', winner: 'tie' },
  { feature: 'Deposit Methods', po: '50+ methods', binomo: '20+ methods', winner: 'po' },
  { feature: 'Education', po: 'Guides + copy trading', binomo: 'Video tutorials', winner: 'tie' },
  { feature: 'Best For', po: 'Copy trading & payouts', binomo: 'Tournaments & beginners', winner: 'tie' },
];

export default function PocketOptionVsBinomoPage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Compare', href: `/${locale}/compare` }, { label: 'Pocket Option vs Binomo' }]} />
      {/* Hero Section */}
      <section className="section-container py-16 md:py-24 text-center">
        <span className="badge-gold mb-4">Head-to-Head Comparison</span>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
          Pocket Option vs Binomo: Which Broker Is Better in 2026?
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          An honest, data-driven comparison of Pocket Option (rated 9.5/10) and Binomo (rated 8.2/10).
          We tested both platforms with real money to help you choose the right broker for your trading style.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <CtaButton broker="pocketOption" label="Try Pocket Option" campaign="compare_po_binomo" size="md" />
          <CtaButton broker="binomo" label="Try Binomo" variant="secondary" campaign="compare_po_binomo" size="md" />
        </div>
      </section>

      {/* Quick Verdict */}
      <section className="section-container pb-12">
        <div className="glass-card p-6 md:p-8 border border-emerald-500/20">
          <h2 className="text-xl font-bold mb-3 text-emerald-400">Quick Verdict</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong className="text-white">Pocket Option wins overall</strong> with a lower minimum deposit ($5 vs $10),
            higher payouts (92% vs 90%), more assets (180+ vs 70+), and a unique copy trading feature that Binomo
            doesn&apos;t offer. However, <strong className="text-white">Binomo is the better choice</strong> if you
            enjoy tournament-style competitive trading or you&apos;re a beginner in India/Southeast Asia looking for a
            gamified learning experience. Pocket Option is the stronger platform for most traders.
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
                  <Link href={`/${locale}/pocket-option`} className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                    Pocket Option
                  </Link>
                  <div className="text-xs font-bold mt-1 text-emerald-400">9.5/10</div>
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
                  <td className={`p-3 text-center text-xs ${row.winner === 'po' ? 'text-emerald-400 font-bold' : 'text-gray-300'}`}>
                    {row.po} {row.winner === 'po' && <span>★</span>}
                  </td>
                  <td className={`p-3 text-center text-xs ${row.winner === 'binomo' ? 'text-emerald-400 font-bold' : 'text-gray-300'}`}>
                    {row.binomo} {row.winner === 'binomo' && <span>★</span>}
                  </td>
                  <td className="p-3 text-center text-xs text-gray-400">
                    {row.winner === 'po' && <span className="badge-green">Pocket Option</span>}
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
            <h3 className="font-bold text-emerald-400 mb-3">Pocket Option — Up to 92%</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Pocket Option offers maximum payouts of 92% on popular currency pairs during peak market hours.
              Average payouts on major forex pairs sit around 80-85%, which is competitive for the industry.
              The platform also provides bonus codes that can further increase your effective payout.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              With 180+ assets to trade, you can find the best payout rates by switching between different
              currency pairs, commodities, and cryptocurrencies depending on market conditions.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-amber-400 mb-3">Binomo — Up to 90%</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Binomo maxes out at 90% payouts, which is slightly below Pocket Option. The platform&apos;s
              payout structure varies by account tier — Standard, Gold, and VIP accounts receive progressively
              higher payouts, incentivizing larger deposits.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              With a smaller asset library of 70+, your options for payout optimization are more limited.
              However, Binomo&apos;s tournament prizes can effectively boost your overall returns if you
              perform well in their daily competitions.
            </p>
          </div>
        </div>
        <div className="glass-card p-4 mt-4 border border-emerald-500/10">
          <p className="text-sm text-gray-300">
            <strong className="text-emerald-400">Verdict:</strong> Pocket Option wins on payouts with a 92% max
            vs Binomo&apos;s 90%. The difference may seem small, but over hundreds of trades it compounds
            significantly. Pocket Option also offers more assets to find the best rates.
          </p>
        </div>
      </section>

      {/* Detailed Section: Platform & UX */}
      <section className="section-container pb-12">
        <h2 className="text-2xl font-bold mb-6">Platform &amp; User Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-emerald-400 mb-3">Pocket Option Platform</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Pocket Option&apos;s web-based platform is clean and professional. The charting tools include
              over 30 technical indicators, multiple timeframes, and drawing tools. The standout feature is
              the integrated copy trading system — you can browse top traders, see their stats, and
              automatically mirror their trades.
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Copy trading with transparent trader stats</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>30+ technical indicators</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>$50,000 demo account for practice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Mobile app for iOS and Android</span>
              </li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-amber-400 mb-3">Binomo Platform</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Binomo takes a different approach with a gamified, beginner-friendly interface. The platform
              feels more like a mobile game than a trading terminal, which works great for newcomers but
              may feel limiting for experienced traders. Binomo&apos;s daily tournaments are a unique
              draw — compete against other traders for cash prizes.
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span>Gamified, beginner-friendly interface</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span>Daily cash tournaments (industry best)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span>Progressive account tiers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span>Video tutorial library</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="glass-card p-4 mt-4 border border-emerald-500/10">
          <p className="text-sm text-gray-300">
            <strong className="text-emerald-400">Verdict:</strong> Pocket Option offers a more professional
            trading experience with copy trading. Binomo&apos;s gamified approach is better for absolute
            beginners who want a low-pressure environment with tournament excitement.
          </p>
        </div>
      </section>

      {/* Detailed Section: Regulation & Safety */}
      <section className="section-container pb-12">
        <h2 className="text-2xl font-bold mb-6">Regulation &amp; Safety</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-emerald-400 mb-3">Pocket Option — IFMRRC</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Pocket Option is regulated by the IFMRRC (International Financial Market Relations Regulation
              Center). While IFMRRC is not a Tier-1 regulator like CySEC or MFSA, it provides a dispute
              resolution mechanism and requires member brokers to maintain segregated client funds. Pocket
              Option has been operating since 2017 with a generally positive reputation among traders and
              over 15 million registered users.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-amber-400 mb-3">Binomo — FinaCom Category A</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Binomo holds Category A membership in the Financial Commission (FinaCom), which provides up
              to $20,000 per complaint through its compensation fund. FinaCom is an independent dispute
              resolution organization, not a government regulator. Binomo has been operating since 2014
              and maintains a strong presence in India and Southeast Asian markets.
            </p>
          </div>
        </div>
        <div className="glass-card p-4 mt-4 border border-amber-500/10">
          <p className="text-sm text-gray-300">
            <strong className="text-amber-400">Verdict:</strong> Neither broker holds Tier-1 regulation.
            Binomo&apos;s FinaCom membership offers a concrete $20,000 compensation fund, while Pocket
            Option&apos;s IFMRRC provides dispute resolution. Both are acceptable for the binary options
            industry, but if regulation is your priority, consider{' '}
            <Link href={`/${locale}/deriv`} className="text-blue-400 hover:underline">Deriv (MFSA)</Link>{' '}
            or <Link href={`/${locale}/iq-option`} className="text-blue-400 hover:underline">IQ Option (CySEC)</Link> instead.
          </p>
        </div>
      </section>

      {/* Detailed Section: Features */}
      <section className="section-container pb-12">
        <h2 className="text-2xl font-bold mb-6">Unique Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-emerald-400 mb-3">Pocket Option Exclusive Features</h3>
            <ul className="text-sm text-gray-300 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">Copy Trading</strong>
                  <p className="text-gray-400 mt-1">Browse and automatically copy top-performing traders. See their win rate, profit history, and risk level before following.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">$5 Minimum Deposit</strong>
                  <p className="text-gray-400 mt-1">The lowest entry barrier among major brokers. Start real trading with minimal risk.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">50+ Payment Methods</strong>
                  <p className="text-gray-400 mt-1">Crypto, e-wallets, bank cards, local payment systems — the widest selection available.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">Fast Crypto Withdrawals</strong>
                  <p className="text-gray-400 mt-1">Average crypto withdrawal processed in 12-45 minutes, among the fastest in the industry.</p>
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
                  <strong className="text-white">Daily Tournaments</strong>
                  <p className="text-gray-400 mt-1">The best tournament system in binary options. Compete daily for cash prizes with low entry fees or free entry.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">Gamified Experience</strong>
                  <p className="text-gray-400 mt-1">Account tiers (Standard, Gold, VIP) with unlockable features create a progression system that motivates beginners.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">India/SEA Focus</strong>
                  <p className="text-gray-400 mt-1">Local language support, UPI payments, and localized customer service for Indian and Southeast Asian traders.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">Video Tutorial Library</strong>
                  <p className="text-gray-400 mt-1">Comprehensive video-based education covering strategies, chart reading, and risk management basics.</p>
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
            <h3 className="text-lg font-bold text-emerald-400 mb-4">Choose Pocket Option If You...</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Want to copy successful traders while you learn</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Prefer a low $5 minimum deposit to start</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Need access to 180+ tradeable assets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Value fast crypto withdrawals (12-45 min)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Want higher maximum payouts (92% vs 90%)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Want a larger $50K demo account to practice</span>
              </li>
            </ul>
            <div className="mt-6">
              <CtaButton broker="pocketOption" label="Open Pocket Option Account" campaign="compare_po_binomo_choose" size="md" />
            </div>
          </div>
          <div className="glass-card p-6 border border-amber-500/20">
            <h3 className="text-lg font-bold text-amber-400 mb-4">Choose Binomo If You...</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-amber-400">→</span>
                <span>Enjoy competitive tournament-style trading</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">→</span>
                <span>Are a complete beginner wanting a gamified experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">→</span>
                <span>Trade from India or Southeast Asia (local support)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">→</span>
                <span>Prefer video-based learning over text guides</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">→</span>
                <span>Like unlocking features through account tier progression</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">→</span>
                <span>Want FinaCom&apos;s $20K compensation fund protection</span>
              </li>
            </ul>
            <div className="mt-6">
              <CtaButton broker="binomo" label="Open Binomo Account" campaign="compare_po_binomo_choose" size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-container pb-12">
        <h2 className="text-xl font-bold mb-6">Read Our Full Reviews</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href={`/${locale}/pocket-option`}>
            <div className="glass-card p-4 hover:border-emerald-500/30 transition-colors">
              <div className="text-xs text-emerald-400 font-semibold mb-1">9.5/10</div>
              <h3 className="font-bold text-white text-sm">Pocket Option Review</h3>
              <p className="text-xs text-gray-400 mt-1">Full review with real-money test results</p>
            </div>
          </Link>
          <Link href={`/${locale}/binomo`}>
            <div className="glass-card p-4 hover:border-amber-500/30 transition-colors">
              <div className="text-xs text-amber-400 font-semibold mb-1">8.2/10</div>
              <h3 className="font-bold text-white text-sm">Binomo Review</h3>
              <p className="text-xs text-gray-400 mt-1">Full review with tournament analysis</p>
            </div>
          </Link>
          <Link href={`/${locale}/quotex`}>
            <div className="glass-card p-4 hover:border-emerald-500/30 transition-colors">
              <div className="text-xs text-emerald-400 font-semibold mb-1">9.4/10</div>
              <h3 className="font-bold text-white text-sm">Quotex Review</h3>
              <p className="text-xs text-gray-400 mt-1">Highest payout broker reviewed</p>
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
            constitute financial advice. Both Pocket Option and Binomo are not regulated by Tier-1
            financial authorities. Please ensure you fully understand the risks before trading.
            This page contains affiliate links — we may earn a commission at no extra cost to you.
          </p>
        </div>
      </section>
    </div>
  );
}
