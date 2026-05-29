import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'How to Withdraw from Binary Options Brokers — Complete Guide',
  description: 'Step-by-step guide to withdrawing from binary options brokers. KYC tips, fastest methods, common rejection reasons, and processing times compared.',
  openGraph: {
    title: 'How to Withdraw from Binary Options Brokers — Complete Guide',
    description: 'Step-by-step guide to withdrawing from binary options brokers. KYC tips, fastest methods, common rejection reasons, and processing times compared.',
    url: `${BASE_URL}/en/blog/how-to-withdraw-binary-options`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Withdraw from Binary Options Brokers — Complete Guide',
    description: 'Step-by-step guide to withdrawing from binary options brokers. KYC tips, fastest methods, common rejection reasons, and processing times compared.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/blog/how-to-withdraw-binary-options`,
    languages: {
      en: `${BASE_URL}/en/blog/how-to-withdraw-binary-options`,
      ru: `${BASE_URL}/ru/blog/how-to-withdraw-binary-options`,
      es: `${BASE_URL}/es/blog/how-to-withdraw-binary-options`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'How to Withdraw from Binary Options Brokers — Complete Guide',
    description: 'Step-by-step guide to withdrawing from binary options brokers. KYC tips, fastest methods, common rejection reasons, and processing times compared.',
    url: `${BASE_URL}/en/blog/how-to-withdraw-binary-options`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-25',
    category: 'Trading Education',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Blog', url: `${BASE_URL}/en/blog` },
    { name: 'How to Withdraw from Binary Options', url: `${BASE_URL}/en/blog/how-to-withdraw-binary-options` },
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
