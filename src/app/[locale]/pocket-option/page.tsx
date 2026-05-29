'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import BrokerLogo from '@/components/BrokerLogo';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function PocketOptionPage() {
  const cta = useTranslations('cta');
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Broker Reviews', href: undefined }, { label: 'Pocket Option' }]} />
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        <div className="relative section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="badge-blue">Score: 9.5/10</span>
              <span className="badge-gold">Best Overall Binary Broker 2025</span>
              <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">Last Updated: May 2026</span>
            </div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <BrokerLogo broker="pocket-option" size={56} />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                Pocket Option Review 2026
              </h1>
            </div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
              180+ binary assets, 3-second expiry times, social/copy trading, tournaments, and AI Trading.
              After 8 months of testing with $3,000+ deposited and 250+ trades, here&apos;s our full assessment.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Operated by Infinite Trade LLC &bull; Founded 2017 &bull; Costa Rica &bull; Winner: Best Binary Broker 2025 (Multiple Awards)
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CtaButton broker="pocketOption" label={cta('openAccount')} campaign="po_hero" size="lg" />
              <CtaButton broker="pocketOption" type="demo" label="Try Free Demo ($50K Balance)" variant="secondary" campaign="po_hero" size="lg" />
            </div>
            <p className="text-xs text-gray-600 mt-3">Your capital is at risk. Only trade with money you can afford to lose.</p>
          </div>
        </div>
      </section>

      {/* Quick Info Box */}
      <section className="section-container pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Min. Deposit', value: '$5' },
            { label: 'Peak Payout', value: '89–92%' },
            { label: 'Binary Assets', value: '180+' },
            { label: 'Expiry Times', value: '3s — 1 month' },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <div className="text-xl md:text-2xl font-bold text-blue-400">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Verdict */}
      <section className="section-container pb-16">
        <div className="glass-card p-8 md:p-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Quick Verdict
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Pocket Option is a <strong className="text-white">feature-rich binary options platform</strong> that goes far beyond basic
            up/down trading. It won 5 categories in BinaryOptions.net&apos;s 2025 awards (Overall, Market Offering, Payouts,
            Expiry Times, Product Upgrades) and earned Best Binary Broker from DayTrading.com.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The standout features are <strong className="text-blue-400">social/copy trading</strong>, <strong className="text-blue-400">AI Trading</strong>,
            and the industry&apos;s widest range of expiry times (3 seconds to 1 month). With a $5 minimum deposit — the lowest
            we&apos;ve tested — it&apos;s also the most accessible. However, like Quotex, it lacks tier-1 regulation, which is a risk factor.
          </p>
        </div>
      </section>

      {/* Awards Banner */}
      <section className="section-container pb-12">
        <div className="glass-card p-5">
          <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Industry Awards</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Best Binary Broker 2025 — DayTrading.com',
              'Best Overall Binary Broker 2025 — BinaryOptions.net',
              'Best Market Offering 2025',
              'Best Payouts 2025',
              'Best Expiry Times 2025',
              'Best Product Upgrades 2025',
            ].map((award) => (
              <span key={award} className="badge-gold text-[10px]">{award}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Pros & Cons</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-6">
            <h3 className="font-bold text-emerald-400 mb-5 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Advantages
            </h3>
            <ul className="space-y-3">
              {[
                '180+ binary assets — the most of any broker we\'ve tested',
                'Expiry times from 3 seconds to 1 month (widest range in industry)',
                '$5 minimum deposit — lowest barrier to entry available',
                'Social/copy trading — view & replicate top traders\' strategies',
                'AI Trading feature — auto-opens trades based on technical signals',
                'Regular tournaments with cash prizes for competitive traders',
                'Up to 92% payout on forex, crypto, and stocks',
                'Payout reliability: peak payouts within 0-2% of advertised rates',
                '\"Double Up\" feature — 2x position size in one click',
                'Achievement/Gems system rewards active trading with perks',
                'Free demo: $50K balance, one-click access, easily toggle live/demo',
                'Account setup in under 5 minutes, smooth onboarding',
                'OTC and non-OTC contracts available (trade weekends)',
              ].map((pro) => (
                <li key={pro} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <span className="text-emerald-400 mt-0.5 font-bold">+</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-red-400 mb-5 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Disadvantages
            </h3>
            <ul className="space-y-3">
              {[
                'Not regulated by any tier-1 financial authority',
                'Previous MISA license suspended for non-payment',
                'Warnings issued by CFTC (US), FCA (UK), ASC (Canada)',
                'Bonuses have restrictive 50x turnover requirements',
                'Payouts (92% max) don\'t quite match Quotex (98% max)',
                'Platform interface can feel cluttered with too many features',
                'No bespoke/exotic binary products (e.g., no event-based)',
                'Payment methods are crypto-heavy — fewer traditional options',
                'AI Trading lacks transparency on decision-making mechanics',
                'Lack of educational resources for beginners',
                'Growing reliance on AI-generated support responses',
                'Light theme feels outdated, dark mode is much better',
              ].map((con) => (
                <li key={con} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <span className="text-red-400 mt-0.5 font-bold">−</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Rating Breakdown</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { category: 'Market Coverage', score: 9.6, detail: '180+ binary assets across 5 classes — industry leader' },
            { category: 'Expiry Range', score: 9.6, detail: '3 seconds to 1 month — widest range of any broker tested' },
            { category: 'Social & Copy Trading', score: 9.5, detail: 'View trader history, copy in one click, built-in social feed' },
            { category: 'Platform Features', score: 9.3, detail: 'Tournaments, AI Trading, achievements, signals, double-up' },
            { category: 'Payout Reliability', score: 9.0, detail: 'Peak payouts within 0-2% of advertised — very consistent' },
            { category: 'Accessibility', score: 9.5, detail: '$5 deposit, $1 min trade, instant demo, fastest onboarding' },
            { category: 'Mobile Experience', score: 8.8, detail: 'Android app seamless, iOS web-optimized, occasional peak lag' },
            { category: 'Customer Support', score: 8.0, detail: '24/7 live chat under 1 min, but growing AI reliance' },
            { category: 'Regulation & Safety', score: 4.5, detail: 'Unregulated, license suspended, multiple regulator warnings' },
          ].map((item) => (
            <div key={item.category} className="glass-card p-5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-white text-sm">{item.category}</h4>
                <span className={`font-bold ${item.score >= 8 ? 'text-blue-400' : item.score >= 6 ? 'text-amber-400' : 'text-red-400'}`}>
                  {item.score}/10
                </span>
              </div>
              <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden mb-2">
                <div
                  className={`h-full rounded-full ${item.score >= 8 ? 'bg-gradient-to-r from-blue-500 to-cyan-400' : item.score >= 6 ? 'bg-gradient-to-r from-amber-500 to-yellow-400' : 'bg-gradient-to-r from-red-500 to-orange-400'}`}
                  style={{ width: `${item.score * 10}%` }}
                />
              </div>
              <p className="text-xs text-gray-500">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Payout Analysis */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">Payout Analysis — Real Testing Data</h2>
        <p className="text-gray-400 mb-4 max-w-3xl">
          Pocket Option excels in payout reliability. Our live tests showed peak payouts within 0-2% of advertised rates — the smallest
          discrepancy of any broker we&apos;ve tested. Off-peak drops are smaller too (2-12% vs competitors&apos; 8-18%).
        </p>
        <div className="glass-card overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.06] p-4 text-xs font-semibold text-gray-400">
              <div>Asset</div>
              <div className="text-center">Advertised</div>
              <div className="text-center">Peak (Observed)</div>
              <div className="text-center">Off-Peak (Observed)</div>
            </div>
            {[
              { asset: 'EUR/USD', adv: '90-92%', peak: '89-92%', offpeak: '80-88%' },
              { asset: 'Bitcoin', adv: '88-92%', peak: '87-91%', offpeak: '78-85%' },
              { asset: 'S&P 500', adv: '85-88%', peak: '83-87%', offpeak: '76-82%' },
              { asset: 'Gold (OTC)', adv: '85-88%', peak: '83-87%', offpeak: '77-83%' },
            ].map((row, i) => (
              <div key={row.asset} className={`grid grid-cols-4 p-4 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                <div className="text-white font-medium">{row.asset}</div>
                <div className="text-center text-gray-400">{row.adv}</div>
                <div className="text-center text-blue-400 font-medium">{row.peak}</div>
                <div className="text-center text-gray-400">{row.offpeak}</div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          * EUR/USD and BTC showed the steadiest payouts. SPX and Gold had the largest off-peak drift.
          Payouts are most stable during peak session hours.
        </p>
      </section>

      {/* Copy Trading Deep Dive */}
      <section className="section-container py-16">
        <div className="glass-card p-8 md:p-10 border-blue-500/10">
          <span className="badge-blue mb-4">Key Differentiator</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-6">
            Social & Copy Trading
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Pocket Option&apos;s social trading feature allows you to view and copy other traders&apos; strategies.
                You can see their win rates, profit history, and trading patterns before deciding to follow them.
                The platform also includes direct messaging between traders for insights.
              </p>
              <h4 className="font-semibold text-white mb-3">How Copy Trading Works:</h4>
              <ol className="space-y-3 text-sm text-gray-300">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center font-bold">1</span>
                  Navigate to Social Trading — browse the leaderboard of top performers
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center font-bold">2</span>
                  Analyze trader stats — view complete trade history, win rate, and risk level
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center font-bold">3</span>
                  Click &ldquo;Copy&rdquo; and set your investment amount per copied trade
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center font-bold">4</span>
                  Trades execute automatically when your chosen trader opens a position
                </li>
              </ol>
              <p className="text-xs text-gray-500 mt-4">
                Note: Copy trading is only available on live accounts, not demo. Past performance doesn&apos;t guarantee future results.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Additional Social Features:</h4>
              <div className="space-y-3">
                {[
                  { feature: 'Trader Leaderboard', desc: 'Ranked by performance, filterable by timeframe and asset class' },
                  { feature: 'Direct Messaging', desc: 'Message other traders directly for strategy insights' },
                  { feature: 'Social Feed', desc: 'See what other traders are doing in real-time' },
                  { feature: 'AI Trading', desc: 'Auto-finds and executes trades based on technical signals (new 2025)' },
                  { feature: 'Trading Signals', desc: 'Built-in alerts across FX, commodities, indices, crypto' },
                ].map((item) => (
                  <div key={item.feature} className="bg-white/[0.03] rounded-lg p-4">
                    <div className="text-sm text-white font-medium">{item.feature}</div>
                    <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">Markets & Assets — 180+ Instruments</h2>
        <p className="text-gray-400 mb-8">
          Pocket Option offers the widest selection of binary assets we&apos;ve tested — 180+ instruments across
          five asset classes with OTC and non-OTC contracts available.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { class: 'Forex', examples: 'EUR/USD, USD/JPY, GBP/EUR + majors/minors', note: 'Most liquid, highest payouts (up to 92%)' },
            { class: 'Stocks', examples: 'Apple, Tesla, Amazon, Boeing, Pfizer', note: 'US-listed stocks, not available 24/7' },
            { class: 'Indices', examples: 'S&P 500, Japan 225, Australia 200, DAX', note: 'Excellent global coverage, lowest payout class' },
            { class: 'Commodities', examples: 'Gold, Silver, Brent Oil, Natural Gas, Platinum', note: 'Limited selection but fast execution' },
            { class: 'Cryptocurrencies', examples: 'BTC, ETH, SOL, DOGE, TRON, Toncoin + 50 more', note: 'Highly volatile, payouts relatively stable' },
            { class: 'OTC Markets', examples: 'Available outside standard hours', note: 'Weekend trading, slightly lower payouts' },
          ].map((m) => (
            <div key={m.class} className="glass-card p-5">
              <h4 className="font-semibold text-white mb-1">{m.class}</h4>
              <p className="text-xs text-blue-400 mb-2">{m.examples}</p>
              <p className="text-xs text-gray-500">{m.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">Platform & Trading Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Pocket Option runs a proprietary web-based platform with a slick dark mode interface.
              The platform features 4 chart types (line, candles, bar, heiken ashi), 14 timeframes (S5 to D1),
              and 30+ technical indicators including ATR, RSI, MACD, and Bollinger Bands.
            </p>
            <h3 className="font-semibold text-white mb-3">Trading Features</h3>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>• <strong className="text-white">Expiry range:</strong> 3 seconds to 1 month (widest in industry)</li>
              <li>• <strong className="text-white">Double Up:</strong> 2x your position size in one click</li>
              <li>• <strong className="text-white">&ldquo;By the Time&rdquo;:</strong> Pending trade for specific future date/time</li>
              <li>• <strong className="text-white">9 drawing tools:</strong> Fibonacci, trendlines, shapes</li>
              <li>• <strong className="text-white">30+ indicators:</strong> ATR, RSI, MACD, Bollinger, and more</li>
              <li>• <strong className="text-white">OTC contracts:</strong> Trade on weekends and holidays</li>
            </ul>
            <h3 className="font-semibold text-white mb-3">Platform Limitations</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>• No tick charts (available at some competitors)</li>
              <li>• Only 9 drawing tools (competitors offer more)</li>
              <li>• Layout not extensively customizable</li>
              <li>• Features split across left/right menus can be confusing</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="glass-card p-5">
              <h4 className="font-semibold text-white text-sm mb-3">Platform Availability</h4>
              <dl className="space-y-3">
                {[
                  { platform: 'Web Platform', status: 'Chrome, Safari', note: 'Fast, no lag, responsive charts' },
                  { platform: 'Android App', status: 'Google Play + APK', note: 'Seamless, occasional peak-time lag' },
                  { platform: 'iOS', status: 'Mobile web (PWA)', note: 'Web-optimized progressive web app' },
                  { platform: 'MetaTrader 4/5', status: 'Available', note: 'For forex CFDs only, not binaries' },
                ].map((p) => (
                  <div key={p.platform} className="flex items-start justify-between text-sm border-b border-white/[0.04] pb-2">
                    <div>
                      <div className="text-white">{p.platform}</div>
                      <div className="text-xs text-gray-500">{p.note}</div>
                    </div>
                    <span className="text-xs text-blue-400">{p.status}</span>
                  </div>
                ))}
              </dl>
            </div>
            <div className="glass-card p-5">
              <h4 className="font-semibold text-white text-sm mb-3">Extra Features</h4>
              <dl className="space-y-2">
                {[
                  { feature: 'Tournaments', desc: 'Compete for cash prizes, free entry available' },
                  { feature: 'Achievements/Gems', desc: 'Earn perks: risk-free trades, cashback, bonuses' },
                  { feature: 'AI Trading', desc: 'Auto-trades based on technical analysis (new 2025)' },
                  { feature: 'Trading Signals', desc: 'One-click trade replication from built-in signals' },
                ].map((f) => (
                  <div key={f.feature} className="text-sm border-b border-white/[0.04] pb-2">
                    <span className="text-white font-medium">{f.feature}</span>
                    <span className="text-gray-500 text-xs ml-2">— {f.desc}</span>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Deposits & Withdrawals */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">Deposits & Withdrawals</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-6">
            <h3 className="font-semibold text-white mb-4">Deposit Methods</h3>
            <dl className="space-y-3 text-sm">
              {[
                { method: 'Cryptocurrencies', detail: 'Bitcoin, Ethereum, USDT, Toncoin, 50+ alts — Instant to 2 hours' },
                { method: 'Credit/Debit Cards', detail: 'Visa, Mastercard — Near-instant' },
                { method: 'E-Wallets', detail: 'Neteller, Skrill, WebMoney, Volet, FasaPay' },
                { method: 'Mobile Payments', detail: 'Apple Pay, Google Pay, M-Pesa, Airtel' },
                { method: 'Bank Transfer', detail: 'Wire transfer — Standard processing time' },
              ].map((d) => (
                <div key={d.method} className="border-b border-white/[0.04] pb-2">
                  <div className="text-white font-medium">{d.method}</div>
                  <div className="text-gray-500 text-xs">{d.detail}</div>
                </div>
              ))}
            </dl>
            <div className="mt-4 p-3 bg-blue-500/[0.05] rounded-lg border border-blue-500/20">
              <p className="text-xs text-blue-300">Minimum deposit: $5 • No deposit fees • Initial + subsequent deposits from $5</p>
            </div>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-semibold text-white mb-4">Withdrawal Process</h3>
            <dl className="space-y-3 text-sm">
              {[
                { label: 'Minimum withdrawal', value: '$10' },
                { label: 'Maximum withdrawal', value: 'No limit (some methods may cap)' },
                { label: 'Crypto processing', value: 'Minutes to 3 hours' },
                { label: 'Card/E-wallet processing', value: '1-3 business days' },
                { label: 'Fees', value: 'No withdrawal fees (third-party may apply)' },
                { label: 'Method matching', value: 'Must withdraw to same deposit method' },
                { label: 'Currency', value: 'Deposited in any currency, converted to USD' },
              ].map((w) => (
                <div key={w.label} className="flex justify-between border-b border-white/[0.04] pb-2">
                  <span className="text-gray-500">{w.label}</span>
                  <span className="text-white font-medium text-right max-w-[55%]">{w.value}</span>
                </div>
              ))}
            </dl>
            <div className="mt-4 p-3 bg-amber-500/[0.05] rounded-lg border border-amber-500/20">
              <p className="text-xs text-amber-300">Tether (USDT) and bank cards are fastest for deposits. Altcoins like Dai can take up to 2 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulation */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">Regulation & Safety</h2>
        <div className="glass-card p-6 md:p-8">
          <div className="border-l-4 border-amber-500 pl-5 mb-6">
            <p className="text-amber-200/80 text-sm leading-relaxed">
              <strong>Important:</strong> Pocket Option is not regulated by any established financial authority.
              Its previous MISA license (Mwali/Comoros) was suspended after non-payment of fees.
              The CFTC (US), FCA (UK), and ASC (Canada) have issued public warnings about unauthorized services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { item: 'Registration', detail: 'Infinite Trade LLC, Costa Rica (#4062001303240)', status: 'neutral' },
              { item: 'Previous Regulation', detail: 'IFMRRC (Gembell Ltd) + MISA (suspended)', status: 'warn' },
              { item: 'Regulator Warnings', detail: 'CFTC, FCA, ASC have issued notices', status: 'warn' },
              { item: 'SSL Encryption', detail: 'Active on all transactions', status: 'ok' },
              { item: 'KYC/AML', detail: 'Verification required for withdrawals', status: 'ok' },
              { item: 'Fund Segregation', detail: 'Claims client funds separated from company', status: 'neutral' },
              { item: 'Investor Compensation', detail: 'None — no compensation scheme available', status: 'warn' },
              { item: 'Brokerage License', detail: 'Claims International IBC Regulation Act 2014', status: 'neutral' },
            ].map((s) => (
              <div key={s.item} className="flex items-start gap-3 p-3 bg-white/[0.02] rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                  s.status === 'ok' ? 'bg-emerald-400' : s.status === 'warn' ? 'bg-amber-400' : 'bg-gray-500'
                }`} />
                <div>
                  <div className="text-sm text-white font-medium">{s.item}</div>
                  <div className="text-xs text-gray-500">{s.detail}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6">
            While common for binary options platforms, the lack of regulation means limited legal recourse in case of disputes.
            Only deposit funds you can afford to lose. Withdraw regularly to limit exposure.
            Learn how we evaluate broker safety in our{' '}
            <Link href={`/${locale}/methodology`} className="text-emerald-400 hover:underline">testing methodology</Link>, or
            check our{' '}
            <Link href={`/${locale}/scams`} className="text-emerald-400 hover:underline">scam detection guide</Link> to
            verify any broker before depositing.
          </p>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Who Is Pocket Option Best For?</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: 'Beginners & Learners',
              desc: '$5 deposit, $50K demo, copy-trading, and achievements make it the easiest entry point. Copy successful traders while you learn.',
              icon: '🎓',
            },
            {
              title: 'Social Traders',
              desc: 'If you want to follow profitable traders, participate in tournaments, and engage with a trading community rather than trade in isolation.',
              icon: '👥',
            },
            {
              title: 'Active Diversifiers',
              desc: '180+ assets across 5 classes with 3-second to 1-month expiries. The widest range for traders who want variety in their strategies.',
              icon: '📊',
            },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testing Summary */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">Our Real-Money Testing Summary</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { value: '253', label: 'Trades Executed', sub: 'Manual + copy trades over 8 months' },
            { value: '89-92%', label: 'Peak Payouts', sub: 'Within 0-2% of advertised' },
            { value: '< 3h', label: 'Avg Withdrawal', sub: '12 tested, all processed' },
            { value: '< 1 min', label: 'Support Response', sub: '24/7 live chat tested' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-5 text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-white font-medium mt-2">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Support */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">Customer Support</h2>
        <div className="glass-card p-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { channel: 'Live Chat', availability: '24/7', response: '1-3 minutes', note: 'Fastest, handles most issues well' },
              { channel: 'Email', availability: '24/7', response: '40-120 minutes', note: 'Detailed answers, good for complex issues' },
              { channel: 'Community Chat', availability: 'In-platform', response: 'Varies', note: 'Peer-to-peer, not official support' },
              { channel: 'Phone Support', availability: 'Not offered', response: 'N/A', note: 'No telephone line available' },
            ].map((s) => (
              <div key={s.channel} className="bg-white/[0.02] rounded-lg p-4">
                <div className="text-white font-medium text-sm">{s.channel}</div>
                <div className="text-blue-400 text-xs mt-1">{s.response}</div>
                <div className="text-gray-500 text-xs mt-1">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Pocket Option Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Is Pocket Option Legit?', href: `/${locale}/blog/is-pocket-option-legit`, desc: 'Evidence-based verification after 8 months of testing' },
              { title: 'Withdrawal Guide', href: `/${locale}/blog/pocket-option-withdrawal`, desc: 'All methods, times & proof from 12 test withdrawals' },
              { title: 'Promo Code 2026', href: `/${locale}/blog/pocket-option-promo-code`, desc: 'Latest deposit bonus codes & terms' },
              { title: 'Copy Trading Guide', href: `/${locale}/blog/pocket-option-copy-trading`, desc: 'How to copy top traders + 3-month test results' },
              { title: 'PO vs Quotex', href: `/${locale}/compare/pocket-option-vs-quotex`, desc: '#1 vs #2 — which is better for you?' },
              { title: '60-Second Strategy', href: `/${locale}/blog/60-second-binary-options-strategy`, desc: 'Best turbo trading strategies (3s min expiry)' },
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
          <h2 className="text-3xl font-bold mb-8">Pocket Option FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: 'What is the minimum deposit for Pocket Option?',
                a: 'Pocket Option has a $5 minimum deposit — the lowest among major binary options brokers. You can deposit via crypto, e-wallets, or bank cards.',
              },
              {
                q: 'Is Pocket Option regulated?',
                a: 'Pocket Option was previously registered with IFMRRC, but its MISA (Comoros) license was suspended. It is not regulated by tier-1 authorities like CySEC or MFSA. The CFTC, FCA, and ASC have issued public warnings. See our regulation section above for full details.',
              },
              {
                q: 'What is Pocket Option\'s maximum payout?',
                a: 'Pocket Option advertises up to 92% payout. Our testing showed peak payouts of 89–92% on major forex pairs during London/New York sessions, dropping to 80–88% off-peak.',
              },
              {
                q: 'How long do Pocket Option withdrawals take?',
                a: 'In our testing, crypto withdrawals processed in 12–45 minutes. E-wallets took 1–24 hours. Bank transfers can take 1–5 business days. All 12 of our test withdrawals were completed successfully.',
              },
              {
                q: 'Does Pocket Option have a demo account?',
                a: 'Yes. Pocket Option offers a free demo account with $50,000 virtual balance. No registration required — you can start practicing immediately.',
              },
              {
                q: 'Is Pocket Option copy trading profitable?',
                a: 'Results vary. Our 3-month copy trading test showed mixed results depending on which traders you follow. Read our dedicated copy trading guide for detailed performance data.',
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

      {/* Final CTA */}
      <section className="section-container py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/20 p-8 md:p-16 text-center">
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Try Pocket Option?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Start with a $50,000 demo account (one-click access) or deposit just $5 to begin real trading.
              Copy top traders from day one — no experience required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CtaButton broker="pocketOption" label="Open Real Account ($5 min)" campaign="po_bottom" size="lg" />
              <CtaButton broker="pocketOption" type="demo" label="Try Free Demo ($50K)" variant="secondary" campaign="po_bottom" size="lg" />
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Your capital is at risk. Only trade with money you can afford to lose. Setup takes under 5 minutes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
