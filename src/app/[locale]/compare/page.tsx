'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';

const brokers = [
  { key: 'quotex', name: 'Quotex', slug: 'quotex', score: 9.4, color: 'text-emerald-400' },
  { key: 'iqOption', name: 'IQ Option', slug: 'iq-option', score: 9.2, color: 'text-emerald-400' },
  { key: 'pocketOption', name: 'Pocket Option', slug: 'pocket-option', score: 9.1, color: 'text-emerald-400' },
  { key: 'deriv', name: 'Deriv', slug: 'deriv', score: 9.0, color: 'text-emerald-400' },
  { key: 'olympTrade', name: 'Olymp Trade', slug: 'olymp-trade', score: 8.6, color: 'text-blue-400' },
  { key: 'binomo', name: 'Binomo', slug: 'binomo', score: 8.2, color: 'text-amber-400' },
  { key: 'expertOption', name: 'ExpertOption', slug: 'expert-option', score: 7.8, color: 'text-gray-400' },
] as const;

type BrokerKey = typeof brokers[number]['key'];

const comparisonData: { feature: string; values: Record<BrokerKey, string>; best?: BrokerKey | BrokerKey[] }[] = [
  {
    feature: 'Our Score',
    values: { quotex: '9.4/10', iqOption: '9.2/10', pocketOption: '9.1/10', deriv: '9.0/10', olympTrade: '8.6/10', binomo: '8.2/10', expertOption: '7.8/10' },
    best: 'quotex',
  },
  {
    feature: 'Founded',
    values: { quotex: '2019', iqOption: '2013', pocketOption: '2017', deriv: '1999', olympTrade: '2014', binomo: '2014', expertOption: '2014' },
    best: 'deriv',
  },
  {
    feature: 'Max Payout',
    values: { quotex: '98%', iqOption: '95%', pocketOption: '92%', deriv: '95%', olympTrade: '93%', binomo: '90%', expertOption: '95%' },
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
        <div className="glass-card overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left p-3 text-xs font-semibold text-gray-400 w-36">Feature</th>
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
                  <td className="p-3 text-xs font-medium text-gray-400">{row.feature}</td>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Highest Payouts', broker: 'Quotex', score: '9.4', slug: 'quotex', desc: 'Up to 98% payout. Best for traders who want maximum return per trade.' },
            { title: 'Best Platform', broker: 'IQ Option', score: '9.2', slug: 'iq-option', desc: 'Award-winning UX, 250+ assets, CySEC-regulated EU entity.' },
            { title: 'Best Copy Trading', broker: 'Pocket Option', score: '9.1', slug: 'pocket-option', desc: 'Full-featured copy trading. Ideal for beginners who want passive income.' },
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
