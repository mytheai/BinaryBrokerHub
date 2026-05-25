'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';

/* ------------------------------------------------------------------ */
/*  Reusable icons                                                     */
/* ------------------------------------------------------------------ */
function WarningIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  );
}

function ShieldIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function XCircle() {
  return (
    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Scam type data                                                     */
/* ------------------------------------------------------------------ */
const scamTypes = [
  {
    title: 'Fake Broker Scams',
    icon: '🏦',
    description:
      'Unregistered platforms that mimic legitimate brokers. They often claim regulation from real authorities but the license numbers are fabricated or belong to a different company.',
    warningSigns: [
      'No verifiable license on the regulator\'s official website',
      'Recently created website with no online history',
      'Generic "about us" page with stock photos of "team members"',
      'Registered in a jurisdiction with no financial oversight',
      'Copy-pasted terms and conditions from other brokers',
    ],
    howToSpot:
      'Always verify the license number directly on the regulator\'s website (CySEC, FCA, ASIC, etc.). Check the domain registration date using WHOIS lookup — scam platforms are usually less than 1-2 years old.',
  },
  {
    title: 'Signal Seller Scams',
    icon: '📡',
    description:
      'Individuals or groups selling "guaranteed" trading signals, typically through Telegram, WhatsApp, or Instagram. They promise 90-95%+ win rates and show fabricated trading results.',
    warningSigns: [
      'Claims of 90-95%+ win rates (mathematically unsustainable)',
      'Screenshots of profits that can be easily faked',
      'Pressure to join a paid group immediately',
      'No verifiable long-term track record',
      'Affiliated with a specific unregulated broker (they earn commission)',
    ],
    howToSpot:
      'No legitimate signal provider can guarantee profits. Ask for a verified third-party track record (e.g., Myfxbook for forex). If they only accept payment through crypto or wire transfer with no refund policy, walk away.',
  },
  {
    title: 'Recovery Scams',
    icon: '🎭',
    description:
      'Companies that target people who have already lost money to scam brokers. They promise to "recover" your funds for an upfront fee — then disappear with your money. This is a second layer of fraud targeting vulnerable victims.',
    warningSigns: [
      'Contacted you after you posted about being scammed',
      'Require upfront fee before any recovery work',
      'Guarantee they can recover your money (no one can guarantee this)',
      'Claim to have "connections" inside banks or regulators',
      'Pressure you to act quickly before a "deadline"',
    ],
    howToSpot:
      'Legitimate financial regulators never charge fees to process complaints. No company can guarantee fund recovery. If a "recovery expert" contacts you unsolicited, they are almost certainly running a second scam.',
  },
  {
    title: 'Auto-Trading Bot Scams',
    icon: '🤖',
    description:
      'Software or algorithms promising guaranteed profits from automated binary options trading. They show fake demo results and testimonials, then require you to deposit with their partnered (unregulated) broker.',
    warningSigns: [
      'Claims of $1,000+ daily profits with no effort',
      'Fake countdown timers ("only 3 spots left")',
      'Celebrity endorsement (always fabricated)',
      'Required to sign up with a specific broker to use the bot',
      'Demo mode shows wins, but live mode consistently loses',
    ],
    howToSpot:
      'If a bot could reliably profit from binary options, the creators would use it themselves instead of selling it. Check if the "required broker" is regulated. Fake testimonial videos often use stock footage or paid actors.',
  },
  {
    title: 'Account Manager Scams',
    icon: '👔',
    description:
      'After depositing, you are assigned an "account manager" or "senior trader" who offers to trade on your behalf. They pressure you to deposit more money, make losing trades, and block withdrawals.',
    warningSigns: [
      'Persistent phone calls pressuring you to deposit more',
      'Manager makes trades without your explicit consent',
      'Initial small profits followed by large losses',
      'Withdrawal requests are delayed, denied, or require additional deposits',
      'Manager becomes hostile or unreachable when you ask to withdraw',
    ],
    howToSpot:
      'Legitimate brokers never pressure you to deposit more. An "account manager" who trades your money is effectively running a bucket shop. Never give trading control to anyone else. If you can\'t withdraw freely, the platform is a scam.',
  },
];

/* ------------------------------------------------------------------ */
/*  Red flags checklist                                                */
/* ------------------------------------------------------------------ */
const redFlags = [
  'Guaranteed profits or win rates above 85%',
  'Pressure to deposit more money',
  'Unverifiable or fake regulation',
  'No withdrawal option or excessive withdrawal delays',
  'Cold calls or unsolicited contact',
  '"Limited time" bonus with impossible turnover requirements',
  'No clear company address or registration',
  'Platform manipulation (trades always losing by 1 pip)',
  'Only crypto deposits accepted (no bank or card options)',
  'No demo account available for testing',
  '"VIP account manager" who wants to trade for you',
  'Website less than 1 year old with no review history',
];

/* ------------------------------------------------------------------ */
/*  Safe brokers data                                                  */
/* ------------------------------------------------------------------ */
const safeBrokers = [
  { name: 'Pocket Option', score: 9.5, slug: 'pocket-option', regulation: 'IFMRRC', tier: 2, badge: 'badge-green' },
  { name: 'Quotex', score: 9.4, slug: 'quotex', regulation: 'None', tier: 3, badge: 'badge-green' },
  { name: 'IQ Option', score: 9.2, slug: 'iq-option', regulation: 'CySEC', tier: 1, badge: 'badge-blue' },
  { name: 'Deriv', score: 9.0, slug: 'deriv', regulation: 'MFSA', tier: 1, badge: 'badge-gold' },
  { name: 'Olymp Trade', score: 8.6, slug: 'olymp-trade', regulation: 'FinaCom', tier: 2, badge: 'badge-blue' },
  { name: 'Binomo', score: 8.2, slug: 'binomo', regulation: 'FinaCom', tier: 2, badge: 'badge-blue' },
  { name: 'ExpertOption', score: 7.8, slug: 'expert-option', regulation: 'None', tier: 3, badge: 'badge-gold' },
];

/* ------------------------------------------------------------------ */
/*  Regulation tiers                                                   */
/* ------------------------------------------------------------------ */
const regulationTiers = [
  {
    tier: 'Tier 1 — Highest Trust',
    badge: 'badge-green',
    color: 'border-emerald-500/30',
    regulators: ['CySEC (Cyprus)', 'MFSA (Malta)', 'FCA (UK)', 'ASIC (Australia)', 'CFTC (US)'],
    ourBrokers: ['Deriv (MFSA)', 'IQ Option (CySEC)'],
    description:
      'Tier 1 regulators enforce strict capital requirements, client fund segregation, and complaint resolution processes. They can fine or shut down non-compliant brokers.',
  },
  {
    tier: 'Tier 2 — Moderate Trust',
    badge: 'badge-gold',
    color: 'border-yellow-500/30',
    regulators: ['IFMRRC', 'FinaCom (Financial Commission)'],
    ourBrokers: ['Pocket Option (IFMRRC)', 'Olymp Trade (FinaCom)', 'Binomo (FinaCom)'],
    description:
      'Tier 2 bodies are industry self-regulatory organizations. They provide dispute resolution and compensation funds, but have less enforcement power than government regulators.',
  },
  {
    tier: 'Tier 3 — Low / None',
    badge: 'badge-blue',
    color: 'border-red-500/30',
    regulators: ['No recognized regulation', 'Self-regulated only'],
    ourBrokers: ['Quotex', 'ExpertOption'],
    description:
      'These brokers operate without recognized financial regulation. This does not automatically make them scams, but it means less consumer protection if disputes arise. Extra caution is advised.',
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ data                                                           */
/* ------------------------------------------------------------------ */
const faqItems = [
  {
    question: 'Is binary options trading a scam?',
    answer:
      'Binary options trading itself is not a scam — it is a legitimate financial instrument offered by regulated exchanges. However, the industry has attracted many fraudulent operators. The key difference is the broker: regulated, established brokers with verifiable track records are legitimate, while unregistered platforms with fake credentials are scams. Always verify regulation and start with a demo account.',
  },
  {
    question: 'Are any binary options brokers regulated?',
    answer:
      'Yes. Deriv holds an MFSA (Malta) license, IQ Option is regulated by CySEC (Cyprus), and several others hold IFMRRC or FinaCom memberships. In the US, binary options can only be legally traded on CFTC-regulated exchanges like Nadex. Always verify license numbers directly on the regulator\'s website — never trust a broker\'s claims alone.',
  },
  {
    question: 'How do I report a binary options scam?',
    answer:
      'Report to your country\'s financial regulator: CFTC/SEC (US), FCA (UK), CySEC (EU), ASIC (Australia), or BaFin (Germany). File a police report locally. Contact your bank or credit card company for a potential chargeback. Document everything — take screenshots of all trades, emails, chat messages, and transaction records before the scam platform potentially deletes your account.',
  },
  {
    question: 'Can I get my money back from a scam broker?',
    answer:
      'Recovery depends on how you paid. Credit card chargebacks have the highest success rate if filed within 120 days. Bank wire transfers are harder to recover. Cryptocurrency payments are virtually unrecoverable. File regulatory complaints and bank disputes as soon as possible. Warning: avoid "recovery companies" that charge upfront fees — most are secondary scams.',
  },
  {
    question: 'What is the safest binary options broker?',
    answer:
      'Based on our real-money testing of 7 platforms, Pocket Option (9.5/10) and Quotex (9.4/10) rank highest overall, while Deriv (MFSA) and IQ Option (CySEC) offer the strongest regulatory protection. The safest approach: use a demo account first, make a minimum deposit to test withdrawals, and never trade with money you cannot afford to lose.',
  },
  {
    question: 'Are binary options legal in my country?',
    answer:
      'Legality varies. Binary options are banned for retail traders in the EU (ESMA 2018), restricted in the UK (FCA ban) and Australia (ASIC ban). In the US, they are legal only on CFTC-regulated exchanges. Most countries in Asia, Africa, and South America have no specific binary options regulations. Check your local financial authority for current rules.',
  },
  {
    question: 'What are the biggest red flags of a scam broker?',
    answer:
      'Top red flags: guaranteed profits or 90%+ win rates, unverifiable regulation, withdrawal blocks, cold calls pressuring deposits, "limited time" bonuses with 30-50x turnover requirements, no clear company registration, platform manipulation, and celebrity endorsements. If a broker exhibits even two of these signs, avoid them.',
  },
  {
    question: 'Are signal sellers and trading bots legitimate?',
    answer:
      'The vast majority are scams. No algorithm can guarantee profits in binary options. Legitimate tools have verified third-party track records, realistic performance claims (60-70% win rate, not 95%), transparent pricing, and refund policies. If a signal seller requires you to sign up with a specific unregulated broker, they are earning commissions on your losses.',
  },
];

/* ------------------------------------------------------------------ */
/*  Verification steps                                                 */
/* ------------------------------------------------------------------ */
const verificationSteps = [
  {
    step: 1,
    title: 'Check the regulator\'s official website',
    description:
      'Visit the regulator directly — CySEC (cysec.gov.cy), MFSA (mfsa.mt), FCA (fca.org.uk), ASIC (asic.gov.au), or CFTC (cftc.gov). Search for the broker\'s company name and license number. Never trust a broker\'s own claims about regulation.',
  },
  {
    step: 2,
    title: 'Verify the license number matches',
    description:
      'Confirm the license number on the regulator\'s site matches the exact company name operating the broker. Some scams use real license numbers belonging to different companies to appear legitimate.',
  },
  {
    step: 3,
    title: 'Start with minimum deposit',
    description:
      'Deposit only the minimum amount ($5-$10) and immediately test a withdrawal. A legitimate broker processes withdrawals within 1-5 business days. If withdrawal is blocked or requires additional deposits, stop immediately.',
  },
  {
    step: 4,
    title: 'Check independent review sites',
    description:
      'Read reviews on multiple independent sites (including BinaryBrokerHub). Look for consistent patterns in complaints. A few negative reviews are normal — a pattern of withdrawal issues or manipulated trades is a red flag.',
  },
  {
    step: 5,
    title: 'Never deposit money you can\'t afford to lose',
    description:
      'Binary options are high-risk financial instruments. Even with a legitimate, regulated broker, you can lose your entire investment. Set strict limits and never trade with rent money, savings, or borrowed funds.',
  },
];

/* ------------------------------------------------------------------ */
/*  What to do if scammed                                              */
/* ------------------------------------------------------------------ */
const scammedSteps = [
  {
    title: 'Document everything',
    description:
      'Take screenshots of all trades, account statements, emails, chat messages, and promotional materials. Save transaction records from your bank. Download everything before the scam platform potentially deletes your account.',
  },
  {
    title: 'Report to your financial regulator',
    description:
      'File a formal complaint with the relevant authority in your country. Include all documentation, the broker\'s website URL, company name, and license claims.',
  },
  {
    title: 'File complaints with international regulators',
    items: [
      'CFTC (US) — cftc.gov/complaint',
      'FCA (UK) — fca.org.uk/consumers/report-scam',
      'CySEC (EU) — cysec.gov.cy/en-GB/complaints/',
      'ASIC (Australia) — asic.gov.au/about-asic/contact-us/how-to-complain/',
    ],
  },
  {
    title: 'Contact your bank or card provider',
    description:
      'Request a chargeback on your credit/debit card. Provide documentation of the scam. Chargebacks are most successful when filed within 120 days of the transaction. For bank wires, contact your bank\'s fraud department.',
  },
  {
    title: 'Beware of recovery scams',
    description:
      'After being scammed, you may be contacted by "recovery experts" who promise to get your money back for an upfront fee. This is almost always a second scam targeting victims. Legitimate regulators and law enforcement do not charge fees to investigate complaints.',
  },
];

/* ================================================================== */
/*  PAGE COMPONENT                                                     */
/* ================================================================== */
export default function ScamsPage() {
  const locale = useLocale();

  return (
    <>
      <Breadcrumbs items={[{ label: 'Scam Blacklist' }]} />

      {/* ── Hero Section ───────────────────────────────────────── */}
      <section className="section-container pt-6 pb-12 md:pt-10 md:pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="badge-gold text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
            Updated Monthly — May 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Binary Options Scam Blacklist 2026{' '}
            <span className="text-red-400">— Protect Your Money</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-6">
            Thousands of traders lose money to binary options scams every year. This comprehensive guide
            covers every scam type, red flags to watch for, and our list of{' '}
            <strong className="text-white">7 verified safe brokers</strong> tested with real money.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#red-flags" className="btn-primary px-6 py-3 text-sm min-h-[44px]">
              <WarningIcon className="w-4 h-4 mr-2" />
              Red Flags Checklist
            </a>
            <a href="#safe-brokers" className="btn-secondary px-6 py-3 text-sm min-h-[44px]">
              <ShieldIcon className="w-4 h-4 mr-2" />
              Verified Safe Brokers
            </a>
          </div>
        </div>
      </section>

      {/* ── How Binary Options Scams Work ──────────────────────── */}
      <section className="section-container pb-12 md:pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
          How Binary Options Scams Work
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Understanding the five most common scam types is your first line of defense.
          Recognize the patterns and you will never fall victim.
        </p>

        <div className="space-y-6">
          {scamTypes.map((scam, i) => (
            <div key={i} className="glass-card p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl flex-shrink-0">{scam.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {i + 1}. {scam.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{scam.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
                    Warning Signs
                  </h4>
                  <ul className="space-y-2">
                    {scam.warningSigns.map((sign, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <XCircle />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                    How to Spot It
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{scam.howToSpot}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Red Flags Checklist ────────────────────────────────── */}
      <section id="red-flags" className="section-container pb-12 md:pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
          Red Flags Checklist
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
          If a broker or trading platform shows <strong className="text-white">even 2-3 of these signs</strong>,
          do not deposit any money. Print this list and check it before opening any new trading account.
        </p>

        <div className="glass-card p-6 md:p-8 max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-3">
            {redFlags.map((flag, i) => (
              <label
                key={i}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-gray-600 bg-gray-800 text-red-500 focus:ring-red-500/30 flex-shrink-0"
                  readOnly
                />
                <span className="text-sm text-gray-300">{flag}</span>
              </label>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-sm text-red-300">
              <strong>Rule of thumb:</strong> If something sounds too good to be true in binary options
              trading, it is. No legitimate broker guarantees profits, and no signal service maintains
              a 90%+ win rate over time.
            </p>
          </div>
        </div>
      </section>

      {/* ── Verified Safe Brokers ──────────────────────────────── */}
      <section id="safe-brokers" className="section-container pb-12 md:pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
          Verified Safe Brokers
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
          These 7 brokers have been tested with real money. While no broker is 100% risk-free,
          these have passed our{' '}
          <Link href={`/${locale}/methodology`} className="text-emerald-400 hover:underline">
            47-point verification
          </Link>
          .
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {safeBrokers.map((broker) => (
            <Link
              key={broker.slug}
              href={`/${locale}/${broker.slug}`}
              className="glass-card p-5 hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {broker.name}
                </h3>
                <span className={`${broker.badge} text-xs font-semibold px-2 py-0.5 rounded-full`}>
                  {broker.score}/10
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <ShieldIcon className="w-3.5 h-3.5" />
                <span>
                  {broker.regulation} (Tier {broker.tier})
                </span>
              </div>
              <div className="mt-3 w-full bg-gray-700 rounded-full h-1.5">
                <div
                  className="bg-emerald-500 rounded-full h-1.5 transition-all"
                  style={{ width: `${(broker.score / 10) * 100}%` }}
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <CtaButton broker="pocketOption" label="Try Pocket Option" campaign="scams-page" size="lg" />
          <CtaButton broker="quotex" label="Try Quotex" campaign="scams-page" size="lg" />
          <Link
            href={`/${locale}/compare`}
            className="btn-secondary px-8 py-3.5 text-base min-h-[48px]"
          >
            Compare All 7 Brokers
          </Link>
        </div>
      </section>

      {/* ── How to Verify a Broker ─────────────────────────────── */}
      <section className="section-container pb-12 md:pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
          How to Verify a Broker — Step by Step
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Before depositing money with any binary options broker, follow these five steps.
          This process takes 15 minutes and can save you thousands.
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {verificationSteps.map((step) => (
            <div key={step.step} className="glass-card p-5 md:p-6 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
                {step.step}
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-6">
          <div className="glass-card p-5 border-emerald-500/20">
            <p className="text-sm text-gray-400">
              <strong className="text-emerald-400">Pro tip:</strong> We have already done this
              verification for you across 7 brokers. Read our full{' '}
              <Link href={`/${locale}/methodology`} className="text-emerald-400 hover:underline">
                testing methodology
              </Link>{' '}
              to see exactly how we evaluate each platform, or check out our{' '}
              <Link href={`/${locale}/blog/binary-options-regulation`} className="text-emerald-400 hover:underline">
                complete regulation guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── What to Do If You've Been Scammed ──────────────────── */}
      <section className="section-container pb-12 md:pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
          What to Do If You&apos;ve Been Scammed
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          If you have lost money to a scam broker, act quickly. The sooner you take these steps,
          the better your chances of recovering funds.
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {scammedSteps.map((step, i) => (
            <div key={i} className="glass-card p-5 md:p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-1">{step.title}</h3>
                  {step.description && (
                    <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                  )}
                  {step.items && (
                    <ul className="mt-2 space-y-1.5">
                      {step.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-6">
          <div className="p-5 rounded-xl bg-red-500/10 border border-red-500/20">
            <div className="flex items-start gap-3">
              <WarningIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-red-300 mb-1">Critical Warning: Recovery Scams</h4>
                <p className="text-sm text-red-200/80 leading-relaxed">
                  After being scammed, you may receive calls, emails, or social media messages from
                  &quot;fund recovery experts&quot; who claim they can get your money back. These are
                  almost always <strong>secondary scams</strong> that charge upfront fees and deliver
                  nothing. Legitimate regulatory complaints are free to file.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Regulation Tiers ───────────────────────────────────── */}
      <section className="section-container pb-12 md:pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
          Regulation Tiers — Know Your Broker&apos;s Protection Level
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Not all regulation is created equal. Understanding these tiers helps you assess how much
          protection you actually have.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {regulationTiers.map((tier, i) => (
            <div key={i} className={`glass-card p-6 border ${tier.color}`}>
              <span className={`${tier.badge} text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3`}>
                {tier.tier}
              </span>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">{tier.description}</p>

              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Regulators
              </h4>
              <ul className="space-y-1 mb-4">
                {tier.regulators.map((reg, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <ShieldIcon className="w-3.5 h-3.5 text-gray-500" />
                    {reg}
                  </li>
                ))}
              </ul>

              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Our Brokers in This Tier
              </h4>
              <ul className="space-y-1">
                {tier.ourBrokers.map((broker, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-emerald-400">
                    <CheckCircle />
                    {broker}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href={`/${locale}/blog/binary-options-regulation`}
            className="text-emerald-400 hover:underline text-sm font-medium"
          >
            Read our complete regulation guide &rarr;
          </Link>
        </div>
      </section>

      {/* ── FAQ Section ────────────────────────────────────────── */}
      <section className="section-container pb-12 md:pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Common questions about binary options scams, regulation, and safety.
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((faq, i) => (
            <details key={i} className="glass-card group">
              <summary className="p-5 cursor-pointer flex items-center justify-between gap-4 font-semibold text-white hover:text-emerald-400 transition-colors list-none">
                <span className="text-sm sm:text-base">{faq.question}</span>
                <svg
                  className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── Internal Links / Related Content ───────────────────── */}
      <section className="section-container pb-12 md:pb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
          Related Guides
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            {
              title: 'Is Pocket Option Legit?',
              desc: 'Our real-money test results and safety analysis.',
              href: `/${locale}/blog/is-pocket-option-legit`,
            },
            {
              title: 'Is Quotex Real or Fake?',
              desc: 'Deep dive into Quotex legitimacy and withdrawal tests.',
              href: `/${locale}/blog/is-quotex-real-or-fake`,
            },
            {
              title: 'Binary Options Regulation Guide',
              desc: 'Complete overview of global regulation and legal status.',
              href: `/${locale}/blog/binary-options-regulation`,
            },
            {
              title: 'Our Testing Methodology',
              desc: '47-point verification process explained in detail.',
              href: `/${locale}/methodology`,
            },
            {
              title: 'Compare All 7 Brokers',
              desc: 'Side-by-side comparison with scores and features.',
              href: `/${locale}/compare`,
            },
            {
              title: 'About BinaryBrokerHub',
              desc: 'Who we are and why we built this site.',
              href: `/${locale}/about`,
            },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="glass-card p-4 hover:border-emerald-500/30 transition-all group block"
            >
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors text-sm mb-1">
                {link.title}
              </h3>
              <p className="text-xs text-gray-500">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────── */}
      <section className="section-container pb-12 md:pb-16">
        <div className="glass-card p-8 md:p-10 text-center max-w-3xl mx-auto border-emerald-500/20">
          <ShieldIcon className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Trade With Confidence — Choose a Verified Broker
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
            We have deposited over $25,000 across 7 platforms, executed 500+ trades, and processed
            200+ withdrawals to find the brokers you can actually trust.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaButton
              broker="pocketOption"
              label="Open Pocket Option Account"
              campaign="scams-bottom-cta"
              size="lg"
            />
            <CtaButton
              broker="quotex"
              label="Open Quotex Account"
              campaign="scams-bottom-cta"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* ── Risk Disclaimer ────────────────────────────────────── */}
      <section className="section-container pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Risk Disclaimer
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Binary options trading involves significant risk and can result in the loss of all
            invested capital. The information on this page is for educational purposes only and
            does not constitute financial advice. Past performance of any broker or trading strategy
            does not guarantee future results. Always conduct your own due diligence before
            depositing money with any broker. BinaryBrokerHub may receive compensation from brokers
            featured on this site, which may influence their placement and ranking. This does not
            affect our review methodology, which is based on real-money testing. Never invest more
            than you can afford to lose. If you are unsure about the risks, seek independent
            financial advice.
          </p>
        </div>
      </section>
    </>
  );
}
