import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'BinaryBrokerHub — Expert Binary Options Broker Reviews 2026';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0f1a 0%, #0d1526 50%, #091210 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
        }}
      >
        {/* Green glow effect */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #34d399, #16a34a)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 800,
              color: '#000',
            }}
          >
            BB
          </div>
          <div style={{ display: 'flex', fontSize: '36px', fontWeight: 700, color: '#fff' }}>
            BinaryBroker
            <span style={{ color: '#34d399' }}>Hub</span>
          </div>
        </div>

        {/* Main text */}
        <div
          style={{
            fontSize: '48px',
            fontWeight: 800,
            color: '#fff',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.2,
            marginBottom: '24px',
          }}
        >
          Expert Binary Options
          <br />
          Broker Reviews 2026
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '20px',
            color: '#9ca3af',
            textAlign: 'center',
            maxWidth: '700px',
          }}
        >
          7 brokers tested with $25,000+ real money. Independent reviews, verified data, honest scores.
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
            marginTop: '40px',
            padding: '16px 32px',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          {[
            { label: 'Brokers Tested', value: '7' },
            { label: 'Real Money', value: '$25K+' },
            { label: 'Trades Executed', value: '500+' },
            { label: 'Withdrawal Rate', value: '98.7%' },
          ].map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#34d399' }}>{stat.value}</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
