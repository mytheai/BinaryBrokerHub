'use client';

import { AFFILIATE_LINKS, withUtm } from '@/lib/affiliateLinks';

interface CtaButtonProps {
  broker: 'quotex' | 'pocketOption' | 'iqOption' | 'deriv' | 'olympTrade' | 'binomo' | 'expertOption';
  type?: 'signup' | 'demo';
  label: string;
  variant?: 'primary' | 'secondary';
  campaign?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function CtaButton({
  broker,
  type = 'signup',
  label,
  variant = 'primary',
  campaign = 'website',
  className = '',
  size = 'md',
}: CtaButtonProps) {
  const baseUrl = AFFILIATE_LINKS[broker][type];
  const url = withUtm(baseUrl, 'binarybrokerhub', 'cta', campaign);

  const sizeStyles = {
    sm: 'px-4 py-2.5 text-sm min-h-[44px]',
    md: 'px-6 py-3 text-sm min-h-[44px]',
    lg: 'px-8 py-3.5 text-base min-h-[48px]',
  };

  const baseStyle = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyle} ${sizeStyles[size]} ${className}`}
    >
      {label}
      {variant === 'primary' && (
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      )}
    </a>
  );
}
