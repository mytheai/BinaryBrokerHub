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
        'Yes. Deriv holds an MFSA Malta license (Tier-1 EU regulator), plus Labuan FSA, VFSC Vanuatu, and BVI FSC licenses. It is the most regulated binary options broker we reviewed.',
    },
    {
      question: 'What are Deriv synthetic indices?',
      answer:
        'Synthetic indices are simulated markets available 24/7, including weekends. They are not tied to real-world assets and provide continuous trading opportunities with consistent volatility.',
    },
    {
      question: 'What is Deriv minimum deposit?',
      answer:
        'Deriv requires just $5 minimum deposit — tied with Pocket Option for the lowest in the industry.',
    },
    {
      question: 'What is DBot on Deriv?',
      answer:
        'DBot is Deriv\'s drag-and-drop automated trading tool. Build trading bots without coding by connecting strategy blocks visually. Free to use on any Deriv account.',
    },
    {
      question: 'How does Deriv compare to Pocket Option?',
      answer:
        'Deriv has far stronger regulation (MFSA Tier-1 vs offshore) and 26 years of track record. Pocket Option has copy trading, more binary assets, and a more beginner-friendly interface.',
    },
    {
      question: 'Does Deriv have a demo account?',
      answer:
        'Yes. Deriv offers a free demo account with $10,000 virtual balance across all its platforms (DTrader, DBot, Deriv MT5).',
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
