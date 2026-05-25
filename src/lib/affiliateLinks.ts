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
  iqOption: {
    signup: 'https://iqoption.com/',
    demo: 'https://iqoption.com/demo/',
  },
  deriv: {
    signup: 'https://deriv.com/',
    demo: 'https://deriv.com/demo/',
  },
  olympTrade: {
    signup: 'https://olymptrade.com/',
    demo: 'https://olymptrade.com/demo/',
  },
  binomo: {
    signup: 'https://binomo.com/',
    demo: 'https://binomo.com/demo/',
  },
  expertOption: {
    signup: 'https://expertoption.com/',
    demo: 'https://expertoption.com/demo/',
  },
} as const;

// UTM helper
export function withUtm(url: string, source: string, medium: string, campaign: string) {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`;
}
