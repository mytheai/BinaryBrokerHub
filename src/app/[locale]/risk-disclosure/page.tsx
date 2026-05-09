import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Risk Disclosure — BinaryBrokerHub',
  description:
    'Binary options are high-risk speculative products. Most retail accounts lose money. Read our full risk disclosure including jurisdiction-specific restrictions and our affiliate disclosure.',
  alternates: { canonical: '/en/risk-disclosure' },
};

export default function RiskDisclosurePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
        <ol className="flex flex-wrap gap-1">
          <li>
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <span aria-hidden className="mx-1.5">
              /
            </span>
          </li>
          <li className="text-gray-900">Risk Disclosure</li>
        </ol>
      </nav>

      <header className="mt-6">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Legal
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Risk Disclosure
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          Last updated 2026-05-09
        </p>
      </header>

      <article className="prose prose-gray mt-10 max-w-none prose-headings:tracking-tight prose-a:text-blue-700">
        <section
          aria-labelledby="summary-heading"
          className="not-prose mb-10 rounded-lg border border-amber-300 bg-amber-50 p-6 text-sm text-amber-900"
        >
          <h2 id="summary-heading" className="font-semibold">
            One-paragraph summary
          </h2>
          <p className="mt-2">
            Binary options are high-risk speculative products. The structural
            payout asymmetry of retail binary options means that most accounts
            lose money over time, even with skilled trading. The product is
            banned for retail consumers in the EU and UK, and is restricted
            in many other major jurisdictions. BinaryBrokerHub does not
            provide trading advice, recommendations, or signals. Information
            on this site is for research and educational purposes only.
          </p>
        </section>

        <h2>What binary options are, and why they are high-risk</h2>
        <p>
          A binary option is a contract that pays a fixed amount if a price
          condition is met at expiry, and pays nothing otherwise. The payout
          on a winning trade is typically 70–95% of the amount staked, while
          a losing trade loses 100% of the amount staked. This payout
          asymmetry means that the breakeven win rate for a retail trader at
          80% payout is approximately <strong>55.6%</strong> — your
          predictions must be correct more than 55 times out of every 100,
          consistently, before any trading edge becomes positive expected
          value.
        </p>
        <p>
          Most retail traders do not achieve a 55.6% sustained accuracy on
          short-expiry binary options. The European Securities and Markets
          Authority (ESMA), in its 2018 product intervention measures,
          documented retail loss rates of <strong>74–89%</strong> across the
          EU brokers it studied. This is why ESMA banned the product for
          retail.
        </p>
        <p>
          Some additional structural risks specific to the offshore binary
          options market:
        </p>
        <ul>
          <li>
            <strong>Counterparty risk.</strong> Most binary options brokers
            are the counterparty to your trade. When you win, the broker
            loses. This is a structural conflict of interest that does not
            exist on a transparent exchange.
          </li>
          <li>
            <strong>Price-feed manipulation risk.</strong> Many binary
            options are quoted on broker-controlled OTC synthetic feeds with
            no independent benchmark. Last-millisecond price flips on
            otherwise winning trades are a recurring user complaint across
            offshore brokers.
          </li>
          <li>
            <strong>Withdrawal risk.</strong> Offshore brokers are not bound
            by Tier-1 regulator dispute mechanisms. Frozen accounts and
            looped KYC re-verification are recurring patterns at the moment
            of large-balance withdrawal.
          </li>
          <li>
            <strong>Bonus-trap risk.</strong> Most offshore brokers offer
            deposit bonuses with high turnover requirements (commonly x35–x50
            of the bonus amount). Accepting a bonus typically locks the
            entire account balance until the turnover is met.
          </li>
        </ul>

        <h2>Capital loss disclaimer</h2>
        <p>
          <strong>
            You should never deposit funds at any binary options broker —
            including any broker reviewed on BinaryBrokerHub — that you
            cannot afford to lose entirely.
          </strong>{' '}
          We mean this literally. The combination of structural negative
          expected value, counterparty risk, price-feed risk, and withdrawal
          risk means that &ldquo;loss&rdquo; at an offshore binary broker is
          not a tail outcome. It is a baseline expectation against which
          unusual skill or unusual luck must be measured.
        </p>

        <h2>Jurisdiction-specific restrictions</h2>
        <p>
          Binary options are restricted, banned, or unauthorised in many
          major jurisdictions. The following is a non-exhaustive list as of
          the &ldquo;last updated&rdquo; date above. Verify your local rules
          directly before depositing.
        </p>

        <h3>European Economic Area (EEA)</h3>
        <p>
          Retail binary options have been banned across the EEA since the
          ESMA product intervention measures of <strong>July 2018</strong>.
          The ban has since been incorporated into national law in EU member
          states. Retail residents of EEA countries cannot legally trade
          binary options at any consumer-facing broker.
        </p>

        <h3>United Kingdom</h3>
        <p>
          The Financial Conduct Authority (FCA) banned the sale of binary
          options to retail consumers in <strong>April 2019</strong>. The
          FCA has also published a Warning List of unauthorised firms
          soliciting UK consumers — the brokers we review (Pocket Option,
          Quotex, IQ Option) all appear on it. UK residents have no
          Financial Ombudsman or Financial Services Compensation Scheme
          recourse for offshore binary brokers.
        </p>

        <h3>United States</h3>
        <p>
          The Commodity Futures Trading Commission (CFTC) restricts retail
          binary options to{' '}
          <strong>CFTC-registered exchanges only</strong>. The only major
          venue available to US retail clients is Nadex. Offshore brokers
          (including Pocket Option, Quotex, and IQ Option) do not accept US
          customers, and US residents using them are doing so against US
          federal law. Pocket Option appears on the CFTC RED List for
          soliciting US clients without registration.
        </p>

        <h3>India</h3>
        <p>
          The Reserve Bank of India (RBI) maintains an{' '}
          <strong>Alert List of unauthorised forex platforms</strong>.
          Indian residents undertaking forex transactions with unauthorised
          persons are{' '}
          <strong>liable for penal action under FEMA, 1999</strong> — up to
          three times the amount involved or ₹2 lakh, whichever is higher,
          plus daily continuing penalty. Of the brokers we review, Quotex
          and IQ Option are on the RBI Alert List as of the most recent
          update we verified. Trading these platforms in India creates
          direct legal exposure separate from the broker risk that applies
          in all jurisdictions.
        </p>

        <h3>Other restricted or unauthorised markets</h3>
        <ul>
          <li>
            <strong>Israel</strong> — binary options banned for retail under
            domestic law since 2017.
          </li>
          <li>
            <strong>Canada</strong> — binary options not approved by any
            Canadian Securities Administrators member jurisdiction.
          </li>
          <li>
            <strong>Australia</strong> — ASIC banned the sale of binary
            options to retail clients in 2021.
          </li>
          <li>
            <strong>Japan</strong> — binary options regulated under FFAJ
            self-regulatory rules with strict 2-hour minimum expiry; offshore
            brokers not authorised.
          </li>
          <li>
            <strong>Russia, Belarus, Ukraine</strong> — domestic regulatory
            and brokerage restrictions vary; verify before trading.
          </li>
          <li>
            <strong>Singapore (MAS), Pakistan (SECP), Indonesia
            (BAPPEBTI)</strong> — local regulators have issued warnings
            about specific offshore brokers.
          </li>
        </ul>

        <h2>Tax implications</h2>
        <p>
          Trading binary options may create taxable gains or losses in your
          jurisdiction of residence. Tax treatment varies widely — capital
          gains in some countries, gambling income in others, ordinary
          income elsewhere. We do not provide tax advice. Consult a
          qualified tax professional in your jurisdiction before trading.
        </p>

        <h2>Affiliate disclosure</h2>
        <p>
          BinaryBrokerHub earns affiliate commissions when readers sign up
          with brokers through links on this site. This is the only revenue
          stream for the publication. We disclose this on every page that
          contains an affiliate link, in the footer of every page, and on
          our{' '}
          <Link href="/editorial-team">editorial team</Link> page.
        </p>
        <p>
          <strong>Affiliate commissions do not influence our scoring.</strong>{' '}
          Our two ranking systems — <em>Best Regulated</em> (Tier-1 license
          required) and <em>Best for Beginners / Low Min Deposit</em>
          (different weight set) — are scored against the public criteria in
          our <Link href="/methodology">methodology</Link>. A broker with a
          higher CPA (cost per acquisition) is not pushed up the ranking.
          Score history is preserved publicly so any ranking change is
          dated, justified, and verifiable.
        </p>
        <p>
          We do not accept paid placement, sponsored articles, display
          advertising, broker-supplied content, guest posts from brokers, or
          free deposits / VIP perks from brokers.
        </p>

        <h2>Not financial advice</h2>
        <p>
          Information on BinaryBrokerHub is provided for{' '}
          <strong>research and educational purposes only</strong>. Nothing
          on this site constitutes financial advice, investment advice,
          trading advice, a solicitation, a recommendation to buy or sell
          any financial instrument, or guidance suitable for your specific
          financial situation.
        </p>
        <p>
          We do not provide trading signals, copy-trading recommendations,
          account management services, robo-advisory services, or
          discretionary portfolio management. Where we describe a broker&rsquo;s
          features (payouts, platform, payment methods), we are reporting
          observed and broker-stated facts, not endorsing the broker as
          suitable for you.
        </p>
        <p>
          Trading binary options or any leveraged speculative product
          involves substantial risk and is not appropriate for every
          investor. You should consult a qualified financial advisor in your
          jurisdiction before making any decision based on information you
          read on this site.
        </p>

        <h2>How we maintain this disclosure</h2>
        <p>
          We update this Risk Disclosure when:
        </p>
        <ul>
          <li>
            A regulator we cite issues a new ban, warning, or product
            intervention measure.
          </li>
          <li>
            We add a new broker review or a new geographic market.
          </li>
          <li>
            A reader, broker, or third party flags a factual error.
          </li>
        </ul>
        <p>
          The &ldquo;last updated&rdquo; date at the top of this page is the
          current published version. To report an error, email{' '}
          <a href="mailto:info@binarybrokerhub.com?subject=Correction%20Request">
            info@binarybrokerhub.com
          </a>{' '}
          with subject line &ldquo;Correction Request&rdquo;. We respond
          within 5 business days.
        </p>

        <h2>Related</h2>
        <ul>
          <li>
            <Link href="/methodology">Methodology</Link> — exact scoring
            weights and ranking eligibility rules.
          </li>
          <li>
            <Link href="/editorial-team">Editorial Team</Link> — our
            editorial process, conflict-of-interest policy, and correction
            policy.
          </li>
          <li>
            <Link href="/privacy">Privacy Policy</Link> — what data we
            collect and how we use it.
          </li>
          <li>
            <Link href="/contact">Contact</Link> — how to reach us.
          </li>
        </ul>
      </article>
    </main>
  );
}
