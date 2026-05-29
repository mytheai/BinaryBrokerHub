// JSON-LD Schema markup utilities for SEO
// Used in layout.tsx files to add structured data to pages

export interface ReviewSchemaProps {
  brokerName: string;
  score: number;
  maxScore?: number;
  description: string;
  url: string;
  pros?: string[];
  cons?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  category?: string;
}

const BASE_URL = 'https://www.binarybrokerhub.com';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BinaryBrokerHub',
    url: BASE_URL,
    logo: `${BASE_URL}/icon.svg`,
    description: 'Independent binary options broker reviews based on real-money testing. 7 brokers tested with $25,000+ deposited.',
    foundingDate: '2025',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['English', 'Russian', 'Spanish'],
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BinaryBrokerHub',
    url: BASE_URL,
    description: 'Expert binary options broker reviews and comparisons based on real-money testing.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/en/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function reviewSchema({ brokerName, score, maxScore = 10, description, url, pros, cons }: ReviewSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'FinancialProduct',
      name: brokerName,
      category: 'Binary Options Trading Platform',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: score,
      bestRating: maxScore,
      worstRating: 1,
    },
    author: {
      '@type': 'Organization',
      name: 'BinaryBrokerHub',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BinaryBrokerHub',
      url: BASE_URL,
    },
    description,
    url,
    datePublished: '2025-12-01',
    dateModified: '2026-05-25',
    ...(pros && { positiveNotes: { '@type': 'ItemList', itemListElement: pros.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p })) } }),
    ...(cons && { negativeNotes: { '@type': 'ItemList', itemListElement: cons.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c })) } }),
  };
}

export function faqSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema({ title, description, url, datePublished, dateModified, authorName, category }: ArticleSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName || 'BinaryBrokerHub Team',
      url: `${BASE_URL}/en/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BinaryBrokerHub',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/icon.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    ...(category && { articleSection: category }),
  };
}

export function comparisonSchema(brokerA: string, brokerB: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${brokerA} vs ${brokerB} — Detailed Comparison`,
    description: `Side-by-side comparison of ${brokerA} and ${brokerB} binary options brokers. Payouts, features, regulation, and our recommendation.`,
    url,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: brokerA },
        { '@type': 'ListItem', position: 2, name: brokerB },
      ],
    },
  };
}

export function itemListSchema(brokers: { name: string; score: number; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Binary Options Brokers 2026',
    description: 'Ranked list of the best binary options brokers based on real-money testing.',
    itemListElement: brokers.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      url: b.url,
      item: {
        '@type': 'FinancialProduct',
        name: b.name,
        url: b.url,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: b.score,
          bestRating: 10,
          ratingCount: 1,
        },
      },
    })),
  };
}
