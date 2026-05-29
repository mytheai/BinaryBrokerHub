import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Best Binary Options Apps 2026 — Mobile Trading Compared',
  description: 'Compare the best binary options mobile apps for 2026. We tested all 7 broker apps on iOS and Android for speed, features, and trading experience.',
  openGraph: {
    title: 'Best Binary Options Apps 2026 — Mobile Trading Compared',
    description: 'Compare the best binary options mobile apps for 2026. We tested all 7 broker apps on iOS and Android for speed, features, and trading experience.',
    url: `${BASE_URL}/en/blog/binary-options-mobile-trading`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Binary Options Apps 2026 — Mobile Trading Compared',
    description: 'Compare the best binary options mobile apps for 2026. We tested all 7 broker apps on iOS and Android for speed, features, and trading experience.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/binary-options-mobile-trading`,
    languages: {
      en: `${BASE_URL}/en/blog/binary-options-mobile-trading`,
      ru: `${BASE_URL}/ru/blog/binary-options-mobile-trading`,
      es: `${BASE_URL}/es/blog/binary-options-mobile-trading`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Best Binary Options Apps 2026 — Mobile Trading Compared',
    description: 'Compare the best binary options mobile apps for 2026. We tested all 7 broker apps on iOS and Android for speed, features, and trading experience.',
    url: `${BASE_URL}/en/blog/binary-options-mobile-trading`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Broker Comparisons',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'Best Binary Options Apps 2026', url: `${BASE_URL}/en/blog/binary-options-mobile-trading` },
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
