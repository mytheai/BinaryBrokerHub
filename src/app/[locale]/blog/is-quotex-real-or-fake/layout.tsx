import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Is Quotex Real or Fake? Honest Verification After 6 Months',
  description: 'Is Quotex legit or a scam? We tested for 6 months with real money, processed 15 withdrawals, and verified regulation. Read our honest findings.',
  openGraph: {
    title: 'Is Quotex Real or Fake? Honest Verification After 6 Months',
    description: 'Is Quotex legit or a scam? We tested for 6 months with real money, processed 15 withdrawals, and verified regulation. Read our honest findings.',
    url: `${BASE_URL}/en/blog/is-quotex-real-or-fake`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is Quotex Real or Fake? Honest Verification After 6 Months',
    description: 'Is Quotex legit or a scam? We tested for 6 months with real money, processed 15 withdrawals, and verified regulation. Read our honest findings.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/is-quotex-real-or-fake`,
    languages: {
      en: `${BASE_URL}/en/blog/is-quotex-real-or-fake`,
      ru: `${BASE_URL}/ru/blog/is-quotex-real-or-fake`,
      es: `${BASE_URL}/es/blog/is-quotex-real-or-fake`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Is Quotex Real or Fake? Honest Verification After 6 Months of Testing',
    description: 'Is Quotex legit or a scam? We tested for 6 months with real money, processed 15 withdrawals, and verified regulation. Read our honest findings.',
    url: `${BASE_URL}/en/blog/is-quotex-real-or-fake`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Broker Reviews',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'Is Quotex Real or Fake?', url: `${BASE_URL}/en/blog/is-quotex-real-or-fake` },
  ]),
  faqSchema([
    { question: 'Is Quotex legal in India?', answer: 'Binary options are not specifically regulated in India. Quotex accepts Indian traders and supports UPI/INR deposits. However, there is no Indian regulatory protection.' },
    { question: 'Is Quotex legal in Pakistan?', answer: 'Similar to India — binary options exist in a regulatory gray area. Quotex accepts Pakistani traders with various local payment methods.' },
    { question: 'Can I really withdraw from Quotex?', answer: 'Yes. In our testing, all 15 withdrawal requests were processed. Crypto was fastest (avg 47 min). First withdrawal requires identity verification.' },
    { question: 'Is Quotex halal?', answer: 'This is debated among Islamic scholars. Binary options are considered gambling by some authorities (haram) and legitimate trading by others. Quotex does not offer a specific Islamic account.' },
    { question: 'What is the minimum withdrawal?', answer: 'Approximately $10, depending on your payment method. Must withdraw using the same method you deposited with.' },
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
