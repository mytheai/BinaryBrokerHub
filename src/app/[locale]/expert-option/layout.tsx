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
        'No, ExpertOption currently operates without regulation from any recognized financial authority. This is a significant risk factor to consider.',
    },
    {
      question: 'What is ExpertOption social trading?',
      answer:
        'ExpertOption offers a social trading feed where you can observe what other traders are doing. However, it is observation-only — you cannot automatically copy their trades like with Pocket Option\'s copy trading.',
    },
    {
      question: 'What is ExpertOption minimum deposit?',
      answer:
        'ExpertOption requires a $10 minimum deposit for the basic account tier. Higher tiers with additional features require larger deposits.',
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
