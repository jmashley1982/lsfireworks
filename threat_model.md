# Threat Model

## Project Overview

This repository is a small pnpm monorepo with three meaningful surfaces: a public React/Vite marketing site in `artifacts/fireworks-stand`, a minimal Express API in `artifacts/api-server`, and a mockup preview app in `artifacts/mockup-sandbox`. The API currently exposes only a health-check route and the shared PostgreSQL/Drizzle layer is scaffolded but not yet used by production routes.

Production assumptions for this scan:
- `NODE_ENV` is `production` in deployed environments.
- The mockup sandbox is never deployed to production and is treated as dev-only unless production reachability is demonstrated.
- Replit terminates TLS for deployed applications.
- This repl is not currently deployed, so there is no live public deployment-specific internet exposure to analyze.

## Assets

- **Application availability** — the public marketing site and `/api/healthz` endpoint must remain available and not be trivially crashed by malformed requests.
- **Environment secrets** — `DATABASE_URL` and any future server-side secrets must remain confined to server runtime and logs.
- **Server integrity** — the Express server and build pipeline must not execute attacker-controlled code or load attacker-chosen modules in production.
- **Future database contents** — the shared DB package is provisioned and will become sensitive once application tables exist, even though the current schema is empty.

## Trust Boundaries

- **Browser to API** — all HTTP requests to `artifacts/api-server/src/app.ts` cross from untrusted clients into server code.
- **Server to Database** — `lib/db/src/index.ts` opens privileged access to PostgreSQL through `DATABASE_URL`; any future production query path must be treated as highly sensitive.
- **Build/dev tooling to source tree** — Vite plugins and generated files in the sandbox can read and write within the workspace during development, but this boundary is out of production scope unless that app is made reachable in production.
- **Public to internal-only surfaces** — `artifacts/fireworks-stand` and `/api/healthz` are public; there are currently no authenticated or admin-only production surfaces.

## Scan Anchors

- **Production entry points:** `artifacts/fireworks-stand/src/main.tsx`, `artifacts/api-server/src/index.ts`, `artifacts/api-server/src/app.ts`
- **Highest-risk current files:** `artifacts/api-server/src/app.ts`, `artifacts/api-server/src/lib/logger.ts`, `lib/db/src/index.ts`, `lib/api-client-react/src/custom-fetch.ts`
- **Public surfaces:** static marketing content and `GET /api/healthz`
- **Dev-only areas to usually ignore:** `artifacts/mockup-sandbox/**`, Vite dev plugins, cartographer/dev-banner integrations

## Threat Categories

### Spoofing

This project currently has no login, session, or role system in production scope. If authenticated routes are added later, every non-public API route must enforce authentication server-side rather than relying on frontend state or generated client helpers.

### Tampering

The main tampering risk is future server-side acceptance of untrusted request data. Any new API route must validate request input at the server boundary and use parameterized database access through Drizzle or equivalent safe query builders. Client code and the mockup sandbox must not be treated as trusted enforcement points.

### Information Disclosure

There is little sensitive user data today, but server-side secrets and future database contents remain important. Secrets such as `DATABASE_URL` must never be exposed to client bundles or logs. Request logging must continue redacting authorization and cookie data, and production error responses must avoid leaking stack traces or filesystem details.

### Denial of Service

The public API surface is tiny, so availability risks are currently limited to malformed request handling, oversized bodies, and any future expensive endpoints. New public endpoints should avoid unbounded work and add rate limiting or other resource controls when they become stateful or computationally expensive.

### Elevation of Privilege

There is no role-bearing production functionality yet, so classic privilege escalation is not presently applicable. The relevant guarantee is that future protected routes must enforce authorization on the server, and no production path may evaluate attacker-controlled code, import attacker-chosen modules, or pass untrusted input into filesystem, shell, or raw SQL sinks.
