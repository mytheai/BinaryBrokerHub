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
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center">
                <span className="text-black font-bold text-sm">BB</span>
              </div>
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
                <Link href={`/${locale}/methodology`} className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                  Our Methodology
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                  Trading Guides
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
