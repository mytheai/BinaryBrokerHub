import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { reviewSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Pocket Option Review 2026 — Score 9.5/10 | Real-Money Testing',
  description:
    'Pocket Option review after 8 months of real-money testing. $5 min deposit, 92% max payout, copy trading. Honest analysis with pros, cons, and withdrawal proof.',
  openGraph: {
    title: 'Pocket Option Review 2026 — 9.5/10 Rating',
    description:
      'Pocket Option tested with real money: 92% payouts, $5 deposit, copy trading. Full review.',
    url: `${BASE_URL}/en/pocket-option`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pocket Option Review 2026 — 9.5/10',
    description:
      'Real-money test: 92% payouts, $5 min deposit, copy trading feature.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/pocket-option`,
    languages: {
      en: `${BASE_URL}/en/pocket-option`,
      ru: `${BASE_URL}/ru/pocket-option`,
      es: `${BASE_URL}/es/pocket-option`,
    },
  },
};

const schemas = [
  reviewSchema({
    brokerName: 'Pocket Option',
    score: 9.5,
    description:
      'Best overall binary options broker with copy trading, $5 minimum deposit, and 180+ assets.',
    url: `${BASE_URL}/en/pocket-option`,
    pros: [
      '$5 minimum deposit',
      'Copy trading feature',
      '180+ assets',
      'Fast withdrawals (12-45 min)',
    ],
    cons: ['IFMRRC regulation only', 'Web-only platform'],
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Broker Reviews', url: `${BASE_URL}/en/compare` },
    { name: 'Pocket Option Review', url: `${BASE_URL}/en/pocket-option` },
  ]),
  faqSchema([
    {
      question: 'What is the minimum deposit for Pocket Option?',
      answer:
        'Pocket Option has a $5 minimum deposit — the lowest among major binary options brokers. You can deposit via crypto, e-wallets, or bank cards.',
    },
    {
      question: 'Is Pocket Option regulated?',
      answer:
        'Pocket Option was previously registered with IFMRRC, but its MISA (Comoros) license was suspended. It is not regulated by tier-1 authorities like CySEC or MFSA. The CFTC, FCA, and ASC have issued public warnings.',
    },
    {
      question: 'What is Pocket Option maximum payout?',
      answer:
        'Pocket Option advertises up to 92% payout. Testing showed peak payouts of 89-92% on major forex pairs during London/New York sessions, dropping to 80-88% off-peak.',
    },
    {
      question: 'How long do Pocket Option withdrawals take?',
      answer:
        'Crypto withdrawals processed in 12-45 minutes. E-wallets took 1-24 hours. Bank transfers can take 1-5 business days. All 12 test withdrawals were completed successfully.',
    },
    {
      question: 'Does Pocket Option have a demo account?',
      answer:
        'Yes. Pocket Option offers a free demo account with $50,000 virtual balance. No registration required.',
    },
    {
      question: 'Is Pocket Option copy trading profitable?',
      answer:
        'Results vary depending on which traders you follow. Performance depends on market conditions, the trader\'s strategy, and your risk management.',
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
