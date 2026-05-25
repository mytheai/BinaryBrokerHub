'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function BinaryOptionsDemoAccountPage() {
  const locale = useLocale();

  const demoAccounts = [
    {
      rank: 1,
      name: 'Pocket Option',
      slug: 'pocket-option',
      ctaBroker: 'pocketOption' as const,
      demoBalance: '$50,000',
      refillable: 'Yes (unlimited refills)',
      registrationRequired: 'No (instant access)',
      timeLimit: 'Unlimited',
      assetsAvailable: '180+ (all assets)',
      features: 'Full platform access, copy trading, social trading, all indicators and tools',
      highlight: 'The largest demo balance in the industry with no registration required for instant access.',
      verdict: 'Best overall demo account. The $50K balance gives you plenty of room to practice, and you can refill it anytime. Full access to all platform features including copy trading.',
    },
    {
      rank: 2,
      name: 'Quotex',
      slug: 'quotex',
      ctaBroker: 'quotex' as const,
      demoBalance: 'Unlimited',
      refillable: 'Yes (automatic)',
      registrationRequired: 'No (instant access)',
      timeLimit: 'Unlimited',
      assetsAvailable: '400+ (all assets)',
      features: 'Full platform access, all indicators, market signals, one-click trading',
      highlight: 'Truly unlimited virtual funds with the largest asset selection and highest payouts (up to 95%).',
      verdict: 'Best for traders who want to test across many different assets. Unlimited funds mean you never run out, and you get the full 400+ asset catalog.',
    },
    {
      rank: 3,
      name: 'IQ Option',
      slug: 'iq-option',
      ctaBroker: 'iqOption' as const,
      demoBalance: '$10,000',
      refillable: 'Yes (reset to $10K)',
      registrationRequired: 'Yes (email required)',
      timeLimit: 'Unlimited',
      assetsAvailable: '300+ (all assets)',
      features: 'Full platform access, educational videos, community chat, tournaments',
      highlight: 'CySEC-regulated platform with the best educational integration in demo mode.',
      verdict: 'Best for education-focused practice. The platform includes built-in tutorials and community features that help you learn while trading on demo.',
    },
    {
      rank: 4,
      name: 'Deriv',
      slug: 'deriv',
      ctaBroker: 'deriv' as const,
      demoBalance: '$10,000',
      refillable: 'Yes (reset available)',
      registrationRequired: 'Yes (email required)',
      timeLimit: 'Unlimited',
      assetsAvailable: '100+ (including synthetic indices)',
      features: 'Multiple platforms (DTrader, DBot, SmartTrader), synthetic indices 24/7',
      highlight: 'Unique synthetic indices available 24/7 — practice trading even when markets are closed.',
      verdict: 'Best for weekend practice. Deriv\'s synthetic indices trade 24/7, so you can practice on weekends when real markets are closed. Also the most regulated option.',
    },
    {
      rank: 5,
      name: 'Olymp Trade',
      slug: 'olymp-trade',
      ctaBroker: 'olympTrade' as const,
      demoBalance: '$10,000',
      refillable: 'Yes (reset available)',
      registrationRequired: 'Yes (email required)',
      timeLimit: 'Unlimited',
      assetsAvailable: '80+ assets',
      features: 'Structured learning paths, market analysis, strategy guides, advisor tool',
      highlight: 'Best educational integration with step-by-step learning paths built into the demo experience.',
      verdict: 'Best for structured learning. Olymp Trade guides beginners through concepts progressively, making the demo experience feel like a trading course rather than just free play.',
    },
    {
      rank: 6,
      name: 'Binomo',
      slug: 'binomo',
      ctaBroker: 'binomo' as const,
      demoBalance: '$1,000',
      refillable: 'Yes (reset to $1K)',
      registrationRequired: 'No (instant access)',
      timeLimit: 'Unlimited',
      assetsAvailable: '70+ assets',
      features: 'Tournament access, basic indicators, simplified charts',
      highlight: 'Instant access with no registration, though the $1K balance is the smallest in the industry.',
      verdict: 'Quick to access but limited. The $1,000 balance runs out fast if you\'re practicing with realistic trade sizes. Best for testing the platform briefly before deciding.',
    },
    {
      rank: 7,
      name: 'ExpertOption',
      slug: 'expert-option',
      ctaBroker: 'expertOption' as const,
      demoBalance: '$10,000',
      refillable: 'Yes (reset available)',
      registrationRequired: 'Yes (email required)',
      timeLimit: 'Unlimited',
      assetsAvailable: '100+ assets',
      features: 'Social trading, trend indicators, multiple chart types',
      highlight: 'Social trading features in demo mode let you see what other traders are doing in real-time.',
      verdict: 'Good for social learners. Seeing real-time sentiment data and other traders\' positions adds a unique learning dimension to demo practice.',
    },
  ];

  return (
    <article className="section-container py-16 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: 'Blog', href: `/${locale}/blog` }, { label: 'Demo Account Guide' }]} />
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge-blue">Demo Accounts</span>
          <span className="text-xs text-gray-600">Updated May 2026 &bull; 14 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          Best Binary Options Demo Accounts 2026 &mdash; Free Practice Trading
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Every reputable binary options broker offers a free demo account for risk-free practice. We tested all
          7 major brokers&apos; demo accounts and compared their virtual balances, features, limitations, and
          overall learning experience. Here&apos;s which ones are actually worth your time.
        </p>
      </header>

      {/* Table of Contents */}
      <nav className="glass-card p-6 mb-10">
        <h2 className="text-lg font-bold mb-4 text-blue-400">Table of Contents</h2>
        <ol className="space-y-2 text-sm text-gray-300">
          <li><a href="#comparison" className="hover:text-blue-400 transition-colors">1. Demo Account Comparison Table</a></li>
          <li><a href="#top-picks" className="hover:text-blue-400 transition-colors">2. Top 3 Demo Accounts</a></li>
          <li><a href="#all-reviews" className="hover:text-blue-400 transition-colors">3. All Demo Accounts Reviewed</a></li>
          <li><a href="#why-demo" className="hover:text-blue-400 transition-colors">4. Why Use a Demo Account?</a></li>
          <li><a href="#how-to-use" className="hover:text-blue-400 transition-colors">5. How to Use Demo Effectively</a></li>
          <li><a href="#when-to-switch" className="hover:text-blue-400 transition-colors">6. When to Switch to Real Money</a></li>
          <li><a href="#faq" className="hover:text-blue-400 transition-colors">7. FAQ</a></li>
        </ol>
      </nav>

      {/* Comparison Table */}
      <section id="comparison" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Demo Account Comparison Table</h2>
        <div className="glass-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                <th className="text-left p-3 text-gray-400 font-semibold">Broker</th>
                <th className="text-center p-3 text-gray-400 font-semibold">Demo Balance</th>
                <th className="text-center p-3 text-gray-400 font-semibold">Refillable</th>
                <th className="text-center p-3 text-gray-400 font-semibold">Registration</th>
                <th className="text-center p-3 text-gray-400 font-semibold">Assets</th>
              </tr>
            </thead>
            <tbody>
              {demoAccounts.map((d, i) => (
                <tr key={d.slug} className={`border-b border-white/[0.03] ${i % 2 ? 'bg-white/[0.01]' : ''}`}>
                  <td className="p-3">
                    <Link href={`/${locale}/${d.slug}`} className="text-blue-400 hover:text-blue-300 font-medium">
                      {d.name}
                    </Link>
                  </td>
                  <td className="p-3 text-center text-white font-medium">{d.demoBalance}</td>
                  <td className="p-3 text-center text-gray-300 text-xs">{d.refillable}</td>
                  <td className="p-3 text-center text-gray-300 text-xs">{d.registrationRequired}</td>
                  <td className="p-3 text-center text-gray-300 text-xs">{d.assetsAvailable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Top 3 Picks */}
      <section id="top-picks" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Top 3 Demo Account Picks</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="glass-card p-5 border-yellow-500/10">
            <div className="text-xs text-yellow-400 font-bold mb-2">BEST OVERALL</div>
            <h3 className="font-bold text-white mb-1">Pocket Option</h3>
            <p className="text-2xl font-bold text-emerald-400 mb-2">$50,000</p>
            <p className="text-xs text-gray-400 mb-4">No registration needed. Unlimited refills. Full platform access with copy trading.</p>
            <CtaButton broker="pocketOption" type="demo" label="Open Free Demo" size="sm" campaign="demo_top3" />
          </div>
          <div className="glass-card p-5 border-blue-500/10">
            <div className="text-xs text-blue-400 font-bold mb-2">BEST BALANCE</div>
            <h3 className="font-bold text-white mb-1">Quotex</h3>
            <p className="text-2xl font-bold text-emerald-400 mb-2">Unlimited</p>
            <p className="text-xs text-gray-400 mb-4">No registration needed. Unlimited virtual funds. 400+ assets. Up to 95% payouts.</p>
            <CtaButton broker="quotex" type="demo" label="Open Free Demo" size="sm" variant="secondary" campaign="demo_top3" />
          </div>
          <div className="glass-card p-5 border-purple-500/10">
            <div className="text-xs text-purple-400 font-bold mb-2">BEST FOR LEARNING</div>
            <h3 className="font-bold text-white mb-1">IQ Option</h3>
            <p className="text-2xl font-bold text-emerald-400 mb-2">$10,000</p>
            <p className="text-xs text-gray-400 mb-4">CySEC regulated. Built-in tutorials. Community features. Educational focus.</p>
            <CtaButton broker="iqOption" type="demo" label="Open Free Demo" size="sm" variant="secondary" campaign="demo_top3" />
          </div>
        </div>
      </section>

      {/* All Demo Reviews */}
      <section id="all-reviews" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">All Demo Accounts Reviewed</h2>
        <div className="space-y-6">
          {demoAccounts.map((d) => (
            <div key={d.slug} className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">
                    {d.rank}
                  </span>
                  <h3 className="text-xl font-bold text-white">{d.name} Demo Account</h3>
                </div>
                <span className="text-lg font-bold text-emerald-400">{d.demoBalance}</span>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed mb-4">{d.highlight}</p>

              <div className="bg-white/[0.02] rounded-lg p-4 mb-4">
                <dl className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Demo Balance</span>
                    <span className="text-white font-medium">{d.demoBalance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Refillable</span>
                    <span className="text-white font-medium">{d.refillable}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Registration</span>
                    <span className="text-white font-medium">{d.registrationRequired}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Time Limit</span>
                    <span className="text-white font-medium">{d.timeLimit}</span>
                  </div>
                  <div className="col-span-2 flex justify-between">
                    <span className="text-gray-500">Assets</span>
                    <span className="text-white font-medium">{d.assetsAvailable}</span>
                  </div>
                  <div className="col-span-2 flex justify-between">
                    <span className="text-gray-500">Features</span>
                    <span className="text-white font-medium text-right text-xs max-w-[65%]">{d.features}</span>
                  </div>
                </dl>
              </div>

              <div className="bg-blue-500/5 border border-blue-500/10 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-300">
                  <span className="text-blue-400 font-semibold">Our Verdict: </span>{d.verdict}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <CtaButton broker={d.ctaBroker} type="demo" label={`Open ${d.name} Demo`} campaign="demo_reviews" />
                <Link href={`/${locale}/${d.slug}`} className="btn-secondary px-6 py-3.5 text-sm text-center">
                  Read Full Review
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Use a Demo */}
      <section id="why-demo" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Why Use a Demo Account?</h2>
        <div className="space-y-4">
          {[
            {
              title: 'Zero Financial Risk',
              desc: 'Practice with virtual money that costs you nothing. Make mistakes, test risky strategies, and learn from failures without losing a single dollar. This is the single most important step every beginner should take.',
            },
            {
              title: 'Learn the Platform',
              desc: 'Every broker platform is different. Demo accounts let you learn where everything is, how to place trades, set expiry times, read charts, and navigate the interface before real money is on the line.',
            },
            {
              title: 'Test Strategies Before Risking Capital',
              desc: 'Have a strategy idea? Test it over 50-100 demo trades first. Track your win rate, average return, and maximum drawdown. If it doesn\'t work on demo, it won\'t work with real money.',
            },
            {
              title: 'Build Confidence',
              desc: 'Trading with real money triggers emotions (fear, greed, frustration) that affect decision-making. Building confidence through successful demo trading helps manage these emotions when you transition to live trading.',
            },
            {
              title: 'Compare Brokers',
              desc: 'Open demo accounts on multiple brokers to compare platforms, payouts, asset selection, and execution speed. This hands-on comparison is more valuable than reading reviews alone.',
            },
          ].map((item) => (
            <div key={item.title} className="glass-card p-5">
              <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Use Demo Effectively */}
      <section id="how-to-use" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How to Use a Demo Account Effectively</h2>
        <div className="glass-card p-6 border-amber-500/10 bg-amber-500/[0.02] mb-6">
          <p className="text-sm text-amber-300 font-semibold mb-2">Common Mistake</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Most beginners treat demo accounts as a game &mdash; placing huge bets, taking random trades, and
            ignoring risk management because &quot;it&apos;s not real money.&quot; This approach teaches nothing
            and creates bad habits that will cost you when you switch to real trading.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              step: '1',
              title: 'Treat It Like Real Money',
              desc: 'Set a realistic virtual account balance ($100-500, not the full $50K). Only trade amounts you would actually risk with real money. If you\'d use $1-5 trades with real money, use $1-5 on demo too.',
            },
            {
              step: '2',
              title: 'Follow a Strategy',
              desc: 'Choose one strategy before you start and follow it for at least 50 trades. Don\'t jump between strategies after every loss. Document your rules and follow them mechanically.',
            },
            {
              step: '3',
              title: 'Keep a Trading Journal',
              desc: 'Record every trade: asset, direction, expiry, amount, result, and your reasoning. After 50+ trades, review your journal for patterns. What works? What doesn\'t? Which assets are you best at?',
            },
            {
              step: '4',
              title: 'Practice Risk Management',
              desc: 'Apply the same rules you\'d use with real money: never risk more than 2% per trade, set daily loss limits, and stop trading after 3 consecutive losses. Building these habits on demo makes them automatic on live.',
            },
            {
              step: '5',
              title: 'Trade During Real Market Hours',
              desc: 'Practice during actual market hours (London and New York sessions) to experience real market conditions. Weekend or after-hours demo trading doesn\'t reflect real volatility and liquidity.',
            },
            {
              step: '6',
              title: 'Set a Demo Duration',
              desc: 'Give yourself a specific timeframe (2-4 weeks minimum, ideally 1-2 months). Track your performance over this period. Switching to real money too early is one of the most common beginner mistakes.',
            },
          ].map((item) => (
            <div key={item.step} className="glass-card p-5">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* When to Switch */}
      <section id="when-to-switch" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">When to Switch to Real Money</h2>
        <div className="glass-card p-6 mb-6">
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            There&apos;s no perfect answer, but here are the benchmarks we recommend before making your first real deposit:
          </p>
          <ul className="space-y-3">
            {[
              'Completed at least 100 demo trades following a consistent strategy',
              'Achieved a win rate above 55% over the last 50+ trades',
              'Maintained positive returns for at least 2 consecutive weeks',
              'Followed your risk management rules consistently (no revenge trading)',
              'Can identify your best-performing assets and time frames',
              'Feel emotionally comfortable with the trading process',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-emerald-400 mt-0.5 flex-shrink-0">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card p-6 border-blue-500/10">
          <h3 className="font-bold text-white mb-3">Ready to Go Live?</h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            When you&apos;ve hit the benchmarks above, start with the minimum deposit. Pocket Option requires just
            $5, and most others require $10. Begin with the smallest possible trade sizes ($1) and scale up
            gradually as you prove consistency with real money.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            <strong className="text-white">Important:</strong> Your first real trade will feel different from demo.
            Real money triggers emotions that don&apos;t exist with virtual funds. Start small and expect your
            performance to dip initially as you adjust to the psychological pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CtaButton broker="pocketOption" label="Start with $5 — Pocket Option" campaign="demo_go_live" />
            <CtaButton broker="quotex" label="Start with $10 — Quotex" variant="secondary" campaign="demo_go_live" />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Binary Options Trading Guide', slug: 'binary-options-trading-guide', desc: 'Complete beginner guide to binary options trading.' },
            { title: '7 Best Binary Options Brokers 2026', slug: 'best-binary-options-brokers', desc: 'Our tested rankings of the top brokers.' },
            { title: 'Binary Options vs Forex', slug: 'binary-options-vs-forex', desc: 'How binary options compare to forex trading.' },
            { title: 'Pocket Option Copy Trading', slug: 'pocket-option-copy-trading', desc: 'How to use Pocket Option\'s copy trading feature.' },
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
              q: 'Are binary options demo accounts really free?',
              a: 'Yes. All demo accounts listed on this page are 100% free with no deposit required. Some brokers require email registration, but Pocket Option, Quotex, and Binomo offer instant access without any signup.',
            },
            {
              q: 'Can I win real money on a demo account?',
              a: 'No. Demo accounts use virtual money only. Profits and losses are simulated. To earn real money, you need to open a real account and deposit funds. Some brokers offer no-deposit bonuses, but these are separate from demo accounts.',
            },
            {
              q: 'How long can I use a demo account?',
              a: 'All 7 brokers on this list offer unlimited demo access with no time limit. You can use the demo for as long as you want — days, weeks, months, or even years. There\'s no pressure to switch to real money.',
            },
            {
              q: 'Is demo trading the same as real trading?',
              a: 'The platform, charts, and execution are identical. However, the psychological experience is completely different. Real money trading triggers emotions (fear, greed) that don\'t exist with virtual funds. Expect a performance dip when switching to live.',
            },
            {
              q: 'Which demo account is best for beginners?',
              a: 'We recommend Pocket Option for its $50K balance and instant access, or Quotex for unlimited funds and 400+ assets. Both require no registration to start. If education is your priority, IQ Option\'s demo with built-in tutorials is excellent.',
            },
            {
              q: 'Can I switch between demo and real accounts?',
              a: 'Yes. All brokers let you switch between demo and real accounts instantly with a single click. You can practice on demo, switch to real for a trade, and go back to demo at any time.',
            },
            {
              q: 'Do demo accounts expire?',
              a: 'No. None of the demo accounts in our comparison have an expiration date. Some may become inactive after extended periods of non-use, but you can simply create a new one.',
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
          While demo accounts are risk-free, transitioning to real money trading involves substantial risk of loss.
          Binary options trading is not suitable for all investors, and you could lose all of your invested capital.
          Demo performance does not guarantee real trading results. The information on this page is for educational
          purposes only and should not be considered financial advice. Never invest money you cannot afford to lose.
        </p>
      </section>
    </article>
  );
}
