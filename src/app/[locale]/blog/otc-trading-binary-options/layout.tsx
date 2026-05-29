import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'OTC Trading in Binary Options — Weekend Trading Guide 2026',
  description: 'What is OTC trading in binary options? Learn how weekend OTC markets work, which brokers offer them, strategies, and risks. Tested on 4 platforms.',
  openGraph: {
    title: 'OTC Trading in Binary Options — Weekend Trading Guide 2026',
    description: 'What is OTC trading in binary options? Learn how weekend OTC markets work, which brokers offer them, strategies, and risks. Tested on 4 platforms.',
    url: `${BASE_URL}/en/blog/otc-trading-binary-options`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OTC Trading in Binary Options — Weekend Trading Guide 2026',
    description: 'What is OTC trading in binary options? Learn how weekend OTC markets work, which brokers offer them, strategies, and risks. Tested on 4 platforms.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/otc-trading-binary-options`,
    languages: {
      en: `${BASE_URL}/en/blog/otc-trading-binary-options`,
      ru: `${BASE_URL}/ru/blog/otc-trading-binary-options`,
      es: `${BASE_URL}/es/blog/otc-trading-binary-options`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'OTC Trading in Binary Options — Weekend Trading Guide 2026',
    description: 'What is OTC trading in binary options? Learn how weekend OTC markets work, which brokers offer them, strategies, and risks. Tested on 4 platforms.',
    url: `${BASE_URL}/en/blog/otc-trading-binary-options`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Trading Education',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'OTC Trading in Binary Options', url: `${BASE_URL}/en/blog/otc-trading-binary-options` },
  ]),
  faqSchema([
    { question: 'Is OTC trading rigged?', answer: "OTC prices are broker-generated, which raises fairness questions. Reputable brokers use audited algorithms, but there's no independent exchange to verify prices against. Trade with established brokers and keep stakes small." },
    { question: 'Can I make money trading OTC?', answer: "Yes, but it's harder than regular market trading. Lower payouts and synthetic prices mean your win rate needs to be higher to be profitable. Expect lower returns than regular trading." },
    { question: 'What are OTC trading hours?', answer: "OTC assets are typically available when the corresponding real market is closed. For forex OTC, that's Saturday morning through Sunday evening. Some brokers offer OTC during weekday off-hours too." },
    { question: 'Does technical analysis work on OTC?', answer: 'Basic TA (support/resistance, Bollinger Bands, RSI) works to some extent because broker algorithms create recognizable patterns. Complex strategies (Elliott Wave, Fibonacci extensions) are less reliable.' },
    { question: 'Are OTC payouts lower?', answer: 'Yes, typically 5-15% lower than regular market payouts. For example, if EUR/USD regular payout is 90%, the EUR/USD OTC payout might be 75-82%.' },
    { question: 'Is OTC the same as synthetic indices?', answer: "Similar concept but different execution. OTC assets mimic real assets (EUR/USD OTC). Synthetic indices (like Deriv's Volatility 75) are unique instruments with their own behavior. Both are broker-generated." },
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
