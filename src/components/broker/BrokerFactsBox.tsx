import type { BrokerFrontmatter } from '@/lib/brokers';

type Props = {
  broker: BrokerFrontmatter;
};

function tierLabel(tier: number | 'offshore'): string {
  if (tier === 'offshore') return 'Offshore';
  return `Tier ${tier}`;
}

export function BrokerFactsBox({ broker }: Props) {
  return (
    <aside
      aria-label={`${broker.name} quick facts`}
      className="mt-8 rounded-lg border border-gray-200 bg-white p-6"
    >
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        Quick Facts
      </h2>
      <dl className="mt-4 divide-y divide-gray-100 text-sm">
        <div className="flex justify-between gap-4 py-3">
          <dt className="text-gray-600">Regulators</dt>
          <dd className="text-right font-medium text-gray-900">
            {broker.regulators.length === 0 ? (
              <span className="text-red-700">None disclosed</span>
            ) : (
              <ul className="space-y-1">
                {broker.regulators.map((r) => (
                  <li key={r.license}>
                    {r.authority} ({tierLabel(r.tier)}) — {r.license}
                  </li>
                ))}
              </ul>
            )}
          </dd>
        </div>
        <div className="flex justify-between gap-4 py-3">
          <dt className="text-gray-600">Min deposit</dt>
          <dd className="font-medium text-gray-900">
            ${broker.minDeposit} {broker.minDepositCurrency}
          </dd>
        </div>
        <div className="flex justify-between gap-4 py-3">
          <dt className="text-gray-600">Payout range</dt>
          <dd className="font-medium text-gray-900">
            {broker.payoutMin}%–{broker.payoutMax}%
          </dd>
        </div>
        <div className="flex justify-between gap-4 py-3">
          <dt className="text-gray-600">Withdrawal time</dt>
          <dd className="font-medium text-gray-900">
            {broker.withdrawalTimeBusinessDays} business days
          </dd>
        </div>
        <div className="flex justify-between gap-4 py-3">
          <dt className="text-gray-600">Demo account</dt>
          <dd className="font-medium text-gray-900">
            {broker.demoAccount ? 'Yes' : 'No'}
          </dd>
        </div>
        <div className="py-3">
          <dt className="text-gray-600">Payment methods</dt>
          <dd className="mt-2 flex flex-wrap gap-1.5">
            {broker.paymentMethods.map((m) => (
              <span
                key={m}
                className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs text-gray-700"
              >
                {m}
              </span>
            ))}
          </dd>
        </div>
      </dl>
    </aside>
  );
}
