import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

const faqItems = [
  {
    question: 'Is binary options trading a scam?',
    answer:
      'Binary options trading itself is not a scam — it is a legitimate financial instrument. However, the industry has attracted many fraudulent brokers and scam operations. The key is choosing a regulated, reputable broker and understanding the risks involved. Our tested brokers have all been verified with real-money deposits and withdrawals.',
  },
  {
    question: 'Are any binary options brokers regulated?',
    answer:
      'Yes. Several binary options brokers hold legitimate regulatory licenses. Deriv is regulated by MFSA (Malta), IQ Option by CySEC (Cyprus), and others hold IFMRRC or FinaCom memberships. Tier 1 regulation (CySEC, FCA, ASIC, CFTC) offers the strongest consumer protection. Always verify licenses directly on the regulator\'s official website.',
  },
  {
    question: 'How do I report a binary options scam?',
    answer:
      'Report to your local financial regulator: CFTC or SEC (US), FCA (UK), CySEC (EU/Cyprus), ASIC (Australia), or BaFin (Germany). Also file a report with your local police and contact your bank or credit card company to initiate a chargeback. Document everything — screenshots, emails, transaction IDs, and communication records.',
  },
  {
    question: 'Can I get my money back from a scam broker?',
    answer:
      'Recovery is difficult but possible in some cases. Contact your bank or credit card provider immediately to request a chargeback. File complaints with relevant regulators. Be extremely cautious of "recovery companies" that charge upfront fees — many of these are secondary scams targeting victims. Legitimate regulators do not charge fees to process complaints.',
  },
  {
    question: 'What is the safest binary options broker?',
    answer:
      'Based on our real-money testing, Pocket Option (9.5/10) and Quotex (9.4/10) rank highest overall, while Deriv (MFSA-regulated) and IQ Option (CySEC-regulated) offer the strongest regulatory protection. The safest approach is to start with a demo account, make a minimum deposit to test withdrawals, and never deposit money you cannot afford to lose.',
  },
  {
    question: 'Are binary options legal in my country?',
    answer:
      'Binary options legality varies by country. They are banned for retail traders in the EU (except for professionally classified clients), restricted in the UK and Australia, and legal but regulated in the US (only on CFTC-regulated exchanges like Nadex). In most other countries, they remain legal but may lack local regulation. Always check your country\'s financial regulator for the latest rules.',
  },
  {
    question: 'What are the biggest red flags of a scam broker?',
    answer:
      'The biggest red flags include: guaranteed profits or win rates above 85%, pressure to deposit more money, unverifiable or fake regulation claims, no withdrawal option or excessive delays, cold calls from unknown numbers, "limited time" bonuses with impossible turnover requirements, no clear company address, and platform manipulation where trades always lose by 1 pip.',
  },
  {
    question: 'Are signal sellers and trading bots legitimate?',
    answer:
      'The vast majority of binary options signal sellers and auto-trading bots are scams. No system can guarantee consistent profits in binary options trading. Legitimate signal providers will have verifiable track records, transparent pricing, and realistic win-rate claims (60-70%, not 95%+). If someone claims guaranteed profits, it is almost certainly a scam.',
  },
];

export const metadata: Metadata = {
  title: 'Binary Options Scam Blacklist 2026 — How to Avoid Fraud',
  description:
    'Complete guide to binary options scams: red flags, fake brokers, signal seller fraud. Plus 7 verified safe brokers tested with real money.',
  openGraph: {
    title: 'Binary Options Scam Blacklist 2026 — How to Avoid Fraud',
    description:
      'Identify and avoid binary options scams. Red flags checklist, scam types explained, and 7 verified safe brokers tested with real money.',
    url: `${BASE_URL}/en/scams`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary Options Scam Blacklist 2026 — Protect Your Money',
    description:
      'Complete guide to binary options scams: red flags, fake brokers, signal seller fraud. Plus 7 verified safe brokers.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/scams`,
    languages: {
      en: `${BASE_URL}/en/scams`,
      ru: `${BASE_URL}/ru/scams`,
      es: `${BASE_URL}/es/scams`,
    },
  },
};

const schemas = [
  faqSchema(faqItems),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Scam Blacklist', url: `${BASE_URL}/en/scams` },
  ]),
];

export default function ScamsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaScript schema={schemas} />
      {children}
    </>
  );
}
