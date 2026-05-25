'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';

const comparisonRows = [
  { feature: 'Our Score', quotex: '9.4/10', iq: '9.2/10', winner: 'quotex' },
  { feature: 'Founded', quotex: '2019', iq: '2013', winner: 'iq' },
  { feature: 'Max Payout', quotex: '98%', iq: '95%', winner: 'quotex' },
  { feature: 'Min Deposit', quotex: '$10', iq: '$10', winner: 'tie' },
  { feature: 'Min Trade', quotex: '$1', iq: '$1', winner: 'tie' },
  { feature: 'Total Assets', quotex: '95+', iq: '250+', winner: 'iq' },
  { feature: 'Regulation', quotex: 'None', iq: 'CySEC (EU)', winner: 'iq' },
  { feature: 'Demo Account', quotex: 'Unlimited $10K', iq: '$10K Refillable', winner: 'tie' },
  { feature: 'Platform', quotex: 'Web Only', iq: 'Desktop + Web + Mobile', winner: 'iq' },
  { feature: 'Indicators', quotex: 'Basic Set', iq: '100+ Indicators', winner: 'iq' },
  { feature: 'Copy Trading', quotex: 'Limited', iq: 'No', winner: 'quotex' },
  { feature: 'Crypto Withdrawal', quotex: '~47 min', iq: '1–24 hrs', winner: 'quotex' },
  { feature: 'Deposit Fees', quotex: 'Free', iq: 'Free', winner: 'tie' },
  { feature: 'Tournaments', quotex: 'Limited', iq: 'Yes', winner: 'iq' },
  { feature: 'Ease of Use', quotex: 'Beginner-friendly', iq: 'Moderate learning curve', winner: 'quotex' },
];

function WinnerBadge({ winner }: { winner: string }) {
  if (winner === 'quotex') {
    return <span className="badge-green text-xs">Winner</span>;
  }
  if (winner === 'iq') {
    return <span className="badge-gold text-xs">Winner</span>;
  }
  return <span className="text-xs text-gray-500 bg-gray-800/50 px-2 py-0.5 rounded-full">Tie</span>;
}

export default function QuotexVsIqOptionPage() {
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Breadcrumbs items={[{ label: 'Compare', href: `/${locale}/compare` }, { label: 'Quotex vs IQ Option' }]} />
      {/* ═══════════════════════════════════════════════════ */}
      {/* HERO SECTION                                      */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-emerald-600/10" />
        <div className="section-container relative z-10 text-center">
          <p className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-4">
            Head-to-Head Broker Comparison
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Quotex vs IQ Option 2026
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Which Binary Broker Wins?
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Two of the most popular binary options platforms go head to head.
            Quotex brings simplicity and high payouts; IQ Option counters with
            regulation and a professional-grade platform. We break down every
            detail so you can pick the right broker for <em>your</em> trading style.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton
              broker="quotex"
              label="Try Quotex Free Demo"
              type="demo"
              campaign="compare-quotex-vs-iq"
              size="lg"
            />
            <CtaButton
              broker="iqOption"
              label="Try IQ Option Free Demo"
              type="demo"
              variant="secondary"
              campaign="compare-quotex-vs-iq"
              size="lg"
            />
          </div>

          <p className="text-gray-500 text-xs mt-4">
            Updated May 2026 &middot; Based on live testing &amp; verified data
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* QUICK COMPARISON TABLE                             */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section-container py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Quick Comparison at a Glance
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Before we dive deep, here&apos;s how Quotex and IQ Option stack up across
          the features that matter most to binary options traders.
        </p>

        <div className="glass-card overflow-x-auto">
          <table className="w-full min-w-[600px] text-left">
            <thead>
              <tr className="border-b border-gray-700/50">
                <th className="px-4 py-3 text-gray-400 text-sm font-medium uppercase tracking-wider">
                  Feature
                </th>
                <th className="px-4 py-3 text-blue-400 text-sm font-medium uppercase tracking-wider text-center">
                  Quotex
                </th>
                <th className="px-4 py-3 text-emerald-400 text-sm font-medium uppercase tracking-wider text-center">
                  IQ Option
                </th>
                <th className="px-4 py-3 text-gray-400 text-sm font-medium uppercase tracking-wider text-center">
                  Winner
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={`border-b border-gray-800/50 ${
                    idx % 2 === 0 ? 'bg-gray-900/30' : ''
                  } hover:bg-gray-800/30 transition-colors`}
                >
                  <td className="px-4 py-3 text-white font-medium text-sm">
                    {row.feature}
                  </td>
                  <td className={`px-4 py-3 text-center text-sm ${
                    row.winner === 'quotex' ? 'text-blue-300 font-semibold' : 'text-gray-300'
                  }`}>
                    {row.quotex}
                  </td>
                  <td className={`px-4 py-3 text-center text-sm ${
                    row.winner === 'iq' ? 'text-emerald-300 font-semibold' : 'text-gray-300'
                  }`}>
                    {row.iq}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <WinnerBadge winner={row.winner} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-500 text-sm text-center mt-4">
          Scorecard: Quotex wins 5 categories &middot; IQ Option wins 6 &middot; 4 tied
        </p>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 1: PAYOUT DEEP DIVE                       */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section-container py-16">
        <div className="glass-card p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="badge-green">Quotex Wins</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Payout Deep Dive
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Quotex — Up to 98% Payout</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Quotex consistently offers some of the highest payouts in the binary
                options industry. On popular currency pairs like EUR/USD during peak
                hours, you&apos;ll regularly see payouts between 85–98%. Even on slower
                assets, Quotex rarely drops below 70%.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Max payout: <strong className="text-white">98%</strong> on select forex pairs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Average payout: <strong className="text-white">80–92%</strong> across all assets
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Weekend payouts stay competitive on crypto pairs
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">IQ Option — Up to 95% Payout</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                IQ Option&apos;s binary options payouts cap at 95%, which is still
                excellent by industry standards. However, average payouts tend to
                sit around 75–88%. The difference of 3–5% per trade adds up
                significantly over hundreds of trades.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Max payout: <strong className="text-white">95%</strong> on major pairs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">~</span>
                  Average payout: <strong className="text-white">75–88%</strong> across assets
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">~</span>
                  Payouts can drop sharply during low-volume periods
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              <strong>Bottom line:</strong> If payout percentage is your primary concern,
              Quotex&apos;s 98% ceiling gives it a clear edge. Over 1,000 trades with a
              $100 stake, even a 3% average difference means roughly $3,000 more in
              your pocket with Quotex — assuming equal win rates.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 2: PLATFORM & TECHNOLOGY                  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section-container py-16">
        <div className="glass-card p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="badge-gold">IQ Option Wins</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Platform &amp; Technology
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Quotex — Simple &amp; Web-Based</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Quotex runs entirely in your browser. There&apos;s no desktop app and
                no mobile app (though the mobile web version works decently). The
                charting interface is clean and minimalist — great for beginners,
                but experienced traders may find it limiting.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Clean, distraction-free interface
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Fast load times, works on any device with a browser
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  Limited technical indicators (basic set only)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  No desktop or native mobile application
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">IQ Option — Full-Suite Platform</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                IQ Option&apos;s platform is widely regarded as one of the best in
                the entire binary options industry. Available on Windows, macOS,
                Linux, iOS, Android, and web — it&apos;s a true multi-platform
                experience. The charting tools rival dedicated software like
                TradingView.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  100+ technical indicators and drawing tools
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Native apps for Windows, Mac, Linux, iOS, Android
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Multiple chart types including Heikin Ashi, Kagi, Renko
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Built-in economic calendar and market news feed
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-emerald-900/20 border border-emerald-800/30 rounded-lg">
            <p className="text-emerald-300 text-sm">
              <strong>Bottom line:</strong> IQ Option wins this round decisively. Its
              platform is years ahead of Quotex in terms of charting tools,
              technical analysis capabilities, and cross-device availability. If
              you rely on technical analysis for your trading decisions, IQ Option
              is the clear choice here.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 3: TRUST & SAFETY                         */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section-container py-16">
        <div className="glass-card p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="badge-gold">IQ Option Wins</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Trust &amp; Safety
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Quotex — Unregulated</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Quotex currently holds no regulatory license from any major financial
                authority. Their IFMRRC membership expired and has not been renewed.
                While many traders use Quotex without issues, the lack of regulation
                means there&apos;s no external body overseeing fund safety or dispute
                resolution.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  No active regulatory license
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  No investor compensation scheme
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">~</span>
                  Operational since 2019, growing user base
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Fast withdrawal processing (crypto ~47 min)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">IQ Option — CySEC Regulated</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                IQ Option is licensed by the Cyprus Securities and Exchange Commission
                (CySEC), a respected EU regulator. This means segregated client funds,
                mandatory reporting, and access to investor compensation schemes for
                EU clients. Founded in 2013, IQ Option has over a decade of track
                record.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  CySEC license (License No. 247/14)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Segregated client funds in EU banks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  10+ years operational history
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Investor Compensation Fund (up to €20,000)
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-emerald-900/20 border border-emerald-800/30 rounded-lg">
            <p className="text-emerald-300 text-sm">
              <strong>Bottom line:</strong> IQ Option wins on trust and safety by a wide
              margin. CySEC regulation provides genuine consumer protection that
              Quotex simply cannot match. If fund safety is your top priority —
              especially with larger deposits — IQ Option is the safer choice.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 4: SIMPLICITY & BEGINNER EXPERIENCE       */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section-container py-16">
        <div className="glass-card p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="badge-green">Quotex Wins</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Simplicity &amp; Beginner Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Quotex — Built for Beginners</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Quotex was designed from the ground up for simplicity. New traders
                can register, open a demo account, and place their first trade in
                under 2 minutes. The interface strips away complexity — you see
                the chart, the Up/Down buttons, and your trade amount. That&apos;s it.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Sign up to first trade in under 2 minutes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Zero information overload — clean UI
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Unlimited demo account with instant refills
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  No KYC required for small deposits/withdrawals
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">IQ Option — Feature-Rich but Complex</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                IQ Option&apos;s platform can feel overwhelming for complete beginners.
                With dozens of asset types, 100+ indicators, multiple order types,
                and a complex interface, the learning curve is steeper. However,
                IQ Option offers excellent educational resources and a well-designed
                demo account to ease the transition.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">~</span>
                  Steeper learning curve due to feature density
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  Built-in video tutorials and trading guides
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  $10K demo account to practice risk-free
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">~</span>
                  KYC verification required before withdrawals
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
            <p className="text-blue-300 text-sm">
              <strong>Bottom line:</strong> If you&apos;re brand new to binary options and
              want to start trading quickly without a steep learning curve, Quotex
              is the better choice. Its minimalist interface lets you focus on
              learning market direction rather than navigating complex software.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 5: WHO SHOULD CHOOSE WHICH                */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section-container py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Who Should Choose Which?
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          There&apos;s no single &quot;best&quot; broker — it depends on what you prioritize.
          Here&apos;s our recommendation based on trader profiles.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Quotex Card */}
          <div className="glass-card p-8 border-t-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Choose Quotex If You&apos;re...</h3>
            <ul className="space-y-3 text-gray-300 mt-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-lg">→</span>
                <span>A <strong className="text-white">beginner</strong> who wants the simplest possible trading experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-lg">→</span>
                <span>Focused on <strong className="text-white">maximum payouts</strong> — 98% vs 95% adds up over time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-lg">→</span>
                <span>Prefer <strong className="text-white">fast crypto withdrawals</strong> (~47 minutes average)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-lg">→</span>
                <span>Want to <strong className="text-white">avoid KYC</strong> for smaller trading amounts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-lg">→</span>
                <span>Trading <strong className="text-white">short-term binary options</strong> (1–5 minute expiry)</span>
              </li>
            </ul>

            <div className="mt-6">
              <CtaButton
                broker="quotex"
                label="Open Quotex Account"
                campaign="compare-quotex-vs-iq-bottom"
                size="lg"
                className="w-full justify-center"
              />
            </div>
          </div>

          {/* IQ Option Card */}
          <div className="glass-card p-8 border-t-4 border-emerald-500">
            <h3 className="text-2xl font-bold text-emerald-400 mb-2">Choose IQ Option If You&apos;re...</h3>
            <ul className="space-y-3 text-gray-300 mt-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 text-lg">→</span>
                <span>An <strong className="text-white">experienced trader</strong> who needs advanced charting tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 text-lg">→</span>
                <span>Prioritizing <strong className="text-white">regulation and fund safety</strong> (CySEC licensed)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 text-lg">→</span>
                <span>Want access to <strong className="text-white">250+ tradeable assets</strong> across multiple markets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 text-lg">→</span>
                <span>Need a <strong className="text-white">native desktop or mobile app</strong> for serious trading</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 text-lg">→</span>
                <span>Planning to <strong className="text-white">scale up</strong> to CFDs, forex, or stocks later</span>
              </li>
            </ul>

            <div className="mt-6">
              <CtaButton
                broker="iqOption"
                label="Open IQ Option Account"
                campaign="compare-quotex-vs-iq-bottom"
                size="lg"
                className="w-full justify-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* FINAL VERDICT                                      */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section-container py-16">
        <div className="glass-card p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Verdict
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            Both brokers earn a spot in our top 3 rankings for good reason.
            <strong className="text-blue-400"> Quotex</strong> (9.4/10) edges ahead on
            payouts and simplicity — ideal for traders who want fast, high-return
            binary options trading without complexity.
            <strong className="text-emerald-400"> IQ Option</strong> (9.2/10) is the stronger
            choice for experienced traders who value regulation, advanced tools, and
            a wider asset selection.
          </p>
          <p className="text-gray-400 text-base max-w-2xl mx-auto mb-8">
            Our recommendation? Start with both demo accounts — they&apos;re free.
            Spend a week on each platform and let your own experience decide.
            Many successful traders maintain accounts on both brokers to take
            advantage of each platform&apos;s strengths.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton
              broker="quotex"
              label="Try Quotex — 98% Payouts"
              type="demo"
              campaign="compare-quotex-vs-iq-verdict"
              size="lg"
            />
            <CtaButton
              broker="iqOption"
              label="Try IQ Option — CySEC Regulated"
              type="demo"
              variant="secondary"
              campaign="compare-quotex-vs-iq-verdict"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* INTERNAL LINKS                                     */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section-container py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Continue Your Research
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href={`/${locale}/quotex`}
            className="glass-card p-5 hover:bg-gray-800/50 transition-colors group"
          >
            <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
              Quotex Full Review
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              In-depth analysis of Quotex&apos;s features, payouts, and withdrawal process
            </p>
          </Link>

          <Link
            href={`/${locale}/iq-option`}
            className="glass-card p-5 hover:bg-gray-800/50 transition-colors group"
          >
            <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
              IQ Option Full Review
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Complete breakdown of IQ Option&apos;s platform, regulation, and trading tools
            </p>
          </Link>

          <Link
            href={`/${locale}/compare`}
            className="glass-card p-5 hover:bg-gray-800/50 transition-colors group"
          >
            <h3 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
              Compare All Brokers
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Side-by-side comparison of all 7 brokers we&apos;ve reviewed
            </p>
          </Link>

          <Link
            href={`/${locale}/blog/is-quotex-real-or-fake`}
            className="glass-card p-5 hover:bg-gray-800/50 transition-colors group"
          >
            <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
              Is Quotex Real or Fake?
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Our honest investigation into Quotex&apos;s legitimacy and safety
            </p>
          </Link>

          <Link
            href={`/${locale}/blog/quotex-deposit-withdrawal`}
            className="glass-card p-5 hover:bg-gray-800/50 transition-colors group"
          >
            <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
              Quotex Deposits &amp; Withdrawals
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Step-by-step guide to funding your account and cashing out profits
            </p>
          </Link>

          <Link
            href={`/${locale}/blog/quotex-strategy`}
            className="glass-card p-5 hover:bg-gray-800/50 transition-colors group"
          >
            <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
              Best Quotex Trading Strategies
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Proven strategies for improving your win rate on Quotex
            </p>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* RISK DISCLAIMER                                    */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section-container pb-16">
        <div className="border border-amber-800/30 bg-amber-950/20 rounded-xl p-6">
          <h3 className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Risk Disclaimer
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Binary options trading involves substantial risk and may not be suitable
            for all investors. You could lose some or all of your invested capital.
            Past performance is not indicative of future results. The information on
            this page is for educational purposes only and should not be considered
            financial advice. Always trade responsibly and never invest more than
            you can afford to lose. Quotex is unregulated; IQ Option is regulated
            by CySEC for EU clients only. Regulation status may vary by jurisdiction.
            Please verify the regulatory status applicable to your country before
            opening an account.
          </p>
        </div>
      </section>
    </main>
  );
}
