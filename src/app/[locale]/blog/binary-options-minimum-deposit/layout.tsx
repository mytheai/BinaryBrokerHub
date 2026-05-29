import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Binary Options Minimum Deposit Comparison 2026 — Start from $5',
  description: 'Compare minimum deposits across 7 binary options brokers. Start trading from just $5. Full breakdown of deposit methods, fees, and processing times.',
  openGraph: {
    title: 'Binary Options Minimum Deposit Comparison 2026 — Start from $5',
    description: 'Compare minimum deposits across 7 binary options brokers. Start trading from just $5. Full breakdown of deposit methods, fees, and processing times.',
    url: `${BASE_URL}/en/blog/binary-options-minimum-deposit`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary Options Minimum Deposit Comparison 2026 — Start from $5',
    description: 'Compare minimum deposits across 7 binary options brokers. Start trading from just $5. Full breakdown of deposit methods, fees, and processing times.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/binary-options-minimum-deposit`,
    languages: {
      en: `${BASE_URL}/en/blog/binary-options-minimum-deposit`,
      ru: `${BASE_URL}/ru/blog/binary-options-minimum-deposit`,
      es: `${BASE_URL}/es/blog/binary-options-minimum-deposit`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Binary Options Minimum Deposit Comparison 2026 — Start from $5',
    description: 'Compare minimum deposits across 7 binary options brokers. Start trading from just $5. Full breakdown of deposit methods, fees, and processing times.',
    url: `${BASE_URL}/en/blog/binary-options-minimum-deposit`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Broker Comparisons',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'Binary Options Minimum Deposit', url: `${BASE_URL}/en/blog/binary-options-minimum-deposit` },
  ]),
  faqSchema([
    { question: 'Can I really start trading with $5?', answer: 'Yes, Pocket Option and Deriv accept $5 minimum deposits. At $1 minimum trade size, $5 gives you 5 trades. We recommend at least $10-50 for a more meaningful experience with proper risk management.' },
    { question: 'Do I need to verify my identity for small deposits?', answer: 'Most brokers allow you to deposit and trade without verification, but you\'ll need to complete KYC verification before making your first withdrawal.' },
    { question: 'Are there deposit fees?', answer: 'Most brokers don\'t charge deposit fees. However, your payment provider may charge transaction fees. Crypto (USDT TRC20) typically has the lowest fees.' },
    { question: 'Should I deposit more for better payouts?', answer: 'Some brokers offer higher payouts for larger deposits. However, never deposit more than you\'re comfortable losing.' },
    { question: 'Can I withdraw my deposit if I change my mind?', answer: 'Yes, you can withdraw your deposit at any time minus any trading losses. If you accepted a bonus, there may be trading volume requirements before withdrawal.' },
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
