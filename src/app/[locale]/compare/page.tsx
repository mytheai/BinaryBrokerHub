'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';

const brokers = [
  { key: 'pocketOption', name: 'Pocket Option', slug: 'pocket-option', score: 9.5, color: 'text-emerald-400' },
  { key: 'quotex', name: 'Quotex', slug: 'quotex', score: 9.4, color: 'text-emerald-400' },
  { key: 'iqOption', name: 'IQ Option', slug: 'iq-option', score: 9.2, color: 'text-emerald-400' },
  { key: 'deriv', name: 'Deriv', slug: 'deriv', score: 9.0, color: 'text-emerald-400' },
  { key: 'olympTrade', name: 'Olymp Trade', slug: 'olymp-trade', score: 8.6, color: 'text-blue-400' },
  { key: 'binomo', name: 'Binomo', slug: 'binomo', score: 8.2, color: 'text-amber-400' },
  { key: 'expertOption', name: 'ExpertOption', slug: 'expert-option', score: 7.8, color: 'text-gray-400' },
] as const;

type BrokerKey = typeof brokers[number]['key'];

const comparisonData: { feature: string; values: Record<BrokerKey, string>; best?: BrokerKey | BrokerKey[] }[] = [
  {
    feature: 'Our Score',
    values: { pocketOption: '9.5/10', quotex: '9.4/10', iqOption: '9.2/10', deriv: '9.0/10', olympTrade: '8.6/10', binomo: '8.2/10', expertOption: '7.8/10' },
    best: 'pocketOption',
  },
  {
    feature: 'Founded',
    values: { quotex: '2019', iqOption: '2013', pocketOption: '2017', deriv: '1999', olympTrade: '2014', binomo: '2014', expertOption: '2014' },
    best: 'deriv',
  },
  {
    feature: 'Peak Payout',
    values: { quotex: '90–95%', iqOption: '90–95%', pocketOption: '89–92%', deriv: '88–95%', olympTrade: '80–93%', binomo: '85–90%', expertOption: '80–95%' },
    best: 'quotex',
  },
  {
    feature: 'Min Deposit',
    values: { quotex: '$10', iqOption: '$10', pocketOption: '$5', deriv: '$5', olympTrade: '$10', binomo: '$10', expertOption: '$10' },
    best: ['pocketOption', 'deriv'],
  },
  {
    feature: 'Min Trade',
    values: { quotex: '$1', iqOption: '$1', pocketOption: '$1', deriv: '$1', olympTrade: '$1', binomo: '$1', expertOption: '$1' },
  },
  {
    feature: 'Total Assets',
    values: { quotex: '95+', iqOption: '250+', pocketOption: '180+', deriv: '100+', olympTrade: '190+', binomo: '70+', expertOption: '100+' },
    best: 'iqOption',
  },
  {
    feature: 'Copy Trading',
    values: { quotex: 'Limited', iqOption: 'No', pocketOption: 'Full featured', deriv: 'No', olympTrade: 'No', binomo: 'No', expertOption: 'Social only' },
    best: 'pocketOption',
  },
  {
    feature: 'Demo Account',
    values: { quotex: '$10K free', iqOption: '$10K free', pocketOption: '$50K free', deriv: '$10K free', olympTrade: '$10K free', binomo: '$1K free', expertOption: '$10K free' },
    best: 'pocketOption',
  },
  {
    feature: 'Regulation',
    values: { quotex: 'None (IFMRRC exp.)', iqOption: 'CySEC (EU CFDs)', pocketOption: 'IFMRRC', deriv: 'MFSA Malta (Tier 1)', olympTrade: 'FinaCom A', binomo: 'FinaCom A', expertOption: 'None' },
    best: 'deriv',
  },
  {
    feature: 'Crypto Withdrawal',
    values: { quotex: '~47 min', iqOption: '1-24 hrs', pocketOption: '12-45 min', deriv: '1-24 hrs', olympTrade: '1-24 hrs', binomo: '1-24 hrs', expertOption: '1-24 hrs' },
    best: 'pocketOption',
  },
  {
    feature: 'Deposit Fees',
    values: { quotex: 'Free', iqOption: 'Free', pocketOption: 'Free', deriv: 'Free', olympTrade: 'Free', binomo: 'Free', expertOption: 'Free' },
  },
  {
    feature: 'Desktop App',
    values: { quotex: 'Web only', iqOption: 'Win/Mac/Linux', pocketOption: 'Web only', deriv: 'Web + MT5', olympTrade: 'Web only', binomo: 'Web only', expertOption: 'Web only' },
    best: 'iqOption',
  },
  {
    feature: 'Tournaments',
    values: { quotex: 'Limited', iqOption: 'Yes', pocketOption: 'Yes', deriv: 'No', olympTrade: 'No', binomo: 'Daily (best)', expertOption: 'No' },
    best: 'binomo',
  },
  {
    feature: 'Automation/Bots',
    values: { quotex: 'No', iqOption: 'No', pocketOption: 'No', deriv: 'DBot (visual)', olympTrade: 'No', binomo: 'No', expertOption: 'No' },
    best: 'deriv',
  },
  {
    feature: '24/7 Trading',
    values: { quotex: 'OTC weekends', iqOption: 'OTC weekends', pocketOption: 'OTC weekends', deriv: 'Synthetic 24/7', olympTrade: 'OTC weekends', binomo: 'No', expertOption: 'No' },
    best: 'deriv',
  },
  {
    feature: 'Registered Users',
    values: { quotex: 'N/A', iqOption: '48M+', pocketOption: '15M+', deriv: '3M+', olympTrade: '80M+', binomo: '850K daily', expertOption: '40M+' },
    best: 'olympTrade',
  },
  {
    feature: 'Best For',
    values: {
      quotex: 'Max payouts',
      iqOption: 'Pro traders',
      pocketOption: 'Copy trading',
      deriv: 'Trust & safety',
      olympTrade: 'India/SEA',
      binomo: 'Beginners',
      expertOption: 'Social insights',
    },
  },
];

export default function ComparePage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Compare Brokers' }]} />
      {/* Hero */}
      <section className="section-container py-16 md:py-24 text-center">
        <span className="badge-gold mb-4">Comprehensive Comparison</span>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
          Compare All 7 Binary Options Brokers
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Side-by-side comparison across 17 critical factors. All data verified through real-money testing
          and updated May 2026.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="section-container pb-16">
        <p className="text-xs text-gray-500 mb-2 md:hidden text-center">← Swipe to see all brokers →</p>
        <div className="glass-card overflow-x-auto -mx-4 sm:mx-0 rounded-none sm:rounded-2xl">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left p-3 text-xs font-semibold text-gray-400 w-28 sm:w-36 sticky left-0 bg-[#0a0f1a]/95 backdrop-blur-sm z-10">Feature</th>
                {brokers.map((b) => (
                  <th key={b.key} className="p-3 text-center">
                    <Link href={`/${locale}/${b.slug}`} className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                      {b.name}
                    </Link>
                    <div className={`text-xs font-bold mt-1 ${b.color}`}>{b.score}/10</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={row.feature} className={`border-b border-white/[0.03] ${i % 2 ? 'bg-white/[0.01]' : ''}`}>
                  <td className="p-3 text-xs font-medium text-gray-400 sticky left-0 bg-[#0a0f1a]/95 backdrop-blur-sm z-10">{row.feature}</td>
                  {brokers.map((b) => {
                    const isBest = row.best
                      ? Array.isArray(row.best) ? row.best.includes(b.key) : row.best === b.key
                      : false;
                    return (
                      <td key={b.key} className={`p-3 text-center text-xs ${isBest ? 'text-emerald-400 font-bold' : 'text-gray-300'}`}>
                        {row.values[b.key]}
                        {isBest && <span className="ml-1">★</span>}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">★ = Best in category. Data from our real-money testing + official broker documentation.</p>
      </section>

      {/* Winner Summary */}
      <section className="section-container pb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Which Broker Is Right for You?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { title: 'Best Overall', broker: 'Pocket Option', score: '9.5', slug: 'pocket-option', desc: 'Copy trading, $5 min deposit, 180+ assets. Best all-round platform for beginners & pros.' },
            { title: 'Highest Payouts', broker: 'Quotex', score: '9.4', slug: 'quotex', desc: 'Up to 98% payout. Best for traders who want maximum return per trade.' },
            { title: 'Best Platform', broker: 'IQ Option', score: '9.2', slug: 'iq-option', desc: 'Award-winning UX, 250+ assets, CySEC-regulated EU entity.' },
            { title: 'Most Trusted', broker: 'Deriv', score: '9.0', slug: 'deriv', desc: '26 years operating, MFSA Tier-1. The trust benchmark of the industry.' },
            { title: 'Best for India/SEA', broker: 'Olymp Trade', score: '8.6', slug: 'olymp-trade', desc: 'Local language, UPI/local bank support, FinaCom €20K protection.' },
            { title: 'Best Tournaments', broker: 'Binomo', score: '8.2', slug: 'binomo', desc: 'Daily cash tournaments, gamified experience. Great starter platform.' },
            { title: 'Social Insights', broker: 'ExpertOption', score: '7.8', slug: 'expert-option', desc: 'Real-time social feed showing what 40M+ traders are doing.' },
            { title: 'Lowest Min Deposit', broker: 'Pocket Option / Deriv', score: '$5', slug: 'pocket-option', desc: 'Start trading with just $5. Lowest barrier to entry in the market.' },
          ].map((item) => (
            <Link key={item.title} href={`/${locale}/${item.slug}`}>
              <div className="glass-card-hover p-5 h-full">
                <div className="text-xs text-emerald-400 font-semibold mb-2">{item.title}</div>
                <h3 className="font-bold text-white mb-1">{item.broker}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Head-to-Head Comparisons */}
      <section className="section-container pb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Head-to-Head Comparisons</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
          Deep-dive comparisons between the most popular broker pairs. Each comparison includes detailed analysis
          of payouts, features, regulation, and our recommendation.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { slug: 'pocket-option-vs-quotex', a: 'Pocket Option', b: 'Quotex', highlight: '#1 vs #2 — the most popular comparison' },
            { slug: 'pocket-option-vs-iq-option', a: 'Pocket Option', b: 'IQ Option', highlight: 'Copy trading vs professional platform' },
            { slug: 'quotex-vs-iq-option', a: 'Quotex', b: 'IQ Option', highlight: 'Highest payouts vs best technology' },
            { slug: 'pocket-option-vs-binomo', a: 'Pocket Option', b: 'Binomo', highlight: 'Features vs gamification' },
            { slug: 'quotex-vs-binomo', a: 'Quotex', b: 'Binomo', highlight: 'Max payouts vs tournaments' },
            { slug: 'iq-option-vs-deriv', a: 'IQ Option', b: 'Deriv', highlight: 'CySEC vs MFSA — regulated showdown' },
          ].map((comp) => (
            <Link key={comp.slug} href={`/${locale}/compare/${comp.slug}`} className="glass-card p-5 hover:bg-white/[0.04] transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white font-semibold text-sm">{comp.a}</span>
                <span className="text-gray-500 text-xs">vs</span>
                <span className="text-white font-semibold text-sm">{comp.b}</span>
              </div>
              <p className="text-xs text-gray-500">{comp.highlight}</p>
              <span className="text-xs text-emerald-400 font-medium mt-2 inline-block group-hover:underline">Read comparison →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Our Recommendation */}
      <section className="section-container pb-16">
        <div className="glass-card p-8 md:p-10 border border-emerald-500/20">
          <h2 className="text-2xl font-bold mb-4">Our Recommendation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-emerald-400 mb-3">For Beginners</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Start with <strong className="text-white">Pocket Option</strong> — the copy trading feature lets you earn while learning.
                $5 minimum deposit, free $50K demo, and the copy trading removes the need for technical analysis skills.
                Graduate to manual trading on <strong className="text-white">Quotex</strong> (for higher payouts) once you understand the basics.
              </p>
              <div className="flex gap-3">
                <CtaButton broker="pocketOption" type="demo" label="Pocket Option Demo" campaign="compare_beginner" size="sm" />
                <CtaButton broker="quotex" type="demo" label="Quotex Demo" variant="secondary" campaign="compare_beginner" size="sm" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-400 mb-3">For Experienced Traders</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Choose <strong className="text-white">IQ Option</strong> for the best platform technology, or <strong className="text-white">Deriv</strong> for
                the highest regulatory safety. <strong className="text-white">Quotex</strong> remains the payout king — use it when you want
                maximum return per trade. Consider <strong className="text-white">Deriv&apos;s Synthetic Indices</strong> for 24/7 weekend trading.
              </p>
              <div className="flex gap-3">
                <CtaButton broker="iqOption" label="IQ Option" campaign="compare_pro" size="sm" />
                <CtaButton broker="deriv" label="Deriv" variant="secondary" campaign="compare_pro" size="sm" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
