import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { comparisonSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

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
  faqSchema([
    { question: 'Which has higher payouts, Quotex or Binomo?', answer: 'Quotex offers up to 98% payouts versus Binomo\'s maximum of 90%. Quotex has a significant advantage on payout percentages.' },
    { question: 'Which has a lower minimum deposit?', answer: 'Both require a $10 minimum deposit and offer $1 minimum trade sizes, making them equal on minimum entry.' },
    { question: 'Which is better for beginners?', answer: 'Binomo has a simpler interface and better structured educational content. Quotex has a cleaner design but fewer learning resources.' },
    { question: 'Which is more trustworthy?', answer: 'Quotex has IFMRRC certification (though expired). Binomo has faced regulatory warnings in several countries. Quotex has a slightly better trust profile.' },
    { question: 'Which has faster withdrawals?', answer: 'Quotex processes crypto withdrawals in about 47 minutes. Binomo typically takes 1-3 business days. Quotex is significantly faster.' },
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
