'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';

export default function BinaryOptionsCopyTradingPage() {
  const locale = useLocale();

  return (
    <article className="section-container py-16 max-w-4xl mx-auto">
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge-blue">Trading Guide</span>
          <span className="text-xs text-gray-600">Updated May 2026 • 14 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          Binary Options Copy Trading Guide 2026 — How to Copy Top Traders
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Everything you need to know about copy trading in binary options: which brokers support it,
          how to find profitable traders, a step-by-step walkthrough on Pocket Option, and realistic
          expectations so you don&apos;t get burned.
        </p>
      </header>

      {/* Quick Summary */}
      <section className="glass-card p-6 mb-10">
        <h2 className="text-lg font-bold mb-3 text-blue-400">What Is Binary Options Copy Trading?</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          Copy trading lets you <strong className="text-white">automatically replicate the trades of experienced traders</strong> in
          real-time. When they place a trade, the same position opens in your account. When they profit, you profit.
          It&apos;s the fastest way for beginners to start trading without learning technical analysis first.
        </p>
        <div className="grid sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-white/[0.03] rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-white">Automated</div>
            <div className="text-xs text-gray-400">Hands-free trading</div>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-white">Real-Time</div>
            <div className="text-xs text-gray-400">Instant replication</div>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-white">$50+</div>
            <div className="text-xs text-gray-400">Recommended start</div>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-white">Free</div>
            <div className="text-xs text-gray-400">No copy fees</div>
          </div>
        </div>
      </section>

      {/* How Copy Trading Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How Binary Options Copy Trading Works</h2>
        <p className="text-gray-400 text-sm mb-6">
          Unlike forex or stock copy trading where positions stay open for hours or days, binary options copy
          trading mirrors short-term trades with fixed expiry times. Here&apos;s the flow:
        </p>
        <div className="space-y-4">
          {[
            { step: '1', title: 'Master Trader Places a Trade', desc: 'An experienced trader (the "master") opens a binary options trade — for example, EUR/USD Call with a 5-minute expiry and $10 stake.' },
            { step: '2', title: 'Signal Sent to Copiers', desc: 'The platform instantly broadcasts the trade details to all users who are copying that master trader.' },
            { step: '3', title: 'Your Trade Opens Automatically', desc: 'The same trade opens in your account with your pre-set copy amount. You don\'t need to be watching the screen.' },
            { step: '4', title: 'Trade Expires Together', desc: 'Both the master\'s trade and your copied trade expire at the same time. Same outcome — win or lose.' },
            { step: '5', title: 'Profit or Loss Applied', desc: 'If the master wins, you win your payout. If the master loses, you lose your stake. Results are proportional to your copy amount.' },
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

      {/* Which Brokers Offer Copy Trading */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Which Brokers Offer Copy Trading?</h2>
        <p className="text-gray-400 text-sm mb-6">
          Not every binary options broker provides copy trading. Here&apos;s a breakdown of what&apos;s available:
        </p>
        <div className="space-y-4">
          {/* Pocket Option */}
          <div className="glass-card p-6 border border-emerald-500/20">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-lg font-bold text-white">Pocket Option — Full-Featured Copy Trading</h3>
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">Best Choice</span>
            </div>
            <p className="text-sm text-gray-300 mb-3">
              Pocket Option has the most complete copy trading system in the binary options industry. You get a full
              leaderboard with trader stats, win rates, profit history, and the number of active copiers. You can
              filter traders by performance, set custom copy amounts, and even test on demo before going live.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-3">
              <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                <div className="text-xs text-gray-400">Leaderboard</div>
                <div className="text-sm font-bold text-emerald-400">Full stats</div>
              </div>
              <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                <div className="text-xs text-gray-400">Demo Copy</div>
                <div className="text-sm font-bold text-emerald-400">Available</div>
              </div>
              <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                <div className="text-xs text-gray-400">Min. Deposit</div>
                <div className="text-sm font-bold text-white">$5</div>
              </div>
            </div>
            <Link href={`/${locale}/pocket-option`} className="text-blue-400 text-sm hover:underline">
              Read full Pocket Option review →
            </Link>
          </div>

          {/* Quotex */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-lg font-bold text-white">Quotex — Limited Copy Trading</h3>
              <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full">Limited</span>
            </div>
            <p className="text-sm text-gray-300 mb-3">
              Quotex offers a basic signals feature rather than full copy trading. You can follow trade signals
              from top performers, but it&apos;s not automated — you need to manually execute each trade based on
              the signal. This means you need to be online when signals are sent.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-3">
              <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                <div className="text-xs text-gray-400">Type</div>
                <div className="text-sm font-bold text-amber-400">Signals only</div>
              </div>
              <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                <div className="text-xs text-gray-400">Automation</div>
                <div className="text-sm font-bold text-red-400">Manual</div>
              </div>
              <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                <div className="text-xs text-gray-400">Min. Deposit</div>
                <div className="text-sm font-bold text-white">$10</div>
              </div>
            </div>
            <Link href={`/${locale}/quotex`} className="text-blue-400 text-sm hover:underline">
              Read full Quotex review →
            </Link>
          </div>

          {/* ExpertOption */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-lg font-bold text-white">ExpertOption — Social Trading Feed</h3>
              <span className="text-xs bg-gray-500/20 text-gray-400 px-2 py-0.5 rounded-full">Social Only</span>
            </div>
            <p className="text-sm text-gray-300 mb-3">
              ExpertOption provides a social trading feed where you can see what other traders are doing in
              real-time. However, there&apos;s no one-click copy button — you observe the community&apos;s trades and
              decide whether to follow. It&apos;s more social sentiment than actual copy trading.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-3">
              <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                <div className="text-xs text-gray-400">Type</div>
                <div className="text-sm font-bold text-gray-400">Social feed</div>
              </div>
              <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                <div className="text-xs text-gray-400">Automation</div>
                <div className="text-sm font-bold text-red-400">None</div>
              </div>
              <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                <div className="text-xs text-gray-400">Min. Deposit</div>
                <div className="text-sm font-bold text-white">$10</div>
              </div>
            </div>
            <Link href={`/${locale}/expert-option`} className="text-blue-400 text-sm hover:underline">
              Read full ExpertOption review →
            </Link>
          </div>
        </div>

        <div className="mt-6 bg-white/[0.03] rounded-lg p-4">
          <p className="text-sm text-gray-300">
            <strong className="text-white">Bottom line:</strong> If copy trading is your priority,{' '}
            <Link href={`/${locale}/pocket-option`} className="text-blue-400 hover:underline">Pocket Option</Link> is
            the clear winner. It&apos;s the only broker with a fully automated, transparent copy trading system. The others
            offer social features that are useful but not true copy trading.
          </p>
        </div>
      </section>

      {/* Step-by-Step Guide on Pocket Option */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Step-by-Step: Copy Trading on Pocket Option</h2>
        <p className="text-gray-400 text-sm mb-6">
          Here&apos;s exactly how to set up copy trading on Pocket Option from scratch. The entire process takes
          about 5 minutes.
        </p>

        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-3">Step 1: Create Your Account</h3>
            <p className="text-sm text-gray-300 mb-3">
              Sign up at Pocket Option using your email. Verification is optional for small amounts but recommended
              for faster withdrawals later. Your account comes with a $50,000 demo balance by default.
            </p>
            <p className="text-sm text-gray-400">
              <strong className="text-amber-300">Pro tip:</strong> Start with the demo account to test copy trading
              with zero risk. Everything works identically to real money.
            </p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-3">Step 2: Navigate to Copy Trading</h3>
            <p className="text-sm text-gray-300 mb-3">
              Click the &quot;Copy Trading&quot; icon in the left sidebar menu. On mobile, tap the hamburger menu first.
              You&apos;ll see a leaderboard of master traders sorted by profitability.
            </p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-3">Step 3: Analyze Trader Stats</h3>
            <p className="text-sm text-gray-300 mb-3">
              Before copying anyone, check these key metrics:
            </p>
            <ul className="space-y-2 text-sm text-gray-400 ml-4">
              <li>• <strong className="text-white">Win rate:</strong> Look for 65% or higher. Below that, binary options payouts rarely cover losses.</li>
              <li>• <strong className="text-white">Trade count:</strong> Minimum 100 trades for statistical reliability. 200+ is better.</li>
              <li>• <strong className="text-white">Active days:</strong> At least 30 days of activity. Avoid traders who were only active last week.</li>
              <li>• <strong className="text-white">Copier count:</strong> If 50+ other users are copying this trader, that&apos;s good social proof.</li>
              <li>• <strong className="text-white">Profit trend:</strong> Check if profits are growing steadily or if there was one lucky week followed by losses.</li>
            </ul>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-3">Step 4: Configure Copy Settings</h3>
            <p className="text-sm text-gray-300 mb-3">
              Click &quot;Copy&quot; on your chosen trader, then set these parameters:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white/[0.03] rounded-lg p-3">
                <div className="text-sm font-medium text-white">Copy Amount</div>
                <div className="text-xs text-gray-400">Set to $1-5 per trade for starters. Fixed amount recommended over proportional.</div>
              </div>
              <div className="bg-white/[0.03] rounded-lg p-3">
                <div className="text-sm font-medium text-white">Daily Limit</div>
                <div className="text-xs text-gray-400">Cap at 15-20 trades per day to prevent runaway losses on a bad streak.</div>
              </div>
              <div className="bg-white/[0.03] rounded-lg p-3">
                <div className="text-sm font-medium text-white">Stop Copy Threshold</div>
                <div className="text-xs text-gray-400">Set a loss limit at which auto-copying pauses. 10% of your balance is reasonable.</div>
              </div>
              <div className="bg-white/[0.03] rounded-lg p-3">
                <div className="text-sm font-medium text-white">Simultaneous Copies</div>
                <div className="text-xs text-gray-400">Allow 3-5 trades running at once max. More than that stretches your balance thin.</div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-3">Step 5: Monitor and Optimize</h3>
            <p className="text-sm text-gray-300 mb-3">
              Once copying is active, check your results at least once a day. After one week:
            </p>
            <ul className="space-y-2 text-sm text-gray-400 ml-4">
              <li>• Remove any trader whose win rate has dropped below 60%</li>
              <li>• Add 1-2 new promising traders to diversify</li>
              <li>• Adjust copy amounts based on which traders are performing best</li>
              <li>• Keep a simple spreadsheet tracking each copied trader&apos;s daily results</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Risks of Copy Trading */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Risks of Binary Options Copy Trading</h2>
        <div className="border border-red-500/30 bg-red-500/[0.03] rounded-xl p-6">
          <p className="text-sm text-gray-300 mb-4">
            Copy trading reduces the skill barrier, but it does <strong className="text-white">not eliminate risk</strong>.
            Be aware of these dangers:
          </p>
          <div className="space-y-4">
            {[
              { risk: 'Past Performance Is Not Predictive', detail: 'A trader with 75% win rate last month could drop to 50% this month. Markets change, strategies stop working, and luck plays a role in small sample sizes.' },
              { risk: 'Delayed Execution', detail: 'Even a 1-2 second delay in copying can mean different entry prices in fast-moving markets. The master might win while your copy loses due to worse timing.' },
              { risk: 'Over-Reliance on Others', detail: 'If your copied trader stops trading or changes their strategy, you\'re left with no plan. Always treat copy trading as a learning tool, not a permanent strategy.' },
              { risk: 'Balance Drain', detail: 'Copying multiple traders simultaneously with a small balance means individual losses hit harder. A $50 account copying 5 traders at $2 each can drain fast during losing streaks.' },
              { risk: 'Fake Leaderboard Stats', detail: 'Some traders may inflate stats through lucky streaks or very low sample sizes. Always verify: 100+ trades, 30+ days, and consistent results — not one big day.' },
              { risk: 'Emotional Decisions', detail: 'Watching losses in real-time causes anxiety. Many beginners panic and stop copying during a normal drawdown, only to miss the recovery. Set your rules and stick to them.' },
            ].map((item) => (
              <div key={item.risk} className="flex gap-3">
                <span className="text-red-400 text-sm mt-0.5 flex-shrink-0">⚠</span>
                <div>
                  <span className="text-white font-medium text-sm">{item.risk}</span>
                  <p className="text-gray-400 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Success */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">7 Tips for Successful Copy Trading</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { tip: 'Start on Demo', desc: 'Test every trader on the demo account for at least one week before risking real money. If they lose on demo, they\'ll lose on live too.' },
            { tip: 'Diversify Across 3-5 Traders', desc: 'Never rely on a single trader. Spread your copies so that one bad performer doesn\'t wipe out your account.' },
            { tip: 'Use Fixed Small Amounts', desc: 'Set $1-3 per copied trade regardless of what the master is betting. This protects you from their occasional oversized trades.' },
            { tip: 'Check Stats Weekly', desc: 'Every weekend, review each trader\'s performance. Drop anyone below 60% win rate. Add new candidates to test.' },
            { tip: 'Keep Records', desc: 'Track which traders you\'re copying, how much profit/loss each generates, and when you started/stopped. Data beats gut feeling.' },
            { tip: 'Learn While Copying', desc: 'Don\'t just passively copy — observe what your best traders do. What assets do they trade? What times? What expiry? Learn from their patterns.' },
            { tip: 'Set a Stop-Loss Budget', desc: 'Decide upfront: "If I lose $X this month from copy trading, I stop and re-evaluate." This prevents chasing losses.' },
          ].map((item) => (
            <div key={item.tip} className="glass-card p-5">
              <h3 className="font-semibold text-white text-sm mb-2">{item.tip}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Copy Trading vs Other Approaches */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Copy Trading vs Other Trading Approaches</h2>
        <div className="glass-card overflow-hidden">
          <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
            <div>Factor</div>
            <div className="text-center">Copy Trading</div>
            <div className="text-center">Manual Trading</div>
            <div className="text-center">Signal Bots</div>
          </div>
          {[
            { factor: 'Skill Required', copy: 'Low', manual: 'High', bot: 'Medium' },
            { factor: 'Time Investment', copy: '10 min/week', manual: '2-4 hrs/day', bot: '30 min/day' },
            { factor: 'Automation', copy: 'Full', manual: 'None', bot: 'Partial' },
            { factor: 'Control', copy: 'Limited', manual: 'Full', bot: 'Moderate' },
            { factor: 'Learning Value', copy: 'Good (observe)', manual: 'Excellent', bot: 'Low' },
            { factor: 'Risk Level', copy: 'Medium', manual: 'High (beginners)', bot: 'High' },
            { factor: 'Monthly Return', copy: '5-15%', manual: '10-30% (skilled)', bot: 'Varies wildly' },
            { factor: 'Best For', copy: 'Beginners', manual: 'Experienced', bot: 'Tech-savvy' },
          ].map((row, i) => (
            <div key={i} className={`grid grid-cols-4 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
              <div className="text-white font-medium">{row.factor}</div>
              <div className="text-center text-blue-400">{row.copy}</div>
              <div className="text-center text-gray-400">{row.manual}</div>
              <div className="text-center text-gray-400">{row.bot}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'Is binary options copy trading legal?', a: 'Copy trading itself is legal in most countries. However, binary options trading is restricted or banned in the EU, UK, Australia, and Canada. Check your local regulations before trading.' },
            { q: 'Can I make money consistently with copy trading?', a: 'Some traders do, but it\'s not guaranteed. Expect 5-15% monthly returns if you choose traders carefully. Months with losses are normal even with good traders.' },
            { q: 'What\'s the minimum amount needed?', a: 'Pocket Option requires a $5 minimum deposit, but we recommend $50-100 for copy trading so you can diversify across multiple traders without running out of balance.' },
            { q: 'Can I copy trade on my phone?', a: 'Yes. Pocket Option\'s copy trading works on both the web platform and mobile app. You can set up copies on mobile and they run automatically.' },
            { q: 'What happens if I run out of balance while copying?', a: 'New copies won\'t execute if your balance can\'t cover the copy amount. Existing copied trades will continue until expiry. You won\'t go into negative balance.' },
            { q: 'How many traders should I copy at once?', a: 'We recommend 3-5 traders for optimal diversification. Fewer than 3 is too concentrated; more than 5 becomes hard to track and drains your balance faster.' },
          ].map((faq) => (
            <div key={faq.q} className="glass-card p-5">
              <h3 className="font-semibold text-white text-sm mb-2">{faq.q}</h3>
              <p className="text-sm text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href={`/${locale}/blog/pocket-option-copy-trading`} className="glass-card p-4 hover:border-blue-500/30 transition-colors">
            <h3 className="text-sm font-semibold text-white mb-1">Pocket Option Copy Trading Deep Dive</h3>
            <p className="text-xs text-gray-400">Detailed walkthrough with real test results from 3 months of copying.</p>
          </Link>
          <Link href={`/${locale}/blog/binary-options-mobile-trading`} className="glass-card p-4 hover:border-blue-500/30 transition-colors">
            <h3 className="text-sm font-semibold text-white mb-1">Best Binary Options Mobile Apps 2026</h3>
            <p className="text-xs text-gray-400">Compare mobile trading apps including copy trading on the go.</p>
          </Link>
          <Link href={`/${locale}/blog/quotex-strategy`} className="glass-card p-4 hover:border-blue-500/30 transition-colors">
            <h3 className="text-sm font-semibold text-white mb-1">Quotex Trading Strategies</h3>
            <p className="text-xs text-gray-400">Manual trading strategies for when you&apos;re ready to trade on your own.</p>
          </Link>
          <Link href={`/${locale}/blog/otc-trading-binary-options`} className="glass-card p-4 hover:border-blue-500/30 transition-colors">
            <h3 className="text-sm font-semibold text-white mb-1">OTC Trading Guide for Binary Options</h3>
            <p className="text-xs text-gray-400">Trade binary options on weekends with OTC markets.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="glass-card p-8 text-center mb-10">
        <h2 className="text-2xl font-bold mb-3">Start Copy Trading Today</h2>
        <p className="text-gray-400 mb-6 text-sm max-w-lg mx-auto">
          Try copy trading on Pocket Option&apos;s demo account — $50,000 virtual balance, zero risk.
          Once you find profitable traders, deposit as little as $5 to copy them with real money.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <CtaButton broker="pocketOption" type="demo" label="Try Copy Trading (Demo)" campaign="blog_copytrade" />
          <CtaButton broker="pocketOption" label="Open Real Account ($5)" variant="secondary" campaign="blog_copytrade" />
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="border border-gray-700/50 rounded-xl p-5">
        <p className="text-xs text-gray-500 leading-relaxed">
          <strong className="text-gray-400">Risk Disclaimer:</strong> Binary options trading involves substantial risk of loss and is not suitable
          for all investors. Copy trading does not guarantee profits — past performance of copied traders is not indicative of future results.
          You could lose some or all of your invested capital. Only trade with money you can afford to lose. This content is for educational
          purposes only and does not constitute financial advice. Please consult a qualified financial advisor before making investment decisions.
        </p>
      </section>
    </article>
  );
}
