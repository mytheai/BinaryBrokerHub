import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Contact — BinaryBrokerHub',
  description:
    'How to reach BinaryBrokerHub: corrections, general inquiries, privacy requests. We respond within 5 business days.',
  alternates: { canonical: '/en/contact' },
};

const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact BinaryBrokerHub',
  url: 'https://binarybrokerhub.com/en/contact',
  description: 'How to reach BinaryBrokerHub.',
};

type ContactReason = {
  subject: string;
  description: string;
  responseTime: string;
};

const reasons: ContactReason[] = [
  {
    subject: 'Correction Request',
    description:
      'You believe we have a factual error. Include the URL of the page and the specific claim you are flagging. We verify against primary sources and update with a dated correction note within 5 business days.',
    responseTime: '5 business days',
  },
  {
    subject: 'Privacy Request',
    description:
      'You want to exercise a right under GDPR, CCPA, or another data-protection regime — access, deletion, rectification, etc. See our Privacy Policy for the full list of rights.',
    responseTime: '5 business days, completed within 30 days',
  },
  {
    subject: 'General',
    description:
      'Reader questions, methodology questions, broker suggestions, or anything else. We read every email but cannot promise a substantive reply on every topic.',
    responseTime: 'Best-effort, typically within 5 business days',
  },
  {
    subject: 'Press / Media',
    description:
      'Press inquiries, interview requests, or media collaboration. We are pseudonymous as a publication and will respond to media in writing.',
    responseTime: 'Within 5 business days',
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
        <ol className="flex flex-wrap gap-1">
          <li>
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <span aria-hidden className="mx-1.5">
              /
            </span>
          </li>
          <li className="text-gray-900">Contact</li>
        </ol>
      </nav>

      <header className="mt-6">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Get in touch
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Contact</h1>
        <p className="mt-4 text-lg text-gray-700">
          The fastest way to reach us is by email. Use a clear subject line
          from the list below — it routes your message to the right
          response track.
        </p>
      </header>

      <section
        aria-labelledby="email-heading"
        className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6"
      >
        <h2
          id="email-heading"
          className="text-sm font-semibold uppercase tracking-wide text-gray-500"
        >
          Email
        </h2>
        <p className="mt-2">
          <a
            href="mailto:info@binarybrokerhub.com"
            className="text-2xl font-semibold text-blue-700 hover:underline"
          >
            info@binarybrokerhub.com
          </a>
        </p>
        <p className="mt-2 text-sm text-gray-600">
          One inbox for everything. Use the subject line conventions below
          to help us route your message.
        </p>
      </section>

      <section
        aria-labelledby="reasons-heading"
        className="mt-10"
      >
        <h2
          id="reasons-heading"
          className="text-2xl font-semibold tracking-tight"
        >
          Subject line conventions
        </h2>
        <ul className="mt-6 space-y-6">
          {reasons.map((r) => (
            <li
              key={r.subject}
              className="rounded-lg border border-gray-200 bg-white p-5"
            >
              <p className="font-semibold text-gray-900">
                Subject: &ldquo;{r.subject}&rdquo;
              </p>
              <p className="mt-2 text-sm text-gray-700">{r.description}</p>
              <p className="mt-2 text-xs text-gray-500">
                Response time: {r.responseTime}
              </p>
              <a
                href={`mailto:info@binarybrokerhub.com?subject=${encodeURIComponent(r.subject)}`}
                className="mt-3 inline-block text-sm font-medium text-blue-700 hover:underline"
              >
                Email us with this subject →
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="not-respond-heading"
        className="mt-12 rounded-lg border border-amber-300 bg-amber-50 p-6 text-sm text-amber-900"
      >
        <h2 id="not-respond-heading" className="font-semibold">
          What we do not respond to
        </h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Broker outreach requesting paid placement, sponsored articles, or display advertising</li>
          <li>Requests to remove negative coverage that does not contain a factual error</li>
          <li>Trading advice requests, signal subscriptions, or account-management referrals — we do not provide any of those</li>
          <li>Mass guest-post pitches and unsolicited link-exchange requests</li>
        </ul>
        <p className="mt-3">
          Such messages are logged and deleted. They will not receive a
          reply.
        </p>
      </section>

      <section
        aria-labelledby="other-channels-heading"
        className="mt-12"
      >
        <h2
          id="other-channels-heading"
          className="text-xl font-semibold tracking-tight"
        >
          Other channels
        </h2>
        <p className="mt-3 text-sm text-gray-700">
          BinaryBrokerHub is currently email-only. We do not operate a Slack
          or Discord community, do not run a newsletter, and do not have an
          active presence on social media. The reasoning is documented in
          our{' '}
          <Link href="/editorial-team">editorial team</Link> page: we
          publish under a brand rather than under individual bylines, and we
          want every reader interaction to be in writing for clarity and
          for our records.
        </p>
      </section>

      <section
        aria-labelledby="related-heading"
        className="mt-12 border-t border-gray-200 pt-8"
      >
        <h2 id="related-heading" className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Related
        </h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link
              href="/editorial-team"
              className="text-blue-700 hover:underline"
            >
              Editorial Team
            </Link>{' '}
            — our editorial process, conflict-of-interest policy, and correction policy
          </li>
          <li>
            <Link
              href="/methodology"
              className="text-blue-700 hover:underline"
            >
              Methodology
            </Link>{' '}
            — exact scoring weights and ranking eligibility rules
          </li>
          <li>
            <Link
              href="/privacy"
              className="text-blue-700 hover:underline"
            >
              Privacy Policy
            </Link>{' '}
            — what data we collect and your rights
          </li>
          <li>
            <Link
              href="/risk-disclosure"
              className="text-blue-700 hover:underline"
            >
              Risk Disclosure
            </Link>{' '}
            — risks of binary options trading and jurisdictional restrictions
          </li>
        </ul>
      </section>
    </main>
  );
}
