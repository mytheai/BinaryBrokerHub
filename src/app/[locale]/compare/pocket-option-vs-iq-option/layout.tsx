import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { comparisonSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Pocket Option vs IQ Option 2026 — Detailed Comparison',
  description:
    'Pocket Option vs IQ Option compared: regulation (MISA vs CySEC), payout rates, asset selection, mobile apps, and withdrawal methods. See which broker wins.',
  openGraph: {
    title: 'Pocket Option vs IQ Option 2026 — Detailed Comparison',
    description:
      'Detailed comparison of Pocket Option and IQ Option. Regulation, payouts, platforms, and real user experience tested.',
    url: `${BASE_URL}/en/compare/pocket-option-vs-iq-option`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pocket Option vs IQ Option 2026 — Detailed Comparison',
    description:
      'Detailed comparison of Pocket Option and IQ Option. Regulation, payouts, platforms, and real user experience tested.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/compare/pocket-option-vs-iq-option`,
    languages: {
      en: `${BASE_URL}/en/compare/pocket-option-vs-iq-option`,
      ru: `${BASE_URL}/ru/compare/pocket-option-vs-iq-option`,
      es: `${BASE_URL}/es/compare/pocket-option-vs-iq-option`,
    },
  },
};

const schemas = [
  comparisonSchema('Pocket Option', 'IQ Option', `${BASE_URL}/en/compare/pocket-option-vs-iq-option`),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Compare', url: `${BASE_URL}/en/compare` },
    { name: 'Pocket Option vs IQ Option', url: `${BASE_URL}/en/compare/pocket-option-vs-iq-option` },
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
