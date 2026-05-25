import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { comparisonSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'IQ Option vs Deriv 2026 — CySEC vs MFSA Regulation',
  description:
    'IQ Option vs Deriv regulation showdown: CySEC vs MFSA/VFSC. Compare trading platforms, asset variety, synthetic indices, payout rates, and withdrawal options.',
  openGraph: {
    title: 'IQ Option vs Deriv 2026 — CySEC vs MFSA Regulation',
    description:
      'Two regulated brokers compared: IQ Option (CySEC) vs Deriv (MFSA). Platforms, assets, synthetic indices, and payouts.',
    url: `${BASE_URL}/en/compare/iq-option-vs-deriv`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IQ Option vs Deriv 2026 — CySEC vs MFSA Regulation',
    description:
      'Two regulated brokers compared: IQ Option (CySEC) vs Deriv (MFSA). Platforms, assets, synthetic indices, and payouts.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/compare/iq-option-vs-deriv`,
    languages: {
      en: `${BASE_URL}/en/compare/iq-option-vs-deriv`,
      ru: `${BASE_URL}/ru/compare/iq-option-vs-deriv`,
      es: `${BASE_URL}/es/compare/iq-option-vs-deriv`,
    },
  },
};

const schemas = [
  comparisonSchema('IQ Option', 'Deriv', `${BASE_URL}/en/compare/iq-option-vs-deriv`),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Compare', url: `${BASE_URL}/en/compare` },
    { name: 'IQ Option vs Deriv', url: `${BASE_URL}/en/compare/iq-option-vs-deriv` },
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
