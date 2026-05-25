'use client';

import CtaButton from '@/components/CtaButton';

export default function IQOptionPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 to-transparent" />
        <div className="relative section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="badge-green">Score: 9.2/10</span>
              <span className="badge-gold">Best Platform UX</span>
              <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">Last Updated: May 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              IQ Option Review 2026
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
              IQ Option is the world&apos;s most recognized binary options brand with 48M+ registered users across 13 years of operation.
              CySEC-regulated (EU entity), award-winning proprietary platform, and 250+ tradeable instruments.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Operated by IQOption Europe Ltd (CySEC 247/14) &bull; International: SKY LADDER LLC (SVG) &bull; Est. 2013
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CtaButton broker="iqOption" label="Open IQ Option Account" campaign="iq_hero" size="lg" />
              <CtaButton broker="iqOption" type="demo" label="Try Free Demo ($10K)" variant="secondary" campaign="iq_hero" size="lg" />
            </div>
            <p className="text-xs text-gray-600 mt-3">Your capital is at risk. Only trade with money you can afford to lose.</p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="section-container pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Min. Deposit', value: '$10' },
            { label: 'Max. Payout', value: 'Up to 95%' },
            { label: 'Total Assets', value: '250+' },
            { label: 'Founded', value: '2013 (12+ yrs)' },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <div className="text-xl md:text-2xl font-bold text-emerald-400">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Verdict */}
      <section className="section-container pb-16">
        <div className="glass-card p-8 md:p-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Quick Verdict
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            IQ Option is the <strong className="text-white">gold standard for platform quality</strong> in binary options. The proprietary trading terminal
            features 4 chart types, 100+ indicators, and the smoothest UX in the industry. It&apos;s the only major BO broker with a
            <strong className="text-white"> real CySEC license</strong> (for EU CFDs), which adds a layer of corporate credibility missing from most competitors.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The trade-off: binary options are only available via the <strong className="text-amber-300">offshore (unregulated) entity</strong> for non-EU clients.
            Payouts peak at 95% on major pairs but average 82-88% — slightly lower than Quotex. However, the platform depth, asset variety (stocks, ETFs, crypto, forex),
            and long track record make it ideal for traders who want a serious trading environment, not just a quick-bet interface.
          </p>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Pros & Cons</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-emerald-400 mb-4 text-lg">Strengths</h3>
            <ul className="space-y-3">
              {[
                'Best-in-class trading platform — 4 chart types, 100+ indicators, drawing tools',
                'CySEC-regulated EU entity (License 247/14) — corporate accountability',
                '250+ instruments: forex, stocks, crypto, ETFs, commodities, indices',
                '48M+ registered users — largest user base in binary options',
                'Free $10,000 demo account — unlimited, no expiry',
                '$1 minimum trade size — extremely low barrier to practice',
                'Award-winning mobile app (iOS + Android)',
                'Tournaments & leaderboards for competitive traders',
              ].map((p) => (
                <li key={p} className="flex gap-2 text-sm text-gray-300">
                  <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-red-400 mb-4 text-lg">Weaknesses</h3>
            <ul className="space-y-3">
              {[
                'Binary options only via unregulated offshore entity (non-EU)',
                'Payouts slightly lower than Quotex (avg 82-88% vs 85-95%)',
                'Shifted company focus toward CFDs in recent years',
                'RBI (India) Alert List — some Indian banks may block transactions',
                'No copy trading feature (unlike Pocket Option)',
                'Withdrawal processing can take 1-3 business days for cards',
              ].map((c) => (
                <li key={c} className="flex gap-2 text-sm text-gray-300">
                  <span className="text-red-400 flex-shrink-0 mt-0.5">✗</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Rating Breakdown</h2>
        <div className="glass-card p-6">
          {[
            { category: 'Platform & Technology', score: 9.8, note: 'Best platform in the industry — desktop, web, mobile all excellent' },
            { category: 'Asset Variety', score: 9.5, note: '250+ instruments across 7 asset classes' },
            { category: 'Payouts', score: 8.5, note: 'Up to 95% on majors, avg 82-88% — good but not best' },
            { category: 'Deposits & Withdrawals', score: 8.8, note: 'Multiple methods, $10 min deposit, no fees from IQ' },
            { category: 'Regulation & Trust', score: 8.5, note: 'CySEC EU entity + 12 years of operation. Offshore for BO' },
            { category: 'Education & Tools', score: 9.0, note: 'Video tutorials, blog, indicators library, economic calendar' },
            { category: 'Customer Support', score: 8.0, note: '24/7 chat + email. Response time 2-5 min in our tests' },
            { category: 'Mobile Experience', score: 9.5, note: 'Award-winning app, full feature parity with web' },
          ].map((r) => (
            <div key={r.category} className="flex items-center gap-4 py-3 border-b border-white/[0.04] last:border-0">
              <div className="w-48 text-sm text-gray-300 flex-shrink-0">{r.category}</div>
              <div className="flex-1">
                <div className="w-full bg-white/[0.05] rounded-full h-2.5">
                  <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: `${r.score * 10}%` }} />
                </div>
              </div>
              <div className="w-12 text-right text-sm font-bold text-white">{r.score}</div>
              <div className="w-72 text-xs text-gray-500 hidden lg:block">{r.note}</div>
            </div>
          ))}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <span className="font-bold text-lg">Overall Score</span>
            <span className="text-2xl font-extrabold text-emerald-400">9.2 / 10</span>
          </div>
        </div>
      </section>

      {/* Platform Deep Dive */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Platform Deep Dive</h2>
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-white mb-3">Trading Terminal</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              IQ Option&apos;s proprietary platform is widely considered the best in binary options. Unlike web-only competitors,
              IQ offers a downloadable desktop app, a web terminal, and native mobile apps — all with full feature parity.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { feature: '4 Chart Types', desc: 'Candlestick, bar, line, Heikin Ashi — all with customizable timeframes' },
                { feature: '100+ Indicators', desc: 'RSI, MACD, Bollinger Bands, Stochastic, Ichimoku, custom scripts' },
                { feature: 'Drawing Tools', desc: 'Trend lines, Fibonacci, support/resistance, channels, shapes' },
                { feature: 'Multi-Chart Layout', desc: 'Monitor multiple assets simultaneously on desktop' },
              ].map((f) => (
                <div key={f.feature} className="bg-white/[0.03] rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-400 text-sm">{f.feature}</h4>
                  <p className="text-xs text-gray-400 mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-bold text-white mb-3">Asset Classes</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { type: 'Forex', count: '50+ pairs', example: 'EUR/USD, GBP/JPY' },
                { type: 'Stocks', count: '180+', example: 'Tesla, Apple, Google' },
                { type: 'Crypto', count: '30+', example: 'BTC, ETH, SOL' },
                { type: 'Commodities', count: '10+', example: 'Gold, Oil, Silver' },
                { type: 'ETFs', count: '20+', example: 'S&P500, QQQ' },
                { type: 'Indices', count: '15+', example: 'NASDAQ, DAX' },
                { type: 'Digital Options', count: '95+', example: 'Binary/turbo' },
                { type: 'CFDs', count: '250+', example: 'All classes' },
              ].map((a) => (
                <div key={a.type} className="bg-white/[0.03] rounded-lg p-3 text-center">
                  <div className="font-semibold text-white text-sm">{a.type}</div>
                  <div className="text-emerald-400 text-xs font-bold">{a.count}</div>
                  <div className="text-gray-500 text-[10px] mt-1">{a.example}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deposit & Withdrawal */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Deposits & Withdrawals</h2>
        <div className="glass-card overflow-hidden">
          <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
            <div>Method</div>
            <div className="text-center">Min Deposit</div>
            <div className="text-center">Processing</div>
            <div className="text-center">Fee</div>
          </div>
          {[
            { method: 'Visa/Mastercard', min: '$10', time: 'Instant / 1-3 days withdrawal', fee: 'Free' },
            { method: 'Skrill', min: '$10', time: 'Instant / 24 hrs withdrawal', fee: 'Free' },
            { method: 'Neteller', min: '$10', time: 'Instant / 24 hrs withdrawal', fee: 'Free' },
            { method: 'Perfect Money', min: '$10', time: 'Instant / 24 hrs withdrawal', fee: 'Free' },
            { method: 'Bitcoin', min: '$10', time: '1-30 min / up to 3 days', fee: 'Free' },
            { method: 'USDT', min: '$10', time: '1-5 min / up to 24 hrs', fee: 'Free' },
            { method: 'UPI (India)', min: '$10', time: 'Instant / varies', fee: 'Free' },
            { method: 'PIX (Brazil)', min: '$10', time: 'Instant / varies', fee: 'Free' },
          ].map((d, i) => (
            <div key={i} className={`grid grid-cols-4 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
              <div className="text-gray-300 font-medium">{d.method}</div>
              <div className="text-center text-white">{d.min}</div>
              <div className="text-center text-gray-400">{d.time}</div>
              <div className="text-center text-emerald-400">{d.fee}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Regulation Section */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Regulation & Safety</h2>
        <div className="glass-card p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-emerald-400 mb-3">EU Entity (Regulated)</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong className="text-white">IQOption Europe Ltd</strong></li>
                <li>• CySEC License: <strong className="text-white">247/14</strong></li>
                <li>• Offers: CFDs only (no binary options for EEA)</li>
                <li>• Client fund segregation required</li>
                <li>• ICF investor compensation up to €20,000</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-amber-400 mb-3">International Entity (Offshore)</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong className="text-white">SKY LADDER LLC</strong></li>
                <li>• Registered in St. Vincent &amp; the Grenadines</li>
                <li>• Offers: Binary/digital options + CFDs</li>
                <li>• <strong className="text-amber-300">Not regulated</strong> by any financial authority</li>
                <li>• No mandatory fund segregation</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 border-t border-white/[0.06] pt-4">
            <p className="text-xs text-gray-500">
              Note: If you&apos;re outside the EU, you&apos;ll be using the offshore entity. The CySEC license only covers European CFD clients.
              However, IQ Option&apos;s 12-year track record and 48M+ users provide significant operational credibility.
            </p>
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Who Is IQ Option Best For?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { type: 'Serious Traders', desc: 'Who want professional charting tools, 100+ indicators, and multi-asset trading beyond just binary options.' },
            { type: 'Multi-Asset Traders', desc: 'Who trade forex, stocks, crypto, and options — all from one platform with one account.' },
            { type: 'Platform-Focused Users', desc: 'Who value UX, speed, and a polished trading experience over max payout percentages.' },
            { type: 'CIS & LATAM Traders', desc: 'IQ Option has massive brand recognition and local payment support in Russia, Brazil, and Colombia.' },
            { type: 'Beginners Who Want Depth', desc: 'Free demo, $1 trades, plus video education — but a platform they won\'t outgrow quickly.' },
            { type: 'Tournament Enthusiasts', desc: 'Regular trading competitions with prize pools. Great for competitive, skilled traders.' },
          ].map((item) => (
            <div key={item.type} className="glass-card p-5">
              <h3 className="font-semibold text-white text-sm mb-2">{item.type}</h3>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Verdict */}
      <section className="section-container py-16">
        <div className="glass-card p-8 md:p-10 border border-emerald-500/20">
          <h2 className="text-2xl font-bold mb-4">Final Verdict: 9.2/10</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            IQ Option earns its place as the <strong className="text-white">most established and technologically advanced binary options platform</strong> in
            the market. The platform quality is unmatched, the asset variety is the widest available, and the 12-year track record with
            48 million users speaks for itself.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            If you prioritize <strong className="text-white">a professional trading environment</strong> and multi-asset access over chasing the
            absolute highest payout percentages, IQ Option is the premium choice. The CySEC-regulated EU entity adds a layer of corporate
            credibility that pure offshore competitors can&apos;t match.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CtaButton broker="iqOption" label="Open IQ Option Account" campaign="iq_verdict" />
            <CtaButton broker="iqOption" type="demo" label="Try Free Demo ($10K)" variant="secondary" campaign="iq_verdict" />
          </div>
        </div>
      </section>
    </div>
  );
}
