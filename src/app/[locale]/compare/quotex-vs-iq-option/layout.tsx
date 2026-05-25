import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { comparisonSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Quotex vs IQ Option 2026 — Payouts vs Platform',
  description:
    'Quotex vs IQ Option comparison: up to 98% payouts vs CySEC-regulated platform. We test deposits, withdrawals, charting tools, and mobile trading experience.',
  openGraph: {
    title: 'Quotex vs IQ Option 2026 — Payouts vs Platform',
    description:
      'Quotex offers higher payouts, IQ Option offers regulation. Compare both brokers on deposits, tools, and trading experience.',
    url: `${BASE_URL}/en/compare/quotex-vs-iq-option`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quotex vs IQ Option 2026 — Payouts vs Platform',
    description:
      'Quotex offers higher payouts, IQ Option offers regulation. Compare both brokers on deposits, tools, and trading experience.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/compare/quotex-vs-iq-option`,
    languages: {
      en: `${BASE_URL}/en/compare/quotex-vs-iq-option`,
      ru: `${BASE_URL}/ru/compare/quotex-vs-iq-option`,
      es: `${BASE_URL}/es/compare/quotex-vs-iq-option`,
    },
  },
};

const schemas = [
  comparisonSchema('Quotex', 'IQ Option', `${BASE_URL}/en/compare/quotex-vs-iq-option`),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Compare', url: `${BASE_URL}/en/compare` },
    { name: 'Quotex vs IQ Option', url: `${BASE_URL}/en/compare/quotex-vs-iq-option` },
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
