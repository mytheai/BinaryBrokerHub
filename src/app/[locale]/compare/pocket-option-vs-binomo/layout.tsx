import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { comparisonSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

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
  faqSchema([
    { question: 'Which has a lower minimum deposit?', answer: 'Pocket Option requires just $5 minimum deposit, while Binomo requires $10. Pocket Option wins on entry barrier.' },
    { question: 'Which is better for beginners?', answer: 'Binomo has a simpler interface with a gentler learning curve. Pocket Option offers copy trading which helps beginners learn from experienced traders.' },
    { question: 'Which has higher payouts?', answer: 'Pocket Option offers up to 92% payouts compared to Binomo\'s maximum of 90%. Pocket Option consistently offers higher payouts across most asset pairs.' },
    { question: 'Is Pocket Option or Binomo more trustworthy?', answer: 'Pocket Option has active IFMRRC certification and higher user ratings. Binomo has faced regulatory warnings in some countries.' },
    { question: 'Which has better withdrawal speeds?', answer: 'Pocket Option processes crypto withdrawals in 12-45 minutes. Binomo typically takes 1-3 business days. Pocket Option is significantly faster.' },
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
