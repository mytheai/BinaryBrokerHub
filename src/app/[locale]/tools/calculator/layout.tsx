import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Binary Options Profit Calculator — Free Trading Tool',
  description:
    'Calculate potential profit and loss for binary options trades. Enter investment amount, payout rate, and win rate to see expected returns. Free, no signup required.',
  openGraph: {
    title: 'Binary Options Profit Calculator — Free Trading Tool',
    description:
      'Free binary options profit calculator. Enter your trade parameters and instantly see potential returns and risk.',
    url: `${BASE_URL}/en/tools/calculator`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary Options Profit Calculator — Free Tool',
    description:
      'Free binary options profit calculator. Enter your trade parameters and instantly see potential returns and risk.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/tools/calculator`,
    languages: {
      en: `${BASE_URL}/en/tools/calculator`,
      ru: `${BASE_URL}/ru/tools/calculator`,
      es: `${BASE_URL}/es/tools/calculator`,
    },
  },
};

const schemas = [
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Tools', url: `${BASE_URL}/en/tools` },
    { name: 'Profit Calculator', url: `${BASE_URL}/en/tools/calculator` },
  ]),
];

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaScript schema={schemas} />
      {children}
    </>
  );
}
