import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Best Binary Options Demo Accounts 2026 — Free Practice Trading',
  description: 'Compare the best binary options demo accounts. All 7 brokers tested — no deposit required. Find unlimited free practice with virtual funds up to $50K.',
  openGraph: {
    title: 'Best Binary Options Demo Accounts 2026 — Free Practice Trading',
    description: 'Compare the best binary options demo accounts. All 7 brokers tested — no deposit required. Find unlimited free practice with virtual funds up to $50K.',
    url: `${BASE_URL}/en/blog/binary-options-demo-account`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Binary Options Demo Accounts 2026 — Free Practice Trading',
    description: 'Compare the best binary options demo accounts. All 7 brokers tested — no deposit required. Find unlimited free practice with virtual funds up to $50K.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/binary-options-demo-account`,
    languages: {
      en: `${BASE_URL}/en/blog/binary-options-demo-account`,
      ru: `${BASE_URL}/ru/blog/binary-options-demo-account`,
      es: `${BASE_URL}/es/blog/binary-options-demo-account`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Best Binary Options Demo Accounts 2026 — Free Practice Trading',
    description: 'Compare the best binary options demo accounts. All 7 brokers tested — no deposit required. Find unlimited free practice with virtual funds up to $50K.',
    url: `${BASE_URL}/en/blog/binary-options-demo-account`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Trading Education',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'Best Binary Options Demo Accounts', url: `${BASE_URL}/en/blog/binary-options-demo-account` },
  ]),
  faqSchema([
    { question: 'Are binary options demo accounts really free?', answer: 'Yes. All demo accounts listed on this page are 100% free with no deposit required. Some brokers require email registration, but Pocket Option, Quotex, and Binomo offer instant access without any signup.' },
    { question: 'Can I win real money on a demo account?', answer: 'No. Demo accounts use virtual money only. Profits and losses are simulated. To earn real money, you need to open a real account and deposit funds. Some brokers offer no-deposit bonuses, but these are separate from demo accounts.' },
    { question: 'How long can I use a demo account?', answer: "All 7 brokers on this list offer unlimited demo access with no time limit. You can use the demo for as long as you want — days, weeks, months, or even years. There's no pressure to switch to real money." },
    { question: 'Is demo trading the same as real trading?', answer: "The platform, charts, and execution are identical. However, the psychological experience is completely different. Real money trading triggers emotions (fear, greed) that don't exist with virtual funds. Expect a performance dip when switching to live." },
    { question: 'Which demo account is best for beginners?', answer: "We recommend Pocket Option for its $50K balance and instant access, or Quotex for unlimited funds and 400+ assets. Both require no registration to start. If education is your priority, IQ Option's demo with built-in tutorials is excellent." },
    { question: 'Can I switch between demo and real accounts?', answer: 'Yes. All brokers let you switch between demo and real accounts instantly with a single click. You can practice on demo, switch to real for a trade, and go back to demo at any time.' },
    { question: 'Do demo accounts expire?', answer: 'No. None of the demo accounts in our comparison have an expiration date. Some may become inactive after extended periods of non-use, but you can simply create a new one.' },
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
