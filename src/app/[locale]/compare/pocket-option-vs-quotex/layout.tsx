import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { comparisonSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Pocket Option vs Quotex 2026 — Which Broker Is Better?',
  description:
    'Pocket Option vs Quotex head-to-head comparison. We compare payouts (up to 92% vs 98%), minimum deposits, demo accounts, copy trading, and withdrawal speed.',
  openGraph: {
    title: 'Pocket Option vs Quotex 2026 — Which Broker Is Better?',
    description:
      'Head-to-head comparison of Pocket Option and Quotex. Payouts, features, deposits, and our final recommendation.',
    url: `${BASE_URL}/en/compare/pocket-option-vs-quotex`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pocket Option vs Quotex 2026 — Which Broker Is Better?',
    description:
      'Head-to-head comparison of Pocket Option and Quotex. Payouts, features, deposits, and our final recommendation.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/compare/pocket-option-vs-quotex`,
    languages: {
      en: `${BASE_URL}/en/compare/pocket-option-vs-quotex`,
      ru: `${BASE_URL}/ru/compare/pocket-option-vs-quotex`,
      es: `${BASE_URL}/es/compare/pocket-option-vs-quotex`,
    },
  },
};

const schemas = [
  comparisonSchema('Pocket Option', 'Quotex', `${BASE_URL}/en/compare/pocket-option-vs-quotex`),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Compare', url: `${BASE_URL}/en/compare` },
    { name: 'Pocket Option vs Quotex', url: `${BASE_URL}/en/compare/pocket-option-vs-quotex` },
  ]),
  faqSchema([
    { question: 'Which has higher payouts, Pocket Option or Quotex?', answer: 'Quotex offers higher payouts with a maximum of 98% compared to Pocket Option\'s 92%. On average, Quotex payouts are 5-8% higher across major currency pairs.' },
    { question: 'Is Pocket Option safer than Quotex?', answer: 'Pocket Option holds active IFMRRC registration while Quotex\'s certification has expired. Neither holds tier-1 regulation. Pocket Option has a slight edge on regulatory status.' },
    { question: 'Which is better for beginners?', answer: 'Pocket Option is better for complete beginners thanks to its copy trading feature. Quotex is better for beginners who prefer simplicity and want to learn manual trading.' },
    { question: 'Can I use both platforms simultaneously?', answer: 'Yes, many traders use both. A common strategy is to use Pocket Option for copy trading and Quotex for high-conviction manual trades where maximum payout matters.' },
    { question: 'Which has faster withdrawals?', answer: 'Pocket Option is slightly faster with crypto withdrawals processed in 12-45 minutes versus Quotex\'s approximately 47 minutes. Both offer free withdrawals.' },
    { question: 'Which has a better mobile app?', answer: 'Both offer mobile apps. Pocket Option\'s app mirrors its feature-rich desktop experience. Quotex\'s app is simpler and loads faster. It comes down to preference for features vs simplicity.' },
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
