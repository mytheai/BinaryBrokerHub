import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Binary Options in Nigeria 2026 — Legal Status, Best Brokers & Guide',
  description:
    'Is binary options trading legal in Nigeria? Complete guide covering SEC Nigeria regulations, best brokers accepting Nigerian traders, Naira deposits, OPay/crypto support, and tax implications.',
  openGraph: {
    title: 'Binary Options in Nigeria 2026 — Legal Status, Best Brokers & Guide',
    description:
      'Complete guide to binary options trading in Nigeria. Legal status, SEC Nigeria regulations, best brokers with NGN deposits, OPay/crypto support, and tax implications.',
    url: `${BASE_URL}/en/binary-options-nigeria`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary Options in Nigeria 2026 — Legal Status & Best Brokers',
    description:
      'Is binary options trading legal in Nigeria? SEC Nigeria regulations, best brokers, Naira deposits, and tax guide.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/binary-options-nigeria`,
    languages: {
      en: `${BASE_URL}/en/binary-options-nigeria`,
      ru: `${BASE_URL}/ru/binary-options-nigeria`,
      es: `${BASE_URL}/es/binary-options-nigeria`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Binary Options in Nigeria 2026 — Legal Status, Best Brokers & Guide',
    description:
      'Complete guide to binary options trading in Nigeria. Legal status, SEC Nigeria regulations, best brokers with NGN deposits, and tax implications.',
    url: `${BASE_URL}/en/binary-options-nigeria`,
    datePublished: '2026-05-25',
    dateModified: '2026-05-25',
    category: 'Country Guides',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Country Guides', url: `${BASE_URL}/en/binary-options-nigeria` },
    { name: 'Binary Options in Nigeria', url: `${BASE_URL}/en/binary-options-nigeria` },
  ]),
  faqSchema([
    {
      question: 'Is binary options trading legal in Nigeria?',
      answer:
        'Binary options trading is not explicitly regulated or banned in Nigeria. SEC Nigeria does not oversee binary options, and there is no specific law prohibiting Nigerians from trading through offshore brokers. However, since these platforms are unregulated locally, traders have no domestic legal protection.',
    },
    {
      question: 'Which is the best binary options broker for Nigerian traders?',
      answer:
        'Pocket Option is our top recommendation for Nigeria due to its low $5 minimum deposit, crypto-friendly deposits, and copy trading features. Quotex and IQ Option are also popular alternatives with competitive payouts.',
    },
    {
      question: 'Can I deposit in Naira (NGN)?',
      answer:
        'Yes, several brokers accept Naira deposits via bank transfer, OPay, and Palmpay. Cryptocurrency (especially USDT) is also a popular and fast deposit method for Nigerian traders.',
    },
    {
      question: 'What is the minimum amount needed to start?',
      answer:
        'Pocket Option offers the lowest minimum deposit at just $5. Most other brokers require $10. We recommend starting with a free demo account before depositing real money.',
    },
    {
      question: 'How do I withdraw my binary options profits in Nigeria?',
      answer:
        'You can withdraw via bank transfer (NGN), cryptocurrency (USDT/Bitcoin), or mobile money services like OPay. Crypto withdrawals are typically the fastest at 5-60 minutes. Bank transfers may take 1-3 business days.',
    },
    {
      question: 'Do I need to pay taxes on binary options profits in Nigeria?',
      answer:
        'In principle, investment income is taxable under Nigerian law (FIRS/PITA). However, practical enforcement on offshore binary options trading is currently limited. Consult a tax professional for personalized advice.',
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
