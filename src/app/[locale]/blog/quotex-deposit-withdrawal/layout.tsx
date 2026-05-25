import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Quotex Deposit & Withdrawal Guide 2026 — Methods, Fees & Times',
  description: 'Complete Quotex deposit and withdrawal guide. All payment methods, processing times, fees, and step-by-step instructions tested with real money.',
  openGraph: {
    title: 'Quotex Deposit & Withdrawal Guide 2026 — Methods, Fees & Times',
    description: 'Complete Quotex deposit and withdrawal guide. All payment methods, processing times, fees, and step-by-step instructions tested with real money.',
    url: `${BASE_URL}/en/blog/quotex-deposit-withdrawal`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quotex Deposit & Withdrawal Guide 2026 — Methods, Fees & Times',
    description: 'Complete Quotex deposit and withdrawal guide. All payment methods, processing times, fees, and step-by-step instructions tested with real money.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/quotex-deposit-withdrawal`,
    languages: {
      en: `${BASE_URL}/en/blog/quotex-deposit-withdrawal`,
      ru: `${BASE_URL}/ru/blog/quotex-deposit-withdrawal`,
      es: `${BASE_URL}/es/blog/quotex-deposit-withdrawal`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Quotex Deposit & Withdrawal Guide 2026 — All Methods, Fees & Times',
    description: 'Complete Quotex deposit and withdrawal guide. All payment methods, processing times, fees, and step-by-step instructions tested with real money.',
    url: `${BASE_URL}/en/blog/quotex-deposit-withdrawal`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Broker Guides',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'Quotex Deposit & Withdrawal Guide', url: `${BASE_URL}/en/blog/quotex-deposit-withdrawal` },
  ]),
  faqSchema([
    { question: 'What is the minimum deposit on Quotex?', answer: '$10 for most methods. Some local payment methods may have slightly different minimums (e.g., ₹800 for UPI in India).' },
    { question: 'How long does Quotex withdrawal take?', answer: 'Crypto (USDT TRC-20): 30-60 minutes in our experience. Cards: 1-5 business days. Official policy states "up to 5 business days" for all methods.' },
    { question: 'Does Quotex charge withdrawal fees?', answer: 'No. Quotex does not charge any fees for deposits or withdrawals. However, your payment provider or blockchain network may charge fees.' },
    { question: 'Why was my withdrawal rejected?', answer: 'Common reasons: KYC not completed, trying to withdraw via different method than deposit, active bonus with unmet turnover, or insufficient trading volume on deposited amount.' },
    { question: 'Can I withdraw more than I deposited?', answer: 'Yes — your profits can be withdrawn. However, you must first withdraw up to your deposit amount via the original method, then remaining profits can go to any method.' },
    { question: 'Is there a maximum withdrawal limit?', answer: 'Quotex does not publicly state a maximum. In our testing, we withdrew $2,000 in a single transaction without issues. Larger amounts may require additional verification.' },
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
