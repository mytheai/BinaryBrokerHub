import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { reviewSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'IQ Option Review 2026 — Score 9.2/10 | CySEC Regulated Broker',
  description:
    'IQ Option review: CySEC regulated, 250+ assets, 95% max payout, desktop app for Win/Mac/Linux. Real-money testing with honest pros and cons.',
  openGraph: {
    title: 'IQ Option Review 2026 — 9.2/10 Rating',
    description:
      'IQ Option tested with real money: CySEC regulated, 250+ assets, best platform UX, desktop app. Full review.',
    url: `${BASE_URL}/en/iq-option`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IQ Option Review 2026 — 9.2/10',
    description:
      'CySEC regulated, 250+ assets, 95% payouts, desktop app for all platforms.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/iq-option`,
    languages: {
      en: `${BASE_URL}/en/iq-option`,
      ru: `${BASE_URL}/ru/iq-option`,
      es: `${BASE_URL}/es/iq-option`,
    },
  },
};

const schemas = [
  reviewSchema({
    brokerName: 'IQ Option',
    score: 9.2,
    description:
      'CySEC regulated binary options broker with the best platform UX, 250+ assets, and desktop apps for Windows, Mac, and Linux.',
    url: `${BASE_URL}/en/iq-option`,
    pros: [
      'CySEC regulated (EU entity)',
      'Best platform UX in the industry',
      '250+ tradeable assets',
      'Desktop app for Win/Mac/Linux',
    ],
    cons: [
      'Lower payouts than Quotex (95% max)',
      'No copy trading feature',
    ],
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Broker Reviews', url: `${BASE_URL}/en/compare` },
    { name: 'IQ Option Review', url: `${BASE_URL}/en/iq-option` },
  ]),
  faqSchema([
    {
      question: 'Is IQ Option regulated?',
      answer:
        'Yes, IQ Option is regulated by CySEC (Cyprus Securities and Exchange Commission) for its EU entity, making it one of the most trusted binary options brokers.',
    },
    {
      question: 'Does IQ Option have a desktop app?',
      answer:
        'Yes, IQ Option offers a desktop application for Windows, Mac, and Linux, in addition to web and mobile platforms.',
    },
    {
      question: 'What is IQ Option minimum deposit?',
      answer:
        'IQ Option requires a $10 minimum deposit to start trading with real money.',
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
