import type { Metadata } from 'next';
import SchemaScript from '@/components/SchemaScript';
import { organizationSchema, breadcrumbSchema } from '@/lib/schema';

const BASE_URL = 'https://www.binarybrokerhub.com';

export const metadata: Metadata = {
  title: 'About BinaryBrokerHub — Our Team & Testing Methodology',
  description:
    'Meet the team behind BinaryBrokerHub. 30+ years combined experience in financial markets. Independent, data-driven broker reviews based on real-money testing.',
  openGraph: {
    title: 'About BinaryBrokerHub — Our Team & Testing Methodology',
    description:
      'Independent binary options analysis team with 30+ years combined experience. Real-money testing, no paid reviews.',
    url: `${BASE_URL}/en/about`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About BinaryBrokerHub — Our Team & Testing Methodology',
    description:
      'Independent binary options analysis team with 30+ years combined experience.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/about`,
    languages: {
      en: `${BASE_URL}/en/about`,
      ru: `${BASE_URL}/ru/about`,
      es: `${BASE_URL}/es/about`,
    },
  },
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About BinaryBrokerHub',
  description:
    'Meet the team behind BinaryBrokerHub. Independent, data-driven binary options broker reviews based on real-money testing.',
  url: `${BASE_URL}/en/about`,
  mainEntity: {
    '@type': 'Organization',
    name: 'BinaryBrokerHub',
    url: BASE_URL,
    foundingDate: '2025',
    description:
      'Independent binary options broker reviews based on real-money testing. 7 brokers tested with $25,000+ deposited.',
    member: [
      {
        '@type': 'Person',
        name: 'Alex Chen',
        jobTitle: 'Founder & Lead Analyst',
        description:
          '12 years in financial markets. Former quantitative analyst. Oversees 47-point testing methodology.',
      },
      {
        '@type': 'Person',
        name: 'Maria Santos',
        jobTitle: 'Regulatory & Compliance Analyst',
        description:
          '8 years in financial regulation. Former CySEC compliance officer. Leads broker safety scoring.',
      },
      {
        '@type': 'Person',
        name: 'David Petrov',
        jobTitle: 'Trading Strategy & Education Lead',
        description:
          '10 years active trader. Author of 20+ trading guides. Manages demo account testing program.',
      },
    ],
  },
};

const schemas = [
  aboutPageSchema,
  organizationSchema(),
  breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'About Us', url: `${BASE_URL}/en/about` },
  ]),
];

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaScript schema={schemas} />
      {children}
    </>
  );
}
