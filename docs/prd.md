---
project: dropaudit.co
prd_version: 2
project_version: v1.B
status: shipped
owner: Vijo
last_updated: 2026-10-06
---

# dropaudit.co — PRD

## 1. Problem

California-registered data brokers must access the CalPrivacy DROP platform at
least once every 45 calendar days (Civil Code §1798.99.86(c)(1), 11 CCR
§7612(a)) and process every matching consumer deletion request. Enforcement
began 2026-08-01 and the penalty is $200 per unresolved request per day
(§1798.99.85). Doing this by hand does not scale, and nothing purpose-built
exists for the workflow.

## 2. Users

Privacy engineers, legal ops managers, and compliance officers at 10–500 person
companies registered as data brokers with the CPPA. The full addressable list is
public — the CPPA publishes the registry — so every prospect is identifiable
without inbound marketing. See `AI_AGENTS.md § ICP` for the targeting detail.

## 3. Goals & non-goals

**Goals:**
- Be the default DROP compliance tooling before competitors recognize the
  category.
- Convert from the public CPPA registry via cold outreach plus zero-KD SEO on
  bill-number and statute queries.
- Keep every public claim defensible — a compliance buyer's counsel reads these
  pages.

**Non-goals:**
- Accessing DROP on a customer's behalf. DropAudit never holds DROP
  credentials; 11 CCR §7610(a)(1) makes the broker responsible for all account
  activity, and keeping that boundary outside our system is a feature.
- Holding raw consumer PII. The data model is designed for hashed identifiers.
- Paid acquisition before the SEO baseline has data.

## 4. Versions

Two-level versioning convention (canonical: `sites/portfolio/AI_AGENTS.md`):

- `vN` = major capability tier; SemVer-MAJOR semantics.
- `vN.X` = phase letter within a tier; internal slicing. `vN.A` is always the
  planning / decisions-lock phase; build work starts at `.B`.

| Version | Theme | Acceptance |
|---|---|---|
| v0 | scaffold | local builds, CF wrangler.jsonc + public/_headers in place, repo initialized |
| v1 | credible pre-launch site | every public page indexable and free of unbacked claims; legal + trust pages live; no form that silently discards input |
| v2 | real product | DROP list intake, matching, and evidence export actually run; the facts deferred in v1.B get published |

## 5. Phases

| Phase | Theme | Features | Status |
|---|---|---|---|
| **v0.A** | scaffolded | `portfolio new bootstrap` ran; standard files written; git initialized | ✅ |
| **v1.A** | decisions lock | brand = DropAudit (not DROPShield); controller identity = Lamill Web Systems as trade name; pre-launch posture stated on-site rather than implied; forms hand off via `mailto:` instead of a backend; prices withheld until set | ✅ |
| **v1.B** | legal + trust pages, honesty pass | `/privacy` + `/security` shipped and footer-linked; 45-day cycle countdown (`lib/dropCycle.ts`); both fake-submit forms rewired; every unbacked claim removed or reframed; IndexNow key tracked | ✅ |
| **v1.C** | pre-launch facts + test infra | publish the deferred security/privacy facts (§6); install `jsdom` so the cycle-math suite can run; verify both `mailto:` handoffs in a real browser | planned |
| **v2.A** | backend decisions lock | pick the form/lead backend and the customer-data host; both change `/privacy` §2 and the subprocessor section in the same commit | planned |

## 6. Open questions

*(append-only log; mark answered with date but never delete)*

- **2026-10-06 — Is there a registered legal entity?** `/privacy` §1 currently
  names *Lamill Web Systems*, which the portfolio publishes as a trade name
  (`calcengine.site/src/pages/about.astro:19`) with no corporate suffix
  anywhere. A portfolio-wide sweep found no entity with LLC/Inc./Ltd and no
  postal address. If an entity exists, §1 should name it verbatim.
- **2026-10-06 — Mailing address on `/privacy`?** Omitted; email is the only
  contact channel. CCPA expects a business to offer more than one request
  method, which matters once there are real customers.
- **2026-10-06 — The 15 facts deferred as "will be published before launch."**
  Hosting provider + region(s); TLS floor and scope for app / ingestion API /
  SFTP; at-rest algorithm, storage layers, KMS; hash algorithm + normalization
  steps; whether hashing happens client-side (copy currently says it is
  *designed* to); any raw-identifier exception; per-plan auth / MFA / SSO /
  SCIM / roles; personnel production-access model; retention for uploaded lists
  and match results, for audit logs and evidence packs, and the
  termination-deletion + export windows; whether a DPA is offered on all plans;
  a defined business-contact retention period.
- **2026-10-06 — Pricing.** Starter and Compliance show "Contact us".
  `$499/mo` traced to `docs/growth.md:61` (operator-authored); `$1,499/mo`
  appeared only in the Lovable export and its provenance is unknown. Set both
  deliberately before restoring figures.
- **2026-10-06 — Starter CTA.** Reads "Start readiness" → `/checklist` while
  the tier's price says "Contact us". The checklist is the one genuinely
  working tool on the site, so this was left as-is; revisit when pricing lands.
- **2026-10-06 — Still-advertised unbuilt capability.** `ProductPage` steps 2–5
  bodies and their 15 feature bullets, and the Enterprise tier's three
  remaining bullets (warehouse/CDP integrations, dedicated compliance engineer,
  custom evidence packs & DPA support), describe work not started. The
  pre-launch status notes on `/product` and `/pricing` cover them as intent;
  revisit if the launch date slips.
- **2026-10-06 — `genai/` still says DROPShield.** The pre-Astro
  tanstack-start export is not built or deployed, so the rename skipped it.
  Delete the directory or sweep it when `src/lib/server-todo.md` is worked
  through.
