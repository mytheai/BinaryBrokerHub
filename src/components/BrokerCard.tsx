'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import CtaButton from './CtaButton';

interface BrokerCardProps {
  broker: 'quotex' | 'pocketOption';
}

const brokerMeta = {
  quotex: {
    slug: 'quotex',
    score: 9.4,
    badge: '#2 Highest Payouts',
    color: 'emerald',
    minDeposit: '$10',
    maxPayout: '95%',
    assets: '400+',
    withdrawal: '< 1 hour',
    demo: '$10,000',
    platforms: 'Web, iOS, Android',
  },
  pocketOption: {
    slug: 'pocket-option',
    score: 9.5,
    badge: '#1 Best Overall 2026',
    color: 'blue',
    minDeposit: '$5',
    maxPayout: '92%',
    assets: '180+',
    withdrawal: '12-45 min',
    demo: '$50,000',
    platforms: 'Web, Windows, iOS, Android',
  },
};

export default function BrokerCard({ broker }: BrokerCardProps) {
  const t = useTranslations(broker);
  const cta = useTranslations('cta');
  const locale = useLocale();
  const meta = brokerMeta[broker];

  const highlights = [
    t('highlight1'),
    t('highlight2'),
    t('highlight3'),
    t('highlight4'),
    t('highlight5'),
  ];

  return (
    <div className="glass-card-hover overflow-hidden">
      {/* Score Header */}
      <div className="flex items-center justify-between p-6 pb-0">
        <div>
          <span className={`badge ${meta.color === 'emerald' ? 'badge-green' : 'badge-blue'} mb-2`}>
            {meta.badge}
          </span>
          <h3 className="text-xl font-bold text-white">{t('title')}</h3>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-emerald-400">{meta.score}</div>
          <div className="text-[10px] text-gray-500 uppercase tracking-wider">Score /10</div>
        </div>
      </div>

      <div className="p-6 space-y-5">
        <p className="text-sm text-gray-400 leading-relaxed">{t('description')}</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Min. Deposit', value: meta.minDeposit },
            { label: 'Max. Payout', value: meta.maxPayout },
            { label: 'Withdrawal', value: meta.withdrawal },
          ].map((s) => (
            <div key={s.label} className="bg-white/[0.03] rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-white">{s.value}</div>
              <div className="text-[10px] text-gray-500 uppercase">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <ul className="space-y-2">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm">
              <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">{h}</span>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="flex flex-col gap-2 pt-2">
          <CtaButton
            broker={broker}
            label={cta('openAccount')}
            campaign={`card_${meta.slug}`}
            className="w-full"
          />
          <CtaButton
            broker={broker}
            type="demo"
            label={cta('tryDemo')}
            variant="secondary"
            campaign={`card_${meta.slug}`}
            className="w-full"
          />
          <Link
            href={`/${locale}/${meta.slug}`}
            className="text-center text-sm text-gray-500 hover:text-emerald-400 transition-colors mt-1"
          >
            Read Full Review →
          </Link>
        </div>
      </div>
    </div>
  );
}
