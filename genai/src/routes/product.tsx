import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "./index";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  ListChecks,
  ClipboardList,
  Network,
  FileDown,
  Shield,
  Lock,
  ServerCog,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — DROPShield compliance workflow for California data brokers" },
      {
        name: "description",
        content:
          "See how DROPShield operationalizes every step of the California DROP / Delete Act workflow — from list intake through audit-ready evidence.",
      },
      { property: "og:title", content: "Inside the DROPShield compliance workflow" },
      {
        property: "og:description",
        content:
          "Intake, matching, deletion, vendor routing, evidence export — built for California data brokers.",
      },
    ],
  }),
  component: ProductPage,
});

const steps = [
  {
    icon: Database,
    title: "1. Import or receive deletion request list",
    body: "Securely ingest the CPPA DROP list via signed API, SFTP, or scheduled import on every 45-day cycle. Hashed identifiers only — never raw PII in transit.",
    bullets: ["Scheduled cycle ingestion", "Signed payload verification", "Identifier-only data model"],
  },
  {
    icon: ListChecks,
    title: "2. Match identifiers against internal systems",
    body: "Deterministic and probabilistic matching against your CRM, warehouse, marketing stack, and identity graph. Every match is logged with confidence.",
    bullets: ["Hashed email / phone matching", "Deterministic & probabilistic", "Confidence scoring + thresholds"],
  },
  {
    icon: ClipboardList,
    title: "3. Create deletion & suppression tasks",
    body: "Auto-generate deletion tasks with owners, SLAs, and approval gates. Persistent suppression prevents re-ingestion on future data loads.",
    bullets: ["SLA timers per request", "Approval workflows", "Persistent suppression list"],
  },
  {
    icon: Network,
    title: "4. Route requests to vendors & service providers",
    body: "Dispatch deletion instructions to downstream processors via API, email, or webhook. Track acknowledgments and escalate stalled vendors.",
    bullets: ["Native vendor connectors", "Email-based fallback", "Acknowledgment tracking"],
  },
  {
    icon: FileDown,
    title: "5. Export audit-ready evidence",
    body: "Generate immutable evidence packs with hashes, timestamps, and chain of custody — formatted for CPPA inquiries and internal audit.",
    bullets: ["Immutable cryptographic logs", "Per-cycle evidence packs", "PDF + CSV exports"],
  },
];

const trust = [
  { icon: Lock, title: "SOC 2 architecture", body: "Designed to SOC 2 Type II controls. Customer-managed encryption available on Enterprise." },
  { icon: ServerCog, title: "US-only data residency", body: "All processing in US regions. No cross-border data movement, ever." },
  { icon: Shield, title: "Identifier-only model", body: "We work in hashes. We don't store raw consumer PII — your data stays in your stack." },
];

function ProductPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            Compliance workflow
          </div>
          <h1 className="mx-auto mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            The DROP workflow, operationalized end-to-end.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            DROPShield turns the California Delete Act's recurring obligations into a
            structured, audit-ready operating system for your privacy and compliance team.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-4xl space-y-6 px-4">
          {steps.map((s) => (
            <Card key={s.title} className="shadow-card">
              <CardContent className="grid gap-6 p-8 md:grid-cols-[auto_1fr]">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.body}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Security & trust"
            title="A platform privacy teams can defend in front of the CPPA."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {trust.map((t) => (
              <Card key={t.title} className="shadow-card">
                <CardContent className="p-6">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-secondary text-primary">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to see DROPShield against your stack?
          </h2>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/checklist">
                Run Readiness Check <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Book a walkthrough</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
