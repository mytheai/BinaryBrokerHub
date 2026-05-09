import { Link } from '@/i18n/routing';
import type { BrokerFrontmatter } from '@/lib/brokers';

type Props = {
  broker: BrokerFrontmatter;
};

function formatScore(score: number | null): string {
  return score === null ? '—' : score.toFixed(1);
}

export function BrokerCard({ broker }: Props) {
  const rank = broker.ranks.bestForBeginners;
  return (
    <Link
      href={`/brokers/${broker.slug}`}
      className="group block rounded-lg border border-gray-200 bg-white p-6 transition hover:border-gray-400 hover:shadow-sm"
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight group-hover:text-gray-700">
          {broker.name}
        </h3>
        {rank && (
          <span className="rounded-full bg-gray-900 px-2.5 py-0.5 text-xs font-medium text-white">
            #{rank.position} of {rank.outOf}
          </span>
        )}
      </div>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-3xl font-semibold tracking-tight">
          {formatScore(broker.scores.bestForBeginners)}
        </span>
        <span className="text-sm text-gray-500">/ 10 Best for Beginners</span>
      </div>

      <p className="mt-4 line-clamp-3 text-sm text-gray-700">
        {broker.oneLinerVerdict}
      </p>

      <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4 text-xs text-gray-600">
        <div>
          <dt>Min deposit</dt>
          <dd className="mt-0.5 font-medium text-gray-900">
            ${broker.minDeposit}
          </dd>
        </div>
        <div>
          <dt>Max payout</dt>
          <dd className="mt-0.5 font-medium text-gray-900">
            {broker.payoutMax}%
          </dd>
        </div>
      </dl>

      <p className="mt-5 text-sm font-medium text-blue-700 group-hover:underline">
        Read full review →
      </p>
    </Link>
  );
}
