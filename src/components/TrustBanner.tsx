'use client';

export default function TrustBanner() {
  const stats = [
    { value: '500+', label: 'Trades Executed' },
    { value: '2', label: 'Years Testing' },
    { value: '$25K+', label: 'Real Money Deposited' },
    { value: '47', label: 'Point Methodology' },
  ];

  return (
    <div className="glass-card p-6 md:p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="stat-number">{stat.value}</div>
            <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
