'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-[#060a12] border-t border-white/[0.04] mt-auto">
      <div className="section-container py-12">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footer-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0f172a"/>
                    <stop offset="100%" stopColor="#1e293b"/>
                  </linearGradient>
                  <linearGradient id="footer-accent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#34d399"/>
                    <stop offset="100%" stopColor="#10b981"/>
                  </linearGradient>
                </defs>
                <rect width="32" height="32" rx="8" fill="url(#footer-bg)"/>
                <text x="12" y="23" fontFamily="system-ui,-apple-system,sans-serif" fontSize="20" fontWeight="800" fill="url(#footer-accent)">B</text>
                <polyline points="19,20 22,14 25,16 28,8" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polygon points="28,8 28,12 24,10" fill="#34d399"/>
              </svg>
              <span className="font-bold text-lg">
                BinaryBroker<span className="text-emerald-400">Hub</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 max-w-md leading-relaxed">
              Independent analysis and reviews of binary options brokers. Our team of experienced
              traders tests platforms extensively to provide accurate, up-to-date information.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Brokers</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/quotex`} className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                  Quotex Review
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/pocket-option`} className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                  Pocket Option Review
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/compare`} className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                  Broker Comparison
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/tools/calculator`} className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                  Profit Calculator
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                  Trading Guides
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/glossary`} className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                  Glossary
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/scams`} className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                  Scam Blacklist
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/methodology`} className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                  Our Methodology
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Risk Warning */}
        <div className="border border-amber-500/20 bg-amber-500/[0.03] rounded-xl p-4 mb-8">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center mt-0.5">
              <span className="text-amber-400 text-xs">!</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-200/70 leading-relaxed">
              {t('riskWarning')}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/[0.04]">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} BinaryBrokerHub. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">{t('disclaimer')}</p>
        </div>
      </div>
    </footer>
  );
}
