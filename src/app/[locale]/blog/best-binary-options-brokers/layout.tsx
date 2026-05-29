import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: '7 Best Binary Options Brokers 2026 — Tested & Ranked',
  description: 'We tested 7 binary options brokers with $25,000+ real money over 8 months. See our honest ranking based on payouts, regulation, and withdrawals.',
  openGraph: {
    title: '7 Best Binary Options Brokers 2026 — Tested & Ranked',
    description: 'We tested 7 binary options brokers with $25,000+ real money over 8 months. See our honest ranking based on payouts, regulation, and withdrawals.',
    url: `${BASE_URL}/en/blog/best-binary-options-brokers`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '7 Best Binary Options Brokers 2026 — Tested & Ranked',
    description: 'We tested 7 binary options brokers with $25,000+ real money over 8 months. See our honest ranking based on payouts, regulation, and withdrawals.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/best-binary-options-brokers`,
    languages: {
      en: `${BASE_URL}/en/blog/best-binary-options-brokers`,
      ru: `${BASE_URL}/ru/blog/best-binary-options-brokers`,
      es: `${BASE_URL}/es/blog/best-binary-options-brokers`,
    },
  },
};

const schemas = [
  articleSchema({
    title: '7 Best Binary Options Brokers 2026 — Tested & Ranked',
    description: 'We tested 7 binary options brokers with $25,000+ real money over 8 months. See our honest ranking based on payouts, regulation, and withdrawals.',
    url: `${BASE_URL}/en/blog/best-binary-options-brokers`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Broker Reviews',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: '7 Best Binary Options Brokers 2026', url: `${BASE_URL}/en/blog/best-binary-options-brokers` },
  ]),
  faqSchema([
    { question: 'What is the best binary options broker in 2026?', answer: 'Based on our testing, Pocket Option ranks #1 overall with a 9.5/10 score. It offers the lowest minimum deposit ($5), copy trading, 180+ assets, and fast withdrawals. Quotex is a close second with the highest payouts (up to 95%).' },
    { question: 'Are binary options brokers safe?', answer: 'Safety varies significantly by broker. Deriv and IQ Option offer the strongest regulatory protection. However, binary options are inherently high-risk financial instruments — you can lose 100% of any individual trade regardless of which broker you use.' },
    { question: 'What is the minimum deposit for binary options?', answer: 'Pocket Option and Deriv offer the industry-low $5 minimum deposit. Most other brokers require $10. We recommend starting with the minimum to test the withdrawal process before depositing more.' },
    { question: 'Can I trade binary options with a demo account?', answer: 'Yes. All 7 brokers on our list offer free demo accounts. Quotex offers unlimited virtual funds, Pocket Option provides $50,000, and most others give $10,000. No deposit is required to access demo trading.' },
    { question: 'Which binary options broker has the highest payouts?', answer: 'Quotex offers the highest payouts at up to 95%. Pocket Option follows with up to 92%. Actual payouts vary by asset, time of day, and market conditions.' },
    { question: 'Do I need to pay taxes on binary options profits?', answer: 'Tax obligations vary by country. In most jurisdictions, profits from binary options are considered taxable income or capital gains. Consult a local tax professional for guidance specific to your situation.' },
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
