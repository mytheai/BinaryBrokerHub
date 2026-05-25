import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Binary Options in the UK 2026 — FCA Ban, Alternatives & Guide',
  description:
    'Binary options are banned for retail traders in the UK since April 2019. Learn about the FCA ban, professional trader exemptions, legal alternatives like spread betting and CFDs, and how to avoid scams.',
  openGraph: {
    title: 'Binary Options in the UK 2026 — FCA Ban, Alternatives & Guide',
    description:
      'UK binary options guide. FCA retail ban explained, professional trader exemptions, legal alternatives including spread betting and CFDs, and scam warnings.',
    url: `${BASE_URL}/en/binary-options-uk`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary Options in the UK 2026 — FCA Ban & Legal Alternatives',
    description:
      'Binary options are banned for UK retail traders. FCA ban details, alternatives, and how to stay safe.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/binary-options-uk`,
    languages: {
      en: `${BASE_URL}/en/binary-options-uk`,
      ru: `${BASE_URL}/ru/binary-options-uk`,
      es: `${BASE_URL}/es/binary-options-uk`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Binary Options in the UK 2026 — FCA Ban, Alternatives & Guide',
    description:
      'Complete guide to binary options in the UK. FCA retail ban, professional trader exemptions, legal alternatives, and scam avoidance.',
    url: `${BASE_URL}/en/binary-options-uk`,
    datePublished: '2026-05-25',
    dateModified: '2026-05-25',
    category: 'Country Guides',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Country Guides', url: `${BASE_URL}/en/binary-options-uk` },
    { name: 'Binary Options in the UK', url: `${BASE_URL}/en/binary-options-uk` },
  ]),
  faqSchema([
    {
      question: 'Are binary options legal in the UK?',
      answer:
        'No. The Financial Conduct Authority (FCA) permanently banned the sale, marketing, and distribution of binary options to retail consumers in the UK from April 2, 2019. Only traders classified as "elective professional" clients may access binary options through FCA-authorised firms.',
    },
    {
      question: 'Why did the FCA ban binary options?',
      answer:
        'The FCA banned binary options due to inherent product risks, widespread fraud, and significant consumer harm. Research showed that most retail traders lost money, and the products were frequently used in scams. The FCA estimated the ban would save UK consumers up to £17 million per year.',
    },
    {
      question: 'Can I use offshore brokers for binary options from the UK?',
      answer:
        'While some offshore brokers may accept UK residents, using them violates FCA guidelines and leaves you with no regulatory protection. The FCA maintains a warning list of unauthorised firms and actively warns against using unlicensed platforms. You have no recourse through the Financial Ombudsman Service if something goes wrong.',
    },
    {
      question: 'What is an elective professional trader in the UK?',
      answer:
        'An elective professional client must meet at least two of three criteria: a portfolio of financial instruments exceeding £500,000, significant financial sector work experience, and a history of carrying out significant-sized transactions at a sufficient frequency. Very few retail traders qualify.',
    },
    {
      question: 'What are legal alternatives to binary options in the UK?',
      answer:
        'UK traders can legally access CFDs (regulated by the FCA), spread betting (tax-free profits in the UK), forex trading, stock trading, and exchange-traded options. Deriv, regulated by MFSA Malta, offers synthetic indices that are accessible to UK residents.',
    },
    {
      question: 'Is spread betting taxed in the UK?',
      answer:
        'No. Spread betting profits are currently exempt from Capital Gains Tax and stamp duty in the UK for most individuals. This makes spread betting one of the most tax-efficient trading instruments available to UK residents. However, tax laws can change, so consult a tax advisor.',
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
