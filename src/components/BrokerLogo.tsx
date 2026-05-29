'use client';

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

const logos: Record<BrokerSlug, { initials: string; bg: string; fg: string; accent?: string }> = {
  'pocket-option': { initials: 'PO', bg: '#1a2b4a', fg: '#4dc7ff', accent: '#00e676' },
  'quotex': { initials: 'Qx', bg: '#1a3a2a', fg: '#00e676', accent: '#00c853' },
  'iq-option': { initials: 'IQ', bg: '#1a2744', fg: '#ff9100', accent: '#2979ff' },
  'deriv': { initials: 'D', bg: '#2a1a1a', fg: '#ff444f', accent: '#ff6659' },
  'olymp-trade': { initials: 'OT', bg: '#1a3020', fg: '#4caf50', accent: '#81c784' },
  'binomo': { initials: 'Bn', bg: '#2a2510', fg: '#ffc107', accent: '#ffca28' },
  'expert-option': { initials: 'EO', bg: '#1a2540', fg: '#42a5f5', accent: '#64b5f6' },
};

export default function BrokerLogo({ broker, size = 32, className = '' }: BrokerLogoProps) {
  const logo = logos[broker];
  if (!logo) return null;

  const fontSize = logo.initials.length === 1 ? size * 0.5 : size * 0.36;
  const textY = size * 0.62;
  const rx = size * 0.22;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={broker}
    >
      <rect width={size} height={size} rx={rx} fill={logo.bg} />
      <rect
        x={1}
        y={1}
        width={size - 2}
        height={size - 2}
        rx={rx - 1}
        fill="none"
        stroke={logo.fg}
        strokeOpacity={0.3}
        strokeWidth={1}
      />
      <text
        x="50%"
        y={textY}
        textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif"
        fontSize={fontSize}
        fontWeight={700}
        fill={logo.fg}
      >
        {logo.initials}
      </text>
    </svg>
  );
}
