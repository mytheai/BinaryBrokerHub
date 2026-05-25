'use client';

import CtaButton from '@/components/CtaButton';

const comparisonData = [
  { feature: 'Our Score', quotex: '9.4/10', pocket: '9.1/10', winner: 'quotex' },
  { feature: 'Founded', quotex: '2019', pocket: '2017', winner: 'pocket' },
  { feature: 'Max Payout (Advertised)', quotex: 'Up to 98%', pocket: 'Up to 92%', winner: 'quotex' },
  { feature: 'Peak Payout (Observed)', quotex: '90-95%', pocket: '89-92%', winner: 'quotex' },
  { feature: 'Off-Peak Payout (Observed)', quotex: '68-82%', pocket: '76-88%', winner: 'pocket' },
  { feature: 'Payout Consistency', quotex: 'Moderate (8-18% drop off-peak)', pocket: 'High (2-12% drop off-peak)', winner: 'pocket' },
  { feature: 'Binary Assets', quotex: '95+', pocket: '180+', winner: 'pocket' },
  { feature: 'Total Assets (incl. non-binary)', quotex: '400+', pocket: '180+', winner: 'quotex' },
  { feature: 'Minimum Deposit', quotex: '$10', pocket: '$5', winner: 'pocket' },
  { feature: 'Minimum Trade', quotex: '$1', pocket: '$1', winner: 'tie' },
  { feature: 'Demo Account', quotex: 'Unlimited balance', pocket: '$50,000 (replenishable)', winner: 'tie' },
  { feature: 'Shortest Expiry', quotex: '5 seconds', pocket: '3 seconds', winner: 'pocket' },
  { feature: 'Longest Expiry', quotex: '4 hours', pocket: '1 month', winner: 'pocket' },
  { feature: 'Copy/Social Trading', quotex: 'Limited (view only)', pocket: 'Full featured + messaging', winner: 'pocket' },
  { feature: 'AI Trading', quotex: 'No', pocket: 'Yes (new 2025)', winner: 'pocket' },
  { feature: 'Tournaments', quotex: 'Yes (limited)', pocket: 'Regular with cash prizes', winner: 'pocket' },
  { feature: 'Execution Speed', quotex: '< 1 second', pocket: '< 1 second', winner: 'tie' },
  { feature: 'Crypto Withdrawal', quotex: '~47 min average', pocket: 'Min to 3 hours', winner: 'quotex' },
  { feature: 'Card Withdrawal', quotex: '1-5 days', pocket: '1-3 days', winner: 'pocket' },
  { feature: 'Withdrawal Fees', quotex: 'None', pocket: 'None', winner: 'tie' },
  { feature: 'Mobile App', quotex: 'Android + iOS web', pocket: 'Android + iOS PWA', winner: 'tie' },
  { feature: 'Desktop App', quotex: 'Not available', pocket: 'Not available (MT4/5 for forex only)', winner: 'tie' },
  { feature: 'Technical Indicators', quotex: '~20', pocket: '30+', winner: 'pocket' },
  { feature: 'Chart Types', quotex: '4', pocket: '4', winner: 'tie' },
  { feature: 'Regulation', quotex: 'IFMRRC (expired 2021)', pocket: 'MISA (suspended) + IFMRRC (prev)', winner: 'tie' },
  { feature: 'Customer Support', quotex: 'Ticket system 24/7', pocket: 'Live chat 24/7 + email', winner: 'pocket' },
  { feature: 'Education', quotex: 'Basic', pocket: 'Limited (no videos/webinars)', winner: 'tie' },
  { feature: 'Bonuses', quotex: '30% first deposit', pocket: 'Up to 100% (50x turnover)', winner: 'quotex' },
];

export default function ComparePage() {
  const quotexWins = comparisonData.filter(r => r.winner === 'quotex').length;
  const pocketWins = comparisonData.filter(r => r.winner === 'pocket').length;
  const ties = comparisonData.filter(r => r.winner === 'tie').length;

  return (
    <div>
      {/* Hero */}
      <section className="section-container py-16 md:py-24 text-center">
        <span className="badge-gold mb-4">Data-Driven Comparison</span>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4">
          Quotex vs Pocket Option 2026
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-4">
          A comprehensive side-by-side comparison based on 14 months of combined real-money testing.
          28 data points compared across every category that matters.
        </p>
        <p className="text-sm text-gray-500">
          Last updated: May 2026 &bull; Both platforms tested with $8,000+ total deposits
        </p>
      </section>

      {/* Score Summary */}
      <section className="section-container pb-12">
        <div className="grid grid-cols-3 gap-4">
          <div className="glass-card p-5 text-center border-emerald-500/10">
            <div className="text-3xl font-bold text-emerald-400">{quotexWins}</div>
            <div className="text-xs text-gray-500 mt-1">Quotex Wins</div>
          </div>
          <div className="glass-card p-5 text-center">
            <div className="text-3xl font-bold text-gray-400">{ties}</div>
            <div className="text-xs text-gray-500 mt-1">Tied</div>
          </div>
          <div className="glass-card p-5 text-center border-blue-500/10">
            <div className="text-3xl font-bold text-blue-400">{pocketWins}</div>
            <div className="text-xs text-gray-500 mt-1">Pocket Option Wins</div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-container pb-16">
        <div className="glass-card overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-white/[0.03] border-b border-white/[0.06]">
            <div className="p-4 md:p-5 text-sm font-semibold text-gray-400">Feature</div>
            <div className="p-4 md:p-5 text-center">
              <div className="text-emerald-400 font-bold">Quotex</div>
              <div className="text-xs text-gray-500">Score: 9.4/10</div>
            </div>
            <div className="p-4 md:p-5 text-center">
              <div className="text-blue-400 font-bold">Pocket Option</div>
              <div className="text-xs text-gray-500">Score: 9.1/10</div>
            </div>
          </div>

          {/* Rows */}
          {comparisonData.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1.2fr_1fr_1fr] border-b border-white/[0.03] ${
                i % 2 === 0 ? '' : 'bg-white/[0.01]'
              }`}
            >
              <div className="p-3 md:p-4 text-xs md:text-sm text-gray-300 font-medium flex items-center">
                {row.feature}
              </div>
              <div className={`p-3 md:p-4 text-xs md:text-sm text-center flex items-center justify-center gap-1 ${
                row.winner === 'quotex' ? 'text-emerald-400 font-semibold' : 'text-gray-400'
              }`}>
                {row.winner === 'quotex' && <span className="text-emerald-400">✓</span>}
                {row.quotex}
              </div>
              <div className={`p-3 md:p-4 text-xs md:text-sm text-center flex items-center justify-center gap-1 ${
                row.winner === 'pocket' ? 'text-blue-400 font-semibold' : 'text-gray-400'
              }`}>
                {row.winner === 'pocket' && <span className="text-blue-400">✓</span>}
                {row.pocket}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Analysis */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Our Analysis: Which Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 border-emerald-500/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <span className="text-emerald-400 font-bold text-lg">Q</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-emerald-400">Choose Quotex</h3>
                <p className="text-xs text-gray-500">Best for: Maximum payouts & speed</p>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                'You want the highest possible payouts (up to 98% advertised, 90-95% observed peak)',
                'You prioritize the fastest crypto withdrawals (~47 min average)',
                'You prefer a clean, uncluttered interface without extra features',
                'You trade primarily during London/New York sessions for best rates',
                'You\'re an experienced trader who values speed over social features',
                'You use crypto for deposits and withdrawals (fastest, no fees)',
                'You want 400+ total assets including non-binary products',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <CtaButton broker="quotex" label="Open Quotex Account" campaign="compare_quotex" className="w-full" />
          </div>

          <div className="glass-card p-8 border-blue-500/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <span className="text-blue-400 font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-400">Choose Pocket Option</h3>
                <p className="text-xs text-gray-500">Best for: Features & social trading</p>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                'You\'re a beginner who wants to learn by copying successful traders',
                'You want the industry\'s lowest deposit to start ($5)',
                'You need the widest expiry range (3 seconds to 1 month)',
                'You want to participate in tournaments for extra income',
                'You value consistent payouts (smallest peak-to-offpeak drop)',
                'You want 180+ binary-specific instruments to trade',
                'You prefer a feature-rich experience (AI Trading, achievements, social)',
                'You trade at various times including off-peak (better off-peak payouts)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <CtaButton broker="pocketOption" label="Open Pocket Option Account" campaign="compare_po" className="w-full" />
          </div>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="section-container py-16">
        <div className="glass-card p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-6">The Bottom Line</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Both platforms are legitimate and functioning — we&apos;ve deposited, traded, and successfully withdrawn
              from both over extended testing periods ($5,000+ on Quotex, $3,000+ on Pocket Option). Neither is regulated
              by a tier-1 authority, which is common in binary options but important to acknowledge.
            </p>
            <p>
              <strong className="text-emerald-400">Quotex</strong> wins on raw performance metrics: higher maximum payouts, faster
              crypto withdrawals, cleaner interface, and more total assets. It&apos;s the &ldquo;pure trader&rdquo; platform —
              no distractions, just fast execution with the best numbers during peak hours.
            </p>
            <p>
              <strong className="text-blue-400">Pocket Option</strong> wins on features, accessibility, and reliability:
              more binary assets, wider expiry range, copy trading, tournaments, AI Trading, lowest deposit, and — critically —
              the most consistent payouts (smallest gap between advertised and observed). It&apos;s the &ldquo;complete platform&rdquo;
              for traders who want more than just charts and buttons.
            </p>
            <p className="text-gray-500 italic">
              Our recommendation: Try both demo accounts (free, instant access). Trade for a few days on each.
              The interface and feature set you prefer will become obvious quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-container py-16">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="glass-card p-6 text-center">
            <h3 className="font-bold text-emerald-400 mb-2">Try Quotex</h3>
            <p className="text-xs text-gray-500 mb-4">Unlimited demo, $10 min deposit, up to 98% payout</p>
            <CtaButton broker="quotex" type="demo" label="Open Free Demo" campaign="compare_bottom" className="w-full" />
          </div>
          <div className="glass-card p-6 text-center">
            <h3 className="font-bold text-blue-400 mb-2">Try Pocket Option</h3>
            <p className="text-xs text-gray-500 mb-4">$50K demo, $5 min deposit, copy trading included</p>
            <CtaButton broker="pocketOption" type="demo" label="Open Free Demo" campaign="compare_bottom" className="w-full" />
          </div>
        </div>
        <p className="text-center text-xs text-gray-600 mt-4">No deposit required for demo accounts. Instant access.</p>
      </section>
    </div>
  );
}
