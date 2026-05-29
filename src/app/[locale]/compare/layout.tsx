import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { itemListSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Compare All 7 Binary Options Brokers 2026 — Side by Side',
  description:
    'Compare Pocket Option, Quotex, IQ Option, Deriv, Olymp Trade, Binomo & ExpertOption side by side. Payouts, min deposits, regulation, and features in one table.',
  openGraph: {
    title: 'Compare All 7 Binary Options Brokers 2026 — Side by Side',
    description:
      'Side-by-side comparison of 7 binary options brokers. Payouts, deposits, regulation, and real-money test results.',
    url: `${BASE_URL}/en/compare`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare All 7 Binary Options Brokers 2026',
    description:
      'Side-by-side comparison of 7 binary options brokers. Payouts, deposits, regulation, and real-money test results.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/compare`,
    languages: {
      en: `${BASE_URL}/en/compare`,
      ru: `${BASE_URL}/ru/compare`,
      es: `${BASE_URL}/es/compare`,
    },
  },
};

const schemas = [
  itemListSchema([
    { name: 'Pocket Option', score: 9.5, url: `${BASE_URL}/en/pocket-option` },
    { name: 'Quotex', score: 9.4, url: `${BASE_URL}/en/quotex` },
    { name: 'IQ Option', score: 9.2, url: `${BASE_URL}/en/iq-option` },
    { name: 'Deriv', score: 9.0, url: `${BASE_URL}/en/deriv` },
    { name: 'Olymp Trade', score: 8.6, url: `${BASE_URL}/en/olymp-trade` },
    { name: 'Binomo', score: 8.2, url: `${BASE_URL}/en/binomo` },
    { name: 'ExpertOption', score: 7.8, url: `${BASE_URL}/en/expert-option` },
  ]),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Compare Brokers', url: `${BASE_URL}/en/compare` },
  ]),
];

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaScript schema={schemas} />
      {children}
    </>
  );
}
