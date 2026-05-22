import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/product", label: "Product" },
  { to: "/pricing", label: "Pricing" },
  { to: "/checklist", label: "Readiness Checklist" },
  { to: "/calculator", label: "Penalty Calculator" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header({ pathname = "/" }: { pathname?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-navy text-navy-foreground">
            <Shield className="h-4 w-4" />
          </span>
          <span>DROPShield</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <a
                key={n.to}
                href={n.to}
                className={
                  "text-sm transition-colors hover:text-foreground " +
                  (active ? "text-foreground font-medium" : "text-muted-foreground")
                }
              >
                {n.label}
              </a>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="sm">
            <a href="/contact">Sign in</a>
          </Button>
          <Button asChild size="sm">
            <a href="/checklist">Run Readiness Check</a>
          </Button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <a
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-2">
              <a href="/checklist" onClick={() => setOpen(false)}>
                Run Readiness Check
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
