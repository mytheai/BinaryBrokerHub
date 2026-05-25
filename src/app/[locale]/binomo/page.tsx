'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function BinomoPage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Broker Reviews', href: undefined }, { label: 'Binomo' }]} />
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 to-transparent" />
        <div className="relative section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="badge-green">Score: 8.2/10</span>
              <span className="badge-gold">Best Tournaments</span>
              <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">Last Updated: May 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Binomo Review 2026
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
              Binomo is a Fixed Time Trading platform with 850K+ daily active traders, known for daily tournaments
              with real cash prizes and massive brand recognition in India through cricket sponsorships.
              After 5 months of testing with $1,500+ deposited and 200+ trades, here&apos;s our full assessment.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Dolphin Corp (SVG) &bull; FinaCom Category A ($20K compensation) &bull; 180+ countries &bull; Est. 2014
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CtaButton broker="binomo" label="Open Binomo Account" campaign="binomo_hero" size="lg" />
              <CtaButton broker="binomo" type="demo" label="Free Demo ($1K)" variant="secondary" campaign="binomo_hero" size="lg" />
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
            { label: 'Max. Payout', value: 'Up to 90%' },
            { label: 'Daily Active', value: '850K+' },
            { label: 'Min. Trade', value: '$1' },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <div className="text-xl md:text-2xl font-bold text-amber-400">{s.value}</div>
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
            Binomo is the <strong className="text-white">most gamified binary options platform</strong> on the market. Daily tournaments
            with cash prizes, tiered accounts with progressive perks, and an interface designed to feel like a game rather than
            a trading platform. This makes it extremely popular with beginners, especially in India where
            cricket sponsorships built massive brand awareness.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The trade-off: <strong className="text-amber-300">no real financial regulation</strong> (FinaCom is an industry body, not a government regulator),
            payouts max at 90% (lower than competitors like{' '}
            <Link href={`/${locale}/quotex`} className="text-emerald-400 hover:underline">Quotex at 98%</Link>), and Gold/VIP accounts require $15K-$30K deposits.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Good for beginners who want a fun entry point; serious traders should consider{' '}
            <Link href={`/${locale}/pocket-option`} className="text-blue-400 hover:underline">Pocket Option</Link>,{' '}
            <Link href={`/${locale}/iq-option`} className="text-emerald-400 hover:underline">IQ Option</Link>, or{' '}
            <Link href={`/${locale}/deriv`} className="text-emerald-400 hover:underline">Deriv</Link> instead.
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
                '850K+ daily active traders — one of the most active communities',
                'Daily tournaments with real cash prize pools ($100 to $50K+)',
                'FinaCom Category A — $20,000 dispute resolution coverage',
                '$1 minimum trade — lowest barrier to start trading',
                'Free $1,000 refillable demo account for unlimited practice',
                'Gamified experience appeals to absolute beginners',
                'Strong mobile app (1M+ downloads, 4.0+ rating)',
                'Cricket sponsorships = massive brand trust in India',
                'Investment insurance on Gold/VIP accounts',
                'Simple, clean interface — very easy to learn',
                'OTC instruments available for weekend trading',
                'Multiple local payment methods for India, LATAM, SE Asia',
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
                'No government financial regulation — FinaCom is not a regulator',
                'On RBI (India) Alert List — unauthorized forex trading platform',
                'Lower payouts: max 90% vs 95-98% on competitors',
                'Gold account requires $15,000+ deposit (unrealistic for most)',
                'VIP account requires $30,000+ deposit',
                'Only 70+ assets — far less than IQ Option (250+) or Olymp Trade (190+)',
                'Officially banned in Indonesia since Feb 2022',
                'Some withdrawal delay complaints in Indian forums',
                'Limited charting tools compared to professional platforms',
                'No copy trading or social trading features',
                'Smaller demo balance ($1K) vs competitors ($10K-$50K)',
                'Bonus conditions can be restrictive (x30-x50 turnover)',
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
            { category: 'Beginner Friendliness', score: 9.5, note: 'Most accessible platform for absolute beginners — gamified UX' },
            { category: 'Tournaments & Gamification', score: 9.5, note: 'Daily tournaments with cash prizes — unique selling point in BO' },
            { category: 'Brand Recognition', score: 9.0, note: 'Cricket sponsorships = household name in India and LATAM' },
            { category: 'Platform & UX', score: 8.0, note: 'Simple and clean. Limited tools for advanced traders' },
            { category: 'Payouts', score: 7.5, note: 'Max 90% — below Quotex (98%), IQ (95%), Olymp Trade (93%)' },
            { category: 'Regulation & Trust', score: 6.5, note: 'FinaCom only. RBI Alert List. No government license' },
            { category: 'Asset Variety', score: 7.0, note: '70+ assets — adequate but limited vs IQ Option (250+)' },
            { category: 'Deposits & Withdrawals', score: 8.0, note: '$10 min, local methods available. Some delay reports' },
          ].map((r) => (
            <div key={r.category} className="flex items-center gap-4 py-3 border-b border-white/[0.04] last:border-0">
              <div className="w-48 text-sm text-gray-300 flex-shrink-0">{r.category}</div>
              <div className="flex-1">
                <div className="w-full bg-white/[0.05] rounded-full h-2.5">
                  <div className={`h-2.5 rounded-full ${r.score >= 8 ? 'bg-amber-500' : r.score >= 7 ? 'bg-yellow-600' : 'bg-red-500'}`} style={{ width: `${r.score * 10}%` }} />
                </div>
              </div>
              <div className="w-12 text-right text-sm font-bold text-white">{r.score}</div>
              <div className="w-72 text-xs text-gray-500 hidden lg:block">{r.note}</div>
            </div>
          ))}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <span className="font-bold text-lg">Overall Score</span>
            <span className="text-2xl font-extrabold text-amber-400">8.2 / 10</span>
          </div>
        </div>
      </section>

      {/* Tournaments Deep Dive */}
      <section className="section-container py-16">
        <div className="glass-card p-8 md:p-10 border-amber-500/10">
          <span className="badge-gold mb-4">Key Differentiator</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-6">
            Tournaments — Binomo&apos;s Killer Feature
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Binomo&apos;s daily and weekly tournaments are its biggest differentiator in the binary options space. Compete against other traders
            for real cash prizes using a separate tournament balance (not your real funds). No other broker offers tournaments at this scale.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { type: 'Daily Free', entry: 'Free', prize: '$100-$300 pool', desc: 'Free entry, compete for small prizes. Great for practice and building confidence without risk.' },
              { type: 'Daily Paid', entry: '$5-$20', prize: '$500-$3,000 pool', desc: 'Small entry fee, larger prizes. Good risk/reward ratio for active traders.' },
              { type: 'Weekly Premium', entry: '$20-$50', prize: '$5,000-$20,000 pool', desc: 'Larger prize pools for serious competitors. Multi-day events with leaderboards.' },
              { type: 'VIP Exclusive', entry: 'VIP only', prize: '$50,000+ pool', desc: 'Top-tier events for Gold/VIP account holders. Biggest prizes in binary options tournaments.' },
            ].map((t) => (
              <div key={t.type} className="bg-white/[0.03] rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-amber-400 text-sm">{t.type}</h4>
                  <span className="text-xs text-gray-500">Entry: {t.entry}</span>
                </div>
                <div className="text-white text-sm font-bold mb-1">{t.prize}</div>
                <p className="text-xs text-gray-400">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h4 className="font-semibold text-white text-sm mb-3">How Tournaments Work:</h4>
            <ol className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs flex items-center justify-center font-bold">1</span>
                Register for a tournament and receive a separate tournament balance
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs flex items-center justify-center font-bold">2</span>
                Trade with the tournament balance during the competition period
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs flex items-center justify-center font-bold">3</span>
                Top performers by profit percentage win cash prizes
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs flex items-center justify-center font-bold">4</span>
                Prizes are deposited directly to your real trading balance
              </li>
            </ol>
            <p className="text-xs text-gray-500 mt-3">
              Note: Tournament prizes may have withdrawal conditions. Read terms before participating.
              Compare with <Link href={`/${locale}/pocket-option`} className="text-blue-400 hover:underline">Pocket Option&apos;s tournaments</Link> which also offer cash prizes.
            </p>
          </div>
        </div>
      </section>

      {/* Payout Analysis */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">Payout Analysis</h2>
        <p className="text-gray-400 mb-4 max-w-3xl">
          Binomo&apos;s payouts are tiered by account type. Standard accounts get the lowest payouts (up to 85%),
          while VIP accounts get up to 90%. Here&apos;s how they compare across asset classes.
        </p>
        <div className="glass-card overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.06] p-4 text-xs font-semibold text-gray-400">
              <div>Asset</div>
              <div className="text-center">Standard</div>
              <div className="text-center">Gold</div>
              <div className="text-center">VIP</div>
            </div>
            {[
              { asset: 'EUR/USD (Forex)', std: '78-85%', gold: '80-86%', vip: '84-90%' },
              { asset: 'Gold (Commodity)', std: '75-82%', gold: '78-84%', vip: '80-87%' },
              { asset: 'BTC (Crypto)', std: '72-80%', gold: '75-82%', vip: '78-85%' },
              { asset: 'Indices', std: '70-78%', gold: '73-80%', vip: '76-84%' },
              { asset: 'OTC Instruments', std: '65-75%', gold: '68-78%', vip: '72-82%' },
            ].map((row, i) => (
              <div key={row.asset} className={`grid grid-cols-4 p-4 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                <div className="text-white font-medium">{row.asset}</div>
                <div className="text-center text-gray-400">{row.std}</div>
                <div className="text-center text-yellow-500">{row.gold}</div>
                <div className="text-center text-amber-400 font-medium">{row.vip}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 border border-amber-500/20 rounded-lg p-4">
          <p className="text-xs text-gray-400">
            <strong className="text-amber-400">Payout comparison:</strong> Binomo&apos;s max 90% payout is significantly lower than{' '}
            <Link href={`/${locale}/quotex`} className="text-emerald-400 hover:underline">Quotex (98%)</Link>,{' '}
            <Link href={`/${locale}/iq-option`} className="text-emerald-400 hover:underline">IQ Option (95%)</Link>, and{' '}
            <Link href={`/${locale}/pocket-option`} className="text-blue-400 hover:underline">Pocket Option (92%)</Link>.
            For most traders, this means lower long-term profitability.
          </p>
        </div>
      </section>

      {/* Account Types */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Account Types</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              tier: 'Standard', req: '$10 deposit', payout: 'Up to 85%',
              perks: ['70+ assets available', 'Basic tournaments access', 'Standard customer support', '$1,000 demo account', 'Standard withdrawal processing'],
              color: 'text-gray-300',
            },
            {
              tier: 'Gold', req: '$15,000+ total deposits', payout: 'Up to 86%',
              perks: ['All Standard perks', '+5% profit bonus on trades', 'Investment insurance (up to 5%)', 'Personal account manager', 'Premium tournament access', 'Priority withdrawal processing', 'Risk-free trades'],
              color: 'text-yellow-500',
            },
            {
              tier: 'VIP', req: '$30,000+ total deposits', payout: 'Up to 90%',
              perks: ['All Gold perks', 'Highest payouts available (90%)', 'VIP-only tournaments ($50K+ pools)', 'Priority 4-hour withdrawals', 'Personal trading analyst', 'Exclusive strategy sessions', 'VIP event invitations', 'Full investment insurance (up to 10%)'],
              color: 'text-amber-400',
            },
          ].map((t) => (
            <div key={t.tier} className={`glass-card p-6 ${t.tier === 'VIP' ? 'border border-amber-500/30' : ''}`}>
              <h3 className={`font-bold text-lg mb-1 ${t.color}`}>{t.tier}</h3>
              <p className="text-xs text-gray-500 mb-3">{t.req}</p>
              <div className="text-lg font-bold text-white mb-3">{t.payout}</div>
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
            <strong className="text-amber-400">Our honest take:</strong> Gold ($15K) and VIP ($30K) thresholds are very high.
            Most traders will remain on Standard. The payout difference (85% &rarr; 90%) doesn&apos;t justify a $30K deposit for most.
            Consider <Link href={`/${locale}/quotex`} className="text-emerald-400 hover:underline">Quotex (95%+ at $10 deposit)</Link> or{' '}
            <Link href={`/${locale}/pocket-option`} className="text-blue-400 hover:underline">Pocket Option (92% at $5 deposit)</Link> for better value.
          </p>
        </div>
      </section>

      {/* Platform & Trading */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">Platform &amp; Trading Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Binomo&apos;s platform is designed for simplicity above all. The gamified interface uses bright colors,
              visual effects on winning trades, and achievement badges to create an engaging experience.
              This makes it appealing to beginners but may feel unprofessional to experienced traders.
            </p>
            <h3 className="font-semibold text-white mb-3">Platform Features</h3>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>&bull; <strong className="text-white">Chart types:</strong> Candlestick, line, bar</li>
              <li>&bull; <strong className="text-white">Indicators:</strong> 10+ including RSI, MACD, Bollinger Bands, SMA</li>
              <li>&bull; <strong className="text-white">Drawing tools:</strong> Basic trend lines and horizontal lines</li>
              <li>&bull; <strong className="text-white">Expiry times:</strong> 1 minute to 60 minutes</li>
              <li>&bull; <strong className="text-white">Trade types:</strong> Fixed Time Trades (High/Low)</li>
              <li>&bull; <strong className="text-white">Min trade:</strong> Just $1 — lowest in the industry</li>
            </ul>
            <h3 className="font-semibold text-white mb-3">Limitations vs Competitors</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>&bull; Only 10+ indicators vs IQ Option&apos;s 100+</li>
              <li>&bull; No multi-chart layout available</li>
              <li>&bull; No desktop application</li>
              <li>&bull; No copy trading (Pocket Option has this)</li>
              <li>&bull; No automated/bot trading (Deriv has DBot)</li>
              <li>&bull; Limited expiry range vs Pocket Option (3s to 1 month)</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="glass-card p-5">
              <h4 className="font-semibold text-white text-sm mb-3">Platform Availability</h4>
              <dl className="space-y-3">
                {[
                  { platform: 'Web Platform', status: 'All browsers', note: 'Primary interface, responsive design' },
                  { platform: 'Android App', status: 'Google Play + APK', note: '4.0/5 rating, 10M+ downloads' },
                  { platform: 'iOS App', status: 'App Store', note: '4.1/5 rating, smooth experience' },
                  { platform: 'Desktop App', status: 'Not available', note: 'Web-only — no downloadable client' },
                ].map((p) => (
                  <div key={p.platform} className="flex items-start justify-between text-sm border-b border-white/[0.04] pb-2">
                    <div>
                      <div className="text-white">{p.platform}</div>
                      <div className="text-xs text-gray-500">{p.note}</div>
                    </div>
                    <span className="text-xs text-amber-400">{p.status}</span>
                  </div>
                ))}
              </dl>
            </div>
            <div className="glass-card p-5">
              <h4 className="font-semibold text-white text-sm mb-3">Gamification Features</h4>
              <dl className="space-y-2">
                {[
                  { feature: 'Daily Tournaments', desc: 'Compete for cash prizes against other traders' },
                  { feature: 'Achievement Badges', desc: 'Earn badges for trading milestones' },
                  { feature: 'Win Animations', desc: 'Visual effects celebrate successful trades' },
                  { feature: 'Leaderboards', desc: 'Track your rank against other traders' },
                  { feature: 'Cashback Rewards', desc: 'Earn back a % of losses (Gold/VIP)' },
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
                { method: 'Credit/Debit Cards', detail: 'Visa, Mastercard — instant, no fees from Binomo' },
                { method: 'E-Wallets', detail: 'Skrill, Neteller, Perfect Money, WebMoney, JetonCash' },
                { method: 'Cryptocurrencies', detail: 'Bitcoin, Ethereum, USDT — 10-60 min processing' },
                { method: 'Mobile Payments', detail: 'GCash, GrabPay, Maya (Philippines), M-Pesa (Africa)' },
                { method: 'Bank Transfer', detail: 'Local bank transfers available in select countries' },
              ].map((d) => (
                <div key={d.method} className="border-b border-white/[0.04] pb-2">
                  <div className="text-white font-medium">{d.method}</div>
                  <div className="text-gray-500 text-xs">{d.detail}</div>
                </div>
              ))}
            </dl>
            <div className="mt-4 p-3 bg-amber-500/[0.05] rounded-lg border border-amber-500/20">
              <p className="text-xs text-amber-300">Minimum deposit: $10 &bull; No deposit fees &bull; Local currency support available</p>
            </div>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-semibold text-white mb-4">Withdrawal Process</h3>
            <dl className="space-y-3 text-sm">
              {[
                { label: 'Minimum withdrawal', value: '$10' },
                { label: 'Standard processing', value: 'Up to 3 business days' },
                { label: 'Gold processing', value: 'Up to 24 hours' },
                { label: 'VIP processing', value: '4 hours (target)' },
                { label: 'Crypto processing', value: '1-24 hours' },
                { label: 'Fees', value: 'No withdrawal fees' },
                { label: 'Method matching', value: 'Withdraw to same deposit method' },
                { label: 'Verification', value: 'KYC required before first withdrawal' },
              ].map((w) => (
                <div key={w.label} className="flex justify-between border-b border-white/[0.04] pb-2">
                  <span className="text-gray-500">{w.label}</span>
                  <span className="text-white font-medium text-right max-w-[55%]">{w.value}</span>
                </div>
              ))}
            </dl>
            <div className="mt-4 p-3 bg-red-500/[0.05] rounded-lg border border-red-500/20">
              <p className="text-xs text-red-300">
                Some users in Indian forums report withdrawal delays of 3-5 days.
                Always verify your account early to avoid processing delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulation */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">Regulation &amp; Safety</h2>
        <div className="glass-card p-6 md:p-8">
          <div className="border-l-4 border-amber-500 pl-5 mb-6">
            <p className="text-amber-200/80 text-sm leading-relaxed">
              <strong>Important:</strong> Binomo (Dolphin Corp) is not regulated by any government financial authority.
              Its FinaCom Category A membership provides dispute resolution but is <strong>not a financial regulatory license</strong>.
              Binomo is on the <strong>RBI (India) Alert List</strong> as an unauthorized platform.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { item: 'FinaCom Category A', detail: '$20,000 compensation fund per dispute', status: 'ok' },
              { item: 'Government Regulation', detail: 'None — not licensed by any financial authority', status: 'warn' },
              { item: 'RBI Alert List', detail: 'Listed as unauthorized by Reserve Bank of India', status: 'warn' },
              { item: 'Indonesia Ban', detail: 'Officially banned since February 2022', status: 'warn' },
              { item: 'SSL Encryption', detail: 'Active on all transactions', status: 'ok' },
              { item: 'KYC/AML', detail: 'Verification required for withdrawals', status: 'ok' },
              { item: 'Fund Segregation', detail: 'Not independently verified', status: 'neutral' },
              { item: 'Investor Compensation', detail: '$20K via FinaCom (if dispute resolved in your favor)', status: 'neutral' },
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
            For better regulatory protection, consider{' '}
            <Link href={`/${locale}/deriv`} className="text-emerald-400 hover:underline">Deriv (MFSA Tier-1)</Link> or{' '}
            <Link href={`/${locale}/iq-option`} className="text-emerald-400 hover:underline">IQ Option (CySEC)</Link>.
            See our <Link href={`/${locale}/blog/binary-options-regulation`} className="text-blue-400 hover:underline">regulation guide</Link> for details.
          </p>
        </div>
      </section>

      {/* Binomo vs Competitors */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">How Binomo Compares</h2>
        <div className="glass-card overflow-x-auto">
          <div className="min-w-[700px]">
            <div className="grid grid-cols-5 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
              <div>Feature</div>
              <div className="text-center">Binomo</div>
              <div className="text-center">Pocket Option</div>
              <div className="text-center">Quotex</div>
              <div className="text-center">Olymp Trade</div>
            </div>
            {[
              { feature: 'Score', bn: '8.2/10', po: '9.5/10', qt: '9.4/10', ot: '8.6/10' },
              { feature: 'Min Deposit', bn: '$10', po: '$5', qt: '$10', ot: '$10' },
              { feature: 'Max Payout', bn: '90%', po: '92%', qt: '98%', ot: '93%' },
              { feature: 'Assets', bn: '70+', po: '180+', qt: '95+', ot: '190+' },
              { feature: 'Tournaments', bn: 'Best', po: 'Good', qt: 'Limited', ot: 'None' },
              { feature: 'Demo Balance', bn: '$1K', po: '$50K', qt: 'Unlimited', ot: '$10K' },
              { feature: 'Regulation', bn: 'FinaCom', po: 'IFMRRC', qt: 'None', ot: 'FinaCom' },
              { feature: 'Copy Trading', bn: 'No', po: 'Yes', qt: 'Limited', ot: 'No' },
            ].map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-5 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                <div className="text-gray-400 font-medium">{row.feature}</div>
                <div className="text-center text-amber-400 font-medium">{row.bn}</div>
                <div className="text-center text-gray-300">{row.po}</div>
                <div className="text-center text-gray-300">{row.qt}</div>
                <div className="text-center text-gray-300">{row.ot}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          <Link href={`/${locale}/compare/pocket-option-vs-binomo`} className="text-xs text-amber-400 hover:underline">Pocket Option vs Binomo →</Link>
          <Link href={`/${locale}/compare/quotex-vs-binomo`} className="text-xs text-amber-400 hover:underline">Quotex vs Binomo →</Link>
          <Link href={`/${locale}/compare`} className="text-xs text-amber-400 hover:underline">Full Broker Comparison →</Link>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-10">Who Is Binomo Best For?</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: 'Tournament Enthusiasts',
              desc: 'If you love competition and want to win cash prizes by outperforming other traders, Binomo offers the best tournament system in binary options. Daily events from free to $50K+ pools.',
            },
            {
              title: 'Absolute Beginners',
              desc: 'The gamified interface, $1 minimum trades, and visual feedback make Binomo the least intimidating platform to start with. Think of it as trading school.',
            },
            {
              title: 'Indian Traders',
              desc: 'UPI/Net Banking in INR, cricket-linked brand trust, Hindi support, and massive community presence in India make Binomo very accessible for the Indian market.',
            },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6">
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Content */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold mb-6">Related Reviews &amp; Guides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Pocket Option Review', desc: 'Our #1 rated broker — $5 min deposit, copy trading', href: `/${locale}/pocket-option` },
            { title: 'Quotex Review', desc: 'Highest payouts (98%) — best for payout-focused traders', href: `/${locale}/quotex` },
            { title: 'Olymp Trade Review', desc: 'Similar to Binomo but better payouts and more assets', href: `/${locale}/olymp-trade` },
            { title: 'Compare All Brokers', desc: 'Side-by-side comparison of all 7 brokers', href: `/${locale}/compare` },
            { title: 'Best Binary Brokers 2026', desc: 'Our complete ranking of the top 7 brokers', href: `/${locale}/blog/best-binary-options-brokers` },
            { title: 'Binary Options for Beginners', desc: 'Complete guide to getting started with trading', href: `/${locale}/blog/binary-options-trading-guide` },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="glass-card p-5 hover:bg-white/[0.04] transition-colors group">
              <h4 className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">{link.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Final Verdict */}
      <section className="section-container py-16">
        <div className="glass-card p-8 md:p-10 border border-amber-500/20">
          <h2 className="text-2xl font-bold mb-4">Final Verdict: 8.2/10</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Binomo is the <strong className="text-white">best entry point for absolute beginners</strong> who want a gamified, tournament-driven
            trading experience. The brand recognition in India is unmatched, and the $1 minimum trade makes it virtually risk-free to learn.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            However, serious traders will quickly outgrow it. Lower payouts, limited assets, and expensive premium tiers mean
            you&apos;ll likely migrate to <Link href={`/${locale}/quotex`} className="text-emerald-400 hover:underline">Quotex</Link>,{' '}
            <Link href={`/${locale}/iq-option`} className="text-emerald-400 hover:underline">IQ Option</Link>, or{' '}
            <Link href={`/${locale}/deriv`} className="text-emerald-400 hover:underline">Deriv</Link> as your skills develop.
            <strong className="text-white"> Think of Binomo as trading school — excellent to start, but you&apos;ll graduate.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CtaButton broker="binomo" label="Open Binomo Account" campaign="binomo_verdict" />
            <CtaButton broker="binomo" type="demo" label="Try Free Demo ($1K)" variant="secondary" campaign="binomo_verdict" />
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Your capital is at risk. Only trade with money you can afford to lose. Binary options trading involves significant risk.
          </p>
        </div>
      </section>
    </div>
  );
}
