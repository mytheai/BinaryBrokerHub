// Replace these with your actual affiliate links
export const AFFILIATE_LINKS = {
  quotex: {
    signup: 'https://quotex.com/?lid=YOUR_AFFILIATE_ID',
    demo: 'https://quotex.com/demo/?lid=YOUR_AFFILIATE_ID',
  },
  pocketOption: {
    signup: 'https://pocketoption.com/?ref=YOUR_AFFILIATE_ID',
    demo: 'https://pocketoption.com/demo/?ref=YOUR_AFFILIATE_ID',
  },
} as const;

// UTM helper
export function withUtm(url: string, source: string, medium: string, campaign: string) {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`;
}
