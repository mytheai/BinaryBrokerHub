import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Quotex Trading Strategy 2026 — 1 Min & 5 Min Proven Methods',
  description: 'Best Quotex trading strategies for 1-minute and 5-minute trades. RSI, Bollinger Bands, and candlestick methods with backtested win rates.',
  openGraph: {
    title: 'Quotex Trading Strategy 2026 — 1 Min & 5 Min Proven Methods',
    description: 'Best Quotex trading strategies for 1-minute and 5-minute trades. RSI, Bollinger Bands, and candlestick methods with backtested win rates.',
    url: `${BASE_URL}/en/blog/quotex-strategy`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quotex Trading Strategy 2026 — 1 Min & 5 Min Proven Methods',
    description: 'Best Quotex trading strategies for 1-minute and 5-minute trades. RSI, Bollinger Bands, and candlestick methods with backtested win rates.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/quotex-strategy`,
    languages: {
      en: `${BASE_URL}/en/blog/quotex-strategy`,
      ru: `${BASE_URL}/ru/blog/quotex-strategy`,
      es: `${BASE_URL}/es/blog/quotex-strategy`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Quotex Trading Strategy 2026 — 1 Minute & 5 Minute Proven Methods',
    description: 'Best Quotex trading strategies for 1-minute and 5-minute trades. RSI, Bollinger Bands, and candlestick methods with backtested win rates.',
    url: `${BASE_URL}/en/blog/quotex-strategy`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Trading Strategies',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'Quotex Trading Strategy 2026', url: `${BASE_URL}/en/blog/quotex-strategy` },
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
