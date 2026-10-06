import { SiteLayout } from "@/components/site/SiteLayout";
import { PricingSection } from "@/components/site/PricingSection";

export function PricingPage() {
  return (
    <SiteLayout pathname="/pricing">
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            Pricing
          </div>
          <h1 className="mx-auto mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Compliance pricing without the enterprise tax.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Plans designed for small and mid-size California data brokers. Every tier
            includes unlimited 45-day DROP cycles.
          </p>
        </div>
      </section>
      <PricingSection />
      <section className="py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-semibold tracking-tight">Frequently asked</h2>
          <div className="mt-8 space-y-6">
            {[
              {
                q: "When did DROP obligations begin?",
                a: "August 1, 2026. Since then, registered data brokers must access DROP at least once every 45 calendar days and process the deletion requests they download.",
              },
              {
                q: "How often do we need to re-check the DROP list?",
                a: "Every 45 days, brokers must re-check the DROP list and process new matching consumer deletions — indefinitely.",
              },
              {
                q: "Do you store our consumer PII?",
                a: "No. DropAudit is designed to work with hashed identifiers, so raw PII stays inside your systems. The service is pre-launch and is not processing customer data yet — see the Security page for how this is documented.",
              },
              {
                q: "Enforcement has started. Is it too late to onboard?",
                a: "No. DROP obligations recur every 45 days, so each cycle run through a documented process counts. DropAudit can't change cycles already past — talk to your counsel about any you've missed.",
              },
            ].map((f) => (
              <div key={f.q} className="rounded-lg border border-border bg-card p-6 shadow-card">
                <div className="font-semibold">{f.q}</div>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
