import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { comparisonSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Quotex vs Binomo 2026 — Max Payouts vs Gamification',
  description:
    'Quotex vs Binomo compared: up to 98% payouts and fast withdrawals vs tournament-driven trading and account tiers. Which broker fits your trading style?',
  openGraph: {
    title: 'Quotex vs Binomo 2026 — Max Payouts vs Gamification',
    description:
      'Quotex high payouts vs Binomo gamification and tournaments. Compare platforms, deposits, and withdrawal experience.',
    url: `${BASE_URL}/en/compare/quotex-vs-binomo`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quotex vs Binomo 2026 — Max Payouts vs Gamification',
    description:
      'Quotex high payouts vs Binomo gamification and tournaments. Compare platforms, deposits, and withdrawal experience.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/compare/quotex-vs-binomo`,
    languages: {
      en: `${BASE_URL}/en/compare/quotex-vs-binomo`,
      ru: `${BASE_URL}/ru/compare/quotex-vs-binomo`,
      es: `${BASE_URL}/es/compare/quotex-vs-binomo`,
    },
  },
};

const schemas = [
  comparisonSchema('Quotex', 'Binomo', `${BASE_URL}/en/compare/quotex-vs-binomo`),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Compare', url: `${BASE_URL}/en/compare` },
    { name: 'Quotex vs Binomo', url: `${BASE_URL}/en/compare/quotex-vs-binomo` },
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
