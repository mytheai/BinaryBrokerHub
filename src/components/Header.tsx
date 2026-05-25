'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/quotex`, label: 'Quotex' },
    { href: `/${locale}/pocket-option`, label: 'Pocket Option' },
    { href: `/${locale}/compare`, label: t('compare') },
    { href: `/${locale}/tools/calculator`, label: t('tools') },
    { href: `/${locale}/methodology`, label: t('methodology') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0a0f1a]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center">
              <span className="text-black font-bold text-sm">BB</span>
            </div>
            <span className="font-bold text-lg text-white hidden sm:block">
              BinaryBroker<span className="text-emerald-400">Hub</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-white/[0.03] rounded-lg p-1 border border-white/[0.06]">
              {['en', 'ru', 'es'].map((lang) => (
                <Link
                  key={lang}
                  href={`/${lang}`}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                    locale === lang
                      ? 'bg-emerald-500 text-black'
                      : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {lang.toUpperCase()}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 border-t border-white/[0.06] pt-4 mt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/[0.05] rounded-lg"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 px-3 pt-3">
              {['en', 'ru', 'es'].map((lang) => (
                <Link
                  key={lang}
                  href={`/${lang}`}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium ${
                    locale === lang
                      ? 'bg-emerald-500 text-black'
                      : 'text-gray-500 bg-white/[0.05]'
                  }`}
                >
                  {lang.toUpperCase()}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
