'use client';

import Link from 'next/link';
import CtaButton from '@/components/CtaButton';

const blogPosts = [
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
];

export default function BlogPage() {
  return (
    <div>
      <section className="section-container py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge-green mb-4">Knowledge Base</span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-3">
            Trading Guides & Education
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Practical guides written by experienced traders. No fluff — actionable knowledge
            to help you trade profitably on Quotex and Pocket Option.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <article className="glass-card-hover p-6 flex flex-col cursor-pointer h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="badge-green text-[10px]">{post.category}</span>
                  <span className="text-[10px] text-gray-600">{post.readTime} read</span>
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

        {/* CTA Section */}
        <div className="glass-card p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Apply What You&apos;ve Learned?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Practice risk-free with a demo account. No deposit required — start trading
            in under 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton broker="quotex" type="demo" label="Quotex Demo ($10K Free)" campaign="blog" />
            <CtaButton broker="pocketOption" type="demo" label="Pocket Option Demo ($50K Free)" campaign="blog" />
          </div>
        </div>
      </section>
    </div>
  );
}
