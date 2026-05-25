import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { reviewSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Quotex Review 2026 — Score 9.4/10 | Highest Payouts Up to 98%',
  description:
    'Quotex review with real-money testing results. 98% max payout, $10 min deposit, fast execution, free unlimited demo. Honest pros, cons, and payout analysis.',
  openGraph: {
    title: 'Quotex Review 2026 — 9.4/10 Rating',
    description:
      'Quotex tested with real money: industry-leading 98% payouts, $10 deposit, ultra-fast execution. Full review.',
    url: `${BASE_URL}/en/quotex`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quotex Review 2026 — 9.4/10',
    description:
      'Real-money test: 98% max payouts, $10 min deposit, fastest execution.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/quotex`,
    languages: {
      en: `${BASE_URL}/en/quotex`,
      ru: `${BASE_URL}/ru/quotex`,
      es: `${BASE_URL}/es/quotex`,
    },
  },
};

const schemas = [
  reviewSchema({
    brokerName: 'Quotex',
    score: 9.4,
    description:
      'Highest payout binary options broker with up to 98% returns, fast execution, and a clean modern interface.',
    url: `${BASE_URL}/en/quotex`,
    pros: [
      'Highest payouts up to 98%',
      'Fast execution speed',
      'Clean modern UI',
      'Free unlimited demo account',
    ],
    cons: [
      'No regulation (IFMRRC expired)',
      'Limited copy trading',
      'Web-only platform',
    ],
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Broker Reviews', url: `${BASE_URL}/en/compare` },
    { name: 'Quotex Review', url: `${BASE_URL}/en/quotex` },
  ]),
  faqSchema([
    {
      question: 'What is the maximum payout on Quotex?',
      answer:
        'Quotex offers up to 98% maximum payout, the highest among all binary options brokers we tested.',
    },
    {
      question: 'Is Quotex regulated?',
      answer:
        'Quotex previously held IFMRRC certification, but it has expired. Quotex currently operates without active regulation from any financial authority.',
    },
    {
      question: 'What is the minimum deposit for Quotex?',
      answer:
        'Quotex requires a $10 minimum deposit. A free unlimited demo account is available without any deposit.',
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
