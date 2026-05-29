'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import Breadcrumbs from '@/components/Breadcrumbs';

const teamMembers = [
  {
    initials: 'AC',
    name: 'Alex Chen',
    role: 'Founder & Lead Analyst',
    badge: 'badge-gold',
    years: 12,
    specialties: ['Platform Technology', 'Payout Analysis', 'Withdrawal Testing'],
    bio: '12 years in financial markets spanning forex, CFDs, and binary options. Former quantitative analyst at a proprietary trading firm. Personally executed 5,000+ binary options trades across all 7 reviewed platforms and oversees our 47-point testing methodology.',
    quote: '"Every score on this site is backed by real trades and real withdrawals. If we haven\'t tested it ourselves, we don\'t publish it."',
    gradient: 'from-emerald-400 to-green-600',
  },
  {
    initials: 'MS',
    name: 'Maria Santos',
    role: 'Regulatory & Compliance Analyst',
    badge: 'badge-blue',
    years: 8,
    specialties: ['CySEC & MFSA Regulation', 'IFMRRC & FinaCom Frameworks', 'Broker Safety Scoring'],
    bio: '8 years in financial regulation and compliance. Former compliance officer at a CySEC-regulated brokerage. Monitors regulatory changes across all jurisdictions and leads our broker safety and trust scoring methodology.',
    quote: '"Regulation is the first thing traders should check — and the last thing most review sites mention. We make it central to every review."',
    gradient: 'from-blue-400 to-indigo-600',
  },
  {
    initials: 'DP',
    name: 'David Petrov',
    role: 'Trading Strategy & Education Lead',
    badge: 'badge-green',
    years: 10,
    specialties: ['Technical Analysis', 'Risk Management', 'Copy Trading'],
    bio: '10 years as an active trader across forex, binary options, and crypto markets. Author of 20+ trading guides on BinaryBrokerHub. Tests all trading features, strategies, and tools, and manages our demo account testing program.',
    quote: '"A broker is only as good as the trades you can execute on it. I test every feature a real trader would use — from chart indicators to copy trading."',
    gradient: 'from-purple-400 to-violet-600',
  },
];

const scoringCriteria = [
  { label: 'Payouts', weight: 25, color: 'bg-emerald-400' },
  { label: 'Platform', weight: 20, color: 'bg-blue-400' },
  { label: 'Trust & Regulation', weight: 20, color: 'bg-amber-400' },
  { label: 'Features', weight: 15, color: 'bg-purple-400' },
  { label: 'Support', weight: 10, color: 'bg-pink-400' },
  { label: 'Banking', weight: 10, color: 'bg-cyan-400' },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Independence',
    desc: 'BinaryBrokerHub is not owned, operated, or funded by any broker. Our editorial team has full autonomy over scores and recommendations.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Transparency',
    desc: 'Every score is explained with supporting data. Our methodology is public, and we disclose all affiliate relationships.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Real-Money Testing',
    desc: 'We deposit real funds, execute real trades, and process real withdrawals. No demo-only reviews. $25,000+ invested in testing.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Continuously Updated',
    desc: 'All broker data is re-verified monthly. When platforms change fees, payouts, or policies, our reviews reflect it within 30 days.',
  },
];

export default function AboutPage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[{ label: 'About Us' }]} />
      {/* Hero */}
      <section className="section-container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-gold mb-4">About Us</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4">
              About BinaryBrokerHub — Independent Binary Options Analysis
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Meet the team behind the reviews. 30+ years of combined experience in financial markets,
              regulatory compliance, and active trading.
            </p>
          </div>

          {/* Mission */}
          <div className="glass-card p-8 mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We provide honest, data-driven binary options broker reviews. No paid placements.
              No fake scores. Every review is based on real-money testing with <strong className="text-white">$25,000+
              deposited across 7 platforms</strong>.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The binary options review space is plagued by sites that accept payment for positive
              coverage, publish reviews without ever trading, or inflate scores for affiliate
              commissions. BinaryBrokerHub was founded to be the alternative — a site where traders
              can find reviews they can actually trust.
            </p>
          </div>

          {/* Team */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Our Team</h2>
              <p className="text-gray-400">
                The analysts behind every review, score, and recommendation on BinaryBrokerHub.
              </p>
            </div>

            <div className="space-y-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="glass-card p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-3`}>
                        <span className="text-black font-bold text-xl">{member.initials}</span>
                      </div>
                      <span className={member.badge}>{member.years} Years Exp.</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                        <span className="text-sm text-emerald-400 font-medium">{member.role}</span>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {member.bio}
                      </p>

                      {/* Specialties */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.specialties.map((s) => (
                          <span key={s} className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.05] text-gray-400 border border-white/[0.08]">
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="border-l-2 border-emerald-500/30 pl-4 text-sm text-gray-400 italic">
                        {member.quote}
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testing Process */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Our Testing Process</h2>
              <p className="text-gray-400">
                Every broker review follows a rigorous, standardized process.
              </p>
            </div>

            <div className="glass-card p-6 md:p-8 mb-6">
              <h3 className="text-lg font-bold mb-4">47-Point Testing Methodology</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Each broker undergoes a comprehensive evaluation across 47 individual data points.
                We deposit real money, execute 100+ trades per platform, test withdrawal processing
                times, evaluate customer support responsiveness, and verify regulatory status — among
                dozens of other criteria.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/[0.03] rounded-xl p-4 text-center border border-white/[0.06]">
                  <div className="text-2xl font-bold text-emerald-400">$25,000+</div>
                  <div className="text-xs text-gray-500 mt-1">Deposited Across Platforms</div>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 text-center border border-white/[0.06]">
                  <div className="text-2xl font-bold text-emerald-400">100+</div>
                  <div className="text-xs text-gray-500 mt-1">Trades Per Broker</div>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 text-center border border-white/[0.06]">
                  <div className="text-2xl font-bold text-emerald-400">47</div>
                  <div className="text-xs text-gray-500 mt-1">Data Points Evaluated</div>
                </div>
              </div>

              <Link
                href={`/${locale}/methodology`}
                className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                View full methodology breakdown
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Scoring Criteria */}
            <div className="glass-card p-6 md:p-8 mb-6">
              <h3 className="text-lg font-bold mb-4">Scoring Criteria</h3>
              <p className="text-sm text-gray-400 mb-6">
                Each broker&apos;s final score is a weighted average across six key categories:
              </p>
              <div className="space-y-3">
                {scoringCriteria.map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <span className="text-sm text-gray-300 w-36 flex-shrink-0">{c.label}</span>
                    <div className="flex-1 bg-white/[0.03] rounded-full h-3 overflow-hidden">
                      <div className={`h-full rounded-full ${c.color}`} style={{ width: `${c.weight * 4}%` }} />
                    </div>
                    <span className="text-sm font-medium text-gray-400 w-10 text-right">{c.weight}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* No Paid Reviews */}
            <div className="border border-emerald-500/20 bg-emerald-500/[0.03] rounded-xl p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">We Reject Paid Reviews</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    No broker can purchase a higher score, a positive review, or preferential placement
                    on BinaryBrokerHub. Our revenue comes from affiliate commissions earned when users
                    sign up through our links, but this never influences our editorial content or scores.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Our Values</h2>
              <p className="text-gray-400">
                The principles that guide every review we publish.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {v.icon}
                    <h3 className="font-bold text-white">{v.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Standards */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Editorial Standards</h2>
            </div>

            <div className="glass-card p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-white mb-2">Fact-Checking Process</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Every claim in our reviews is verified against primary sources: the broker&apos;s
                    official documentation, regulatory databases, and our own testing data. When
                    third-party data is cited, we link directly to the source. Any factual errors
                    reported by readers are investigated and corrected within 48 hours.
                  </p>
                </div>

                <div className="border-t border-white/[0.06] pt-6">
                  <h3 className="font-bold text-white mb-2">Affiliate Disclosure</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    BinaryBrokerHub earns revenue through affiliate partnerships with some of the
                    brokers we review. When you open an account through our links, we may receive a
                    commission at no additional cost to you.{' '}
                    <strong className="text-gray-300">
                      This does not influence our scores, rankings, or recommendations.
                    </strong>{' '}
                    We would never recommend a platform we wouldn&apos;t use ourselves. Brokers cannot
                    pay for editorial coverage or higher scores.
                  </p>
                </div>

                <div className="border-t border-white/[0.06] pt-6">
                  <h3 className="font-bold text-white mb-2">Content Update Cycle</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    All broker reviews are re-verified on a monthly cycle. Our team re-tests key data
                    points — including payout rates, withdrawal speeds, and fee structures — and updates
                    reviews to reflect any changes. Major platform updates or regulatory changes trigger
                    immediate review updates outside the regular cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testing Timeline */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Testing Timeline</h2>
              <p className="text-gray-400">
                When each broker was tested and last verified. All reviews are re-checked monthly.
              </p>
            </div>

            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
                <div>Broker</div>
                <div className="text-center">Testing Period</div>
                <div className="text-center">Last Verified</div>
                <div className="text-center">Status</div>
              </div>
              {[
                { name: 'Pocket Option', period: 'Oct 2025 – May 2026', verified: 'May 2026', status: 'Active' },
                { name: 'Quotex', period: 'Nov 2025 – May 2026', verified: 'May 2026', status: 'Active' },
                { name: 'IQ Option', period: 'Sep 2025 – May 2026', verified: 'May 2026', status: 'Active' },
                { name: 'Deriv', period: 'Dec 2025 – May 2026', verified: 'May 2026', status: 'Active' },
                { name: 'Olymp Trade', period: 'Jan 2026 – May 2026', verified: 'May 2026', status: 'Active' },
                { name: 'Binomo', period: 'Jan 2026 – May 2026', verified: 'May 2026', status: 'Active' },
                { name: 'ExpertOption', period: 'Feb 2026 – May 2026', verified: 'May 2026', status: 'Active' },
              ].map((b, i) => (
                <div key={b.name} className={`grid grid-cols-4 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                  <div className="text-white font-medium">{b.name}</div>
                  <div className="text-center text-gray-400 text-xs">{b.period}</div>
                  <div className="text-center text-gray-400 text-xs">{b.verified}</div>
                  <div className="text-center"><span className="badge-green text-[10px]">{b.status}</span></div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">
              For full details on our scoring criteria and testing process, see our{' '}
              <Link href={`/${locale}/methodology`} className="text-emerald-400 hover:underline">methodology page</Link>.
              To learn how to verify broker safety yourself, read our{' '}
              <Link href={`/${locale}/scams`} className="text-emerald-400 hover:underline">scam detection guide</Link>.
            </p>
          </div>

          {/* Contact */}
          <div className="glass-card p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Contact & Feedback</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We take accuracy seriously. If you find a factual error in any of our reviews, or if
              your experience with a broker differs significantly from what we&apos;ve reported, we
              want to hear from you.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-300">
                  General inquiries: <strong className="text-white">contact@binarybrokerhub.com</strong>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <span className="text-sm text-gray-300">
                  Report a factual error: <strong className="text-white">corrections@binarybrokerhub.com</strong>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <a href="https://x.com/BinaryBrokerHub" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Follow us: <strong className="text-white">@BinaryBrokerHub</strong>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
                <a href="/feed.xml" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  RSS Feed: <strong className="text-white">binarybrokerhub.com/feed.xml</strong>
                </a>
              </div>
            </div>
          </div>

          {/* Risk Disclaimer */}
          <div className="border border-amber-500/20 bg-amber-500/[0.03] rounded-xl p-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center mt-0.5">
                <span className="text-amber-400 text-xs">!</span>
              </div>
              <p className="text-xs text-amber-200/70 leading-relaxed">
                <strong>Risk Warning:</strong> Binary options trading involves substantial risk of loss
                and is not suitable for all investors. You should not invest money you cannot afford to
                lose. BinaryBrokerHub provides information for educational purposes only and does not
                constitute financial advice. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
