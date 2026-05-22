import { Link } from "@tanstack/react-router";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-white/10">
              <Shield className="h-4 w-4" />
            </span>
            DROPShield
          </Link>
          <p className="mt-4 max-w-sm text-sm text-white/65">
            Compliance operations for California-registered data brokers preparing
            for the DROP / Delete Act deletion mandate.
          </p>
          <p className="mt-4 text-xs text-white/45">dropaudit.co</p>
        </div>
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/60">
            Product
          </div>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link to="/product" className="hover:text-white">Workflow</Link></li>
            <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link to="/checklist" className="hover:text-white">Readiness Checklist</Link></li>
            <li><Link to="/calculator" className="hover:text-white">Penalty Calculator</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/60">
            Company
          </div>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><a href="#" className="hover:text-white">Security</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-white/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} DROPShield. All rights reserved.</span>
          <span>
            Not legal advice. DROPShield is a compliance operations platform.
          </span>
        </div>
      </div>
    </footer>
  );
}
