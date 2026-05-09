import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { BROKER_SLUGS, type BrokerFrontmatter } from '@/lib/brokers';
import { BrokerCard } from '@/components/broker/BrokerCard';

export const metadata: Metadata = {
  title:
    'All Reviewed Binary Options Brokers — Rankings & Comparison | BinaryBrokerHub',
  description:
    'Independent rankings of every binary options broker we cover, with side-by-side comparison of regulators, minimum deposit, payouts, and scores. Pocket Option, Quotex, IQ Option.',
  alternates: { canonical: '/en/brokers' },
};

const SITE_ORIGIN = 'https://binarybrokerhub.com';

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE_ORIGIN}/en`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Brokers',
      item: `${SITE_ORIGIN}/en/brokers`,
    },
  ],
};

async function loadAllBrokers(): Promise<BrokerFrontmatter[]> {
  const results = await Promise.all(
    BROKER_SLUGS.map(async (slug) => {
      const mod = await import(
        `../../../../content/brokers/${slug}/index.mdx`
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

function formatScore(score: number | null): string {
  return score === null ? '—' : score.toFixed(1);
}

export default async function BrokersIndexPage() {
  const brokers = await loadAllBrokers();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
          <li className="text-gray-900">Brokers</li>
        </ol>
      </nav>

      <header className="mt-6 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">
          All Reviewed Binary Options Brokers
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Every broker we cover, with the full score, ranking, and verdict.
          Sorted by Best for Beginners ranking. See our{' '}
          <Link
            href="/methodology"
            className="text-blue-700 hover:underline"
          >
            methodology
          </Link>{' '}
          for scoring weights.
        </p>
      </header>

      <section
        aria-labelledby="cards-heading"
        className="mt-10"
      >
        <h2 id="cards-heading" className="sr-only">
          Broker cards
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {brokers.map((b) => (
            <BrokerCard key={b.slug} broker={b} />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="comparison-heading"
        className="mt-16"
      >
        <h2
          id="comparison-heading"
          className="text-2xl font-semibold tracking-tight"
        >
          Side-by-side comparison
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          All scores under{' '}
          <Link
            href="/methodology"
            className="text-blue-700 hover:underline"
          >
            Methodology v1.0
          </Link>
          . Last reviewed {brokers[0]?.lastReviewed ?? '2026-05-09'}.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300 text-left">
                <th className="px-3 py-3 font-semibold">Broker</th>
                <th className="px-3 py-3 font-semibold">
                  Best for Beginners
                </th>
                <th className="px-3 py-3 font-semibold">Best Regulated</th>
                <th className="px-3 py-3 font-semibold">Min deposit</th>
                <th className="px-3 py-3 font-semibold">Max payout</th>
                <th className="px-3 py-3 font-semibold">Regulator</th>
              </tr>
            </thead>
            <tbody>
              {brokers.map((b) => {
                const reg = b.regulators[0];
                const begRank = b.ranks.bestForBeginners;
                return (
                  <tr key={b.slug} className="border-b border-gray-200">
                    <td className="px-3 py-3 align-top">
                      <Link
                        href={`/brokers/${b.slug}`}
                        className="font-medium text-blue-700 hover:underline"
                      >
                        {b.name}
                      </Link>
                    </td>
                    <td className="px-3 py-3 align-top">
                      <span className="font-semibold">
                        {formatScore(b.scores.bestForBeginners)}
                      </span>
                      <span className="text-gray-500">/10</span>
                      {begRank && (
                        <span className="ml-2 text-xs text-gray-600">
                          (#{begRank.position} of {begRank.outOf})
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-3 align-top">
                      <span className="text-gray-500">
                        {formatScore(b.scores.bestRegulated)}/10
                      </span>
                      <span className="ml-1 text-xs text-gray-500">
                        (not eligible)
                      </span>
                    </td>
                    <td className="px-3 py-3 align-top font-medium">
                      ${b.minDeposit}
                    </td>
                    <td className="px-3 py-3 align-top font-medium">
                      {b.payoutMax}%
                    </td>
                    <td className="px-3 py-3 align-top text-xs text-gray-700">
                      {reg ? `${reg.authority}` : 'None disclosed'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section
        aria-labelledby="not-eligible-heading"
        className="mt-16 rounded-lg border border-amber-300 bg-amber-50 p-6 text-sm text-amber-900"
      >
        <h2
          id="not-eligible-heading"
          className="font-semibold"
        >
          Why is no broker eligible for &ldquo;Best Regulated&rdquo;?
        </h2>
        <p className="mt-2">
          Retail binary options are banned for consumers in the EU (ESMA
          2018) and the UK (FCA 2019). Tier-1 regulators (FCA, CySEC, ASIC,
          CFTC) do not authorise consumer-facing binary options brokers in
          their jurisdictions. The only CFTC-regulated binary options venue
          available to US retail clients is Nadex. We will add Nadex to this
          ranking when we publish that review. Read our{' '}
          <Link
            href="/methodology"
            className="font-medium underline hover:text-amber-700"
          >
            methodology
          </Link>{' '}
          for the strict eligibility rules.
        </p>
      </section>
    </main>
  );
}
