# CLAUDE.md — dropaudit.co

Per-project orientation for Claude. Read this first when picking up
work on this site. Index of conventions, deferred decisions, and
non-features that aren't obvious from the code or git history.

## Project

Marketing + legal site for DropAudit, planned compliance tooling for the
California DROP / Delete Act 45-day deletion cycle. The reader is a privacy
engineer or legal ops manager at a CPPA-registered data broker. Astro + React
islands + Tailwind v4 on pnpm, static output, deployed to Cloudflare Workers
static assets via `wrangler.jsonc`; the `Makefile` forwards to `../Makefile`
and on to the central builder.

**The product does not exist yet.** There is no backend of any kind. Every page
is written to be true of that state — see Deferred decisions below before
changing any claim on `/product`, `/pricing`, `/privacy`, or `/security`.

## Commands

```bash
# Build / dev (forwards to the parent Makefile)
make deps           # install deps via the central builder
make dev            # local dev server
make build          # production build → dist/

# Test (per-stack — adjust as needed)
make test           # if a test suite is wired in

# Deploy
git push            # Cloudflare Pages auto-builds on push to main
```

## Conventions

  - Build path: this project's `Makefile` → `../Makefile` (parent
    workspace) → `~/work/projects/builder/` (central builder).
  - Stack: pnpm-only. No `package-lock.json` / `bun.lockb` / `yarn.lock`.
  - Deploy: Cloudflare Pages via `wrangler.jsonc`. No `_redirects`
    SPA fallback (uses CF's `not_found_handling` instead).

## Heading hygiene

**Before adding any section, subsection, or heading to a Markdown
file, output the file's current heading outline first:**

```bash
grep -nE '^#+ ' path/to/file.md
```

Then confirm — in the chat — that the planned new heading's:

1. **Depth** (`#`, `##`, `###`, …) is the intended depth, not
   accidentally one level too shallow.
2. **Label** doesn't collide with existing headings — no duplicate
   `## 1. <title>`, no `### N.X` subsection labels that look like
   `vN.X` phase identifiers.

Only after that confirmation, write.

Applies especially to long-lived docs: `docs/prd.md`, `AI_AGENTS.md`,
`docs/architecture.md`, `docs/CLAUDE.md`.

**Why:** structural drift is invisible in any single editing session
— it only becomes obvious in the aggregate, by which time the doc is
hard to fix. The pre-edit outline ritual catches collisions and depth
mistakes at the point of writing, not at quarterly cleanup time.

## Deferred decisions

Things deliberately *not* shipped. Append entries with rationale so future
Claude sessions don't re-propose them.

### No form backend — both forms use `mailto:` (2026-10-06)

`ContactPage.tsx` and `PenaltyEstimator.tsx` validate with zod, then hand the
message to the visitor's own mail client. Both previously ran a `setTimeout`
and showed a success state while discarding the input — the contact form told
visitors "a compliance specialist will reach out within one business day" and
sent nothing.

Options weighed and declined for now: a Cloudflare Worker + Resend/CF Email
Routing with Turnstile (needs a PRD slot, a secret, and adds a subprocessor), and
a hosted endpoint like Formspree (fastest, but a third party holds lead PII,
which is a poor look for a site selling data-broker compliance).

**If you wire a real backend, `/privacy` §2 and `/security § Subprocessors` must
change in the same commit.** §2 states that both forms send nothing from the
page; the subprocessor section states there are none. Also recorded at the top
of `src/lib/server-todo.md`.

### Unbacked claims are not allowed back (2026-10-06)

Removed this session because nothing implements them: Enterprise SAML
SSO/SCIM/custom roles (security page *and* pricing bullet), "US-only data
residency — no cross-border data movement, ever", "Customer-managed encryption
available on Enterprise", "Most popular" badge (zero customers), "US-based
support", "Annual contracts available", and an unverified "Headquarters — San
Francisco, California" that contradicted lamill.io's "Monterey County, CA".

Present-tense capability copy was reframed as design intent ("designed to work
in hashes") and each of `/product`, `/pricing`, `/security`, `/privacy` §7
carries an explicit pre-launch status note. Keep that framing until the thing
being described actually runs.

### `<Fill>` is the placeholder mechanism (2026-10-06)

`src/components/site/Fill.tsx` renders a visible `‹FILL: …›` box for facts the
operator owes. It currently has **no importers** — all 21 were resolved — but
the component stays for the next round. `grep -rn "<Fill" src/` must return
nothing before any deploy.

Facts that were *deferred rather than filled* became "will be published before
launch" sentences on `/security` and `/privacy`. They are listed in
`docs/prd.md § 6`. Never replace one with a guessed value — a wrong retention
period or encryption algorithm on a compliance site is worse than a stated gap.

### Prices withheld (2026-10-06)

Starter and Compliance show "Contact us". `$499/mo` traced to the operator's own
`docs/growth.md:61`; `$1,499/mo` existed only in the Lovable export with unknown
provenance. The price slot sizes itself — `text-4xl` when the value starts with
`$`, `text-2xl` otherwise — so figures can be restored without a layout fix.
