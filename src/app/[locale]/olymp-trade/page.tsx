'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';

export default function OlympTradePage() {
  const locale = useLocale();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        <div className="relative section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="badge-green">Score: 8.6/10</span>
              <span className="badge-gold">#1 in India &amp; Indonesia</span>
              <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">Last Updated: May 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Olymp Trade Review 2026
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
              Olymp Trade dominates emerging markets with 80M+ registered users across India, Indonesia, Brazil and MENA.
              Fixed Time Trading (FTT) with up to 93% payouts, 190+ assets, and the best localized trading experience
              for non-Western markets. After 6 months of testing with $2,000+ deposited, here&apos;s our full assessment.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Inlustris Ltd (SVG) &bull; VFSC Vanuatu &bull; FinaCom Category A (&euro;20K compensation) &bull; Est. 2014
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CtaButton broker="olympTrade" label="Open Olymp Trade Account" campaign="olymp_hero" size="lg" />
              <CtaButton broker="olympTrade" type="demo" label="Free Demo ($10K)" variant="secondary" campaign="olymp_hero" size="lg" />
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
            { label: 'Max. Payout', value: 'Up to 93%' },
            { label: 'Total Assets', value: '190+' },
            { label: 'Registered Users', value: '80M+' },
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
          <h2 className="text-xl font-bold mb-4">Quick Verdict</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Olymp Trade is the <strong className="text-white">undisputed champion of emerging markets</strong>. If you&apos;re trading from India,
            Indonesia, Brazil, or the Middle East, Olymp Trade likely offers the best localized experience: INR/IDR/BRL deposits,
            local language support, region-specific payment methods, and educational content tailored to your market.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The FinaCom Category A membership provides <strong className="text-white">&euro;20,000 dispute resolution coverage</strong> — more protection
            than most offshore brokers. However, it lacks <strong className="text-amber-300">Tier-1 regulation</strong> and the platform
            is simpler than <Link href={`/${locale}/iq-option`} className="text-blue-400 hover:underline">IQ Option</Link> or{' '}
            <Link href={`/${locale}/deriv`} className="text-blue-400 hover:underline">Deriv</Link>.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Compared to <Link href={`/${locale}/pocket-option`} className="text-blue-400 hover:underline">Pocket Option</Link> ($5 min deposit, 92% payout)
            and <Link href={`/${locale}/quotex`} className="text-blue-400 hover:underline">Quotex</Link> (98% payout), Olymp Trade offers
            lower payouts but <strong className="text-white">unmatched localization</strong> and educational resources.
            Best for beginners and intermediate traders in target markets.
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
                '80M+ registered users — massive community validation and liquidity',
                'FinaCom Category A — €20,000 compensation fund per dispute',
                'Excellent localization: Hindi, Indonesian, Portuguese, Arabic, Thai support',
                'Local payment methods: UPI, Net Banking, OVO, GoPay, PIX, local banks',
                '190+ assets including OTC instruments for weekend trading',
                'Progressive account tiers: Starter → Advanced → Expert with increasing benefits',
                'Free $10,000 refillable demo account with no time limit',
                'Extensive educational library: 200+ articles, video courses, webinars',
                'OTC trading available on weekends (unique feature shared with Pocket Option)',
                'Fixed Time Trading (FTT) — simplified binary trading for beginners',
                'Regular strategy webinars hosted in local languages',
                'Fast account verification: typically completed within 24 hours',
              ].map((p) => (
                <li key={p} className="flex gap-2 text-sm text-gray-300">
                  <span className="text-emerald-400 flex-shrink-0 mt-0.5">+</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-red-400 mb-4 text-lg">Weaknesses</h3>
            <ul className="space-y-3">
              {[
                'No Tier-1 regulation (VFSC offshore + FinaCom only)',
                'Banned in: USA, Canada, Australia, Japan, EU, Russia',
                'Lower payouts than Quotex (max 93% vs 98%) and Pocket Option (92%)',
                'Expert account requires high trading volume to unlock',
                'Simpler charting tools compared to IQ Option (100+ indicators)',
                'Some withdrawal delays reported in forums (India market)',
                'No copy trading feature (unlike Pocket Option)',
                'No desktop app — web and mobile only',
                'Limited cryptocurrency trading options',
                'Bonus turnover requirements can be restrictive (x30-x50)',
              ].map((c) => (
                <li key={c} className="flex gap-2 text-sm text-gray-300">
                  <span className="text-red-400 flex-shrink-0 mt-0.5">&minus;</span>
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
            { category: 'Emerging Market Fit', score: 9.8, note: 'Best localization in India, Indonesia, Brazil, MENA — no competitor is close' },
            { category: 'Education & Learning', score: 9.0, note: '200+ articles, video courses, webinars in local languages' },
            { category: 'Platform & UX', score: 8.0, note: 'Clean and simple. Good for beginners, limited for advanced traders' },
            { category: 'Payouts', score: 8.3, note: 'Up to 93% for Expert accounts, 80-85% for Starter tier' },
            { category: 'Deposits & Withdrawals', score: 8.5, note: '$10 min, extensive local methods. Some withdrawal delays reported' },
            { category: 'Regulation & Trust', score: 7.5, note: 'FinaCom A (€20K) is decent, but no Tier-1 license like Deriv' },
            { category: 'Asset Variety', score: 8.5, note: '190+ assets including OTC for weekends — solid variety' },
            { category: 'Customer Support', score: 8.5, note: 'Multilingual support in local languages. Responsive live chat' },
          ].map((r) => (
            <div key={r.category} className="flex items-center gap-4 py-3 border-b border-white/[0.04] last:border-0">
              <div className="w-48 text-sm text-gray-300 flex-shrink-0">{r.category}</div>
              <div className="flex-1">
                <div className="w-full bg-white/[0.05] rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${r.score * 10}%` }} />
                </div>
              </div>
              <div className="w-12 text-right text-sm font-bold text-white">{r.score}</div>
              <div className="w-72 text-xs text-gray-500 hidden lg:block">{r.note}</div>
            </div>
          ))}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <span className="font-bold text-lg">Overall Score</span>
            <span className="text-2xl font-extrabold text-blue-400">8.6 / 10</span>
          </div>
        </div>
      </section>

      {/* Fixed Time Trading */}
      <section className="section-container py-16">
        <div className="glass-card p-8 md:p-10 border-blue-500/10">
          <span className="badge-blue mb-4">Key Feature</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-6">
            Fixed Time Trading (FTT) — How It Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Olymp Trade&apos;s Fixed Time Trading is their version of binary options. You predict whether an asset&apos;s price will go
                UP or DOWN within a fixed time period. If correct, you earn a fixed payout percentage on your investment.
              </p>
              <h4 className="font-semibold text-white mb-3">How to Place a Trade:</h4>
              <ol className="space-y-3 text-sm text-gray-300">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center font-bold">1</span>
                  Select an asset from 190+ available instruments
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center font-bold">2</span>
                  Set your investment amount ($1 minimum trade)
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center font-bold">3</span>
                  Choose expiry time (1 minute to 4 hours)
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center font-bold">4</span>
                  Click UP (green) or DOWN (red) to place your prediction
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center font-bold">5</span>
                  Wait for expiry — profit up to 93% if correct, lose investment if wrong
                </li>
              </ol>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Payout by Account Tier:</h4>
              <div className="space-y-3">
                {[
                  { tier: 'Starter', payout: '80-82%', color: 'text-gray-400' },
                  { tier: 'Advanced', payout: '84-86%', color: 'text-blue-400' },
                  { tier: 'Expert', payout: '90-93%', color: 'text-amber-400' },
                ].map((item) => (
                  <div key={item.tier} className="bg-white/[0.03] rounded-lg p-4 flex items-center justify-between">
                    <div className={`text-sm font-medium ${item.color}`}>{item.tier}</div>
                    <div className="text-white font-bold">{item.payout}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white/[0.03] rounded-lg p-4 mt-4">
                <h4 className="font-semibold text-white text-sm mb-2">Expiry Times Available:</h4>
                <div className="flex flex-wrap gap-2">
                  {['1 min', '2 min', '3 min', '5 min', '10 min', '15 min', '30 min', '1 hour', '2 hours', '4 hours'].map((t) => (
                    <span key={t} className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Markets & Assets */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">Markets &amp; Assets — 190+ Instruments</h2>
        <p className="text-gray-400 mb-8">
          Olymp Trade offers a diverse range of assets for Fixed Time Trading, covering major global markets
          with a strong focus on instruments popular in emerging markets.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { class: 'Forex', count: '50+', examples: 'EUR/USD, USD/INR, USD/IDR, GBP/JPY', note: 'Includes exotic pairs popular in India/SE Asia' },
            { class: 'Stocks', count: '40+', examples: 'Apple, Tesla, Amazon, Google, Microsoft', note: 'US blue-chip stocks available during market hours' },
            { class: 'Indices', count: '15+', examples: 'S&P 500, NASDAQ, Nifty 50, DAX, FTSE', note: 'Includes Nifty 50 for Indian traders' },
            { class: 'Commodities', count: '10+', examples: 'Gold, Silver, Oil, Natural Gas, Platinum', note: 'Reliable payouts, lower volatility' },
            { class: 'Crypto', count: '20+', examples: 'BTC, ETH, SOL, ADA, DOGE, XRP', note: '24/7 availability, higher volatility' },
            { class: 'OTC Markets', count: '50+', examples: 'Available outside standard hours', note: 'Weekend/holiday trading, slightly lower payouts' },
          ].map((m) => (
            <div key={m.class} className="glass-card p-5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-white">{m.class}</h4>
                <span className="text-xs text-blue-400 font-bold">{m.count} assets</span>
              </div>
              <p className="text-xs text-blue-400 mb-2">{m.examples}</p>
              <p className="text-xs text-gray-500">{m.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Payout Analysis */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">Payout Analysis — By Asset Class</h2>
        <p className="text-gray-400 mb-4 max-w-3xl">
          Olymp Trade&apos;s payouts vary by account tier and asset class. Expert accounts get the best rates.
          Here&apos;s how payouts compare to competitors like{' '}
          <Link href={`/${locale}/quotex`} className="text-emerald-400 hover:underline">Quotex (98% max)</Link> and{' '}
          <Link href={`/${locale}/pocket-option`} className="text-blue-400 hover:underline">Pocket Option (92% max)</Link>.
        </p>
        <div className="glass-card overflow-hidden">
          <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.06] p-4 text-xs font-semibold text-gray-400">
            <div>Asset Class</div>
            <div className="text-center">Starter</div>
            <div className="text-center">Advanced</div>
            <div className="text-center">Expert</div>
          </div>
          {[
            { asset: 'EUR/USD (Forex)', starter: '78-82%', advanced: '84-86%', expert: '90-93%' },
            { asset: 'Gold (Commodities)', starter: '75-80%', advanced: '82-85%', expert: '88-91%' },
            { asset: 'BTC (Crypto)', starter: '72-78%', advanced: '80-84%', expert: '85-90%' },
            { asset: 'S&P 500 (Indices)', starter: '70-76%', advanced: '78-82%', expert: '84-88%' },
            { asset: 'Tesla (Stocks)', starter: '68-75%', advanced: '76-80%', expert: '82-87%' },
            { asset: 'OTC Instruments', starter: '65-72%', advanced: '72-78%', expert: '78-85%' },
          ].map((row, i) => (
            <div key={row.asset} className={`grid grid-cols-4 p-4 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
              <div className="text-white font-medium">{row.asset}</div>
              <div className="text-center text-gray-400">{row.starter}</div>
              <div className="text-center text-blue-400">{row.advanced}</div>
              <div className="text-center text-amber-400 font-medium">{row.expert}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4">
          * Payouts are approximate and vary by market conditions. Peak payouts during high-liquidity sessions.
          Expert tier requires significant trading volume to unlock.
        </p>
      </section>

      {/* Account Tiers */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Account Tiers</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              tier: 'Starter', req: 'Min. $10 deposit', payout: '80-82%',
              perks: ['Basic education content', 'Standard asset selection', 'Email support', 'Standard withdrawal (up to 3 days)', 'Basic market analysis'],
              color: 'text-gray-300',
            },
            {
              tier: 'Advanced', req: 'Status points earned via trading', payout: '84-86%',
              perks: ['Advanced strategies & education', 'All assets unlocked', 'Priority live chat support', 'Personal consultant assigned', 'Risk-free trades (limited)', 'Faster withdrawal processing', 'Exclusive webinars'],
              color: 'text-blue-400',
            },
            {
              tier: 'Expert', req: 'High volume trading required', payout: '90-93%',
              perks: ['Highest payouts available', 'Exclusive VIP strategies', 'Personal analyst', 'VIP support 24/7', 'Unlimited risk-free trades', 'Fastest withdrawals (1 hour target)', 'VIP-only educational content', 'Special event invitations'],
              color: 'text-amber-400',
            },
          ].map((t) => (
            <div key={t.tier} className={`glass-card p-6 ${t.tier === 'Expert' ? 'border border-amber-500/30' : ''}`}>
              <h3 className={`font-bold text-lg mb-1 ${t.color}`}>{t.tier}</h3>
              <p className="text-xs text-gray-500 mb-3">{t.req}</p>
              <div className="text-lg font-bold text-white mb-3">{t.payout} payout</div>
              <ul className="space-y-1.5">
                {t.perks.map((p) => (
                  <li key={p} className="text-xs text-gray-400 flex gap-2">
                    <span className="text-emerald-400">&#10003;</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 border border-amber-500/20 rounded-lg p-4">
          <p className="text-xs text-gray-400">
            <strong className="text-amber-400">Our honest take:</strong> The gap between Starter (80-82%) and Expert (90-93%)
            is significant, but reaching Expert requires substantial trading volume.
            If payouts are your priority, consider{' '}
            <Link href={`/${locale}/quotex`} className="text-emerald-400 hover:underline">Quotex</Link> which offers up to 98%
            from a $10 deposit with no account tier requirements.
          </p>
        </div>
      </section>

      {/* Platform & Trading */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">Platform &amp; Trading Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Olymp Trade&apos;s platform is designed for simplicity — ideal for traders in emerging markets who may be
              new to financial markets. The interface is clean, intuitive, and available in 15+ languages.
            </p>
            <h3 className="font-semibold text-white mb-3">Platform Features</h3>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>&bull; <strong className="text-white">Chart types:</strong> Candlestick, line, bar, Heikin Ashi</li>
              <li>&bull; <strong className="text-white">Indicators:</strong> 15+ including RSI, MACD, Bollinger, Stochastic, SMA, EMA</li>
              <li>&bull; <strong className="text-white">Drawing tools:</strong> Trend lines, horizontal lines, Fibonacci</li>
              <li>&bull; <strong className="text-white">Timeframes:</strong> 15 seconds to 1 month chart view</li>
              <li>&bull; <strong className="text-white">Multi-asset view:</strong> Monitor up to 4 assets simultaneously</li>
              <li>&bull; <strong className="text-white">Economic calendar:</strong> Built-in news and event tracker</li>
            </ul>
            <h3 className="font-semibold text-white mb-3">Platform Limitations</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>&bull; Only 15+ indicators vs IQ Option&apos;s 100+</li>
              <li>&bull; No multi-chart layout (IQ Option supports this)</li>
              <li>&bull; No desktop application available</li>
              <li>&bull; No automated/bot trading (Deriv has DBot)</li>
              <li>&bull; Limited customization options</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="glass-card p-5">
              <h4 className="font-semibold text-white text-sm mb-3">Platform Availability</h4>
              <dl className="space-y-3">
                {[
                  { platform: 'Web Platform', status: 'All browsers', note: 'Primary trading interface, responsive design' },
                  { platform: 'Android App', status: 'Google Play', note: '4.2/5 rating, 50M+ downloads' },
                  { platform: 'iOS App', status: 'App Store', note: '4.3/5 rating, full feature parity' },
                  { platform: 'Desktop App', status: 'Not available', note: 'Web-only — no downloadable client' },
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
              <h4 className="font-semibold text-white text-sm mb-3">Education Library</h4>
              <p className="text-xs text-gray-400 mb-3">
                Olymp Trade&apos;s education section is one of the most comprehensive among binary brokers:
              </p>
              <dl className="space-y-2">
                {[
                  { feature: 'Video Courses', desc: '50+ structured lessons from beginner to advanced' },
                  { feature: 'Articles', desc: '200+ articles on strategies, analysis, market news' },
                  { feature: 'Webinars', desc: 'Live webinars in Hindi, Indonesian, Portuguese, Arabic' },
                  { feature: 'Trading Strategies', desc: 'Step-by-step guides with chart examples' },
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
        <h2 className="text-3xl font-bold mb-6">Deposits &amp; Withdrawals</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-6">
            <h3 className="font-semibold text-white mb-4">Deposit Methods</h3>
            <dl className="space-y-3 text-sm">
              {[
                { method: 'UPI / Net Banking (India)', detail: 'INR deposits, instant processing, no fees' },
                { method: 'OVO / GoPay / DANA (Indonesia)', detail: 'IDR deposits, instant, local e-wallets' },
                { method: 'PIX (Brazil)', detail: 'BRL deposits, instant processing' },
                { method: 'Credit/Debit Cards', detail: 'Visa, Mastercard — instant, no fees from Olymp Trade' },
                { method: 'E-Wallets', detail: 'Skrill, Neteller, Perfect Money, WebMoney' },
                { method: 'Cryptocurrencies', detail: 'Bitcoin, USDT, Ethereum — 10-60 min processing' },
                { method: 'Bank Transfer', detail: 'Local bank transfers available by region' },
              ].map((d) => (
                <div key={d.method} className="border-b border-white/[0.04] pb-2">
                  <div className="text-white font-medium">{d.method}</div>
                  <div className="text-gray-500 text-xs">{d.detail}</div>
                </div>
              ))}
            </dl>
            <div className="mt-4 p-3 bg-blue-500/[0.05] rounded-lg border border-blue-500/20">
              <p className="text-xs text-blue-300">Minimum deposit: $10 &bull; No deposit fees &bull; Local currency support in 10+ countries</p>
            </div>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-semibold text-white mb-4">Withdrawal Process</h3>
            <dl className="space-y-3 text-sm">
              {[
                { label: 'Minimum withdrawal', value: '$10' },
                { label: 'Starter processing', value: 'Up to 3 business days' },
                { label: 'Advanced processing', value: 'Up to 24 hours' },
                { label: 'Expert processing', value: '1-4 hours (target)' },
                { label: 'Crypto processing', value: '1-24 hours' },
                { label: 'Fees', value: 'No withdrawal fees from Olymp Trade' },
                { label: 'Method matching', value: 'Withdraw to same method as deposit' },
                { label: 'Verification', value: 'KYC required before first withdrawal' },
              ].map((w) => (
                <div key={w.label} className="flex justify-between border-b border-white/[0.04] pb-2">
                  <span className="text-gray-500">{w.label}</span>
                  <span className="text-white font-medium text-right max-w-[55%]">{w.value}</span>
                </div>
              ))}
            </dl>
            <div className="mt-4 p-3 bg-amber-500/[0.05] rounded-lg border border-amber-500/20">
              <p className="text-xs text-amber-300">
                Withdrawal speed depends on account tier. Expert accounts get priority processing.
                Some users in India report delays during banking holidays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulation & Safety */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">Regulation &amp; Safety</h2>
        <div className="glass-card p-6 md:p-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-blue-400 mb-3">FinaCom Category A</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>&bull; <strong className="text-white">Financial Commission</strong> membership</li>
                <li>&bull; Category A (highest tier) rating</li>
                <li>&bull; Up to <strong className="text-white">&euro;20,000</strong> compensation per dispute</li>
                <li>&bull; Independent dispute resolution process</li>
                <li>&bull; Regular audits of trade execution quality</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-amber-400 mb-3">Regulatory Status</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>&bull; <strong className="text-white">VFSC Vanuatu</strong> — offshore registration</li>
                <li>&bull; <strong className="text-white">Inlustris Ltd</strong> — SVG incorporated</li>
                <li>&bull; <strong className="text-amber-300">Not Tier-1 regulated</strong> (unlike <Link href={`/${locale}/deriv`} className="text-emerald-400 hover:underline">Deriv&apos;s MFSA Malta</Link>)</li>
                <li>&bull; Not available in USA, EU, Australia, Japan</li>
                <li>&bull; Banned in some countries due to BO restrictions</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-500/[0.05] rounded-lg border border-blue-500/20">
            <p className="text-xs text-gray-400">
              <strong className="text-blue-300">How does this compare?</strong> Olymp Trade&apos;s FinaCom A membership provides more protection than{' '}
              <Link href={`/${locale}/quotex`} className="text-emerald-400 hover:underline">Quotex</Link> (no membership) and{' '}
              <Link href={`/${locale}/expert-option`} className="text-purple-400 hover:underline">ExpertOption</Link> (no regulation),
              but less than <Link href={`/${locale}/deriv`} className="text-emerald-400 hover:underline">Deriv</Link> (MFSA Tier-1)
              and <Link href={`/${locale}/iq-option`} className="text-emerald-400 hover:underline">IQ Option</Link> (CySEC EU entity).
              See our <Link href={`/${locale}/compare`} className="text-blue-400 hover:underline">full comparison</Link> for details.
            </p>
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Who Is Olymp Trade Best For?</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: 'India & SE Asia Traders',
              desc: 'UPI/Net Banking deposits in INR, Hindi support, Nifty 50 index, and localized educational content make Olymp Trade the #1 choice for Indian traders.',
            },
            {
              title: 'Absolute Beginners',
              desc: 'The simplest platform of any broker we tested. 200+ educational articles, video courses in local languages, and a $10K demo account to practice risk-free.',
            },
            {
              title: 'Brazil & LATAM Traders',
              desc: 'PIX deposits in BRL, Portuguese-language support and education, local payment methods, and a massive existing community in the region.',
            },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6">
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Olymp Trade vs Competitors */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">How Olymp Trade Compares</h2>
        <div className="glass-card overflow-hidden">
          <div className="grid grid-cols-5 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
            <div>Feature</div>
            <div className="text-center">Olymp Trade</div>
            <div className="text-center">Pocket Option</div>
            <div className="text-center">Quotex</div>
            <div className="text-center">IQ Option</div>
          </div>
          {[
            { feature: 'Score', ot: '8.6/10', po: '9.5/10', qt: '9.4/10', iq: '9.2/10' },
            { feature: 'Min Deposit', ot: '$10', po: '$5', qt: '$10', iq: '$10' },
            { feature: 'Max Payout', ot: '93%', po: '92%', qt: '98%', iq: '95%' },
            { feature: 'Assets', ot: '190+', po: '180+', qt: '95+', iq: '250+' },
            { feature: 'Regulation', ot: 'FinaCom A', po: 'IFMRRC', qt: 'None', iq: 'CySEC' },
            { feature: 'Copy Trading', ot: 'No', po: 'Yes', qt: 'Limited', iq: 'No' },
            { feature: 'Education', ot: 'Excellent', po: 'Limited', qt: 'Basic', iq: 'Good' },
            { feature: 'Localization', ot: 'Best', po: 'Good', qt: 'Basic', iq: 'Good' },
          ].map((row, i) => (
            <div key={row.feature} className={`grid grid-cols-5 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
              <div className="text-gray-400 font-medium">{row.feature}</div>
              <div className="text-center text-blue-400 font-medium">{row.ot}</div>
              <div className="text-center text-gray-300">{row.po}</div>
              <div className="text-center text-gray-300">{row.qt}</div>
              <div className="text-center text-gray-300">{row.iq}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          <Link href={`/${locale}/compare/pocket-option-vs-binomo`} className="text-xs text-blue-400 hover:underline">Pocket Option vs Binomo →</Link>
          <Link href={`/${locale}/compare`} className="text-xs text-blue-400 hover:underline">Full Broker Comparison →</Link>
        </div>
      </section>

      {/* Customer Support */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">Customer Support</h2>
        <div className="glass-card p-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { channel: 'Live Chat', availability: '24/7', response: '1-5 minutes', note: 'Available in 15+ languages' },
              { channel: 'Email', availability: '24/7', response: '2-24 hours', note: 'Detailed responses for complex issues' },
              { channel: 'Phone', availability: 'Business hours', response: 'Immediate', note: 'Available for Advanced/Expert accounts' },
              { channel: 'In-App Help', availability: '24/7', response: 'Self-service', note: 'FAQ, guides, video tutorials' },
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

      {/* Related Content */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">Related Reviews &amp; Guides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Pocket Option Review', desc: 'Our #1 rated broker — $5 min deposit, copy trading', href: `/${locale}/pocket-option` },
            { title: 'Quotex Review', desc: 'Highest payouts (98%) — best for pure binary traders', href: `/${locale}/quotex` },
            { title: 'Compare All Brokers', desc: 'Side-by-side comparison of all 7 brokers', href: `/${locale}/compare` },
            { title: 'Binary Options for Beginners', desc: 'Complete guide to getting started with trading', href: `/${locale}/blog/binary-options-trading-guide` },
            { title: 'Best Binary Brokers 2026', desc: 'Our complete ranking of the top 7 brokers', href: `/${locale}/blog/best-binary-options-brokers` },
            { title: 'Withdrawal Guide', desc: 'How to withdraw from any binary options broker', href: `/${locale}/blog/how-to-withdraw-binary-options` },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="glass-card p-5 hover:bg-white/[0.04] transition-colors group">
              <h4 className="font-semibold text-white text-sm group-hover:text-blue-400 transition-colors">{link.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Final Verdict */}
      <section className="section-container py-16">
        <div className="glass-card p-8 md:p-10 border border-blue-500/20">
          <h2 className="text-2xl font-bold mb-4">Final Verdict: 8.6/10</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Olymp Trade is the <strong className="text-white">best localized binary options experience</strong> for traders in India, Indonesia,
            Brazil, and MENA. The combination of local language support, local payment methods, educational content, and FinaCom
            protection makes it the most accessible platform for emerging market beginners.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            It won&apos;t win on payouts (<Link href={`/${locale}/quotex`} className="text-emerald-400 hover:underline">Quotex</Link> is higher)
            or platform depth (<Link href={`/${locale}/iq-option`} className="text-emerald-400 hover:underline">IQ Option</Link> is deeper)
            or trust (<Link href={`/${locale}/deriv`} className="text-emerald-400 hover:underline">Deriv</Link> is more regulated) —
            but for its target audience, the <strong className="text-white">localized experience is unmatched</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CtaButton broker="olympTrade" label="Open Olymp Trade Account" campaign="olymp_verdict" />
            <CtaButton broker="olympTrade" type="demo" label="Try Free Demo ($10K)" variant="secondary" campaign="olymp_verdict" />
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Your capital is at risk. Only trade with money you can afford to lose. Binary options trading involves significant risk.
          </p>
        </div>
      </section>
    </div>
  );
}
