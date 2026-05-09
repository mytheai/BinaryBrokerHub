import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Editorial Team — BinaryBrokerHub',
  description:
    'Who reviews binary options brokers on BinaryBrokerHub, our editorial process, conflict-of-interest policy, and correction policy.',
  alternates: { canonical: '/en/editorial-team' },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BinaryBrokerHub',
  url: 'https://binarybrokerhub.com',
  description:
    'Independent binary options broker review publication. We rank brokers using a public, versioned methodology and earn affiliate commissions on conversions.',
  email: 'info@binarybrokerhub.com',
  publishingPrinciples: 'https://binarybrokerhub.com/en/methodology',
  ethicsPolicy: 'https://binarybrokerhub.com/en/editorial-team',
  knowsAbout: [
    'Binary options brokers',
    'Online trading platforms',
    'Financial regulation',
    'Consumer protection in retail trading',
  ],
};

export default function EditorialTeamPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <header className="mb-10">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          About BinaryBrokerHub
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Editorial Team
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Who writes our reviews, how we research, and how we make money.
        </p>
      </header>

      <article className="prose prose-gray max-w-none prose-headings:tracking-tight prose-a:text-blue-700">
        <h2>Mission</h2>
        <p>
          We review binary options brokers without taking paid placement,
          sponsorship, or editorial influence from the brokers we cover. Our
          income comes from affiliate commissions on conversions — disclosed
          openly on every page.
        </p>

        <h2>Who We Are</h2>
        <p>
          BinaryBrokerHub Editorial Team is a pseudonymous group of analysts
          working in financial markets research, consumer protection
          investigation, and online trading platforms. We publish under the
          brand name rather than individual bylines for two reasons:
        </p>
        <ol>
          <li>
            <strong>Safety.</strong> Binary options is a contested industry.
            Reviewers who criticize unregulated brokers have faced legal
            threats, doxxing, and harassment. Pseudonymity protects our team.
          </li>
          <li>
            <strong>Process over personality.</strong> Trust should come from
            our transparent methodology and reproducible research, not from
            personal credentials a reader cannot independently verify.
          </li>
        </ol>
        <p>
          We do <strong>not</strong> claim specific years of trading
          experience, professional certifications, or individual credentials
          for named team members. If those signals are essential to your trust
          threshold, this site may not be the right source for you — and that
          is a fair choice.
        </p>

        <h2>Editorial Process</h2>
        <p>Every broker review follows a structured workflow:</p>
        <ol>
          <li>
            <strong>Regulatory research.</strong> We cross-reference broker
            disclosures against regulator databases — FCA, CySEC, ASIC, CFTC,
            SVG-FSA, Mwali, VFSC, RBI Alert List, BAPPEBTI, SECP, ESMA.
            Findings are dated and sourced.
          </li>
          <li>
            <strong>User complaint analysis.</strong> We synthesize patterns
            from public complaint sources (Trustpilot, Reddit, BOcomplaints,
            ScamAdviser, regulator warning lists) and quote verbatim where
            useful.
          </li>
          <li>
            <strong>Platform inspection.</strong> We test trading platform UI,
            payment rails, and withdrawal flows where possible. When we deposit
            and test, we disclose the deposit amount and date inside the
            review.
          </li>
          <li>
            <strong>Methodology scoring.</strong> Each broker is scored against
            our{' '}
            <Link href="/methodology">public methodology</Link> with versioned
            weights. Score history is preserved across methodology updates.
          </li>
          <li>
            <strong>Internal review.</strong> Every published review is read by
            at least two editors before publication. Sources are checked.
            Numerical claims are verified against linked primary sources.
          </li>
          <li>
            <strong>Updates.</strong> Broker scores and warnings are updated on
            a rolling basis. Each review carries a &ldquo;Last reviewed&rdquo;
            date and links to the methodology version used.
          </li>
        </ol>

        <h2>Conflict of Interest</h2>
        <p>
          We earn affiliate commissions when a reader signs up with a broker
          through our link. This is the <strong>only</strong> revenue stream
          for the site. We accept no:
        </p>
        <ul>
          <li>Paid placement or &ldquo;review for a fee&rdquo;</li>
          <li>Sponsored articles</li>
          <li>Display advertising</li>
          <li>Broker-supplied content or guest posts from brokers</li>
          <li>Free deposits, bonus accounts, or VIP perks from brokers</li>
        </ul>
        <p>
          If a broker asks to influence our coverage, we publish the request.
          Our two ranking systems —{' '}
          <em>Best Regulated</em> (heavy regulation weight) and{' '}
          <em>Best for Beginners / Low Min Deposit</em> (different weight set)
          — are scored independently of affiliate payout per broker. A broker
          with higher CPA is not pushed up the ranking.
        </p>
        <p className="text-sm text-gray-600">
          We may earn commissions when you sign up through links on this site.
        </p>

        <h2>Correction Policy</h2>
        <p>
          We make mistakes. When a reader, broker, or third party flags a
          factual error:
        </p>
        <ol>
          <li>
            We verify the claim against primary sources within 5 business days.
          </li>
          <li>
            If the correction is valid, we update the page, add a dated
            correction note at the top, and re-version the methodology if
            scoring changes.
          </li>
          <li>
            We do <strong>not</strong> silently edit content. All material
            corrections are logged.
          </li>
        </ol>
        <p>
          To report an error, email{' '}
          <a href="mailto:info@binarybrokerhub.com?subject=Correction%20Request">
            info@binarybrokerhub.com
          </a>{' '}
          with subject line &ldquo;Correction Request&rdquo; and the URL of the
          page.
        </p>

        <h2>What We Cannot Do</h2>
        <p>Honest limitations:</p>
        <ul>
          <li>
            We cannot guarantee a broker will not change its terms, payout, or
            behavior after our review is published.
          </li>
          <li>
            We cannot test every payment rail in every country. Where we list
            payment availability, we cite the broker&rsquo;s published list
            (which may be incomplete or outdated).
          </li>
          <li>
            We do not provide trading signals, copy-trading recommendations,
            account management services, or financial advice.
          </li>
          <li>
            Binary options are high-risk and prohibited or restricted in many
            jurisdictions — including the EEA, UK retail, Israel, Canada, and
            India under the RBI Alert List. We do not endorse trading binary
            options. We review brokers because readers research them
            regardless.
          </li>
        </ul>

        <h2>Methodology</h2>
        <p>
          Our scoring is fully public and versioned. The{' '}
          <Link href="/methodology">Methodology</Link> page documents exact
          weights, ranking system rationale, and per-geography modifier rules.
        </p>

        <h2>Contact</h2>
        <ul>
          <li>
            Email:{' '}
            <a href="mailto:info@binarybrokerhub.com">
              info@binarybrokerhub.com
            </a>
          </li>
          <li>
            Corrections: subject line &ldquo;Correction Request&rdquo;
          </li>
          <li>General inquiries: subject line &ldquo;General&rdquo;</li>
          <li>Response time: 5 business days</li>
        </ul>
        <p>
          We will not respond to broker outreach requesting paid placement,
          link removal, or editorial changes outside our correction policy.
          Such requests are logged and deleted.
        </p>
      </article>
    </main>
  );
}
