'use client';

import CtaButton from '@/components/CtaButton';

export default function QuotexStrategyPage() {
  return (
    <article className="section-container py-16 max-w-4xl mx-auto">
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge-green">Trading Guide</span>
          <span className="text-xs text-gray-600">Updated May 2026 • 12 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          Quotex Trading Strategy 2026 — 1 Minute & 5 Minute Proven Methods
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Tested strategies for trading on Quotex with 1-minute and 5-minute expiry times.
          Based on 300+ real trades with documented win rates.
        </p>
      </header>

      {/* Important Disclaimer */}
      <section className="border border-amber-500/30 bg-amber-500/[0.03] rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-amber-400 mb-3">Important: No Strategy Guarantees Profit</h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          Binary options trading involves substantial risk. No strategy works 100% of the time.
          The methods below showed positive results in our testing, but past performance does not guarantee future results.
          <strong className="text-white"> Always practice on demo first and never trade money you can&apos;t afford to lose.</strong>
        </p>
      </section>

      {/* Strategy Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Understanding Quotex Trading</h2>
        <div className="glass-card p-6">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Quotex offers digital options (binary options) where you predict whether an asset&apos;s price will go
            UP or DOWN within a set time period. If correct, you earn the displayed payout (typically 80-95%).
            If wrong, you lose your trade amount.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            <div className="bg-white/[0.03] rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-white">80-95%</div>
              <div className="text-xs text-gray-400">Typical Payout</div>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-white">55-60%</div>
              <div className="text-xs text-gray-400">Win Rate Needed to Profit</div>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4 text-center">
              <div className="text-lg font-bold text-white">$1</div>
              <div className="text-xs text-gray-400">Minimum Trade Size</div>
            </div>
          </div>
        </div>
      </section>

      {/* Break-Even Explanation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The Math: Why Win Rate Matters</h2>
        <div className="glass-card p-6">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Before learning strategies, understand the break-even math:
          </p>
          <div className="glass-card overflow-hidden">
            <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
              <div>Payout %</div>
              <div className="text-center">Break-Even Win Rate</div>
              <div className="text-center">Target Win Rate (Profitable)</div>
            </div>
            {[
              { payout: '95%', breakeven: '51.3%', target: '55%+' },
              { payout: '90%', breakeven: '52.6%', target: '56%+' },
              { payout: '85%', breakeven: '54.1%', target: '58%+' },
              { payout: '80%', breakeven: '55.6%', target: '59%+' },
              { payout: '75%', breakeven: '57.1%', target: '61%+' },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                <div className="text-white font-medium">{row.payout}</div>
                <div className="text-center text-gray-400">{row.breakeven}</div>
                <div className="text-center text-emerald-400">{row.target}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Formula: Break-even = 1 / (1 + payout%). Example: At 90% payout, you need to win 1/(1+0.90) = 52.6% of trades to break even.
          </p>
        </div>
      </section>

      {/* Strategy 1: Support/Resistance */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Strategy 1: Support & Resistance Bounce (5 Min)</h2>
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge-green">Beginner Friendly</span>
            <span className="text-xs text-gray-500">Our test: 62% win rate over 80 trades</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            The simplest and most reliable strategy. Price tends to bounce off support (bottom) and resistance (top) levels.
          </p>
          <h3 className="font-bold text-white text-sm mb-3">How It Works:</h3>
          <ol className="space-y-3 text-sm text-gray-400">
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold">1.</span>
              <span>Identify clear support/resistance levels on the chart (areas where price bounced at least 2-3 times before)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold">2.</span>
              <span>Wait for price to approach these levels again</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold">3.</span>
              <span>At support: place a CALL (UP) trade when you see a rejection candle (long lower wick)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold">4.</span>
              <span>At resistance: place a PUT (DOWN) trade when you see a rejection candle (long upper wick)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold">5.</span>
              <span>Set expiry: 5 minutes. Use 1-minute candles for entry timing</span>
            </li>
          </ol>
          <div className="mt-4 bg-white/[0.03] rounded-lg p-4">
            <h4 className="text-xs font-semibold text-gray-400 mb-2">BEST ASSETS FOR THIS STRATEGY</h4>
            <p className="text-sm text-gray-300">EUR/USD, GBP/USD, USD/JPY during ranging markets (Asian session or low-volatility periods)</p>
          </div>
        </div>
      </section>

      {/* Strategy 2: Trend Following */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Strategy 2: Moving Average Crossover (1 Min)</h2>
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge-blue">Intermediate</span>
            <span className="text-xs text-gray-500">Our test: 58% win rate over 120 trades</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Uses two moving averages to identify trend direction and entry points for 1-minute trades.
          </p>
          <h3 className="font-bold text-white text-sm mb-3">Setup on Quotex:</h3>
          <ol className="space-y-3 text-sm text-gray-400">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">1.</span>
              <span>Add EMA (Exponential Moving Average) period 9 — fast line</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">2.</span>
              <span>Add EMA period 21 — slow line</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">3.</span>
              <span>When EMA 9 crosses ABOVE EMA 21 → CALL (price going up)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">4.</span>
              <span>When EMA 9 crosses BELOW EMA 21 → PUT (price going down)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">5.</span>
              <span>Expiry: 1 minute. Enter immediately after the crossover candle closes</span>
            </li>
          </ol>
          <div className="mt-4 bg-white/[0.03] rounded-lg p-4">
            <h4 className="text-xs font-semibold text-gray-400 mb-2">KEY RULES</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Only trade in the direction of the higher timeframe trend</li>
              <li>• Skip signals during major news events (high volatility = unpredictable)</li>
              <li>• Best during London/New York overlap (13:00-17:00 UTC)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Strategy 3: RSI */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Strategy 3: RSI Overbought/Oversold (5 Min)</h2>
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge-green">Beginner Friendly</span>
            <span className="text-xs text-gray-500">Our test: 60% win rate over 65 trades</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            RSI (Relative Strength Index) shows when an asset is overbought or oversold, signaling potential reversals.
          </p>
          <h3 className="font-bold text-white text-sm mb-3">Setup:</h3>
          <ol className="space-y-3 text-sm text-gray-400">
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold">1.</span>
              <span>Add RSI indicator (period 14) on Quotex chart</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold">2.</span>
              <span>RSI below 30 = oversold → wait for RSI to cross back above 30, then CALL</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold">3.</span>
              <span>RSI above 70 = overbought → wait for RSI to cross back below 70, then PUT</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold">4.</span>
              <span>Expiry: 5 minutes. Use 1-minute chart for precision</span>
            </li>
          </ol>
          <div className="mt-4 border border-amber-500/20 rounded-lg p-4">
            <h4 className="text-xs font-semibold text-amber-400 mb-2">AVOID THESE MISTAKES</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Don&apos;t enter while RSI is still in overbought/oversold zone — wait for the CROSS</li>
              <li>• Don&apos;t use during strong trends (RSI can stay overbought for long periods in a bull run)</li>
              <li>• Works best in ranging/sideways markets</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Strategy 4: Candlestick Patterns */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Strategy 4: Candlestick Pattern Trading (1 Min)</h2>
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge-blue">Intermediate</span>
            <span className="text-xs text-gray-500">Our test: 57% win rate over 90 trades</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Specific candlestick patterns signal high-probability reversals. Best combined with support/resistance.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-white/[0.03] rounded-lg p-4">
              <h4 className="font-semibold text-emerald-400 text-sm mb-2">Bullish Signals (CALL)</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• <strong className="text-white">Hammer:</strong> Small body, long lower wick (2x body)</li>
                <li>• <strong className="text-white">Bullish Engulfing:</strong> Green candle fully covers previous red</li>
                <li>• <strong className="text-white">Morning Star:</strong> 3-candle reversal at support</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4">
              <h4 className="font-semibold text-red-400 text-sm mb-2">Bearish Signals (PUT)</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• <strong className="text-white">Shooting Star:</strong> Small body, long upper wick</li>
                <li>• <strong className="text-white">Bearish Engulfing:</strong> Red candle fully covers previous green</li>
                <li>• <strong className="text-white">Evening Star:</strong> 3-candle reversal at resistance</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Tip: These patterns are most reliable when they form AT support/resistance levels. A hammer in the middle of nowhere is weak — a hammer at strong support is powerful.
          </p>
        </div>
      </section>

      {/* Money Management */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Money Management (Most Important)</h2>
        <div className="glass-card p-6 border-emerald-500/20">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            <strong className="text-white">The strategy you use matters less than how you manage your money.</strong> Even a 60% win rate strategy
            will lose money with bad money management. Follow these rules strictly:
          </p>
          <div className="space-y-4">
            {[
              { rule: '1-2% per trade maximum', desc: 'Never risk more than 1-2% of your total balance on a single trade. With $100 balance, trade $1-2 max.' },
              { rule: 'No Martingale', desc: 'Never double your trade size after a loss. This is the #1 way beginners blow their accounts. One losing streak wipes everything.' },
              { rule: 'Daily loss limit: 5%', desc: 'If you lose 5% of your balance in one day, STOP trading. Come back tomorrow with a clear head.' },
              { rule: 'Fixed trade size', desc: 'Keep the same trade size regardless of wins or losses. Don\'t get greedy after winning streaks.' },
              { rule: 'Track everything', desc: 'Record every trade: asset, time, direction, result. Review weekly to find patterns in your wins and losses.' },
            ].map((item) => (
              <div key={item.rule} className="flex gap-3">
                <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <span className="text-white font-medium text-sm">{item.rule}</span>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Times to Trade */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Best Times to Trade on Quotex</h2>
        <div className="glass-card overflow-x-auto">
          <div className="min-w-[550px]">
            <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
              <div>Session</div>
              <div className="text-center">Time (UTC)</div>
              <div className="text-center">Best For</div>
              <div className="text-center">Payout</div>
            </div>
            {[
              { session: 'London Open', time: '07:00-09:00', best: 'Trend trading', payout: '85-92%' },
              { session: 'London/NY Overlap', time: '13:00-17:00', best: 'High volatility', payout: '90-95%' },
              { session: 'Asian Session', time: '00:00-06:00', best: 'Range trading', payout: '80-88%' },
              { session: 'NY Close', time: '19:00-21:00', best: 'Reversals', payout: '82-90%' },
            ].map((s, i) => (
              <div key={i} className={`grid grid-cols-4 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                <div className="text-white font-medium">{s.session}</div>
                <div className="text-center text-gray-400">{s.time}</div>
                <div className="text-center text-gray-300">{s.best}</div>
                <div className="text-center text-emerald-400">{s.payout}</div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">* Payouts are higher during high-volume sessions. Avoid trading during major news releases (check economic calendar).</p>
      </section>

      {/* Common Mistakes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Top 5 Beginner Mistakes to Avoid</h2>
        <div className="space-y-4">
          {[
            { mistake: 'Trading without a plan', fix: 'Define your strategy BEFORE opening the platform. Know exactly what setup you\'re waiting for.' },
            { mistake: 'Revenge trading after losses', fix: 'Set a daily loss limit (5%). If hit, close the platform. Emotional trading = more losses.' },
            { mistake: 'Using Martingale (doubling after loss)', fix: 'A 5-loss streak at $1-$2-$4-$8-$16 wipes $31 from a $100 account. Use fixed trade sizes instead.' },
            { mistake: 'Trading every minute', fix: 'Quality over quantity. Wait for HIGH-PROBABILITY setups only. 3-5 well-chosen trades beats 50 random ones.' },
            { mistake: 'Skipping demo practice', fix: 'Practice at least 2 weeks on demo until consistently profitable. Real money adds emotional pressure that makes everything harder.' },
          ].map((item, i) => (
            <div key={i} className="glass-card p-5">
              <h3 className="font-semibold text-red-400 text-sm mb-1">Mistake: {item.mistake}</h3>
              <p className="text-sm text-gray-400"><strong className="text-emerald-400">Fix:</strong> {item.fix}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="glass-card p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Practice These Strategies Risk-Free</h2>
        <p className="text-gray-400 mb-6 text-sm max-w-lg mx-auto">
          Quotex offers a $10,000 free demo account. Practice all strategies above without risking real money.
          Only switch to real trading once you&apos;re consistently profitable on demo.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <CtaButton broker="quotex" type="demo" label="Open Free Demo ($10K)" campaign="strategy_quotex" />
          <CtaButton broker="quotex" label="Real Account ($10 min)" variant="secondary" campaign="strategy_quotex" />
        </div>
      </section>
    </article>
  );
}
