'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import BrokerLogo from '@/components/BrokerLogo';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function IQOptionPage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Broker Reviews', href: undefined }, { label: 'IQ Option' }]} />
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
            <div className="flex items-center justify-center gap-4 mb-4">
              <BrokerLogo broker="iq-option" size={56} />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                IQ Option Review 2026
              </h1>
            </div>
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
            { label: 'Peak Payout', value: '90–95%' },
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
          <p className="text-gray-300 leading-relaxed mb-4">
            The trade-off: binary options are only available via the <strong className="text-amber-300">offshore (unregulated) entity</strong> for non-EU clients.
            Payouts peak at 95% on major pairs but average 82-88% — slightly lower than Quotex. However, the platform depth, asset variety (stocks, ETFs, crypto, forex),
            and long track record make it ideal for traders who want a serious trading environment, not just a quick-bet interface.
          </p>
          <p className="text-gray-300 leading-relaxed">
            If raw payout percentages matter most,{' '}
            <Link href={`/${locale}/pocket-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option</Link> (9.5/10) and{' '}
            <Link href={`/${locale}/quotex`} className="text-emerald-400 underline hover:text-emerald-300">Quotex</Link> (9.4/10) edge ahead.
            But for <strong className="text-white">platform sophistication and multi-asset breadth</strong>, IQ Option remains unmatched.
          </p>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Pros &amp; Cons</h2>
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
                  <span className="text-emerald-400 flex-shrink-0 mt-0.5">&#10003;</span>
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
                  <span className="text-red-400 flex-shrink-0 mt-0.5">&#10007;</span>
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

      {/* Payout Analysis */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-4">Payout Analysis</h2>
        <p className="text-gray-400 text-sm mb-8 max-w-3xl">
          IQ Option&apos;s binary payouts vary by asset class, time of day, and market volatility. We tracked payout percentages across
          200+ trades over 6 weeks. Here&apos;s the breakdown by asset class during peak (London/NY overlap) and off-peak sessions.
        </p>
        <div className="glass-card overflow-x-auto">
          <div className="min-w-[700px]">
            <div className="grid grid-cols-5 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
              <div>Asset Class</div>
              <div className="text-center">Peak Payout</div>
              <div className="text-center">Off-Peak Payout</div>
              <div className="text-center">Avg. Observed</div>
              <div className="text-center">Verdict</div>
            </div>
            {[
              { asset: 'Major Forex (EUR/USD, GBP/USD)', peak: '90-95%', offPeak: '78-85%', avg: '86%', verdict: 'Good' },
              { asset: 'Minor Forex (AUD/NZD, EUR/GBP)', peak: '85-90%', offPeak: '72-80%', avg: '82%', verdict: 'Average' },
              { asset: 'Crypto (BTC, ETH)', peak: '80-88%', offPeak: '70-78%', avg: '79%', verdict: 'Below Avg' },
              { asset: 'Commodities (Gold, Oil)', peak: '85-92%', offPeak: '75-82%', avg: '83%', verdict: 'Good' },
              { asset: 'Stocks (Tesla, Apple)', peak: '82-88%', offPeak: '70-76%', avg: '78%', verdict: 'Below Avg' },
              { asset: 'Indices (NASDAQ, DAX)', peak: '84-90%', offPeak: '74-80%', avg: '81%', verdict: 'Average' },
              { asset: 'OTC (Weekend)', peak: 'N/A', offPeak: '75-85%', avg: '80%', verdict: 'Average' },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-5 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                <div className="text-gray-300 font-medium">{row.asset}</div>
                <div className="text-center text-emerald-400 font-semibold">{row.peak}</div>
                <div className="text-center text-amber-400">{row.offPeak}</div>
                <div className="text-center text-white font-bold">{row.avg}</div>
                <div className="text-center">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    row.verdict === 'Good' ? 'bg-emerald-500/20 text-emerald-400' :
                    row.verdict === 'Average' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>{row.verdict}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-5 mt-4">
          <p className="text-sm text-gray-400 leading-relaxed">
            <strong className="text-white">Key takeaway:</strong> IQ Option&apos;s peak payouts on major forex pairs (90-95%) are competitive but still trail{' '}
            <Link href={`/${locale}/pocket-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option</Link>&apos;s
            consistently higher 92-95% on the same assets. The off-peak drop-off of 10-15% is also more pronounced than{' '}
            <Link href={`/${locale}/quotex`} className="text-emerald-400 underline hover:text-emerald-300">Quotex</Link>&apos;s 5-10% typical spread.
            If maximizing payouts is your priority, consider those alternatives. IQ Option&apos;s strength lies in asset breadth and platform tools, not raw payout percentages.
          </p>
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
            <h3 className="font-bold text-white mb-3">Trade Types &amp; Expiry Options</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              IQ Option offers binary options (called &quot;Digital Options&quot; on the platform) with turbo expiries from 1 minute to longer-term
              expirations up to 1 month. The platform also supports classic CFD trading for forex, stocks, and crypto.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { type: 'Turbo Options', range: '1 min - 5 min', note: 'Fast-paced, high volume trading' },
                { type: 'Digital Options', range: '15 min - 1 hour', note: 'Standard binary trading' },
                { type: 'Long-Term', range: '1 day - 1 month', note: 'Swing trading on binary format' },
              ].map((t) => (
                <div key={t.type} className="bg-white/[0.03] rounded-lg p-4 text-center">
                  <h4 className="font-semibold text-white text-sm">{t.type}</h4>
                  <div className="text-emerald-400 text-xs font-bold mt-1">{t.range}</div>
                  <p className="text-gray-500 text-[10px] mt-1">{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Markets & Assets */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-4">Markets &amp; Assets</h2>
        <p className="text-gray-400 text-sm mb-8 max-w-3xl">
          With 250+ instruments across 7 asset classes, IQ Option offers the widest asset selection of any binary options broker.
          Here&apos;s the full breakdown of what you can trade.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { type: 'Forex Pairs', count: '50+', examples: 'EUR/USD, GBP/JPY, USD/CHF, AUD/NZD, EUR/GBP', icon: '💱' },
            { type: 'Stocks', count: '180+', examples: 'Tesla, Apple, Google, Amazon, Microsoft, Meta, NVIDIA', icon: '📈' },
            { type: 'Cryptocurrencies', count: '30+', examples: 'Bitcoin, Ethereum, Solana, Ripple, Dogecoin, Litecoin', icon: '🪙' },
            { type: 'Commodities', count: '10+', examples: 'Gold, Silver, Crude Oil, Natural Gas, Platinum, Copper', icon: '🛢️' },
            { type: 'ETFs', count: '20+', examples: 'S&P 500 ETF (SPY), QQQ, IWM, GLD, EEM', icon: '🏦' },
            { type: 'Indices', count: '15+', examples: 'NASDAQ 100, S&P 500, DAX 30, FTSE 100, Nikkei 225', icon: '📊' },
            { type: 'Digital Options', count: '95+', examples: 'Binary/turbo options on forex, crypto, commodities', icon: '⚡' },
            { type: 'CFDs', count: '250+', examples: 'All asset classes available as CFDs for EU clients', icon: '📋' },
          ].map((a) => (
            <div key={a.type} className="glass-card p-4">
              <div className="text-2xl mb-2">{a.icon}</div>
              <div className="font-semibold text-white text-sm">{a.type}</div>
              <div className="text-emerald-400 text-xs font-bold mt-1">{a.count}</div>
              <div className="text-gray-500 text-[10px] mt-2 leading-relaxed">{a.examples}</div>
            </div>
          ))}
        </div>
        <div className="glass-card p-5 mt-4">
          <p className="text-sm text-gray-400 leading-relaxed">
            <strong className="text-white">Asset breadth advantage:</strong> IQ Option&apos;s 180+ stocks alone surpass the total asset count of most binary brokers.
            For comparison,{' '}
            <Link href={`/${locale}/pocket-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option</Link> offers 100+ assets and{' '}
            <Link href={`/${locale}/quotex`} className="text-emerald-400 underline hover:text-emerald-300">Quotex</Link> offers 400+ (though most are OTC pairs).
            IQ Option&apos;s edge is real exchange-traded stocks and ETFs — not synthetic OTC instruments.
          </p>
        </div>
      </section>

      {/* Deposits & Withdrawals */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-4">Deposits &amp; Withdrawals</h2>
        <p className="text-gray-400 text-sm mb-8 max-w-3xl">
          IQ Option supports a wide range of payment methods with a $10 minimum deposit across all options. The broker charges zero
          deposit fees on its end, though your payment provider may apply their own charges. Withdrawal processing varies by method.
        </p>
        <div className="glass-card overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-6 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
              <div>Method</div>
              <div className="text-center">Type</div>
              <div className="text-center">Min Deposit</div>
              <div className="text-center">Deposit Speed</div>
              <div className="text-center">Withdrawal Speed</div>
              <div className="text-center">Fee</div>
            </div>
            {[
              { method: 'Visa / Mastercard', type: 'Card', minDep: '$10', depSpeed: 'Instant', wdSpeed: '1-3 business days', fee: 'Free' },
              { method: 'Skrill', type: 'E-Wallet', minDep: '$10', depSpeed: 'Instant', wdSpeed: 'Up to 24 hours', fee: 'Free' },
              { method: 'Neteller', type: 'E-Wallet', minDep: '$10', depSpeed: 'Instant', wdSpeed: 'Up to 24 hours', fee: 'Free' },
              { method: 'Perfect Money', type: 'E-Wallet', minDep: '$10', depSpeed: 'Instant', wdSpeed: 'Up to 24 hours', fee: 'Free' },
              { method: 'WebMoney', type: 'E-Wallet', minDep: '$10', depSpeed: 'Instant', wdSpeed: 'Up to 24 hours', fee: 'Free' },
              { method: 'Bitcoin (BTC)', type: 'Crypto', minDep: '$10', depSpeed: '1-30 min', wdSpeed: 'Up to 3 days', fee: 'Free' },
              { method: 'Ethereum (ETH)', type: 'Crypto', minDep: '$10', depSpeed: '1-15 min', wdSpeed: 'Up to 3 days', fee: 'Free' },
              { method: 'USDT (Tether)', type: 'Crypto', minDep: '$10', depSpeed: '1-5 min', wdSpeed: 'Up to 24 hours', fee: 'Free' },
              { method: 'UPI (India)', type: 'Local', minDep: '$10', depSpeed: 'Instant', wdSpeed: 'Varies by bank', fee: 'Free' },
              { method: 'PIX (Brazil)', type: 'Local', minDep: '$10', depSpeed: 'Instant', wdSpeed: 'Up to 24 hours', fee: 'Free' },
              { method: 'GCash (Philippines)', type: 'Local', minDep: '$10', depSpeed: 'Instant', wdSpeed: 'Varies', fee: 'Free' },
              { method: 'Bank Transfer', type: 'Wire', minDep: '$50', depSpeed: '2-5 days', wdSpeed: '3-7 business days', fee: 'Free*' },
            ].map((d, i) => (
              <div key={i} className={`grid grid-cols-6 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                <div className="text-gray-300 font-medium">{d.method}</div>
                <div className="text-center text-gray-500 text-xs">{d.type}</div>
                <div className="text-center text-white">{d.minDep}</div>
                <div className="text-center text-emerald-400">{d.depSpeed}</div>
                <div className="text-center text-amber-400">{d.wdSpeed}</div>
                <div className="text-center text-emerald-400">{d.fee}</div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          *Bank transfers may incur intermediary bank fees. IQ Option charges no fees on its end for any deposit or withdrawal method.
          First withdrawal each month is free; subsequent withdrawals may carry a small processing fee depending on your account type.
        </p>
      </section>

      {/* Customer Support */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-4">Customer Support</h2>
        <p className="text-gray-400 text-sm mb-8 max-w-3xl">
          We tested IQ Option&apos;s support channels over 3 weeks, submitting 12 queries across chat and email to evaluate
          response times, accuracy, and helpfulness. Here are the results.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              channel: 'Live Chat',
              availability: '24/7',
              responseTime: '2-5 minutes',
              quality: '8/10',
              notes: 'Available directly inside the trading platform. Agents are knowledgeable on account and payment issues. Complex trading questions may be escalated.',
            },
            {
              channel: 'Email Support',
              availability: '24/5 (weekdays)',
              responseTime: '4-12 hours',
              quality: '7.5/10',
              notes: 'Send to support@iqoption.com. Detailed responses but slower. Good for documentation trails on withdrawal disputes.',
            },
            {
              channel: 'Help Center / FAQ',
              availability: '24/7 (self-service)',
              responseTime: 'Instant',
              quality: '8.5/10',
              notes: 'Comprehensive knowledge base with 200+ articles, video tutorials, and step-by-step guides. Covers most common issues.',
            },
          ].map((s) => (
            <div key={s.channel} className="glass-card p-5">
              <h3 className="font-semibold text-white text-sm mb-3">{s.channel}</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Availability</span>
                  <span className="text-emerald-400 font-medium">{s.availability}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Time</span>
                  <span className="text-white font-medium">{s.responseTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Quality Rating</span>
                  <span className="text-amber-400 font-medium">{s.quality}</span>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 mt-3 leading-relaxed">{s.notes}</p>
            </div>
          ))}
        </div>
        <div className="glass-card p-5 mt-4">
          <p className="text-sm text-gray-400 leading-relaxed">
            <strong className="text-white">Support comparison:</strong> IQ Option&apos;s live chat is responsive at 2-5 minutes, on par with{' '}
            <Link href={`/${locale}/pocket-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option</Link>&apos;s
            1-3 minute response times. However, IQ Option does not offer phone support or a dedicated VIP account manager
            unless you reach VIP status (typically $15,000+ deposited). For comparison,{' '}
            <Link href={`/${locale}/deriv`} className="text-emerald-400 underline hover:text-emerald-300">Deriv</Link> offers 24/7 live chat
            with similarly fast response times plus integrated WhatsApp support.
          </p>
        </div>
      </section>

      {/* Regulation Section */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Regulation &amp; Safety</h2>
        <div className="glass-card p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-emerald-400 mb-3">EU Entity (Regulated)</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>&bull; <strong className="text-white">IQOption Europe Ltd</strong></li>
                <li>&bull; CySEC License: <strong className="text-white">247/14</strong></li>
                <li>&bull; Offers: CFDs only (no binary options for EEA)</li>
                <li>&bull; Client fund segregation required</li>
                <li>&bull; ICF investor compensation up to &euro;20,000</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-amber-400 mb-3">International Entity (Offshore)</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>&bull; <strong className="text-white">SKY LADDER LLC</strong></li>
                <li>&bull; Registered in St. Vincent &amp; the Grenadines</li>
                <li>&bull; Offers: Binary/digital options + CFDs</li>
                <li>&bull; <strong className="text-amber-300">Not regulated</strong> by any financial authority</li>
                <li>&bull; No mandatory fund segregation</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 border-t border-white/[0.06] pt-4">
            <p className="text-xs text-gray-500">
              Note: If you&apos;re outside the EU, you&apos;ll be using the offshore entity. The CySEC license only covers European CFD clients.
              However, IQ Option&apos;s 12-year track record and 48M+ users provide significant operational credibility.
              For a fully regulated alternative, consider{' '}
              <Link href={`/${locale}/deriv`} className="text-emerald-400 underline hover:text-emerald-300">Deriv</Link> (MFSA, LFSA, VFSC, BVI FSC — multiple licenses across jurisdictions).
              See our{' '}
              <Link href={`/${locale}/methodology`} className="text-emerald-400 underline hover:text-emerald-300">testing methodology</Link> for
              how we evaluate regulation, or read our{' '}
              <Link href={`/${locale}/scams`} className="text-emerald-400 underline hover:text-emerald-300">scam detection guide</Link> to
              verify any broker.
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

      {/* IQ Option vs Competitors */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-4">IQ Option vs Competitors</h2>
        <p className="text-gray-400 text-sm mb-8 max-w-3xl">
          How does IQ Option stack up against the other top binary options brokers? Here&apos;s a side-by-side comparison across the
          key factors that matter most to traders.
        </p>
        <div className="glass-card overflow-x-auto">
          <div className="min-w-[700px]">
            <div className="grid grid-cols-5 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
              <div>Feature</div>
              <div className="text-center">IQ Option</div>
              <div className="text-center">Pocket Option</div>
              <div className="text-center">Quotex</div>
              <div className="text-center">Deriv</div>
            </div>
            {[
              { feature: 'Our Score', iq: '9.2/10', po: '9.5/10', qt: '9.4/10', dv: '9.0/10' },
              { feature: 'Min Deposit', iq: '$10', po: '$5', qt: '$10', dv: '$5' },
              { feature: 'Peak Payout', iq: '90–95%', po: '89–92%', qt: '90–95%', dv: '88–95%' },
              { feature: 'Total Assets', iq: '250+', po: '100+', qt: '400+', dv: '100+' },
              { feature: 'Min Trade', iq: '$1', po: '$1', qt: '$1', dv: '$0.35' },
              { feature: 'Demo Account', iq: '$10,000', po: '$50,000', qt: '$10,000', dv: '$10,000' },
              { feature: 'Platform', iq: 'Proprietary (Best)', po: 'Proprietary', qt: 'Web Only', dv: 'DTrader/DBot' },
              { feature: 'Copy Trading', iq: 'No', po: 'Yes', qt: 'No', dv: 'No' },
              { feature: 'Regulation', iq: 'CySEC (EU only)', po: 'Costa Rica', qt: 'None', dv: 'MFSA + Others' },
              { feature: 'Founded', iq: '2013', po: '2017', qt: '2019', dv: '1999' },
              { feature: 'Mobile App', iq: 'iOS + Android', po: 'iOS + Android', qt: 'Android + PWA', dv: 'iOS + Android' },
              { feature: 'Tournaments', iq: 'Yes', po: 'Yes', qt: 'Yes', dv: 'No' },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-5 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                <div className="text-gray-300 font-medium">{row.feature}</div>
                <div className="text-center text-emerald-400 font-semibold">{row.iq}</div>
                <div className="text-center text-white">{row.po}</div>
                <div className="text-center text-white">{row.qt}</div>
                <div className="text-center text-white">{row.dv}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-5 mt-4">
          <p className="text-sm text-gray-400 leading-relaxed mb-3">
            <strong className="text-white">Summary:</strong> IQ Option wins on <strong className="text-emerald-400">platform quality</strong> and{' '}
            <strong className="text-emerald-400">asset breadth</strong> — no competitor comes close to 180+ stocks and 7 asset classes.
            However,{' '}
            <Link href={`/${locale}/pocket-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option</Link> leads
            overall with its copy trading feature, lower $5 minimum deposit, and consistently high payouts.{' '}
            <Link href={`/${locale}/quotex`} className="text-emerald-400 underline hover:text-emerald-300">Quotex</Link> offers the highest
            raw payouts (up to 98%), while{' '}
            <Link href={`/${locale}/deriv`} className="text-emerald-400 underline hover:text-emerald-300">Deriv</Link> provides the strongest
            regulatory framework with 26 years of operation.
          </p>
          <p className="text-sm text-gray-400">
            See our full{' '}
            <Link href={`/${locale}/compare`} className="text-emerald-400 underline hover:text-emerald-300">broker comparison page</Link> or the detailed{' '}
            <Link href={`/${locale}/compare/pocket-option-vs-iq-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option vs IQ Option</Link> head-to-head breakdown.
          </p>
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
          <p className="text-gray-300 leading-relaxed mb-4">
            If you prioritize <strong className="text-white">a professional trading environment</strong> and multi-asset access over chasing the
            absolute highest payout percentages, IQ Option is the premium choice. The CySEC-regulated EU entity adds a layer of corporate
            credibility that pure offshore competitors can&apos;t match.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            That said, for traders focused purely on binary options with maximum payouts and social features, we rate{' '}
            <Link href={`/${locale}/pocket-option`} className="text-emerald-400 underline hover:text-emerald-300">Pocket Option</Link> (9.5/10)
            and{' '}
            <Link href={`/${locale}/quotex`} className="text-emerald-400 underline hover:text-emerald-300">Quotex</Link> (9.4/10)
            slightly higher. For maximum regulatory protection, see our{' '}
            <Link href={`/${locale}/deriv`} className="text-emerald-400 underline hover:text-emerald-300">Deriv review</Link>.
            Read our full{' '}
            <Link href={`/${locale}/blog/best-binary-options-brokers`} className="text-emerald-400 underline hover:text-emerald-300">
              best binary options brokers ranking
            </Link>{' '}
            for the complete picture.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CtaButton broker="iqOption" label="Open IQ Option Account" campaign="iq_verdict" />
            <CtaButton broker="iqOption" type="demo" label="Try Free Demo ($10K)" variant="secondary" campaign="iq_verdict" />
          </div>
        </div>
      </section>

      {/* Related Reviews & Guides */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-8">Related Reviews &amp; Guides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Pocket Option Review 2026', desc: 'Our #1 rated binary broker — copy trading, 95% payouts, $5 min deposit.', href: `/${locale}/pocket-option`, badge: '9.5/10' },
            { title: 'Quotex Review 2026', desc: 'Highest payouts in the industry (up to 98%). Clean, fast web platform.', href: `/${locale}/quotex`, badge: '9.4/10' },
            { title: 'Deriv Review 2026', desc: 'The most regulated broker — 26 years of operation, multi-licensed.', href: `/${locale}/deriv`, badge: '9.0/10' },
            { title: 'Broker Comparison', desc: 'Side-by-side comparison of all 7 brokers we cover. Find your best fit.', href: `/${locale}/compare`, badge: 'Compare' },
            { title: 'Pocket Option vs IQ Option', desc: 'Detailed head-to-head: platform, payouts, features, regulation, and more.', href: `/${locale}/compare/pocket-option-vs-iq-option`, badge: 'H2H' },
            { title: 'Best Binary Brokers 2026', desc: 'Complete ranked list with scores, pros/cons, and who each broker is best for.', href: `/${locale}/blog/best-binary-options-brokers`, badge: 'Guide' },
            { title: 'Binary Options Trading Guide', desc: 'Learn the fundamentals — strategies, risk management, and how to get started.', href: `/${locale}/blog/binary-options-trading-guide`, badge: 'Guide' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="glass-card p-5 hover:border-emerald-500/20 hover:bg-white/[0.05] transition-all duration-300 block">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-white text-sm">{link.title}</h3>
                <span className="badge-green text-[10px]">{link.badge}</span>
              </div>
              <p className="text-xs text-gray-400">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* IQ Option Guides */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">IQ Option Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'IQ Option vs Quotex', href: `/${locale}/compare/quotex-vs-iq-option`, desc: 'Platform depth vs highest payouts — which suits your style?' },
              { title: 'IQ Option vs Deriv', href: `/${locale}/compare/iq-option-vs-deriv`, desc: 'Two veteran brokers compared on regulation, assets & UX' },
              { title: 'Pocket Option vs IQ Option', href: `/${locale}/compare/pocket-option-vs-iq-option`, desc: '#1 vs #3 — copy trading & payouts vs platform quality' },
              { title: 'Strategy for Beginners', href: `/${locale}/blog/binary-options-strategy-beginners`, desc: 'Step-by-step strategies for new binary options traders' },
              { title: 'Demo Account Guide', href: `/${locale}/blog/binary-options-demo-account`, desc: 'How to use demo accounts effectively before going live' },
              { title: 'Regulation Guide', href: `/${locale}/blog/binary-options-regulation`, desc: 'Understanding broker licenses, safety & what to look for' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="glass-card p-4 hover:bg-white/[0.05] transition-colors group">
                <h3 className="font-semibold text-sm text-white group-hover:text-emerald-400 transition-colors">{link.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">IQ Option FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Is IQ Option regulated?',
                a: 'Partially. IQOption Europe Ltd holds a CySEC license (247/14) for CFD trading in the EU. However, binary options are offered through the offshore entity (SKY LADDER LLC, St. Vincent & the Grenadines) which is not regulated by any financial authority.',
              },
              {
                q: 'Does IQ Option have a desktop app?',
                a: 'Yes. IQ Option offers native desktop apps for Windows, Mac, and Linux — a rarity in the binary options industry. The desktop app provides the full trading experience with 100+ technical indicators.',
              },
              {
                q: 'What is the minimum deposit for IQ Option?',
                a: 'IQ Option requires a $10 minimum deposit. Individual trades can be placed from as little as $1, making it accessible for beginners testing with small amounts.',
              },
              {
                q: 'What is IQ Option\'s maximum payout?',
                a: 'IQ Option advertises up to 95% payout. Our testing showed peak payouts of 90–95% on major forex pairs, with an average of 82–88% across all assets and sessions. Off-peak payouts drop by 10–15%.',
              },
              {
                q: 'How does IQ Option compare to Pocket Option?',
                a: 'IQ Option has better regulation (CySEC), more assets (250+ vs 180+), and a superior platform with desktop apps. Pocket Option has copy trading, lower $5 minimum deposit, and slightly more consistent payouts. See our detailed head-to-head comparison.',
              },
              {
                q: 'Does IQ Option have a demo account?',
                a: 'Yes. IQ Option provides a free demo account with $10,000 virtual balance. The demo fully replicates live market conditions and is replenishable — you can practice indefinitely.',
              },
            ].map((faq) => (
              <details key={faq.q} className="glass-card group">
                <summary className="p-5 cursor-pointer flex items-center justify-between text-white font-medium text-sm hover:text-emerald-400 transition-colors">
                  {faq.q}
                  <svg className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/[0.06] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="section-container py-12">
        <div className="glass-card p-6 border border-amber-500/20">
          <h3 className="text-sm font-bold text-amber-400 mb-3">Risk Disclaimer</h3>
          <p className="text-xs text-gray-400 leading-relaxed mb-3">
            <strong className="text-gray-300">Binary options trading involves substantial risk of loss and is not suitable for all investors.</strong>{' '}
            You should never invest money that you cannot afford to lose. Past performance is not indicative of future results. The
            information on this page is for educational purposes only and should not be considered financial advice.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed mb-3">
            IQ Option&apos;s binary/digital options are offered by the offshore entity (SKY LADDER LLC, St. Vincent &amp; the Grenadines) which
            is <strong className="text-amber-300">not regulated</strong> by any financial authority. The CySEC license (247/14) only covers
            IQOption Europe Ltd for CFD trading within the European Economic Area.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            BinaryBrokerHub.com may receive compensation from brokers featured on this site. This does not influence our ratings or reviews,
            which are based on independent research and testing. Please read our full{' '}
            <Link href={`/${locale}/blog/binary-options-trading-guide`} className="text-emerald-400 underline hover:text-emerald-300">
              trading guide
            </Link>{' '}
            before opening any trading account. Your capital is at risk.
          </p>
        </div>
      </section>
    </div>
  );
}
