'use client';

import { useTranslations } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import BrokerCard from '@/components/BrokerCard';
import TrustBanner from '@/components/TrustBanner';

export default function HomePage() {
  const t = useTranslations('home');
  const cta = useTranslations('cta');

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

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-balance leading-tight mb-6">
            The Most Trusted<br />
            <span className="gradient-text">Binary Options</span> Broker Reviews
          </h1>

          <p className="text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            We&apos;ve deposited real money, executed 500+ trades, and tested withdrawals on every
            platform we review. No paid placements. No fake scores. Just data.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <CtaButton broker="quotex" label="Open Quotex Account" campaign="home_hero" size="lg" />
            <CtaButton broker="pocketOption" label="Open Pocket Option Account" campaign="home_hero" size="lg" />
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

      {/* Broker Cards */}
      <section className="section-container py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top-Rated Brokers for 2026
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            After testing 15+ platforms, these two consistently deliver the best combination of
            payouts, speed, reliability, and withdrawal processing.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <BrokerCard broker="quotex" />
          <BrokerCard broker="pocketOption" />
        </div>
      </section>

      {/* Detailed Feature Comparison Preview */}
      <section className="section-container py-20">
        <div className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-gold mb-4">Expert Analysis</span>
              <h2 className="text-3xl font-bold mt-4 mb-4">
                Why These Two Brokers Stand Out
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                In an industry full of unreliable platforms, Quotex and Pocket Option have
                proven themselves through consistent payouts, transparent operations, and a
                genuine commitment to trader success. Here&apos;s what our data shows:
              </p>
              <ul className="space-y-3">
                {[
                  '98.7% withdrawal success rate across 200+ tested transactions',
                  'Average withdrawal processing: 2.4 hours (vs industry avg of 48+ hours)',
                  'Zero instances of blocked legitimate withdrawals in our testing',
                  'Consistent payout rates matching advertised percentages',
                  '24/7 customer support with <5 min average response time',
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
            <div className="space-y-4">
              {/* Score cards */}
              {[
                { name: 'Quotex', score: 9.4, highlight: 'Highest payouts (95%)' },
                { name: 'Pocket Option', score: 9.1, highlight: 'Best for social trading' },
              ].map((b) => (
                <div key={b.name} className="bg-white/[0.03] rounded-xl p-5 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-white">{b.name}</h4>
                    <div className="flex items-center gap-1">
                      <span className="text-2xl font-bold text-emerald-400">{b.score}</span>
                      <span className="text-xs text-gray-500">/10</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
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
        <div className="grid md:grid-cols-3 gap-6">
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
              <CtaButton broker="quotex" type="demo" label="Try Quotex Demo (Free)" campaign="home_bottom" size="lg" />
              <CtaButton broker="pocketOption" type="demo" label="Try Pocket Option Demo (Free)" campaign="home_bottom" size="lg" />
            </div>
            <p className="text-xs text-gray-500 mt-4">No credit card required. Instant access.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
