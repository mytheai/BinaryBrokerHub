import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Deriv Synthetic Indices — Complete Guide to 24/7 Trading',
  description: 'Master Deriv synthetic indices: Volatility 75, Crash/Boom, Step Index. How they work, strategies, and why they trade 24/7 with audited fairness.',
  openGraph: {
    title: 'Deriv Synthetic Indices — Complete Guide to 24/7 Trading',
    description: 'Master Deriv synthetic indices: Volatility 75, Crash/Boom, Step Index. How they work, strategies, and why they trade 24/7 with audited fairness.',
    url: `${BASE_URL}/en/blog/deriv-synthetic-indices-guide`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deriv Synthetic Indices — Complete Guide to 24/7 Trading',
    description: 'Master Deriv synthetic indices: Volatility 75, Crash/Boom, Step Index. How they work, strategies, and why they trade 24/7 with audited fairness.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/deriv-synthetic-indices-guide`,
    languages: {
      en: `${BASE_URL}/en/blog/deriv-synthetic-indices-guide`,
      ru: `${BASE_URL}/ru/blog/deriv-synthetic-indices-guide`,
      es: `${BASE_URL}/es/blog/deriv-synthetic-indices-guide`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Deriv Synthetic Indices — Complete Guide to 24/7 Trading',
    description: 'Master Deriv synthetic indices: Volatility 75, Crash/Boom, Step Index. How they work, strategies, and why they trade 24/7 with audited fairness.',
    url: `${BASE_URL}/en/blog/deriv-synthetic-indices-guide`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Trading Education',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'Deriv Synthetic Indices Guide', url: `${BASE_URL}/en/blog/deriv-synthetic-indices-guide` },
  ]),
  faqSchema([
    { question: 'Are Deriv synthetic indices rigged?', answer: "Deriv's synthetic indices use a cryptographically secure random number generator (CSRNG) that is audited by independent third parties. The algorithm is designed to be provably fair. Unlike some OTC brokers, Deriv is regulated and the fairness of their synthetics is verifiable." },
    { question: 'Can I withdraw profits from synthetic indices?', answer: 'Yes, profits from synthetic indices are real money. You can withdraw via bank transfer, e-wallets, or cryptocurrency. Withdrawal processes are the same as for any other Deriv product.' },
    { question: 'What is the minimum trade on synthetic indices?', answer: 'Minimum stakes vary by index and trade type. For binary options on synthetics, you can start from $0.35. For multipliers, minimums depend on the multiplier value and index.' },
    { question: 'Do technical indicators work on synthetic indices?', answer: 'Yes, and often better than on real markets. Since synthetics are purely technical (no fundamentals), indicators like RSI, Bollinger Bands, and moving averages produce more consistent signals.' },
    { question: 'Which is better: synthetic indices or OTC?', answer: 'Synthetic indices (Deriv) are more transparent — audited fairness, regulated broker. OTC (Pocket Option, Olymp Trade) offers more familiar assets like EUR/USD OTC. For weekend trading, we recommend Deriv synthetics for reliability.' },
    { question: 'Can I trade synthetic indices on mobile?', answer: 'Yes. Deriv GO is a dedicated mobile app for synthetics. You can also use the Deriv Trader web app on mobile browsers. DBot for automated trading works on desktop browsers.' },
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
