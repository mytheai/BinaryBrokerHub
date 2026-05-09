import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { BROKER_SLUGS, type BrokerFrontmatter } from '@/lib/brokers';
import { BrokerCard } from '@/components/broker/BrokerCard';

export const metadata: Metadata = {
  title: 'Honest Binary Options Broker Reviews — BinaryBrokerHub',
  description:
    'Independent binary options broker rankings with transparent methodology, public score history, and no pay-for-placement. We rank Pocket Option, Quotex, and IQ Option on a published scoring system.',
  alternates: { canonical: '/en' },
};

const SITE_ORIGIN = 'https://binarybrokerhub.com';

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BinaryBrokerHub',
  url: SITE_ORIGIN,
  publisher: {
    '@type': 'Organization',
    name: 'BinaryBrokerHub',
    url: SITE_ORIGIN,
  },
};

async function loadAllBrokers(): Promise<BrokerFrontmatter[]> {
  const results = await Promise.all(
    BROKER_SLUGS.map(async (slug) => {
      const mod = await import(
        `../../../content/brokers/${slug}/index.mdx`
      );
      return mod.frontmatter as BrokerFrontmatter;
    }),
  );
  return results.sort((a, b) => {
    const ar = a.ranks.bestForBeginners?.position ?? 99;
    const br = b.ranks.bestForBeginners?.position ?? 99;
    return ar - br;
  });
}

export default async function HomePage() {
  const brokers = await loadAllBrokers();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <section className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Honest. Independent. Versioned.
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Binary options broker reviews without the pay-for-placement game.
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            We rank brokers on a public scoring methodology. Score history is
            preserved. Affiliate commissions do not change the ranking. If you
            spot a broker we treat unfairly,{' '}
            <Link href="/contact" className="text-blue-700 hover:underline">
              tell us
            </Link>
            .
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/brokers"
              className="inline-block rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-700"
            >
              See ranked brokers
            </Link>
            <Link
              href="/methodology"
              className="inline-block rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Read our methodology
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="best-for-beginners-heading"
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Ranking #1
          </p>
          <h2
            id="best-for-beginners-heading"
            className="mt-2 text-3xl font-bold tracking-tight"
          >
            Best for Beginners &amp; Low Minimum Deposit
          </h2>
          <p className="mt-3 text-gray-700">
            Optimised for traders in markets where Tier-1 brokers do not
            operate (India, Pakistan, Nigeria, South Africa, the Philippines,
            UAE, Malaysia, Indonesia). Weighting prioritises low entry barrier,
            platform usability, demo quality, and withdrawal reliability.{' '}
            <Link
              href="/methodology"
              className="text-blue-700 hover:underline"
            >
              See exact weights
            </Link>
            .
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {brokers.map((b) => (
            <BrokerCard key={b.slug} broker={b} />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="best-regulated-heading"
        className="border-t border-gray-200 bg-gray-50"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <header className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Ranking #2
            </p>
            <h2
              id="best-regulated-heading"
              className="mt-2 text-3xl font-bold tracking-tight"
            >
              Best Regulated Binary Options Brokers
            </h2>
            <p className="mt-3 text-gray-700">
              Reserved for brokers that hold a Tier-1 license (FCA, CySEC,
              ASIC, CFTC) covering the binary options product specifically. As
              of {brokers[0]?.lastReviewed ?? '2026-05-09'}, no broker in our
              coverage qualifies for this ranking — including IQ Option, whose
              CySEC license covers a sister entity selling CFDs only, not
              binary options.
            </p>
          </header>

          <div className="mt-8 rounded-lg border border-amber-300 bg-amber-50 p-6 text-sm text-amber-900">
            <p className="font-semibold">
              Why is this list empty?
            </p>
            <p className="mt-2">
              Retail binary options have been{' '}
              <strong>banned by ESMA in the EU since 2018</strong> and by the{' '}
              <strong>FCA in the UK since 2019</strong>. Tier-1 regulators do
              not authorise consumer-facing binary options brokers in their
              jurisdictions. The only CFTC-regulated binary options venue
              available to US retail clients is{' '}
              <strong>Nadex</strong>. We will add Nadex to this ranking when
              we publish that review.
            </p>
            <p className="mt-3">
              For traders in markets where Tier-1 binary brokers do not
              operate, see the{' '}
              <Link
                href="/brokers"
                className="font-medium text-amber-900 underline hover:text-amber-700"
              >
                Best for Beginners ranking
              </Link>{' '}
              above.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="how-we-rank-heading"
        className="mx-auto max-w-3xl px-6 py-16"
      >
        <h2
          id="how-we-rank-heading"
          className="text-3xl font-bold tracking-tight"
        >
          How we rank brokers
        </h2>
        <p className="mt-4 text-gray-700">
          Every broker is scored on a transparent rubric documented in our{' '}
          <Link
            href="/methodology"
            className="text-blue-700 hover:underline"
          >
            methodology
          </Link>
          . Each review pulls from regulator databases (FCA Warning List,
          CFTC RED List, RBI Alert List, CySEC, ASIC, ESMA), Trustpilot,
          Reddit, and Forex Peace Army — with sources cited inline. Scores
          are versioned: when our methodology updates, every broker is
          re-scored and the prior score is preserved publicly in a per-broker
          score history timeline.
        </p>
        <p className="mt-4 text-gray-700">
          We earn affiliate commissions when readers sign up through our
          links, and we are transparent about that on every page. Affiliate
          payouts are <strong>not</strong> a scoring input. If a broker
          increases its commission, the score does not change.{' '}
          <Link
            href="/editorial-team"
            className="text-blue-700 hover:underline"
          >
            Read our editorial process
          </Link>
          .
        </p>
      </section>

      <section
        aria-labelledby="quick-faq-heading"
        className="border-t border-gray-200 bg-gray-50"
      >
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2
            id="quick-faq-heading"
            className="text-3xl font-bold tracking-tight"
          >
            Quick FAQ
          </h2>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="font-semibold text-gray-900">
                Are binary options legal where I live?
              </dt>
              <dd className="mt-1 text-gray-700">
                Binary options are restricted or banned for retail traders in
                the EEA, UK, USA (outside CFTC-regulated venues), Israel, and
                Canada. In India, several major brokers including Quotex and
                IQ Option are listed on the RBI Alert List of unauthorised
                forex platforms. Verify your local rules before depositing.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">
                Why doesn&rsquo;t any broker top your &ldquo;Best
                Regulated&rdquo; ranking?
              </dt>
              <dd className="mt-1 text-gray-700">
                ESMA banned retail binary options in the EU in 2018; the FCA
                followed in 2019. Tier-1 regulators do not currently authorise
                consumer-facing binary brokers. The only Tier-1-regulated
                binary venue for US residents is Nadex.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">
                How do you make money?
              </dt>
              <dd className="mt-1 text-gray-700">
                Affiliate commissions on broker signups. We do not accept paid
                placement, sponsored articles, or display advertising. Our
                rankings are independent of affiliate payout per broker.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">
                What if you got something wrong?
              </dt>
              <dd className="mt-1 text-gray-700">
                Email{' '}
                <a
                  href="mailto:info@binarybrokerhub.com?subject=Correction%20Request"
                  className="text-blue-700 hover:underline"
                >
                  info@binarybrokerhub.com
                </a>{' '}
                with subject line &ldquo;Correction Request&rdquo;. We respond
                within 5 business days. Material corrections are logged
                publicly with a dated note.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
