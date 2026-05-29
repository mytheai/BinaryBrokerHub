const BASE_URL = 'https://binarybrokerhub.com';

const blogPosts = [
  { slug: 'best-binary-options-brokers', title: '7 Best Binary Options Brokers 2026 — Tested & Ranked', desc: 'We tested all 7 brokers with real money over 8+ months. Honest ranking based on payouts, platform quality, regulation, and actual user experience.' },
  { slug: 'binary-options-trading-guide', title: 'Binary Options Trading for Beginners — Complete 2026 Guide', desc: 'Everything you need to know about binary options trading: how it works, types of trades, risk management, and step-by-step instructions.' },
  { slug: 'binary-options-regulation', title: 'Binary Options Regulation Guide 2026', desc: 'Which brokers are actually licensed? Understanding regulation tiers, safety, and what to look for.' },
  { slug: 'binary-options-strategy-beginners', title: '5 Best Binary Options Strategies for Beginners', desc: 'Proven methods for beginners including trend following, support/resistance, and news-based trading.' },
  { slug: 'is-pocket-option-legit', title: 'Is Pocket Option Legit? Evidence-Based Verification', desc: 'After 8 months of testing with real money, here is our honest assessment of Pocket Option legitimacy.' },
  { slug: 'is-quotex-real-or-fake', title: 'Is Quotex Real or Fake? Honest Verification 2026', desc: '6 months of real-money testing. $5,000+ deposited. Here is our evidence-based verdict on Quotex.' },
  { slug: 'pocket-option-withdrawal', title: 'Pocket Option Withdrawal Guide — All Methods & Times', desc: 'Complete guide to withdrawing from Pocket Option. 12 test withdrawals documented with proof.' },
  { slug: 'quotex-deposit-withdrawal', title: 'Quotex Deposit & Withdrawal Guide 2026', desc: 'All deposit and withdrawal methods, fees, and real processing times from our testing.' },
  { slug: 'binary-options-demo-account', title: 'Best Binary Options Demo Accounts 2026', desc: 'Compare free demo accounts from all major brokers. Practice risk-free before investing.' },
  { slug: 'binary-options-vs-forex', title: 'Binary Options vs Forex Trading — Key Differences', desc: 'How binary options compare to traditional forex trading. Pros, cons, and which suits you.' },
  { slug: 'binary-options-minimum-deposit', title: 'Binary Options Minimum Deposit Comparison 2026', desc: 'Start trading from just $5. Compare minimum deposits across all 7 brokers.' },
  { slug: 'how-to-withdraw-binary-options', title: 'How to Withdraw from Binary Options Brokers', desc: 'Step-by-step withdrawal guide for all major brokers with real processing times.' },
  { slug: 'pocket-option-copy-trading', title: 'Pocket Option Copy Trading Guide — 3-Month Test Results', desc: 'How to copy top traders on Pocket Option. Real performance data from our testing.' },
  { slug: 'quotex-strategy', title: 'Quotex Trading Strategy — 1-Min & 5-Min Methods', desc: 'Proven trading strategies optimized for Quotex high payouts with real win rates.' },
  { slug: '60-second-binary-options-strategy', title: '60-Second Binary Options Strategy 2026', desc: 'Turbo trading strategies for experienced traders. High risk, fast results.' },
  { slug: '5-minute-binary-options-strategy', title: '5-Minute Binary Options Strategy — The Sweet Spot', desc: 'The most popular timeframe for binary options. Proven methods with chart examples.' },
  { slug: '30-minute-binary-options-strategy', title: '30-Minute Binary Options Strategy — Higher Win Rates', desc: 'More analysis time means better accuracy. Strategies for patient traders.' },
  { slug: '1-day-binary-options-strategy', title: 'End-of-Day Binary Options Strategy', desc: 'Perfect for traders with day jobs. Analyze once, trade once, check results tomorrow.' },
  { slug: 'binary-options-copy-trading', title: 'Binary Options Copy Trading Guide 2026', desc: 'How copy trading works, which brokers offer it, and real performance expectations.' },
  { slug: 'binary-options-mobile-trading', title: 'Binary Options Mobile Trading Guide', desc: 'Best mobile trading apps compared. Trade on the go with full features.' },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const pubDate = new Date().toUTCString();

  const items = blogPosts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${BASE_URL}/en/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/en/blog/${post.slug}</guid>
      <description>${escapeXml(post.desc)}</description>
      <pubDate>${pubDate}</pubDate>
    </item>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>BinaryBrokerHub — Binary Options Broker Reviews</title>
    <link>${BASE_URL}</link>
    <description>Independent binary options broker reviews backed by real-money testing. 7 brokers tested with $25K+ deposited.</description>
    <language>en</language>
    <lastBuildDate>${pubDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
