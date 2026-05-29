import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

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
  faqSchema([
    { question: 'What is the best strategy for Quotex?', answer: 'For beginners, the Support & Resistance Bounce (5-min) strategy is simplest and showed the highest win rate (62%). For intermediate traders, the EMA + RSI combo (61%) offers more precise entries.' },
    { question: 'Can I use 1-minute strategies on Quotex?', answer: 'Yes. Quotex supports expiry times from 1 minute to several hours. The momentum strategy is designed for 1-minute trades, though 5-minute strategies tend to be more reliable.' },
    { question: 'What win rate do I need to be profitable?', answer: 'At 90% payout, you need 52.6% to break even and 56%+ to profit. At 80% payout, you need 55.6% to break even. Aim for 58-65% consistently.' },
    { question: 'Should I use Martingale on Quotex?', answer: 'No. Martingale (doubling after losses) is the fastest way to blow your account. A 5-loss streak wipes out days of profit. Use fixed trade sizes instead.' },
    { question: 'What is the best time to trade on Quotex?', answer: 'London/New York overlap (13:00-17:00 UTC) offers highest volatility and best payouts. Asian session (00:00-06:00 UTC) is best for range-trading strategies.' },
    { question: 'How long should I practice on demo?', answer: 'At least 2-4 weeks. Do not switch to real money until you are consistently profitable on demo for at least 100 trades.' },
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
