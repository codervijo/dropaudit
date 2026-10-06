import { SiteLayout } from "@/components/site/SiteLayout";
import { LegalSection } from "@/components/site/LegalSection";

export function SecurityPage() {
  return (
    <SiteLayout pathname="/security">
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            Security
          </div>
          <h1 className="mx-auto mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            How DropAudit protects your data.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            What we host, where, how it's protected, who can touch it, and where our
            certifications actually stand.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-3xl space-y-6 px-4">
          <div className="rounded-lg border border-border bg-secondary/40 p-5 text-sm text-muted-foreground">
            <strong className="text-foreground">Status:</strong> DropAudit is pre-launch and
            is not yet accepting customer data. Where this page says a detail will be
            published before launch, that detail is genuinely undecided — we would rather
            say so than publish a specification we cannot yet stand behind.
          </div>

          <LegalSection id="drop-boundary" title="We never access DROP">
            <p>
              DropAudit does not log in to DROP, does not hold your DROP credentials, and
              does not connect to DROP on your behalf. You authenticate to DROP, download
              your deletion lists, and upload status reports yourself. DropAudit processes
              only the lists and records you send us.
            </p>
            <p>
              The DROP regulations require a data broker to restrict access to its DROP
              credentials, and to information derived from DROP, to persons authorized to
              act on its behalf, and make the broker responsible for all actions taken
              through its DROP account (11 CCR §7610(a)(1)). Keeping credentials entirely
              inside your team keeps that boundary simple.
            </p>
          </LegalSection>

          <LegalSection id="hosting" title="Where data is hosted">
            <p>
              Customer data hosting is not yet in production. The hosting provider and
              region(s) will be named here before DropAudit accepts any customer data.
            </p>
            <p>
              The public dropaudit.co website is served by Cloudflare.
            </p>
          </LegalSection>

          <LegalSection id="encryption" title="Encryption in transit and at rest">
            <ul>
              <li>
                <strong>In transit:</strong> the public dropaudit.co website is served
                over HTTPS by Cloudflare. The TLS floor and scope for the application,
                ingestion API, and SFTP will be published before launch.
              </li>
              <li>
                <strong>At rest:</strong> the encryption algorithm, the storage layers it
                covers, and the key-management service will be published before launch.
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="hashing" title="Identifier hashing">
            <p>
              DropAudit is designed to work with hashed consumer identifiers rather than raw
              identifiers. Before comparison, identifiers are standardized as the DROP
              regulations require (11 CCR §7613(a)(1)(A)).
            </p>
            <ul>
              <li>
                <strong>Hash function:</strong> the algorithm and the normalization steps
                applied before hashing will be published before launch.
              </li>
              <li>
                <strong>Where hashing happens:</strong> DropAudit is designed for
                identifiers to be hashed in your environment before upload. The final
                specification will be published before launch.
              </li>
              <li>
                <strong>Raw identifiers:</strong> the service is designed not to receive
                raw consumer identifiers. Any exception, and any retention that would
                follow, will be published before launch.
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="access" title="Access controls">
            <ul>
              <li>
                <strong>Customer users:</strong> authentication and MFA, and which plans
                offer SSO, SCIM provisioning, or custom roles, will be published before
                launch.
              </li>
              <li>
                <strong>DropAudit personnel:</strong> our production access model — who
                can reach customer data, and how access is granted, reviewed, and logged —
                will be published before launch.
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="retention" title="Data retention and deletion">
            <ul>
              <li>
                <strong>Uploaded deletion lists and match results:</strong> the retention
                period, and whether it is customer-configurable, will be published before
                launch.
              </li>
              <li>
                <strong>Audit logs and evidence packs:</strong> the retention period will
                be published before launch.
              </li>
              <li>
                <strong>On termination:</strong> the deletion window (including backups)
                and the export window will be set in the customer agreement and published
                before launch.
              </li>
            </ul>
            <p>
              Note that the DROP regulations require brokers to keep unmatched deletion lists
              to screen newly collected records (11 CCR §7613(c)). Confirm with your counsel
              which system of record holds that list for your program.
            </p>
          </LegalSection>

          <LegalSection id="subprocessors" title="Subprocessors">
            <p>
              Third parties that process customer data on DropAudit's behalf: none today.
              DropAudit does not yet process customer data. This section will list each
              subprocessor, its purpose, and its location before any customer data is
              accepted.
            </p>
            <p>
              Website only (no customer data): Cloudflare, Inc. serves dropaudit.co; Google
              Fonts serves the site's typeface.
            </p>
          </LegalSection>

          <LegalSection id="soc2" title="SOC 2 status">
            <p>
              <strong>DropAudit is not SOC 2 certified</strong> and does not currently hold a
              SOC 2 Type I or Type II report. We will update this page if that changes.
            </p>
            <p>
              Security questionnaires and DPA requests are welcome at{" "}
              <a href="mailto:security@dropaudit.co">security@dropaudit.co</a>.
            </p>
          </LegalSection>

          <LegalSection id="report" title="Reporting a vulnerability">
            <p>
              Email <a href="mailto:security@dropaudit.co">security@dropaudit.co</a> with
              details and steps to reproduce. Please do not access or modify data that isn't
              yours while investigating.
            </p>
          </LegalSection>
        </div>
      </section>
    </SiteLayout>
  );
}
