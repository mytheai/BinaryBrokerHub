import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Is Pocket Option Legit or a Scam? Full Verification (2026)',
  description: 'Is Pocket Option safe? We deposited real money, tested withdrawals, and checked regulation. Full scam check with evidence-based findings.',
  openGraph: {
    title: 'Is Pocket Option Legit or a Scam? Full Verification (2026)',
    description: 'Is Pocket Option safe? We deposited real money, tested withdrawals, and checked regulation. Full scam check with evidence-based findings.',
    url: `${BASE_URL}/en/blog/is-pocket-option-legit`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is Pocket Option Legit or a Scam? Full Verification (2026)',
    description: 'Is Pocket Option safe? We deposited real money, tested withdrawals, and checked regulation. Full scam check with evidence-based findings.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/is-pocket-option-legit`,
    languages: {
      en: `${BASE_URL}/en/blog/is-pocket-option-legit`,
      ru: `${BASE_URL}/ru/blog/is-pocket-option-legit`,
      es: `${BASE_URL}/es/blog/is-pocket-option-legit`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Is Pocket Option Legit or a Scam? Full Verification (2026)',
    description: 'Is Pocket Option safe? We deposited real money, tested withdrawals, and checked regulation. Full scam check with evidence-based findings.',
    url: `${BASE_URL}/en/blog/is-pocket-option-legit`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Broker Reviews',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'Is Pocket Option Legit?', url: `${BASE_URL}/en/blog/is-pocket-option-legit` },
  ]),
  faqSchema([
    { question: 'Is Pocket Option safe to use?', answer: "It functions correctly and we had no issues withdrawing. However, \"safe\" in a regulatory sense — no. There's no investor protection fund or tier-1 oversight. Use with caution." },
    { question: 'Is Pocket Option legal in India?', answer: 'Binary options are not specifically prohibited in India, but they\'re also not regulated by SEBI. Pocket Option accepts Indian traders with local payment methods.' },
    { question: 'Can I lose money on Pocket Option?', answer: 'Yes — binary options are high-risk. You can lose 100% of any individual trade. Only trade with money you can afford to lose entirely.' },
    { question: 'Is Pocket Option halal?', answer: 'This is debated among scholars. Some consider it gambling (haram), others see it as legitimate short-term trading. Pocket Option does not offer a dedicated Islamic account.' },
    { question: 'Why do regulators issue warnings?', answer: "Because Pocket Option operates without authorization in those countries. This doesn't necessarily mean it's a scam — it means it's not licensed to advertise there." },
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
