import { SiteLayout } from "@/components/site/SiteLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().min(1, "Required").max(120),
  role: z.string().trim().max(120).optional(),
  message: z.string().trim().min(1, "Required").max(1500),
});

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks — a compliance specialist will reach out within one business day.");
      setForm({ name: "", email: "", company: "", role: "", message: "" });
    }, 600);
  }

  return (
    <SiteLayout pathname="/contact">
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Contact</div>
          <h1 className="mx-auto mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Talk to a DROP compliance specialist.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            We respond to every inquiry within one business day. Whether you're scoping
            readiness or already behind, we'll help you map a plan.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-card">
              <Mail className="h-5 w-5 text-primary" />
              <div className="mt-3 text-sm font-semibold">Email</div>
              <a href="mailto:hello@dropaudit.co" className="text-sm text-muted-foreground hover:text-foreground">
                hello@dropaudit.co
              </a>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-card">
              <MapPin className="h-5 w-5 text-primary" />
              <div className="mt-3 text-sm font-semibold">Headquarters</div>
              <div className="text-sm text-muted-foreground">San Francisco, California</div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-card">
              <ShieldCheck className="h-5 w-5 text-success" />
              <div className="mt-3 text-sm font-semibold">Security inquiries</div>
              <a href="mailto:security@dropaudit.co" className="text-sm text-muted-foreground hover:text-foreground">
                security@dropaudit.co
              </a>
            </div>
          </div>

          <Card className="shadow-card">
            <CardContent className="p-6 md:p-8">
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} className="mt-1.5" maxLength={100} />
                  </div>
                  <div>
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-1.5" maxLength={255} />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" value={form.company} onChange={(e) => update("company", e.target.value)} className="mt-1.5" maxLength={120} />
                  </div>
                  <div>
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" placeholder="Privacy engineer, GC, CTO…" value={form.role} onChange={(e) => update("role", e.target.value)} className="mt-1.5" maxLength={120} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea id="message" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} className="mt-1.5" maxLength={1500} />
                </div>
                <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
                  {submitting ? "Sending…" : "Send message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteLayout>
  );
}
