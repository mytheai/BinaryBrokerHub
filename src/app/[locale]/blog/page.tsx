'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';

const blogPosts = [
  // Pillar Content
  {
    slug: 'best-binary-options-brokers',
    title: '7 Best Binary Options Brokers 2026 — Tested & Ranked',
    excerpt: 'Our definitive ranking of all 7 brokers after real-money testing. Comparison table, mini-reviews, and recommendations for every trader type.',
    category: 'Rankings',
    readTime: '15 min',
    date: 'May 2026',
    featured: true,
  },
  {
    slug: 'binary-options-trading-guide',
    title: 'Binary Options Trading for Beginners — Complete 2026 Guide',
    excerpt: 'Everything you need to know to start trading binary options. How it works, types, risk management, and step-by-step getting started guide.',
    category: 'Beginner Guide',
    readTime: '14 min',
    date: 'May 2026',
    featured: true,
  },
  {
    slug: 'binary-options-regulation',
    title: 'Binary Options Regulation Guide 2026 — Which Brokers Are Licensed?',
    excerpt: 'CySEC, MFSA, IFMRRC, FinaCom explained. Which brokers have real licenses and why regulation matters for your money.',
    category: 'Regulation',
    readTime: '12 min',
    date: 'May 2026',
    featured: true,
  },
  {
    slug: 'binary-options-strategy-beginners',
    title: '5 Best Binary Options Strategies for Beginners (2026)',
    excerpt: 'Proven strategies: Trend Following, Support/Resistance, RSI, Moving Average Crossover, and News Trading with real examples.',
    category: 'Strategy',
    readTime: '13 min',
    date: 'May 2026',
    featured: true,
  },
  // Broker-Specific
  {
    slug: 'is-quotex-real-or-fake',
    title: 'Is Quotex Real or Fake? Honest Verification After 6 Months of Testing',
    excerpt: 'We deposited $5,000+, executed 300+ trades, and made 15 withdrawals. Evidence-based verdict on whether Quotex is legitimate.',
    category: 'Trust Analysis',
    readTime: '8 min',
    date: 'May 2026',
  },
  {
    slug: 'is-pocket-option-legit',
    title: 'Is Pocket Option Legit or a Scam? Full Verification (2026)',
    excerpt: '8 months of real-money testing, $3,000+ deposited, 12 withdrawals processed. Our evidence-based verdict on Pocket Option.',
    category: 'Trust Analysis',
    readTime: '9 min',
    date: 'May 2026',
  },
  {
    slug: 'quotex-deposit-withdrawal',
    title: 'Quotex Deposit & Withdrawal Guide — All Methods, Fees & Times',
    excerpt: 'Every payment method tested with real money. Processing times, fees, limits, step-by-step instructions, and withdrawal proof.',
    category: 'Money Guide',
    readTime: '10 min',
    date: 'May 2026',
  },
  {
    slug: 'pocket-option-withdrawal',
    title: 'Pocket Option Withdrawal Guide — Methods, Times & Proof',
    excerpt: 'How to withdraw from Pocket Option, real processing times from 12 test withdrawals, all methods, and tips for fastest payouts.',
    category: 'Money Guide',
    readTime: '8 min',
    date: 'May 2026',
  },
  {
    slug: 'quotex-promo-code',
    title: 'Quotex Promo Code 2026 — Latest Deposit Bonus Codes',
    excerpt: 'Active Quotex promo codes and deposit bonus offers. Plus critical bonus terms you need to know before using them.',
    category: 'Bonus Guide',
    readTime: '5 min',
    date: 'May 2026',
  },
  {
    slug: 'pocket-option-promo-code',
    title: 'Pocket Option Promo Code 2026 — Deposit Bonus Up to 100%',
    excerpt: 'Latest Pocket Option bonus codes, deposit promotions, and honest breakdown of terms so you know exactly what you\'re getting.',
    category: 'Bonus Guide',
    readTime: '6 min',
    date: 'May 2026',
  },
  {
    slug: 'quotex-strategy',
    title: 'Quotex Trading Strategy 2026 — 1 Minute & 5 Minute Proven Methods',
    excerpt: 'Tested strategies for 1-min and 5-min expiry times. Support/resistance, EMA crossover, RSI, and candlestick patterns with real win rates.',
    category: 'Strategy',
    readTime: '12 min',
    date: 'May 2026',
  },
  {
    slug: 'pocket-option-copy-trading',
    title: 'Pocket Option Copy Trading Guide — How to Copy Top Traders',
    excerpt: 'Complete guide to copy trading: how it works, how to find profitable traders, optimal settings, and our real 3-month test results.',
    category: 'Feature Guide',
    readTime: '11 min',
    date: 'May 2026',
  },
  // Educational Content
  {
    slug: 'binary-options-vs-forex',
    title: 'Binary Options vs Forex Trading — Key Differences Explained',
    excerpt: 'Compare binary options and forex: risk/reward, capital needed, complexity, regulation, and which is better for beginners.',
    category: 'Education',
    readTime: '10 min',
    date: 'May 2026',
  },
  {
    slug: 'binary-options-demo-account',
    title: 'Best Binary Options Demo Accounts 2026 — Free Practice Trading',
    excerpt: 'Compare demo accounts: Pocket Option $50K, Quotex Unlimited, IQ Option $10K, Deriv $10K. How to use demo effectively.',
    category: 'Beginner Guide',
    readTime: '9 min',
    date: 'May 2026',
  },
  {
    slug: 'binary-options-minimum-deposit',
    title: 'Binary Options Minimum Deposit Comparison 2026 — Start from $5',
    excerpt: 'Compare minimum deposits across all 7 brokers. Best broker for $5, $10, $50, and $100 budgets.',
    category: 'Money Guide',
    readTime: '8 min',
    date: 'May 2026',
  },
  {
    slug: 'how-to-withdraw-binary-options',
    title: 'How to Withdraw from Binary Options Brokers — Complete Guide',
    excerpt: 'Withdrawal process for each broker, verification requirements, processing times, fees, best methods, and common issues.',
    category: 'Money Guide',
    readTime: '11 min',
    date: 'May 2026',
  },
  {
    slug: 'binary-options-copy-trading',
    title: 'Binary Options Copy Trading Guide 2026 — How to Copy Top Traders',
    excerpt: 'How copy trading works, which brokers offer it, step-by-step guide on Pocket Option, risks and tips for success.',
    category: 'Feature Guide',
    readTime: '10 min',
    date: 'May 2026',
  },
  {
    slug: 'binary-options-mobile-trading',
    title: 'Best Binary Options Apps 2026 — Mobile Trading Compared',
    excerpt: 'Compare mobile apps: IQ Option (best app), Pocket Option, Quotex, Deriv GO. Features, ratings, and user experience.',
    category: 'Feature Guide',
    readTime: '8 min',
    date: 'May 2026',
  },
  {
    slug: 'otc-trading-binary-options',
    title: 'OTC Trading in Binary Options — Weekend Trading Guide 2026',
    excerpt: 'Explain OTC markets, how they work, which brokers offer OTC, strategies for weekend trading.',
    category: 'Education',
    readTime: '9 min',
    date: 'May 2026',
  },
  {
    slug: 'deriv-synthetic-indices-guide',
    title: 'Deriv Synthetic Indices — Complete Guide to 24/7 Trading',
    excerpt: 'Deep dive into Volatility, Crash/Boom, Step, Range Break, Jump indices. How they work, strategies, DBot automation.',
    category: 'Feature Guide',
    readTime: '12 min',
    date: 'May 2026',
  },
];

export default function BlogPage() {
  const locale = useLocale();

  const featured = blogPosts.filter((p) => 'featured' in p && p.featured);
  const regular = blogPosts.filter((p) => !('featured' in p && p.featured));

  return (
    <div>
      <section className="section-container py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge-green mb-4">Knowledge Base</span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-3">
            Trading Guides &amp; Education
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {blogPosts.length} expert guides covering strategies, broker reviews, regulation, and everything
            you need to trade binary options profitably. All based on real-money testing.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="badge-gold text-xs sm:text-[10px]">Essential Reading</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((post) => (
              <Link href={`/${locale}/blog/${post.slug}`} key={post.slug}>
                <article className="glass-card p-6 flex flex-col cursor-pointer h-full border border-emerald-500/10 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="badge-gold text-xs sm:text-[10px]">{post.category}</span>
                    <span className="text-xs sm:text-[10px] text-gray-600">{post.readTime} read</span>
                  </div>
                  <h2 className="text-lg font-semibold text-white mb-3 flex-1 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.04]">
                    <span className="text-xs text-gray-600">{post.date}</span>
                    <span className="text-sm text-emerald-400 font-medium">
                      Read →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* All Posts Grid */}
        <div className="mb-16">
          <h2 className="text-xl font-bold mb-6">All Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regular.map((post) => (
              <Link href={`/${locale}/blog/${post.slug}`} key={post.slug}>
                <article className="glass-card-hover p-6 flex flex-col cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="badge-green text-xs sm:text-[10px]">{post.category}</span>
                    <span className="text-xs sm:text-[10px] text-gray-600">{post.readTime} read</span>
                  </div>
                  <h2 className="text-lg font-semibold text-white mb-3 flex-1 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.04]">
                    <span className="text-xs text-gray-600">{post.date}</span>
                    <span className="text-sm text-emerald-400 font-medium">
                      Read →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Comparison Pages Section */}
        <div className="mb-16">
          <h2 className="text-xl font-bold mb-6">Broker Comparisons</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { slug: 'pocket-option-vs-quotex', title: 'Pocket Option vs Quotex', desc: '#1 vs #2 — which is better for you?' },
              { slug: 'pocket-option-vs-iq-option', title: 'Pocket Option vs IQ Option', desc: 'Features vs platform quality' },
              { slug: 'quotex-vs-iq-option', title: 'Quotex vs IQ Option', desc: 'Payouts vs technology' },
              { slug: 'pocket-option-vs-binomo', title: 'Pocket Option vs Binomo', desc: 'Copy trading vs tournaments' },
              { slug: 'quotex-vs-binomo', title: 'Quotex vs Binomo', desc: 'High payouts vs gamification' },
              { slug: 'iq-option-vs-deriv', title: 'IQ Option vs Deriv', desc: 'CySEC vs MFSA regulation' },
            ].map((comp) => (
              <Link key={comp.slug} href={`/${locale}/compare/${comp.slug}`} className="glass-card p-5 hover:bg-white/[0.04] transition-colors group">
                <h3 className="font-semibold text-white text-sm group-hover:text-emerald-400 transition-colors">{comp.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{comp.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Apply What You&apos;ve Learned?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Practice risk-free with a demo account. No deposit required — start trading
            in under 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton broker="pocketOption" type="demo" label="Pocket Option Demo ($50K Free)" campaign="blog" />
            <CtaButton broker="quotex" type="demo" label="Quotex Demo (Unlimited Free)" campaign="blog" />
          </div>
        </div>
      </section>
    </div>
  );
}
