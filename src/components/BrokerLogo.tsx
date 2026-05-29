'use client';

import React from 'react';

type BrokerSlug =
  | 'pocket-option'
  | 'quotex'
  | 'iq-option'
  | 'deriv'
  | 'olymp-trade'
  | 'binomo'
  | 'expert-option';

interface BrokerLogoProps {
  broker: BrokerSlug;
  size?: number;
  className?: string;
}

function PocketOptionLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#0C1B3A"/>
      <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="#1E3A6E" strokeOpacity="0.5"/>
      <circle cx="20" cy="20" r="12" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="4 2"/>
      <path d="M15 22L18 16L22 19L27 12" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="27" cy="12" r="2" fill="#3B82F6"/>
      <text x="20" y="33" textAnchor="middle" fontFamily="system-ui" fontSize="7" fontWeight="700" fill="#60A5FA">POCKET</text>
    </svg>
  );
}

function QuotexLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#0A2818"/>
      <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="#166534" strokeOpacity="0.5"/>
      <path d="M10 25L16 20L20 23L26 15L30 18" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 25L16 20L20 23L26 15L30 18V28H10V25Z" fill="#22C55E" fillOpacity="0.15"/>
      <polygon points="30,18 30,13 26,16" fill="#22C55E"/>
      <text x="20" y="34" textAnchor="middle" fontFamily="system-ui" fontSize="7" fontWeight="700" fill="#4ADE80">QUOTEX</text>
    </svg>
  );
}

function IQOptionLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#1A1A2E"/>
      <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="#3730A3" strokeOpacity="0.4"/>
      <circle cx="20" cy="18" r="10" fill="none" stroke="#F97316" strokeWidth="2"/>
      <text x="20" y="22" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="800" fill="#F97316">IQ</text>
      <rect x="10" y="30" width="20" height="2" rx="1" fill="#F97316" fillOpacity="0.4"/>
      <rect x="14" y="33" width="12" height="1.5" rx="0.75" fill="#F97316" fillOpacity="0.2"/>
    </svg>
  );
}

function DerivLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#1C1117"/>
      <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="#7F1D1D" strokeOpacity="0.5"/>
      <path d="M12 28L16 18L20 22L24 12L28 16" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="24" cy="12" r="2.5" fill="#EF4444"/>
      <circle cx="24" cy="12" r="5" fill="#EF4444" fillOpacity="0.15"/>
      <text x="20" y="35" textAnchor="middle" fontFamily="system-ui" fontSize="7" fontWeight="700" fill="#F87171">DERIV</text>
    </svg>
  );
}

function OlympTradeLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#0F2117"/>
      <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="#166534" strokeOpacity="0.4"/>
      <path d="M20 8L26 14H14L20 8Z" fill="#22C55E"/>
      <rect x="17" y="14" width="6" height="12" fill="#22C55E" fillOpacity="0.8"/>
      <rect x="13" y="18" width="14" height="2" rx="1" fill="#4ADE80" fillOpacity="0.4"/>
      <rect x="13" y="22" width="14" height="2" rx="1" fill="#4ADE80" fillOpacity="0.3"/>
      <text x="20" y="35" textAnchor="middle" fontFamily="system-ui" fontSize="6" fontWeight="700" fill="#4ADE80">OLYMP</text>
    </svg>
  );
}

function BinomoLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#1C1A0F"/>
      <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="#854D0E" strokeOpacity="0.4"/>
      <rect x="10" y="22" width="4" height="6" rx="1" fill="#EAB308" fillOpacity="0.6"/>
      <rect x="15" y="18" width="4" height="10" rx="1" fill="#EAB308" fillOpacity="0.75"/>
      <rect x="20" y="14" width="4" height="14" rx="1" fill="#EAB308" fillOpacity="0.85"/>
      <rect x="25" y="10" width="4" height="18" rx="1" fill="#EAB308"/>
      <path d="M12 21L17 17L22 13L27 9" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      <text x="20" y="35" textAnchor="middle" fontFamily="system-ui" fontSize="6.5" fontWeight="700" fill="#FDE047">BINOMO</text>
    </svg>
  );
}

function ExpertOptionLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#0F172A"/>
      <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="#1E40AF" strokeOpacity="0.4"/>
      <circle cx="20" cy="17" r="8" fill="none" stroke="#3B82F6" strokeWidth="1.5"/>
      <circle cx="20" cy="17" r="4" fill="#3B82F6" fillOpacity="0.3"/>
      <circle cx="20" cy="17" r="1.5" fill="#60A5FA"/>
      <path d="M26 23L30 27" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
      <text x="20" y="35" textAnchor="middle" fontFamily="system-ui" fontSize="5.5" fontWeight="700" fill="#60A5FA">EXPERT</text>
    </svg>
  );
}

const logoComponents: Record<BrokerSlug, ({ size }: { size: number }) => React.ReactElement> = {
  'pocket-option': PocketOptionLogo,
  'quotex': QuotexLogo,
  'iq-option': IQOptionLogo,
  'deriv': DerivLogo,
  'olymp-trade': OlympTradeLogo,
  'binomo': BinomoLogo,
  'expert-option': ExpertOptionLogo,
};

export default function BrokerLogo({ broker, size = 32, className = '' }: BrokerLogoProps) {
  const LogoComponent = logoComponents[broker];
  if (!LogoComponent) return null;

  return (
    <div className={`inline-flex flex-shrink-0 ${className}`} style={{ width: size, height: size }}>
      <LogoComponent size={size} />
    </div>
  );
}
