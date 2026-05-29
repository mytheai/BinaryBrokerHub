import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Quotex Promo Code 2026 — Latest Deposit Bonus Codes',
  description: 'Working Quotex promo codes for 2026. Get up to 50% deposit bonus with verified codes. How to apply, terms, and turnover requirements explained.',
  openGraph: {
    title: 'Quotex Promo Code 2026 — Latest Deposit Bonus Codes',
    description: 'Working Quotex promo codes for 2026. Get up to 50% deposit bonus with verified codes. How to apply, terms, and turnover requirements explained.',
    url: `${BASE_URL}/en/blog/quotex-promo-code`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quotex Promo Code 2026 — Latest Deposit Bonus Codes',
    description: 'Working Quotex promo codes for 2026. Get up to 50% deposit bonus with verified codes. How to apply, terms, and turnover requirements explained.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/quotex-promo-code`,
    languages: {
      en: `${BASE_URL}/en/blog/quotex-promo-code`,
      ru: `${BASE_URL}/ru/blog/quotex-promo-code`,
      es: `${BASE_URL}/es/blog/quotex-promo-code`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Quotex Promo Code 2026 — Latest Deposit Bonus Codes',
    description: 'Working Quotex promo codes for 2026. Get up to 50% deposit bonus with verified codes. How to apply, terms, and turnover requirements explained.',
    url: `${BASE_URL}/en/blog/quotex-promo-code`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Broker Guides',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'Quotex Promo Code 2026', url: `${BASE_URL}/en/blog/quotex-promo-code` },
  ]),
  faqSchema([
    { question: 'What is the latest Quotex promo code?', answer: 'Quotex occasionally releases promo codes through their official social media and email. Using our link automatically applies the 30% first deposit bonus — no code needed. Always check the "Promo" section in your Quotex dashboard.' },
    { question: 'Can I withdraw the bonus money?', answer: 'No. Bonus funds themselves cannot be withdrawn. Only profits generated from trades using bonus funds can be withdrawn. Your own deposited money can always be withdrawn.' },
    { question: 'What happens if I withdraw my deposit early?', answer: 'If you withdraw your deposited funds before the bonus funds are used, Quotex reserves the right to cancel all bonus credits and any profits derived from bonus trades.' },
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
