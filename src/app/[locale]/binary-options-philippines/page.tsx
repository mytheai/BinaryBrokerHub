'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function BinaryOptionsPhilippinesPage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Country Guides', href: undefined }, { label: 'Binary Options in the Philippines' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        <div className="relative section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="badge-gold">Country Guide</span>
              <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">Updated: May 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Binary Options in the Philippines 2026
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
              Complete guide to binary options trading for Filipino traders. Legal status under SEC Philippines,
              best brokers with GCash and Maya support, peso deposits, tax implications, and how to get started safely.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Legal Status: <span className="text-yellow-400 font-semibold">Not Regulated</span> &bull; SEC warnings issued &bull; No explicit ban
            </p>
          </div>
        </div>
      </section>

      {/* Legal Status */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Legal Status of Binary Options in the Philippines</h2>
          <div className="glass-card p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Not Regulated</h3>
                <p className="text-gray-300 leading-relaxed">
                  Binary options trading in the Philippines is <strong className="text-white">not regulated</strong>.
                  The Securities and Exchange Commission of the Philippines (SEC Philippines) has issued advisories
                  warning the public about binary options platforms, but there is no explicit ban on Filipino individuals
                  trading through offshore brokers.
                </p>
              </div>
            </div>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                <strong className="text-white">SEC Philippines advisories:</strong> The SEC has published multiple
                advisories warning investors about unregistered investment schemes, including some binary options
                platforms. These advisories focus on platforms operating without SEC registration in the Philippines,
                rather than imposing a blanket ban on binary options trading itself.
              </p>
              <p>
                <strong className="text-white">The BSP angle:</strong> The Bangko Sentral ng Pilipinas (BSP), the
                country&apos;s central bank, regulates banking, e-money issuers (like GCash and Maya), and payment
                systems. BSP does not specifically regulate binary options trading. However, BSP&apos;s oversight of
                e-money platforms means GCash and Maya transactions are monitored, though deposits to offshore
                trading platforms are not explicitly blocked.
              </p>
              <p>
                <strong className="text-white">Practical reality:</strong> A large number of Filipino traders actively
                use offshore binary options platforms. Deposits via GCash, Maya (PayMaya), bank transfers, and
                cryptocurrency are processed without issues. However, since these brokers are not SEC-registered in
                the Philippines, traders have <strong className="text-yellow-400">no local regulatory
                protection</strong> if disputes arise.
              </p>
              <p>
                <strong className="text-white">Our recommendation:</strong> While binary options trading is not
                banned in the Philippines, the SEC has issued warnings. Use only well-established brokers with
                international regulation, start with small amounts, and be cautious of unregistered platforms
                that the SEC has specifically flagged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Brokers for Philippines */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Best Binary Options Brokers for the Philippines</h2>
          <p className="text-gray-400 mb-8">
            These brokers accept Filipino traders, support PHP deposits, and offer local payment methods like GCash and Maya.
          </p>

          {/* Broker Comparison Table */}
          <div className="glass-card overflow-x-auto mb-8">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 text-gray-400 font-semibold">Broker</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Our Score</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Min. Deposit</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">Max. Payout</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">PHP Deposits</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">GCash/Maya</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5 bg-emerald-500/5">
                  <td className="px-4 py-3 font-semibold text-white">Pocket Option</td>
                  <td className="px-4 py-3"><span className="badge-blue">9.5/10</span></td>
                  <td className="px-4 py-3">$5</td>
                  <td className="px-4 py-3">Up to 92%</td>
                  <td className="px-4 py-3 text-emerald-400">Yes</td>
                  <td className="px-4 py-3 text-emerald-400">Yes</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-3 font-semibold text-white">Quotex</td>
                  <td className="px-4 py-3"><span className="badge-blue">9.4/10</span></td>
                  <td className="px-4 py-3">$10</td>
                  <td className="px-4 py-3">Up to 98%</td>
                  <td className="px-4 py-3 text-emerald-400">Yes</td>
                  <td className="px-4 py-3 text-yellow-400">Limited</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-3 font-semibold text-white">IQ Option</td>
                  <td className="px-4 py-3"><span className="badge-blue">9.2/10</span></td>
                  <td className="px-4 py-3">$10</td>
                  <td className="px-4 py-3">Up to 95%</td>
                  <td className="px-4 py-3 text-emerald-400">Yes</td>
                  <td className="px-4 py-3 text-emerald-400">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Top Pick: Pocket Option */}
          <div className="glass-card p-6 mb-6 border border-emerald-500/30">
            <div className="flex items-center gap-2 mb-3">
              <span className="badge-green">Best for Philippines</span>
              <h3 className="text-xl font-bold">#1 Pocket Option</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Pocket Option is our top pick for Filipino traders. With the <strong className="text-white">lowest
              minimum deposit at just $5</strong> (approx. PHP 280), it&apos;s the most accessible option for
              beginners. The platform supports GCash deposits, crypto (USDT/BTC), and bank transfers. Pocket Option
              also offers copy trading, 180+ tradeable assets, and a social trading community that helps new traders
              learn from experienced ones.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaButton broker="pocketOption" label="Open Pocket Option Account" campaign="ph_po" size="sm" />
              <CtaButton broker="pocketOption" type="demo" label="Try Demo" variant="secondary" campaign="ph_po" size="sm" />
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
              making it ideal for Filipino traders looking to maximize returns. The platform features a clean,
              intuitive interface and supports multiple deposit methods. Quotex also provides a generous demo account
              with $10,000 virtual balance, allowing you to practice strategies without risking real money.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaButton broker="quotex" label="Open Quotex Account" campaign="ph_quotex" size="sm" />
              <CtaButton broker="quotex" type="demo" label="Try Demo" variant="secondary" campaign="ph_quotex" size="sm" />
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
              over 100 million registered accounts. Filipino traders enjoy a polished trading platform with advanced
              charting tools, educational resources, and fast order execution. IQ Option supports GCash, bank
              transfers, and crypto deposits for users in the Philippines.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaButton broker="iqOption" label="Open IQ Option Account" campaign="ph_iq" size="sm" />
              <CtaButton broker="iqOption" type="demo" label="Try Demo" variant="secondary" campaign="ph_iq" size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Payment Methods for Filipino Traders</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold text-emerald-400 mb-4">Popular Deposit Methods</h3>
              <ul className="space-y-3">
                {[
                  { method: 'GCash', speed: 'Instant', fee: 'Free' },
                  { method: 'Maya (PayMaya)', speed: 'Instant', fee: 'Free' },
                  { method: 'Bank Transfer (BDO/BPI/Metrobank)', speed: '10-60 min', fee: 'Free or low' },
                  { method: 'Crypto (USDT TRC-20)', speed: '5-15 min', fee: 'Network fee only' },
                  { method: 'Crypto (Bitcoin)', speed: '15-60 min', fee: 'Network fee only' },
                  { method: 'GrabPay', speed: 'Instant', fee: 'May vary' },
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
                  { method: 'GCash', speed: '1-24 hours', min: '$10' },
                  { method: 'Bank Transfer (PHP)', speed: '1-3 business days', min: '$10' },
                  { method: 'Crypto (USDT)', speed: '5-60 min', min: '$10' },
                  { method: 'Maya (PayMaya)', speed: '1-24 hours', min: 'Varies' },
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
                  <strong>Note:</strong> GCash is the most popular and convenient deposit method for Filipino traders.
                  If GCash is unavailable, cryptocurrency (USDT) is a reliable alternative with fast processing times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Implications */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Tax Implications for Filipino Traders</h2>
          <div className="glass-card p-8">
            <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">How Binary Options Profits Are Taxed</h3>
                <p>
                  Binary options trading profits in the Philippines may be subject to taxation by the Bureau of
                  Internal Revenue (BIR). Depending on how the income is classified, it could fall under
                  <strong className="text-white"> capital gains tax</strong> or be treated as <strong className="text-white">regular
                  income</strong> subject to graduated income tax rates under the TRAIN Law.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/[0.03] rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Key Tax Considerations</h4>
                  <ul className="space-y-1 text-xs">
                    <li>BIR may classify as income or capital gains</li>
                    <li>Graduated income tax: <span className="text-yellow-400">0-35%</span> under TRAIN Law</li>
                    <li>First PHP 250,000 of income is <span className="text-emerald-400">tax-exempt</span></li>
                    <li>No specific BIR ruling on binary options exists</li>
                    <li>Foreign-sourced income is taxable for residents</li>
                    <li>Record-keeping is essential for compliance</li>
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
                    <li className="flex items-start gap-2"><span className="text-emerald-400">&#10003;</span> PHP/USD exchange rates used</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <p className="text-yellow-300 text-xs">
                  <strong>Disclaimer:</strong> This is general information, not tax advice. Philippine tax laws may
                  change, and there is no specific BIR ruling on binary options trading. Consult a qualified tax
                  professional or CPA for personalized advice on your specific situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start Trading */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">How to Start Trading Binary Options in the Philippines</h2>
          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Choose a Reputable Broker',
                desc: 'Select a broker from our recommended list above. We suggest Pocket Option for the lowest minimum deposit ($5) and GCash support, or Quotex for the highest payouts.',
              },
              {
                step: '2',
                title: 'Start with a Demo Account',
                desc: 'Every broker above offers a free demo account with virtual money. Practice for at least 2-4 weeks before risking real money. Learn the platform, test strategies, and build confidence.',
              },
              {
                step: '3',
                title: 'Deposit via GCash',
                desc: 'GCash is the easiest deposit method for Filipino traders. Link your GCash account, select the deposit amount (minimum $5-$10), and confirm the transaction. Deposits are typically processed instantly.',
              },
              {
                step: '4',
                title: 'Start Small and Learn',
                desc: 'Begin with the minimum trade amount. Never invest more than you can afford to lose. Focus on learning technical analysis, managing risk, and developing a consistent strategy.',
              },
              {
                step: '5',
                title: 'Apply Risk Management',
                desc: 'Never risk more than 2-5% of your account on a single trade. Set daily loss limits, avoid revenge trading after losses, and keep a trading journal to improve over time.',
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
            <CtaButton broker="pocketOption" label="Start with Pocket Option" campaign="ph_start" size="lg" />
            <CtaButton broker="quotex" label="Try Quotex" variant="secondary" campaign="ph_start" size="lg" />
          </div>
        </div>
      </section>

      {/* Scam Warnings */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Scam Warnings for Filipino Traders</h2>
          <div className="glass-card p-8 border border-red-500/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Common Scams Targeting Filipino Traders</h3>
                <p className="text-gray-400 text-sm">
                  The Philippines has seen a rise in online trading scams. Be aware of these common fraud patterns
                  that specifically target Filipino traders:
                </p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                {
                  title: 'Facebook Group Investment Schemes',
                  desc: 'Facebook groups promoting "guaranteed daily income" from binary options trading. These groups often require you to deposit through a specific "manager" who controls your funds. Legitimate brokers never require intermediaries for deposits.',
                },
                {
                  title: 'Telegram Channel Signal Sellers',
                  desc: 'Telegram channels charging PHP 2,000-10,000 monthly for "VIP signals" with claimed 90%+ accuracy. These signals are rarely better than random, and the sellers earn from subscriptions and broker referral commissions.',
                },
                {
                  title: '"Guaranteed Income" Recruitment Schemes',
                  desc: 'Schemes that promise fixed daily/weekly earnings and encourage you to recruit others for additional commissions. These are pyramid or Ponzi schemes disguised as trading platforms and will eventually collapse.',
                },
                {
                  title: 'Fake Broker Apps',
                  desc: 'Unlicensed apps that mimic legitimate brokers, accept deposits, show fake profits, then refuse withdrawals. Always download apps from official broker websites, not random links shared on social media.',
                },
                {
                  title: 'Recovery Scams',
                  desc: 'After losing money, you may be contacted by people claiming to be "recovery experts" or "hackers" who can retrieve your funds for a fee. This is a second scam targeting victims of the first.',
                },
              ].map((scam) => (
                <li key={scam.title} className="text-sm">
                  <span className="text-red-400 font-semibold">{scam.title}:</span>{' '}
                  <span className="text-gray-400">{scam.desc}</span>
                </li>
              ))}
            </ul>
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
                q: 'Is binary options trading legal in the Philippines?',
                a: 'Binary options trading is not explicitly banned in the Philippines. However, SEC Philippines has issued advisories warning the public about unregistered binary options platforms. There is no specific law prohibiting Filipino individuals from trading through offshore brokers, but local regulatory protection does not apply.',
              },
              {
                q: 'Can I use GCash to deposit for binary options?',
                a: 'Yes, several brokers including Pocket Option and IQ Option accept GCash deposits. GCash is one of the most convenient deposit methods for Filipino traders, offering instant processing with minimal or no fees.',
              },
              {
                q: 'What is the minimum amount needed to start?',
                a: 'Pocket Option offers the lowest minimum deposit at just $5 (approximately PHP 280). Most other brokers require $10 (approximately PHP 560). We strongly recommend starting with a free demo account before depositing real money.',
              },
              {
                q: 'Which is the best binary options broker for Filipino traders?',
                a: 'Pocket Option is our top recommendation for the Philippines due to its low $5 minimum deposit, GCash support, copy trading features, and 180+ tradeable assets. Quotex (highest payouts at 98%) and IQ Option (most established) are excellent alternatives.',
              },
              {
                q: 'How do I withdraw my profits in the Philippines?',
                a: 'You can withdraw via GCash, Maya (PayMaya), bank transfer (BDO/BPI/Metrobank), or cryptocurrency (USDT/Bitcoin). GCash withdrawals typically process within 1-24 hours. Bank transfers may take 1-3 business days. Always complete identity verification first.',
              },
              {
                q: 'Do I need to pay taxes on binary options profits in the Philippines?',
                a: 'Binary options profits may be taxable under Philippine law. The BIR could classify trading income under graduated income tax rates (0-35%) or capital gains tax. There is no specific BIR ruling on binary options. Consult a CPA or tax professional for personalized guidance.',
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
          <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Compare All Brokers', href: `/${locale}/compare`, desc: 'Side-by-side broker comparison' },
              { title: 'Pocket Option Review', href: `/${locale}/pocket-option`, desc: 'Best broker for Philippines (9.5/10)' },
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
              Binary options are not regulated by the SEC Philippines or BSP. Trading with offshore brokers carries additional
              risks including lack of regulatory protection. You could lose your entire investment. Only trade with money
              you can afford to lose. Past performance is not indicative of future results. If you are unsure about the
              legal implications of binary options trading in the Philippines, consult a qualified legal professional.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
