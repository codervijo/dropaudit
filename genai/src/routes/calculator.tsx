import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PenaltyEstimator } from "@/components/site/PenaltyEstimator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "DROP Penalty Calculator — DROPShield" },
      {
        name: "description",
        content:
          "Estimate your California DROP / Delete Act penalty exposure at $200 per request, per day. Free calculator for data brokers.",
      },
      { property: "og:title", content: "DROP Penalty Calculator" },
      {
        property: "og:description",
        content: "Quantify your DROP exposure at $200/request/day in real time.",
      },
    ],
  }),
  component: CalculatorPage,
});

function CalculatorPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/40 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            Free tool
          </div>
          <h1 className="mx-auto mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            DROP Penalty Calculator
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            California's DROP statute carries penalties of $200 per unresolved deletion
            request, per day. Use this calculator to model your exposure under different
            backlog scenarios.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:items-start">
          <PenaltyEstimator />
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold">How the calculation works</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Exposure = unresolved requests × days overdue × $200. The CPPA may
                  assess penalties cumulatively for each request that remains open past
                  the statutory deletion window.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold">Common backlog scenarios</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {[
                    ["10 requests · 30 days overdue", "$60,000"],
                    ["50 requests · 30 days overdue", "$300,000"],
                    ["100 requests · 45 days overdue", "$900,000"],
                    ["250 requests · 60 days overdue", "$3,000,000"],
                  ].map(([s, v]) => (
                    <li key={s} className="flex items-center justify-between border-b border-border py-2 last:border-0">
                      <span className="text-muted-foreground">{s}</span>
                      <span className="font-semibold">{v}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold">Reduce exposure with DROPShield</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  DROPShield closes open requests faster by automating intake, matching,
                  routing, and evidence — directly reducing the days-overdue multiplier.
                </p>
                <Button asChild className="mt-4">
                  <Link to="/contact">Talk to compliance</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
