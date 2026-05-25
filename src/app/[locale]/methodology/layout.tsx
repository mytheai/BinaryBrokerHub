import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Our Testing Methodology — 47-Point Binary Options Broker Review Process',
  description:
    'How we test and score binary options brokers. $25,000+ deposited, 500+ trades, 200+ withdrawals across 7 platforms. Our 47-point methodology explained in full.',
  openGraph: {
    title: 'Our 47-Point Testing Methodology | BinaryBrokerHub',
    description:
      'Real-money testing across 7 brokers. Learn how we evaluate payouts, platforms, trust, support, and withdrawals.',
    url: `${BASE_URL}/en/methodology`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our 47-Point Testing Methodology | BinaryBrokerHub',
    description:
      '$25,000+ deposited across 7 platforms. See how we test and score every binary options broker.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/methodology`,
    languages: {
      en: `${BASE_URL}/en/methodology`,
      ru: `${BASE_URL}/ru/methodology`,
      es: `${BASE_URL}/es/methodology`,
    },
  },
};

const schemas = [
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Our Methodology', url: `${BASE_URL}/en/methodology` },
  ]),
];

export default function MethodologyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaScript schema={schemas} />
      {children}
    </>
  );
}
