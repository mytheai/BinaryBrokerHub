export type Regulator = {
  name: string;
  authority: string;
  license: string;
  tier: 1 | 2 | 3 | 'offshore';
  verifiedOn?: string;
};

export type ScoreHistoryEntry = {
  date: string;
  methodologyVersion: string;
  bestRegulated: number | null;
  bestForBeginners: number | null;
  note: string;
};

export type BrokerWarning =
  | 'no-tier1-license'
  | 'offshore-only'
  | 'eu-banned-retail'
  | 'rbi-alert-list'
  | 'fca-warning-list'
  | 'cftc-red-list'
  | 'cftc-restricted'
  | 'asic-restricted'
  | 'esma-restricted'
  | 'entity-shuffle';

export type BrokerFrontmatter = {
  slug: string;
  name: string;
  country: 'global' | 'india' | 'pakistan' | 'nigeria' | string;
  websiteUrl: string;
  affiliateUrl: string;
  regulators: Regulator[];
  minDeposit: number;
  minDepositCurrency: 'USD' | 'EUR' | 'GBP';
  payoutMax: number;
  payoutMin: number;
  paymentMethods: string[];
  withdrawalTimeBusinessDays: string;
  demoAccount: boolean;
  scores: {
    bestRegulated: number | null;
    bestForBeginners: number | null;
    methodologyVersion: string;
  };
  ranks: {
    bestRegulated: { position: number; outOf: number } | null;
    bestForBeginners: { position: number; outOf: number } | null;
  };
  warnings: BrokerWarning[];
  oneLinerVerdict: string;
  pros: string[];
  cons: string[];
  scoreHistory: ScoreHistoryEntry[];
  lastReviewed: string;
  publishedAt: string;
};

export const BROKER_SLUGS = ['pocket-option', 'quotex', 'iq-option'] as const;

export type BrokerSlug = (typeof BROKER_SLUGS)[number];

export function isBrokerSlug(slug: string): slug is BrokerSlug {
  return (BROKER_SLUGS as readonly string[]).includes(slug);
}
