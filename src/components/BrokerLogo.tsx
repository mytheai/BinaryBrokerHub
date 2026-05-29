'use client';

import Image from 'next/image';

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

const brokerMeta: Record<BrokerSlug, { src: string; alt: string; width: number; height: number }> = {
  'pocket-option': { src: '/brokers/pocket-option.png', alt: 'Pocket Option', width: 151, height: 50 },
  'quotex': { src: '/brokers/quotex.png', alt: 'Quotex', width: 500, height: 120 },
  'iq-option': { src: '/brokers/iq-option.png', alt: 'IQ Option', width: 227, height: 66 },
  'deriv': { src: '/brokers/deriv.png', alt: 'Deriv', width: 300, height: 137 },
  'olymp-trade': { src: '/brokers/olymp-trade.png', alt: 'Olymp Trade', width: 300, height: 36 },
  'binomo': { src: '/brokers/binomo.png', alt: 'Binomo', width: 153, height: 50 },
  'expert-option': { src: '/brokers/expert-option.png', alt: 'ExpertOption', width: 231, height: 50 },
};

export default function BrokerLogo({ broker, size = 32, className = '' }: BrokerLogoProps) {
  const meta = brokerMeta[broker];
  if (!meta) return null;

  const aspectRatio = meta.width / meta.height;
  const displayWidth = size * aspectRatio;

  return (
    <Image
      src={meta.src}
      alt={meta.alt}
      width={Math.round(displayWidth)}
      height={size}
      className={`object-contain ${className}`}
      style={{ height: size, width: 'auto', maxWidth: size * 4 }}
    />
  );
}
