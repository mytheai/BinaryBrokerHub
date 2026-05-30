import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { articleSchema, breadcrumbSchema, faqSchema, datasetSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'Binary Options Legality Tracker 2026 — Banned, Restricted & Unregulated by Country',
  description:
    'Independent, sourced tracker of binary options legal status by country. Banned across the EU, UK, Australia, Canada and Israel; restricted in the US; unregulated in India, Nigeria and the Philippines. Every status linked to its regulator.',
  openGraph: {
    title: 'Binary Options Legality Tracker 2026 — Where It’s Banned, Restricted & Unregulated',
    description:
      'A country-by-country, regulator-sourced map of binary options legality. Banned in the EU/UK/Australia/Canada/Israel, restricted in the US, unregulated in many emerging markets.',
    url: `${BASE_URL}/en/binary-options-legality`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary Options Legality Tracker 2026 — Banned vs Unregulated by Country',
    description:
      'Independent, regulator-sourced tracker of binary options legal status worldwide. Updated 2026.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/binary-options-legality`,
    languages: {
      en: `${BASE_URL}/en/binary-options-legality`,
      ru: `${BASE_URL}/ru/binary-options-legality`,
      es: `${BASE_URL}/es/binary-options-legality`,
    },
  },
};

const schemas = [
  articleSchema({
    title: 'Binary Options Legality Tracker 2026 — Banned, Restricted & Unregulated by Country',
    description:
      'Independent, regulator-sourced tracker of binary options legal status by country, covering bans (EU, UK, Australia, Canada, Israel), restrictions (US), and unregulated gray markets (India, Nigeria, Philippines).',
    url: `${BASE_URL}/en/binary-options-legality`,
    datePublished: '2026-05-30',
    dateModified: '2026-05-30',
    category: 'Regulation',
  }),
  datasetSchema({
    name: 'Binary Options Legality Tracker 2026',
    description:
      'Country-by-country legal status of binary options trading, sourced to national financial regulators. Covers retail bans, restricted regimes, and unregulated markets.',
    url: `${BASE_URL}/en/binary-options-legality`,
    dateModified: '2026-05-30',
  }),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Regulation', url: `${BASE_URL}/en/binary-options-legality` },
    { name: 'Binary Options Legality Tracker', url: `${BASE_URL}/en/binary-options-legality` },
  ]),
  faqSchema([
    {
      question: 'In which countries are binary options banned?',
      answer:
        'Binary options are banned for retail traders across the entire European Union, the United Kingdom (FCA, since April 2019), Australia (ASIC, until at least October 2031) and Canada (a complete ban on advertising and selling). Israel banned the entire binary options industry, and Indonesia treats binary options as illegal gambling.',
    },
    {
      question: 'Is binary options trading legal in the United States?',
      answer:
        'Binary options are legal in the US only when offered through a CFTC-regulated exchange. Nadex (North American Derivatives Exchange) is the main regulated venue. Offshore brokers that are not registered with the CFTC are illegal for US residents.',
    },
    {
      question: 'Why are binary options banned in the EU and UK?',
      answer:
        'Regulators found that the large majority of retail clients lost money. The FCA cited that roughly 74–87% of UK retail clients lost money trading binary options, and ASIC found around 80% of Australian retail clients lost money. ESMA introduced an EU-wide ban in 2018 that national regulators then made permanent.',
    },
    {
      question: 'Is binary options trading legal in India?',
      answer:
        'Binary options are not licensed by SEBI and exist in a legal gray area. Offshore binary options brokers appear on the RBI Alert List, and sending money abroad to trade them is restricted under FEMA and the Liberalised Remittance Scheme. Indian traders who use offshore brokers have no domestic legal recourse.',
    },
    {
      question: 'What does “unregulated” mean for a binary options trader?',
      answer:
        'In unregulated markets such as Nigeria and the Philippines, no local authority oversees binary options brokers. Trading is accessible through offshore platforms, but you have no domestic regulatory protection or compensation scheme if a dispute or fraud occurs.',
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
