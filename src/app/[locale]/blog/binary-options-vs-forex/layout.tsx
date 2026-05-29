import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Binary Options vs Forex Trading — Key Differences Explained',
  description: 'Binary options vs forex: compare risk, profit potential, regulation, and complexity. Data-driven guide to help you choose the right trading instrument.',
  openGraph: {
    title: 'Binary Options vs Forex Trading — Key Differences Explained',
    description: 'Binary options vs forex: compare risk, profit potential, regulation, and complexity. Data-driven guide to help you choose the right trading instrument.',
    url: `${BASE_URL}/en/blog/binary-options-vs-forex`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary Options vs Forex Trading — Key Differences Explained',
    description: 'Binary options vs forex: compare risk, profit potential, regulation, and complexity. Data-driven guide to help you choose the right trading instrument.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/binary-options-vs-forex`,
    languages: {
      en: `${BASE_URL}/en/blog/binary-options-vs-forex`,
      ru: `${BASE_URL}/ru/blog/binary-options-vs-forex`,
      es: `${BASE_URL}/es/blog/binary-options-vs-forex`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Binary Options vs Forex Trading — Key Differences Explained',
    description: 'Binary options vs forex: compare risk, profit potential, regulation, and complexity. Data-driven guide to help you choose the right trading instrument.',
    url: `${BASE_URL}/en/blog/binary-options-vs-forex`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Trading Education',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'Binary Options vs Forex Trading', url: `${BASE_URL}/en/blog/binary-options-vs-forex` },
  ]),
  faqSchema([
    { question: 'Is binary options easier than forex?', answer: 'Binary options are simpler to execute (just up or down), but being profitable requires the same level of market analysis as forex. The execution is easier; the analysis is identical.' },
    { question: 'Which is more profitable: binary options or forex?', answer: 'Forex has higher profit potential per trade because gains are unlimited. However, binary options can generate faster returns on small accounts. Profitability depends more on skill than the instrument.' },
    { question: 'Can I switch from binary options to forex?', answer: "Yes, and many traders do. The technical analysis skills transfer directly. You'll need to learn additional concepts (leverage, lot sizes, order types), but the core market reading skills are the same." },
    { question: 'Which is safer: binary options or forex?', answer: "Binary options have fixed risk per trade (you can't lose more than you invest). Forex with leverage can result in losses exceeding your deposit. However, the forex industry is better regulated overall." },
    { question: 'Do professional traders use binary options?', answer: 'Some do, typically for specific strategies (news trades, hedging). Most professional traders prefer forex, futures, or options for their flexibility and better risk/reward ratios.' },
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
