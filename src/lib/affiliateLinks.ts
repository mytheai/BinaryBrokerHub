// TODO: Replace with affiliate links once approved
export const AFFILIATE_LINKS = {
  quotex: {
    signup: 'https://quotex.com/',
    demo: 'https://quotex.com/demo/',
  },
  pocketOption: {
    signup: 'https://pocketoption.com/',
    demo: 'https://pocketoption.com/demo/',
  },
} as const;

// UTM helper
export function withUtm(url: string, source: string, medium: string, campaign: string) {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`;
}
