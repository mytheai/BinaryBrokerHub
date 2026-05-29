'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';

const comparisonRows = [
  { feature: 'Our Score', iq: '9.2/10', deriv: '9.0/10', winner: 'iq' },
  { feature: 'Founded', iq: '2013', deriv: '1999 (as Binary.com)', winner: 'deriv' },
  { feature: 'Years Operating', iq: '13 years', deriv: '26 years', winner: 'deriv' },
  { feature: 'Min Deposit', iq: '$10', deriv: '$5', winner: 'deriv' },
  { feature: 'Min Trade', iq: '$1', deriv: '$1', winner: 'tie' },
  { feature: 'Peak Payout', iq: '90–95%', deriv: '88–95%', winner: 'iq' },
  { feature: 'Total Assets', iq: '250+ (real markets)', deriv: '100+ real + synthetics', winner: 'iq' },
  { feature: 'Regulation', iq: 'CySEC (EU CFDs)', deriv: 'MFSA Malta (Tier-1)', winner: 'deriv' },
  { feature: 'Demo Account', iq: '$10,000 free', deriv: '$10,000 free', winner: 'tie' },
  { feature: 'Desktop App', iq: 'Win/Mac/Linux', deriv: 'Web + MT5', winner: 'iq' },
  { feature: 'Automation/Bots', iq: 'Not available', deriv: 'DBot (visual builder)', winner: 'deriv' },
  { feature: '24/7 Trading', iq: 'OTC weekends', deriv: 'Synthetic indices 24/7', winner: 'deriv' },
  { feature: 'Platform Types', iq: 'Proprietary only', deriv: 'DTrader, DBot, MT5, cTrader', winner: 'deriv' },
  { feature: 'Registered Users', iq: '48M+', deriv: '3M+', winner: 'iq' },
  { feature: 'Best For', iq: 'Platform UX & asset variety', deriv: 'Trust, bots & 24/7 trading', winner: 'tie' },
];

export default function IqOptionVsDerivPage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Compare', href: `/${locale}/compare` }, { label: 'IQ Option vs Deriv' }]} />
      {/* Hero Section */}
      <section className="section-container py-16 md:py-24 text-center">
        <span className="badge-gold mb-4">Regulated Brokers Compared</span>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
          IQ Option vs Deriv: The Battle of Regulated Brokers in 2026
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Two of the most trusted names in binary options — IQ Option (CySEC, rated 9.2/10) versus
          Deriv (MFSA Malta, rated 9.0/10). A deep comparison of regulation, platforms, and features.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <CtaButton broker="iqOption" label="Try IQ Option" campaign="compare_iq_deriv" size="md" />
          <CtaButton broker="deriv" label="Try Deriv" variant="secondary" campaign="compare_iq_deriv" size="md" />
        </div>
      </section>

      {/* Quick Verdict */}
      <section className="section-container pb-12">
        <div className="glass-card p-6 md:p-8 border border-emerald-500/20">
          <h2 className="text-xl font-bold mb-3 text-emerald-400">Quick Verdict</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong className="text-white">IQ Option wins on platform experience</strong> — its
            award-winning proprietary platform, native desktop apps, and 250+ assets make it the
            better choice for hands-on traders who want the best UX. <strong className="text-white">Deriv
            wins on trust and innovation</strong> — 26 years of operation, MFSA Tier-1 regulation,
            DBot automation, and synthetic indices for true 24/7 trading. Choose IQ Option for the
            best trading interface; choose Deriv if regulation, automation, and round-the-clock
            trading matter most.
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
                  <Link href={`/${locale}/iq-option`} className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                    IQ Option
                  </Link>
                  <div className="text-xs font-bold mt-1 text-emerald-400">9.2/10</div>
                </th>
                <th className="p-3 text-center">
                  <Link href={`/${locale}/deriv`} className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                    Deriv
                  </Link>
                  <div className="text-xs font-bold mt-1 text-blue-400">9.0/10</div>
                </th>
                <th className="p-3 text-center text-xs font-semibold text-gray-400 w-24">Winner</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.feature} className={`border-b border-white/[0.03] ${i % 2 ? 'bg-white/[0.01]' : ''}`}>
                  <td className="p-3 text-xs font-medium text-gray-400">{row.feature}</td>
                  <td className={`p-3 text-center text-xs ${row.winner === 'iq' ? 'text-emerald-400 font-bold' : 'text-gray-300'}`}>
                    {row.iq} {row.winner === 'iq' && <span>★</span>}
                  </td>
                  <td className={`p-3 text-center text-xs ${row.winner === 'deriv' ? 'text-emerald-400 font-bold' : 'text-gray-300'}`}>
                    {row.deriv} {row.winner === 'deriv' && <span>★</span>}
                  </td>
                  <td className="p-3 text-center text-xs text-gray-400">
                    {row.winner === 'iq' && <span className="badge-green">IQ Option</span>}
                    {row.winner === 'deriv' && <span className="badge-green">Deriv</span>}
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
            <h3 className="font-bold text-emerald-400 mb-3">IQ Option — Up to 95%</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              IQ Option offers maximum payouts of 95% on binary options (where available — note that
              binary options are restricted in the EU through its CySEC-regulated entity). Average
              payouts on major forex pairs range from 80-90%, which is competitive.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              With 250+ tradeable assets — the largest selection in this comparison — IQ Option gives
              you more opportunities to find the best payout rates across forex, stocks, ETFs, crypto,
              and commodities. The sheer variety of assets is a significant advantage.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-blue-400 mb-3">Deriv — Up to 95%</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Deriv matches IQ Option&apos;s maximum payout at 95%. Their real-market asset selection
              is smaller at 100+, but Deriv&apos;s unique synthetic indices offer additional trading
              opportunities with consistent payout rates that don&apos;t depend on market liquidity.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Synthetic indices are algorithmically generated assets that simulate real market behavior
              with guaranteed volatility. This means consistent payout rates 24/7, including weekends
              and holidays — a feature no other broker in our comparison offers.
            </p>
          </div>
        </div>
        <div className="glass-card p-4 mt-4 border border-blue-500/10">
          <p className="text-sm text-gray-300">
            <strong className="text-blue-400">Verdict:</strong> A tie at 95% max payout. IQ Option
            offers more real-market assets to trade, while Deriv&apos;s synthetic indices provide
            unique 24/7 trading opportunities with consistent payouts. Your preference depends on
            whether you value asset variety (IQ Option) or always-on trading (Deriv).
          </p>
        </div>
      </section>

      {/* Detailed Section: Platform & UX */}
      <section className="section-container pb-12">
        <h2 className="text-2xl font-bold mb-6">Platform &amp; User Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-emerald-400 mb-3">IQ Option Platform</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              IQ Option&apos;s proprietary platform has won multiple industry awards for its design and
              functionality. The native desktop applications for Windows, macOS, and Linux deliver a
              premium experience with smooth charting, advanced drawing tools, and multi-chart layouts.
              The platform feels polished and professional at every level.
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Award-winning proprietary platform</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Native desktop apps (Win/Mac/Linux)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>Advanced charting with multi-chart layouts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>250+ tradeable assets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>48M+ registered users worldwide</span>
              </li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-blue-400 mb-3">Deriv Platform Ecosystem</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Deriv takes a different approach with a multi-platform ecosystem. Instead of one app,
              you get DTrader (binary options), DBot (automated trading), and access to industry-standard
              MT5 and cTrader. This gives experienced traders more flexibility but may overwhelm
              beginners with choice.
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>DTrader — simple binary options platform</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>DBot — visual drag-and-drop bot builder</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>MetaTrader 5 integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>cTrader for advanced order types</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>Synthetic indices for 24/7 trading</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="glass-card p-4 mt-4 border border-emerald-500/10">
          <p className="text-sm text-gray-300">
            <strong className="text-emerald-400">Verdict:</strong> IQ Option delivers the best single-platform
            experience with superior UX and a native desktop app. Deriv offers more platform variety
            (DTrader, DBot, MT5, cTrader) for traders who want specialized tools. IQ Option is better
            for most traders; Deriv is better for power users and bot enthusiasts.
          </p>
        </div>
      </section>

      {/* Detailed Section: Regulation & Safety */}
      <section className="section-container pb-12">
        <h2 className="text-2xl font-bold mb-6">Regulation &amp; Safety</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-emerald-400 mb-3">IQ Option — CySEC Regulated</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              IQ Option&apos;s EU entity (IQ Option Europe Ltd) is regulated by CySEC (Cyprus Securities
              and Exchange Commission), license 247/14. CySEC is an EU-level regulator that enforces
              MiFID II compliance, segregated client funds, and investor compensation up to EUR 20,000.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Important note: CySEC regulation restricts binary options for EU clients. Non-EU clients
              trade through a separate entity with different regulatory coverage. IQ Option has been
              operating since 2013, serving 48M+ users with a strong reputation.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-blue-400 mb-3">Deriv — MFSA Malta (Tier-1)</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Deriv holds a Tier-1 license from MFSA (Malta Financial Services Authority), one of
              the most respected regulators in the EU. With 26 years of continuous operation since
              1999 (originally as Binary.com), Deriv is the longest-running binary options broker
              in the world.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              MFSA regulation requires strict capital adequacy, segregated client funds, regular audits,
              and compliance with EU financial standards. Deriv&apos;s quarter-century track record
              combined with Tier-1 regulation makes it the trust benchmark of the industry.
            </p>
          </div>
        </div>
        <div className="glass-card p-4 mt-4 border border-blue-500/10">
          <p className="text-sm text-gray-300">
            <strong className="text-blue-400">Verdict:</strong> Both brokers hold legitimate EU regulation —
            a rare distinction in the binary options industry. Deriv edges ahead with MFSA Tier-1
            status and 26 years of operation vs IQ Option&apos;s CySEC license and 13 years. Both are
            significantly more trustworthy than unregulated alternatives. If trust and safety are your
            top priority, these two are the best choices available.
          </p>
        </div>
      </section>

      {/* Detailed Section: Features */}
      <section className="section-container pb-12">
        <h2 className="text-2xl font-bold mb-6">Unique Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-emerald-400 mb-3">IQ Option Exclusive Features</h3>
            <ul className="text-sm text-gray-300 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">Native Desktop App</strong>
                  <p className="text-gray-400 mt-1">Full-featured applications for Windows, macOS, and Linux. Faster and more responsive than any web platform.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">250+ Assets</strong>
                  <p className="text-gray-400 mt-1">The widest asset selection among major binary brokers — forex, stocks, ETFs, crypto, commodities, and indices.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">Multi-Product Platform</strong>
                  <p className="text-gray-400 mt-1">Beyond binary options: trade CFDs, forex, stocks, and crypto from the same account and platform.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">Community of 48M+ Traders</strong>
                  <p className="text-gray-400 mt-1">The largest user base in binary options. Active community, tournaments, and educational resources.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-blue-400 mb-3">Deriv Exclusive Features</h3>
            <ul className="text-sm text-gray-300 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">DBot — Visual Bot Builder</strong>
                  <p className="text-gray-400 mt-1">Drag-and-drop automated trading bot builder. No coding required — create, test, and run strategies 24/7.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">Synthetic Indices</strong>
                  <p className="text-gray-400 mt-1">Algorithmically generated markets available 24/7/365. Trade on weekends and holidays when all other markets are closed.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">26-Year Track Record</strong>
                  <p className="text-gray-400 mt-1">Operating since 1999 as Binary.com, rebranded to Deriv in 2020. The longest-running binary options broker in the world.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">★</span>
                <div>
                  <strong className="text-white">Multi-Platform Ecosystem</strong>
                  <p className="text-gray-400 mt-1">DTrader, DBot, MT5, and cTrader — choose the right tool for your strategy. Industry-standard platforms alongside proprietary tools.</p>
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
            <h3 className="text-lg font-bold text-emerald-400 mb-4">Choose IQ Option If You...</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Want the best platform UX and design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Prefer a native desktop application</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Need access to 250+ tradeable assets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Want to trade CFDs, forex, and stocks alongside options</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Value CySEC EU regulation and investor protection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">→</span>
                <span>Want a polished, all-in-one trading experience</span>
              </li>
            </ul>
            <div className="mt-6">
              <CtaButton broker="iqOption" label="Open IQ Option Account" campaign="compare_iq_deriv_choose" size="md" />
            </div>
          </div>
          <div className="glass-card p-6 border border-blue-500/20">
            <h3 className="text-lg font-bold text-blue-400 mb-4">Choose Deriv If You...</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">→</span>
                <span>Prioritize maximum regulatory trust (MFSA Tier-1)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">→</span>
                <span>Want to build automated trading bots (DBot)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">→</span>
                <span>Need true 24/7 trading with synthetic indices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">→</span>
                <span>Prefer MetaTrader 5 or cTrader platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">→</span>
                <span>Value a 26-year track record of reliability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">→</span>
                <span>Want a lower $5 minimum deposit to start</span>
              </li>
            </ul>
            <div className="mt-6">
              <CtaButton broker="deriv" label="Open Deriv Account" campaign="compare_iq_deriv_choose" size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* Also Consider */}
      <section className="section-container pb-12">
        <div className="glass-card p-6 md:p-8 border border-emerald-500/10">
          <h2 className="text-xl font-bold mb-4">Also Consider: Higher Payouts</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            While IQ Option and Deriv offer strong regulation and platforms, neither leads on payouts.
            If maximum return per trade is your priority, consider{' '}
            <Link href={`/${locale}/pocket-option`} className="text-emerald-400 hover:underline font-semibold">Pocket Option (92%, rated 9.5/10)</Link>{' '}
            for copy trading and low deposits, or{' '}
            <Link href={`/${locale}/quotex`} className="text-emerald-400 hover:underline font-semibold">Quotex (98%, rated 9.4/10)</Link>{' '}
            for the highest payouts in the industry.
          </p>
          <div className="flex gap-3 flex-wrap">
            <CtaButton broker="pocketOption" label="Try Pocket Option" campaign="compare_iq_deriv_upsell" size="sm" />
            <CtaButton broker="quotex" label="Try Quotex" variant="secondary" campaign="compare_iq_deriv_upsell" size="sm" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: 'Which is more regulated, IQ Option or Deriv?', a: 'Both have strong regulation. IQ Option holds CySEC (EU). Deriv holds MFSA (Malta/EU), LFSA, VFSC, and BVI FSC across multiple jurisdictions. Deriv has broader global regulatory coverage.' },
            { q: 'Which has more trading instruments?', a: 'Deriv offers significantly more variety — forex, synthetics, commodities, stocks, and indices. IQ Option focuses on binary options (non-EU), forex, stocks, and crypto CFDs.' },
            { q: 'Can I trade on weekends?', a: 'Yes, with Deriv. Their synthetic indices trade 24/7 including weekends and holidays. IQ Option only offers trading during standard market hours.' },
            { q: 'Which is better for binary options?', a: 'IQ Option has a more polished binary options interface with better charting tools and 100+ indicators. Deriv offers binary options through Deriv Trader with competitive payouts.' },
            { q: 'Which has a lower minimum deposit?', a: 'Deriv requires just $5 minimum deposit. IQ Option requires $10. Both offer $1 minimum trade sizes.' },
            { q: 'Which has better educational resources?', a: 'IQ Option has a comprehensive learning academy with video courses and quizzes built into the platform. Deriv has a knowledge base and Deriv Academy but it is less interactive.' },
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
          <Link href={`/${locale}/iq-option`}>
            <div className="glass-card p-4 hover:border-emerald-500/30 transition-colors">
              <div className="text-xs text-emerald-400 font-semibold mb-1">9.2/10</div>
              <h3 className="font-bold text-white text-sm">IQ Option Review</h3>
              <p className="text-xs text-gray-400 mt-1">Award-winning platform reviewed in depth</p>
            </div>
          </Link>
          <Link href={`/${locale}/deriv`}>
            <div className="glass-card p-4 hover:border-blue-500/30 transition-colors">
              <div className="text-xs text-blue-400 font-semibold mb-1">9.0/10</div>
              <h3 className="font-bold text-white text-sm">Deriv Review</h3>
              <p className="text-xs text-gray-400 mt-1">26-year veteran broker reviewed</p>
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
            Binary options and CFD trading involve substantial risk of loss and are not suitable for
            all investors. You should not invest money that you cannot afford to lose. Past performance
            is not indicative of future results. The information on this page is for educational purposes
            only and does not constitute financial advice. IQ Option&apos;s CySEC regulation applies to
            its EU entity for CFD products; binary options may be offered through separately regulated
            entities. Deriv&apos;s MFSA regulation applies to specific entities and products. Please
            verify which entity and products are available in your jurisdiction. This page contains
            affiliate links — we may earn a commission at no extra cost to you.
          </p>
        </div>
      </section>
    </div>
  );
}
