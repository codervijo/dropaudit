import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/checklist")({
  head: () => ({
    meta: [
      { title: "DROP Readiness Checklist — DROPShield" },
      {
        name: "description",
        content:
          "A practical, free DROP readiness checklist for California-registered data brokers. Score your compliance posture before August 1, 2026.",
      },
      { property: "og:title", content: "DROP Readiness Checklist" },
      {
        property: "og:description",
        content: "Score your DROP / Delete Act readiness before August 1, 2026.",
      },
    ],
  }),
  component: ChecklistPage,
});

const groups: { title: string; items: string[] }[] = [
  {
    title: "Registration & governance",
    items: [
      "Registered as a data broker with the California Privacy Protection Agency (CPPA)",
      "Named accountable owner for DROP compliance (privacy, legal, or compliance lead)",
      "Internal policy documenting the 45-day deletion cycle",
      "Board / executive briefing on DROP exposure completed",
    ],
  },
  {
    title: "Data inventory & matching",
    items: [
      "Complete inventory of systems storing California consumer identifiers",
      "Standardized hashing approach for emails and phone numbers",
      "Matching logic defined (deterministic + probabilistic thresholds)",
      "Test dataset prepared for dry-run DROP cycles",
    ],
  },
  {
    title: "Deletion & suppression",
    items: [
      "Deletion task workflow with assigned owners and SLAs",
      "Persistent suppression list preventing re-ingestion",
      "Suppression enforced on all upstream data acquisitions",
      "Backup and archive systems included in deletion scope",
    ],
  },
  {
    title: "Vendor & service-provider routing",
    items: [
      "Inventory of downstream processors receiving consumer data",
      "Deletion routing mechanism for each vendor (API or email)",
      "Acknowledgment tracking and escalation policy in place",
      "DPA / contractual deletion obligations documented",
    ],
  },
  {
    title: "Evidence & reporting",
    items: [
      "Immutable audit log of every DROP request lifecycle",
      "Per-cycle evidence pack template defined",
      "Internal reporting dashboard reviewed monthly",
      "Process for responding to a CPPA inquiry within 10 business days",
    ],
  },
];

function ChecklistPage() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const total = useMemo(() => groups.reduce((s, g) => s + g.items.length, 0), []);
  const done = checked.size;
  const pct = Math.round((done / total) * 100);

  const level =
    pct >= 85 ? "Audit-ready" : pct >= 60 ? "On track" : pct >= 30 ? "At risk" : "Critical gap";
  const levelColor =
    pct >= 85
      ? "text-success"
      : pct >= 60
        ? "text-primary"
        : pct >= 30
          ? "text-warning"
          : "text-destructive";

  function toggle(item: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  }

  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/40 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            Free assessment
          </div>
          <h1 className="mx-auto mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            DROP Readiness Checklist
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            20 items across 5 domains. Score your readiness for the California DROP /
            Delete Act deadline on August 1, 2026.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            {groups.map((g) => (
              <Card key={g.title} className="shadow-card">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-lg font-semibold">{g.title}</h2>
                  <ul className="mt-5 space-y-3">
                    {g.items.map((item) => {
                      const id = `chk-${item}`;
                      const isChecked = checked.has(item);
                      return (
                        <li key={item} className="flex items-start gap-3">
                          <Checkbox
                            id={id}
                            checked={isChecked}
                            onCheckedChange={() => toggle(item)}
                            className="mt-0.5"
                          />
                          <label
                            htmlFor={id}
                            className={
                              "cursor-pointer text-sm leading-relaxed " +
                              (isChecked ? "text-muted-foreground line-through" : "")
                            }
                          >
                            {item}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Card className="shadow-glow">
              <CardContent className="p-6">
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Your readiness score
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight">{pct}%</span>
                  <span className={"text-sm font-medium " + levelColor}>{level}</span>
                </div>
                <Progress value={pct} className="mt-4" />
                <div className="mt-2 text-xs text-muted-foreground">
                  {done} of {total} controls in place
                </div>

                <div className="mt-6 space-y-2 text-sm">
                  {[
                    "Personalized remediation plan",
                    "Estimated time-to-compliance",
                    "Suggested vendor mapping",
                  ].map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {b}
                    </div>
                  ))}
                </div>

                <Button className="mt-6 w-full">Email me my full report</Button>
                <p className="mt-3 text-xs text-muted-foreground">
                  No spam. Used only to send your readiness report.
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
