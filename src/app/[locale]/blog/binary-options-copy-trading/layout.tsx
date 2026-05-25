import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Binary Options Copy Trading Guide 2026 — How to Copy Top Traders',
  description: 'Complete guide to binary options copy trading. Compare platforms, learn how to pick profitable traders, and manage risk. Real data from 6 months of testing.',
  openGraph: {
    title: 'Binary Options Copy Trading Guide 2026 — How to Copy Top Traders',
    description: 'Complete guide to binary options copy trading. Compare platforms, learn how to pick profitable traders, and manage risk. Real data from 6 months of testing.',
    url: `${BASE_URL}/en/blog/binary-options-copy-trading`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary Options Copy Trading Guide 2026 — How to Copy Top Traders',
    description: 'Complete guide to binary options copy trading. Compare platforms, learn how to pick profitable traders, and manage risk. Real data from 6 months of testing.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/binary-options-copy-trading`,
    languages: {
      en: `${BASE_URL}/en/blog/binary-options-copy-trading`,
      ru: `${BASE_URL}/ru/blog/binary-options-copy-trading`,
      es: `${BASE_URL}/es/blog/binary-options-copy-trading`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Binary Options Copy Trading Guide 2026 — How to Copy Top Traders',
    description: 'Complete guide to binary options copy trading. Compare platforms, learn how to pick profitable traders, and manage risk. Real data from 6 months of testing.',
    url: `${BASE_URL}/en/blog/binary-options-copy-trading`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Trading Strategies',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'Binary Options Copy Trading Guide', url: `${BASE_URL}/en/blog/binary-options-copy-trading` },
  ]),
  faqSchema([
    { question: 'Is binary options copy trading legal?', answer: 'Copy trading itself is legal in most countries. However, binary options trading is restricted or banned in the EU, UK, Australia, and Canada. Check your local regulations before trading.' },
    { question: 'Can I make money consistently with copy trading?', answer: "Some traders do, but it's not guaranteed. Expect 5-15% monthly returns if you choose traders carefully. Months with losses are normal even with good traders." },
    { question: "What's the minimum amount needed?", answer: 'Pocket Option requires a $5 minimum deposit, but we recommend $50-100 for copy trading so you can diversify across multiple traders without running out of balance.' },
    { question: 'Can I copy trade on my phone?', answer: "Yes. Pocket Option's copy trading works on both the web platform and mobile app. You can set up copies on mobile and they run automatically." },
    { question: 'What happens if I run out of balance while copying?', answer: "New copies won't execute if your balance can't cover the copy amount. Existing copied trades will continue until expiry. You won't go into negative balance." },
    { question: 'How many traders should I copy at once?', answer: 'We recommend 3-5 traders for optimal diversification. Fewer than 3 is too concentrated; more than 5 becomes hard to track and drains your balance faster.' },
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
