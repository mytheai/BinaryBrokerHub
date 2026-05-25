import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { reviewSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Deriv Review 2026 — Score 9.0/10 | MFSA Tier-1 Regulated, 26 Years',
  description:
    'Deriv review: MFSA Malta Tier-1 regulated, 26 years operating, DBot automation, synthetic indices 24/7. $5 min deposit. Honest real-money testing results.',
  openGraph: {
    title: 'Deriv Review 2026 — 9.0/10 Rating',
    description:
      'Deriv tested with real money: MFSA Tier-1 regulation, 26 years track record, DBot, synthetic indices. Full review.',
    url: `${BASE_URL}/en/deriv`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deriv Review 2026 — 9.0/10',
    description:
      'MFSA Tier-1 regulated, 26 years operating, DBot automation, synthetic indices 24/7.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/deriv`,
    languages: {
      en: `${BASE_URL}/en/deriv`,
      ru: `${BASE_URL}/ru/deriv`,
      es: `${BASE_URL}/es/deriv`,
    },
  },
};

const schemas = [
  reviewSchema({
    brokerName: 'Deriv',
    score: 9.0,
    description:
      'Most trusted binary options broker with MFSA Malta Tier-1 regulation, 26 years of operation, DBot automation, and synthetic indices available 24/7.',
    url: `${BASE_URL}/en/deriv`,
    pros: [
      'MFSA Malta Tier-1 regulation',
      '26 years of operation (since 1999)',
      'DBot automated trading',
      'Synthetic indices available 24/7',
    ],
    cons: [
      'Complex platform for beginners',
      'Smaller user base than competitors',
    ],
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Broker Reviews', url: `${BASE_URL}/en/compare` },
    { name: 'Deriv Review', url: `${BASE_URL}/en/deriv` },
  ]),
  faqSchema([
    {
      question: 'Is Deriv regulated?',
      answer:
        'Yes, Deriv is regulated by the MFSA (Malta Financial Services Authority), a Tier-1 EU regulator. This makes Deriv the most heavily regulated binary options broker we reviewed.',
    },
    {
      question: 'What are Deriv synthetic indices?',
      answer:
        'Synthetic indices are simulated markets offered by Deriv that are available for trading 24/7, including weekends. They are not tied to real-world assets and provide continuous trading opportunities.',
    },
    {
      question: 'What is Deriv minimum deposit?',
      answer:
        'Deriv requires a $5 minimum deposit, making it one of the most accessible brokers alongside Pocket Option.',
    },
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
