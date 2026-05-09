import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Privacy Policy — BinaryBrokerHub',
  description:
    'Our privacy policy: what data we collect, how we use it, your rights under GDPR and CCPA, and how to contact us about your data.',
  alternates: { canonical: '/en/privacy' },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
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
          <li className="text-gray-900">Privacy Policy</li>
        </ol>
      </nav>

      <header className="mt-6">
        <p className="text-sm uppercase tracking-wide text-gray-500">Legal</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          Last updated 2026-05-09 · Effective date 2026-05-09
        </p>
      </header>

      <article className="prose prose-gray mt-10 max-w-none prose-headings:tracking-tight prose-a:text-blue-700">
        <section
          aria-labelledby="summary-heading"
          className="not-prose mb-10 rounded-lg border border-gray-300 bg-gray-50 p-6 text-sm text-gray-800"
        >
          <h2 id="summary-heading" className="font-semibold text-gray-900">
            Plain-English summary
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              We do not run any on-site analytics tracking (no Google
              Analytics, no Plausible, no cross-site pixels). We rely on
              Google Search Console for aggregate search-side data only.
            </li>
            <li>
              When you click an affiliate link, we log a hashed IP address,
              the broker slug, the timestamp, and your user-agent in our
              database — for our own analytics and for affiliate
              attribution. We do not share this with third parties.
            </li>
            <li>
              We do not set first-party cookies on your browser. Broker
              websites you click through to may set their own cookies — that
              is between you and the broker.
            </li>
            <li>
              If you email us, we keep your email and message until our
              correspondence with you is concluded.
            </li>
            <li>
              You can ask us to delete your data by emailing{' '}
              <a href="mailto:info@binarybrokerhub.com?subject=Privacy%20Request">
                info@binarybrokerhub.com
              </a>
              . We respond within 5 business days.
            </li>
          </ul>
        </section>

        <h2>1. Who we are (data controller)</h2>
        <p>
          BinaryBrokerHub (
          <a href="https://binarybrokerhub.com">binarybrokerhub.com</a>) is a
          publication operated by an independent publisher based in Vietnam,
          contactable at{' '}
          <a href="mailto:info@binarybrokerhub.com">
            info@binarybrokerhub.com
          </a>
          . For the purposes of GDPR Article 4(7), this publisher is the
          data controller for any personal data processed in connection with
          this site.
        </p>
        <p>
          We are not a financial services firm and do not handle client
          money, securities, or trading accounts. Our processing is limited
          to the editorial publication, analytics, and affiliate-link
          attribution described in this policy.
        </p>

        <h2>2. What data we collect, and why</h2>

        <h3>2.1 On-site analytics</h3>
        <p>
          <strong>
            We do not run any on-site analytics tracking on
            BinaryBrokerHub.
          </strong>{' '}
          There is no Google Analytics, no Plausible, no Mixpanel, no
          Segment, no cross-site pixels, and no fingerprinting. We do not
          measure individual page-view behaviour, scroll depth, time on
          page, or session duration.
        </p>
        <p>
          For aggregate search-side data — what queries surface our pages,
          what countries our impressions come from, and what our search
          ranking looks like — we rely on{' '}
          <a href="https://search.google.com/search-console">
            Google Search Console
          </a>
          . Search Console data comes from Google&rsquo;s own infrastructure
          and reflects search behaviour, not on-site behaviour. We do not
          place any Google Search Console code on the site itself; the
          property is verified via DNS TXT record only.
        </p>

        <h3>2.2 Affiliate click logs (Supabase)</h3>
        <p>
          When you click an affiliate link to a broker on this site, we log
          the following data in our Supabase database, before redirecting
          you to the broker:
        </p>
        <ul>
          <li>
            <strong>Hashed IP address</strong> (SHA-256 hash with a server-side
            secret salt — the original IP cannot be recovered from the hash)
          </li>
          <li>
            <strong>Broker slug</strong> (e.g., &ldquo;pocket-option&rdquo;)
            and the page from which you clicked
          </li>
          <li>
            <strong>Timestamp</strong>
          </li>
          <li>
            <strong>User-agent string</strong>
          </li>
          <li>
            <strong>HTTP referrer</strong>
          </li>
        </ul>
        <p>
          We use this data for two purposes only: (i) internal traffic and
          conversion analytics, and (ii) affiliate attribution if a broker
          asks us to verify the source of a referral. We do not share
          click-log data with third parties beyond the broker affiliate
          programs themselves (which receive a sub-ID parameter we generate
          from the click record). Lawful basis under GDPR: legitimate
          interest (Article 6(1)(f)) — affiliate revenue is the sole
          monetisation mechanism for the publication.
        </p>
        <p>
          <strong>Retention</strong>: 24 months from the date of the click.
          After 24 months, the click record is permanently deleted.
        </p>

        <h3>2.3 Email correspondence</h3>
        <p>
          If you email us at{' '}
          <a href="mailto:info@binarybrokerhub.com">
            info@binarybrokerhub.com
          </a>
          , we receive your email address, your name (if provided), the
          subject line, and the message body. We use this only to respond
          to your message. Emails are stored on the email provider&rsquo;s
          servers per their privacy policy. Lawful basis under GDPR:
          consent and/or legitimate interest depending on context.
        </p>
        <p>
          <strong>Retention</strong>: until our correspondence with you is
          concluded, or for up to 24 months after the last reply, whichever
          comes first. We delete email threads beyond that window during
          our annual data review.
        </p>

        <h3>2.4 Data we do not collect</h3>
        <p>We deliberately do not collect:</p>
        <ul>
          <li>
            Account registration data (we do not require registration to
            read content)
          </li>
          <li>Payment data (we do not sell anything directly)</li>
          <li>Newsletter sign-up data (we do not run a newsletter)</li>
          <li>
            Tracking cookies of any kind — first-party or third-party
          </li>
          <li>Cross-site tracking pixels</li>
          <li>Social-network &ldquo;like&rdquo; or share buttons</li>
        </ul>

        <h2>3. Cookies</h2>
        <p>
          <strong>BinaryBrokerHub itself does not set any cookies on your
          browser.</strong> We do not run any client-side analytics, so
          there are no analytics cookies. Our affiliate click-log mechanism
          uses a server-side database write, not a browser cookie.
        </p>
        <p>
          When you click an affiliate link and are redirected to a broker
          website (e.g., pocketoption.com, quotex.io, iqoption.com), the{' '}
          <strong>broker&rsquo;s domain</strong> may set cookies on your
          browser. Those cookies are governed by the broker&rsquo;s privacy
          policy, not ours. We have no control over them and we do not
          receive their contents.
        </p>
        <p>
          Because we do not set cookies, we do not display a cookie consent
          banner. If a future change to our stack introduces first-party
          cookies, we will publish the change here and update our practice
          accordingly.
        </p>

        <h2>4. Third-party services we use</h2>
        <p>
          We rely on the following third-party services to operate this
          site. Each has its own privacy practices, linked below:
        </p>
        <ul>
          <li>
            <strong>Vercel</strong> (hosting, edge network, build pipeline)
            —{' '}
            <a href="https://vercel.com/legal/privacy-policy">
              Vercel privacy policy
            </a>
          </li>
          <li>
            <strong>Supabase</strong> (database for affiliate click logs) —{' '}
            <a href="https://supabase.com/privacy">Supabase privacy policy</a>
          </li>
          <li>
            <strong>Google Search Console</strong> (aggregate search-side
            data, verified via DNS TXT — no on-site code) —{' '}
            <a href="https://policies.google.com/privacy">
              Google privacy policy
            </a>
          </li>
          <li>
            <strong>Affiliate broker programs</strong> (Pocket Option
            Partners, Quotex Partners, IQ Option Affiliates, etc.) — each
            program has its own privacy policy on the broker&rsquo;s site.
          </li>
        </ul>

        <h2>5. Your rights</h2>

        <h3>5.1 GDPR (European Economic Area, UK)</h3>
        <p>
          If you are a resident of the EEA or the UK, you have the
          following rights under the General Data Protection Regulation:
        </p>
        <ul>
          <li>
            <strong>Right of access</strong> (Article 15) — request a copy
            of any personal data we hold about you.
          </li>
          <li>
            <strong>Right to rectification</strong> (Article 16) — ask us to
            correct inaccurate data.
          </li>
          <li>
            <strong>Right to erasure</strong> (Article 17, &ldquo;right to
            be forgotten&rdquo;) — ask us to delete your data.
          </li>
          <li>
            <strong>Right to restriction of processing</strong> (Article
            18).
          </li>
          <li>
            <strong>Right to data portability</strong> (Article 20).
          </li>
          <li>
            <strong>Right to object</strong> (Article 21) — including to
            processing based on legitimate interest.
          </li>
          <li>
            <strong>Right to lodge a complaint</strong> with your local
            supervisory authority.
          </li>
        </ul>
        <p>
          To exercise any of these rights, email{' '}
          <a href="mailto:info@binarybrokerhub.com?subject=Privacy%20Request">
            info@binarybrokerhub.com
          </a>{' '}
          with subject line &ldquo;Privacy Request&rdquo; and a description
          of the right you wish to exercise. We respond within 5 business
          days, and complete the request within 30 calendar days as required
          by GDPR Article 12(3). Note: because our affiliate click logs
          contain only hashed IP addresses (not your IP itself), it may not
          be possible for us to identify a specific click record as
          belonging to you. We will explain this in our response if it is
          relevant to your request.
        </p>

        <h3>5.2 CCPA (California residents)</h3>
        <p>
          If you are a California resident, you have rights under the
          California Consumer Privacy Act (as amended by the CPRA),
          including the right to know, the right to delete, the right to
          correct, and the right to opt out of the sale or sharing of
          personal information. <strong>We do not sell or share personal
          information for cross-context behavioural advertising.</strong>
          To exercise CCPA rights, email{' '}
          <a href="mailto:info@binarybrokerhub.com?subject=CCPA%20Request">
            info@binarybrokerhub.com
          </a>
          .
        </p>

        <h3>5.3 Other jurisdictions</h3>
        <p>
          Residents of other jurisdictions with comparable data-protection
          laws (e.g., Brazil&rsquo;s LGPD, Canada&rsquo;s PIPEDA, India&rsquo;s
          DPDPA) may have similar rights. Contact us at{' '}
          <a href="mailto:info@binarybrokerhub.com">
            info@binarybrokerhub.com
          </a>{' '}
          to exercise them.
        </p>

        <h2>6. International data transfers</h2>
        <p>
          The publisher of BinaryBrokerHub is based in Vietnam. Our
          third-party processors (Vercel, Supabase, Plausible) operate
          globally and may store and process data in jurisdictions outside
          your country of residence, including the European Union, the
          United States, and other regions. Where relevant, our processors
          rely on Standard Contractual Clauses or equivalent mechanisms for
          cross-border transfers. We do not currently transfer personal
          data outside our processor stack to additional third parties.
        </p>

        <h2>7. Security</h2>
        <p>
          We use industry-standard technical and organisational measures to
          protect data we hold:
        </p>
        <ul>
          <li>
            HTTPS/TLS for all connections to and from the site
          </li>
          <li>Server-side IP hashing for click logs</li>
          <li>
            Row-level security on database tables (Supabase RLS policies)
          </li>
          <li>Access controls on administrative interfaces</li>
        </ul>
        <p>
          Despite these measures, no internet transmission or storage is
          fully secure. We cannot guarantee the absolute security of any
          data. If we become aware of a security incident affecting your
          data, we will notify you and the relevant supervisory authority
          within the timelines required by applicable law (72 hours under
          GDPR Article 33).
        </p>

        <h2>8. Children&rsquo;s data</h2>
        <p>
          This site is intended for adults aged 18 or older. The financial
          products we cover are not suitable for minors, and many
          jurisdictions prohibit minors from holding trading accounts. We
          do not knowingly collect data from anyone under 18. If you
          believe a minor has submitted data to us, contact{' '}
          <a href="mailto:info@binarybrokerhub.com?subject=Minor%20Data%20Request">
            info@binarybrokerhub.com
          </a>{' '}
          and we will delete it.
        </p>

        <h2>9. Changes to this policy</h2>
        <p>
          We update this policy when our data practices change, when we add
          a new third-party processor, or when applicable law changes
          materially. The &ldquo;last updated&rdquo; date at the top of
          this page reflects the current published version. For material
          changes, we will note the change and the effective date here.
        </p>

        <h2>10. Contact</h2>
        <p>
          For any privacy-related question, request, or concern, email{' '}
          <a href="mailto:info@binarybrokerhub.com?subject=Privacy%20Request">
            info@binarybrokerhub.com
          </a>{' '}
          with subject line &ldquo;Privacy Request&rdquo;. We respond
          within 5 business days.
        </p>

        <h2>Related</h2>
        <ul>
          <li>
            <Link href="/risk-disclosure">Risk Disclosure</Link>
          </li>
          <li>
            <Link href="/methodology">Methodology</Link>
          </li>
          <li>
            <Link href="/editorial-team">Editorial Team</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
