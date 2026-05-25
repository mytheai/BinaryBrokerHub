import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { comparisonSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Pocket Option vs Binomo 2026 — Features vs Tournaments',
  description:
    'Pocket Option vs Binomo: copy trading and social features vs tournaments and gamification. Compare payouts, deposits, platforms, and withdrawal speed.',
  openGraph: {
    title: 'Pocket Option vs Binomo 2026 — Features vs Tournaments',
    description:
      'Pocket Option social trading vs Binomo tournaments. Full comparison of payouts, features, and real trading experience.',
    url: `${BASE_URL}/en/compare/pocket-option-vs-binomo`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pocket Option vs Binomo 2026 — Features vs Tournaments',
    description:
      'Pocket Option social trading vs Binomo tournaments. Full comparison of payouts, features, and real trading experience.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/compare/pocket-option-vs-binomo`,
    languages: {
      en: `${BASE_URL}/en/compare/pocket-option-vs-binomo`,
      ru: `${BASE_URL}/ru/compare/pocket-option-vs-binomo`,
      es: `${BASE_URL}/es/compare/pocket-option-vs-binomo`,
    },
  },
};

const schemas = [
  comparisonSchema('Pocket Option', 'Binomo', `${BASE_URL}/en/compare/pocket-option-vs-binomo`),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Compare', url: `${BASE_URL}/en/compare` },
    { name: 'Pocket Option vs Binomo', url: `${BASE_URL}/en/compare/pocket-option-vs-binomo` },
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
