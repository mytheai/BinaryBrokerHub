'use client';

import { useState } from 'react';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function CalculatorPage() {
  const [investment, setInvestment] = useState(100);
  const [payout, setPayout] = useState(92);
  const [trades, setTrades] = useState(20);
  const [winRate, setWinRate] = useState(62);

  const wins = Math.round(trades * (winRate / 100));
  const losses = trades - wins;
  const profit = wins * investment * (payout / 100);
  const loss = losses * investment;
  const netProfit = profit - loss;
  const roi = ((netProfit) / (trades * investment)) * 100;

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Tools', href: undefined }, { label: 'Profit Calculator' }]} />
      <section className="section-container py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="badge-green mb-4">Free Tool</span>
            <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-3">
              Binary Options Profit Calculator
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Calculate your potential profits based on investment, payout rate, and win rate.
              Understand the math before you trade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Inputs — 3 cols */}
            <div className="lg:col-span-3 glass-card p-6 md:p-8 space-y-8">
              <h3 className="font-semibold text-white">Adjust Parameters</h3>

              {/* Investment */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-400">Investment per trade</label>
                  <span className="text-sm font-bold text-emerald-400">${investment}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={1000}
                  step={5}
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-3 sm:h-2 bg-gray-800 rounded-full appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-xs sm:text-[10px] text-gray-600 mt-1">
                  <span>$1</span><span>$1,000</span>
                </div>
              </div>

              {/* Payout */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-400">Payout percentage</label>
                  <span className="text-sm font-bold text-emerald-400">{payout}%</span>
                </div>
                <input
                  type="range"
                  min={60}
                  max={95}
                  value={payout}
                  onChange={(e) => setPayout(Number(e.target.value))}
                  className="w-full h-3 sm:h-2 bg-gray-800 rounded-full appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-xs sm:text-[10px] text-gray-600 mt-1">
                  <span>60%</span>
                  <span className="text-emerald-600">Quotex: 95% | PO: 92%</span>
                  <span>95%</span>
                </div>
              </div>

              {/* Trades */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-400">Number of trades</label>
                  <span className="text-sm font-bold text-emerald-400">{trades}</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={200}
                  step={5}
                  value={trades}
                  onChange={(e) => setTrades(Number(e.target.value))}
                  className="w-full h-3 sm:h-2 bg-gray-800 rounded-full appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-xs sm:text-[10px] text-gray-600 mt-1">
                  <span>5</span><span>200</span>
                </div>
              </div>

              {/* Win Rate */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-400">Win rate</label>
                  <span className="text-sm font-bold text-emerald-400">{winRate}%</span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={85}
                  value={winRate}
                  onChange={(e) => setWinRate(Number(e.target.value))}
                  className="w-full h-3 sm:h-2 bg-gray-800 rounded-full appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-xs sm:text-[10px] text-gray-600 mt-1">
                  <span>30%</span>
                  <span className="text-gray-500">Avg beginner: 55-60%</span>
                  <span>85%</span>
                </div>
              </div>
            </div>

            {/* Results — 2 cols */}
            <div className="lg:col-span-2 space-y-4">
              <div className="glass-card p-6 space-y-4">
                <h3 className="font-semibold text-white">Results</h3>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/[0.03] rounded-lg p-3">
                    <div className="text-xs text-gray-500">Wins</div>
                    <div className="text-lg font-bold text-emerald-400">{wins}</div>
                  </div>
                  <div className="bg-white/[0.03] rounded-lg p-3">
                    <div className="text-xs text-gray-500">Losses</div>
                    <div className="text-lg font-bold text-red-400">{losses}</div>
                  </div>
                  <div className="bg-white/[0.03] rounded-lg p-3">
                    <div className="text-xs text-gray-500">Total Invested</div>
                    <div className="text-lg font-bold text-white">${(trades * investment).toLocaleString()}</div>
                  </div>
                  <div className="bg-white/[0.03] rounded-lg p-3">
                    <div className="text-xs text-gray-500">Total Return</div>
                    <div className="text-lg font-bold text-emerald-400">${profit.toLocaleString()}</div>
                  </div>
                </div>

                {/* Net Result */}
                <div className={`rounded-xl p-5 text-center border-2 ${
                  netProfit >= 0
                    ? 'border-emerald-500/30 bg-emerald-500/[0.05]'
                    : 'border-red-500/30 bg-red-500/[0.05]'
                }`}>
                  <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Net Profit/Loss</div>
                  <div className={`text-3xl font-bold ${netProfit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {netProfit >= 0 ? '+' : ''}{netProfit.toLocaleString('en', { style: 'currency', currency: 'USD' })}
                  </div>
                  <div className={`text-sm mt-1 ${roi >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                    ROI: {roi >= 0 ? '+' : ''}{roi.toFixed(1)}%
                  </div>
                </div>

                {/* Break-even info */}
                <div className="bg-white/[0.02] rounded-lg p-4 border border-white/[0.04]">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    <strong className="text-gray-300">Break-even win rate at {payout}% payout: </strong>
                    {(100 / (payout + 100) * 100).toFixed(1)}%
                    <br />
                    <span className="text-gray-600">
                      Any win rate above this number means you&apos;re profitable long-term.
                    </span>
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="glass-card p-5 space-y-3">
                <p className="text-xs text-gray-400">Start trading with these payouts:</p>
                <CtaButton
                  broker="quotex"
                  label="Quotex — 95% Payout"
                  campaign="calculator"
                  className="w-full"
                  size="sm"
                />
                <CtaButton
                  broker="pocketOption"
                  label="Pocket Option — 92% Payout"
                  campaign="calculator"
                  variant="secondary"
                  className="w-full"
                  size="sm"
                />
              </div>
            </div>
          </div>

          {/* Educational Note */}
          <div className="mt-12 glass-card p-6 md:p-8">
            <h3 className="font-bold text-white mb-3">Understanding the Math</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              The key insight in binary options is the <strong className="text-gray-300">break-even win rate</strong>.
              With a 92% payout (Pocket Option), you need a 52.1% win rate to break even.
              With a 95% payout (Quotex), you only need 51.3%. This small difference compounds
              significantly over hundreds of trades.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              For example, over 100 trades at $100 each with a 60% win rate: at 95% payout
              you&apos;d make <strong className="text-emerald-400">$1,700 profit</strong>, while at 92% payout
              you&apos;d make <strong className="text-blue-400">$1,520 profit</strong>. That&apos;s a $180 difference
              — and it grows with volume.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
