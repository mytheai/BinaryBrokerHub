'use client';

export default function MethodologyPage() {
  return (
    <div>
      <section className="section-container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="badge-gold mb-4">Transparency</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4">
              Our Review Methodology
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              How we test, score, and rank binary options brokers. Full transparency on our process,
              so you can trust our recommendations.
            </p>
          </div>

          {/* Philosophy */}
          <div className="glass-card p-8 mb-12">
            <h2 className="text-xl font-bold mb-4">Our Philosophy</h2>
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
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 47-Point System */}
          <h2 className="text-3xl font-bold mb-8">Our 47-Point Testing System</h2>
          <p className="text-gray-400 mb-10">
            Each broker is evaluated across 8 categories with specific, measurable criteria.
            Here&apos;s exactly what we test and how we score:
          </p>

          <div className="space-y-6">
            {[
              {
                category: '1. Account Opening & Verification',
                weight: '10%',
                points: [
                  'Registration process speed and simplicity',
                  'Identity verification requirements and timeline',
                  'Demo account availability and limitations',
                  'Account types and tier benefits',
                ],
              },
              {
                category: '2. Deposit Process',
                weight: '10%',
                points: [
                  'Number of deposit methods available',
                  'Regional payment method support',
                  'Minimum deposit requirements',
                  'Deposit processing speed',
                  'Deposit fees (if any)',
                ],
              },
              {
                category: '3. Trading Platform',
                weight: '20%',
                points: [
                  'Interface design and usability',
                  'Chart types and technical indicators',
                  'Order execution speed (measured in ms)',
                  'Platform stability under high volatility',
                  'Available trade durations',
                  'Mobile app feature parity',
                  'Custom alerts and notifications',
                ],
              },
              {
                category: '4. Payout Rates',
                weight: '20%',
                points: [
                  'Maximum advertised payout percentage',
                  'Actual average payout (measured over 100+ trades)',
                  'Payout consistency across different assets',
                  'Payout variation during news events',
                  'Comparison to industry average',
                ],
              },
              {
                category: '5. Withdrawal Process',
                weight: '20%',
                points: [
                  'Withdrawal request to receipt time',
                  'Available withdrawal methods',
                  'Withdrawal fees',
                  'Minimum withdrawal amount',
                  'Withdrawal limits',
                  'Rejection rate in our testing',
                ],
              },
              {
                category: '6. Asset Coverage',
                weight: '8%',
                points: [
                  'Total number of tradeable assets',
                  'Forex pairs availability',
                  'Cryptocurrency coverage',
                  'Stock indices and commodities',
                ],
              },
              {
                category: '7. Customer Support',
                weight: '7%',
                points: [
                  'Support channel availability (chat, email, phone)',
                  'Average response time (measured)',
                  'Quality and accuracy of responses',
                  'Multilingual support',
                  'Support availability hours',
                ],
              },
              {
                category: '8. Extra Features & Education',
                weight: '5%',
                points: [
                  'Educational resources quality',
                  'Social/copy trading features',
                  'Tournaments and competitions',
                  'Bonus programs and promotions',
                  'Trading signals or analysis tools',
                ],
              },
            ].map((section) => (
              <div key={section.category} className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-white">{section.category}</h3>
                  <span className="badge-green">{section.weight} weight</span>
                </div>
                <ul className="space-y-2">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Scoring */}
          <div className="mt-12 glass-card p-8">
            <h2 className="text-xl font-bold mb-4">How Scores Are Calculated</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Each category receives a score from 1-10 based on our testing data. The final score
              is a weighted average using the percentages shown above. We prioritize the categories
              that matter most to real traders: payouts, withdrawals, and platform quality account
              for 60% of the final score.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/[0.03] rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-emerald-400">9.0+</div>
                <div className="text-xs text-gray-500 mt-1">Excellent — Highly Recommended</div>
              </div>
              <div className="bg-white/[0.03] rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">7.0-8.9</div>
                <div className="text-xs text-gray-500 mt-1">Good — Recommended with caveats</div>
              </div>
              <div className="bg-white/[0.03] rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-red-400">&lt;7.0</div>
                <div className="text-xs text-gray-500 mt-1">Below Average — Not Recommended</div>
              </div>
            </div>
          </div>

          {/* Disclosure */}
          <div className="mt-12 border border-white/[0.06] rounded-xl p-6 bg-white/[0.01]">
            <h2 className="text-lg font-bold mb-3">Affiliate Disclosure</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              BinaryBrokerHub earns revenue through affiliate partnerships with the brokers we review.
              When you open an account through our links, we may receive a commission at no additional
              cost to you. <strong className="text-gray-300">This does not influence our scores or recommendations.</strong> We
              would never recommend a platform we wouldn&apos;t use ourselves. Our testing methodology
              and scoring system remain the same regardless of affiliate relationships.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
