import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { reviewSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Olymp Trade Review 2026 — Score 8.6/10 | Best for India & SEA',
  description:
    'Olymp Trade review: #1 in India and Southeast Asia, 190+ assets, 93% max payout, FinaCom A protection. FTT trading, local payment methods. Real-money tested.',
  openGraph: {
    title: 'Olymp Trade Review 2026 — 8.6/10 Rating',
    description:
      'Olymp Trade tested with real money: best for India/SEA, 190+ assets, 93% payouts, FinaCom protection. Full review.',
    url: `${BASE_URL}/en/olymp-trade`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olymp Trade Review 2026 — 8.6/10',
    description:
      '#1 in India & SEA, 190+ assets, 93% max payout, FinaCom A protection.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/olymp-trade`,
    languages: {
      en: `${BASE_URL}/en/olymp-trade`,
      ru: `${BASE_URL}/ru/olymp-trade`,
      es: `${BASE_URL}/es/olymp-trade`,
    },
  },
};

const schemas = [
  reviewSchema({
    brokerName: 'Olymp Trade',
    score: 8.6,
    description:
      'Leading binary options broker in India and Southeast Asia with 190+ assets, local payment methods, and FinaCom A membership protection.',
    url: `${BASE_URL}/en/olymp-trade`,
    pros: [
      'Best for India and Southeast Asia',
      'Local payment methods supported',
      'FinaCom A membership protection',
      '190+ tradeable assets',
    ],
    cons: [
      'FTT trading instead of classic binary options',
      'Mid-tier regulation (FinaCom)',
    ],
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Broker Reviews', url: `${BASE_URL}/en/compare` },
    { name: 'Olymp Trade Review', url: `${BASE_URL}/en/olymp-trade` },
  ]),
  faqSchema([
    {
      question: 'Is Olymp Trade available in India?',
      answer:
        'Yes. Olymp Trade is one of the most popular trading platforms in India, supporting UPI, Net Banking, Paytm, and local bank transfers in INR.',
    },
    {
      question: 'What is Olymp Trade FTT trading?',
      answer:
        'FTT (Fixed Time Trades) is Olymp Trade\'s version of binary options. You predict whether an asset price will go up or down within a fixed time period.',
    },
    {
      question: 'What is Olymp Trade minimum deposit?',
      answer:
        'Olymp Trade requires a $10 minimum deposit. Individual trades start from $1.',
    },
    {
      question: 'Is Olymp Trade regulated?',
      answer:
        'Olymp Trade is a FinaCom Category A member (up to €20,000 compensation per dispute) with VFSC Vanuatu offshore registration. Not Tier-1 regulated.',
    },
    {
      question: 'What are Olymp Trade payout rates?',
      answer:
        'Payouts are tiered: Starter 80-82%, Advanced 84-86%, Expert 90-93%. Higher tiers require more trading volume.',
    },
    {
      question: 'Does Olymp Trade have a demo account?',
      answer:
        'Yes. Olymp Trade offers a free demo account with $10,000 virtual balance. Replenishable.',
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
