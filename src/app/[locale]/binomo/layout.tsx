import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { reviewSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Binomo Review 2026 — Score 8.2/10 | Best Tournaments & Gamified Trading',
  description:
    'Binomo review: daily tournaments, beginner-friendly gamified interface, 70+ assets, 90% max payout. FinaCom A member. Real-money testing with honest pros and cons.',
  openGraph: {
    title: 'Binomo Review 2026 — 8.2/10 Rating',
    description:
      'Binomo tested with real money: best tournaments, gamified trading, 70+ assets, 90% payouts. Full review.',
    url: `${BASE_URL}/en/binomo`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binomo Review 2026 — 8.2/10',
    description:
      'Best tournaments, gamified interface, 70+ assets, 90% max payout.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/binomo`,
    languages: {
      en: `${BASE_URL}/en/binomo`,
      ru: `${BASE_URL}/ru/binomo`,
      es: `${BASE_URL}/es/binomo`,
    },
  },
};

const schemas = [
  reviewSchema({
    brokerName: 'Binomo',
    score: 8.2,
    description:
      'Best binary options broker for tournaments and gamified trading experience, ideal for beginners with a fun, competitive interface.',
    url: `${BASE_URL}/en/binomo`,
    pros: [
      'Best daily tournaments with prize pools',
      'Beginner-friendly gamified interface',
      'Low barrier to entry',
      'FinaCom A membership protection',
    ],
    cons: [
      'Lowest max payout (90%)',
      'Fewest assets (70+)',
      'No copy trading feature',
    ],
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Broker Reviews', url: `${BASE_URL}/en/compare` },
    { name: 'Binomo Review', url: `${BASE_URL}/en/binomo` },
  ]),
  faqSchema([
    {
      question: 'What are Binomo tournaments?',
      answer:
        'Binomo runs daily and weekly trading tournaments with prize pools from $300 to $50,000+. Free or low-cost entry. Compete for the highest balance within a set timeframe.',
    },
    {
      question: 'Is Binomo good for beginners?',
      answer:
        'Yes. Binomo has one of the simplest interfaces — gamified design, clear trade buttons, minimal complexity. Free demo, $1 minimum trades.',
    },
    {
      question: 'What is Binomo minimum deposit?',
      answer:
        'Binomo requires a $10 minimum deposit. Trades start from $1.',
    },
    {
      question: 'Is Binomo regulated?',
      answer:
        'Binomo is a FinaCom Category A member (€20,000 dispute compensation) but has no government financial license. Listed on RBI (India) Alert List. Banned in Indonesia since 2022.',
    },
    {
      question: 'What are Binomo payout rates?',
      answer:
        'Payouts are tiered: Standard up to 85%, Gold up to 86%, VIP up to 90%. Lower than Quotex (90-95%) and Pocket Option (89-92%).',
    },
    {
      question: 'Does Binomo have a demo account?',
      answer:
        'Yes. Free demo with $1,000 virtual balance. Smaller than competitors but replenishable.',
    },
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
