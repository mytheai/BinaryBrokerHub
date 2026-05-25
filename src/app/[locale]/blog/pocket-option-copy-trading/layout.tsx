import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Pocket Option Copy Trading Guide 2026 — How to Copy Top Traders',
  description: 'Learn Pocket Option copy trading: how to find top traders, set copy amounts, manage risk, and maximize returns. Step-by-step guide with real results.',
  openGraph: {
    title: 'Pocket Option Copy Trading Guide 2026 — How to Copy Top Traders',
    description: 'Learn Pocket Option copy trading: how to find top traders, set copy amounts, manage risk, and maximize returns. Step-by-step guide with real results.',
    url: `${BASE_URL}/en/blog/pocket-option-copy-trading`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pocket Option Copy Trading Guide 2026 — How to Copy Top Traders',
    description: 'Learn Pocket Option copy trading: how to find top traders, set copy amounts, manage risk, and maximize returns. Step-by-step guide with real results.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/pocket-option-copy-trading`,
    languages: {
      en: `${BASE_URL}/en/blog/pocket-option-copy-trading`,
      ru: `${BASE_URL}/ru/blog/pocket-option-copy-trading`,
      es: `${BASE_URL}/es/blog/pocket-option-copy-trading`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Pocket Option Copy Trading Guide 2026 — How to Copy Top Traders',
    description: 'Learn Pocket Option copy trading: how to find top traders, set copy amounts, manage risk, and maximize returns. Step-by-step guide with real results.',
    url: `${BASE_URL}/en/blog/pocket-option-copy-trading`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Trading Strategies',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'Pocket Option Copy Trading Guide', url: `${BASE_URL}/en/blog/pocket-option-copy-trading` },
  ]),
  faqSchema([
    { question: 'Is Pocket Option copy trading free?', answer: 'Yes. There is no fee to copy traders. You only invest your chosen amount per trade. Pocket Option does not charge a commission on copy trades.' },
    { question: 'Can I copy trade on demo?', answer: 'Yes. Copy trading works on the demo account with virtual $50,000. This is the best way to test before using real money.' },
    { question: 'How much money do I need to start?', answer: 'Minimum deposit is $5, but we recommend $50-100 for copy trading so you can sustain multiple simultaneous copies without running out of balance.' },
    { question: 'Can I stop copying at any time?', answer: 'Yes. You can stop copying any trader instantly. Existing open trades from that trader will remain open until they expire.' },
    { question: "What if the trader I copy loses?", answer: "You lose too — that's the risk. This is why we recommend: copy 3-5 traders for diversification, use small fixed amounts, and stop copying anyone who drops below 60% win rate." },
    { question: 'Is copy trading better than trading myself?', answer: 'For beginners, yes. You skip the learning curve and earn while learning by observing. For experienced traders, manual trading offers more control and potentially higher returns.' },
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
