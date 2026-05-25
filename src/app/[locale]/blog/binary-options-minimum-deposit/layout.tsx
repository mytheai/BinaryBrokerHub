import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

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
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaScript schema={schemas} />
      {children}
    </>
  );
}
