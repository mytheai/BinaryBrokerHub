import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Binary Options Trading Guides & Education — BinaryBrokerHub',
  description:
    'Free binary options trading guides, strategies, and educational articles. Learn about regulation, risk management, demo accounts, and broker features from real testers.',
  openGraph: {
    title: 'Binary Options Trading Guides & Education — BinaryBrokerHub',
    description:
      'Trading guides, strategies, and broker education based on real-money testing. Start learning binary options the right way.',
    url: `${BASE_URL}/en/blog`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary Options Trading Guides & Education',
    description:
      'Trading guides, strategies, and broker education based on real-money testing. Start learning binary options the right way.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog`,
    languages: {
      en: `${BASE_URL}/en/blog`,
      ru: `${BASE_URL}/ru/blog`,
      es: `${BASE_URL}/es/blog`,
    },
  },
};

const schemas = [
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog & Guides', url: `${BASE_URL}/en/blog` },
  ]),
];

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaScript schema={schemas} />
      {children}
    </>
  );
}
