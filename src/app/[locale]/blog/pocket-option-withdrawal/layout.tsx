import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Pocket Option Withdrawal Guide 2026 — Methods, Times & Proof',
  description: 'How to withdraw from Pocket Option: all methods, processing times, fees, and real withdrawal proof. Step-by-step guide with KYC tips.',
  openGraph: {
    title: 'Pocket Option Withdrawal Guide 2026 — Methods, Times & Proof',
    description: 'How to withdraw from Pocket Option: all methods, processing times, fees, and real withdrawal proof. Step-by-step guide with KYC tips.',
    url: `${BASE_URL}/en/blog/pocket-option-withdrawal`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pocket Option Withdrawal Guide 2026 — Methods, Times & Proof',
    description: 'How to withdraw from Pocket Option: all methods, processing times, fees, and real withdrawal proof. Step-by-step guide with KYC tips.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/pocket-option-withdrawal`,
    languages: {
      en: `${BASE_URL}/en/blog/pocket-option-withdrawal`,
      ru: `${BASE_URL}/ru/blog/pocket-option-withdrawal`,
      es: `${BASE_URL}/es/blog/pocket-option-withdrawal`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Pocket Option Withdrawal Guide 2026 — Methods, Times & Proof',
    description: 'How to withdraw from Pocket Option: all methods, processing times, fees, and real withdrawal proof. Step-by-step guide with KYC tips.',
    url: `${BASE_URL}/en/blog/pocket-option-withdrawal`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Broker Guides',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'Pocket Option Withdrawal Guide', url: `${BASE_URL}/en/blog/pocket-option-withdrawal` },
  ]),
  faqSchema([
    { question: 'How long does Pocket Option withdrawal take?', answer: 'Crypto (USDT TRC-20): 12-45 minutes in our testing. Cards: 1-3 days. E-wallets: 1-6 hours. Official policy states "up to 3 business days".' },
    { question: 'What is the minimum withdrawal on Pocket Option?', answer: '$10 for most methods. Some methods may have higher minimums.' },
    { question: 'Does Pocket Option charge withdrawal fees?', answer: 'No fees from Pocket Option. Blockchain network fees apply for crypto. Your bank/e-wallet may charge separately.' },
    { question: 'Why is my withdrawal taking so long?', answer: 'First withdrawals take longer due to KYC. Also check: active bonus with unmet turnover, incomplete verification, or trying to use a different method than your deposit.' },
    { question: 'Can I withdraw to a different method than I deposited?', answer: 'You must withdraw up to your deposit amount via the original method first. After that, excess profits can go to any available method.' },
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
