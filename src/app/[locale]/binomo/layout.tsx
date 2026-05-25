import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { reviewSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Binomo Review 2026 — Score 8.2/10 | Best Tournaments & Gamified Trading',
  description:
    'Binomo review: daily tournaments, beginner-friendly gamified interface, 70+ assets, 90% max payout. FinaCom A member. Real-money testing with honest pros and cons.',
  openGraph: {
    title: 'Binomo Review 2026 — 8.2/10 Rating',
    description:
      'Binomo tested with real money: best tournaments, gamified trading, 70+ assets, 90% payouts. Full review.',
    url: `${BASE_URL}/en/binomo`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binomo Review 2026 — 8.2/10',
    description:
      'Best tournaments, gamified interface, 70+ assets, 90% max payout.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/binomo`,
    languages: {
      en: `${BASE_URL}/en/binomo`,
      ru: `${BASE_URL}/ru/binomo`,
      es: `${BASE_URL}/es/binomo`,
    },
  },
};

const schemas = [
  reviewSchema({
    brokerName: 'Binomo',
    score: 8.2,
    description:
      'Best binary options broker for tournaments and gamified trading experience, ideal for beginners with a fun, competitive interface.',
    url: `${BASE_URL}/en/binomo`,
    pros: [
      'Best daily tournaments with prize pools',
      'Beginner-friendly gamified interface',
      'Low barrier to entry',
      'FinaCom A membership protection',
    ],
    cons: [
      'Lowest max payout (90%)',
      'Fewest assets (70+)',
      'No copy trading feature',
    ],
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Broker Reviews', url: `${BASE_URL}/en/compare` },
    { name: 'Binomo Review', url: `${BASE_URL}/en/binomo` },
  ]),
  faqSchema([
    {
      question: 'What are Binomo tournaments?',
      answer:
        'Binomo offers daily trading tournaments where traders compete for prize pools. Tournaments are free or low-cost to enter and add a competitive, gamified element to trading.',
    },
    {
      question: 'Is Binomo good for beginners?',
      answer:
        'Yes, Binomo is one of the most beginner-friendly brokers with a gamified interface, simple trade mechanics, and a free demo account with $10,000 virtual funds.',
    },
    {
      question: 'What is Binomo minimum deposit?',
      answer:
        'Binomo requires a $10 minimum deposit to start trading with real money.',
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
