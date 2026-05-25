'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import CtaButton from '@/components/CtaButton';

export default function HowToWithdrawBinaryOptionsPage() {
  const locale = useLocale();

  return (
    <article className="section-container py-16 max-w-4xl mx-auto">
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge-blue">Money Guide</span>
          <span className="text-xs text-gray-600">Updated May 2026 &bull; 15 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          How to Withdraw from Binary Options Brokers — Complete Guide
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Everything you need to know about withdrawing profits from binary options brokers.
          Processing times, fees, verification requirements, and best methods for each platform.
        </p>
      </header>

      {/* Risk Disclaimer */}
      <section className="border border-amber-500/30 bg-amber-500/[0.03] rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-amber-400 mb-3">Important Risk Disclaimer</h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          Binary options trading involves substantial risk. Profits are not guaranteed, and you may lose
          your entire investment.
          <strong className="text-white"> This guide covers the withdrawal process but does not constitute
          financial advice. Never trade with money you cannot afford to lose.</strong>
        </p>
      </section>

      {/* Key Principle */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The #1 Rule of Binary Options Withdrawals</h2>
        <div className="glass-card p-6">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Before diving into broker-specific details, understand this fundamental rule:
            <strong className="text-white"> Verify your account BEFORE you try to withdraw.</strong>
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Every legitimate broker requires identity verification (KYC — Know Your Customer) before
            processing withdrawals. If you wait until you want to withdraw to start verification, you
            could face delays of days or even weeks. The smart move is to verify immediately after
            registration.
          </p>
          <div className="bg-white/[0.03] rounded-lg p-4">
            <h3 className="text-xs font-semibold text-gray-400 mb-2">TYPICAL KYC REQUIREMENTS</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="flex gap-2">
                <span className="text-emerald-400 flex-shrink-0">&#10003;</span>
                <span><strong className="text-white">Photo ID:</strong> Passport, driver&apos;s license, or national ID card</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400 flex-shrink-0">&#10003;</span>
                <span><strong className="text-white">Proof of Address:</strong> Utility bill, bank statement, or government letter (dated within 3-6 months)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400 flex-shrink-0">&#10003;</span>
                <span><strong className="text-white">Payment Proof:</strong> Photo of the card used for deposit (cover the middle digits) or e-wallet screenshot</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Withdrawal Comparison Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Withdrawal Comparison — All 7 Brokers</h2>
        <div className="glass-card overflow-hidden">
          <div className="grid grid-cols-5 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
            <div>Broker</div>
            <div className="text-center">Min Withdrawal</div>
            <div className="text-center">Processing Time</div>
            <div className="text-center">Fees</div>
            <div className="text-center">Best Method</div>
          </div>
          {[
            { name: 'Pocket Option', min: '$10', time: '12 min - 3 days', fees: 'Free', best: 'USDT (TRC20)' },
            { name: 'Quotex', min: '$10', time: '1-5 days', fees: 'Free', best: 'USDT (TRC20)' },
            { name: 'IQ Option', min: '$2', time: '1-3 days', fees: 'Free', best: 'Bank card' },
            { name: 'Deriv', min: '$5', time: '1-3 days', fees: 'Free', best: 'Crypto / E-wallet' },
            { name: 'Olymp Trade', min: '$10', time: '1-5 days', fees: 'Free', best: 'E-wallet' },
            { name: 'Binomo', min: '$10', time: '1-3 days', fees: 'Free', best: 'Bank card' },
            { name: 'ExpertOption', min: '$10', time: '2-5 days', fees: 'Free*', best: 'Crypto' },
          ].map((broker, i) => (
            <div key={i} className={`grid grid-cols-5 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
              <div className="text-white font-medium text-xs">{broker.name}</div>
              <div className="text-center text-gray-300 text-xs">{broker.min}</div>
              <div className="text-center text-emerald-400 text-xs">{broker.time}</div>
              <div className="text-center text-gray-300 text-xs">{broker.fees}</div>
              <div className="text-center text-blue-400 text-xs">{broker.best}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3">
          * Most brokers don&apos;t charge withdrawal fees, but your payment provider may charge receiving
          fees. Processing times based on our testing in May 2026. Actual times may vary.
        </p>
      </section>

      {/* Broker-by-Broker Withdrawal Guide */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Withdrawal Process for Each Broker</h2>

        {/* Pocket Option */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Pocket Option Withdrawals</h3>
            <span className="badge-green">Fastest Crypto Withdrawals</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Pocket Option has one of the fastest withdrawal processes in the industry, especially for
            cryptocurrency. In our testing, USDT (TRC20) withdrawals were processed in as little as
            12 minutes.
          </p>

          <h4 className="font-semibold text-white text-sm mb-2">Step-by-Step Withdrawal:</h4>
          <ol className="space-y-2 text-sm text-gray-400 mb-4">
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold flex-shrink-0">1.</span>
              <span>Log in and go to Finance &gt; Withdrawal</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold flex-shrink-0">2.</span>
              <span>Select your withdrawal method (must match your deposit method)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold flex-shrink-0">3.</span>
              <span>Enter the amount (minimum $10)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold flex-shrink-0">4.</span>
              <span>Enter your wallet address (for crypto) or account details</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold flex-shrink-0">5.</span>
              <span>Confirm the withdrawal request</span>
            </li>
          </ol>

          <div className="glass-card overflow-hidden">
            <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
              <div>Method</div>
              <div className="text-center">Processing Time</div>
              <div className="text-center">Limits</div>
            </div>
            {[
              { method: 'USDT (TRC20)', time: '12 min - 2 hours', limits: '$10 - $50,000/day' },
              { method: 'Bitcoin', time: '1-24 hours', limits: '$10 - $50,000/day' },
              { method: 'Bank Card', time: '1-3 business days', limits: '$10 - $10,000/day' },
              { method: 'E-wallets', time: '1-24 hours', limits: '$10 - $20,000/day' },
            ].map((m, i) => (
              <div key={i} className={`grid grid-cols-3 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                <div className="text-white font-medium text-xs">{m.method}</div>
                <div className="text-center text-emerald-400 text-xs">{m.time}</div>
                <div className="text-center text-gray-400 text-xs">{m.limits}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            For more details, read our{' '}
            <Link href={`/${locale}/blog/pocket-option-withdrawal`} className="text-blue-400 hover:underline">
              complete Pocket Option withdrawal guide
            </Link>.
          </p>
        </div>

        {/* Quotex */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Quotex Withdrawals</h3>
            <span className="badge-blue">Multiple Methods</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Quotex offers a straightforward withdrawal process with multiple payment methods.
            Processing typically takes 1-5 business days depending on the method and verification status.
          </p>

          <h4 className="font-semibold text-white text-sm mb-2">Step-by-Step Withdrawal:</h4>
          <ol className="space-y-2 text-sm text-gray-400 mb-4">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold flex-shrink-0">1.</span>
              <span>Navigate to the Cashier/Withdrawal section</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold flex-shrink-0">2.</span>
              <span>Choose your preferred withdrawal method</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold flex-shrink-0">3.</span>
              <span>Enter the withdrawal amount ($10 minimum)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold flex-shrink-0">4.</span>
              <span>Provide payment details and confirm</span>
            </li>
          </ol>

          <div className="glass-card overflow-hidden">
            <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
              <div>Method</div>
              <div className="text-center">Processing Time</div>
              <div className="text-center">Limits</div>
            </div>
            {[
              { method: 'USDT (TRC20)', time: '1-24 hours', limits: '$10 - $50,000/day' },
              { method: 'Bitcoin', time: '1-48 hours', limits: '$10 - $50,000/day' },
              { method: 'Bank Card', time: '3-5 business days', limits: '$10 - $10,000/day' },
              { method: 'Perfect Money', time: '1-24 hours', limits: '$10 - $20,000/day' },
            ].map((m, i) => (
              <div key={i} className={`grid grid-cols-3 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                <div className="text-white font-medium text-xs">{m.method}</div>
                <div className="text-center text-emerald-400 text-xs">{m.time}</div>
                <div className="text-center text-gray-400 text-xs">{m.limits}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Read our{' '}
            <Link href={`/${locale}/blog/quotex-deposit-withdrawal`} className="text-blue-400 hover:underline">
              Quotex deposit &amp; withdrawal guide
            </Link>{' '}
            for full details.
          </p>
        </div>

        {/* IQ Option */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">IQ Option Withdrawals</h3>
            <span className="badge-green">Lowest Minimum ($2)</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            IQ Option has the lowest withdrawal minimum at just $2, making it ideal for small account
            holders. As a CySEC-regulated broker, they follow strict withdrawal processing rules,
            ensuring reliable payouts.
          </p>
          <div className="glass-card overflow-hidden">
            <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
              <div>Method</div>
              <div className="text-center">Processing Time</div>
              <div className="text-center">Limits</div>
            </div>
            {[
              { method: 'Bank Card', time: '1-3 business days', limits: '$2 - $1M/month' },
              { method: 'Bank Transfer', time: '3-5 business days', limits: '$2 - $1M/month' },
              { method: 'E-wallets', time: '1-3 business days', limits: '$2 - $1M/month' },
            ].map((m, i) => (
              <div key={i} className={`grid grid-cols-3 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                <div className="text-white font-medium text-xs">{m.method}</div>
                <div className="text-center text-emerald-400 text-xs">{m.time}</div>
                <div className="text-center text-gray-400 text-xs">{m.limits}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            See our{' '}
            <Link href={`/${locale}/iq-option`} className="text-blue-400 hover:underline">
              IQ Option review
            </Link>{' '}
            for complete details.
          </p>
        </div>

        {/* Deriv */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Deriv Withdrawals</h3>
            <span className="badge-green">MFSA Regulated</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Deriv benefits from MFSA regulation, which means strict rules around withdrawal processing.
            They offer a wide range of methods including crypto, e-wallets, and bank transfers.
            Minimum withdrawal is just $5.
          </p>
          <div className="glass-card overflow-hidden">
            <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/[0.06] p-3 text-xs font-semibold text-gray-400">
              <div>Method</div>
              <div className="text-center">Processing Time</div>
              <div className="text-center">Limits</div>
            </div>
            {[
              { method: 'Crypto (BTC/USDT)', time: '1-24 hours', limits: '$5 - no limit' },
              { method: 'E-wallets', time: '1-3 business days', limits: '$5 - $50,000/day' },
              { method: 'Bank Transfer', time: '3-5 business days', limits: '$5 - $100,000' },
            ].map((m, i) => (
              <div key={i} className={`grid grid-cols-3 p-3 text-sm ${i % 2 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.03]`}>
                <div className="text-white font-medium text-xs">{m.method}</div>
                <div className="text-center text-emerald-400 text-xs">{m.time}</div>
                <div className="text-center text-gray-400 text-xs">{m.limits}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Read our{' '}
            <Link href={`/${locale}/deriv`} className="text-blue-400 hover:underline">
              Deriv review
            </Link>{' '}
            for more information.
          </p>
        </div>

        {/* Olymp Trade, Binomo, ExpertOption */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-white mb-4">Other Brokers — Quick Overview</h3>
          <div className="space-y-4">
            <div className="bg-white/[0.03] rounded-lg p-4">
              <h4 className="font-semibold text-white text-sm mb-1">
                <Link href={`/${locale}/olymp-trade`} className="hover:text-blue-400 transition-colors">Olymp Trade</Link>
              </h4>
              <p className="text-gray-400 text-sm">
                $10 minimum withdrawal. Processing takes 1-5 business days. Supports bank cards, e-wallets
                (Skrill, Neteller), and crypto. FinaCom membership provides dispute resolution if issues arise.
              </p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4">
              <h4 className="font-semibold text-white text-sm mb-1">
                <Link href={`/${locale}/binomo`} className="hover:text-blue-400 transition-colors">Binomo</Link>
              </h4>
              <p className="text-gray-400 text-sm">
                $10 minimum withdrawal. Bank cards typically process in 1-3 business days. E-wallets are
                faster (1-24 hours). Binomo requires full verification before the first withdrawal.
              </p>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-4">
              <h4 className="font-semibold text-white text-sm mb-1">
                <Link href={`/${locale}/expert-option`} className="hover:text-blue-400 transition-colors">ExpertOption</Link>
              </h4>
              <p className="text-gray-400 text-sm">
                $10 minimum withdrawal. Processing takes 2-5 business days. Higher-tier accounts get
                priority processing. Crypto withdrawals are generally fastest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Withdrawal Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Best Withdrawal Methods Compared</h2>

        <div className="space-y-4">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="badge-green">Recommended</span>
              <h3 className="font-bold text-white">Cryptocurrency (USDT TRC20, Bitcoin)</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-emerald-400 text-sm mb-2">Advantages</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>&#8226; Fastest processing (minutes to hours)</li>
                  <li>&#8226; Lowest fees (especially USDT TRC20)</li>
                  <li>&#8226; No bank restrictions or blocks</li>
                  <li>&#8226; Privacy — no bank statement entries</li>
                  <li>&#8226; Available worldwide</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-400 text-sm mb-2">Disadvantages</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>&#8226; Requires a crypto wallet</li>
                  <li>&#8226; Crypto-to-fiat conversion adds a step</li>
                  <li>&#8226; Bitcoin network fees can be high during congestion</li>
                  <li>&#8226; Volatile crypto prices (use stablecoins like USDT to avoid)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-bold text-white mb-3">Bank Cards (Visa/Mastercard)</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-emerald-400 text-sm mb-2">Advantages</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>&#8226; Familiar and straightforward</li>
                  <li>&#8226; Money goes directly to your bank account</li>
                  <li>&#8226; No need for additional accounts/wallets</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-400 text-sm mb-2">Disadvantages</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>&#8226; Slowest method (1-5 business days)</li>
                  <li>&#8226; Some banks block binary options transactions</li>
                  <li>&#8226; Card must match the name on your account</li>
                  <li>&#8226; Withdrawal limited to the amount deposited by card</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-bold text-white mb-3">E-Wallets (Perfect Money, Skrill, Neteller)</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-emerald-400 text-sm mb-2">Advantages</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>&#8226; Faster than bank cards (1-24 hours)</li>
                  <li>&#8226; No bank blocks or restrictions</li>
                  <li>&#8226; Easy to manage multiple broker accounts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-400 text-sm mb-2">Disadvantages</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>&#8226; E-wallet services charge their own fees</li>
                  <li>&#8226; Need to transfer from e-wallet to bank (extra step)</li>
                  <li>&#8226; Some e-wallets have strict verification requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems & Solutions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Common Withdrawal Problems &amp; Solutions</h2>
        <div className="space-y-4">
          <div className="glass-card p-5">
            <h3 className="font-semibold text-red-400 text-sm mb-2">Problem: Withdrawal Rejected or Pending for Days</h3>
            <div className="text-sm text-gray-400">
              <p className="mb-2"><strong className="text-emerald-400">Likely cause:</strong> Incomplete identity verification.</p>
              <p><strong className="text-emerald-400">Solution:</strong> Check your verification status in your account settings.
              Upload clear, high-resolution photos of your ID and proof of address. Make sure documents aren&apos;t
              expired and the address matches your registration details. If already verified, contact support
              with your withdrawal request number.</p>
            </div>
          </div>

          <div className="glass-card p-5">
            <h3 className="font-semibold text-red-400 text-sm mb-2">Problem: Can&apos;t Withdraw Because of Bonus Conditions</h3>
            <div className="text-sm text-gray-400">
              <p className="mb-2"><strong className="text-emerald-400">Likely cause:</strong> You accepted a deposit bonus with trading volume requirements.</p>
              <p><strong className="text-emerald-400">Solution:</strong> Check the bonus terms — most bonuses require you to trade 20-40x the
              bonus amount before withdrawal. For example, a $50 bonus may require $1,000-$2,000 in trading volume.
              Some brokers allow you to cancel the bonus (forfeiting the bonus amount but keeping your deposit and profits).
              Contact support to ask about cancellation options.</p>
            </div>
          </div>

          <div className="glass-card p-5">
            <h3 className="font-semibold text-red-400 text-sm mb-2">Problem: Bank Blocking the Withdrawal</h3>
            <div className="text-sm text-gray-400">
              <p className="mb-2"><strong className="text-emerald-400">Likely cause:</strong> Some banks flag or block transactions from binary options companies.</p>
              <p><strong className="text-emerald-400">Solution:</strong> Switch to cryptocurrency (USDT TRC20) or e-wallet withdrawals.
              These bypass bank restrictions entirely. If you need the money in your bank, withdraw via crypto then
              sell on a local exchange or P2P platform.</p>
            </div>
          </div>

          <div className="glass-card p-5">
            <h3 className="font-semibold text-red-400 text-sm mb-2">Problem: Withdrawal Method Not Available</h3>
            <div className="text-sm text-gray-400">
              <p className="mb-2"><strong className="text-emerald-400">Likely cause:</strong> Most brokers require you to withdraw to the same method you used to deposit.</p>
              <p><strong className="text-emerald-400">Solution:</strong> If you deposited by credit card, you must withdraw to that same card
              (up to the deposited amount). Profits above the deposit amount can usually be withdrawn via
              alternative methods. For future deposits, consider using crypto if you prefer crypto withdrawals.</p>
            </div>
          </div>

          <div className="glass-card p-5">
            <h3 className="font-semibold text-red-400 text-sm mb-2">Problem: Withdrawal Amount Less Than Expected</h3>
            <div className="text-sm text-gray-400">
              <p className="mb-2"><strong className="text-emerald-400">Likely cause:</strong> Fees from payment processor, currency conversion, or network fees.</p>
              <p><strong className="text-emerald-400">Solution:</strong> Most brokers don&apos;t charge withdrawal fees, but third parties
              might. Use USDT TRC20 for lowest fees (usually under $1). For bank cards, your bank may charge
              international transaction fees (1-3%). Withdraw larger amounts less frequently to minimize per-transaction costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Fast Withdrawals */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">7 Tips for the Fastest Withdrawals</h2>
        <div className="glass-card p-6">
          <div className="space-y-4">
            {[
              { tip: 'Verify your account immediately after registration', detail: 'Don\'t wait until your first withdrawal. Upload ID, proof of address, and payment method photos right away.' },
              { tip: 'Use USDT (TRC20) for fastest processing', detail: 'Crypto withdrawals, especially USDT on the TRC20 network, are processed in minutes at most brokers.' },
              { tip: 'Match your deposit and withdrawal methods', detail: 'Brokers require you to withdraw to the same method you deposited with. Plan this in advance.' },
              { tip: 'Avoid bonuses unless you understand the terms', detail: 'Deposit bonuses come with trading volume requirements that can lock your funds for a long time.' },
              { tip: 'Withdraw regularly — don\'t accumulate large balances', detail: 'Withdraw profits weekly or when you hit a target. Don\'t leave large sums on the platform unnecessarily.' },
              { tip: 'Submit withdrawals during business hours', detail: 'Requests submitted during the broker\'s working hours (Monday-Friday, European time) are processed faster.' },
              { tip: 'Keep copies of all documents and transactions', detail: 'Screenshot every deposit, withdrawal, and verification submission. This protects you if disputes arise.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-emerald-400 font-bold flex-shrink-0">{i + 1}.</span>
                <div>
                  <span className="text-white font-medium text-sm">{item.tip}</span>
                  <p className="text-gray-400 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Do If Broker Won't Pay */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What If a Broker Won&apos;t Process Your Withdrawal?</h2>
        <div className="glass-card p-6">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            If you&apos;ve completed verification and met all terms but your withdrawal is still being
            denied or delayed beyond reasonable timeframes, here are your options:
          </p>
          <ol className="space-y-3 text-sm text-gray-400">
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold flex-shrink-0">1.</span>
              <div>
                <strong className="text-white">Contact support directly</strong> — Use live chat first
                (fastest response), then email. Document everything with screenshots.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold flex-shrink-0">2.</span>
              <div>
                <strong className="text-white">File a complaint with the regulator</strong> — If the broker
                is regulated (CySEC, MFSA, IFMRRC, FinaCom), file a formal complaint with the regulatory body.
                See our{' '}
                <Link href={`/${locale}/blog/binary-options-regulation`} className="text-blue-400 hover:underline">
                  regulation guide
                </Link>{' '}
                for regulator details.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold flex-shrink-0">3.</span>
              <div>
                <strong className="text-white">Use the compensation fund</strong> — IFMRRC and FinaCom
                members participate in compensation funds (up to $20,000 per complaint).
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-bold flex-shrink-0">4.</span>
              <div>
                <strong className="text-white">Leave public reviews</strong> — Post honest reviews on
                Trustpilot, forums, and social media. Brokers often respond quickly to public complaints.
              </div>
            </li>
          </ol>
          <div className="mt-4 border border-amber-500/20 rounded-lg p-4">
            <p className="text-xs text-amber-400">
              <strong>Prevention is better than cure:</strong> This is why we recommend choosing regulated
              brokers. Read our{' '}
              <Link href={`/${locale}/blog/binary-options-regulation`} className="text-blue-400 hover:underline">
                binary options regulation guide
              </Link>{' '}
              to understand which brokers offer the best withdrawal protection.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href={`/${locale}/blog/pocket-option-withdrawal`} className="glass-card p-4 hover:bg-white/[0.05] transition-colors">
            <h3 className="font-semibold text-white text-sm mb-1">Pocket Option Withdrawal Guide</h3>
            <p className="text-gray-400 text-xs">Detailed methods, times, and proof from our testing.</p>
          </Link>
          <Link href={`/${locale}/blog/quotex-deposit-withdrawal`} className="glass-card p-4 hover:bg-white/[0.05] transition-colors">
            <h3 className="font-semibold text-white text-sm mb-1">Quotex Deposit &amp; Withdrawal Guide</h3>
            <p className="text-gray-400 text-xs">Complete Quotex money management walkthrough.</p>
          </Link>
          <Link href={`/${locale}/blog/binary-options-minimum-deposit`} className="glass-card p-4 hover:bg-white/[0.05] transition-colors">
            <h3 className="font-semibold text-white text-sm mb-1">Minimum Deposit Comparison 2026</h3>
            <p className="text-gray-400 text-xs">Start trading from $5 — compare all 7 brokers.</p>
          </Link>
          <Link href={`/${locale}/blog/binary-options-regulation`} className="glass-card p-4 hover:bg-white/[0.05] transition-colors">
            <h3 className="font-semibold text-white text-sm mb-1">Binary Options Regulation Guide</h3>
            <p className="text-gray-400 text-xs">Which brokers are licensed and offer withdrawal protection.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="glass-card p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Trade with Brokers That Pay Fast</h2>
        <p className="text-gray-400 mb-6 text-sm max-w-lg mx-auto">
          Our top-rated brokers have proven track records for fast, reliable withdrawals.
          Start with a free demo account and experience the withdrawal process yourself.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <CtaButton broker="pocketOption" label="Pocket Option — 12 Min Withdrawals" campaign="withdrawal_guide" />
          <CtaButton broker="quotex" label="Quotex — Reliable Payouts" variant="secondary" campaign="withdrawal_guide" />
        </div>
      </section>

      {/* Final Disclaimer */}
      <section className="mt-10 border border-gray-700/50 rounded-xl p-5">
        <p className="text-xs text-gray-500 leading-relaxed">
          <strong className="text-gray-400">Disclaimer:</strong> Binary options trading involves substantial risk
          of loss. Withdrawal processing times and methods are based on our research and testing as of May 2026
          and may change without notice. Actual processing times depend on verification status, payment method,
          and broker policies. This article does not constitute financial advice. Always verify current withdrawal
          terms directly with your broker before depositing.
        </p>
      </section>
    </article>
  );
}
