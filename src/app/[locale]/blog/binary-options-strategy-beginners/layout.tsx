import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: '5 Best Binary Options Strategies for Beginners (2026)',
  description: 'Learn 5 proven binary options strategies for beginners. Each strategy includes entry rules, risk management, and real backtest results on 500+ trades.',
  openGraph: {
    title: '5 Best Binary Options Strategies for Beginners (2026)',
    description: 'Learn 5 proven binary options strategies for beginners. Each strategy includes entry rules, risk management, and real backtest results on 500+ trades.',
    url: `${BASE_URL}/en/blog/binary-options-strategy-beginners`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Best Binary Options Strategies for Beginners (2026)',
    description: 'Learn 5 proven binary options strategies for beginners. Each strategy includes entry rules, risk management, and real backtest results on 500+ trades.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/binary-options-strategy-beginners`,
    languages: {
      en: `${BASE_URL}/en/blog/binary-options-strategy-beginners`,
      ru: `${BASE_URL}/ru/blog/binary-options-strategy-beginners`,
      es: `${BASE_URL}/es/blog/binary-options-strategy-beginners`,
    },
  },
};

const schemas = [
  articleSchema({
    title: '5 Best Binary Options Strategies for Beginners (2026)',
    description: 'Learn 5 proven binary options strategies for beginners. Each strategy includes entry rules, risk management, and real backtest results on 500+ trades.',
    url: `${BASE_URL}/en/blog/binary-options-strategy-beginners`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Trading Strategies',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: '5 Best Binary Options Strategies for Beginners', url: `${BASE_URL}/en/blog/binary-options-strategy-beginners` },
  ]),
  faqSchema([
    { question: 'What is the best binary options strategy for beginners?', answer: 'Support & Resistance Bounce is the best starting strategy. It is visual, requires no indicators, and teaches you to read price action — the foundation of all trading.' },
    { question: 'What win rate do I need to be profitable in binary options?', answer: 'You need a win rate above 55-56% to break even at typical 80-90% payouts. A target win rate of 58-65% is needed for consistent profit.' },
    { question: 'Should I use Martingale strategy in binary options?', answer: 'No. Doubling after losses is the fastest way to blow your account. A 6-loss streak can wipe out most of your balance. Use fixed 1-2% risk per trade instead.' },
    { question: 'Which broker is best for binary options strategies?', answer: 'Pocket Option is best for trend following and MA crossover strategies due to its advanced charting tools. Quotex is best for support/resistance and RSI strategies with payouts up to 95%.' },
    { question: 'How many trades should I take per day?', answer: 'Take 3-5 high-quality trades per day. Quality over quantity — waiting for perfect setups beats taking many marginal trades.' },
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
