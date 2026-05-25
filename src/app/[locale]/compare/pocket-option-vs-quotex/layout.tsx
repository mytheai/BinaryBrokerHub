import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { comparisonSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Pocket Option vs Quotex 2026 — Which Broker Is Better?',
  description:
    'Pocket Option vs Quotex head-to-head comparison. We compare payouts (up to 92% vs 98%), minimum deposits, demo accounts, copy trading, and withdrawal speed.',
  openGraph: {
    title: 'Pocket Option vs Quotex 2026 — Which Broker Is Better?',
    description:
      'Head-to-head comparison of Pocket Option and Quotex. Payouts, features, deposits, and our final recommendation.',
    url: `${BASE_URL}/en/compare/pocket-option-vs-quotex`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pocket Option vs Quotex 2026 — Which Broker Is Better?',
    description:
      'Head-to-head comparison of Pocket Option and Quotex. Payouts, features, deposits, and our final recommendation.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/compare/pocket-option-vs-quotex`,
    languages: {
      en: `${BASE_URL}/en/compare/pocket-option-vs-quotex`,
      ru: `${BASE_URL}/ru/compare/pocket-option-vs-quotex`,
      es: `${BASE_URL}/es/compare/pocket-option-vs-quotex`,
    },
  },
};

const schemas = [
  comparisonSchema('Pocket Option', 'Quotex', `${BASE_URL}/en/compare/pocket-option-vs-quotex`),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Compare', url: `${BASE_URL}/en/compare` },
    { name: 'Pocket Option vs Quotex', url: `${BASE_URL}/en/compare/pocket-option-vs-quotex` },
  ]),
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaScript schema={schemas} />
      {children}
    </>
  );
}
