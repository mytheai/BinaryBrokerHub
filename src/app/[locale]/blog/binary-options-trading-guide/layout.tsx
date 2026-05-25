import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Binary Options Trading for Beginners — Complete 2026 Guide',
  description: 'Learn binary options trading from scratch. How it works, types of trades, risk management, and step-by-step instructions for complete beginners.',
  openGraph: {
    title: 'Binary Options Trading for Beginners — Complete 2026 Guide',
    description: 'Learn binary options trading from scratch. How it works, types of trades, risk management, and step-by-step instructions for complete beginners.',
    url: `${BASE_URL}/en/blog/binary-options-trading-guide`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary Options Trading for Beginners — Complete 2026 Guide',
    description: 'Learn binary options trading from scratch. How it works, types of trades, risk management, and step-by-step instructions for complete beginners.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/binary-options-trading-guide`,
    languages: {
      en: `${BASE_URL}/en/blog/binary-options-trading-guide`,
      ru: `${BASE_URL}/ru/blog/binary-options-trading-guide`,
      es: `${BASE_URL}/es/blog/binary-options-trading-guide`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Binary Options Trading for Beginners — Complete 2026 Guide',
    description: 'Learn binary options trading from scratch. How it works, types of trades, risk management, and step-by-step instructions for complete beginners.',
    url: `${BASE_URL}/en/blog/binary-options-trading-guide`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Trading Education',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'Binary Options Trading for Beginners', url: `${BASE_URL}/en/blog/binary-options-trading-guide` },
  ]),
  faqSchema([
    { question: 'Is binary options trading gambling?', answer: "Binary options have elements of both trading and gambling. Without a strategy and risk management, it's essentially gambling. With proper analysis, education, and discipline, it can be a form of speculative trading. The key difference is whether you're making informed decisions or random guesses." },
    { question: 'How much money do I need to start?', answer: 'You can start with as little as $5 on Pocket Option or $10 on most other brokers. However, we recommend starting with a free demo account first. When you transition to real money, begin with the minimum deposit and use $1 trades.' },
    { question: 'Can I make a living from binary options?', answer: 'While some traders are profitable, making a consistent living from binary options alone is extremely difficult. Most professional traders treat it as one income stream among many. Start with realistic expectations — focus on learning, not earning.' },
    { question: 'Are binary options legal?', answer: 'Legality varies by country. Binary options are banned in the EU/EEA for retail traders, restricted in the US (only NADEX is legal), and available in most Asian, African, and South American countries. Check your local regulations before trading.' },
    { question: 'What is the best time to trade binary options?', answer: 'The best trading hours are during the London session (8:00-16:00 GMT) and the London/New York overlap (13:00-16:00 GMT). These periods have the highest liquidity and most predictable price movements.' },
    { question: 'How long should I practice on demo?', answer: "At minimum 2-4 weeks and 100+ trades. Ideally, trade on demo until you're consistently profitable over a 2-week period. Don't rush to real money — demo trading is free, and there's no deadline." },
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
