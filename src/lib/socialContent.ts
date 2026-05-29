const BASE_URL = 'https://www.binarybrokerhub.com/en';

export interface TweetTemplate {
  text: string;
  category: 'broker_tip' | 'education' | 'safety' | 'strategy' | 'comparison' | 'stat';
}

export const tweetPool: TweetTemplate[] = [
  // === BROKER TIPS ===
  { category: 'broker_tip', text: `Pocket Option has the lowest minimum deposit in the industry — just $5. Full review with real-money testing data:\n\n${BASE_URL}/pocket-option` },
  { category: 'broker_tip', text: `Quotex peak payouts reach 90–95% during London/NY sessions. We tested it over 6 months with 300+ trades:\n\n${BASE_URL}/quotex` },
  { category: 'broker_tip', text: `IQ Option is one of only 2 binary brokers with a Tier-1 CySEC license. But there's a catch — read why:\n\n${BASE_URL}/iq-option` },
  { category: 'broker_tip', text: `Deriv has been operating for 26 years under MFSA Malta regulation. The most trusted name in binary options:\n\n${BASE_URL}/deriv` },
  { category: 'broker_tip', text: `Pocket Option offers a $50,000 demo account. No deposit, no registration required. Practice before you risk real money:\n\n${BASE_URL}/pocket-option` },
  { category: 'broker_tip', text: `Quotex demo account has UNLIMITED virtual balance. The best way to test strategies risk-free:\n\n${BASE_URL}/quotex` },
  { category: 'broker_tip', text: `We processed 12 test withdrawals from Pocket Option. Crypto withdrawals averaged 12–45 minutes:\n\n${BASE_URL}/blog/pocket-option-withdrawal` },
  { category: 'broker_tip', text: `Quotex crypto withdrawals (USDT TRC-20) processed within 1 hour in our testing. Full guide:\n\n${BASE_URL}/blog/quotex-deposit-withdrawal` },
  { category: 'broker_tip', text: `Is Pocket Option legit? After 8 months of real-money testing with $3,000+ deposited, here's our honest verdict:\n\n${BASE_URL}/blog/is-pocket-option-legit` },
  { category: 'broker_tip', text: `Is Quotex real or fake? We deposited $5,000+ and tested for 6 months. Evidence-based answer:\n\n${BASE_URL}/blog/is-quotex-real-or-fake` },

  // === EDUCATION ===
  { category: 'education', text: `New to binary options? Our complete beginner guide covers everything from "what is it?" to your first trade:\n\n${BASE_URL}/blog/binary-options-trading-guide` },
  { category: 'education', text: `The #1 mistake beginners make: skipping demo practice.\n\nStart with $50K virtual money before risking real funds:\n\n${BASE_URL}/blog/binary-options-trading-guide#getting-started` },
  { category: 'education', text: `Binary options vs forex — what's the difference?\n\nFixed risk vs variable risk. Which suits your style?\n\n${BASE_URL}/blog/binary-options-vs-forex` },
  { category: 'education', text: `What is copy trading in binary options? Can you really profit by copying experts?\n\nWe tested it for 3 months:\n\n${BASE_URL}/blog/pocket-option-copy-trading` },
  { category: 'education', text: `Best free demo accounts for binary options in 2026:\n\n• Pocket Option: $50K\n• Quotex: Unlimited\n• IQ Option: $10K\n\nFull comparison:\n\n${BASE_URL}/blog/binary-options-demo-account` },
  { category: 'education', text: `You can start trading binary options with just $5.\n\nMinimum deposit comparison for all 7 brokers:\n\n${BASE_URL}/blog/binary-options-minimum-deposit` },
  { category: 'education', text: `How to withdraw from binary options brokers — step by step:\n\n• Methods available\n• Real processing times\n• Common issues & fixes\n\n${BASE_URL}/blog/how-to-withdraw-binary-options` },
  { category: 'education', text: `What are OTC markets in binary options? Trade on weekends when regular markets close:\n\n${BASE_URL}/blog/otc-trading-binary-options` },
  { category: 'education', text: `Deriv Synthetic Indices explained — trade volatility 24/7, even on weekends:\n\n${BASE_URL}/blog/deriv-synthetic-indices-guide` },
  { category: 'education', text: `Mobile trading binary options: which app is best?\n\nWe tested all 7 broker apps:\n\n${BASE_URL}/blog/binary-options-mobile-trading` },

  // === SAFETY ===
  { category: 'safety', text: `6 red flags of a scam binary options broker:\n\n1. Guaranteed profits\n2. Refusing withdrawals\n3. Pressure calls to deposit more\n4. No company registration\n5. Impossible bonus terms\n6. Manipulated charts\n\nFull guide:\n\n${BASE_URL}/scams` },
  { category: 'safety', text: `Only 2 binary brokers on our list have Tier-1 government regulation.\n\nDo you know which ones?\n\nAnswer + full regulation breakdown:\n\n${BASE_URL}/blog/binary-options-regulation` },
  { category: 'safety', text: `Binary options regulation tiers explained:\n\n🟢 Tier 1: CySEC, MFSA (strongest)\n🔵 Tier 2: FinaCom (moderate)\n🟡 Tier 3: Offshore only (weakest)\n\nWhich tier is your broker?\n\n${BASE_URL}/blog/binary-options-regulation` },
  { category: 'safety', text: `⚠️ Recovery scam warning: if you lost money to a scam broker, beware of "recovery agents" who promise to get it back for a fee. They're scammers too.\n\nHow to actually report:\n\n${BASE_URL}/scams` },
  { category: 'safety', text: `Our methodology: how we test brokers with real money.\n\n• $25K+ deposited across 7 brokers\n• 500+ trades executed\n• 200+ withdrawals processed\n\nFull transparency:\n\n${BASE_URL}/methodology` },
  { category: 'safety', text: `Before depositing with ANY broker:\n\n1. Test withdrawal with minimum amount\n2. Check regulation status\n3. Read independent reviews\n4. Verify on our scam checklist\n\n${BASE_URL}/scams` },

  // === STRATEGY ===
  { category: 'strategy', text: `60-second binary options strategy — for experienced traders only.\n\nHigh risk, fast results. 3 proven methods:\n\n${BASE_URL}/blog/60-second-binary-options-strategy` },
  { category: 'strategy', text: `The 5-minute timeframe is the sweet spot for most binary options traders.\n\nEnough time for analysis, fast enough for results:\n\n${BASE_URL}/blog/5-minute-binary-options-strategy` },
  { category: 'strategy', text: `30-minute binary options strategy = higher win rates.\n\nMore time to analyze = better decisions.\n\n3 methods for patient traders:\n\n${BASE_URL}/blog/30-minute-binary-options-strategy` },
  { category: 'strategy', text: `Have a day job? The end-of-day strategy is for you.\n\nAnalyze once, trade once, check results tomorrow:\n\n${BASE_URL}/blog/1-day-binary-options-strategy` },
  { category: 'strategy', text: `5 beginner-friendly binary options strategies ranked by difficulty:\n\n1. Trend following (easiest)\n2. Support & resistance\n3. Moving average crossover\n4. News trading\n5. RSI divergence\n\n${BASE_URL}/blog/binary-options-strategy-beginners` },
  { category: 'strategy', text: `Quotex-optimized trading strategy: 1-min and 5-min methods with real win rates from our testing:\n\n${BASE_URL}/blog/quotex-strategy` },

  // === COMPARISON ===
  { category: 'comparison', text: `Pocket Option vs Quotex — our #1 vs #2.\n\nCopy trading & $5 deposit vs highest payouts.\n\nFull comparison:\n\n${BASE_URL}/compare/pocket-option-vs-quotex` },
  { category: 'comparison', text: `Pocket Option vs IQ Option — copy trading vs pro platform.\n\nWhich one suits your trading style?\n\n${BASE_URL}/compare/pocket-option-vs-iq-option` },
  { category: 'comparison', text: `Quotex vs IQ Option — 95% payouts vs best technology.\n\nHead-to-head comparison:\n\n${BASE_URL}/compare/quotex-vs-iq-option` },
  { category: 'comparison', text: `IQ Option vs Deriv — CySEC vs MFSA. Two regulated veterans compared:\n\n${BASE_URL}/compare/iq-option-vs-deriv` },
  { category: 'comparison', text: `7 best binary options brokers 2026 — ranked after real-money testing:\n\n1. Pocket Option (9.5/10)\n2. Quotex (9.4/10)\n3. IQ Option (9.2/10)\n4. Deriv (9.0/10)\n\nFull rankings:\n\n${BASE_URL}/blog/best-binary-options-brokers` },

  // === STATS & FACTS ===
  { category: 'stat', text: `Break-even win rate at 85% payout = 54.1%.\n\nAt 90% payout = 52.6%.\n\nKnow your math before trading.\n\nThe full breakdown:\n\n${BASE_URL}/blog/binary-options-trading-guide#payout-math` },
  { category: 'stat', text: `Studies suggest 70–90% of retail traders lose money on binary options.\n\nRisk management isn't optional — it's survival.\n\n5 essential rules:\n\n${BASE_URL}/blog/binary-options-trading-guide#risk-management` },
  { category: 'stat', text: `We tested withdrawals from all 7 brokers. Results:\n\n• Fastest: Pocket Option crypto (12 min)\n• Slowest: Bank transfers (3-5 days)\n• Success rate: 98.7%\n\n${BASE_URL}/blog/how-to-withdraw-binary-options` },
  { category: 'stat', text: `Payout comparison (peak, tested):\n\n• Quotex: 90–95%\n• IQ Option: 90–95%\n• Pocket Option: 89–92%\n• Deriv: 88–95%\n\nOff-peak drops 10–15%.\n\n${BASE_URL}/blog/best-binary-options-brokers` },
  { category: 'stat', text: `Binary options trading by country:\n\n🇮🇳 India: Gray area\n🇺🇸 USA: Regulated (NADEX only)\n🇬🇧 UK: Banned\n🇳🇬 Nigeria: Unregulated\n🇵🇭 Philippines: Not regulated\n\nFull country guides on our site.` },
  { category: 'stat', text: `50+ binary options terms explained in plain English.\n\nFrom "asset" to "zero-risk trade" — our complete glossary:\n\n${BASE_URL}/glossary` },
];

export function getRandomTweet(exclude?: string[]): TweetTemplate {
  const available = exclude
    ? tweetPool.filter((t) => !exclude.includes(t.text))
    : tweetPool;
  const pool = available.length > 0 ? available : tweetPool;
  return pool[Math.floor(Math.random() * pool.length)];
}
