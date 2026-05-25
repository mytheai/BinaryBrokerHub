'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

/* ------------------------------------------------------------------ */
/*  Checkmark icon reused throughout the page                         */
/* ------------------------------------------------------------------ */
function Check() {
  return (
    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Small bullet point                                                */
/* ------------------------------------------------------------------ */
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2 text-sm text-gray-400">
      <div className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
      {children}
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  Scoring categories data                                           */
/* ------------------------------------------------------------------ */
const scoringCategories = [
  {
    title: 'Payouts & Trading',
    weight: '25%',
    badge: 'badge-green',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    points: [
      'Max payout percentage tested across 10+ asset classes',
      'Average observed payout vs advertised payout',
      'Trade execution speed (measured in milliseconds)',
      'Slippage analysis across market conditions',
      'OTC vs regular market payout comparison',
      'Payout consistency during high-volatility events',
      'Comparison to industry averages across all durations',
    ],
  },
  {
    title: 'Platform & Technology',
    weight: '20%',
    badge: 'badge-blue',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    points: [
      'UI/UX quality assessment (desktop, web, mobile)',
      'Charting tools and technical indicators available',
      'Order types and expiry time options',
      'Demo account quality and limitations',
      'Platform stability and uptime monitoring (30-day)',
      'Mobile app feature parity with desktop',
      'Page load and chart rendering performance',
    ],
  },
  {
    title: 'Trust & Regulation',
    weight: '20%',
    badge: 'badge-gold',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    points: [
      'Regulatory license verification (direct with regulator)',
      'License tier classification (Tier 1: CySEC/MFSA, Tier 2: IFMRRC/FinaCom, Tier 3: None)',
      'Company history, ownership transparency, and track record',
      'Segregated client funds verification',
      'Investor protection scheme participation',
      'Public complaint analysis (forums, Trustpilot, app stores)',
    ],
  },
  {
    title: 'Features & Tools',
    weight: '15%',
    badge: 'badge-blue',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    points: [
      'Copy/social trading availability and quality',
      'Automation tools (bots, algorithmic trading)',
      'Tournaments and competitions (frequency, prizes)',
      'Educational resources depth and quality',
      'Unique platform-specific features',
      'Trading signals and market analysis tools',
    ],
  },
  {
    title: 'Customer Support',
    weight: '10%',
    badge: 'badge-green',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    points: [
      '24/7 availability testing across time zones',
      'Response time measurement (live chat, email, phone)',
      'Language support breadth and quality',
      'Knowledge base comprehensiveness',
      'Issue resolution effectiveness and follow-up',
    ],
  },
  {
    title: 'Banking & Withdrawals',
    weight: '10%',
    badge: 'badge-gold',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    points: [
      'Number and variety of deposit methods',
      'Withdrawal processing time (actual tested, not advertised)',
      'Fees and minimum deposit/withdrawal amounts',
      'KYC verification requirements and speed',
      'Crypto vs fiat withdrawal speed comparison',
      'Withdrawal rejection rate in our testing',
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Testing process steps                                             */
/* ------------------------------------------------------------------ */
const testingSteps = [
  {
    step: 1,
    title: 'Account Registration & KYC',
    description: 'We create real accounts and complete full identity verification on every platform. We measure how long KYC takes and document any friction.',
    duration: '1-3 days',
  },
  {
    step: 2,
    title: 'Deposit Testing',
    description: 'We deposit real money using 3+ different methods per broker (credit card, e-wallet, crypto). We track processing times, fees, and minimum requirements.',
    duration: '1-2 days',
  },
  {
    step: 3,
    title: 'Trading Execution',
    description: 'We execute 100+ trades per broker across multiple asset classes and timeframes. We measure execution speed, slippage, and actual vs advertised payouts.',
    duration: '2-4 weeks',
  },
  {
    step: 4,
    title: 'Feature Testing',
    description: 'Every available feature is tested: copy trading, tournaments, indicators, bots, signals, educational content, and demo accounts.',
    duration: '1-2 weeks',
  },
  {
    step: 5,
    title: 'Withdrawal Testing',
    description: 'We process full withdrawal cycles using every available method. We record exact processing times from request to receipt.',
    duration: '1-2 weeks',
  },
  {
    step: 6,
    title: 'Support Testing',
    description: 'We contact support 3+ times per broker via live chat, email, and phone (where available). We rate response time, accuracy, and resolution quality.',
    duration: '1-2 weeks',
  },
  {
    step: 7,
    title: 'Long-Term Monitoring',
    description: 'We maintain active accounts and monitor platform stability, payout consistency, regulatory changes, and user complaints over 6-12 months.',
    duration: '6-12 months',
  },
  {
    step: 8,
    title: 'Scoring & Publication',
    description: 'All data is compiled, weighted according to our category system, and scored. The review is written, fact-checked, and published with full transparency.',
    duration: '3-5 days',
  },
];

/* ================================================================== */
/*  Main Page Component                                               */
/* ================================================================== */
export default function MethodologyPage() {
  const locale = useLocale();

  return (
    <div>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />

        <div className="relative section-container py-20 md:py-28 text-center">
          <span className="badge-gold mb-4">Full Transparency</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 mb-6">
            Our <span className="gradient-text">47-Point</span> Testing Methodology
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            How we test and score every binary options broker. Real money, real trades,
            real withdrawals — no shortcuts.
          </p>
        </div>
      </section>

      <div className="section-container pb-20">
        <div className="max-w-4xl mx-auto">

          {/* ======================================================== */}
          {/*  TESTING OVERVIEW — KEY STATS                             */}
          {/* ======================================================== */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: '$25,000+', label: 'Real Money Deposited' },
              { value: '500+', label: 'Trades Executed' },
              { value: '200+', label: 'Withdrawals Processed' },
              { value: '6-12 mo', label: 'Monitoring per Broker' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-5 text-center">
                <div className="text-2xl md:text-3xl font-extrabold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* ======================================================== */}
          {/*  PHILOSOPHY                                               */}
          {/* ======================================================== */}
          <div className="glass-card p-8 mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We believe the binary options industry needs honest, data-driven reviews.
              Too many review sites accept payment for positive reviews or have never actually
              traded on the platforms they recommend. We take a different approach:
            </p>
            <ul className="space-y-3">
              {[
                'Every platform is tested with real money — we deposit, trade, and withdraw',
                'No broker can pay for a higher score or positive review',
                'We maintain active accounts for 6+ months before publishing',
                'All data points are from our direct experience, not marketing materials',
                'We update reviews quarterly as platforms change',
                'Our scores are weighted by what matters most to real traders',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ======================================================== */}
          {/*  SCORING CATEGORIES (6 categories)                        */}
          {/* ======================================================== */}
          <h2 className="text-3xl font-bold mb-4">Scoring Categories</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Each broker is evaluated across 6 weighted categories with specific, measurable criteria.
            Categories that matter most to traders — payouts, platform quality, and trust — carry the
            highest weight.
          </p>

          <div className="space-y-6 mb-16">
            {scoringCategories.map((cat) => (
              <div key={cat.title} className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-emerald-400">{cat.icon}</div>
                    <h3 className="font-bold text-white text-lg">{cat.title}</h3>
                  </div>
                  <span className={cat.badge}>{cat.weight} weight</span>
                </div>
                <ul className="space-y-2">
                  {cat.points.map((point) => (
                    <Bullet key={point}>{point}</Bullet>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ======================================================== */}
          {/*  TESTING PROCESS (8 steps)                                */}
          {/* ======================================================== */}
          <h2 className="text-3xl font-bold mb-4">Our Testing Process</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Every broker goes through the same rigorous 8-step process. No exceptions, no shortcuts.
            Here&apos;s exactly what happens from start to finish:
          </p>

          <div className="space-y-4 mb-16">
            {testingSteps.map((s) => (
              <div key={s.step} className="glass-card p-6 flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-emerald-400">{s.step}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-white">{s.title}</h3>
                    <span className="text-xs text-gray-500 flex-shrink-0 ml-3">{s.duration}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ======================================================== */}
          {/*  HOW WE STAY INDEPENDENT                                  */}
          {/* ======================================================== */}
          <div className="glass-card p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">How We Stay Independent</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-white mb-2">Affiliate Relationship Disclosure</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  BinaryBrokerHub earns revenue through affiliate partnerships with some of the brokers
                  we review. When you open an account through our links, we may receive a commission at
                  no additional cost to you. We disclose every affiliate relationship openly.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Scores Are Never for Sale</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Affiliate commissions do not influence our scores. Our testing methodology and scoring
                  system remain identical regardless of whether a broker has an affiliate program with us.
                  We would never recommend a platform we wouldn&apos;t use ourselves.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Conflict of Interest Policy</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  When a broker we have an affiliate relationship with scores poorly, we publish the score
                  as-is. We have declined affiliate partnerships with brokers that did not meet our minimum
                  standards. Revenue never overrides accuracy.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Monthly Score Verification</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Every month, we verify key data points (payout rates, withdrawal times, regulatory
                  status) to ensure our scores remain accurate. If something changes, we update
                  immediately — not on a quarterly schedule.
                </p>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/*  SCORE INTERPRETATION                                     */}
          {/* ======================================================== */}
          <h2 className="text-3xl font-bold mb-6">Score Interpretation</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Our final score is a weighted average across all 6 categories. Here&apos;s what each
            score range means for traders:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            <div className="glass-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-extrabold text-emerald-400">9.0 - 10.0</span>
                <span className="badge-green text-xs">Excellent</span>
              </div>
              <p className="text-sm text-gray-400">
                Highly recommended. Top-tier platforms with strong regulation, fast withdrawals,
                and competitive payouts. Suitable for all trader levels.
              </p>
            </div>

            <div className="glass-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-extrabold text-yellow-400">8.0 - 8.9</span>
                <span className="badge-gold text-xs">Good</span>
              </div>
              <p className="text-sm text-gray-400">
                Solid choice with minor limitations. Good platforms that may lack certain features
                or have slightly longer processing times.
              </p>
            </div>

            <div className="glass-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-extrabold text-orange-400">7.0 - 7.9</span>
                <span className="badge-blue text-xs">Fair</span>
              </div>
              <p className="text-sm text-gray-400">
                Viable but better alternatives exist. These brokers have notable weaknesses
                in key areas like regulation, payouts, or withdrawal speed.
              </p>
            </div>

            <div className="glass-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-extrabold text-red-400">&lt; 7.0</span>
              </div>
              <p className="text-sm text-gray-400">
                Not recommended. Significant issues with trust, payouts, or withdrawals.
                We advise traders to choose a higher-rated alternative.
              </p>
            </div>
          </div>

          {/* ======================================================== */}
          {/*  UPDATE POLICY                                            */}
          {/* ======================================================== */}
          <div className="glass-card p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Update Policy</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Binary options platforms change frequently. Our review process doesn&apos;t stop at
              publication — we continuously monitor and update our scores.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Monthly Data Verification',
                  desc: 'Key metrics (payouts, withdrawal times, uptime) are verified every month against live data.',
                },
                {
                  title: 'Quarterly Full Re-Testing',
                  desc: 'Complete re-evaluation of all 47 criteria every quarter, with fresh deposits and withdrawals.',
                },
                {
                  title: 'Immediate Regulatory Updates',
                  desc: 'License changes, regulatory actions, or security incidents trigger an immediate score review.',
                },
                {
                  title: 'Score Adjustment Triggers',
                  desc: 'Payout changes >5%, withdrawal delays >48h, or new complaint patterns trigger re-scoring.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white/[0.03] rounded-lg p-4">
                  <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ======================================================== */}
          {/*  INTERNAL LINKS — EXPLORE MORE                            */}
          {/* ======================================================== */}
          <div className="glass-card p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">See Our Methodology in Action</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Read our broker reviews to see how this methodology produces detailed, data-driven analysis:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { name: 'Pocket Option Review', score: '9.5/10', href: `/${locale}/pocket-option` },
                { name: 'Quotex Review', score: '9.4/10', href: `/${locale}/quotex` },
                { name: 'IQ Option Review', score: '9.2/10', href: `/${locale}/iq-option` },
                { name: 'Deriv Review', score: '9.0/10', href: `/${locale}/deriv` },
              ].map((broker) => (
                <Link
                  key={broker.href}
                  href={broker.href}
                  className="flex items-center justify-between bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] rounded-xl p-4 transition-colors group"
                >
                  <span className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {broker.name}
                  </span>
                  <span className="badge-green text-xs">{broker.score}</span>
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href={`/${locale}/compare`} className="btn-primary text-sm py-2.5 px-5">
                Compare All Brokers
              </Link>
              <Link
                href={`/${locale}/blog`}
                className="text-sm py-2.5 px-5 border border-white/[0.1] rounded-xl text-gray-300 hover:text-white hover:border-white/[0.2] transition-colors"
              >
                Read Our Blog
              </Link>
              <Link
                href={`/${locale}/blog/how-to-choose-binary-options-broker`}
                className="text-sm py-2.5 px-5 border border-white/[0.1] rounded-xl text-gray-300 hover:text-white hover:border-white/[0.2] transition-colors"
              >
                How to Choose a Broker
              </Link>
            </div>
          </div>

          {/* ======================================================== */}
          {/*  AFFILIATE DISCLOSURE                                     */}
          {/* ======================================================== */}
          <div className="border border-white/[0.06] rounded-xl p-6 bg-white/[0.01]">
            <h2 className="text-lg font-bold mb-3">Affiliate Disclosure</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              BinaryBrokerHub earns revenue through affiliate partnerships with the brokers we review.
              When you open an account through our links, we may receive a commission at no additional
              cost to you. <strong className="text-gray-300">This does not influence our scores or recommendations.</strong> We
              would never recommend a platform we wouldn&apos;t use ourselves. Our testing methodology
              and scoring system remain the same regardless of affiliate relationships.
              Learn more on our{' '}
              <Link href={`/${locale}/about`} className="text-emerald-400 hover:underline">
                About page
              </Link>.
            </p>
          </div>

          {/* Risk Disclaimer */}
          <p className="text-xs text-gray-600 mt-8 text-center max-w-lg mx-auto">
            Trading binary options involves significant risk. You may lose some or all of your invested capital.
            Only trade with money you can afford to lose.
          </p>
        </div>
      </div>
    </div>
  );
}
