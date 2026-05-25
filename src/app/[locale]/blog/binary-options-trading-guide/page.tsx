'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';

export default function BinaryOptionsTradingGuidePage() {
  const locale = useLocale();

  return (
    <article className="section-container py-16 max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge-blue">Beginner Guide</span>
          <span className="text-xs text-gray-600">Updated May 2026 &bull; 15 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          Binary Options Trading for Beginners &mdash; Complete 2026 Guide
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Everything you need to know about binary options trading: how it works, types of trades,
          risk management strategies, and step-by-step instructions to get started. Written for
          complete beginners with zero prior trading experience.
        </p>
      </header>

      {/* Table of Contents */}
      <nav className="glass-card p-6 mb-10">
        <h2 className="text-lg font-bold mb-4 text-blue-400">Table of Contents</h2>
        <ol className="space-y-2 text-sm text-gray-300">
          <li><a href="#what-are" className="hover:text-blue-400 transition-colors">1. What Are Binary Options?</a></li>
          <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">2. How Binary Options Trading Works</a></li>
          <li><a href="#types" className="hover:text-blue-400 transition-colors">3. Types of Binary Options</a></li>
          <li><a href="#assets" className="hover:text-blue-400 transition-colors">4. What Can You Trade?</a></li>
          <li><a href="#risk-management" className="hover:text-blue-400 transition-colors">5. Risk Management Essentials</a></li>
          <li><a href="#getting-started" className="hover:text-blue-400 transition-colors">6. Getting Started Step by Step</a></li>
          <li><a href="#common-mistakes" className="hover:text-blue-400 transition-colors">7. Common Beginner Mistakes</a></li>
          <li><a href="#strategies" className="hover:text-blue-400 transition-colors">8. Basic Trading Strategies</a></li>
          <li><a href="#faq" className="hover:text-blue-400 transition-colors">9. FAQ</a></li>
        </ol>
      </nav>

      {/* What Are Binary Options */}
      <section id="what-are" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Are Binary Options?</h2>
        <div className="glass-card p-6 mb-6">
          <p className="text-gray-300 leading-relaxed mb-4">
            Binary options are financial instruments that let you predict whether the price of an asset (like
            EUR/USD, Bitcoin, or Apple stock) will go <strong className="text-white">up or down</strong> within
            a specific time period. The word &quot;binary&quot; means two outcomes &mdash; you either win a
            fixed payout or lose your investment.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Think of it like this: you&apos;re making a yes/no prediction. &quot;Will the price of gold be
            higher than $2,350 in the next 5 minutes?&quot; If you&apos;re right, you earn a fixed return
            (typically 70-95% of your investment). If you&apos;re wrong, you lose what you invested on that trade.
          </p>
          <div className="bg-blue-500/5 border border-blue-500/10 rounded-lg p-4">
            <p className="text-sm text-gray-300">
              <span className="text-blue-400 font-semibold">Example: </span>
              You invest $100 on EUR/USD going UP in the next 5 minutes. The payout is 85%.
              If EUR/USD goes up &rarr; you get $185 back ($100 + $85 profit).
              If EUR/USD goes down &rarr; you lose your $100.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="glass-card p-5 text-center">
            <div className="text-2xl mb-2 text-emerald-400 font-bold">Fixed Risk</div>
            <p className="text-xs text-gray-400">You know exactly how much you can win or lose before placing the trade</p>
          </div>
          <div className="glass-card p-5 text-center">
            <div className="text-2xl mb-2 text-blue-400 font-bold">Short-Term</div>
            <p className="text-xs text-gray-400">Trades last from 30 seconds to several hours &mdash; results are fast</p>
          </div>
          <div className="glass-card p-5 text-center">
            <div className="text-2xl mb-2 text-purple-400 font-bold">Simple</div>
            <p className="text-xs text-gray-400">No complex orders, leverage, or margin calls to worry about</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How Binary Options Trading Works</h2>
        <div className="space-y-4">
          {[
            {
              step: '1',
              title: 'Choose an Asset',
              desc: 'Select what you want to trade. Options include currency pairs (EUR/USD, GBP/JPY), cryptocurrencies (Bitcoin, Ethereum), stocks (Apple, Tesla), commodities (Gold, Oil), and indices (S&P 500, NASDAQ).',
            },
            {
              step: '2',
              title: 'Set the Expiry Time',
              desc: 'Decide how long your trade will last. Expiry times range from 30 seconds to several hours. Shorter expiries are riskier but faster. Beginners should start with 5-15 minute expiries for more predictable price movements.',
            },
            {
              step: '3',
              title: 'Choose Your Investment Amount',
              desc: 'Decide how much to invest on this trade. Most brokers allow trades from $1. Never risk more than 1-5% of your account balance on a single trade.',
            },
            {
              step: '4',
              title: 'Predict the Direction',
              desc: 'Click UP (Call) if you think the price will be higher at expiry, or DOWN (Put) if you think it will be lower. This is the core decision in binary options trading.',
            },
            {
              step: '5',
              title: 'Wait for the Result',
              desc: 'The trade expires automatically. If your prediction was correct, you receive your investment back plus the payout (e.g., 85%). If incorrect, you lose your investment amount.',
            },
          ].map((s) => (
            <div key={s.step} className="glass-card p-5">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm flex-shrink-0">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Types of Binary Options */}
      <section id="types" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Types of Binary Options</h2>
        <div className="space-y-4">
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-3">High/Low (Call/Put)</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-2">
              The most common and simplest type. You predict whether the price will be <strong className="text-white">higher or lower</strong> than
              the current price when the trade expires. This is what most beginners start with and what most brokers offer as their primary option.
            </p>
            <p className="text-xs text-gray-500">Available on: All brokers</p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-3">One-Touch</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-2">
              You predict whether the price will <strong className="text-white">touch a specific target price</strong> at
              any point before expiry. The price doesn&apos;t need to end at the target &mdash; it just needs to reach it once.
              Higher payouts (up to 500%+) but harder to predict. Best for trending markets.
            </p>
            <p className="text-xs text-gray-500">Available on: IQ Option, Deriv, some others</p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-3">Range (Boundary)</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-2">
              You predict whether the price will stay <strong className="text-white">within or break out of a range</strong> (upper
              and lower boundaries) by expiry. Useful in low-volatility sideways markets. &quot;In&quot; pays out if
              price stays within bounds; &quot;Out&quot; pays if it breaks either boundary.
            </p>
            <p className="text-xs text-gray-500">Available on: Deriv, IQ Option</p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-3">Turbo (Short-Term)</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-2">
              Standard High/Low trades but with <strong className="text-white">very short expiry times</strong> &mdash;
              typically 30 seconds to 5 minutes. Faster results but significantly more unpredictable. The short timeframes
              make technical analysis less reliable. Not recommended for beginners.
            </p>
            <p className="text-xs text-gray-500">Available on: Pocket Option, Quotex, Binomo</p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-3">Ladder</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-2">
              Multiple price levels (&quot;rungs&quot;) are set above and below the current price. You predict which
              level the price will reach. <strong className="text-white">Higher rungs = higher payouts but lower probability.</strong> Similar
              to accumulator bets in sports. Advanced option for experienced traders only.
            </p>
            <p className="text-xs text-gray-500">Available on: Deriv, IQ Option (limited)</p>
          </div>
        </div>

        <div className="glass-card p-5 mt-6 border-blue-500/10">
          <p className="text-sm text-gray-300">
            <span className="text-blue-400 font-semibold">Beginner Recommendation: </span>
            Start exclusively with High/Low trades using 5-15 minute expiry times. Master these before
            exploring other types. Both{' '}
            <Link href={`/${locale}/pocket-option`} className="text-blue-400 hover:text-blue-300">Pocket Option</Link> and{' '}
            <Link href={`/${locale}/quotex`} className="text-blue-400 hover:text-blue-300">Quotex</Link>{' '}
            offer excellent High/Low trading with free demo accounts to practice on.
          </p>
        </div>
      </section>

      {/* What Can You Trade */}
      <section id="assets" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Can You Trade?</h2>
        <div className="glass-card overflow-hidden">
          <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
            <div>Asset Class</div>
            <div>Examples</div>
            <div>Best For</div>
          </div>
          {[
            { type: 'Currency Pairs', examples: 'EUR/USD, GBP/JPY, USD/JPY, AUD/USD', best: 'Most popular; high liquidity, tight spreads, available 24/5' },
            { type: 'Cryptocurrencies', examples: 'Bitcoin, Ethereum, Litecoin, Ripple', best: 'High volatility, available 24/7, trending markets' },
            { type: 'Stocks', examples: 'Apple, Tesla, Amazon, Google, Microsoft', best: 'News-driven moves, earnings season opportunities' },
            { type: 'Commodities', examples: 'Gold, Silver, Oil (WTI/Brent), Natural Gas', best: 'Inflation hedges, geopolitical events, clear trends' },
            { type: 'Indices', examples: 'S&P 500, NASDAQ, DAX, FTSE 100, Nikkei', best: 'Broad market moves, economic data releases' },
          ].map((a, i) => (
            <div key={a.type} className={`grid grid-cols-3 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
              <div className="text-white font-medium">{a.type}</div>
              <div className="text-gray-400 text-xs">{a.examples}</div>
              <div className="text-gray-400 text-xs">{a.best}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-4">
          <Link href={`/${locale}/pocket-option`} className="text-blue-400 hover:text-blue-300">Pocket Option</Link> offers
          180+ assets, while <Link href={`/${locale}/quotex`} className="text-blue-400 hover:text-blue-300">Quotex</Link> leads
          with 400+ tradeable instruments.
        </p>
      </section>

      {/* Risk Management */}
      <section id="risk-management" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Risk Management Essentials</h2>
        <div className="glass-card p-6 border-amber-500/10 bg-amber-500/[0.02] mb-6">
          <p className="text-sm text-amber-300 font-semibold mb-2">Critical Warning</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Binary options are high-risk instruments. Studies suggest that 70-90% of retail traders lose money.
            Risk management isn&apos;t optional &mdash; it&apos;s the difference between learning to trade and
            blowing your account in a week.
          </p>
        </div>

        <div className="space-y-4">
          <div className="glass-card p-5">
            <h3 className="font-semibold text-white mb-2">The 1-2% Rule</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Never risk more than 1-2% of your total account balance on a single trade. With a $500 account,
              that means $5-10 per trade maximum. This ensures that even a losing streak of 10 trades only
              costs you 10-20% of your capital &mdash; leaving room to recover.
            </p>
          </div>

          <div className="glass-card p-5">
            <h3 className="font-semibold text-white mb-2">Set Daily Loss Limits</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Decide in advance how much you&apos;re willing to lose in a single day (e.g., 5-10% of your account).
              When you hit that limit, stop trading &mdash; no exceptions. Emotional trading after losses is the
              #1 account killer for beginners.
            </p>
          </div>

          <div className="glass-card p-5">
            <h3 className="font-semibold text-white mb-2">Avoid the Martingale Trap</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Doubling your investment after each loss (the Martingale strategy) seems logical but is mathematically
              dangerous. After just 7 consecutive losses, a $10 starting trade becomes $1,280. Losing streaks are
              more common than beginners expect.
            </p>
          </div>

          <div className="glass-card p-5">
            <h3 className="font-semibold text-white mb-2">Trade Only with Money You Can Lose</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Never trade with rent money, emergency funds, or borrowed money. Only use disposable income that
              won&apos;t affect your lifestyle if lost entirely. This isn&apos;t just advice &mdash; it&apos;s
              essential for maintaining the emotional clarity needed to trade well.
            </p>
          </div>

          <div className="glass-card p-5">
            <h3 className="font-semibold text-white mb-2">Keep a Trading Journal</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Record every trade: asset, direction, expiry, amount, result, and your reasoning. After 50+ trades,
              patterns emerge &mdash; which assets you trade best, which time frames work, and which situations
              cause losses. Data beats intuition.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Getting Started: Step by Step</h2>
        <div className="space-y-4">
          {[
            {
              step: '1',
              title: 'Choose a Broker and Open a Demo Account',
              desc: 'Start with a free demo account — no deposit needed. We recommend Pocket Option ($50K demo) or Quotex (unlimited demo) for beginners. Practice for at least 2-4 weeks before using real money.',
            },
            {
              step: '2',
              title: 'Learn the Platform',
              desc: 'Spend time exploring the platform interface. Learn how to read charts, set expiry times, switch assets, and review your trade history. Every platform is slightly different — get comfortable before risking real money.',
            },
            {
              step: '3',
              title: 'Study Basic Chart Patterns',
              desc: 'Learn to identify trends (uptrend, downtrend, sideways), support and resistance levels, and basic candlestick patterns. You don\'t need to be a technical analysis expert, but understanding the basics gives you an edge over random guessing.',
            },
            {
              step: '4',
              title: 'Develop a Simple Strategy',
              desc: 'Choose one strategy and stick with it. A good starter strategy: trade in the direction of the trend on 5-minute charts, only during high-liquidity hours (London and New York sessions), using 15-minute expiry times.',
            },
            {
              step: '5',
              title: 'Start with the Minimum Deposit',
              desc: 'When you\'re consistently profitable on demo for 2+ weeks, make the minimum deposit ($5 on Pocket Option, $10 on most others). Trade with the smallest possible amounts ($1 trades) to experience real emotions without significant risk.',
            },
            {
              step: '6',
              title: 'Test a Withdrawal Immediately',
              desc: 'After your first few real trades, make a small withdrawal. This confirms the process works and builds trust in the platform. It also removes the temptation to overtrade with your initial deposit.',
            },
            {
              step: '7',
              title: 'Scale Up Gradually',
              desc: 'Only increase your trade sizes and deposits after proving consistent profitability over 100+ trades. Scaling too fast is one of the most common reasons traders blow their accounts.',
            },
          ].map((s) => (
            <div key={s.step} className="glass-card p-5">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm flex-shrink-0">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-6 mt-6 border-blue-500/10">
          <h3 className="font-bold text-white mb-3">Ready to Start Practicing?</h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Open a free demo account to practice everything you&apos;ve learned. No deposit required &mdash;
            trade with virtual money until you&apos;re confident.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CtaButton broker="pocketOption" type="demo" label="Pocket Option Demo ($50K Free)" campaign="trading_guide" />
            <CtaButton broker="quotex" type="demo" label="Quotex Demo (Unlimited Free)" variant="secondary" campaign="trading_guide" />
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section id="common-mistakes" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">7 Common Beginner Mistakes</h2>
        <div className="space-y-4">
          {[
            {
              mistake: 'Skipping Demo Practice',
              fix: 'Demo trading isn\'t optional. Spend at least 2-4 weeks and 100+ demo trades before depositing. Treat demo money seriously — practice your strategy as if it were real.',
            },
            {
              mistake: 'Overtrading',
              fix: 'Quality over quantity. 3-5 well-analyzed trades per day beat 30 impulsive ones. Set a maximum number of daily trades and stick to it.',
            },
            {
              mistake: 'Revenge Trading',
              fix: 'After a loss, the urge to immediately "win it back" leads to emotional decisions and bigger losses. Take a break after consecutive losses. Walk away.',
            },
            {
              mistake: 'Ignoring the Economic Calendar',
              fix: 'Major news events (interest rate decisions, employment data) cause extreme volatility. Either avoid trading during these events or learn to trade them specifically.',
            },
            {
              mistake: 'Using the Martingale System',
              fix: 'Doubling bets after losses seems smart but requires infinite capital to work. After 10 losses ($1 start), you\'d need $1,024 on one trade. Use fixed position sizing instead.',
            },
            {
              mistake: 'Trading Too Many Assets',
              fix: 'Focus on 2-3 assets and learn them deeply. Each asset has its own patterns, volatility profile, and optimal trading times. Specialization beats diversification for beginners.',
            },
            {
              mistake: 'No Trading Plan',
              fix: 'Document your strategy: which assets, what time frames, entry criteria, exit rules, risk limits. Then follow it mechanically. A mediocre plan followed consistently beats a great plan followed sometimes.',
            },
          ].map((item) => (
            <div key={item.mistake} className="glass-card p-5">
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5 flex-shrink-0 font-bold">&#10007;</span>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{item.mistake}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Basic Strategies */}
      <section id="strategies" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Basic Trading Strategies for Beginners</h2>
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-3">1. Trend Following</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              The simplest and most effective strategy for beginners. Identify the overall trend direction
              and place trades in that direction. &quot;The trend is your friend&quot; is a trading cliche
              because it works.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>&bull; Use 5-minute or 15-minute charts to identify the trend</li>
              <li>&bull; Place CALL trades in uptrends, PUT trades in downtrends</li>
              <li>&bull; Avoid trading in sideways/ranging markets</li>
              <li>&bull; Use 15-30 minute expiry times</li>
              <li>&bull; Win rate target: 55-65%</li>
            </ul>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-3">2. Support &amp; Resistance Bounce</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              Prices tend to reverse at key levels (support below, resistance above). When the price approaches
              a level it has bounced from before, trade the expected bounce direction.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>&bull; Identify levels where price has reversed 2+ times</li>
              <li>&bull; CALL when price touches support from above</li>
              <li>&bull; PUT when price touches resistance from below</li>
              <li>&bull; Use 5-15 minute expiry times</li>
              <li>&bull; Works best in ranging/sideways markets</li>
            </ul>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-3">3. News-Based Trading</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              Trade based on scheduled economic events. Major announcements (interest rates, employment data,
              GDP reports) cause predictable volatility spikes that can be traded.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>&bull; Check the economic calendar daily</li>
              <li>&bull; Focus on high-impact events (3-star ratings)</li>
              <li>&bull; Trade the expected reaction, not your opinion</li>
              <li>&bull; Use shorter expiry times (1-5 minutes) for news trades</li>
              <li>&bull; Higher risk &mdash; only use after mastering trend following</li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-4">
          For more detailed strategies, read our{' '}
          <Link href={`/${locale}/blog/quotex-strategy`} className="text-blue-400 hover:text-blue-300">
            binary options strategy guide
          </Link>.
        </p>
      </section>

      {/* Mid-Article CTA */}
      <section className="mb-12">
        <div className="glass-card p-6 border-blue-500/10">
          <h2 className="text-xl font-bold mb-3">Start Practicing Today</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The best way to learn is by doing. Open a free demo account and practice the strategies above
            with zero risk. Both platforms below offer instant demo access with no deposit required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CtaButton broker="pocketOption" type="demo" label="Pocket Option — $50K Demo" campaign="trading_guide_mid" />
            <CtaButton broker="quotex" type="demo" label="Quotex — Unlimited Demo" variant="secondary" campaign="trading_guide_mid" />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: '7 Best Binary Options Brokers 2026', slug: 'best-binary-options-brokers', desc: 'Our tested rankings of the top brokers.' },
            { title: 'Binary Options vs Forex Trading', slug: 'binary-options-vs-forex', desc: 'How binary options compare to traditional forex.' },
            { title: 'Best Demo Accounts 2026', slug: 'binary-options-demo-account', desc: 'Compare free demo accounts from all brokers.' },
            { title: 'Is Pocket Option Legit?', slug: 'is-pocket-option-legit', desc: 'Full trust analysis with withdrawal proof.' },
          ].map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="glass-card p-5 hover:bg-white/[0.04] transition-colors"
            >
              <h3 className="font-semibold text-white text-sm mb-1">{post.title}</h3>
              <p className="text-xs text-gray-400">{post.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is binary options trading gambling?',
              a: 'Binary options have elements of both trading and gambling. Without a strategy and risk management, it\'s essentially gambling. With proper analysis, education, and discipline, it can be a form of speculative trading. The key difference is whether you\'re making informed decisions or random guesses.',
            },
            {
              q: 'How much money do I need to start?',
              a: 'You can start with as little as $5 on Pocket Option or $10 on most other brokers. However, we recommend starting with a free demo account first. When you transition to real money, begin with the minimum deposit and use $1 trades.',
            },
            {
              q: 'Can I make a living from binary options?',
              a: 'While some traders are profitable, making a consistent living from binary options alone is extremely difficult. Most professional traders treat it as one income stream among many. Start with realistic expectations — focus on learning, not earning.',
            },
            {
              q: 'Are binary options legal?',
              a: 'Legality varies by country. Binary options are banned in the EU/EEA for retail traders, restricted in the US (only NADEX is legal), and available in most Asian, African, and South American countries. Check your local regulations before trading.',
            },
            {
              q: 'What is the best time to trade binary options?',
              a: 'The best trading hours are during the London session (8:00-16:00 GMT) and the London/New York overlap (13:00-16:00 GMT). These periods have the highest liquidity and most predictable price movements.',
            },
            {
              q: 'How long should I practice on demo?',
              a: 'At minimum 2-4 weeks and 100+ trades. Ideally, trade on demo until you\'re consistently profitable over a 2-week period. Don\'t rush to real money — demo trading is free, and there\'s no deadline.',
            },
          ].map((faq) => (
            <div key={faq.q} className="glass-card p-5">
              <h3 className="font-semibold text-white text-sm mb-2">{faq.q}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="glass-card p-6 border-red-500/10 bg-red-500/[0.02]">
        <h2 className="text-sm font-bold text-red-400 mb-2">Risk Disclaimer</h2>
        <p className="text-xs text-gray-400 leading-relaxed">
          Binary options trading involves substantial risk of loss and is not suitable for all investors.
          You could lose all of your invested capital. The information in this guide is for educational purposes
          only and should not be considered financial advice. Statistics suggest 70-90% of retail traders lose money
          trading binary options. Past performance does not guarantee future results. Never invest money you
          cannot afford to lose. Please consult a qualified financial advisor before trading.
        </p>
      </section>
    </article>
  );
}
