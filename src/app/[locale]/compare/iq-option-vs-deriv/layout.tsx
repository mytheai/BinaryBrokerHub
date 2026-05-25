import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { comparisonSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

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
  faqSchema([
    { question: 'Which is more regulated, IQ Option or Deriv?', answer: 'Both have strong regulation. IQ Option holds CySEC (EU). Deriv holds MFSA (Malta/EU), LFSA, VFSC, and BVI FSC. Deriv has broader global coverage.' },
    { question: 'Which has more trading instruments?', answer: 'Deriv offers significantly more variety — forex, synthetics, commodities, stocks, and indices. IQ Option focuses on binary options (non-EU), forex, stocks, and crypto CFDs.' },
    { question: 'Can I trade on weekends?', answer: 'Yes, with Deriv. Their synthetic indices trade 24/7 including weekends and holidays. IQ Option only offers trading during standard market hours.' },
    { question: 'Which is better for binary options?', answer: 'IQ Option has a more polished binary options interface with better charting tools and 100+ indicators. Deriv offers binary options through Deriv Trader with competitive payouts.' },
    { question: 'Which has a lower minimum deposit?', answer: 'Deriv requires just $5 minimum deposit. IQ Option requires $10. Both offer $1 minimum trade sizes.' },
    { question: 'Which has better educational resources?', answer: 'IQ Option has a comprehensive learning academy with video courses and quizzes. Deriv has a knowledge base and Deriv Academy but it is less interactive.' },
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
