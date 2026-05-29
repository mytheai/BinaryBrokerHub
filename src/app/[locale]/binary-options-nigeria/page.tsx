'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function BinaryOptionsNigeriaPage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Country Guides', href: undefined }, { label: 'Binary Options in Nigeria' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 to-transparent" />
        <div className="relative section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="badge-gold">Country Guide</span>
              <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">Updated: May 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Binary Options in Nigeria 2026
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
              Complete guide to binary options trading for Nigerian traders. Legal status under SEC Nigeria,
              best brokers with Naira deposits, OPay and crypto support, tax implications, and how to get started safely.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Legal Status: <span className="text-yellow-400 font-semibold">Unregulated</span> &bull; No SEC Nigeria oversight &bull; Offshore trading common
            </p>
          </div>
        </div>
      </section>

      {/* Legal Status */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Legal Status of Binary Options in Nigeria</h2>
          <div className="glass-card p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Unregulated</h3>
                <p className="text-gray-300 leading-relaxed">
                  Binary options trading in Nigeria is <strong className="text-white">unregulated</strong>.
                  The Securities and Exchange Commission of Nigeria (SEC Nigeria) does not regulate or oversee binary
                  options trading. There is no specific Nigerian law that bans individuals from trading binary options
                  through offshore platforms.
                </p>
              </div>
            </div>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                <strong className="text-white">SEC Nigeria&apos;s scope:</strong> SEC Nigeria regulates the capital
                market, including stocks, bonds, and collective investment schemes. Binary options do not fall under
                any recognized securities or derivatives category in Nigerian financial law, meaning they sit outside
                SEC&apos;s regulatory perimeter entirely.
              </p>
              <p>
                <strong className="text-white">The CBN angle:</strong> The Central Bank of Nigeria (CBN) regulates
                banking, foreign exchange, and payment systems. While CBN has issued directives on cryptocurrency and
                forex, binary options trading is not specifically addressed. CBN&apos;s focus remains on banking
                operations and monetary policy rather than retail trading products.
              </p>
              <p>
                <strong className="text-white">Practical reality:</strong> Millions of Nigerian traders actively use
                offshore binary options platforms. Deposits via bank transfer, OPay, Palmpay, and cryptocurrency are
                processed without regulatory interference. However, since these brokers are not regulated in Nigeria,
                traders have <strong className="text-yellow-400">no domestic legal recourse</strong> if a dispute
                arises with an offshore broker.
              </p>
              <p>
                <strong className="text-white">Our recommendation:</strong> While there is no ban on binary options
                trading in Nigeria, the lack of regulation means you must exercise extra caution. Use only well-established
                brokers with international regulation, start with small amounts, and keep detailed records of all
                transactions for tax purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Brokers for Nigeria */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Best Binary Options Brokers for Nigeria</h2>
          <p className="text-gray-400 mb-8">
            These brokers accept Nigerian traders, support Naira deposits, and offer popular local payment methods like OPay and crypto.
          </p>

          {/* Broker Comparison Table */}
          <div className="glass-card overflow-x-auto mb-8">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 text-gray-400 font-semibold">Broker</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Our Score</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Min. Deposit</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Peak Payout</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">NGN Deposits</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Crypto</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5 bg-emerald-500/5">
                  <td className="px-4 py-3 font-semibold text-white">Pocket Option</td>
                  <td className="px-4 py-3"><span className="badge-blue">9.5/10</span></td>
                  <td className="px-4 py-3">$5</td>
                  <td className="px-4 py-3">89–92%</td>
                  <td className="px-4 py-3 text-emerald-400">Yes</td>
                  <td className="px-4 py-3 text-emerald-400">Yes</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-3 font-semibold text-white">Quotex</td>
                  <td className="px-4 py-3"><span className="badge-blue">9.4/10</span></td>
                  <td className="px-4 py-3">$10</td>
                  <td className="px-4 py-3">90–95%</td>
                  <td className="px-4 py-3 text-emerald-400">Yes</td>
                  <td className="px-4 py-3 text-emerald-400">Yes</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-3 font-semibold text-white">IQ Option</td>
                  <td className="px-4 py-3"><span className="badge-blue">9.2/10</span></td>
                  <td className="px-4 py-3">$10</td>
                  <td className="px-4 py-3">90–95%</td>
                  <td className="px-4 py-3 text-emerald-400">Yes</td>
                  <td className="px-4 py-3 text-emerald-400">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Top Pick: Pocket Option */}
          <div className="glass-card p-6 mb-6 border border-emerald-500/30">
            <div className="flex items-center gap-2 mb-3">
              <span className="badge-green">Best for Nigeria</span>
              <h3 className="text-xl font-bold">#1 Pocket Option</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Pocket Option is our top pick for Nigerian traders. With the <strong className="text-white">lowest
              minimum deposit at just $5</strong>, it&apos;s the most accessible broker for beginners. The platform
              is crypto-friendly, supporting USDT (TRC-20 and ERC-20), Bitcoin, and other cryptocurrencies which
              are popular among Nigerian traders. Pocket Option also offers copy trading, 180+ assets, and a
              social trading feature that lets beginners learn from experienced traders.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaButton broker="pocketOption" label="Open Pocket Option Account" campaign="nigeria_po" size="sm" />
              <CtaButton broker="pocketOption" type="demo" label="Try Demo" variant="secondary" campaign="nigeria_po" size="sm" />
            </div>
          </div>

          {/* Quotex */}
          <div className="glass-card p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="badge-blue">Highest Payouts</span>
              <h3 className="text-xl font-bold">#2 Quotex</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Quotex offers the <strong className="text-white">highest payouts in the industry at up to 98%</strong>,
              making it a top choice for Nigerian traders focused on maximizing returns. The platform has a clean,
              modern interface and supports multiple deposit methods including crypto and bank transfers. Quotex
              provides a generous demo account with $10,000 virtual balance for practice before committing real funds.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaButton broker="quotex" label="Open Quotex Account" campaign="nigeria_quotex" size="sm" />
              <CtaButton broker="quotex" type="demo" label="Try Demo" variant="secondary" campaign="nigeria_quotex" size="sm" />
            </div>
          </div>

          {/* IQ Option */}
          <div className="glass-card p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="badge-blue">Most Trusted</span>
              <h3 className="text-xl font-bold">#3 IQ Option</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              IQ Option is one of the <strong className="text-white">most established brokers globally</strong> with
              over 100 million registered accounts worldwide. Nigerian traders benefit from a polished trading
              platform with advanced charting tools, educational resources, and fast order execution. IQ Option
              supports bank transfers and crypto deposits for Nigerian users.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaButton broker="iqOption" label="Open IQ Option Account" campaign="nigeria_iq" size="sm" />
              <CtaButton broker="iqOption" type="demo" label="Try Demo" variant="secondary" campaign="nigeria_iq" size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Payment Methods for Nigerian Traders</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold text-emerald-400 mb-4">Popular Deposit Methods</h3>
              <ul className="space-y-3">
                {[
                  { method: 'Bank Transfer (Naira)', speed: '10-60 min', fee: 'Free or low' },
                  { method: 'OPay', speed: 'Instant', fee: 'Free' },
                  { method: 'Palmpay', speed: 'Instant', fee: 'Free' },
                  { method: 'Crypto (USDT TRC-20)', speed: '5-15 min', fee: 'Network fee only' },
                  { method: 'Crypto (Bitcoin)', speed: '15-60 min', fee: 'Network fee only' },
                  { method: 'Paystack / Flutterwave', speed: 'Instant', fee: 'May vary' },
                ].map((item) => (
                  <li key={item.method} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <span className="text-emerald-400 mt-0.5 font-bold">+</span>
                    <div>
                      <span className="text-white font-medium">{item.method}</span>
                      <span className="text-gray-500 ml-2">({item.speed} | {item.fee})</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-bold text-blue-400 mb-4">Withdrawal Methods</h3>
              <ul className="space-y-3">
                {[
                  { method: 'Bank Transfer (NGN)', speed: '1-3 business days', min: '$10' },
                  { method: 'Crypto (USDT)', speed: '5-60 min', min: '$10' },
                  { method: 'OPay / Palmpay', speed: '1-24 hours', min: 'Varies' },
                  { method: 'Bitcoin', speed: '15-60 min', min: '$20' },
                ].map((item) => (
                  <li key={item.method} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <span className="text-blue-400 mt-0.5 font-bold">+</span>
                    <div>
                      <span className="text-white font-medium">{item.method}</span>
                      <span className="text-gray-500 ml-2">({item.speed} | Min: {item.min})</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <p className="text-xs text-yellow-300">
                  <strong>Note:</strong> Cryptocurrency (especially USDT) is the most reliable deposit and withdrawal
                  method for Nigerian traders, avoiding potential bank transfer delays or restrictions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Implications */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Tax Implications for Nigerian Traders</h2>
          <div className="glass-card p-8">
            <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">How Binary Options Profits Are Taxed</h3>
                <p>
                  In principle, binary options trading profits in Nigeria fall under <strong className="text-white">investment
                  income</strong> and are subject to taxation by the Federal Inland Revenue Service (FIRS). Under
                  the Personal Income Tax Act (PITA), investment income is taxable at applicable rates. However,
                  practical enforcement on offshore binary options trading is currently limited.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/[0.03] rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Key Tax Considerations</h4>
                  <ul className="space-y-1 text-xs">
                    <li>FIRS taxes investment income under PITA</li>
                    <li>Capital Gains Tax (CGT) at <span className="text-yellow-400">10%</span> may apply</li>
                    <li>No specific binary options tax guidance exists</li>
                    <li>Enforcement on offshore trading is <span className="text-emerald-400">minimal</span></li>
                    <li>Large withdrawals to bank accounts may attract attention</li>
                    <li>Companies Act taxes apply if trading through a business</li>
                  </ul>
                </div>
                <div className="p-4 bg-white/[0.03] rounded-lg">
                  <h4 className="font-semibold text-white mb-2">What You Should Track</h4>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-start gap-2"><span className="text-emerald-400">&#10003;</span> Total deposits made</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400">&#10003;</span> Total withdrawals received</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400">&#10003;</span> Net profit/loss for the year</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400">&#10003;</span> Screenshots of trade history</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400">&#10003;</span> Broker statements (if available)</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400">&#10003;</span> Exchange rates used for conversions</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <p className="text-yellow-300 text-xs">
                  <strong>Disclaimer:</strong> This is general information, not tax advice. Nigerian tax laws are
                  evolving, especially regarding digital assets and online trading. Consult a qualified tax
                  professional for personalized advice on your specific situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start Trading */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">How to Start Trading Binary Options in Nigeria</h2>
          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Choose a Reputable Broker',
                desc: 'Select a broker from our recommended list above. We suggest Pocket Option for the lowest minimum deposit ($5) and crypto-friendly experience, or Quotex for the highest payouts.',
              },
              {
                step: '2',
                title: 'Start with a Demo Account',
                desc: 'Every broker above offers a free demo account with virtual money. Practice for at least 2-4 weeks before risking real money. Learn the platform, test strategies, and build confidence.',
              },
              {
                step: '3',
                title: 'Complete Identity Verification',
                desc: 'Upload your National Identification Number (NIN) card, Bank Verification Number (BVN), international passport, or driver\'s license for identity verification. Most brokers also require proof of address. This is required before you can withdraw profits.',
              },
              {
                step: '4',
                title: 'Make a Small First Deposit',
                desc: 'Start with the minimum deposit ($5-$10). Use crypto (USDT) or OPay for fast processing. Never deposit more than you can afford to lose completely.',
              },
              {
                step: '5',
                title: 'Trade with Proper Risk Management',
                desc: 'Never risk more than 2-5% of your account on a single trade. Use a trading strategy, avoid emotional decisions, and keep a trading journal to track your progress.',
              },
            ].map((item) => (
              <div key={item.step} className="glass-card p-6 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-8 justify-center">
            <CtaButton broker="pocketOption" label="Start with Pocket Option" campaign="nigeria_start" size="lg" />
            <CtaButton broker="quotex" label="Try Quotex" variant="secondary" campaign="nigeria_start" size="lg" />
          </div>
        </div>
      </section>

      {/* Scam Warnings */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Scam Warnings for Nigerian Traders</h2>
          <div className="glass-card p-8 border border-red-500/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Common Scams Targeting Nigerian Traders</h3>
                <p className="text-gray-400 text-sm">
                  Nigeria has a large and growing population of online traders, making it a target for binary options
                  scams. Be aware of these common fraud patterns:
                </p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                {
                  title: 'Ponzi Schemes Disguised as Trading',
                  desc: 'Platforms claiming to "trade binary options on your behalf" and promising fixed daily/weekly returns (e.g., 30% monthly). These are Ponzi schemes that pay early investors with new deposits until they collapse. No legitimate broker guarantees fixed returns.',
                },
                {
                  title: 'Instagram/Twitter "Forex & Binary" Traders',
                  desc: 'Social media accounts flashing luxury cars, stacks of Naira, and fake trading screenshots. They recruit followers to deposit through their "special" links, earning commissions regardless of whether you profit or lose.',
                },
                {
                  title: 'Fake Signal Sellers on Telegram/WhatsApp',
                  desc: 'Groups charging monthly fees for "guaranteed" trading signals. Most signals are random, and the sellers profit from subscription fees and broker referral commissions, not from trading.',
                },
                {
                  title: 'Unregulated Brokers with No Track Record',
                  desc: 'New or unknown brokers with flashy websites that accept deposits but delay or deny withdrawals indefinitely. Stick to established brokers with years of verified operation.',
                },
                {
                  title: 'Recovery Scams',
                  desc: 'After losing money, you may be contacted by "recovery agents" or "hackers" claiming to retrieve your funds for an upfront fee. This is a second scam targeting victims of the first.',
                },
              ].map((scam) => (
                <li key={scam.title} className="text-sm">
                  <span className="text-red-400 font-semibold">{scam.title}:</span>{' '}
                  <span className="text-gray-400">{scam.desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-400 mt-4">
              Read our full <Link href={`/${locale}/scams`} className="text-emerald-400 hover:underline">scam detection guide</Link> for
              a complete checklist, and see our <Link href={`/${locale}/methodology`} className="text-emerald-400 hover:underline">testing methodology</Link> for
              how we evaluate broker safety.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Is binary options trading legal in Nigeria?',
                a: 'Binary options trading is not explicitly regulated or banned in Nigeria. SEC Nigeria does not oversee binary options, and there is no specific law prohibiting Nigerians from trading through offshore brokers. However, since these platforms are unregulated locally, traders have no domestic legal protection.',
              },
              {
                q: 'Which is the best binary options broker for Nigerian traders?',
                a: 'Pocket Option is our top recommendation for Nigeria due to its low $5 minimum deposit, crypto-friendly deposits, and copy trading features. Quotex (highest payouts at 98%) and IQ Option (most established platform) are excellent alternatives.',
              },
              {
                q: 'Can I deposit in Naira (NGN)?',
                a: 'Yes, several brokers accept Naira deposits via bank transfer, OPay, and Palmpay. However, cryptocurrency (especially USDT) is the most reliable and fastest deposit method for Nigerian traders, bypassing potential bank transfer delays.',
              },
              {
                q: 'What is the minimum amount needed to start?',
                a: 'Pocket Option offers the lowest minimum deposit at just $5. Most other brokers require $10. We strongly recommend starting with a free demo account before depositing real money to learn the platform and test strategies.',
              },
              {
                q: 'How do I withdraw my binary options profits in Nigeria?',
                a: 'You can withdraw via bank transfer (NGN), cryptocurrency (USDT/Bitcoin), or mobile money services. Crypto withdrawals are typically the fastest (5-60 minutes). Bank transfers may take 1-3 business days. Always complete identity verification before requesting a withdrawal.',
              },
              {
                q: 'Do I need to pay taxes on binary options profits in Nigeria?',
                a: 'In principle, investment income is taxable under Nigerian law (FIRS/PITA). However, practical enforcement on offshore binary options trading is currently limited. It is advisable to keep records of all trading activity and consult a tax professional for guidance.',
              },
            ].map((faq, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Related & Country Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Binary Options in India', href: `/${locale}/binary-options-india`, desc: 'Legal status, best brokers, UPI deposits' },
              { title: 'Binary Options in USA', href: `/${locale}/binary-options-usa`, desc: 'CFTC regulations, Nadex, legal alternatives' },
              { title: 'Binary Options in UK', href: `/${locale}/binary-options-uk`, desc: 'FCA ban, legal alternatives, spread betting' },
              { title: 'Binary Options in Philippines', href: `/${locale}/binary-options-philippines`, desc: 'GCash deposits, SEC status, best brokers' },
              { title: 'Compare All Brokers', href: `/${locale}/compare`, desc: 'Side-by-side broker comparison' },
              { title: 'Pocket Option Review', href: `/${locale}/pocket-option`, desc: 'Best broker for Nigeria (9.5/10)' },
              { title: 'Quotex Review', href: `/${locale}/quotex`, desc: 'Highest payouts at up to 98%' },
              { title: 'Beginner Trading Guide', href: `/${locale}/blog/binary-options-trading-guide`, desc: 'Learn binary options from scratch' },
              { title: 'Demo Account Guide', href: `/${locale}/blog/binary-options-demo-account`, desc: 'How to practice risk-free' },
              { title: 'Withdrawal Guide', href: `/${locale}/blog/how-to-withdraw-binary-options`, desc: 'How to withdraw your profits' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="glass-card p-4 hover:bg-white/[0.05] transition-colors group">
                <h3 className="font-semibold text-sm text-white group-hover:text-emerald-400 transition-colors">{link.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="section-container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 border border-yellow-500/20">
            <h3 className="font-bold text-yellow-400 text-sm mb-2">Risk Disclaimer</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Binary options trading involves substantial risk of loss and is not suitable for all investors.
              The information on this page is for educational purposes only and does not constitute financial or legal advice.
              Binary options are not regulated by SEC Nigeria or the CBN. Trading with offshore brokers carries additional
              risks including lack of regulatory protection. You could lose your entire investment. Only trade with money
              you can afford to lose. Past performance is not indicative of future results. If you are unsure about the
              legal implications of binary options trading in Nigeria, consult a qualified legal professional.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
