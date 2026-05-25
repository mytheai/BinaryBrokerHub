import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0f1a',
};

export const metadata: Metadata = {
  title: {
    default: 'BinaryBrokerHub — Expert Binary Options Broker Reviews 2026',
    template: '%s | BinaryBrokerHub',
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
  metadataBase: new URL('https://binarybrokerhub.com'),
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
    canonical: 'https://binarybrokerhub.com',
    languages: {
      en: 'https://binarybrokerhub.com/en',
      ru: 'https://binarybrokerhub.com/ru',
      es: 'https://binarybrokerhub.com/es',
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
    <html lang={locale} className="dark" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
