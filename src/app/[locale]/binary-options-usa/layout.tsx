import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Binary Options in the USA 2026 — Legal Status, CFTC Rules & Guide',
  description:
    'Are binary options legal in the United States? Complete guide to CFTC/SEC regulations, Nadex as the only legal exchange, risks of offshore brokers, and legal alternatives for US traders.',
  openGraph: {
    title: 'Binary Options in the USA 2026 — Legal Status, CFTC Rules & Guide',
    description:
      'US binary options legality guide. CFTC/SEC regulations, Nadex, why offshore brokers are illegal for Americans, and legal trading alternatives.',
    url: `${BASE_URL}/en/binary-options-usa`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary Options in the USA 2026 — Legal Status & CFTC Rules',
    description:
      'Are binary options legal in the US? CFTC regulations, Nadex, and why offshore brokers carry legal risks.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/binary-options-usa`,
    languages: {
      en: `${BASE_URL}/en/binary-options-usa`,
      ru: `${BASE_URL}/ru/binary-options-usa`,
      es: `${BASE_URL}/es/binary-options-usa`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Binary Options in the USA 2026 — Legal Status, CFTC Rules & Guide',
    description:
      'Complete guide to binary options trading legality in the United States. CFTC/SEC regulations, Nadex, and legal alternatives.',
    url: `${BASE_URL}/en/binary-options-usa`,
    datePublished: '2026-05-25',
    dateModified: '2026-05-25',
    category: 'Country Guides',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Country Guides', url: `${BASE_URL}/en/binary-options-usa` },
    { name: 'Binary Options in the USA', url: `${BASE_URL}/en/binary-options-usa` },
  ]),
  faqSchema([
    {
      question: 'Are binary options legal in the USA?',
      answer:
        'Yes, binary options are legal in the USA but are heavily regulated. Only exchanges registered with the CFTC (Commodity Futures Trading Commission) can legally offer binary options to US residents. Currently, Nadex (North American Derivatives Exchange) is the only CFTC-regulated binary options exchange operating in the US.',
    },
    {
      question: 'Can US traders use Quotex or Pocket Option?',
      answer:
        'No. Offshore brokers like Quotex, Pocket Option, IQ Option, and others are not registered with the CFTC and do not legally accept US traders. Using these platforms from the US violates federal regulations and exposes you to legal and financial risks with no regulatory protection.',
    },
    {
      question: 'What is Nadex and how does it work?',
      answer:
        'Nadex (North American Derivatives Exchange) is the only CFTC-regulated binary options exchange in the US. Unlike offshore brokers, Nadex operates as a true exchange where traders trade against each other, not against the broker. Nadex offers binary options on forex, stock indices, commodities, and events with a $250 minimum deposit.',
    },
    {
      question: 'What happens if I use an offshore broker from the US?',
      answer:
        'Using unregistered offshore brokers from the US is illegal under federal law. Risks include: no regulatory protection if the broker refuses withdrawals, potential legal consequences, difficulty reporting income to the IRS, and vulnerability to fraud. The CFTC actively pursues enforcement against illegal offshore operators.',
    },
    {
      question: 'Are there legal alternatives to binary options for US traders?',
      answer:
        'Yes. US traders can legally trade through Nadex (binary options), regulated futures and options through CME Group, event contracts on Kalshi, and synthetic indices through Deriv (in certain states). Stock options through regulated brokers like TD Ameritrade or Interactive Brokers are also available.',
    },
    {
      question: 'How are binary options taxed in the USA?',
      answer:
        'Binary options profits from CFTC-regulated exchanges like Nadex are taxed under IRS Section 1256, with 60% of gains treated as long-term capital gains and 40% as short-term, regardless of holding period. This 60/40 split can be more favorable than ordinary income tax rates. Consult a tax professional for your specific situation.',
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
