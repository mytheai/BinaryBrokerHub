import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Binary Options in India 2026 — Legal Status & Brokers',
  description:
    'Is binary options trading legal in India? Complete guide covering SEBI regulations, best brokers accepting Indian traders (UPI/Paytm), tax implications, and how to start safely.',
  openGraph: {
    title: 'Binary Options in India 2026 — Legal Status, Best Brokers & Guide',
    description:
      'Complete guide to binary options trading in India. Legal status, SEBI regulations, best brokers with INR deposits, UPI/Paytm support, and tax implications.',
    url: `${BASE_URL}/en/binary-options-india`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary Options in India 2026 — Legal Status & Best Brokers',
    description:
      'Is binary options trading legal in India? SEBI regulations, best brokers, UPI deposits, and tax guide.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/binary-options-india`,
    languages: {
      en: `${BASE_URL}/en/binary-options-india`,
      ru: `${BASE_URL}/ru/binary-options-india`,
      es: `${BASE_URL}/es/binary-options-india`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Binary Options in India 2026 — Legal Status, Best Brokers & Guide',
    description:
      'Complete guide to binary options trading in India. Legal status, SEBI regulations, best brokers with INR deposits, and tax implications.',
    url: `${BASE_URL}/en/binary-options-india`,
    datePublished: '2026-05-25',
    dateModified: '2026-05-25',
    category: 'Country Guides',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Country Guides', url: `${BASE_URL}/en/binary-options-india` },
    { name: 'Binary Options in India', url: `${BASE_URL}/en/binary-options-india` },
  ]),
  faqSchema([
    {
      question: 'Is binary options trading legal in India?',
      answer:
        'Binary options trading is not explicitly regulated or banned by SEBI. There is no specific Indian law prohibiting individuals from trading binary options through offshore brokers. However, it exists in a legal gray area since SEBI does not license or regulate binary options brokers operating in India.',
    },
    {
      question: 'Which is the best binary options broker for Indian traders?',
      answer:
        'Olymp Trade is widely considered the best broker for Indian traders due to its UPI and Paytm deposit support, INR account option, and strong local presence. Pocket Option and Quotex are also popular alternatives with competitive payouts.',
    },
    {
      question: 'Can I deposit in INR for binary options?',
      answer:
        'Yes, several offshore brokers accept INR deposits through UPI, Paytm, PhonePe, and net banking. Olymp Trade, Pocket Option, and Quotex all support INR deposits for Indian traders.',
    },
    {
      question: 'Do I need to pay tax on binary options profits in India?',
      answer:
        'Yes. Binary options profits are taxed as "Income from Other Sources" under the Indian Income Tax Act. They are added to your total income and taxed at your applicable slab rate. You should maintain records of all trades for tax filing purposes.',
    },
    {
      question: 'Is it safe to trade binary options from India?',
      answer:
        'Trading with reputable offshore brokers is generally safe, but there are risks. Since these brokers are not regulated by SEBI, Indian traders have limited legal recourse if disputes arise. Always start with a demo account, use only reputable brokers, and never invest more than you can afford to lose.',
    },
    {
      question: 'Can I use UPI to deposit for binary options trading?',
      answer:
        'Yes, brokers like Olymp Trade, Pocket Option, and Quotex accept UPI payments. This is one of the most convenient deposit methods for Indian traders, with instant processing and no additional fees from the broker side.',
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
