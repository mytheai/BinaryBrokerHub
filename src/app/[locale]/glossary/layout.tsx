import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Binary Options Glossary — 50+ Trading Terms Defined',
  description:
    'Complete binary options glossary: 50+ terms explained in plain language. From ATM to Win Rate, learn every trading term you need to know.',
  openGraph: {
    title: 'Binary Options Glossary — 50+ Trading Terms Defined',
    description:
      'Complete binary options glossary: 50+ terms explained in plain language. From ATM to Win Rate, learn every trading term you need to know.',
    url: `${BASE_URL}/en/glossary`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary Options Glossary — 50+ Trading Terms Defined',
    description:
      '50+ binary options trading terms explained in plain language. The definitive reference for traders.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/glossary`,
    languages: {
      en: `${BASE_URL}/en/glossary`,
      ru: `${BASE_URL}/ru/glossary`,
      es: `${BASE_URL}/es/glossary`,
    },
  },
};

const glossaryPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Binary Options Glossary',
  description:
    'Complete glossary of 50+ binary options trading terms explained in plain language for beginners and experienced traders.',
  url: `${BASE_URL}/en/glossary`,
};

const schemas = [
  glossaryPageSchema,
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Glossary', url: `${BASE_URL}/en/glossary` },
  ]),
];

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaScript schema={schemas} />
      {children}
    </>
  );
}
