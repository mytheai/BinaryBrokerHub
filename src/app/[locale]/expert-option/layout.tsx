import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { reviewSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'ExpertOption Review 2026 — Score 7.8/10 | Social Trading with 40M+ Users',
  description:
    'ExpertOption review: social trading feed with 40M+ users, 100+ assets, 95% max payout, multiple account tiers. Unregulated. Real-money testing with honest analysis.',
  openGraph: {
    title: 'ExpertOption Review 2026 — 7.8/10 Rating',
    description:
      'ExpertOption tested with real money: social trading insights, 40M+ users, 100+ assets, 95% payouts. Full review.',
    url: `${BASE_URL}/en/expert-option`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExpertOption Review 2026 — 7.8/10',
    description:
      'Social trading feed with 40M+ users, 100+ assets, 95% max payout.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/expert-option`,
    languages: {
      en: `${BASE_URL}/en/expert-option`,
      ru: `${BASE_URL}/ru/expert-option`,
      es: `${BASE_URL}/es/expert-option`,
    },
  },
};

const schemas = [
  reviewSchema({
    brokerName: 'ExpertOption',
    score: 7.8,
    description:
      'Binary options broker with a social trading feed featuring insights from 40M+ users, multiple account tiers, and 100+ tradeable assets.',
    url: `${BASE_URL}/en/expert-option`,
    pros: [
      'Social trading feed with community insights',
      '40M+ registered users',
      'Multiple account tiers',
      '95% max payout',
    ],
    cons: [
      'No regulation',
      'Social trading is observation only (not copy trading)',
      'Limited transparency',
    ],
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Broker Reviews', url: `${BASE_URL}/en/compare` },
    { name: 'ExpertOption Review', url: `${BASE_URL}/en/expert-option` },
  ]),
  faqSchema([
    {
      question: 'Is ExpertOption regulated?',
      answer:
        'No. ExpertOption (EOLabs LLC) is completely unregulated. No FinaCom membership, no government license, no fund protection. Highest risk tier among brokers we review.',
    },
    {
      question: 'What is ExpertOption social trading?',
      answer:
        'ExpertOption shows real-time trades from other users on the chart. Observation-only — you cannot automatically copy trades like on Pocket Option.',
    },
    {
      question: 'What is ExpertOption minimum deposit?',
      answer:
        'ExpertOption requires a $10 minimum deposit for Basic tier. Silver $500, Gold $2,500, Exclusive $5,000+.',
    },
    {
      question: 'What are ExpertOption payout rates?',
      answer:
        'Payouts are tiered: Basic 80%, Silver 84%, Gold 88%, Exclusive up to 95%. The 95% max requires a $5,000+ deposit.',
    },
    {
      question: 'How does ExpertOption compare to Pocket Option?',
      answer:
        'Pocket Option has real copy trading, better regulation, lower $5 deposit, and more consistent payouts. ExpertOption has observation-only social trading and zero regulation.',
    },
    {
      question: 'Does ExpertOption have a demo account?',
      answer:
        'Yes. Free demo account with $10,000 virtual balance. No registration required for initial access.',
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
