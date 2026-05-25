import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: '5 Best Binary Options Strategies for Beginners (2026)',
  description: 'Learn 5 proven binary options strategies for beginners. Each strategy includes entry rules, risk management, and real backtest results on 500+ trades.',
  openGraph: {
    title: '5 Best Binary Options Strategies for Beginners (2026)',
    description: 'Learn 5 proven binary options strategies for beginners. Each strategy includes entry rules, risk management, and real backtest results on 500+ trades.',
    url: `${BASE_URL}/en/blog/binary-options-strategy-beginners`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Best Binary Options Strategies for Beginners (2026)',
    description: 'Learn 5 proven binary options strategies for beginners. Each strategy includes entry rules, risk management, and real backtest results on 500+ trades.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/binary-options-strategy-beginners`,
    languages: {
      en: `${BASE_URL}/en/blog/binary-options-strategy-beginners`,
      ru: `${BASE_URL}/ru/blog/binary-options-strategy-beginners`,
      es: `${BASE_URL}/es/blog/binary-options-strategy-beginners`,
    },
  },
};

const schemas = [
  articleSchema({
    title: '5 Best Binary Options Strategies for Beginners (2026)',
    description: 'Learn 5 proven binary options strategies for beginners. Each strategy includes entry rules, risk management, and real backtest results on 500+ trades.',
    url: `${BASE_URL}/en/blog/binary-options-strategy-beginners`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Trading Strategies',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: '5 Best Binary Options Strategies for Beginners', url: `${BASE_URL}/en/blog/binary-options-strategy-beginners` },
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
