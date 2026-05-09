import type { BrokerFrontmatter } from '@/lib/brokers';

type Props = {
  broker: BrokerFrontmatter;
};

function formatScore(score: number | null): string {
  return score === null ? '—' : score.toFixed(1);
}

function formatRank(
  rank: { position: number; outOf: number } | null,
): string | null {
  return rank ? `Ranked #${rank.position} of ${rank.outOf}` : null;
}

export function VerdictBox({ broker }: Props) {
  const regRank = formatRank(broker.ranks.bestRegulated);
  const begRank = formatRank(broker.ranks.bestForBeginners);

  return (
    <section
      aria-labelledby="verdict-heading"
      className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6 sm:p-8"
    >
      <header className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Verdict
          </p>
          <h2 id="verdict-heading" className="mt-1 text-2xl font-semibold tracking-tight">
            {broker.name} — {formatScore(broker.scores.bestForBeginners)}/10
          </h2>
        </div>
        <p className="text-xs text-gray-500">
          Last reviewed {broker.lastReviewed} · Methodology v
          {broker.scores.methodologyVersion}
        </p>
      </header>

      <p className="mt-4 text-base text-gray-800">{broker.oneLinerVerdict}</p>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-md border border-gray-200 bg-white p-4">
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Best Regulated
          </dt>
          <dd className="mt-1 text-2xl font-semibold tracking-tight">
            {formatScore(broker.scores.bestRegulated)}
            <span className="text-base font-normal text-gray-500">/10</span>
          </dd>
          {regRank ? (
            <p className="mt-1 text-xs text-gray-600">{regRank}</p>
          ) : (
            <p className="mt-1 text-xs text-gray-600">
              Not eligible (no tier-1 license)
            </p>
          )}
        </div>
        <div className="rounded-md border border-gray-200 bg-white p-4">
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Best for Beginners
          </dt>
          <dd className="mt-1 text-2xl font-semibold tracking-tight">
            {formatScore(broker.scores.bestForBeginners)}
            <span className="text-base font-normal text-gray-500">/10</span>
          </dd>
          {begRank && (
            <p className="mt-1 text-xs text-gray-600">{begRank}</p>
          )}
        </div>
      </dl>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
            Pros
          </p>
          <ul className="mt-2 space-y-1 text-sm text-gray-800">
            {broker.pros.map((p) => (
              <li key={p} className="flex gap-2">
                <span aria-hidden className="text-green-700">+</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-red-700">
            Cons
          </p>
          <ul className="mt-2 space-y-1 text-sm text-gray-800">
            {broker.cons.map((c) => (
              <li key={c} className="flex gap-2">
                <span aria-hidden className="text-red-700">−</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={broker.affiliateUrl}
          rel="sponsored nofollow noopener"
          target="_blank"
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-700"
        >
          Visit {broker.name}
          <span aria-hidden className="ml-2">→</span>
        </a>
        <p className="text-xs text-gray-500">
          We may earn a commission when you sign up through this link.
          High-risk product — see Risk Disclosure below.
        </p>
      </div>
    </section>
  );
}
