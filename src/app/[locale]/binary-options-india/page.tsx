'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function BinaryOptionsIndiaPage() {
  const locale = useLocale();

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Country Guides', href: undefined }, { label: 'Binary Options in India' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/10 to-transparent" />
        <div className="relative section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="badge-gold">Country Guide</span>
              <span className="badge text-xs bg-white/[0.05] text-gray-300 border border-white/[0.1]">Updated: May 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Binary Options in India 2026
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
              Complete guide to binary options trading for Indian traders. Legal status under SEBI,
              best brokers with UPI/Paytm support, INR deposits, tax implications, and how to get started safely.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Legal Status: <span className="text-yellow-400 font-semibold">Gray Area</span> &bull; Not explicitly regulated by SEBI &bull; Offshore trading is common
            </p>
          </div>
        </div>
      </section>

      {/* Legal Status */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Legal Status of Binary Options in India</h2>
          <div className="glass-card p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Legal Gray Area</h3>
                <p className="text-gray-300 leading-relaxed">
                  Binary options trading in India exists in a <strong className="text-white">regulatory gray area</strong>.
                  The Securities and Exchange Board of India (SEBI) does not explicitly regulate or ban binary options trading.
                  There is no specific Indian law that prohibits individuals from trading binary options through offshore platforms.
                </p>
              </div>
            </div>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                <strong className="text-white">What SEBI regulates:</strong> SEBI oversees securities markets, mutual funds,
                and exchange-traded derivatives in India. Binary options do not fall under any of these categories as
                currently defined by Indian financial law.
              </p>
              <p>
                <strong className="text-white">The RBI angle:</strong> The Reserve Bank of India (RBI) regulates foreign
                exchange under FEMA (Foreign Exchange Management Act). Several offshore binary options brokers appear on
                the <strong className="text-white">RBI&apos;s Alert List</strong> of unauthorised entities, and remitting
                money abroad to trade them can fall under FEMA / Liberalised Remittance Scheme (LRS) restrictions. This
                does not make individual trading a criminal offence, but it does mean there is real regulatory and tax
                exposure to be aware of.
              </p>
              <p>
                <strong className="text-white">Practical reality:</strong> Millions of Indian traders actively use offshore
                binary options brokers. Deposits via UPI, Paytm, and net banking are processed without issues. However,
                since these brokers are not SEBI-regulated, Indian traders have <strong className="text-yellow-400">no
                domestic legal recourse</strong> if a dispute arises with an offshore broker.
              </p>
              <p>
                <strong className="text-white">Our recommendation:</strong> There is no specific law banning individuals
                from trading, but given the RBI Alert List and FEMA considerations, proceed with caution. Use only
                well-established brokers with international regulation, start with small amounts, and keep detailed
                records of all transactions for tax purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Brokers for India */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Best Binary Options Brokers for India</h2>
          <p className="text-gray-400 mb-8">
            These brokers accept Indian traders, support INR deposits, and offer local payment methods like UPI and Paytm.
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
                  <th className="px-4 py-3 text-gray-400 font-semibold">INR Deposits</th>
                  <th className="px-4 py-3 text-gray-400 font-semibold">UPI/Paytm</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5 bg-emerald-500/5">
                  <td className="px-4 py-3 font-semibold text-white">Olymp Trade</td>
                  <td className="px-4 py-3"><span className="badge-green">8.6/10</span></td>
                  <td className="px-4 py-3">$10 / ₹350</td>
                  <td className="px-4 py-3">80–93%</td>
                  <td className="px-4 py-3 text-emerald-400">Yes</td>
                  <td className="px-4 py-3 text-emerald-400">Yes</td>
                </tr>
                <tr className="border-b border-white/5">
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
                  <td className="px-4 py-3 text-yellow-400">Limited</td>
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

          {/* Top Pick: Olymp Trade */}
          <div className="glass-card p-6 mb-6 border border-emerald-500/30">
            <div className="flex items-center gap-2 mb-3">
              <span className="badge-green">Best for India</span>
              <h3 className="text-xl font-bold">#1 Olymp Trade</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Olymp Trade is our top pick for Indian traders for several reasons. It has been operating in India
              since 2014 and has built a massive user base. The platform supports <strong className="text-white">UPI,
              Paytm, PhonePe, and net banking</strong> for both deposits and withdrawals. You can open an INR-denominated
              account, eliminating currency conversion fees. Olymp Trade also holds an IFC (International Financial
              Commission) membership with a compensation fund up to $20,000 per complaint.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaButton broker="olympTrade" label="Open Olymp Trade Account" campaign="india_olymp" size="sm" />
              <CtaButton broker="olympTrade" type="demo" label="Try Demo" variant="secondary" campaign="india_olymp" size="sm" />
            </div>
          </div>

          {/* Pocket Option */}
          <div className="glass-card p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="badge-blue">Highest Rated</span>
              <h3 className="text-xl font-bold">#2 Pocket Option</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Pocket Option scores highest in our overall broker rankings (9.5/10) and is an excellent choice for
              Indian traders. It offers <strong className="text-white">copy trading, 180+ assets, and the lowest
              minimum deposit at just $5</strong>. Indian traders can deposit via UPI, crypto (USDT/BTC), and e-wallets.
              The social trading feature lets beginners copy experienced traders while learning.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaButton broker="pocketOption" label="Open Pocket Option Account" campaign="india_po" size="sm" />
              <CtaButton broker="pocketOption" type="demo" label="Try Demo" variant="secondary" campaign="india_po" size="sm" />
            </div>
          </div>

          {/* Quotex */}
          <div className="glass-card p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="badge-blue">Highest Payouts</span>
              <h3 className="text-xl font-bold">#3 Quotex</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Quotex offers the <strong className="text-white">highest payouts in the industry at up to 98%</strong>,
              making it attractive for Indian traders focused on maximizing returns. The platform has a clean,
              modern interface and supports INR deposits. Quotex also offers a generous demo account with $10,000
              virtual balance for practice.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaButton broker="quotex" label="Open Quotex Account" campaign="india_quotex" size="sm" />
              <CtaButton broker="quotex" type="demo" label="Try Demo" variant="secondary" campaign="india_quotex" size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Payment Methods for Indian Traders</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-bold text-emerald-400 mb-4">Popular Deposit Methods</h3>
              <ul className="space-y-3">
                {[
                  { method: 'UPI (Google Pay, PhonePe, BHIM)', speed: 'Instant', fee: 'Free' },
                  { method: 'Paytm Wallet', speed: 'Instant', fee: 'Free' },
                  { method: 'Net Banking (IMPS/NEFT)', speed: '5-30 min', fee: 'Free' },
                  { method: 'Crypto (USDT TRC-20)', speed: '5-15 min', fee: 'Network fee only' },
                  { method: 'Crypto (Bitcoin)', speed: '15-60 min', fee: 'Network fee only' },
                  { method: 'Debit/Credit Card (Visa/MC)', speed: 'Instant', fee: 'May vary' },
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
                  { method: 'UPI', speed: '1-24 hours', min: '₹350' },
                  { method: 'Bank Transfer (IMPS)', speed: '1-3 business days', min: '₹1,000' },
                  { method: 'Crypto (USDT)', speed: '5-60 min', min: '$10' },
                  { method: 'E-Wallets', speed: '1-24 hours', min: 'Varies' },
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
                  <strong>Note:</strong> Some Indian banks may block transactions to offshore trading platforms.
                  If your bank declines a deposit, try UPI or crypto as alternatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Implications */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Tax Implications for Indian Traders</h2>
          <div className="glass-card p-8">
            <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">How Binary Options Profits Are Taxed</h3>
                <p>
                  Binary options trading profits in India are classified as <strong className="text-white">&ldquo;Income
                  from Other Sources&rdquo;</strong> under Section 56 of the Income Tax Act, 1961. This means your
                  trading profits are added to your total income and taxed at your applicable income tax slab rate.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/[0.03] rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Income Tax Slabs (New Regime 2026)</h4>
                  <ul className="space-y-1 text-xs">
                    <li>Up to ₹3,00,000 — <span className="text-emerald-400">Nil</span></li>
                    <li>₹3,00,001 - ₹7,00,000 — <span className="text-yellow-400">5%</span></li>
                    <li>₹7,00,001 - ₹10,00,000 — <span className="text-yellow-400">10%</span></li>
                    <li>₹10,00,001 - ₹12,00,000 — <span className="text-yellow-400">15%</span></li>
                    <li>₹12,00,001 - ₹15,00,000 — <span className="text-orange-400">20%</span></li>
                    <li>Above ₹15,00,000 — <span className="text-red-400">30%</span></li>
                  </ul>
                </div>
                <div className="p-4 bg-white/[0.03] rounded-lg">
                  <h4 className="font-semibold text-white mb-2">What You Need to Track</h4>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-start gap-2"><span className="text-emerald-400">&#10003;</span> Total deposits made</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400">&#10003;</span> Total withdrawals received</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400">&#10003;</span> Net profit/loss for the year</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400">&#10003;</span> Screenshots of trade history</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400">&#10003;</span> Broker statements (if available)</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400">&#10003;</span> Conversion rates used (if USD)</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <p className="text-yellow-300 text-xs">
                  <strong>Disclaimer:</strong> This is general information, not tax advice. Tax laws change frequently.
                  Consult a qualified Chartered Accountant (CA) for personalized advice on your specific situation.
                  Non-disclosure of trading income may attract penalties under Indian tax law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start Trading */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">How to Start Trading Binary Options in India</h2>
          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Choose a Reputable Broker',
                desc: 'Select a broker from our recommended list above. We suggest starting with Olymp Trade for the best India-specific experience, or Pocket Option for the most features.',
              },
              {
                step: '2',
                title: 'Start with a Demo Account',
                desc: 'Every broker above offers a free demo account with virtual money. Practice for at least 2-4 weeks before risking real money. Learn the platform, test strategies, and build confidence.',
              },
              {
                step: '3',
                title: 'Complete KYC Verification',
                desc: 'Upload your Aadhaar card, PAN card, or passport for identity verification. Most brokers also require address proof (utility bill or bank statement). This is required for withdrawals.',
              },
              {
                step: '4',
                title: 'Make a Small First Deposit',
                desc: 'Start with the minimum deposit ($5-$10). Use UPI or Paytm for instant processing. Never deposit more than you can afford to lose completely.',
              },
              {
                step: '5',
                title: 'Trade with Proper Risk Management',
                desc: 'Never risk more than 2-5% of your account on a single trade. Use a trading strategy, avoid emotional decisions, and keep a trading journal.',
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
            <CtaButton broker="olympTrade" label="Start with Olymp Trade" campaign="india_start" size="lg" />
            <CtaButton broker="pocketOption" label="Try Pocket Option" variant="secondary" campaign="india_start" size="lg" />
          </div>
        </div>
      </section>

      {/* Scam Warnings */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Scam Warnings for Indian Traders</h2>
          <div className="glass-card p-8 border border-red-500/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Common Scams Targeting Indian Traders</h3>
                <p className="text-gray-400 text-sm">
                  India is a prime target for binary options scams due to the large population of tech-savvy young investors.
                  Be aware of these common fraud patterns:
                </p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                {
                  title: 'Telegram/WhatsApp Signal Groups',
                  desc: 'Groups promising "95% accuracy" signals and guaranteed profits. They often charge ₹5,000-₹50,000 for "premium" signals that are no better than random guesses.',
                },
                {
                  title: 'Fake Trading Gurus on YouTube/Instagram',
                  desc: 'Self-proclaimed experts showing fake profit screenshots and luxury lifestyles. They earn from affiliate commissions when you sign up, not from trading.',
                },
                {
                  title: 'Unregulated Brokers with No Track Record',
                  desc: 'New brokers with flashy websites that disappear with deposits. Stick to established brokers with years of operation and verified withdrawal records.',
                },
                {
                  title: 'Automated Trading Bots',
                  desc: 'Software promising automatic profits with "AI-powered" trading. No bot can guarantee consistent binary options profits. These are almost always scams.',
                },
                {
                  title: 'Recovery Scams',
                  desc: 'After losing money, you may be contacted by "recovery agents" claiming to retrieve your funds for an upfront fee. This is a second scam targeting victims of the first.',
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
                q: 'Is binary options trading legal in India?',
                a: 'Binary options trading is not explicitly regulated or banned by SEBI. There is no specific Indian law prohibiting individuals from trading through offshore brokers. However, it exists in a gray area since these brokers are not licensed by any Indian authority. Proceed with caution and use only reputable brokers.',
              },
              {
                q: 'Which is the best binary options broker for Indian traders?',
                a: 'Olymp Trade is our top recommendation for India due to UPI/Paytm support, INR accounts, and years of reliable service in the Indian market. Pocket Option (9.5/10 overall) and Quotex (highest payouts at 98%) are excellent alternatives.',
              },
              {
                q: 'Can I deposit in Indian Rupees (INR)?',
                a: 'Yes, Olymp Trade, Pocket Option, and Quotex all accept INR deposits through UPI, Paytm, PhonePe, and net banking. Olymp Trade even offers INR-denominated accounts to avoid currency conversion.',
              },
              {
                q: 'Do I need to pay tax on binary options profits in India?',
                a: 'Yes. Profits are taxed as "Income from Other Sources" at your applicable slab rate. Maintain detailed records of all trades and consult a Chartered Accountant for proper tax filing.',
              },
              {
                q: 'What is the minimum amount needed to start?',
                a: 'Pocket Option offers the lowest minimum deposit at just $5 (approx. ₹415). Most other brokers require $10 (approx. ₹830). We recommend starting with a free demo account before depositing real money.',
              },
              {
                q: 'Can RBI block my binary options transactions?',
                a: 'While RBI does not specifically target binary options transactions, some banks may decline payments to offshore trading platforms. If this happens, UPI and cryptocurrency are reliable alternatives that rarely face blocks.',
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
              { title: 'Binary Options Legality Tracker', href: `/${locale}/binary-options-legality`, desc: 'Banned, restricted & unregulated by country' },
              { title: 'Binary Options in USA', href: `/${locale}/binary-options-usa`, desc: 'CFTC regulations, Nadex, legal alternatives' },
              { title: 'Binary Options in UK', href: `/${locale}/binary-options-uk`, desc: 'FCA ban, legal alternatives, spread betting' },
              { title: 'Binary Options in Nigeria', href: `/${locale}/binary-options-nigeria`, desc: 'Best brokers, OPay/Palmpay, getting started' },
              { title: 'Binary Options in Philippines', href: `/${locale}/binary-options-philippines`, desc: 'GCash deposits, SEC status, best brokers' },
              { title: 'Compare All Brokers', href: `/${locale}/compare`, desc: 'Side-by-side broker comparison' },
              { title: 'Olymp Trade Review', href: `/${locale}/olymp-trade`, desc: 'Full review of our #1 India pick' },
              { title: 'Pocket Option Review', href: `/${locale}/pocket-option`, desc: 'Best overall broker (9.5/10)' },
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
              Binary options are not regulated by SEBI. Trading with offshore brokers carries additional risks including
              lack of regulatory protection. You could lose your entire investment. Only trade with money you can afford
              to lose. Past performance is not indicative of future results. If you are unsure about the legal
              implications of binary options trading in India, consult a qualified legal professional.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
