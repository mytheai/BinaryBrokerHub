import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: '60-Second Binary Options Strategy 2026 — Fast Trading Guide',
  description: 'Master 60-second binary options trading with 3 proven turbo strategies. Momentum breakout, support/resistance bounce, and engulfing candle setups with entry rules and risk management.',
  openGraph: {
    title: '60-Second Binary Options Strategy 2026 — Fast Trading Guide',
    description: 'Master 60-second binary options trading with 3 proven turbo strategies. Momentum breakout, support/resistance bounce, and engulfing candle setups with entry rules and risk management.',
    url: `${BASE_URL}/en/blog/60-second-binary-options-strategy`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '60-Second Binary Options Strategy 2026 — Fast Trading Guide',
    description: 'Master 60-second binary options trading with 3 proven turbo strategies. Momentum breakout, support/resistance bounce, and engulfing candle setups.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/60-second-binary-options-strategy`,
    languages: {
      en: `${BASE_URL}/en/blog/60-second-binary-options-strategy`,
      ru: `${BASE_URL}/ru/blog/60-second-binary-options-strategy`,
      es: `${BASE_URL}/es/blog/60-second-binary-options-strategy`,
    },
  },
};

const schemas = [
  articleSchema({
    title: '60-Second Binary Options Strategy 2026 — Fast Trading Guide',
    description: 'Master 60-second binary options trading with 3 proven turbo strategies including momentum breakout, S/R bounce, and engulfing candle setups.',
    url: `${BASE_URL}/en/blog/60-second-binary-options-strategy`,
    datePublished: '2026-05-25',
    dateModified: '2026-05-25',
    category: 'Trading Strategies',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: '60-Second Binary Options Strategy', url: `${BASE_URL}/en/blog/60-second-binary-options-strategy` },
  ]),
  faqSchema([
    { question: 'Can you really make money with 60-second binary options?', answer: 'Yes, but it is extremely difficult. The short timeframe means market noise dominates, and you need a win rate above 55-56% at typical payouts (80-90%) just to break even. Most beginners lose money with 60-second trading. Only attempt it after extensive demo practice and with strict money management rules.' },
    { question: 'What is the best indicator for 60-second binary options?', answer: 'Bollinger Bands combined with RSI (7-period) is widely considered the most effective combination for 60-second trading. Bollinger Bands show volatility and potential reversal zones, while the fast RSI confirms momentum. EMA (5,10) crossovers also work well for quick trend identification.' },
    { question: 'How many 60-second trades should I take per day?', answer: 'We recommend a maximum of 10 trades per session. Overtrading is the number one reason 60-second traders lose money. Quality setups are rare at this timeframe — waiting for high-probability entries is far more important than trade frequency.' },
    { question: 'Which broker has the shortest expiry time for binary options?', answer: 'Pocket Option offers the shortest expiry at just 3 seconds. Quotex starts at 5 seconds, while IQ Option has a minimum expiry of 60 seconds. For 60-second strategy trading specifically, all three brokers are suitable.' },
    { question: 'Is 60-second trading suitable for beginners?', answer: 'No. 60-second trading is one of the most challenging forms of binary options trading due to market noise, fast decision-making requirements, and high emotional pressure. Beginners should start with 5-minute or longer expiry times and only move to 60-second trading after building consistent profitability on demo accounts.' },
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
