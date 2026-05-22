import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { z } from "zod";

type Props = {
  source?: string;
};

const leadSchema = z.object({
  email: z.string().trim().email("Enter a valid work email").max(255),
  company: z.string().trim().max(120).optional(),
  unresolved_requests: z.number().int().min(0).max(1_000_000),
  days_overdue: z.number().int().min(0).max(3650),
});

export function PenaltyEstimator({ source = "homepage_estimator" }: Props) {
  const [requests, setRequests] = useState<number | "">(50);
  const [days, setDays] = useState<number | "">(14);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const exposure = useMemo(() => {
    const r = typeof requests === "number" ? requests : 0;
    const d = typeof days === "number" ? days : 0;
    return Math.max(0, r) * Math.max(0, d) * 200;
  }, [requests, days]);

  const formatted = useMemo(
    () =>
      exposure.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }),
    [exposure],
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const parsed = leadSchema.safeParse({
      email,
      company: company || undefined,
      unresolved_requests: typeof requests === "number" ? requests : 0,
      days_overdue: typeof days === "number" ? days : 0,
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }

    setSubmitting(true);
    // TODO: re-wire to a real backend (see src/lib/server-todo.md).
    // Original used supabase.from('penalty_estimator_leads').insert(...).
    setTimeout(() => {
      console.log("[PenaltyEstimator] would submit lead", {
        ...parsed.data,
        estimated_exposure_cents: exposure * 100,
        source,
      });
      setSubmitted(true);
      setSubmitting(false);
      toast.success("Got it. Your DROP exposure summary is on the way.");
    }, 500);
  }

  return (
    <Card className="shadow-glow">
      <CardContent className="p-6 md:p-8">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <AlertTriangle className="h-4 w-4 text-warning" />
          Estimate your exposure
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="requests">Unresolved deletion requests</Label>
              <Input
                id="requests"
                type="number"
                min={0}
                max={1000000}
                value={requests}
                onChange={(e) =>
                  setRequests(e.target.value === "" ? "" : Number(e.target.value))
                }
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="days">Average days overdue</Label>
              <Input
                id="days"
                type="number"
                min={0}
                max={3650}
                value={days}
                onChange={(e) =>
                  setDays(e.target.value === "" ? "" : Number(e.target.value))
                }
                className="mt-1.5"
              />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-secondary/60 p-5">
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Estimated exposure
            </div>
            <div className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
              {formatted}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              Calculated at $200 / request / day, per CA Civil Code §1798.99.85.
            </div>
          </div>

          {submitted ? (
            <div className="flex items-start gap-3 rounded-lg border border-success/30 bg-success/10 p-4 text-sm">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
              <div>
                <div className="font-semibold text-foreground">You're on the list.</div>
                <div className="mt-1 text-muted-foreground">
                  We've logged your exposure snapshot and will email a detailed summary
                  with a 30-day remediation roadmap within one business day.
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <Label htmlFor="email">Work email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@yourcompany.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={255}
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company (optional)</Label>
                  <Input
                    id="company"
                    placeholder="Acme Data Co."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    maxLength={120}
                    className="mt-1.5"
                  />
                </div>
              </div>
              <Button type="submit" size="lg" disabled={submitting} className="w-full">
                {submitting ? "Sending…" : "Send my exposure summary"}
              </Button>
              <p className="text-xs text-muted-foreground">
                We'll never share your email. Estimate only — not legal advice.
              </p>
            </>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
