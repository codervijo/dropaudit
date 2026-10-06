import { SiteLayout } from "@/components/site/SiteLayout";
import { LegalSection } from "@/components/site/LegalSection";

export function PrivacyPage() {
  return (
    <SiteLayout pathname="/privacy">
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            Privacy
          </div>
          <h1 className="mx-auto mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Effective October 6, 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-3xl space-y-6 px-4">
          <LegalSection id="who-we-are" title="1. Who we are and what this policy covers">
            <p>
              DropAudit (Lamill Web Systems, "DropAudit," "we," "us") provides
              compliance operations software to California-registered data brokers. This
              policy explains how we handle personal information in two different roles:
            </p>
            <ul>
              <li>
                <strong>As a business (controller)</strong> for information about visitors to
                dropaudit.co, prospects who contact us, and the business contact details of
                our customers' users. Sections 2–6 cover this.
              </li>
              <li>
                <strong>As a service provider (processor)</strong> for the consumer
                identifiers and records our customers upload to DropAudit. Our customer is
                the business responsible for that data; we process it only on their behalf.
                Section 7 covers this.
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="collect" title="2. Information we collect as a business">
            <ul>
              <li>
                <strong>Information you give us:</strong> whatever you choose to include
                when you email us. Our contact form and penalty calculator both compose a
                message in your own email app and send nothing from this page; the exposure
                figure is calculated in your browser. If you become a customer, we also hold
                your account and billing contact details.
              </li>
              <li>
                <strong>Information collected automatically:</strong> when you visit
                dropaudit.co, our hosting provider (Cloudflare) processes standard request
                data such as IP address, browser user agent, and pages requested, and may
                set strictly necessary security cookies. Our pages load fonts from Google
                Fonts, which receives your IP address and browser details.
              </li>
            </ul>
            <p>We do not use advertising cookies or cross-site tracking on dropaudit.co.</p>
          </LegalSection>

          <LegalSection id="use" title="3. How we use it">
            <ul>
              <li>To respond to inquiries and send the summaries or reports you request</li>
              <li>To provide, support, secure, and bill for the DropAudit service</li>
              <li>To send service and product communications to customer contacts</li>
              <li>To protect our site and service and comply with legal obligations</li>
            </ul>
          </LegalSection>

          <LegalSection id="disclose" title="4. Sale, sharing, and disclosure">
            <p>
              We do not sell personal information and do not share it for cross-context
              behavioral advertising. We disclose personal information only to service
              providers that help us operate (listed on our{" "}
              <a href="/security#subprocessors">Security page</a>), when required by law, or
              in connection with a merger, acquisition, or sale of assets.
            </p>
          </LegalSection>

          <LegalSection id="retention" title="5. Retention">
            <p>
              We keep business-contact and inquiry information for as long as we need it
              to respond to you and to keep ordinary business records, or longer where
              required by law. You can ask us to delete it at any time by emailing{" "}
              <a href="mailto:hello@dropaudit.co">hello@dropaudit.co</a>. Defined retention
              periods will be published here before DropAudit begins processing customer
              data.
            </p>
          </LegalSection>

          <LegalSection id="rights" title="6. Your rights">
            <p>
              California residents have the right to know what personal information we hold
              about them, to request deletion or correction, to opt out of sale or sharing
              (we do neither), to limit use of sensitive personal information, and not to be
              discriminated against for exercising these rights. To make a request, email{" "}
              <a href="mailto:hello@dropaudit.co">hello@dropaudit.co</a>. We will verify your
              request before acting on it, and you may use an authorized agent.
            </p>
          </LegalSection>

          <LegalSection id="customer-data" title="7. Customer data we process as a service provider">
            <p>
              <strong>DropAudit is pre-launch and is not yet processing customer data.</strong>{" "}
              This section describes how customer data will be handled and takes effect when
              the service launches.
            </p>
            <p>
              Customers upload DROP deletion lists they have retrieved from DROP themselves,
              along with identifiers from their own systems, so that DropAudit can match,
              route, and document deletions. <strong>DropAudit never accesses DROP.</strong>
            </p>
            <p>For this customer data:</p>
            <ul>
              <li>
                Our customer is the business that determines why and how the data is
                processed. We act as its service provider under our customer agreement. A
                data processing addendum will be available when DropAudit becomes generally
                available.
              </li>
              <li>
                We process customer data only to provide the DropAudit service to that
                customer. We do not sell it, share it for advertising, or combine it with data
                from other customers or sources.
              </li>
              <li>
                We engage subprocessors only under written obligations at least as
                protective as ours, and list them on our{" "}
                <a href="/security#subprocessors">Security page</a>.
              </li>
              <li>
                When a customer's contract ends, we delete customer data within the period
                set in the customer agreement, subject to legal retention requirements. That
                period will be published before DropAudit begins processing customer data.
              </li>
            </ul>
            <p>
              <strong>If you are a consumer</strong> whose information may be held by a data
              broker that uses DropAudit, please submit your request through DROP or to that
              data broker directly. If you contact us, we will refer your request to the
              relevant customer where we can identify it.
            </p>
          </LegalSection>

          <LegalSection id="security" title="8. Security">
            <p>
              See our <a href="/security">Security page</a> for how we host and protect data.
            </p>
          </LegalSection>

          <LegalSection id="location" title="9. Where data is processed">
            <p>
              Personal information we handle as a business is processed in the United
              States. Because dropaudit.co is served by Cloudflare's global
              content-delivery network, standard request data — IP address, browser user
              agent, and the page requested — may be processed at edge locations outside
              the United States.
            </p>
          </LegalSection>

          <LegalSection id="children" title="10. Children">
            <p>
              DropAudit is a business service and is not directed to children under 16. We
              do not knowingly collect their personal information.
            </p>
          </LegalSection>

          <LegalSection id="changes" title="11. Changes and contact">
            <p>
              We will post any changes to this policy on this page and update the effective
              date. Questions: <a href="mailto:hello@dropaudit.co">hello@dropaudit.co</a>
            </p>
          </LegalSection>
        </div>
      </section>
    </SiteLayout>
  );
}
