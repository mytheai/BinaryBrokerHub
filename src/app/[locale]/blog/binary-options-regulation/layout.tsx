import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Binary Options Regulation Guide 2026 — Which Brokers Are Licensed?',
  description: 'Understand binary options regulation worldwide. Which countries ban them, which allow trading, and how to verify broker licenses. Updated for 2026.',
  openGraph: {
    title: 'Binary Options Regulation Guide 2026 — Which Brokers Are Licensed?',
    description: 'Understand binary options regulation worldwide. Which countries ban them, which allow trading, and how to verify broker licenses. Updated for 2026.',
    url: `${BASE_URL}/en/blog/binary-options-regulation`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary Options Regulation Guide 2026 — Which Brokers Are Licensed?',
    description: 'Understand binary options regulation worldwide. Which countries ban them, which allow trading, and how to verify broker licenses. Updated for 2026.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/binary-options-regulation`,
    languages: {
      en: `${BASE_URL}/en/blog/binary-options-regulation`,
      ru: `${BASE_URL}/ru/blog/binary-options-regulation`,
      es: `${BASE_URL}/es/blog/binary-options-regulation`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Binary Options Regulation Guide 2026 — Which Brokers Are Licensed?',
    description: 'Understand binary options regulation worldwide. Which countries ban them, which allow trading, and how to verify broker licenses. Updated for 2026.',
    url: `${BASE_URL}/en/blog/binary-options-regulation`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Regulation & Safety',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'Binary Options Regulation Guide', url: `${BASE_URL}/en/blog/binary-options-regulation` },
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
