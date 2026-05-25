import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

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
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaScript schema={schemas} />
      {children}
    </>
  );
}
