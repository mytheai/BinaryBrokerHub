import type { BrokerFrontmatter, ScoreHistoryEntry } from '@/lib/brokers';

type Props = {
  broker: BrokerFrontmatter;
};

function formatScore(score: number | null): string {
  return score === null ? '—' : score.toFixed(1);
}

function entryKey(entry: ScoreHistoryEntry): string {
  return `${entry.date}-${entry.methodologyVersion}`;
}

export function ScoreTimeline({ broker }: Props) {
  if (broker.scoreHistory.length === 0) return null;

  const entries = [...broker.scoreHistory].sort((a, b) =>
    a.date < b.date ? 1 : -1,
  );

  return (
    <section
      aria-labelledby="score-history-heading"
      className="mt-12 rounded-lg border border-gray-200 bg-white p-6"
    >
      <h2
        id="score-history-heading"
        className="text-sm font-semibold uppercase tracking-wide text-gray-500"
      >
        Score history
      </h2>
      <p className="mt-2 text-xs text-gray-500">
        We log every score change publicly. We do not silently edit ratings.
      </p>
      <ol className="mt-4 space-y-4">
        {entries.map((e) => (
          <li
            key={entryKey(e)}
            className="border-l-2 border-gray-200 pl-4 text-sm"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-medium text-gray-900">
                {e.date}{' '}
                <span className="font-normal text-gray-500">
                  · Methodology v{e.methodologyVersion}
                </span>
              </p>
              <p className="text-xs text-gray-600">
                Best Regulated: {formatScore(e.bestRegulated)} · Beginners:{' '}
                {formatScore(e.bestForBeginners)}
              </p>
            </div>
            <p className="mt-1 text-gray-700">{e.note}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
