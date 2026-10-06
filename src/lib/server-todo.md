# Server-side code dropped during Astro port

The source was a TanStack Start app with a Node/edge server entry. Astro is
configured for `output: 'static'` here, so server-only code didn't translate.
Below is what was deliberately NOT ported, with TODOs.

## TODO: `genai/src/server.ts`
TanStack Start request handler / server entry. Astro's static output has no
equivalent — if you need server endpoints, switch Astro to `output: 'server'`
or `'hybrid'` and re-create endpoints under `src/pages/api/*.ts`.

## TODO: `genai/src/start.ts`
TanStack Start client/server bootstrap. Not applicable to Astro.

## TODO: `genai/src/router.tsx` + `genai/src/routes/__root.tsx` + `genai/src/routeTree.gen.ts`
TanStack Router config. Replaced with Astro's file-based routing under
`src/pages/`.

## TODO: `genai/src/routes/sitemap[.]xml.ts`
Dynamic sitemap. Replaced with `@astrojs/sitemap` integration (already wired
in `astro.config.mjs`).

## TODO: `genai/src/integrations/supabase/*`
Supabase server/client integration:
- `client.ts` — browser Supabase client
- `client.server.ts` — server-side Supabase client
- `auth-middleware.ts` — request auth middleware
- `auth-attacher.ts` — session attacher
- `types.ts` — generated DB types

The `PenaltyEstimator` form was previously inserting into a
`penalty_estimator_leads` table on submit. It now hands the snapshot to the
visitor's own mail client via `mailto:` instead — the exposure figure is
computed in the browser and nothing is transmitted from the page. The contact
form (`ContactPage.tsx`) works the same way.

If you wire either form to a real backend (Supabase, Astro server endpoint,
third-party form, etc.), `/privacy` §2 and `/security` must be updated in the
same commit: §2 currently states that these forms send nothing from the page,
and the subprocessor section states there are none.

## TODO: `genai/src/lib/error-page.ts` and `genai/src/lib/error-capture.ts`
TanStack-specific error boundaries. Replace with Astro's `src/pages/404.astro`
and `src/pages/500.astro` if needed.
