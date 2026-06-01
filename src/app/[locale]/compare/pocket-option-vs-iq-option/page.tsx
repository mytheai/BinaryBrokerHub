'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import BrokerLogo from '@/components/BrokerLogo';
import Breadcrumbs from '@/components/Breadcrumbs';

const comparisonRows = [
  { feature: 'Our Score', po: '9.5/10', iq: '9.2/10', winner: 'po' },
  { feature: 'Founded', po: '2017', iq: '2013', winner: 'iq' },
  { feature: 'Min Deposit', po: '$5', iq: '$10', winner: 'po' },
  { feature: 'Peak Payout', po: '89–92%', iq: '90–95%', winner: 'iq' },
  { feature: 'Total Assets', po: '180+', iq: '250+', winner: 'iq' },
  { feature: 'Regulation', po: 'IFMRRC', iq: 'CySEC (EU) + offshore', winner: 'iq' },
  { feature: 'Copy Trading', po: 'Yes (full featured)', iq: 'No', winner: 'po' },
  { feature: 'Demo Account', po: '$50,000 virtual', iq: '$10,000 virtual', winner: 'po' },
  { feature: 'Desktop App', po: 'Web only', iq: 'Win/Mac/Linux', winner: 'iq' },
  { feature: 'Registered Users', po: '15M+ (growing fast)', iq: '48M+', winner: 'iq' },
  { feature: 'Min Trade', po: '$1', iq: '$1', winner: 'tie' },
  { feature: 'Deposit Fees', po: 'Free', iq: 'Free', winner: 'tie' },
  { feature: 'Tournaments', po: 'Yes', iq: 'Yes', winner: 'tie' },
  { feature: 'Crypto Withdrawal', po: '12-45 min', iq: '1-24 hrs', winner: 'po' },
  { feature: 'Mobile App', po: 'iOS & Android', iq: 'iOS & Android', winner: 'tie' },
  { feature: 'Expiry Times', po: '3s — 1 month', iq: '1m — end of month', winner: 'po' },
] as const;

const payoutComparison = [
  { asset: 'EUR/USD', po: '85-92%', iq: '85-95%', winner: 'iq' },
  { asset: 'GBP/JPY', po: '80-90%', iq: '82-92%', winner: 'iq' },
  { asset: 'Gold (XAU/USD)', po: '75-85%', iq: '78-90%', winner: 'iq' },
  { asset: 'Bitcoin', po: '70-85%', iq: '65-80%', winner: 'po' },
  { asset: 'Apple (AAPL)', po: '75-88%', iq: '80-92%', winner: 'iq' },
  { asset: 'OTC Assets', po: '80-92%', iq: '75-88%', winner: 'po' },
] as const;

export default function PocketOptionVsIqOptionPage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Compare', href: `/${locale}/compare` }, { label: 'Pocket Option vs IQ Option' }]} />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        <div className="relative section-container text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="badge-gold">Head-to-Head Comparison</span>
            <span className="badge-green">Updated May 2026</span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <BrokerLogo broker="pocket-option" size={40} />
            <span className="text-gray-500 text-xl font-bold">vs</span>
            <BrokerLogo broker="iq-option" size={40} />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Pocket Option vs IQ Option 2026
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
            Two of the biggest names in binary options trading, compared across every metric that matters.
            Pocket Option brings copy trading and low deposits. IQ Option counters with CySEC regulation
            and a best-in-class trading terminal. Which one is right for you?
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Based on real-money testing &bull; 250+ trades on each platform &bull; Last verified May 2026
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CtaButton broker="pocketOption" label="Try Pocket Option" campaign="po_vs_iq_hero" size="lg" />
            <CtaButton broker="iqOption" label="Try IQ Option" variant="secondary" campaign="po_vs_iq_hero" size="lg" />
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Your capital is at risk. Only trade with money you can afford to lose.
          </p>
        </div>
      </section>

      {/* Quick Verdict */}
      <section className="section-container pb-12">
        <div className="glass-card p-6 md:p-8 border border-emerald-500/20">
          <h2 className="text-xl font-bold mb-4 text-center">Quick Verdict</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-emerald-400 mb-1">9.5/10</div>
              <div className="font-bold text-white mb-2">Pocket Option</div>
              <p className="text-sm text-gray-400">
                Best for beginners and copy traders. Lower deposit ($5), larger demo ($50K),
                faster withdrawals, and the only platform with full copy trading.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-blue-400 mb-1">9.2/10</div>
              <div className="font-bold text-white mb-2">IQ Option</div>
              <p className="text-sm text-gray-400">
                Best for serious traders. CySEC-regulated EU entity, award-winning desktop app,
                250+ assets, and higher max payouts (up to 95%).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="section-container pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          Side-by-Side Comparison
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Every critical metric compared. Green highlighting shows the winner in each category.
        </p>
        <div className="glass-card overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left p-4 text-xs font-semibold text-gray-400 w-40">Feature</th>
                <th className="p-4 text-center">
                  <Link href={`/${locale}/pocket-option`} className="text-sm font-bold text-white hover:text-emerald-400 transition-colors">
                    Pocket Option
                  </Link>
                  <div className="text-xs font-bold mt-1 text-emerald-400">9.5/10</div>
                </th>
                <th className="p-4 text-center">
                  <Link href={`/${locale}/iq-option`} className="text-sm font-bold text-white hover:text-blue-400 transition-colors">
                    IQ Option
                  </Link>
                  <div className="text-xs font-bold mt-1 text-blue-400">9.2/10</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.feature} className={`border-b border-white/[0.03] ${i % 2 ? 'bg-white/[0.01]' : ''}`}>
                  <td className="p-4 text-xs font-medium text-gray-400">{row.feature}</td>
                  <td className={`p-4 text-center text-sm ${row.winner === 'po' ? 'text-emerald-400 font-bold' : 'text-gray-300'}`}>
                    {row.po}
                    {row.winner === 'po' && <span className="ml-1">★</span>}
                  </td>
                  <td className={`p-4 text-center text-sm ${row.winner === 'iq' ? 'text-emerald-400 font-bold' : 'text-gray-300'}`}>
                    {row.iq}
                    {row.winner === 'iq' && <span className="ml-1">★</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">
          ★ = Winner in category. Data from our real-money testing + official broker documentation.
        </p>
      </section>

      {/* Platform Comparison */}
      <section className="section-container pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          Platform &amp; Trading Experience
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          How the actual trading experience compares between these two platforms.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-green">Pocket Option</span>
              <span className="text-xs text-gray-500">Web-First Simplicity</span>
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Clean web interface</strong> — intuitive design that beginners can navigate within minutes. No downloads required.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Copy trading built-in</strong> — follow top traders and automatically mirror their trades. Unique feature in the binary space.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Social trading feed</strong> — see what other traders are doing in real-time. Learn from the community.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Quick trade execution</strong> — expiry times starting from just 3 seconds for fast-paced trading.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">△</span>
                <span><strong className="text-white">Limited charting tools</strong> — adequate for most traders, but lacks the depth of IQ Option&apos;s charting suite.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">△</span>
                <span><strong className="text-white">No desktop app</strong> — web-only means you depend on browser performance. Works fine for most users.</span>
              </li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-green">IQ Option</span>
              <span className="text-xs text-gray-500">Pro-Grade Terminal</span>
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Best-in-class desktop app</strong> — native Windows, Mac, and Linux clients with blazing-fast chart rendering.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Advanced charting</strong> — 100+ indicators, multiple chart types, drawing tools. Rivals dedicated charting platforms.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Multi-asset trading</strong> — beyond binary options: CFDs, forex, stocks, ETFs, crypto all on one platform.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Educational resources</strong> — extensive video tutorials, articles, and a built-in learning section.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">△</span>
                <span><strong className="text-white">No copy trading</strong> — you must analyze and execute every trade yourself. Steep learning curve for beginners.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">△</span>
                <span><strong className="text-white">Binary options restricted in EU</strong> — CySEC entity only offers CFDs. Binary options available through offshore entity.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400 mb-4">
            <strong className="text-white">Platform verdict:</strong> IQ Option has the superior trading terminal,
            but Pocket Option&apos;s copy trading feature is a game-changer for those who want to earn while learning.
          </p>
        </div>
      </section>

      {/* Payout Analysis */}
      <section className="section-container pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          Payout Comparison by Asset Class
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Real payout percentages we observed during testing. Payouts fluctuate based on market conditions,
          time of day, and expiry length.
        </p>
        <div className="glass-card overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left p-4 text-xs font-semibold text-gray-400">Asset</th>
                <th className="p-4 text-center text-xs font-semibold text-emerald-400">Pocket Option</th>
                <th className="p-4 text-center text-xs font-semibold text-blue-400">IQ Option</th>
                <th className="p-4 text-center text-xs font-semibold text-gray-400">Winner</th>
              </tr>
            </thead>
            <tbody>
              {payoutComparison.map((row, i) => (
                <tr key={row.asset} className={`border-b border-white/[0.03] ${i % 2 ? 'bg-white/[0.01]' : ''}`}>
                  <td className="p-4 text-sm font-medium text-gray-300">{row.asset}</td>
                  <td className={`p-4 text-center text-sm ${row.winner === 'po' ? 'text-emerald-400 font-bold' : 'text-gray-300'}`}>
                    {row.po}
                  </td>
                  <td className={`p-4 text-center text-sm ${row.winner === 'iq' ? 'text-emerald-400 font-bold' : 'text-gray-300'}`}>
                    {row.iq}
                  </td>
                  <td className="p-4 text-center text-sm text-white font-medium">
                    {row.winner === 'po' ? 'Pocket Option' : 'IQ Option'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="glass-card p-5 mt-6 border border-blue-500/20">
          <p className="text-sm text-gray-300">
            <strong className="text-white">Payout verdict:</strong> IQ Option generally offers higher payouts on
            major forex pairs and traditional assets (up to 95%). Pocket Option leads on cryptocurrency pairs
            and OTC assets available on weekends. If maximum payout is your priority, also consider{' '}
            <Link href={`/${locale}/quotex`} className="text-emerald-400 hover:underline">
              Quotex (up to 98%)
            </Link>.
          </p>
        </div>
      </section>

      {/* Regulation Deep Dive */}
      <section className="section-container pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          Regulation &amp; Safety
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Regulatory oversight is one of the most important factors when choosing a broker.
          Here&apos;s how they compare on trust and safety.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              Pocket Option
              <span className="text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">Mid-Tier</span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>Regulated by <strong className="text-white">IFMRRC</strong> (International Financial Market Relations Regulation Center)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>IFMRRC is a self-regulatory organization, not a government body</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>Operated by Infinite Trade LLC, registered in Costa Rica</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>Compensation fund available through IFMRRC membership</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">!</span>
                <span>Not available in EU/EEA countries, USA, Canada, Australia</span>
              </li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              IQ Option
              <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Higher Tier</span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>EU entity regulated by <strong className="text-white">CySEC</strong> (Cyprus Securities and Exchange Commission) — License #247/14</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>CySEC is a proper government regulator under EU MiFID II framework</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>Segregated client funds required under CySEC rules</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>Investor Compensation Fund up to &euro;20,000</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">!</span>
                <span>EU entity only offers CFDs (binary options banned in EU since 2018). Binary options via offshore entity.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="glass-card p-5 mt-6 border border-emerald-500/20">
          <p className="text-sm text-gray-300">
            <strong className="text-white">Regulation verdict:</strong> IQ Option has a clear advantage here.
            CySEC is a genuine government regulator, while IFMRRC is a self-regulatory body. If regulatory
            safety is your top priority, IQ Option (or{' '}
            <Link href={`/${locale}/deriv`} className="text-emerald-400 hover:underline">
              Deriv with its MFSA Malta license
            </Link>) is the better choice. That said, Pocket Option has operated since 2017 without
            major withdrawal scandals, which speaks to operational reliability.
          </p>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="section-container pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          Unique Features Comparison
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Beyond the basics — what makes each platform special.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Pocket Option Features */}
          <div className="glass-card p-6">
            <h3 className="font-bold text-emerald-400 mb-4">Pocket Option Exclusives</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Copy Trading</h4>
                <p className="text-xs text-gray-400">
                  Follow successful traders and automatically replicate their trades. Set your own
                  risk limits and allocation. The only major binary broker with this feature built-in.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Social Trading Feed</h4>
                <p className="text-xs text-gray-400">
                  Real-time feed of trades from the community. See what&apos;s being traded,
                  win rates, and popular strategies. Learn from peers while you trade.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">$50K Demo Account</h4>
                <p className="text-xs text-gray-400">
                  The most generous demo in the industry. Five times larger than IQ Option&apos;s
                  $10K demo. Practice without worrying about running out of virtual funds.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Achievements &amp; Rewards</h4>
                <p className="text-xs text-gray-400">
                  Gamified system with gems, experience points, and trader levels. Unlocks bonuses
                  and perks as you trade more. Makes the learning process engaging.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Ultra-Fast Expiry</h4>
                <p className="text-xs text-gray-400">
                  3-second expiry times available. No other major broker offers expiry this short.
                  High risk but popular with scalpers.
                </p>
              </div>
            </div>
          </div>

          {/* IQ Option Features */}
          <div className="glass-card p-6">
            <h3 className="font-bold text-blue-400 mb-4">IQ Option Exclusives</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Multi-Asset Platform</h4>
                <p className="text-xs text-gray-400">
                  Trade binary options, CFDs, forex, stocks, ETFs, and crypto all from one account.
                  No need for multiple broker accounts if you want to diversify.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Native Desktop App</h4>
                <p className="text-xs text-gray-400">
                  Purpose-built desktop application for Windows, Mac, and Linux. Faster chart rendering,
                  better resource management, and a truly professional feel.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Advanced Charting Suite</h4>
                <p className="text-xs text-gray-400">
                  100+ technical indicators, 13 chart types, multiple timeframes, and professional
                  drawing tools. The most complete charting in binary options.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">250+ Tradable Assets</h4>
                <p className="text-xs text-gray-400">
                  The widest asset selection among binary brokers. Includes exotic forex pairs, individual
                  stocks, and commodities not available elsewhere.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">CySEC Investor Protection</h4>
                <p className="text-xs text-gray-400">
                  EU-regulated entity with segregated client funds and investor compensation up to
                  &euro;20,000. The strongest regulatory protection in binary options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deposits & Withdrawals */}
      <section className="section-container pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          Deposits &amp; Withdrawals
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          How fast and easy it is to move money in and out of each platform.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-emerald-400 mb-3">Pocket Option</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><strong className="text-white">Min deposit:</strong> $5 (lowest in the industry)</li>
              <li><strong className="text-white">Methods:</strong> Visa, Mastercard, crypto (BTC, ETH, USDT), e-wallets, bank transfer</li>
              <li><strong className="text-white">Crypto withdrawal:</strong> 12-45 minutes average</li>
              <li><strong className="text-white">Card withdrawal:</strong> 1-3 business days</li>
              <li><strong className="text-white">Deposit fees:</strong> None</li>
              <li><strong className="text-white">Withdrawal fees:</strong> None (min withdrawal $10)</li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-blue-400 mb-3">IQ Option</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><strong className="text-white">Min deposit:</strong> $10</li>
              <li><strong className="text-white">Methods:</strong> Visa, Mastercard, Skrill, Neteller, crypto, bank wire</li>
              <li><strong className="text-white">Crypto withdrawal:</strong> 1-24 hours</li>
              <li><strong className="text-white">Card withdrawal:</strong> 1-3 business days</li>
              <li><strong className="text-white">Deposit fees:</strong> None</li>
              <li><strong className="text-white">Withdrawal fees:</strong> None (min withdrawal $2)</li>
            </ul>
          </div>
        </div>
        <div className="glass-card p-5 mt-6 border border-emerald-500/20">
          <p className="text-sm text-gray-300">
            <strong className="text-white">Banking verdict:</strong> Pocket Option wins on minimum deposit ($5 vs $10)
            and crypto withdrawal speed (minutes vs hours). IQ Option has a lower minimum withdrawal ($2 vs $10).
            Both offer fee-free deposits and withdrawals.
          </p>
        </div>
      </section>

      {/* Who Should Choose Which */}
      <section className="section-container pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          Who Should Choose Which?
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Our recommendation based on trader type and priorities.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 md:p-8 border border-emerald-500/20">
            <div className="text-center mb-6">
              <span className="badge-green mb-3">Recommended for Beginners</span>
              <h3 className="text-xl font-bold text-white mt-3">Choose Pocket Option If...</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>You&apos;re new to binary options and want to learn by copying successful traders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>You want to start with a small deposit ($5 minimum)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>You prefer a simple, clean interface without overwhelming features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>You want fast crypto withdrawals (under 45 minutes)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>You enjoy gamified experiences with achievements and rewards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span>You want to practice with a large $50K demo account</span>
              </li>
            </ul>
            <div className="flex flex-col gap-2">
              <CtaButton broker="pocketOption" label="Open Pocket Option Account" campaign="po_vs_iq_choose" size="md" />
              <CtaButton broker="pocketOption" type="demo" label="Try Free Demo First" variant="secondary" campaign="po_vs_iq_choose" size="sm" />
            </div>
          </div>

          <div className="glass-card p-6 md:p-8 border border-blue-500/20">
            <div className="text-center mb-6">
              <span className="badge-gold mb-3">Recommended for Serious Traders</span>
              <h3 className="text-xl font-bold text-white mt-3">Choose IQ Option If...</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>You&apos;re an experienced trader who values advanced charting tools</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>Regulatory safety is your top priority (CySEC EU regulation)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>You want access to 250+ assets including stocks and ETFs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>You prefer a native desktop application for faster performance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>You want to diversify into CFDs, forex, or stocks later</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>You prioritize higher max payouts (up to 95% vs 92%)</span>
              </li>
            </ul>
            <div className="flex flex-col gap-2">
              <CtaButton broker="iqOption" label="Open IQ Option Account" campaign="po_vs_iq_choose" size="md" />
              <CtaButton broker="iqOption" type="demo" label="Try Free Demo First" variant="secondary" campaign="po_vs_iq_choose" size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="section-container pb-16">
        <div className="glass-card p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Final Verdict</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Both Pocket Option and IQ Option are excellent binary options brokers, but they serve different
              audiences. <strong className="text-white">Pocket Option (9.5/10)</strong> is our higher-rated broker
              overall because its copy trading feature, lower minimum deposit, and beginner-friendly design make
              it accessible to the widest range of traders.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              <strong className="text-white">IQ Option (9.2/10)</strong> is the better choice for traders who
              prioritize regulatory safety (CySEC), want the most advanced trading platform available, or need
              access to a wider range of asset classes beyond binary options. Its desktop app is genuinely
              best-in-class.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Our suggestion: start with a <strong className="text-white">Pocket Option demo</strong> to learn
              the basics through copy trading, then consider opening an <strong className="text-white">IQ Option
              account</strong> as you grow more experienced and want deeper analytical tools. Many successful
              traders use both platforms for different purposes.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                <div className="text-2xl font-extrabold text-emerald-400 mb-1">9.5/10</div>
                <div className="font-bold text-white text-sm">Pocket Option</div>
                <div className="text-xs text-gray-400 mt-1">Best Overall &bull; Best for Beginners</div>
                <div className="mt-3">
                  <CtaButton broker="pocketOption" label="Visit Pocket Option" campaign="po_vs_iq_verdict" size="sm" />
                </div>
              </div>
              <div className="text-center p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">9.2/10</div>
                <div className="font-bold text-white text-sm">IQ Option</div>
                <div className="text-xs text-gray-400 mt-1">Best Platform &bull; Best Regulation</div>
                <div className="mt-3">
                  <CtaButton broker="iqOption" label="Visit IQ Option" campaign="po_vs_iq_verdict" size="sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: 'Which has higher payouts, Pocket Option or IQ Option?', a: 'Pocket Option offers up to 92% payouts on standard trades, while IQ Option offers up to 95% on binary options. IQ Option has a slight edge on maximum payouts for major currency pairs.' },
            { q: 'Is IQ Option more regulated than Pocket Option?', a: 'Yes. IQ Option holds CySEC regulation (EU tier-1), while Pocket Option has IFMRRC certification (non-EU). IQ Option offers stronger regulatory protection including the ICF compensation fund.' },
            { q: 'Which is better for beginners?', a: 'IQ Option has a better educational platform with free courses and a polished interface. Pocket Option offers copy trading which lets beginners follow experienced traders while learning.' },
            { q: 'Can I trade binary options on IQ Option from the EU?', a: 'No. IQ Option complies with ESMA regulations and does not offer binary options to EU/EEA residents. Pocket Option, being offshore, does not enforce this restriction.' },
            { q: 'Which has a better mobile app?', a: 'IQ Option has native iOS and Android apps with 100+ indicators — widely considered the best mobile trading app. Pocket Option offers Android native but iOS only as a PWA.' },
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
        <h2 className="text-xl font-bold mb-6 text-center">Continue Your Research</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href={`/${locale}/pocket-option`} className="glass-card p-5 hover:border-emerald-500/30 border border-transparent transition-colors">
            <h3 className="font-bold text-white text-sm mb-1">Pocket Option Full Review</h3>
            <p className="text-xs text-gray-400">In-depth analysis with 250+ trades tested. Score: 9.5/10</p>
          </Link>
          <Link href={`/${locale}/iq-option`} className="glass-card p-5 hover:border-blue-500/30 border border-transparent transition-colors">
            <h3 className="font-bold text-white text-sm mb-1">IQ Option Full Review</h3>
            <p className="text-xs text-gray-400">Complete review of the pro-grade platform. Score: 9.2/10</p>
          </Link>
          <Link href={`/${locale}/compare`} className="glass-card p-5 hover:border-white/20 border border-transparent transition-colors">
            <h3 className="font-bold text-white text-sm mb-1">Compare All 7 Brokers</h3>
            <p className="text-xs text-gray-400">Side-by-side comparison across 17 metrics.</p>
          </Link>
          <Link href={`/${locale}/quotex`} className="glass-card p-5 hover:border-emerald-500/30 border border-transparent transition-colors">
            <h3 className="font-bold text-white text-sm mb-1">Quotex Review (9.4/10)</h3>
            <p className="text-xs text-gray-400">Highest payouts in the industry — up to 98%.</p>
          </Link>
          <Link href={`/${locale}/blog/best-binary-options-brokers`} className="glass-card p-5 hover:border-white/20 border border-transparent transition-colors">
            <h3 className="font-bold text-white text-sm mb-1">Best Binary Brokers 2026</h3>
            <p className="text-xs text-gray-400">Our complete ranking of the top brokers this year.</p>
          </Link>
          <Link href={`/${locale}/blog/binary-options-copy-trading`} className="glass-card p-5 hover:border-white/20 border border-transparent transition-colors">
            <h3 className="font-bold text-white text-sm mb-1">Copy Trading Guide</h3>
            <p className="text-xs text-gray-400">How to profit from copy trading on Pocket Option.</p>
          </Link>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="section-container pb-16">
        <div className="glass-card p-6 border border-amber-500/20 bg-amber-500/[0.02]">
          <h3 className="text-sm font-bold text-amber-400 mb-2">Risk Disclaimer</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Binary options trading involves significant risk and can result in the loss of all invested capital.
            The information on this page is for educational and comparison purposes only and should not be considered
            financial advice. Past performance is not indicative of future results. Both Pocket Option and IQ Option
            are complex financial instruments — you should not trade with money you cannot afford to lose.
            This site may receive compensation from the brokers listed through affiliate partnerships, which may
            influence broker placement and ratings. Always conduct your own research before opening a trading account.
            Binary options are not available to retail traders in the EU/EEA (via regulated entities) or in the USA.
          </p>
        </div>
      </section>
    </div>
  );
}
