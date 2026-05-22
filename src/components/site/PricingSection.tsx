import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "./SectionHeader";

export function PricingSection() {
  const tiers = [
    {
      name: "Starter",
      price: "$499",
      cadence: "/mo",
      tagline: "DROP readiness + tracker",
      features: [
        "DROP list intake (manual & API)",
        "Deletion request tracker",
        "45-day cycle scheduling",
        "Basic status dashboard",
        "Up to 2 users",
      ],
      cta: "Start readiness",
      to: "/checklist",
    },
    {
      name: "Compliance",
      price: "$1,499",
      cadence: "/mo",
      tagline: "Suppression + vendor routing + audit exports",
      features: [
        "Everything in Starter",
        "Persistent suppression list manager",
        "Vendor deletion routing & acknowledgments",
        "Audit log exports (PDF / CSV)",
        "Penalty exposure dashboard",
        "Up to 10 users",
      ],
      cta: "Talk to sales",
      to: "/contact",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "",
      tagline: "Custom workflows + API integration",
      features: [
        "Everything in Compliance",
        "Direct integrations with warehouses & CDPs",
        "SAML SSO, SCIM, custom roles",
        "Dedicated compliance engineer",
        "Custom evidence packs & DPA support",
      ],
      cta: "Contact us",
      to: "/contact",
    },
  ];

  return (
    <section id="pricing" className="border-t border-border bg-secondary/40 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Pricing"
          title="Predictable pricing for serious compliance programs."
          sub="Annual contracts available. All plans include unlimited DROP cycles, secure data handling, and US-based support."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <Card
              key={t.name}
              className={
                "relative shadow-card " +
                (t.highlight ? "border-primary/40 ring-2 ring-primary/20" : "")
              }
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.tagline}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight">{t.price}</span>
                  <span className="text-sm text-muted-foreground">{t.cadence}</span>
                </div>
                <Button asChild className="mt-6 w-full" variant={t.highlight ? "default" : "outline"}>
                  <a href={t.to}>{t.cta}</a>
                </Button>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
