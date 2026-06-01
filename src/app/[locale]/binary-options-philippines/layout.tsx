import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Binary Options in the Philippines — Legal Status & Brokers',
  description:
    'Is binary options trading legal in the Philippines? Complete guide covering SEC Philippines advisories, best brokers with GCash/Maya support, PHP deposits, and tax implications.',
  openGraph: {
    title: 'Binary Options in the Philippines 2026 — Legal Status, Best Brokers & Guide',
    description:
      'Complete guide to binary options trading in the Philippines. SEC advisories, best brokers with GCash deposits, PHP support, and tax implications for Filipino traders.',
    url: `${BASE_URL}/en/binary-options-philippines`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary Options in the Philippines 2026 — Legal Status & Best Brokers',
    description:
      'Is binary options trading legal in the Philippines? SEC advisories, best brokers, GCash deposits, and tax guide.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/binary-options-philippines`,
    languages: {
      en: `${BASE_URL}/en/binary-options-philippines`,
      ru: `${BASE_URL}/ru/binary-options-philippines`,
      es: `${BASE_URL}/es/binary-options-philippines`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Binary Options in the Philippines 2026 — Legal Status, Best Brokers & Guide',
    description:
      'Complete guide to binary options trading in the Philippines. SEC advisories, best brokers with GCash deposits, and tax implications for Filipino traders.',
    url: `${BASE_URL}/en/binary-options-philippines`,
    datePublished: '2026-05-25',
    dateModified: '2026-05-25',
    category: 'Country Guides',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Country Guides', url: `${BASE_URL}/en/binary-options-philippines` },
    { name: 'Binary Options in the Philippines', url: `${BASE_URL}/en/binary-options-philippines` },
  ]),
  faqSchema([
    {
      question: 'Is binary options trading legal in the Philippines?',
      answer:
        'Binary options trading is not explicitly banned in the Philippines. SEC Philippines has issued advisories warning the public about unregistered platforms, but there is no specific law prohibiting Filipino individuals from trading through offshore brokers.',
    },
    {
      question: 'Can I use GCash to deposit for binary options?',
      answer:
        'Yes, several brokers including Pocket Option and IQ Option accept GCash deposits. GCash is one of the most convenient deposit methods for Filipino traders with instant processing and minimal fees.',
    },
    {
      question: 'What is the minimum amount needed to start?',
      answer:
        'Pocket Option offers the lowest minimum deposit at just $5 (approximately PHP 280). Most other brokers require $10. We recommend starting with a free demo account before depositing real money.',
    },
    {
      question: 'Which is the best binary options broker for Filipino traders?',
      answer:
        'Pocket Option is our top recommendation for the Philippines due to its low $5 minimum deposit, GCash support, copy trading features, and 180+ tradeable assets. Quotex and IQ Option are also excellent alternatives.',
    },
    {
      question: 'How do I withdraw my profits in the Philippines?',
      answer:
        'You can withdraw via GCash, Maya (PayMaya), bank transfer (BDO/BPI/Metrobank), or cryptocurrency. GCash withdrawals typically process within 1-24 hours. Bank transfers may take 1-3 business days.',
    },
    {
      question: 'Do I need to pay taxes on binary options profits in the Philippines?',
      answer:
        'Binary options profits may be taxable under Philippine law. The BIR could classify trading income under graduated income tax rates (0-35%) or capital gains tax. Consult a CPA or tax professional for personalized guidance.',
    },
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
