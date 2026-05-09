import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import {
  BROKER_SLUGS,
  type BrokerFrontmatter,
  type BrokerSlug,
  isBrokerSlug,
} from '@/lib/brokers';
import { VerdictBox } from '@/components/broker/VerdictBox';
import { BrokerFactsBox } from '@/components/broker/BrokerFactsBox';
import { ScoreTimeline } from '@/components/broker/ScoreTimeline';

const SITE_ORIGIN = 'https://binarybrokerhub.com';

type RouteParams = { locale: string; slug: string };

export function generateStaticParams() {
  return BROKER_SLUGS.map((slug) => ({ slug }));
}

async function loadBroker(slug: BrokerSlug): Promise<{
  Content: React.ComponentType;
  frontmatter: BrokerFrontmatter;
}> {
  const mod = await import(
    `../../../../../content/brokers/${slug}/index.mdx`
  );
  return {
    Content: mod.default,
    frontmatter: mod.frontmatter as BrokerFrontmatter,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isBrokerSlug(slug)) return {};
  const { frontmatter } = await loadBroker(slug);
  const title = `${frontmatter.name} Review 2026 — Honest Analysis | BinaryBrokerHub`;
  const description = frontmatter.oneLinerVerdict;
  const canonical = `/${locale}/brokers/${slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, type: 'article' },
  };
}

function buildReviewJsonLd(
  broker: BrokerFrontmatter,
  locale: string,
): Record<string, unknown> {
  const url = `${SITE_ORIGIN}/${locale}/brokers/${broker.slug}`;
  const score = broker.scores.bestForBeginners ?? broker.scores.bestRegulated;
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'FinancialProduct',
      name: broker.name,
      url: broker.websiteUrl,
    },
    author: {
      '@type': 'Organization',
      name: 'BinaryBrokerHub Editorial Team',
      url: `${SITE_ORIGIN}/${locale}/editorial-team`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BinaryBrokerHub',
      url: SITE_ORIGIN,
    },
    reviewRating:
      score === null
        ? undefined
        : {
            '@type': 'Rating',
            ratingValue: score,
            bestRating: 10,
            worstRating: 0,
          },
    reviewBody: broker.oneLinerVerdict,
    datePublished: broker.publishedAt,
    dateModified: broker.lastReviewed,
    url,
  };
}

function buildBreadcrumbJsonLd(
  broker: BrokerFrontmatter,
  locale: string,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_ORIGIN}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Brokers',
        item: `${SITE_ORIGIN}/${locale}/brokers`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: broker.name,
        item: `${SITE_ORIGIN}/${locale}/brokers/${broker.slug}`,
      },
    ],
  };
}

export default async function BrokerReviewPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { locale, slug } = await params;
  if (!isBrokerSlug(slug)) notFound();

  const { Content, frontmatter } = await loadBroker(slug);

  const reviewJsonLd = buildReviewJsonLd(frontmatter, locale);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(frontmatter, locale);

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
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
          <li>
            <span className="text-gray-700">Brokers</span>
            <span aria-hidden className="mx-1.5">
              /
            </span>
          </li>
          <li className="text-gray-900">{frontmatter.name}</li>
        </ol>
      </nav>

      <header className="mt-6">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Broker Review
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          {frontmatter.name} Review 2026
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          Reviewed by BinaryBrokerHub Editorial Team · Published{' '}
          {frontmatter.publishedAt} · Last updated {frontmatter.lastReviewed}
        </p>
      </header>

      <VerdictBox broker={frontmatter} />

      <BrokerFactsBox broker={frontmatter} />

      <article className="prose prose-gray mt-12 max-w-none prose-headings:tracking-tight prose-a:text-blue-700">
        <Content />
      </article>

      <ScoreTimeline broker={frontmatter} />

      <section
        aria-labelledby="risk-heading"
        className="mt-12 rounded-lg border border-amber-300 bg-amber-50 p-6 text-sm text-amber-900"
      >
        <h2 id="risk-heading" className="font-semibold">
          Risk Disclosure
        </h2>
        <p className="mt-2">
          Binary options are high-risk speculative products. Most retail
          accounts lose money. Binary options are restricted or prohibited in
          the EEA, UK retail market, US (outside CFTC-regulated venues),
          Israel, and Canada. Trading binary options may also be unsuitable
          under local law in your jurisdiction — verify before depositing.
          BinaryBrokerHub does not provide trading advice.
        </p>
      </section>

      <footer className="mt-12 border-t border-gray-200 pt-6 text-xs text-gray-500">
        <p>
          Affiliate disclosure: We may earn a commission when you sign up
          through links on this page. This does not influence our scoring —
          read our{' '}
          <Link href="/methodology" className="underline hover:text-gray-700">
            methodology
          </Link>{' '}
          and{' '}
          <Link
            href="/editorial-team"
            className="underline hover:text-gray-700"
          >
            editorial process
          </Link>
          .
        </p>
      </footer>
    </main>
  );
}
