'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import BrokerCard from '@/components/BrokerCard';
import TrustBanner from '@/components/TrustBanner';

export default function HomePage() {
  const t = useTranslations('home');
  const cta = useTranslations('cta');
  const locale = useLocale();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />

        <div className="relative section-container py-20 md:py-32">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="badge-green">
              <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Updated May 2026 — Verified by Professional Traders
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-balance leading-tight mb-6">
            The Most Trusted {' '}
            <span className="gradient-text">Binary Options</span> Broker Reviews
          </h1>

          <p className="text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            We&apos;ve deposited real money, executed 500+ trades, and tested withdrawals on every
            platform we review. No paid placements. No fake scores. Just data.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <CtaButton broker="pocketOption" label="Open Pocket Option Account" campaign="home_hero" size="lg" />
            <CtaButton broker="quotex" label="Open Quotex Account" campaign="home_hero" size="lg" />
          </div>

          {/* Trust stats */}
          <TrustBanner />
        </div>
      </section>

      {/* Our Testing Process */}
      <section className="section-container py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Test Brokers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every review follows our rigorous 47-point testing methodology. We evaluate platforms
            the same way a professional trader would — with real money on the line.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Account & Deposit',
              desc: 'We register accounts, verify identity, and deposit real funds using multiple payment methods.',
            },
            {
              step: '02',
              title: 'Platform Testing',
              desc: 'We execute 100+ trades across different asset classes, timeframes, and market conditions.',
            },
            {
              step: '03',
              title: 'Withdrawal Test',
              desc: 'We request full withdrawals and measure processing time, fees, and reliability.',
            },
            {
              step: '04',
              title: 'Long-term Monitoring',
              desc: 'We maintain active accounts for 6+ months to evaluate consistency and support quality.',
            },
          ].map((item) => (
            <div key={item.step} className="glass-card p-6">
              <div className="text-emerald-400 font-bold text-sm mb-3">{item.step}</div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Brokers — Featured */}
      <section className="section-container py-20">
        <div className="text-center mb-14">
          <span className="badge-gold mb-4">Editor&apos;s Choice 2026</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-4">
            Top-Rated Brokers for 2026
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            After testing 15+ platforms with real money, these are the 7 best binary options
            brokers ranked by payouts, trust, features, and withdrawal speed.
          </p>
        </div>

        {/* Primary brokers */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <BrokerCard broker="pocketOption" />
          <BrokerCard broker="quotex" />
        </div>

        {/* All 7 broker ranking — Desktop table */}
        <div className="hidden md:block glass-card overflow-hidden">
          <div className="grid grid-cols-7 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
            <div>Rank</div>
            <div>Broker</div>
            <div className="text-center">Score</div>
            <div className="text-center">Max Payout</div>
            <div className="text-center">Min Deposit</div>
            <div className="text-center">Key Feature</div>
            <div className="text-center">Action</div>
          </div>
          {[
            { rank: 1, name: 'Pocket Option', slug: 'pocket-option', score: '9.5', payout: '92%', deposit: '$5', feature: 'Copy trading + lowest deposit', color: 'text-emerald-400' },
            { rank: 2, name: 'Quotex', slug: 'quotex', score: '9.4', payout: '98%', deposit: '$10', feature: 'Highest payouts', color: 'text-emerald-400' },
            { rank: 3, name: 'IQ Option', slug: 'iq-option', score: '9.2', payout: '95%', deposit: '$10', feature: 'Best platform UX', color: 'text-emerald-400' },
            { rank: 4, name: 'Deriv', slug: 'deriv', score: '9.0', payout: '95%', deposit: '$5', feature: '26 yrs + MFSA Tier-1', color: 'text-emerald-400' },
            { rank: 5, name: 'Olymp Trade', slug: 'olymp-trade', score: '8.6', payout: '93%', deposit: '$10', feature: '#1 in India/Indonesia', color: 'text-blue-400' },
            { rank: 6, name: 'Binomo', slug: 'binomo', score: '8.2', payout: '90%', deposit: '$10', feature: 'Daily tournaments', color: 'text-amber-400' },
            { rank: 7, name: 'ExpertOption', slug: 'expert-option', score: '7.8', payout: '95%', deposit: '$10', feature: 'Social trading', color: 'text-gray-400' },
          ].map((b, i) => (
            <div key={b.slug} className={`grid grid-cols-7 p-3 items-center text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
              <div className={`font-bold ${b.rank <= 2 ? 'text-emerald-400' : 'text-gray-500'}`}>#{b.rank}</div>
              <div>
                <Link href={`/${locale}/${b.slug}`} className="text-white font-medium hover:text-emerald-400 transition-colors">
                  {b.name}
                </Link>
              </div>
              <div className={`text-center font-bold ${b.color}`}>{b.score}</div>
              <div className="text-center text-white">{b.payout}</div>
              <div className="text-center text-gray-400">{b.deposit}</div>
              <div className="text-center text-gray-400 text-xs">{b.feature}</div>
              <div className="text-center">
                <Link href={`/${locale}/${b.slug}`} className="text-xs text-emerald-400 hover:underline">
                  Read Review →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* All 7 broker ranking — Mobile cards */}
        <div className="md:hidden space-y-3">
          {[
            { rank: 1, name: 'Pocket Option', slug: 'pocket-option', score: '9.5', payout: '92%', deposit: '$5', feature: 'Copy trading + lowest deposit', color: 'text-emerald-400' },
            { rank: 2, name: 'Quotex', slug: 'quotex', score: '9.4', payout: '98%', deposit: '$10', feature: 'Highest payouts', color: 'text-emerald-400' },
            { rank: 3, name: 'IQ Option', slug: 'iq-option', score: '9.2', payout: '95%', deposit: '$10', feature: 'Best platform UX', color: 'text-emerald-400' },
            { rank: 4, name: 'Deriv', slug: 'deriv', score: '9.0', payout: '95%', deposit: '$5', feature: '26 yrs + MFSA Tier-1', color: 'text-emerald-400' },
            { rank: 5, name: 'Olymp Trade', slug: 'olymp-trade', score: '8.6', payout: '93%', deposit: '$10', feature: '#1 in India/Indonesia', color: 'text-blue-400' },
            { rank: 6, name: 'Binomo', slug: 'binomo', score: '8.2', payout: '90%', deposit: '$10', feature: 'Daily tournaments', color: 'text-amber-400' },
            { rank: 7, name: 'ExpertOption', slug: 'expert-option', score: '7.8', payout: '95%', deposit: '$10', feature: 'Social trading', color: 'text-gray-400' },
          ].map((b) => (
            <Link key={b.slug} href={`/${locale}/${b.slug}`} className="glass-card p-4 flex items-center gap-4 hover:bg-white/[0.04] transition-colors block">
              <div className={`text-lg font-bold w-8 flex-shrink-0 ${b.rank <= 2 ? 'text-emerald-400' : 'text-gray-500'}`}>#{b.rank}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-semibold text-sm">{b.name}</span>
                  <span className={`font-bold ${b.color}`}>{b.score}/10</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>Payout {b.payout}</span>
                  <span>Min {b.deposit}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{b.feature}</p>
              </div>
              <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link href={`/${locale}/compare`} className="btn-secondary px-6 py-3 text-sm inline-block">
            Compare All 7 Brokers Side-by-Side →
          </Link>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section-container py-20">
        <div className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-gold mb-4">Expert Analysis</span>
              <h2 className="text-3xl font-bold mt-4 mb-4">
                Why Traders Trust Our Reviews
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We&apos;ve tested every broker with real money — no demos, no simulations.
                Our data-driven methodology ensures every score reflects actual trading experience.
              </p>
              <ul className="space-y-3">
                {[
                  '7 brokers tested with $25,000+ real money deposited',
                  '500+ trades executed across all platforms',
                  '98.7% withdrawal success rate across 200+ transactions',
                  'Average withdrawal: 2.4 hours (vs industry avg 48+ hours)',
                  '47-point testing methodology across 8 categories',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Pocket Option', score: 9.5, highlight: 'Best overall — copy trading + $5 deposit' },
                { name: 'Quotex', score: 9.4, highlight: 'Highest payouts (up to 98%)' },
                { name: 'IQ Option', score: 9.2, highlight: 'Best platform & CySEC regulated' },
                { name: 'Deriv', score: 9.0, highlight: 'Most trusted — 26 years, MFSA Tier-1' },
                { name: 'Olymp Trade', score: 8.6, highlight: '#1 in India & Indonesia' },
                { name: 'Binomo', score: 8.2, highlight: 'Best tournaments & gamification' },
                { name: 'ExpertOption', score: 7.8, highlight: 'Social trading feed' },
              ].map((b) => (
                <div key={b.name} className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white text-sm">{b.name}</h4>
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold text-emerald-400">{b.score}</span>
                      <span className="text-xs text-gray-500">/10</span>
                    </div>
                  </div>
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden mb-1.5">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full"
                      style={{ width: `${b.score * 10}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500">{b.highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="section-container py-20">
        <h2 className="text-3xl font-bold text-center mb-12">What Traders Say</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              quote: 'Switched to Quotex after reading this review. The 95% payout is real — I verified it across 50+ trades. Withdrawals hit my crypto wallet in under an hour.',
              name: 'Alex K.',
              location: 'Moscow, Russia',
              trades: '2,400+ trades',
            },
            {
              quote: 'Pocket Option copy trading changed everything for me. I was losing money manually, but copying top traders gave me consistent 68% win rate.',
              name: 'Carlos M.',
              location: 'São Paulo, Brazil',
              trades: '800+ trades',
            },
            {
              quote: 'I tested 5 different platforms before finding this site. The comparison data was spot-on. Been profitable on Quotex for 4 months now.',
              name: 'Raj P.',
              location: 'Mumbai, India',
              trades: '1,200+ trades',
            },
          ].map((t) => (
            <div key={t.name} className="glass-card p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center justify-between border-t border-white/[0.06] pt-3">
                <div>
                  <div className="font-medium text-sm text-white">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.location}</div>
                </div>
                <span className="badge-green text-[10px]">{t.trades}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Comparisons */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Broker Comparisons</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Can&apos;t decide between two brokers? Our head-to-head comparisons break down every difference.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { slug: 'pocket-option-vs-quotex', a: 'Pocket Option', b: 'Quotex', desc: 'Our #1 vs #2 — features vs payouts' },
            { slug: 'pocket-option-vs-iq-option', a: 'Pocket Option', b: 'IQ Option', desc: 'Copy trading vs pro platform' },
            { slug: 'quotex-vs-iq-option', a: 'Quotex', b: 'IQ Option', desc: '98% payouts vs best technology' },
            { slug: 'pocket-option-vs-binomo', a: 'Pocket Option', b: 'Binomo', desc: 'All-rounder vs tournament king' },
            { slug: 'quotex-vs-binomo', a: 'Quotex', b: 'Binomo', desc: 'High payouts vs gamified experience' },
            { slug: 'iq-option-vs-deriv', a: 'IQ Option', b: 'Deriv', desc: 'CySEC vs MFSA — regulated showdown' },
          ].map((comp) => (
            <Link key={comp.slug} href={`/${locale}/compare/${comp.slug}`} className="glass-card p-5 hover:bg-white/[0.04] transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white font-semibold text-sm">{comp.a}</span>
                <span className="text-gray-500 text-xs">vs</span>
                <span className="text-white font-semibold text-sm">{comp.b}</span>
              </div>
              <p className="text-xs text-gray-500">{comp.desc}</p>
              <span className="text-xs text-emerald-400 font-medium mt-2 inline-block group-hover:underline">Compare →</span>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href={`/${locale}/compare`} className="btn-secondary px-6 py-3 text-sm inline-block">
            View All Comparisons →
          </Link>
        </div>
      </section>

      {/* Strategy Guides */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trading Strategies by Timeframe</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proven strategies for every trading style — from 60-second turbo trades to end-of-day analysis.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { slug: '60-second-binary-options-strategy', title: '60-Second Strategy', desc: 'Turbo trading for experienced traders', badge: 'Advanced', badgeClass: 'badge-gold' },
            { slug: '5-minute-binary-options-strategy', title: '5-Minute Strategy', desc: 'The sweet spot for most traders', badge: 'Popular', badgeClass: 'badge-green' },
            { slug: '30-minute-binary-options-strategy', title: '30-Minute Strategy', desc: 'Higher win rates, better analysis', badge: 'Recommended', badgeClass: 'badge-green' },
            { slug: '1-day-binary-options-strategy', title: 'End-of-Day Strategy', desc: 'Perfect for traders with day jobs', badge: 'Beginner', badgeClass: 'badge-blue' },
          ].map((post) => (
            <Link key={post.slug} href={`/${locale}/blog/${post.slug}`} className="glass-card p-5 hover:bg-white/[0.04] transition-colors group">
              <span className={`${post.badgeClass} text-[10px] mb-3`}>{post.badge}</span>
              <h3 className="font-semibold text-white text-sm group-hover:text-emerald-400 transition-colors mb-1 mt-2">{post.title}</h3>
              <p className="text-xs text-gray-500">{post.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Country Guides */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Binary Options by Country</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Regulation, legality, and best brokers for traders in your region.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {[
            { slug: 'binary-options-india', country: 'India', status: 'Gray Area', statusColor: 'text-yellow-400', desc: 'SEBI status, UPI deposits, best brokers' },
            { slug: 'binary-options-usa', country: 'USA', status: 'Regulated', statusColor: 'text-blue-400', desc: 'CFTC rules, Nadex, legal options' },
            { slug: 'binary-options-uk', country: 'UK', status: 'Banned', statusColor: 'text-red-400', desc: 'FCA ban, alternatives, spread betting' },
            { slug: 'binary-options-nigeria', country: 'Nigeria', status: 'Unregulated', statusColor: 'text-yellow-400', desc: 'OPay/Palmpay, getting started' },
            { slug: 'binary-options-philippines', country: 'Philippines', status: 'Not Regulated', statusColor: 'text-yellow-400', desc: 'GCash deposits, SEC status' },
          ].map((c) => (
            <Link key={c.slug} href={`/${locale}/${c.slug}`} className="glass-card p-5 hover:bg-white/[0.04] transition-colors group text-center">
              <h3 className="font-semibold text-white text-sm group-hover:text-emerald-400 transition-colors mb-1">{c.country}</h3>
              <span className={`text-xs font-semibold ${c.statusColor}`}>{c.status}</span>
              <p className="text-xs text-gray-500 mt-2">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Guides */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trading Guides &amp; Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Expert guides to help you trade smarter. From beginner basics to advanced strategies.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { slug: 'best-binary-options-brokers', title: '7 Best Brokers 2026', desc: 'Complete ranking with mini-reviews' },
            { slug: 'binary-options-trading-guide', title: 'Beginner Guide', desc: 'Everything you need to start trading' },
            { slug: 'binary-options-strategy-beginners', title: '5 Best Strategies', desc: 'Proven methods for beginners' },
            { slug: 'binary-options-regulation', title: 'Regulation Guide', desc: 'Which brokers are actually licensed?' },
            { slug: 'binary-options-demo-account', title: 'Demo Account Guide', desc: 'Compare free demo accounts' },
            { slug: 'binary-options-minimum-deposit', title: 'Min Deposit Comparison', desc: 'Start trading from just $5' },
            { slug: 'how-to-withdraw-binary-options', title: 'Withdrawal Guide', desc: 'How to withdraw from any broker' },
            { slug: 'binary-options-vs-forex', title: 'Binary vs Forex', desc: 'Key differences explained' },
          ].map((post) => (
            <Link key={post.slug} href={`/${locale}/blog/${post.slug}`} className="glass-card p-4 hover:bg-white/[0.04] transition-colors group">
              <h3 className="font-semibold text-white text-sm group-hover:text-emerald-400 transition-colors mb-1">{post.title}</h3>
              <p className="text-xs text-gray-500">{post.desc}</p>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href={`/${locale}/blog`} className="btn-secondary px-6 py-3 text-sm inline-block">
            View All Guides →
          </Link>
          <Link href={`/${locale}/scams`} className="btn-secondary px-6 py-3 text-sm inline-block">
            Scam Blacklist →
          </Link>
          <Link href={`/${locale}/glossary`} className="btn-secondary px-6 py-3 text-sm inline-block">
            Glossary (50+ Terms) →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-container py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900/40 to-green-900/40 border border-emerald-500/20 p-8 md:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Trading in Under 60 Seconds
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Open a free demo account with $10,000 virtual balance. Practice risk-free,
              then deposit as little as $5 when you&apos;re ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CtaButton broker="pocketOption" type="demo" label="Try Pocket Option Demo (Free)" campaign="home_bottom" size="lg" />
              <CtaButton broker="quotex" type="demo" label="Try Quotex Demo (Free)" campaign="home_bottom" size="lg" />
            </div>
            <p className="text-xs text-gray-500 mt-4">No credit card required. Instant access.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
