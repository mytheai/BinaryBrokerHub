import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { comparisonSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Pocket Option vs IQ Option 2026 — Detailed Comparison',
  description:
    'Pocket Option vs IQ Option compared: regulation (MISA vs CySEC), payout rates, asset selection, mobile apps, and withdrawal methods. See which broker wins.',
  openGraph: {
    title: 'Pocket Option vs IQ Option 2026 — Detailed Comparison',
    description:
      'Detailed comparison of Pocket Option and IQ Option. Regulation, payouts, platforms, and real user experience tested.',
    url: `${BASE_URL}/en/compare/pocket-option-vs-iq-option`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pocket Option vs IQ Option 2026 — Detailed Comparison',
    description:
      'Detailed comparison of Pocket Option and IQ Option. Regulation, payouts, platforms, and real user experience tested.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/compare/pocket-option-vs-iq-option`,
    languages: {
      en: `${BASE_URL}/en/compare/pocket-option-vs-iq-option`,
      ru: `${BASE_URL}/ru/compare/pocket-option-vs-iq-option`,
      es: `${BASE_URL}/es/compare/pocket-option-vs-iq-option`,
    },
  },
};

const schemas = [
  comparisonSchema('Pocket Option', 'IQ Option', `${BASE_URL}/en/compare/pocket-option-vs-iq-option`),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Compare', url: `${BASE_URL}/en/compare` },
    { name: 'Pocket Option vs IQ Option', url: `${BASE_URL}/en/compare/pocket-option-vs-iq-option` },
  ]),
  faqSchema([
    { question: 'Which has higher payouts, Pocket Option or IQ Option?', answer: 'Pocket Option offers up to 92% payouts on standard trades, while IQ Option offers up to 95% on binary options. IQ Option has a slight edge on maximum payouts.' },
    { question: 'Is IQ Option more regulated than Pocket Option?', answer: 'Yes. IQ Option holds CySEC regulation (EU tier-1), while Pocket Option has IFMRRC certification (non-EU). IQ Option offers stronger regulatory protection.' },
    { question: 'Which is better for beginners?', answer: 'IQ Option has a better educational platform with free courses. Pocket Option offers copy trading which lets beginners follow experienced traders while learning.' },
    { question: 'Can I trade binary options on IQ Option from the EU?', answer: 'No. IQ Option complies with ESMA regulations and does not offer binary options to EU/EEA residents. Pocket Option does not enforce this restriction.' },
    { question: 'Which has a better mobile app?', answer: 'IQ Option has native iOS and Android apps with 100+ indicators. Pocket Option offers Android native but iOS only as a PWA.' },
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
