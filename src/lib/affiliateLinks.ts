export const AFFILIATE_LINKS = {
  quotex: {
    signup: 'https://broker-qx.pro/sign-up/?lid=2135323',
    demo: 'https://broker-qx.pro/sign-up/?lid=2135323',
  },
  pocketOption: {
    signup: 'https://u3.shortink.io/register?utm_campaign=847168&utm_source=affiliate&utm_medium=sr&a=Maxhgt61byfDAT&al=1765171&ac=binarybrokerhub&cid=957220&code=WELCOME50',
    demo: 'https://u3.shortink.io/register?utm_campaign=847168&utm_source=affiliate&utm_medium=sr&a=Maxhgt61byfDAT&al=1765171&ac=binarybrokerhub&cid=957220&code=WELCOME50',
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

// UTM helper — skips if the URL already contains UTM parameters
export function withUtm(url: string, source: string, medium: string, campaign: string) {
  if (url.includes('utm_source=') || url.includes('utm_campaign=')) return url;
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`;
}
