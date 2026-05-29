import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { comparisonSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Quotex vs IQ Option 2026 — Payouts vs Platform',
  description:
    'Quotex vs IQ Option comparison: up to 98% payouts vs CySEC-regulated platform. We test deposits, withdrawals, charting tools, and mobile trading experience.',
  openGraph: {
    title: 'Quotex vs IQ Option 2026 — Payouts vs Platform',
    description:
      'Quotex offers higher payouts, IQ Option offers regulation. Compare both brokers on deposits, tools, and trading experience.',
    url: `${BASE_URL}/en/compare/quotex-vs-iq-option`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quotex vs IQ Option 2026 — Payouts vs Platform',
    description:
      'Quotex offers higher payouts, IQ Option offers regulation. Compare both brokers on deposits, tools, and trading experience.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/compare/quotex-vs-iq-option`,
    languages: {
      en: `${BASE_URL}/en/compare/quotex-vs-iq-option`,
      ru: `${BASE_URL}/ru/compare/quotex-vs-iq-option`,
      es: `${BASE_URL}/es/compare/quotex-vs-iq-option`,
    },
  },
};

const schemas = [
  comparisonSchema('Quotex', 'IQ Option', `${BASE_URL}/en/compare/quotex-vs-iq-option`),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Compare', url: `${BASE_URL}/en/compare` },
    { name: 'Quotex vs IQ Option', url: `${BASE_URL}/en/compare/quotex-vs-iq-option` },
  ]),
  faqSchema([
    { question: 'Which has higher payouts, Quotex or IQ Option?', answer: 'Quotex offers up to 98% payouts — the highest in the industry. IQ Option offers up to 95%. Quotex has a clear advantage on maximum payouts.' },
    { question: 'Is IQ Option safer than Quotex?', answer: 'Yes. IQ Option holds CySEC regulation (EU tier-1) with ICF investor compensation fund. Quotex has expired IFMRRC certification. IQ Option offers significantly stronger regulatory protection.' },
    { question: 'Which platform is easier to use?', answer: 'Quotex has a cleaner, more minimalist interface that is easier for beginners. IQ Option has more features and tools but a steeper learning curve.' },
    { question: 'Can I use both from the EU?', answer: 'IQ Option is available in the EU but does not offer binary options there (ESMA ban). Quotex accepts EU traders for binary options as it operates offshore.' },
    { question: 'Which has faster withdrawals?', answer: 'Quotex processes crypto withdrawals in about 47 minutes. IQ Option takes 1-3 business days for most methods. Quotex is faster for crypto.' },
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
