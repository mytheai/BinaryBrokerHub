'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import Breadcrumbs from '@/components/Breadcrumbs';

/* ------------------------------------------------------------------ */
/*  Glossary term type                                                 */
/* ------------------------------------------------------------------ */
interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  link?: { href: string; label: string };
}

/* ------------------------------------------------------------------ */
/*  All glossary terms organized by letter                             */
/* ------------------------------------------------------------------ */
const glossaryData: Record<string, GlossaryTerm[]> = {
  A: [
    {
      id: 'asset',
      term: 'Asset',
      definition:
        'An asset is the underlying financial instrument you trade on in binary options — such as a currency pair (EUR/USD), stock (Apple, Tesla), commodity (gold, oil), or index (S&P 500). You do not own the asset; you simply predict whether its price will rise or fall within a set timeframe. The range of available assets varies significantly between brokers.',
    },
    {
      id: 'at-the-money',
      term: 'At-the-Money (ATM)',
      definition:
        'At-the-money describes a binary option where the current market price of the asset is exactly equal to the strike price at expiry. In this scenario the trade typically results in a push — your stake is returned with no profit or loss. Some brokers count ATM outcomes as a loss, so always check the specific platform rules before trading.',
    },
    {
      id: 'auto-trading',
      term: 'Auto-Trading',
      definition:
        'Auto-trading refers to using software, bots, or algorithmic systems to place binary options trades automatically based on predefined rules or signals. While it removes emotional decision-making, auto-trading carries significant risks — poorly configured bots can drain an account rapidly. Always test any auto-trading system on a demo account first and understand exactly what strategy it follows.',
    },
  ],
  B: [
    {
      id: 'binary-option',
      term: 'Binary Option',
      definition:
        'A binary option is a financial derivative with a fixed payout or nothing at all — hence the name "binary" (two outcomes). You predict whether an asset\'s price will be above or below a certain level at a specific expiry time. If your prediction is correct, you receive a predetermined payout (typically 70-95%). If wrong, you lose your invested amount. Binary options are popular for their simplicity but carry high risk.',
      link: { href: '/blog/binary-options-trading-guide', label: 'Read our complete trading guide' },
    },
    {
      id: 'bollinger-bands',
      term: 'Bollinger Bands',
      definition:
        'Bollinger Bands are a technical analysis indicator consisting of a middle moving average line with two outer bands plotted at standard deviations above and below. When price touches or breaks through the outer bands, it often signals overbought or oversold conditions. Binary options traders commonly use Bollinger Bands to identify potential reversal points and time their call or put entries.',
    },
    {
      id: 'broker',
      term: 'Broker',
      definition:
        'A broker is the platform or company that facilitates your binary options trades. The broker sets the payout percentages, provides the trading interface, handles deposits and withdrawals, and determines which assets and expiry times are available. Choosing a reputable, regulated broker is one of the most important decisions a trader can make.',
      link: { href: '/blog/best-binary-options-brokers', label: 'See our top-rated brokers' },
    },
    {
      id: 'breakout',
      term: 'Breakout',
      definition:
        'A breakout occurs when an asset\'s price moves decisively above a resistance level or below a support level, often accompanied by increased volume. Breakout strategies are popular in binary options because the subsequent momentum can make short-term price direction more predictable. False breakouts — where price briefly pierces a level then reverses — are a common trap traders must watch for.',
    },
    {
      id: 'bull-bear',
      term: 'Bull / Bear',
      definition:
        'Bull and bear describe market sentiment or direction. A bull market (or bullish outlook) means prices are rising or expected to rise — favoring call options. A bear market (or bearish outlook) means prices are falling or expected to fall — favoring put options. Understanding whether the overall market trend is bullish or bearish helps binary options traders align their trades with the dominant momentum.',
    },
  ],
  C: [
    {
      id: 'call-option',
      term: 'Call Option',
      definition:
        'A call option in binary trading is a prediction that the asset\'s price will be higher than the strike price at expiry. If the price finishes above the strike, the trade is "in the money" and you receive the payout. Call options are the equivalent of going long — you profit when the market moves up. They are one of the two fundamental trade types alongside put options.',
    },
    {
      id: 'candlestick',
      term: 'Candlestick',
      definition:
        'A candlestick is a type of price chart that displays the open, high, low, and close for a given time period. Each candle\'s body shows the range between open and close, while the wicks (shadows) show the high and low extremes. Candlestick patterns like doji, hammer, and engulfing are widely used by binary options traders to predict short-term price reversals or continuations.',
    },
    {
      id: 'cfd',
      term: 'CFD (Contract for Difference)',
      definition:
        'A CFD is a derivative that lets you speculate on price movements without owning the underlying asset — similar in concept to binary options but with key differences. Unlike binary options, CFDs have no fixed expiry time and your profit or loss scales with the size of the price move. Some brokers like Deriv offer both binary options and CFDs on the same platform.',
      link: { href: '/blog/binary-options-vs-forex', label: 'Binary options vs forex/CFDs compared' },
    },
    {
      id: 'copy-trading',
      term: 'Copy Trading',
      definition:
        'Copy trading allows you to automatically replicate the trades of experienced traders in real time. You select a trader to follow, allocate a portion of your funds, and the platform mirrors their trades in your account proportionally. Pocket Option is especially known for its copy trading feature. While it can be a useful learning tool, past performance never guarantees future results.',
      link: { href: '/blog/binary-options-copy-trading', label: 'Guide to copy trading in binary options' },
    },
    {
      id: 'cysec',
      term: 'CySEC (Cyprus Securities and Exchange Commission)',
      definition:
        'CySEC is the financial regulatory authority of Cyprus and one of the most recognized regulators in the binary options industry. A CySEC license means the broker must comply with EU financial regulations including client fund segregation, regular audits, and dispute resolution. IQ Option is a notable example of a CySEC-regulated binary options platform.',
      link: { href: '/blog/binary-options-regulation', label: 'Understanding broker regulation' },
    },
  ],
  D: [
    {
      id: 'demo-account',
      term: 'Demo Account',
      definition:
        'A demo account is a practice trading account loaded with virtual money that lets you trade binary options without risking real funds. It mirrors the live trading environment so you can test strategies, learn the platform, and build confidence. Most reputable brokers offer free demo accounts — Pocket Option provides $50,000 in virtual funds, while Quotex offers $10,000.',
      link: { href: '/blog/binary-options-demo-account', label: 'Best demo accounts compared' },
    },
    {
      id: 'deposit',
      term: 'Deposit',
      definition:
        'A deposit is the act of funding your broker trading account with real money. Minimum deposit requirements vary between brokers — ranging from $5 at Quotex to $10 at Pocket Option to $250+ at some traditional platforms. Always verify that the broker supports your preferred payment method (credit card, crypto, e-wallet) and check for any deposit fees before transferring funds.',
      link: { href: '/blog/binary-options-minimum-deposit', label: 'Minimum deposit comparison' },
    },
    {
      id: 'deriv',
      term: 'Deriv',
      definition:
        'Deriv (formerly Binary.com) is one of the longest-running binary options brokers, operating since 1999. Regulated by the MFSA (Malta), VFSC, and other authorities, Deriv offers binary options, multipliers, and CFDs. It is notable for its synthetic indices — markets that simulate real-world volatility but trade 24/7. Deriv scores 9.0/10 in our testing.',
      link: { href: '/deriv', label: 'Read our full Deriv review' },
    },
    {
      id: 'digital-option',
      term: 'Digital Option',
      definition:
        'Digital option is an alternative name for a binary option used by some brokers and in certain regulatory jurisdictions. The term emphasizes the digital (yes/no) nature of the payout — you either receive a fixed return or lose your stake. IQ Option uses the term "digital options" to distinguish their product with variable strike prices from standard binary options.',
    },
    {
      id: 'drawdown',
      term: 'Drawdown',
      definition:
        'Drawdown measures the decline from a peak balance to a subsequent trough in your trading account, usually expressed as a percentage. A 20% drawdown means your account dropped from $1,000 to $800 before recovering. Monitoring drawdown is critical for binary options traders because the fixed-loss nature of each trade means losing streaks can erode capital rapidly without proper money management.',
    },
  ],
  E: [
    {
      id: 'ema',
      term: 'EMA (Exponential Moving Average)',
      definition:
        'The exponential moving average is a technical indicator that gives more weight to recent price data compared to a simple moving average. Common EMA periods used in binary options include 9, 21, and 50. Traders often use EMA crossovers (e.g., the 9 EMA crossing above the 21 EMA) as a signal to enter call options, or crossing below as a signal for put options.',
    },
    {
      id: 'expiry-time',
      term: 'Expiry Time',
      definition:
        'The expiry time is the moment when a binary option contract ends and the outcome is determined. Expiry times range from as short as 5 seconds (turbo options) to as long as several months. Choosing the right expiry is crucial — too short and random noise dominates; too long and you tie up capital. Most binary options traders focus on 1-minute to 5-minute expiries for active trading.',
    },
    {
      id: 'expert-option',
      term: 'ExpertOption',
      definition:
        'ExpertOption is a binary options broker offering trading on 100+ assets with expiry times from 60 seconds to 4 hours. It features social trading and a multi-chart layout. ExpertOption operates under VFSC regulation and is popular in emerging markets. It scores 7.8/10 in our testing, with strengths in platform design but lower marks for payout rates.',
      link: { href: '/expert-option', label: 'Read our ExpertOption review' },
    },
  ],
  F: [
    {
      id: 'finacom',
      term: 'FinaCom (Financial Commission)',
      definition:
        'The Financial Commission (FinaCom) is an independent dispute resolution organization for forex and binary options traders. Unlike government regulators, FinaCom is a self-regulatory body that member brokers join voluntarily. It offers a compensation fund of up to $20,000 per complaint. Pocket Option and Quotex are both members of FinaCom, providing an extra layer of trader protection.',
    },
    {
      id: 'fixed-time-trade',
      term: 'Fixed Time Trade (FTT)',
      definition:
        'Fixed time trade is a term used by some brokers (notably Olymp Trade) as a rebranded name for binary options. The concept is identical — you predict whether a price will be above or below a level at a fixed expiry time. The rebranding helps these platforms differentiate themselves and, in some cases, navigate regulatory restrictions on the term "binary options."',
    },
    {
      id: 'forex',
      term: 'Forex (Foreign Exchange)',
      definition:
        'Forex, or foreign exchange, is the global market for trading currency pairs like EUR/USD, GBP/JPY, and USD/CHF. Currency pairs are the most popular underlying assets in binary options trading because of their high liquidity, tight spreads, and round-the-clock availability during weekdays. Many binary options traders focus exclusively on major forex pairs for their predictability.',
      link: { href: '/blog/binary-options-vs-forex', label: 'Binary options vs forex trading' },
    },
    {
      id: 'fundamental-analysis',
      term: 'Fundamental Analysis',
      definition:
        'Fundamental analysis involves evaluating economic data, news events, and financial reports to predict asset price movements. In binary options, this means watching for economic releases (GDP, employment data, interest rate decisions), earnings reports, and geopolitical events. Major news events often cause sharp price moves that create both opportunities and risks for binary options traders.',
    },
  ],
  G: [
    {
      id: 'greeks',
      term: 'Greeks (Delta, Gamma)',
      definition:
        'The Greeks are mathematical measures used to assess the sensitivity of an option\'s price to various factors. Delta measures how much an option\'s value changes relative to price movement in the underlying asset. Gamma measures the rate of change of delta. While Greeks are more commonly associated with traditional options, understanding delta is useful for binary options traders — a high delta means the option has a strong probability of finishing in the money.',
    },
  ],
  H: [
    {
      id: 'hedge',
      term: 'Hedge',
      definition:
        'Hedging in binary options means opening an opposing trade to reduce potential losses on an existing position. For example, if you hold a call option and the market starts turning against you, placing a put option on the same asset can limit your maximum loss. While hedging reduces risk, it also reduces potential profit, and the combined cost of both trades may exceed the payout on either one.',
    },
    {
      id: 'high-low-option',
      term: 'High/Low Option',
      definition:
        'A high/low option is the most common type of binary option. You simply predict whether the asset\'s price will finish higher or lower than the current price at expiry. "High" is equivalent to a call (price goes up) and "Low" is equivalent to a put (price goes down). High/low options are the simplest binary trade type and are the starting point for most beginners.',
    },
  ],
  I: [
    {
      id: 'ifmrrc',
      term: 'IFMRRC (International Financial Market Relations Regulation Center)',
      definition:
        'The IFMRRC is a self-regulatory organization that certifies binary options and forex brokers. While it provides a certification process and dispute resolution mechanism, it is not a government regulator and its oversight is less stringent than bodies like CySEC or MFSA. Quotex holds IFMRRC certification. Traders should understand the difference between government regulation and industry self-regulation.',
    },
    {
      id: 'in-the-money',
      term: 'In-the-Money (ITM)',
      definition:
        'In-the-money means your binary option is currently on the winning side — the asset price is above the strike for a call, or below the strike for a put. If the option expires in-the-money, you receive the full payout. An ITM win rate of 55-60% is generally considered profitable in binary options, depending on the payout percentage offered by your broker.',
    },
    {
      id: 'iq-option',
      term: 'IQ Option',
      definition:
        'IQ Option is a CySEC-regulated trading platform offering binary options (in permitted regions), digital options, forex, stocks, and crypto. Founded in 2013, it is known for its polished trading interface, low $10 minimum deposit, and extensive educational resources. IQ Option scores 9.2/10 in our testing and is one of the most trusted names in the industry.',
      link: { href: '/iq-option', label: 'Read our IQ Option review' },
    },
    {
      id: 'indicator',
      term: 'Indicator',
      definition:
        'An indicator is a mathematical calculation applied to price and/or volume data that generates signals to help traders make decisions. Common binary options indicators include RSI, MACD, Bollinger Bands, and moving averages. No single indicator is foolproof — experienced traders typically combine two or three indicators to confirm signals before entering a trade.',
      link: { href: '/blog/binary-options-strategy-beginners', label: 'Beginner strategy guide with indicators' },
    },
  ],
  K: [
    {
      id: 'kyc',
      term: 'KYC (Know Your Customer)',
      definition:
        'KYC is a regulatory requirement that obliges brokers to verify your identity before allowing withdrawals (and sometimes before trading). You will typically need to submit a government-issued ID, proof of address, and sometimes a selfie or payment method verification. While KYC adds friction, it is a sign of a legitimate, regulated broker that takes compliance and anti-money-laundering seriously.',
      link: { href: '/blog/how-to-withdraw-binary-options', label: 'Withdrawal and KYC guide' },
    },
  ],
  L: [
    {
      id: 'ladder-option',
      term: 'Ladder Option',
      definition:
        'A ladder option offers multiple price levels (rungs) rather than a single strike price. You predict whether the asset will reach each level, with higher rungs offering higher payouts because they are less likely to be reached. Ladder options provide more flexibility and potentially higher returns than standard high/low trades, but they also carry greater risk and require stronger directional conviction.',
    },
    {
      id: 'leverage',
      term: 'Leverage',
      definition:
        'Leverage allows you to control a larger market position with a smaller amount of capital. While standard binary options do not use leverage (you risk only your trade amount), some brokers offer leveraged products like multipliers or CFDs alongside binary options. Leverage amplifies both gains and losses, and inexperienced traders should use it cautiously or avoid it altogether.',
    },
    {
      id: 'liquidity',
      term: 'Liquidity',
      definition:
        'Liquidity refers to how easily an asset can be bought or sold without significantly affecting its price. Highly liquid assets — like EUR/USD or gold — have tight spreads and accurate pricing, making them ideal for binary options trading. Low-liquidity assets may experience slippage or wider spreads, which can affect trade execution and pricing on your platform.',
    },
  ],
  M: [
    {
      id: 'macd',
      term: 'MACD (Moving Average Convergence Divergence)',
      definition:
        'MACD is a momentum indicator that shows the relationship between two exponential moving averages (typically the 12 and 26 EMA). When the MACD line crosses above the signal line, it generates a bullish signal (potential call option). When it crosses below, it generates a bearish signal (potential put option). MACD is one of the most widely used indicators in binary options technical analysis.',
    },
    {
      id: 'margin',
      term: 'Margin',
      definition:
        'Margin is the collateral required to open a leveraged trading position. In standard binary options, margin does not apply — you simply invest a fixed amount per trade. However, if your broker offers CFDs or multipliers alongside binary options, those products require margin. A margin call occurs when your account equity falls below the required minimum, forcing position closure or additional deposits.',
    },
    {
      id: 'martingale',
      term: 'Martingale',
      definition:
        'Martingale is a high-risk money management strategy where you double your trade size after every loss, so that one win recovers all previous losses plus a profit equal to the original stake. While mathematically appealing, Martingale is extremely dangerous in binary options because a losing streak of just 6-7 trades can wipe out even a large account. Most experienced traders strongly advise against using it.',
    },
    {
      id: 'mfsa',
      term: 'MFSA (Malta Financial Services Authority)',
      definition:
        'The MFSA is Malta\'s financial regulatory body and an EU-recognized authority that oversees financial services including binary options. An MFSA license is considered a strong trust indicator because it requires compliance with EU financial directives, including client fund segregation and regular audits. Deriv is a notable broker holding MFSA regulation.',
    },
    {
      id: 'money-management',
      term: 'Money Management',
      definition:
        'Money management encompasses the rules and strategies you use to control risk and preserve capital in binary options trading. The most fundamental rule is to never risk more than 1-5% of your account balance on a single trade. Consistent money management is often the difference between profitable and unprofitable traders — even a good strategy fails without disciplined position sizing.',
      link: { href: '/blog/binary-options-strategy-beginners', label: 'Strategy and money management basics' },
    },
  ],
  N: [
    {
      id: 'nadex',
      term: 'Nadex',
      definition:
        'Nadex (North American Derivatives Exchange) is a CFTC-regulated exchange based in the United States that offers binary options and knock-out contracts. Unlike most binary options brokers, Nadex operates as a regulated exchange where traders buy and sell contracts at market-determined prices. It is one of only two legal options for US-based binary options traders.',
    },
    {
      id: 'no-touch-option',
      term: 'No-Touch Option',
      definition:
        'A no-touch option pays out if the asset price does not reach a specified price level at any point before expiry. This is the opposite of a one-touch option. No-touch options are favored during low-volatility, range-bound markets where the asset is expected to stay within a narrow band. They typically offer lower payouts than touch options because the probability of winning is higher.',
    },
  ],
  O: [
    {
      id: 'one-touch-option',
      term: 'One-Touch Option',
      definition:
        'A one-touch option pays out if the asset price reaches (touches) a specified target price at any point before expiry — even if it later moves away from that level. Payouts on one-touch options can be very high (200-500%+) because the target is typically set far from the current price. These options are best suited for volatile markets where sharp price movements are expected.',
    },
    {
      id: 'otc',
      term: 'OTC (Over-the-Counter)',
      definition:
        'OTC trading in binary options refers to markets that remain open outside standard exchange hours — typically on weekends and holidays. OTC prices are derived from algorithms rather than live market feeds, meaning the broker sets the pricing. OTC assets allow traders to trade 24/7, but spreads may be wider and price behavior can differ from regular market conditions.',
      link: { href: '/blog/otc-trading-binary-options', label: 'OTC trading explained' },
    },
    {
      id: 'out-of-the-money',
      term: 'Out-of-the-Money (OTM)',
      definition:
        'Out-of-the-money means your binary option is currently on the losing side — the asset price is below the strike for a call, or above the strike for a put. If the option expires OTM, you lose your invested amount. Understanding OTM risk is essential for binary options trading because unlike traditional options, there is no partial value — OTM binary options are worth exactly zero at expiry.',
    },
  ],
  P: [
    {
      id: 'payout',
      term: 'Payout',
      definition:
        'Payout is the return you receive on a winning binary options trade, expressed as a percentage. If a broker offers an 85% payout and you invest $100 on a winning trade, you receive $185 ($100 stake + $85 profit). Payouts vary by broker, asset, and expiry time — typically ranging from 70% to 95%. Higher payouts mean you need a lower win rate to be profitable.',
    },
    {
      id: 'pin-bar',
      term: 'Pin Bar',
      definition:
        'A pin bar (pinocchio bar) is a candlestick pattern characterized by a small body and a long wick (shadow) on one side. A bullish pin bar has a long lower wick, indicating that sellers pushed the price down but buyers pushed it back up — signaling a potential upward reversal. Pin bars are one of the most reliable candlestick patterns for binary options entry signals, especially at support and resistance levels.',
    },
    {
      id: 'pocket-option',
      term: 'Pocket Option',
      definition:
        'Pocket Option is a binary options broker founded in 2017, known for high payouts (up to 92%), an extensive copy trading system, and social trading features. It offers 100+ tradable assets with expiry times from 5 seconds to 4 hours. Regulated by IFMRRC and a member of FinaCom, Pocket Option scores 9.5/10 in our testing — the highest of any broker we have reviewed.',
      link: { href: '/pocket-option', label: 'Read our full Pocket Option review' },
    },
    {
      id: 'put-option',
      term: 'Put Option',
      definition:
        'A put option in binary trading is a prediction that the asset\'s price will be lower than the strike price at expiry. If the price finishes below the strike, the trade is in the money and you receive the payout. Put options are the equivalent of going short — you profit when the market moves down. Together with call options, puts form the two fundamental trade directions in binary options.',
    },
  ],
  Q: [
    {
      id: 'quotex',
      term: 'Quotex',
      definition:
        'Quotex is a binary options broker launched in 2019 that has rapidly gained popularity for its clean interface, high payouts (up to 95%), and $5 minimum deposit — one of the lowest in the industry. Quotex offers digital options on forex, crypto, commodities, and stocks with expiry times from 1 second to 4 hours. It holds IFMRRC certification and scores 9.4/10 in our testing.',
      link: { href: '/quotex', label: 'Read our full Quotex review' },
    },
  ],
  R: [
    {
      id: 'range-option',
      term: 'Range Option (Boundary Option)',
      definition:
        'A range or boundary option requires you to predict whether an asset\'s price will finish inside or outside a specified price range at expiry. "In range" pays out if the price stays between two boundary levels; "out of range" pays out if it breaks above or below them. Range options are ideal for trading during consolidation periods or ahead of news events that might cause breakouts.',
    },
    {
      id: 'regulation',
      term: 'Regulation',
      definition:
        'Regulation refers to the oversight of binary options brokers by government authorities or recognized financial bodies. Regulated brokers must meet standards for client fund protection, transparency, fair pricing, and dispute resolution. Key regulators include CySEC (Cyprus/EU), MFSA (Malta), ASIC (Australia), and the CFTC (US). Self-regulatory bodies like FinaCom and IFMRRC provide additional (but less stringent) oversight.',
      link: { href: '/blog/binary-options-regulation', label: 'Complete guide to broker regulation' },
    },
    {
      id: 'resistance',
      term: 'Resistance',
      definition:
        'Resistance is a price level where selling pressure has historically been strong enough to prevent the asset from rising further. When price approaches resistance, it tends to stall or reverse — making it a common entry point for put options. If price breaks above resistance, it can signal a bullish breakout, and the former resistance level often becomes new support.',
    },
    {
      id: 'roi',
      term: 'Return on Investment (ROI)',
      definition:
        'ROI measures the profitability of your binary options trading as a percentage of your total invested capital. If you deposited $1,000 and your account is now worth $1,200, your ROI is 20%. Tracking ROI over time is more meaningful than tracking individual trade wins, because it accounts for both winning and losing trades and reflects your actual portfolio growth.',
    },
    {
      id: 'rsi',
      term: 'RSI (Relative Strength Index)',
      definition:
        'RSI is a momentum oscillator that measures the speed and magnitude of recent price changes on a scale of 0-100. Readings above 70 suggest an asset is overbought (potential put signal), while readings below 30 suggest it is oversold (potential call signal). RSI is one of the most popular indicators for binary options trading, especially on 1-5 minute chart timeframes.',
    },
  ],
  S: [
    {
      id: 'signal',
      term: 'Signal',
      definition:
        'A trading signal is an alert or recommendation suggesting a specific trade — typically specifying the asset, direction (call/put), and expiry time. Signals can come from technical analysis, algorithmic systems, or professional signal providers. While signals can supplement your own analysis, relying solely on third-party signals without understanding the underlying logic is risky and unsustainable long-term.',
    },
    {
      id: 'slippage',
      term: 'Slippage',
      definition:
        'Slippage occurs when a trade is executed at a different price than expected, typically during periods of high volatility or low liquidity. In binary options, slippage can mean your trade opens at a slightly worse price than what was displayed, potentially affecting the outcome. Minimal slippage is a sign of a well-engineered broker platform and fair trade execution.',
    },
    {
      id: 'spread',
      term: 'Spread',
      definition:
        'The spread is the difference between the buy (ask) price and sell (bid) price of an asset. In binary options, you do not pay a traditional spread as you would in forex or CFD trading — instead, the broker\'s profit is built into the payout percentage. However, understanding spreads helps you evaluate the fairness of OTC pricing and compare overall trading costs between platforms.',
    },
    {
      id: 'stop-loss',
      term: 'Stop Loss',
      definition:
        'A stop loss is an order that automatically closes a position when the price reaches a specified level to limit losses. Standard binary options do not have stop losses — your maximum loss is always your invested amount. However, some brokers offer early close or sell-back features that function similarly, allowing you to exit a trade before expiry at a reduced loss (or reduced profit).',
    },
    {
      id: 'support',
      term: 'Support',
      definition:
        'Support is a price level where buying pressure has historically been strong enough to prevent the asset from falling further. When price approaches support, it tends to bounce upward — making it a common entry point for call options. If price breaks below support, it can signal a bearish breakdown, and the former support level often becomes new resistance.',
    },
    {
      id: 'synthetic-indices',
      term: 'Synthetic Indices',
      definition:
        'Synthetic indices are simulated markets created by algorithms to mimic real-world price volatility and behavior. Unlike real assets, synthetic indices trade 24/7 (including weekends) and are unaffected by real-world news events. Deriv is the pioneering broker for synthetic indices, offering products like Volatility 10, Volatility 75, Crash, and Boom indices. They are popular for weekend trading when traditional markets are closed.',
      link: { href: '/blog/deriv-synthetic-indices-guide', label: 'Guide to Deriv synthetic indices' },
    },
  ],
  T: [
    {
      id: 'technical-analysis',
      term: 'Technical Analysis',
      definition:
        'Technical analysis is the study of historical price charts, patterns, and indicators to forecast future price movements. In binary options, technical analysis is the dominant approach because most trades have short expiry times where fundamental factors have less impact. Key tools include candlestick patterns, support/resistance levels, moving averages, RSI, MACD, and Bollinger Bands.',
      link: { href: '/blog/binary-options-strategy-beginners', label: 'Beginner technical analysis guide' },
    },
    {
      id: 'touch-no-touch',
      term: 'Touch/No-Touch',
      definition:
        'Touch/no-touch is a category of binary options where you predict whether the price will or will not reach a specific target level at any point before expiry. Touch options pay out if the target is hit (even momentarily), while no-touch options pay out if the target is never reached. These options are an alternative to standard high/low trades and are useful for trading around expected volatility events.',
    },
    {
      id: 'tournament',
      term: 'Tournament',
      definition:
        'A tournament is a competitive trading event hosted by some binary options brokers where traders compete for prizes based on their trading performance over a set period. Pocket Option is especially known for frequent trading tournaments with prize pools. Tournaments can be a low-cost way to test strategies under pressure, though the competitive format may encourage riskier trading behavior than normal.',
    },
    {
      id: 'trend',
      term: 'Trend',
      definition:
        'A trend is the overall direction in which an asset\'s price is moving over time. An uptrend consists of higher highs and higher lows; a downtrend consists of lower highs and lower lows. Trading with the trend (buying calls in an uptrend, puts in a downtrend) is one of the most fundamental and reliable strategies in binary options. Identifying trend direction is typically the first step in any trade analysis.',
    },
    {
      id: 'turbo-option',
      term: 'Turbo Option',
      definition:
        'A turbo option is a binary option with a very short expiry time — typically between 5 seconds and 5 minutes. Turbo options are popular for their fast-paced action and the ability to make many trades in a short session. However, extremely short timeframes are more susceptible to random price noise, making consistent profitability more challenging. They require quick decision-making and strong technical analysis skills.',
    },
  ],
  V: [
    {
      id: 'volatility',
      term: 'Volatility',
      definition:
        'Volatility measures the rate and magnitude of price changes in an asset. High volatility means the price is moving rapidly in large swings; low volatility means the price is relatively stable. Binary options traders must adapt their strategy to the current volatility — high volatility favors touch options and breakout strategies, while low volatility favors range options and mean-reversion approaches.',
    },
    {
      id: 'vix',
      term: 'Volatility Index (VIX)',
      definition:
        'The VIX, often called the "fear index," measures the expected volatility of the S&P 500 over the next 30 days based on options prices. A rising VIX indicates increased market uncertainty and typically coincides with falling stock prices. Binary options traders use VIX readings as a broader market context tool — high VIX environments may warrant more cautious position sizing or a shift to volatility-based strategies.',
    },
  ],
  W: [
    {
      id: 'win-rate',
      term: 'Win Rate',
      definition:
        'Win rate is the percentage of your total trades that finish in the money. If you win 55 out of 100 trades, your win rate is 55%. In binary options, the required win rate for profitability depends directly on the payout percentage — with an 85% payout, you need a win rate above approximately 54% to break even. Tracking your win rate across different assets and timeframes helps identify where your strategy performs best.',
    },
    {
      id: 'withdrawal',
      term: 'Withdrawal',
      definition:
        'A withdrawal is the process of transferring funds from your broker trading account to your personal bank account, e-wallet, or crypto wallet. Withdrawal processing times, fees, and minimum amounts vary significantly between brokers. Reputable brokers process withdrawals within 1-3 business days. Always complete KYC verification proactively to avoid delays when you want to withdraw.',
      link: { href: '/blog/how-to-withdraw-binary-options', label: 'How to withdraw from binary options brokers' },
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Active alphabet letters (letters that have terms)                  */
/* ------------------------------------------------------------------ */
const activeLetters = Object.keys(glossaryData).sort();

/* ------------------------------------------------------------------ */
/*  Full alphabet for navigation display                               */
/* ------------------------------------------------------------------ */
const fullAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
export default function GlossaryPage() {
  const locale = useLocale();

  return (
    <>
      <Breadcrumbs items={[{ label: 'Glossary' }]} />

      <main className="section-container pb-16">
        {/* -------------------------------------------------------- */}
        {/*  Hero                                                     */}
        {/* -------------------------------------------------------- */}
        <section className="text-center py-10 sm:py-14">
          <span className="badge-green mb-4 inline-block">Education</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Binary Options Glossary — 50+ Trading Terms Explained
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Whether you are a complete beginner or an experienced trader, this glossary covers every
            essential binary options term in plain language. Bookmark this page as your go-to reference.
          </p>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Alphabet Jump Navigation                                 */}
        {/* -------------------------------------------------------- */}
        <nav aria-label="Alphabet navigation" className="glass-card p-4 sm:p-6 mb-10">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">Jump to letter</p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {fullAlphabet.map((letter) => {
              const isActive = activeLetters.includes(letter);
              return isActive ? (
                <a
                  key={letter}
                  href={`#section-${letter}`}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 font-bold text-sm sm:text-base hover:bg-emerald-500/20 transition-colors"
                >
                  {letter}
                </a>
              ) : (
                <span
                  key={letter}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-gray-800/40 text-gray-600 font-bold text-sm sm:text-base cursor-default"
                >
                  {letter}
                </span>
              );
            })}
          </div>
        </nav>

        {/* -------------------------------------------------------- */}
        {/*  Term count summary                                       */}
        {/* -------------------------------------------------------- */}
        <div className="text-center mb-10">
          <p className="text-gray-500 text-sm">
            {Object.values(glossaryData).reduce((total, terms) => total + terms.length, 0)} terms
            across {activeLetters.length} sections — last updated May 2026
          </p>
        </div>

        {/* -------------------------------------------------------- */}
        {/*  Glossary Sections                                        */}
        {/* -------------------------------------------------------- */}
        {activeLetters.map((letter) => (
          <section key={letter} id={`section-${letter}`} className="mb-12 scroll-mt-24">
            {/* Letter heading */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 font-bold text-2xl">
                {letter}
              </div>
              <div className="flex-1 h-px bg-gray-800" />
              <a
                href="#section-A"
                className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
                aria-label="Back to top"
              >
                ↑ Top
              </a>
            </div>

            {/* Terms grid */}
            <div className="grid gap-4 sm:gap-5">
              {glossaryData[letter].map((term) => (
                <div key={term.id} id={term.id} className="glass-card p-5 sm:p-6 scroll-mt-24">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {term.term}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {term.definition}
                  </p>
                  {term.link && (
                    <Link
                      href={`/${locale}${term.link.href}`}
                      className="inline-flex items-center gap-1.5 text-emerald-400 text-sm mt-3 hover:text-emerald-300 transition-colors"
                    >
                      {term.link.label}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* -------------------------------------------------------- */}
        {/*  Risk Disclaimer                                          */}
        {/* -------------------------------------------------------- */}
        <div className="glass-card p-5 sm:p-6 mb-12 border border-amber-500/20">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <p className="text-amber-400 font-semibold text-sm mb-1">Risk Disclaimer</p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Binary options trading carries a high level of risk and may not be suitable for all investors. You could
                lose all of your invested capital. The definitions on this page are for educational purposes only and
                do not constitute financial advice. Always practice with a demo account before trading with real money,
                and never invest more than you can afford to lose.
              </p>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------- */}
        {/*  Related Resources                                        */}
        {/* -------------------------------------------------------- */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Trading Guide',
                desc: 'Complete beginner guide to binary options trading',
                href: `/${locale}/blog/binary-options-trading-guide`,
                badge: 'Guide',
              },
              {
                title: 'Strategy for Beginners',
                desc: 'Proven strategies and risk management techniques',
                href: `/${locale}/blog/binary-options-strategy-beginners`,
                badge: 'Strategy',
              },
              {
                title: 'Broker Comparison',
                desc: 'Side-by-side comparison of all reviewed brokers',
                href: `/${locale}/compare`,
                badge: 'Compare',
              },
              {
                title: 'About Our Team',
                desc: 'Meet the analysts behind our reviews and testing',
                href: `/${locale}/about`,
                badge: 'About',
              },
            ].map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="glass-card p-5 hover:border-emerald-500/30 transition-colors group"
              >
                <span className="badge-green text-[10px] mb-2 inline-block">{resource.badge}</span>
                <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors mb-1">
                  {resource.title}
                </h3>
                <p className="text-gray-500 text-sm">{resource.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
