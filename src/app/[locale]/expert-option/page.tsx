'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ExpertOptionPage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Broker Reviews', href: undefined }, { label: 'ExpertOption' }]} />
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="relative section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="badge-green">Score: 7.8/10</span>
              <span className="badge-gold">Social Trading</span>
              <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">Last Updated: May 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              ExpertOption Review 2026
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
              ExpertOption is a social trading-focused binary options platform with 40M+ registered users.
              Up to 95% payouts, 100+ assets, and a built-in social feed showing what other traders are doing in real-time.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              EOLabs LLC (SVG) &bull; No financial regulation &bull; 150+ countries &bull; Est. 2014
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CtaButton broker="expertOption" label="Open ExpertOption Account" campaign="expert_hero" size="lg" />
              <CtaButton broker="expertOption" type="demo" label="Free Demo ($10K)" variant="secondary" campaign="expert_hero" size="lg" />
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
            { label: 'Registered Users', value: '40M+' },
            { label: 'Total Assets', value: '100+' },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <div className="text-xl md:text-2xl font-bold text-purple-400">{s.value}</div>
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
            ExpertOption&apos;s strength is its <strong className="text-white">social trading features</strong>. You can see what other traders
            are buying/selling in real-time, follow successful traders, and learn from the community. With 40M+ users and
            30M+ monthly trades, there&apos;s a large active community to learn from.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The critical weakness: <strong className="text-red-400">zero financial regulation</strong>. Not even FinaCom membership.
            This is the highest-risk broker on our list. Your funds have no regulatory protection whatsoever.
            We include ExpertOption for completeness, but <strong className="text-amber-300">strongly recommend choosing a more regulated alternative</strong> unless
            the social trading features are specifically what you need.
          </p>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="section-container pb-8">
        <div className="border border-red-500/30 bg-red-500/[0.03] rounded-xl p-6">
          <h2 className="text-lg font-bold text-red-400 mb-3">Regulation Warning</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            ExpertOption (EOLabs LLC) is <strong className="text-red-400">completely unregulated</strong> by any financial authority.
            Unlike competitors with FinaCom membership (Binomo, Olymp Trade) or CySEC/MFSA licenses (IQ Option, Deriv),
            ExpertOption provides <strong className="text-red-400">no dispute resolution mechanism and no fund protection</strong>.
            Trade with extreme caution and only risk amounts you can afford to lose entirely.
            See our <Link href={`/${locale}/methodology`} className="text-red-300 hover:underline">testing methodology</Link> and{' '}
            <Link href={`/${locale}/scams`} className="text-red-300 hover:underline">scam detection guide</Link> for
            how to evaluate broker safety.
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
                'Social trading: see trades from other users in real-time on charts',
                '40M+ registered users — large active community',
                'Up to 95% payouts — competitive with industry leaders',
                '100+ assets (currencies, stocks, commodities, crypto)',
                'Free demo account with $10,000 virtual balance',
                'Custom deal durations — flexible expiry times',
                'Multiple account types with progressive benefits',
                'Good mobile app experience',
                'Available in 150+ countries including India, Pakistan, SE Asia',
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
                'ZERO financial regulation — highest risk broker on this list',
                'No FinaCom or any dispute resolution body membership',
                'Client funds not segregated or protected',
                'Verification process can take up to 30 days',
                'Not available in USA, UK, EU, Japan, Russia, Australia',
                'Some withdrawal complaints in forums',
                'Less established brand compared to IQ Option or Binomo',
                'No copy trading automation (social features are observational only)',
                'Limited educational content compared to Olymp Trade',
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
            { category: 'Social Features', score: 9.0, note: 'Best social trading overlay in binary options' },
            { category: 'Payouts', score: 8.5, note: 'Up to 95% — competitive with top brokers' },
            { category: 'Platform & UX', score: 8.0, note: 'Clean interface with unique social overlay' },
            { category: 'Asset Variety', score: 7.5, note: '100+ assets — adequate but not extensive' },
            { category: 'Deposits & Withdrawals', score: 7.5, note: '$10 min. Some verification delays reported' },
            { category: 'Regulation & Trust', score: 4.0, note: 'Zero regulation. No fund protection. Highest risk' },
            { category: 'Customer Support', score: 7.0, note: 'Chat + email. Mixed reviews on response quality' },
            { category: 'Mobile Experience', score: 8.0, note: 'Good mobile app with social features' },
          ].map((r) => (
            <div key={r.category} className="flex items-center gap-4 py-3 border-b border-white/[0.04] last:border-0">
              <div className="w-48 text-sm text-gray-300 flex-shrink-0">{r.category}</div>
              <div className="flex-1">
                <div className="w-full bg-white/[0.05] rounded-full h-2.5">
                  <div className={`h-2.5 rounded-full ${r.score >= 7 ? 'bg-purple-500' : 'bg-red-500'}`} style={{ width: `${r.score * 10}%` }} />
                </div>
              </div>
              <div className="w-12 text-right text-sm font-bold text-white">{r.score}</div>
              <div className="w-72 text-xs text-gray-500 hidden lg:block">{r.note}</div>
            </div>
          ))}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <span className="font-bold text-lg">Overall Score</span>
            <span className="text-2xl font-extrabold text-purple-400">7.8 / 10</span>
          </div>
        </div>
      </section>

      {/* Payout Analysis */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-4">Payout Analysis</h2>
        <p className="text-gray-400 text-sm mb-8 max-w-3xl">
          ExpertOption&apos;s payouts vary significantly based on your account tier, the asset class, and market volatility.
          Higher-tier accounts unlock substantially better returns — a major incentive to deposit more, though we advise caution
          given the lack of regulation.
        </p>
        <div className="glass-card p-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.08]">
                <th className="text-left py-3 px-3 text-gray-400 font-medium">Asset Class</th>
                <th className="text-center py-3 px-3 text-gray-400 font-medium">Basic (80%)</th>
                <th className="text-center py-3 px-3 text-gray-400 font-medium">Silver (84%)</th>
                <th className="text-center py-3 px-3 text-gray-400 font-medium">Gold (88%)</th>
                <th className="text-center py-3 px-3 text-purple-400 font-medium">Exclusive (95%)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { asset: 'Major Forex (EUR/USD, GBP/USD)', basic: '75-80%', silver: '80-84%', gold: '84-88%', exclusive: '90-95%' },
                { asset: 'Minor Forex (AUD/NZD, EUR/GBP)', basic: '70-78%', silver: '75-82%', gold: '80-86%', exclusive: '85-92%' },
                { asset: 'Cryptocurrencies (BTC, ETH)', basic: '70-75%', silver: '75-80%', gold: '80-85%', exclusive: '85-90%' },
                { asset: 'Stocks (Apple, Google, Tesla)', basic: '65-75%', silver: '70-80%', gold: '75-85%', exclusive: '80-90%' },
                { asset: 'Commodities (Gold, Oil)', basic: '70-78%', silver: '75-82%', gold: '80-86%', exclusive: '85-92%' },
                { asset: 'Indices (S&P 500, NASDAQ)', basic: '65-75%', silver: '70-80%', gold: '78-85%', exclusive: '82-90%' },
              ].map((row) => (
                <tr key={row.asset} className="border-b border-white/[0.04] last:border-0">
                  <td className="py-3 px-3 text-gray-300">{row.asset}</td>
                  <td className="py-3 px-3 text-center text-gray-400">{row.basic}</td>
                  <td className="py-3 px-3 text-center text-gray-400">{row.silver}</td>
                  <td className="py-3 px-3 text-center text-yellow-500">{row.gold}</td>
                  <td className="py-3 px-3 text-center text-purple-400 font-semibold">{row.exclusive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 border border-amber-500/20 rounded-lg p-4">
          <p className="text-xs text-gray-400">
            <strong className="text-amber-400">Important:</strong> Payouts fluctuate based on market conditions and time of day.
            The figures above represent typical ranges we observed during testing. Weekend payouts tend to be lower due to
            reduced liquidity. ExpertOption does not guarantee specific payout percentages.
          </p>
        </div>
      </section>

      {/* Deposits & Withdrawals */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-4">Deposits &amp; Withdrawals</h2>
        <p className="text-gray-400 text-sm mb-8 max-w-3xl">
          ExpertOption supports a wide range of payment methods with a low $10 minimum deposit. Withdrawal processing
          varies by account tier — Exclusive accounts get priority processing, while Basic accounts may wait longer.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-emerald-400 mb-4 text-lg">Deposit Methods</h3>
            <div className="space-y-3">
              {[
                { method: 'Visa / Mastercard', min: '$10', time: 'Instant', fee: 'Free' },
                { method: 'Skrill', min: '$10', time: 'Instant', fee: 'Free' },
                { method: 'Neteller', min: '$10', time: 'Instant', fee: 'Free' },
                { method: 'Perfect Money', min: '$10', time: 'Instant', fee: 'Free' },
                { method: 'Bitcoin (BTC)', min: '$10', time: '10-60 min', fee: 'Network fee only' },
                { method: 'Ethereum (ETH)', min: '$10', time: '5-30 min', fee: 'Network fee only' },
                { method: 'USDT (Tether)', min: '$10', time: '5-30 min', fee: 'Network fee only' },
                { method: 'Local Bank Transfer', min: '$10', time: '1-3 days', fee: 'Varies' },
                { method: 'UPI (India)', min: '$10', time: 'Instant', fee: 'Free' },
              ].map((d) => (
                <div key={d.method} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
                  <span className="text-sm text-gray-300">{d.method}</span>
                  <div className="flex gap-4 text-xs">
                    <span className="text-gray-500">Min: {d.min}</span>
                    <span className="text-gray-500">{d.time}</span>
                    <span className="text-emerald-400">{d.fee}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-blue-400 mb-4 text-lg">Withdrawal Details</h3>
            <div className="space-y-3">
              {[
                { method: 'Visa / Mastercard', min: '$10', time: '2-5 business days', fee: 'Free' },
                { method: 'Skrill', min: '$10', time: '1-3 business days', fee: 'Free' },
                { method: 'Neteller', min: '$10', time: '1-3 business days', fee: 'Free' },
                { method: 'Perfect Money', min: '$10', time: '1-3 business days', fee: 'Free' },
                { method: 'Bitcoin (BTC)', min: '$10', time: '1-3 business days', fee: 'Free' },
                { method: 'Ethereum (ETH)', min: '$10', time: '1-3 business days', fee: 'Free' },
                { method: 'USDT (Tether)', min: '$10', time: '1-3 business days', fee: 'Free' },
                { method: 'Bank Wire', min: '$50', time: '3-7 business days', fee: 'Bank fees may apply' },
              ].map((w) => (
                <div key={w.method} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
                  <span className="text-sm text-gray-300">{w.method}</span>
                  <div className="flex gap-4 text-xs">
                    <span className="text-gray-500">Min: {w.min}</span>
                    <span className="text-gray-500">{w.time}</span>
                    <span className="text-blue-400">{w.fee}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-white/[0.03] rounded-lg p-3">
              <p className="text-xs text-gray-400">
                <strong className="text-amber-400">Verification required:</strong> ExpertOption requires identity verification
                before your first withdrawal. Documents may include government ID and proof of address.
                Some users report this process taking up to 30 days, though Gold and Exclusive accounts
                receive priority processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Markets & Assets */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-4">Markets &amp; Assets</h2>
        <p className="text-gray-400 text-sm mb-8 max-w-3xl">
          ExpertOption offers 100+ tradeable instruments across six asset classes. The number of assets available
          to you depends on your account tier — Basic accounts are limited to ~10 assets, while Exclusive accounts
          unlock the full catalog.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              category: 'Forex Pairs',
              count: '30+',
              color: 'text-blue-400',
              examples: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD', 'EUR/GBP', 'USD/CHF', 'NZD/USD', 'EUR/JPY', 'GBP/JPY', 'AUD/NZD'],
              note: 'Major and minor pairs available. No exotic pairs.',
            },
            {
              category: 'Cryptocurrencies',
              count: '15+',
              color: 'text-orange-400',
              examples: ['Bitcoin', 'Ethereum', 'Litecoin', 'Ripple (XRP)', 'Bitcoin Cash', 'Dash', 'Zcash', 'Monero', 'IOTA', 'EOS'],
              note: 'Available 24/7 including weekends. Higher volatility.',
            },
            {
              category: 'Stocks',
              count: '30+',
              color: 'text-emerald-400',
              examples: ['Apple', 'Google', 'Amazon', 'Tesla', 'Microsoft', 'Facebook (Meta)', 'Netflix', 'Alibaba', 'NVIDIA', 'Intel'],
              note: 'US and international stocks. Trading hours apply.',
            },
            {
              category: 'Commodities',
              count: '10+',
              color: 'text-yellow-500',
              examples: ['Gold', 'Silver', 'Crude Oil (WTI)', 'Brent Oil', 'Natural Gas', 'Platinum', 'Palladium', 'Copper'],
              note: 'Popular safe-haven and energy assets.',
            },
            {
              category: 'Indices',
              count: '10+',
              color: 'text-purple-400',
              examples: ['S&P 500', 'NASDAQ 100', 'Dow Jones', 'FTSE 100', 'DAX 30', 'Nikkei 225', 'CAC 40', 'Hang Seng'],
              note: 'Major global indices. Session hours vary.',
            },
            {
              category: 'ETFs & Other',
              count: '5+',
              color: 'text-pink-400',
              examples: ['SPY', 'QQQ', 'GLD', 'USO', 'Various sector ETFs'],
              note: 'Limited selection. Exclusive accounts only.',
            },
          ].map((asset) => (
            <div key={asset.category} className="glass-card p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className={`font-bold ${asset.color}`}>{asset.category}</h3>
                <span className="text-xs bg-white/[0.05] px-2 py-1 rounded text-gray-400">{asset.count}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {asset.examples.map((ex) => (
                  <span key={ex} className="text-xs bg-white/[0.03] px-2 py-0.5 rounded text-gray-400">{ex}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{asset.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 border border-amber-500/20 rounded-lg p-4">
          <p className="text-xs text-gray-400">
            <strong className="text-amber-400">Account tier limitation:</strong> Basic accounts only have access to ~10 assets.
            Silver unlocks ~30, Gold ~50, and Exclusive gives access to the full 100+ catalog. This is more restrictive
            than competitors like{' '}
            <Link href={`/${locale}/pocket-option`} className="text-blue-400 hover:underline">Pocket Option</Link> (180+ assets for all users)
            or{' '}
            <Link href={`/${locale}/iq-option`} className="text-blue-400 hover:underline">IQ Option</Link> (250+ assets for all users).
          </p>
        </div>
      </section>

      {/* Social Trading Feature — Expanded */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-4">Social Trading — ExpertOption&apos;s Key Feature</h2>
        <p className="text-gray-400 text-sm mb-8 max-w-3xl">
          ExpertOption&apos;s standout feature is its social trading overlay. Unlike traditional platforms where you trade in isolation,
          ExpertOption lets you see what the community is doing in real-time. Here&apos;s a detailed breakdown of every social feature:
        </p>
        <div className="glass-card p-6">
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { feature: 'Live Trade Feed', desc: 'See what assets others are trading, direction (up/down), and amounts — in real-time on the chart. Each trade appears as a live notification overlay.' },
              { feature: 'Sentiment Indicator', desc: 'Shows the percentage of traders going UP vs DOWN on each asset. Useful for contrarian strategies or confirming your bias before entering a position.' },
              { feature: 'Top Trader Profiles', desc: 'View profiles of successful traders, their win rates, recent trading history, and preferred assets. Learn from patterns in their decision-making.' },
              { feature: 'Trade Alerts', desc: 'Get notified when top-performing traders make moves on assets you\'re watching. Helpful for timing your entries around high-activity periods.' },
              { feature: 'Community Chat', desc: 'In-platform chat allows traders to discuss strategies, share analysis, and coordinate ideas. Moderated but active, especially during high-volatility sessions.' },
              { feature: 'Leaderboards', desc: 'Weekly and monthly rankings of top performers by profit percentage. Adds a competitive element and helps identify consistently successful traders to follow.' },
            ].map((f) => (
              <div key={f.feature} className="bg-white/[0.03] rounded-lg p-4">
                <h4 className="font-semibold text-purple-400 text-sm">{f.feature}</h4>
                <p className="text-xs text-gray-400 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Social vs Copy Trading Comparison */}
          <div className="border border-purple-500/20 rounded-lg p-5 mb-4">
            <h4 className="font-bold text-white mb-3">ExpertOption Social Trading vs Pocket Option Copy Trading</h4>
            <p className="text-sm text-gray-400 mb-4">
              These are fundamentally different features despite both being &quot;social.&quot; Understanding the difference is critical
              before choosing a platform:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/[0.03] rounded-lg p-4">
                <h5 className="font-semibold text-purple-400 text-sm mb-2">ExpertOption — Observational</h5>
                <ul className="space-y-2">
                  {[
                    'See what others trade in real-time on charts',
                    'View sentiment (% up vs % down) per asset',
                    'Browse top trader profiles and their stats',
                    'You must manually execute every trade yourself',
                    'More educational — learn by watching patterns',
                    'No automation — requires active screen time',
                    'Free for all account types',
                  ].map((item) => (
                    <li key={item} className="text-xs text-gray-400 flex gap-1.5">
                      <span className="text-purple-400 flex-shrink-0">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/[0.03] rounded-lg p-4">
                <h5 className="font-semibold text-blue-400 text-sm mb-2">Pocket Option — Automated Copy</h5>
                <ul className="space-y-2">
                  {[
                    'Select a trader and auto-copy their trades',
                    'Trades execute automatically — no manual action',
                    'Set risk parameters (max trade size, stop loss)',
                    'Track copied trader performance in real-time',
                    'More passive — works while you\'re away',
                    'Risk of losses if copied trader performs poorly',
                    'Available to all users (no tier restriction)',
                  ].map((item) => (
                    <li key={item} className="text-xs text-gray-400 flex gap-1.5">
                      <span className="text-blue-400 flex-shrink-0">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              <strong className="text-white">Bottom line:</strong> If you want hands-off automated trading, choose{' '}
              <Link href={`/${locale}/pocket-option`} className="text-blue-400 hover:underline">Pocket Option&apos;s copy trading</Link>.
              If you prefer learning from the community and making your own decisions, ExpertOption&apos;s social overlay is more suitable.
              Read more in our{' '}
              <Link href={`/${locale}/blog/binary-options-copy-trading`} className="text-blue-400 hover:underline">copy trading guide</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Account Types</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { tier: 'Basic', deposit: '$10', payout: '80%', perks: ['10 assets', 'Basic education'] },
            { tier: 'Silver', deposit: '$500', payout: '84%', perks: ['30 assets', 'Daily analysis', 'Personal manager'] },
            { tier: 'Gold', deposit: '$2,500', payout: '88%', perks: ['50 assets', 'Priority withdrawal', 'Insurance'] },
            { tier: 'Exclusive', deposit: '$5,000+', payout: '95%', perks: ['100+ assets', 'Fastest withdrawals', 'VIP events', 'Full insurance'] },
          ].map((t) => (
            <div key={t.tier} className={`glass-card p-5 ${t.tier === 'Exclusive' ? 'border border-purple-500/30' : ''}`}>
              <h3 className={`font-bold mb-1 ${t.tier === 'Exclusive' ? 'text-purple-400' : t.tier === 'Gold' ? 'text-yellow-500' : 'text-gray-300'}`}>{t.tier}</h3>
              <p className="text-xs text-gray-500 mb-2">Min: {t.deposit}</p>
              <div className="text-lg font-bold text-white mb-3">Up to {t.payout}</div>
              <ul className="space-y-1">
                {t.perks.map((p) => (
                  <li key={p} className="text-xs text-gray-400 flex gap-1.5">
                    <span className="text-emerald-400">✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Support */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-4">Customer Support</h2>
        <p className="text-gray-400 text-sm mb-8 max-w-3xl">
          ExpertOption provides support through multiple channels. Response quality varies — Gold and Exclusive accounts
          get access to a dedicated personal manager, while Basic users rely on general support channels.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              channel: 'Live Chat',
              availability: '24/7',
              responseTime: '1-5 minutes',
              quality: 'Good',
              color: 'text-emerald-400',
              notes: 'Best option for quick questions. Available in multiple languages. Bot-assisted initially, escalates to human agent.',
            },
            {
              channel: 'Email Support',
              availability: 'Business hours',
              responseTime: '24-48 hours',
              quality: 'Average',
              color: 'text-blue-400',
              notes: 'support@expertoption.com. Better for complex issues requiring documentation. Template responses common for first reply.',
            },
            {
              channel: 'Phone Support',
              availability: 'Business hours',
              responseTime: 'Varies',
              quality: 'Limited',
              color: 'text-yellow-500',
              notes: 'Only available for Gold and Exclusive accounts. Not widely advertised. Quality depends on region.',
            },
            {
              channel: 'Personal Manager',
              availability: 'Business hours',
              responseTime: '< 1 hour',
              quality: 'Good',
              color: 'text-purple-400',
              notes: 'Dedicated account manager for Silver+ accounts. Direct communication channel. Assists with withdrawals and issues.',
            },
          ].map((s) => (
            <div key={s.channel} className="glass-card p-5">
              <h3 className={`font-bold ${s.color} mb-2`}>{s.channel}</h3>
              <div className="space-y-1 mb-3">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Availability</span>
                  <span className="text-gray-300">{s.availability}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Response Time</span>
                  <span className="text-gray-300">{s.responseTime}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Quality</span>
                  <span className="text-gray-300">{s.quality}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">{s.notes}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 glass-card p-4">
          <p className="text-xs text-gray-400">
            <strong className="text-white">Our experience:</strong> Live chat was responsive and helpful for basic questions (1-3 minute wait).
            Email support was slower and initial replies were clearly templated. The lack of a comprehensive FAQ or help center
            is a notable gap compared to{' '}
            <Link href={`/${locale}/iq-option`} className="text-blue-400 hover:underline">IQ Option</Link> or{' '}
            <Link href={`/${locale}/deriv`} className="text-blue-400 hover:underline">Deriv</Link>,
            both of which have extensive self-service knowledge bases.
          </p>
        </div>
      </section>

      {/* ExpertOption vs Competitors */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-4">ExpertOption vs Competitors</h2>
        <p className="text-gray-400 text-sm mb-8 max-w-3xl">
          How does ExpertOption stack up against the top-rated brokers on our list? Here&apos;s a direct comparison
          across the metrics that matter most.
        </p>
        <div className="glass-card p-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.08]">
                <th className="text-left py-3 px-3 text-gray-400 font-medium">Feature</th>
                <th className="text-center py-3 px-3 text-purple-400 font-medium">ExpertOption</th>
                <th className="text-center py-3 px-3 text-blue-400 font-medium">Pocket Option</th>
                <th className="text-center py-3 px-3 text-emerald-400 font-medium">Quotex</th>
                <th className="text-center py-3 px-3 text-yellow-500 font-medium">IQ Option</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Our Score', expert: '7.8/10', pocket: '9.5/10', quotex: '9.4/10', iq: '9.2/10' },
                { feature: 'Min. Deposit', expert: '$10', pocket: '$5', quotex: '$10', iq: '$10' },
                { feature: 'Max. Payout', expert: 'Up to 95%', pocket: 'Up to 92%', quotex: 'Up to 98%', iq: 'Up to 95%' },
                { feature: 'Total Assets', expert: '100+', pocket: '180+', quotex: '400+', iq: '250+' },
                { feature: 'Regulation', expert: 'None ❌', pocket: 'IFMRRC', quotex: 'None', iq: 'CySEC ✓' },
                { feature: 'Copy Trading', expert: 'No (social only)', pocket: 'Yes (auto-copy)', quotex: 'No', iq: 'No' },
                { feature: 'Social Features', expert: 'Yes (best)', pocket: 'Yes', quotex: 'Signals', iq: 'Community' },
                { feature: 'Demo Account', expert: '$10K virtual', pocket: '$50K virtual', quotex: '$10K virtual', iq: '$10K virtual' },
                { feature: 'Min. Trade', expert: '$1', pocket: '$1', quotex: '$1', iq: '$1' },
                { feature: 'Mobile App', expert: 'Good', pocket: 'Excellent', quotex: 'Good', iq: 'Excellent' },
                { feature: 'Tournaments', expert: 'No', pocket: 'Yes (daily)', quotex: 'Yes', iq: 'Yes' },
                { feature: 'Fund Protection', expert: 'None', pocket: 'IFMRRC', quotex: 'None', iq: 'ICF (EU)' },
              ].map((row) => (
                <tr key={row.feature} className="border-b border-white/[0.04] last:border-0">
                  <td className="py-3 px-3 text-gray-300 font-medium">{row.feature}</td>
                  <td className="py-3 px-3 text-center text-gray-400">{row.expert}</td>
                  <td className="py-3 px-3 text-center text-gray-400">{row.pocket}</td>
                  <td className="py-3 px-3 text-center text-gray-400">{row.quotex}</td>
                  <td className="py-3 px-3 text-center text-gray-400">{row.iq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          For a full side-by-side analysis of all brokers, visit our{' '}
          <Link href={`/${locale}/compare`} className="text-blue-400 hover:underline">broker comparison page</Link>.
        </p>
      </section>

      {/* Better Alternatives — Expanded */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Should You Choose ExpertOption?</h2>
        <div className="glass-card p-6">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            We believe in honest reviews. ExpertOption has unique social features, but the lack of any regulation is a serious concern.
            Here&apos;s how it compares to alternatives with similar features:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/[0.03] rounded-lg p-4 text-center">
              <h4 className="font-semibold text-blue-400 text-sm mb-2">Want Copy Trading?</h4>
              <p className="text-xs text-gray-400 mb-3">Choose <strong className="text-white">Pocket Option</strong> — automated copy trading + IFMRRC regulation</p>
              <Link href={`/${locale}/pocket-option`} className="text-xs text-blue-400 hover:underline">
                Read Pocket Option Review →
              </Link>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4 text-center">
              <h4 className="font-semibold text-emerald-400 text-sm mb-2">Want Trust + Safety?</h4>
              <p className="text-xs text-gray-400 mb-3">Choose <strong className="text-white">Deriv</strong> — MFSA Tier-1 + 26 years operating</p>
              <Link href={`/${locale}/deriv`} className="text-xs text-emerald-400 hover:underline">
                Read Deriv Review →
              </Link>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4 text-center">
              <h4 className="font-semibold text-green-400 text-sm mb-2">Want Best Platform?</h4>
              <p className="text-xs text-gray-400 mb-3">Choose <strong className="text-white">IQ Option</strong> — CySEC license + award-winning UX</p>
              <Link href={`/${locale}/iq-option`} className="text-xs text-blue-400 hover:underline">
                Read IQ Option Review →
              </Link>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            ExpertOption is best for traders who specifically want the social trading overlay and are comfortable with the
            regulatory risk. For everyone else, the alternatives above offer better protection. See our{' '}
            <Link href={`/${locale}/blog/best-binary-options-brokers`} className="text-blue-400 hover:underline">
              best binary options brokers guide
            </Link>{' '}
            for the full ranking.
          </p>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="section-container py-16">
        <div className="glass-card p-8 md:p-10 border border-purple-500/20">
          <h2 className="text-2xl font-bold mb-4">Final Verdict: 7.8/10</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            ExpertOption earns points for its <strong className="text-white">innovative social trading features</strong>, competitive payouts,
            and large user base. The ability to see what 40M+ traders are doing in real-time is genuinely useful for learning
            and sentiment analysis.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            However, the <strong className="text-red-400">complete lack of regulation</strong> puts it at the bottom of our rankings.
            We can&apos;t recommend it as a primary broker. Use it as a supplementary platform for social insights,
            but keep your main trading funds with a more regulated broker like Quotex, Pocket Option, IQ Option, or Deriv.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CtaButton broker="expertOption" label="Open ExpertOption Account" campaign="expert_verdict" />
            <CtaButton broker="expertOption" type="demo" label="Try Free Demo ($10K)" variant="secondary" campaign="expert_verdict" />
          </div>
        </div>
      </section>

      {/* Related Reviews & Guides */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-8">Related Reviews &amp; Guides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Pocket Option Review 2026', desc: 'Our #1 rated broker — copy trading, tournaments, 180+ assets', href: `/${locale}/pocket-option`, color: 'text-blue-400' },
            { title: 'Quotex Review 2026', desc: '#2 rated — up to 98% payouts, fast execution, signal tools', href: `/${locale}/quotex`, color: 'text-emerald-400' },
            { title: 'IQ Option Review 2026', desc: 'CySEC-regulated, award-winning platform, 250+ assets', href: `/${locale}/iq-option`, color: 'text-green-400' },
            { title: 'Deriv Review 2026', desc: 'MFSA Tier-1 regulated, 26 years operating, most trusted', href: `/${locale}/deriv`, color: 'text-yellow-500' },
            { title: 'Compare All Brokers', desc: 'Side-by-side comparison of all 7 brokers we review', href: `/${locale}/compare`, color: 'text-purple-400' },
            { title: 'Best Binary Options Brokers', desc: 'Complete ranked guide to the top platforms in 2026', href: `/${locale}/blog/best-binary-options-brokers`, color: 'text-pink-400' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="glass-card p-5 hover:border-white/[0.15] transition-colors group">
              <h3 className={`font-bold ${link.color} mb-1 group-hover:underline`}>{link.title}</h3>
              <p className="text-xs text-gray-500">{link.desc}</p>
            </Link>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          {[
            { title: 'Binary Options Regulation Guide', desc: 'Understanding licensing, fund protection, and what to look for in a regulated broker', href: `/${locale}/blog/binary-options-regulation` },
            { title: 'Copy Trading vs Social Trading', desc: 'Automated copy trading vs observational social features — which suits your style?', href: `/${locale}/blog/binary-options-copy-trading` },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="glass-card p-5 hover:border-white/[0.15] transition-colors group">
              <h3 className="font-bold text-gray-300 mb-1 group-hover:underline">{link.title}</h3>
              <p className="text-xs text-gray-500">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Guides */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">ExpertOption Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Binary Options Strategy for Beginners', href: `/${locale}/blog/binary-options-strategy-beginners`, desc: 'Essential strategies for new binary options traders' },
              { title: 'Binary Options Demo Account Guide', href: `/${locale}/blog/binary-options-demo-account`, desc: 'How to practice trading risk-free with demo accounts' },
              { title: 'Binary Options Copy Trading', href: `/${locale}/blog/binary-options-copy-trading`, desc: 'Learn how copy trading works and which brokers offer it' },
              { title: 'Binary Options Mobile Trading', href: `/${locale}/blog/binary-options-mobile-trading`, desc: 'Trade on the go — mobile platform tips & best apps' },
              { title: 'OTC Trading Binary Options', href: `/${locale}/blog/otc-trading-binary-options`, desc: 'How OTC markets work and when to trade them' },
              { title: 'How to Withdraw from Binary Options', href: `/${locale}/blog/how-to-withdraw-binary-options`, desc: 'Step-by-step withdrawal guide with processing times' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="glass-card p-4 hover:bg-white/[0.05] transition-colors group">
                <h3 className="font-semibold text-sm text-white group-hover:text-emerald-400 transition-colors">{link.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="section-container py-8 pb-16">
        <div className="border border-red-500/30 bg-red-500/[0.03] rounded-xl p-6">
          <h2 className="text-lg font-bold text-red-400 mb-3">Risk Disclaimer</h2>
          <p className="text-xs text-gray-400 leading-relaxed mb-3">
            <strong className="text-gray-300">Binary options trading carries significant risk.</strong> You can lose your entire invested capital.
            These products are not suitable for all investors. Only trade with money you can afford to lose completely.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed mb-3">
            <strong className="text-gray-300">ExpertOption is unregulated.</strong> EOLabs LLC is registered in Saint Vincent and the Grenadines (SVG)
            and is not supervised by any financial regulatory authority. Your funds are not protected by any investor compensation
            scheme. There is no guarantee of fund segregation or dispute resolution.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed mb-3">
            Past performance of traders shown in ExpertOption&apos;s social feed does not guarantee future results. Social trading
            features are for informational purposes only and should not be considered investment advice.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-gray-300">Affiliate disclosure:</strong> BinaryBrokerHub may receive compensation from brokers featured on this site.
            This does not influence our reviews or rankings — our methodology is transparent and score-based.
            See our{' '}
            <Link href={`/${locale}/blog/binary-options-regulation`} className="text-blue-400 hover:underline">regulation guide</Link>{' '}
            for more information on broker safety.
          </p>
        </div>
      </section>
    </div>
  );
}
