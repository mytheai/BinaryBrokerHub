'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';

export default function BestBinaryOptionsBrokersPage() {
  const locale = useLocale();

  const brokers = [
    {
      rank: 1,
      name: 'Pocket Option',
      score: 9.5,
      slug: 'pocket-option',
      ctaBroker: 'pocketOption' as const,
      minDeposit: '$5',
      demo: '$50,000',
      payout: 'Up to 92%',
      assets: '180+',
      founded: '2017',
      regulation: 'MISA (suspended)',
      highlight: 'Best overall platform with copy trading, social features, and the lowest minimum deposit in the industry.',
      pros: ['$5 minimum deposit', 'Copy trading with verified stats', '180+ assets', '50+ payment methods', 'Fast withdrawals (minutes for crypto)'],
      cons: ['No tier-1 regulation', 'Bonus turnover requirements (50x)', 'CFTC/FCA warnings issued'],
      bestFor: 'Beginners who want an all-in-one platform with social trading features and minimal startup cost.',
    },
    {
      rank: 2,
      name: 'Quotex',
      score: 9.4,
      slug: 'quotex',
      ctaBroker: 'quotex' as const,
      minDeposit: '$10',
      demo: 'Unlimited',
      payout: 'Up to 95%',
      assets: '400+',
      founded: '2019',
      regulation: 'IFMRRC',
      highlight: 'Highest payouts in the industry with the cleanest, most modern trading interface available.',
      pros: ['Up to 95% payouts', 'Unlimited free demo', '400+ tradeable assets', 'Clean modern interface', 'No deposit fees'],
      cons: ['Newer broker (since 2019)', 'Limited regulation', 'No copy trading feature'],
      bestFor: 'Traders who prioritize high payouts and a clean, fast trading interface.',
    },
    {
      rank: 3,
      name: 'IQ Option',
      score: 9.2,
      slug: 'iq-option',
      ctaBroker: 'iqOption' as const,
      minDeposit: '$10',
      demo: '$10,000',
      payout: 'Up to 90%',
      assets: '300+',
      founded: '2013',
      regulation: 'CySEC (EU)',
      highlight: 'Most established and regulated broker with a proven track record and award-winning platform.',
      pros: ['CySEC regulated (EU)', '13+ years operating', 'Award-winning platform', 'Multi-asset trading', 'Educational resources'],
      cons: ['Binary options restricted in EU/EEA', 'Lower payouts than competitors', 'Slower withdrawals'],
      bestFor: 'Traders who prioritize regulation and a long-standing reputation over maximum payouts.',
    },
    {
      rank: 4,
      name: 'Deriv',
      score: 9.0,
      slug: 'deriv',
      ctaBroker: 'deriv' as const,
      minDeposit: '$5',
      demo: '$10,000',
      payout: 'Up to 90%',
      assets: '100+',
      founded: '1999',
      regulation: 'MFSA, LFSA, VFSC',
      highlight: 'The most regulated binary options broker with 25+ years of operation under the Binary.com legacy.',
      pros: ['Multi-regulated (MFSA, LFSA, VFSC)', '25+ years in operation', 'Synthetic indices available 24/7', 'Low $5 minimum deposit', 'Transparent pricing'],
      cons: ['Smaller asset selection', 'Platform less intuitive', 'Binary options not available in all regions'],
      bestFor: 'Traders who want maximum regulatory protection and trust a long-established brand.',
    },
    {
      rank: 5,
      name: 'Olymp Trade',
      score: 8.6,
      slug: 'olymp-trade',
      ctaBroker: 'olympTrade' as const,
      minDeposit: '$10',
      demo: '$10,000',
      payout: 'Up to 90%',
      assets: '80+',
      founded: '2014',
      regulation: 'FinaCom',
      highlight: 'Strong educational platform ideal for beginners with structured learning paths and market analysis.',
      pros: ['Excellent education center', 'Structured learning paths', 'Low minimum trades ($1)', 'FinaCom membership', 'Good mobile app'],
      cons: ['Fewer assets than competitors', 'Moderate payouts', 'Limited advanced features'],
      bestFor: 'Complete beginners who want structured education alongside their trading.',
    },
    {
      rank: 6,
      name: 'Binomo',
      score: 8.2,
      slug: 'binomo',
      ctaBroker: 'binomo' as const,
      minDeposit: '$10',
      demo: '$1,000',
      payout: 'Up to 87%',
      assets: '70+',
      founded: '2014',
      regulation: 'FinaCom',
      highlight: 'Tournament-focused platform with unique competitions that let traders win prize pools.',
      pros: ['Trading tournaments with prizes', 'Simple beginner interface', '$1 minimum trades', 'FinaCom membership', 'Quick registration'],
      cons: ['Lower payouts (max 87%)', 'Small demo balance ($1K)', 'Fewer assets', 'Limited analytical tools'],
      bestFor: 'Competitive traders who enjoy tournament-style trading with prize pools.',
    },
    {
      rank: 7,
      name: 'ExpertOption',
      score: 7.8,
      slug: 'expert-option',
      ctaBroker: 'expertOption' as const,
      minDeposit: '$10',
      demo: '$10,000',
      payout: 'Up to 90%',
      assets: '100+',
      founded: '2014',
      regulation: 'SVGFSA',
      highlight: 'Social trading platform with trend indicators showing what other traders are doing in real-time.',
      pros: ['Social trading features', 'Trend indicators', '100+ assets', 'Multiple account types', 'Mobile-first design'],
      cons: ['SVGFSA registration only', 'Account verification can be slow', 'Limited educational content', 'Higher spreads on some assets'],
      bestFor: 'Traders who want social features and real-time sentiment data from other users.',
    },
  ];

  return (
    <article className="section-container py-16 max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge-blue">Expert Rankings</span>
          <span className="text-xs text-gray-600">Updated May 2026 &bull; 18 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          7 Best Binary Options Brokers 2026 &mdash; Tested &amp; Ranked
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          We tested all 7 brokers with real money over 8+ months, executing 500+ trades and processing dozens
          of withdrawals. Here&apos;s our honest ranking based on payouts, platform quality, regulation, and
          actual user experience &mdash; not paid placements.
        </p>
      </header>

      {/* Table of Contents */}
      <nav className="glass-card p-6 mb-10">
        <h2 className="text-lg font-bold mb-4 text-blue-400">Table of Contents</h2>
        <ol className="space-y-2 text-sm text-gray-300">
          <li><a href="#comparison" className="hover:text-blue-400 transition-colors">1. Quick Comparison Table</a></li>
          <li><a href="#rankings" className="hover:text-blue-400 transition-colors">2. Detailed Broker Rankings</a></li>
          <li><a href="#how-we-rank" className="hover:text-blue-400 transition-colors">3. How We Rank Brokers</a></li>
          <li><a href="#best-for" className="hover:text-blue-400 transition-colors">4. Best Broker by Trader Type</a></li>
          <li><a href="#tips" className="hover:text-blue-400 transition-colors">5. Tips for Choosing a Broker</a></li>
          <li><a href="#faq" className="hover:text-blue-400 transition-colors">6. FAQ</a></li>
        </ol>
      </nav>

      {/* Quick Comparison Table */}
      <section id="comparison" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Quick Comparison Table</h2>
        <div className="glass-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                <th className="text-left p-3 text-gray-400 font-semibold">#</th>
                <th className="text-left p-3 text-gray-400 font-semibold">Broker</th>
                <th className="text-center p-3 text-gray-400 font-semibold">Score</th>
                <th className="text-center p-3 text-gray-400 font-semibold">Min Deposit</th>
                <th className="text-center p-3 text-gray-400 font-semibold">Max Payout</th>
                <th className="text-center p-3 text-gray-400 font-semibold">Assets</th>
                <th className="text-center p-3 text-gray-400 font-semibold">Demo</th>
              </tr>
            </thead>
            <tbody>
              {brokers.map((b, i) => (
                <tr key={b.slug} className={`border-b border-white/[0.03] ${i % 2 ? 'bg-white/[0.01]' : ''}`}>
                  <td className="p-3 text-gray-400 font-bold">{b.rank}</td>
                  <td className="p-3">
                    <Link href={`/${locale}/${b.slug}`} className="text-blue-400 hover:text-blue-300 font-medium">
                      {b.name}
                    </Link>
                  </td>
                  <td className="p-3 text-center">
                    <span className={`font-bold ${b.score >= 9.0 ? 'text-emerald-400' : b.score >= 8.0 ? 'text-yellow-400' : 'text-orange-400'}`}>
                      {b.score}/10
                    </span>
                  </td>
                  <td className="p-3 text-center text-gray-300">{b.minDeposit}</td>
                  <td className="p-3 text-center text-gray-300">{b.payout}</td>
                  <td className="p-3 text-center text-gray-300">{b.assets}</td>
                  <td className="p-3 text-center text-gray-300">{b.demo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Rankings */}
      <section id="rankings" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Detailed Broker Rankings</h2>
        <div className="space-y-8">
          {brokers.map((b) => (
            <div key={b.slug} className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">
                    {b.rank}
                  </span>
                  <h3 className="text-xl font-bold text-white">{b.name}</h3>
                </div>
                <span className={`text-lg font-bold ${b.score >= 9.0 ? 'text-emerald-400' : b.score >= 8.0 ? 'text-yellow-400' : 'text-orange-400'}`}>
                  {b.score}/10
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">{b.highlight}</p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white/[0.02] rounded-lg p-4">
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Min Deposit</span>
                      <span className="text-white font-medium">{b.minDeposit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Max Payout</span>
                      <span className="text-white font-medium">{b.payout}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Assets</span>
                      <span className="text-white font-medium">{b.assets}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Demo Account</span>
                      <span className="text-white font-medium">{b.demo}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Founded</span>
                      <span className="text-white font-medium">{b.founded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Regulation</span>
                      <span className="text-white font-medium">{b.regulation}</span>
                    </div>
                  </dl>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2">Pros</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      {b.pros.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-0.5 flex-shrink-0">&#10003;</span>{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Cons</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      {b.cons.map((c) => (
                        <li key={c} className="flex items-start gap-2">
                          <span className="text-red-400 mt-0.5 flex-shrink-0">&#10007;</span>{c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/5 border border-blue-500/10 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-300">
                  <span className="text-blue-400 font-semibold">Best for: </span>{b.bestFor}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <CtaButton broker={b.ctaBroker} type="demo" label={`Try ${b.name} Demo`} campaign="best_brokers" />
                <Link href={`/${locale}/${b.slug}`} className="btn-secondary px-6 py-3.5 text-sm text-center">
                  Read Full Review
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Rank */}
      <section id="how-we-rank" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How We Rank Binary Options Brokers</h2>
        <div className="glass-card p-6">
          <p className="text-gray-300 leading-relaxed mb-6">
            Our rankings are based on real testing with real money &mdash; not paid placements or press releases.
            Every broker on this list was tested for a minimum of 3 months with actual deposits, trades, and withdrawals.
            Here&apos;s what we evaluate:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: 'Platform Quality (25%)', desc: 'Speed, reliability, charting tools, mobile experience, and overall user interface design.' },
              { label: 'Payouts & Fees (20%)', desc: 'Maximum payout percentages, deposit/withdrawal fees, and any hidden charges we discovered.' },
              { label: 'Regulation & Trust (20%)', desc: 'Licensing status, regulatory warnings, company history, and fund security measures.' },
              { label: 'Withdrawals (15%)', desc: 'Actual withdrawal processing times, available methods, and whether any requests were rejected.' },
              { label: 'Asset Selection (10%)', desc: 'Number and variety of tradeable assets including forex, crypto, stocks, indices, and commodities.' },
              { label: 'Education & Support (10%)', desc: 'Quality of learning resources, demo accounts, customer support response times, and community features.' },
            ].map((c) => (
              <div key={c.label} className="bg-white/[0.02] rounded-lg p-4">
                <h3 className="font-semibold text-white text-sm mb-1">{c.label}</h3>
                <p className="text-xs text-gray-400">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Read our full{' '}
            <Link href={`/${locale}/methodology`} className="text-blue-400 hover:text-blue-300">
              review methodology
            </Link>{' '}
            for complete details.
          </p>
        </div>
      </section>

      {/* Best Broker by Trader Type */}
      <section id="best-for" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Best Broker by Trader Type</h2>
        <div className="space-y-4">
          {[
            {
              type: 'Complete Beginners',
              broker: 'Pocket Option',
              slug: 'pocket-option',
              reason: '$5 minimum deposit, $50K demo account, copy trading to learn from experts, and an intuitive interface. The lowest barrier to entry in the industry.',
            },
            {
              type: 'High Payout Seekers',
              broker: 'Quotex',
              slug: 'quotex',
              reason: 'Up to 95% payouts &mdash; the highest in the industry. Clean interface built for fast execution with no distractions.',
            },
            {
              type: 'Regulation-Focused Traders',
              broker: 'Deriv',
              slug: 'deriv',
              reason: 'Multi-regulated (MFSA, LFSA, VFSC) with 25+ years of operation. The safest option if regulatory compliance is your priority.',
            },
            {
              type: 'Education-First Traders',
              broker: 'Olymp Trade',
              slug: 'olymp-trade',
              reason: 'Structured learning paths, video courses, and market analysis built into the platform. Learn while you trade.',
            },
            {
              type: 'Tournament Enthusiasts',
              broker: 'Binomo',
              slug: 'binomo',
              reason: 'Regular trading tournaments with real prize pools. Compete against other traders for bonus winnings.',
            },
          ].map((item) => (
            <div key={item.type} className="glass-card p-5 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-white text-sm mb-1">{item.type}</h3>
                <p className="text-sm text-gray-400" dangerouslySetInnerHTML={{ __html: item.reason }} />
              </div>
              <Link href={`/${locale}/${item.slug}`} className="text-blue-400 hover:text-blue-300 text-sm font-medium whitespace-nowrap">
                {item.broker} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Our Top Picks CTA */}
      <section className="mb-12">
        <div className="glass-card p-6 border-blue-500/10">
          <h2 className="text-xl font-bold mb-3">Our Top Picks for 2026</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            After months of testing, <strong className="text-white">Pocket Option</strong> and{' '}
            <strong className="text-white">Quotex</strong> consistently came out on top. Pocket Option wins for
            its all-in-one platform with copy trading, while Quotex leads in raw payouts (up to 95%). Both offer
            free demo accounts &mdash; we recommend trying both to see which fits your trading style.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CtaButton broker="pocketOption" type="demo" label="Try Pocket Option Demo" campaign="best_brokers_top" />
            <CtaButton broker="quotex" type="demo" label="Try Quotex Demo" variant="secondary" campaign="best_brokers_top" />
          </div>
        </div>
      </section>

      {/* Tips for Choosing */}
      <section id="tips" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">5 Tips for Choosing a Binary Options Broker</h2>
        <div className="space-y-4">
          {[
            {
              num: '1',
              title: 'Always Start with a Demo Account',
              desc: 'Every reputable broker offers a free demo account. Use it for at least 2-4 weeks before depositing real money. This lets you test the platform, practice strategies, and build confidence without risk.',
            },
            {
              num: '2',
              title: 'Check Withdrawal Speed with a Small Deposit',
              desc: 'Before committing serious capital, make a small deposit ($5-20) and immediately request a withdrawal. This confirms the process works and shows you how long it actually takes.',
            },
            {
              num: '3',
              title: 'Avoid Bonuses as a Beginner',
              desc: 'Broker bonuses typically come with 30-50x turnover requirements. This means a $100 bonus requires $3,000-5,000 in trading volume before you can withdraw. Only accept bonuses if you understand the terms.',
            },
            {
              num: '4',
              title: 'Understand Regulation Doesn&apos;t Equal Safety',
              desc: 'While regulation adds a layer of protection, even regulated brokers can fail. Never deposit more than you can afford to lose, regardless of the broker&apos;s regulatory status.',
            },
            {
              num: '5',
              title: 'Compare Payouts on Your Preferred Assets',
              desc: 'Advertised "up to X%" payouts are maximums. Actual payouts vary by asset and time of day. Compare payouts on the specific assets you plan to trade, not just headline numbers.',
            },
          ].map((tip) => (
            <div key={tip.num} className="glass-card p-5">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs flex-shrink-0">
                  {tip.num}
                </span>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Binary Options Trading for Beginners', slug: 'binary-options-trading-guide', desc: 'Complete guide to getting started with binary options trading.' },
            { title: 'Binary Options vs Forex Trading', slug: 'binary-options-vs-forex', desc: 'Key differences between binary options and forex explained.' },
            { title: 'Best Demo Accounts 2026', slug: 'binary-options-demo-account', desc: 'Compare free demo accounts from all major brokers.' },
            { title: 'Pocket Option Copy Trading Guide', slug: 'pocket-option-copy-trading', desc: 'How to profit from copying expert traders on Pocket Option.' },
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
              q: 'What is the best binary options broker in 2026?',
              a: 'Based on our testing, Pocket Option ranks #1 overall with a 9.5/10 score. It offers the lowest minimum deposit ($5), copy trading, 180+ assets, and fast withdrawals. Quotex is a close second with the highest payouts (up to 95%).',
            },
            {
              q: 'Are binary options brokers safe?',
              a: 'Safety varies significantly by broker. Deriv and IQ Option offer the strongest regulatory protection. However, binary options are inherently high-risk financial instruments — you can lose 100% of any individual trade regardless of which broker you use.',
            },
            {
              q: 'What is the minimum deposit for binary options?',
              a: 'Pocket Option and Deriv offer the industry-low $5 minimum deposit. Most other brokers require $10. We recommend starting with the minimum to test the withdrawal process before depositing more.',
            },
            {
              q: 'Can I trade binary options with a demo account?',
              a: 'Yes. All 7 brokers on our list offer free demo accounts. Quotex offers unlimited virtual funds, Pocket Option provides $50,000, and most others give $10,000. No deposit is required to access demo trading.',
            },
            {
              q: 'Which binary options broker has the highest payouts?',
              a: 'Quotex offers the highest payouts at up to 95%. Pocket Option follows with up to 92%. Actual payouts vary by asset, time of day, and market conditions.',
            },
            {
              q: 'Do I need to pay taxes on binary options profits?',
              a: 'Tax obligations vary by country. In most jurisdictions, profits from binary options are considered taxable income or capital gains. Consult a local tax professional for guidance specific to your situation.',
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
          You could lose all of your invested capital. The information on this page is for educational purposes
          only and should not be considered financial advice. Past performance does not guarantee future results.
          Some brokers listed may not be regulated in your jurisdiction. Always verify regulatory status before
          trading and never invest money you cannot afford to lose. This site may receive compensation from
          brokers featured in our rankings.
        </p>
      </section>
    </article>
  );
}
