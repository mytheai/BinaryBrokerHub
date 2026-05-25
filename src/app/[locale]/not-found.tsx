'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function NotFound() {
  const locale = useLocale();

  const quickLinks = [
    { label: 'Homepage', href: `/${locale}` },
    { label: 'Compare Brokers', href: `/${locale}/compare` },
    { label: 'Blog', href: `/${locale}/blog` },
    { label: 'Profit Calculator', href: `/${locale}/tools/calculator` },
  ];

  const popularBrokers = [
    { name: 'Pocket Option', score: '9.5', href: `/${locale}/pocket-option` },
    { name: 'Quotex', score: '9.4', href: `/${locale}/quotex` },
    { name: 'IQ Option', score: '9.2', href: `/${locale}/iq-option` },
    { name: 'Deriv', score: '9.0', href: `/${locale}/deriv` },
  ];

  return (
    <div>
      <section className="section-container py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* 404 Heading */}
          <div className="mb-6">
            <span className="text-8xl md:text-9xl font-extrabold gradient-text select-none">404</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Page Not Found
          </h1>

          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Don&apos;t worry — use the links below to find what you need.
          </p>

          {/* Quick Navigation */}
          <div className="glass-card p-6 md:p-8 mb-10">
            <h2 className="text-lg font-bold mb-5">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="btn-primary text-sm py-3 px-4 text-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Popular Broker Reviews */}
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-lg font-bold mb-5">Popular Broker Reviews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {popularBrokers.map((broker) => (
                <Link
                  key={broker.href}
                  href={broker.href}
                  className="flex items-center justify-between bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] rounded-xl p-4 transition-colors group"
                >
                  <span className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {broker.name}
                  </span>
                  <span className="badge-green text-xs">{broker.score}/10</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Risk Disclaimer */}
          <p className="text-xs text-gray-600 mt-10 max-w-lg mx-auto">
            Trading binary options involves significant risk. You may lose some or all of your invested capital.
            Only trade with money you can afford to lose.
          </p>
        </div>
      </section>
    </div>
  );
}
