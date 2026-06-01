import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaScript from '@/components/SchemaScript';
import { organizationSchema, websiteSchema } from '@/lib/schema';
import '../globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0f1a',
};

export const metadata: Metadata = {
  title: {
    default: 'BinaryBrokerHub — Expert Binary Options Broker Reviews 2026',
    template: '%s', // brand suffix dropped; child titles render verbatim (kept <= 60 chars for SERP)
  },
  description:
    'Independent reviews of 7 binary options brokers: Quotex, IQ Option, Pocket Option, Deriv, Olymp Trade, Binomo & ExpertOption. Real-money testing, verified data, honest scores.',
  keywords: [
    'binary options',
    'best binary options broker 2026',
    'quotex review',
    'iq option review',
    'pocket option review',
    'deriv review',
    'olymp trade review',
    'binomo review',
    'binary broker comparison',
    'binary options trading',
  ],
  metadataBase: new URL('https://www.binarybrokerhub.com'),
  openGraph: {
    type: 'website',
    siteName: 'BinaryBrokerHub',
    title: 'BinaryBrokerHub — Expert Binary Options Broker Reviews 2026',
    description: 'Independent reviews of 7 binary options brokers tested with $25,000+ real money. Compare payouts, trust, features side-by-side.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BinaryBrokerHub — Binary Options Broker Reviews 2026',
    description: 'Independent reviews of 7 brokers tested with real money. Quotex, IQ Option, Pocket Option, Deriv & more.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.binarybrokerhub.com/en',
    languages: {
      en: 'https://www.binarybrokerhub.com/en',
      ru: 'https://www.binarybrokerhub.com/ru',
      es: 'https://www.binarybrokerhub.com/es',
    },
  },
  verification: {
    google: 'LL1GdVy96xCfME-ZYijBIKn3u-aOtK_xBkDdm1KrVzg',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`dark ${inter.variable}`} suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <script defer data-domain="binarybrokerhub.com" src="https://plausible.io/js/script.js" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <SchemaScript schema={[organizationSchema(), websiteSchema()]} />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
