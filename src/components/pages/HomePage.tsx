import {
  Shield,
  AlertTriangle,
  CalendarClock,
  FileCheck2,
  ArrowRight,
  CheckCircle2,
  ListChecks,
  Users,
  Database,
  Network,
  FileDown,
  Gauge,
  ClipboardList,
  CalendarDays,
  Activity,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PricingSection } from "@/components/site/PricingSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PenaltyEstimator } from "@/components/site/PenaltyEstimator";

const pains = [
  {
    icon: CalendarClock,
    title: "August 1, 2026 deadline",
    body: "Registered California data brokers must begin honoring DROP deletion requests on the first business day of August 2026.",
  },
  {
    icon: AlertTriangle,
    title: "45-day deletion cycle",
    body: "Every 45 days, brokers must re-check the DROP list and delete newly matching consumer data — indefinitely.",
  },
  {
    icon: FileCheck2,
    title: "Audit evidence required",
    body: "The CPPA expects documented proof: who you matched, what you suppressed, when you completed each cycle.",
  },
  {
    icon: Gauge,
    title: "Penalties compound fast",
    body: "$200 per unresolved deletion request, per day. A backlog of 50 requests over a month is six figures of exposure.",
  },
];

const steps = [
  { icon: Database, title: "Import the DROP list", body: "Pull the CPPA DROP deletion list via secure upload or API on every 45-day cycle." },
  { icon: ListChecks, title: "Match identifiers", body: "Run hashed identifier matching against your internal systems, CRMs, and warehouses." },
  { icon: ClipboardList, title: "Generate deletion tasks", body: "Auto-create deletion and suppression tasks with owners, SLAs, and approval gates." },
  { icon: Network, title: "Route to vendors", body: "Dispatch deletion instructions to downstream service providers and track acknowledgments." },
  { icon: FileDown, title: "Export audit evidence", body: "Produce regulator-ready evidence packs with timestamps, hashes, and chain of custody." },
];

const features = [
  { icon: ListChecks, title: "Deletion request tracker", body: "A single queue for every DROP request, with status, owner, and SLA countdown." },
  { icon: Shield, title: "Suppression list manager", body: "Persistent suppression of opted-out identifiers across re-ingestion and new datasets." },
  { icon: Network, title: "Vendor deletion routing", body: "Pre-built connectors and email workflows for service providers and third parties." },
  { icon: CalendarDays, title: "45-day compliance calendar", body: "Automated cycle scheduling so you never miss a re-check window." },
  { icon: Activity, title: "Status reporting dashboard", body: "Real-time visibility into open, in-progress, and completed requests." },
  { icon: FileDown, title: "Audit log exports", body: "Immutable logs exportable as PDF or CSV for CPPA inquiries and internal audit." },
  { icon: Gauge, title: "Penalty exposure estimator", body: "Quantify open-request risk at $200/request/day in real time." },
  { icon: CheckCircle2, title: "Readiness checklist", body: "Step-by-step preparation tailored to your stack, vendors, and team size." },
];

export function HomePage() {
  return (
    <SiteLayout pathname="/">
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="container mx-auto px-4 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              California DROP / Delete Act · Effective Aug 1, 2026
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Be DROP-ready before August 1.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-white/75 md:text-lg">
              A compliance operations layer for California data brokers handling DROP
              deletion requests, suppression lists, service-provider routing, status
              reporting, and audit evidence.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="/checklist">
                  Run DROP Readiness Check <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <a href="/product">View Compliance Workflow</a>
              </Button>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-left md:gap-8">
              {[
                ["Aug 1, 2026", "DROP enforcement begins"],
                ["Every 45 days", "Mandated re-check cycle"],
                ["$200 / day", "Per unresolved request"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-xl font-semibold tracking-tight text-white md:text-2xl">{k}</div>
                  <div className="mt-1 text-xs text-white/60 md:text-sm">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="The compliance problem"
            title="DROP is not a one-time project. It's a recurring obligation."
            sub="The Delete Request and Opt-out Platform forces every registered California data broker into a perpetual deletion cycle — with serious financial consequences for falling behind."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pains.map((p) => (
              <Card key={p.title} className="shadow-card">
                <CardContent className="p-6">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-secondary text-primary">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="How DROPShield works"
            title="Five steps from raw DROP list to audit-ready evidence."
            sub="A purpose-built workflow that operationalizes every CPPA requirement, without forcing your engineering team to build it from scratch."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Card key={s.title} className="relative shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">
                      {i + 1}
                    </span>
                    STEP {i + 1}
                  </div>
                  <div className="mt-5 grid h-10 w-10 place-items-center rounded-md bg-accent text-accent-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Platform"
            title="Everything required to operate a DROP program."
            sub="From intake to evidence export — every capability your privacy, legal, and engineering teams need in one system of record."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <Card key={f.title} className="shadow-card transition-shadow hover:shadow-glow">
                <CardContent className="p-6">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-secondary text-primary">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-sm font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PENALTY ESTIMATOR */}
      <section id="estimator" className="border-y border-border bg-secondary/40 py-20 md:py-28">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium">
              <AlertTriangle className="h-3.5 w-3.5 text-warning" />
              Penalty exposure estimator
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
              How much DROP exposure is on your books today?
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Estimate your statutory penalty exposure at the California DROP rate of
              <strong className="text-foreground"> $200 per request, per day</strong>. We'll
              email a private summary with recommended next steps — no sales pitch.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                "Quantifies real-time exposure across open requests",
                "Benchmarks against typical broker backlogs",
                "Includes a 30-day remediation roadmap",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <PenaltyEstimator />
        </div>
      </section>

      {/* ICP */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-10 text-center shadow-card md:p-14">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-secondary text-primary">
              <Users className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Built for California data brokers without a giant privacy engineering team.
            </h2>
            <p className="mt-4 text-muted-foreground">
              If you're a 10–200 person broker with a registered status and a small
              compliance team, DROPShield gives you the operational backbone you'd
              otherwise need to build from scratch — without hiring a six-person
              privacy engineering org.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <PricingSection />

      {/* FINAL CTA */}
      <section className="bg-navy py-20 text-navy-foreground md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Know your DROP exposure before August 1.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            Run a free readiness check today. 15 minutes of input, a clear picture of
            where you stand before the deadline.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="/checklist">
                Run DROP Readiness Check <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a href="/contact">Talk to compliance</a>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
