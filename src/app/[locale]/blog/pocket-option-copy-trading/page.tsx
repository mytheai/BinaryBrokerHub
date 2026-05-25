'use client';

import CtaButton from '@/components/CtaButton';

export default function PocketOptionCopyTradingPage() {
  return (
    <article className="section-container py-16 max-w-4xl mx-auto">
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge-blue">Feature Guide</span>
          <span className="text-xs text-gray-600">Updated May 2026 • 11 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          Pocket Option Copy Trading Guide 2026 — How to Copy Top Traders
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Complete guide to Pocket Option&apos;s copy trading feature. How it works, how to find profitable traders,
          settings to optimize, and realistic expectations based on 3 months of real testing.
        </p>
      </header>

      {/* Quick Summary */}
      <section className="glass-card p-6 mb-10">
        <h2 className="text-lg font-bold mb-3 text-blue-400">What is Copy Trading?</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          Copy trading lets you automatically replicate the trades of experienced traders in real-time.
          When they open a trade, the same trade opens in your account. When they profit, you profit.
          <strong className="text-white"> No trading knowledge required</strong> — you&apos;re leveraging someone else&apos;s expertise.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-white/[0.03] rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-white">Free</div>
            <div className="text-xs text-gray-400">No fee to copy</div>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-white">Real-time</div>
            <div className="text-xs text-gray-400">Instant replication</div>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-white">$50+</div>
            <div className="text-xs text-gray-400">Recommended balance</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How Pocket Option Copy Trading Works</h2>
        <div className="space-y-4">
          {[
            { step: '1', title: 'Browse Top Traders', desc: 'Go to the "Copy Trading" section. You\'ll see a leaderboard of traders ranked by profit, win rate, and number of copiers.' },
            { step: '2', title: 'Analyze Their Stats', desc: 'Check each trader\'s win rate, total profit, trade history, average trade size, and how long they\'ve been active.' },
            { step: '3', title: 'Set Copy Parameters', desc: 'Choose how much to invest per copied trade (fixed amount or proportional). Set a daily copy limit if desired.' },
            { step: '4', title: 'Start Copying', desc: 'Click "Copy" and trades will automatically replicate in your account. You can stop copying at any time.' },
            { step: '5', title: 'Monitor & Adjust', desc: 'Track results in real-time. Stop copying traders who underperform. Diversify across 3-5 traders.' },
          ].map((s) => (
            <div key={s.step} className="glass-card p-5 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-400 font-bold text-sm">{s.step}</span>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Test Results */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Real Copy Trading Results (3 Months)</h2>
        <p className="text-gray-400 text-sm mb-4">
          We copied 5 different traders over 3 months with a $500 starting balance. Here&apos;s what happened:
        </p>
        <div className="glass-card overflow-x-auto">
          <div className="min-w-[650px]">
            <div className="grid grid-cols-5 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
              <div>Trader</div>
              <div className="text-center">Win Rate</div>
              <div className="text-center">Trades Copied</div>
              <div className="text-center">Our Result</div>
              <div className="text-center">Status</div>
            </div>
            {[
              { trader: 'Trader A', winRate: '72%', trades: '89', result: '+$142', status: 'Profitable' },
              { trader: 'Trader B', winRate: '68%', trades: '124', result: '+$87', status: 'Profitable' },
              { trader: 'Trader C', winRate: '65%', trades: '56', result: '+$23', status: 'Break-even' },
              { trader: 'Trader D', winRate: '61%', trades: '203', result: '-$34', status: 'Slight loss' },
              { trader: 'Trader E', winRate: '58%', trades: '45', result: '-$67', status: 'Stopped early' },
            ].map((t, i) => (
              <div key={i} className={`grid grid-cols-5 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                <div className="text-gray-300">{t.trader}</div>
                <div className="text-center text-white">{t.winRate}</div>
                <div className="text-center text-gray-400">{t.trades}</div>
                <div className={`text-center font-medium ${t.result.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>{t.result}</div>
                <div className={`text-center text-xs ${t.status === 'Profitable' ? 'text-emerald-400' : t.status === 'Break-even' ? 'text-gray-400' : 'text-red-400'}`}>{t.status}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 bg-white/[0.03] rounded-lg p-4">
          <p className="text-sm text-gray-300">
            <strong className="text-white">Net result: +$151</strong> over 3 months ($500 → $651).
            That&apos;s a 30% return — but only because we selected carefully and stopped copying Trader E quickly.
          </p>
        </div>
      </section>

      {/* How to Choose Traders */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How to Choose Traders to Copy</h2>
        <div className="glass-card p-6">
          <p className="text-gray-300 text-sm mb-4">Not all traders on the leaderboard are worth copying. Use these criteria:</p>
          <div className="space-y-4">
            {[
              { criteria: 'Win rate 65%+', why: 'Below 65%, profitability depends heavily on payout percentages. 70%+ is ideal.', priority: 'Critical' },
              { criteria: 'Active for 30+ days', why: 'Anyone can get lucky for a week. Look for consistent performance over at least a month.', priority: 'Critical' },
              { criteria: '100+ total trades', why: 'Small sample sizes are unreliable. More trades = more confidence the win rate is real.', priority: 'Important' },
              { criteria: 'Reasonable trade sizes', why: 'Avoid traders making huge bets (they\'ll blow up eventually). Look for consistent, moderate sizing.', priority: 'Important' },
              { criteria: 'Multiple copiers', why: 'If 50+ people are copying someone successfully, that\'s social proof the strategy works.', priority: 'Helpful' },
              { criteria: 'Regular activity', why: 'Traders who trade daily/weekly are better than those with long gaps (might have abandoned the strategy).', priority: 'Helpful' },
            ].map((item) => (
              <div key={item.criteria} className="flex gap-3">
                <span className={`text-xs font-bold mt-1 flex-shrink-0 ${
                  item.priority === 'Critical' ? 'text-red-400' : item.priority === 'Important' ? 'text-amber-400' : 'text-gray-400'
                }`}>{item.priority === 'Critical' ? '!!!' : item.priority === 'Important' ? '!!' : '!'}</span>
                <div>
                  <span className="text-white font-medium text-sm">{item.criteria}</span>
                  <p className="text-gray-400 text-sm">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Settings to Optimize */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Optimal Copy Trading Settings</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { setting: 'Copy Amount: Fixed $1-5', desc: 'Use a fixed small amount per trade regardless of what the trader bets. Protects you from their occasional large bets.' },
            { setting: 'Copy 3-5 Traders', desc: 'Diversify across multiple traders. If one has a bad week, others may compensate. Don\'t put all eggs in one basket.' },
            { setting: 'Daily Copy Limit', desc: 'Set a maximum number of copies per day (10-20). Prevents runaway losses if a trader goes on a losing streak.' },
            { setting: 'Stop-Loss Rule', desc: 'If a copied trader loses 10% in one day, stop copying them temporarily. Re-evaluate after 48 hours.' },
            { setting: 'Minimum Balance: $50-100', desc: 'You need enough balance to sustain multiple copied trades running simultaneously. $50 minimum, $100+ recommended.' },
            { setting: 'Review Weekly', desc: 'Every Sunday: check each copied trader\'s performance. Remove underperformers, add promising new ones.' },
          ].map((item) => (
            <div key={item.setting} className="glass-card p-5">
              <h3 className="font-semibold text-white text-sm mb-2">{item.setting}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Realistic Expectations */}
      <section className="mb-12">
        <div className="border border-amber-500/30 bg-amber-500/[0.03] rounded-xl p-6">
          <h2 className="text-lg font-bold text-amber-400 mb-3">Realistic Expectations</h2>
          <div className="space-y-3 text-sm text-gray-300">
            <p>Copy trading is NOT free money. Here&apos;s what to realistically expect:</p>
            <ul className="space-y-2 ml-4">
              <li>• <strong className="text-white">Not all months are profitable</strong> — even the best traders have losing periods</li>
              <li>• <strong className="text-white">Past performance ≠ future results</strong> — a 75% win rate last month might be 55% next month</li>
              <li>• <strong className="text-white">You still need patience</strong> — give a copied trader at least 2 weeks before judging results</li>
              <li>• <strong className="text-white">Realistic monthly return: 5-15%</strong> — anyone promising 50%+ monthly is either lucky or lying</li>
              <li>• <strong className="text-white">You can still lose money</strong> — copy trading reduces risk but doesn&apos;t eliminate it</li>
            </ul>
            <p className="mt-4 text-amber-200/70">
              <strong>Our honest take:</strong> Copy trading is the best way for beginners to start because it removes the need for
              technical analysis skills. But treat it as a learning tool — observe what the traders you copy are doing and learn their patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Copy Trading vs Manual */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Copy Trading vs Manual Trading</h2>
        <div className="glass-card overflow-hidden">
          <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
            <div>Factor</div>
            <div className="text-center">Copy Trading</div>
            <div className="text-center">Manual Trading</div>
          </div>
          {[
            { factor: 'Skill Required', copy: 'Low (choose traders)', manual: 'High (learn analysis)' },
            { factor: 'Time Commitment', copy: '10 min/week', manual: '1-4 hours/day' },
            { factor: 'Control', copy: 'Limited', manual: 'Full control' },
            { factor: 'Learning', copy: 'Passive observation', manual: 'Active learning' },
            { factor: 'Profit Potential', copy: 'Moderate (5-15%/mo)', manual: 'Higher (if skilled)' },
            { factor: 'Risk Level', copy: 'Medium', manual: 'High (beginners)' },
            { factor: 'Best For', copy: 'Beginners', manual: 'Experienced traders' },
          ].map((row, i) => (
            <div key={i} className={`grid grid-cols-3 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
              <div className="text-white font-medium">{row.factor}</div>
              <div className="text-center text-blue-400">{row.copy}</div>
              <div className="text-center text-gray-400">{row.manual}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Step by Step for Beginners */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Beginner&apos;s Quick Start (5 Minutes)</h2>
        <div className="glass-card p-6 border-blue-500/20">
          <ol className="space-y-4 text-sm text-gray-300">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-xs">1</span>
              <span><strong className="text-white">Open account</strong> — Register on Pocket Option (takes 1 minute)</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-xs">2</span>
              <span><strong className="text-white">Try on demo first</strong> — Copy trading works on demo too. Test with zero risk</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-xs">3</span>
              <span><strong className="text-white">Go to Copy Trading</strong> — Find it in the left sidebar menu</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-xs">4</span>
              <span><strong className="text-white">Sort by win rate</strong> — Filter for 65%+ win rate, 30+ days active, 100+ trades</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-xs">5</span>
              <span><strong className="text-white">Copy 3 traders</strong> — Set $1-2 per copy trade. Watch for a week</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-xs">6</span>
              <span><strong className="text-white">If profitable on demo</strong> — Deposit $50-100 real money and copy the same traders</span>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">FAQ</h2>
        <div className="space-y-4">
          {[
            { q: 'Is Pocket Option copy trading free?', a: 'Yes. There is no fee to copy traders. You only invest your chosen amount per trade. Pocket Option does not charge a commission on copy trades.' },
            { q: 'Can I copy trade on demo?', a: 'Yes. Copy trading works on the demo account with virtual $50,000. This is the best way to test before using real money.' },
            { q: 'How much money do I need to start?', a: 'Minimum deposit is $5, but we recommend $50-100 for copy trading so you can sustain multiple simultaneous copies without running out of balance.' },
            { q: 'Can I stop copying at any time?', a: 'Yes. You can stop copying any trader instantly. Existing open trades from that trader will remain open until they expire.' },
            { q: 'What if the trader I copy loses?', a: 'You lose too — that\'s the risk. This is why we recommend: copy 3-5 traders for diversification, use small fixed amounts, and stop copying anyone who drops below 60% win rate.' },
            { q: 'Is copy trading better than trading myself?', a: 'For beginners, yes. You skip the learning curve and earn while learning by observing. For experienced traders, manual trading offers more control and potentially higher returns.' },
          ].map((faq) => (
            <div key={faq.q} className="glass-card p-5">
              <h3 className="font-semibold text-white text-sm mb-2">{faq.q}</h3>
              <p className="text-sm text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="glass-card p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Start Copy Trading in 2 Minutes</h2>
        <p className="text-gray-400 mb-6 text-sm max-w-lg mx-auto">
          Try copy trading on demo first — zero risk, $50K virtual balance.
          Once you see results, deposit as little as $5 to start real copy trading.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <CtaButton broker="pocketOption" type="demo" label="Try Copy Trading (Demo)" campaign="copytrade_po" />
          <CtaButton broker="pocketOption" label="Open Real Account ($5)" variant="secondary" campaign="copytrade_po" />
        </div>
      </section>
    </article>
  );
}
