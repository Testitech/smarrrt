# Smarrrt

Smarrrt is a proof-of-funds planning application for Nigerian visa applicants. It combines source-reviewed destination rules, stored NGN exchange-rate references, preparation timelines, saved plans, passwordless authentication, onboarding email, and an operational admin dashboard.

Calculations are planning guidance, not legal or financial advice. Rates marked as indicative or reference data must not be presented as live quotes, and applicants should confirm requirements with the linked official authority before applying.

## Requirements

- Node.js 20.9 or newer
- npm
- A reachable PostgreSQL database (plus a direct URL for migrations in pooled deployments)
- Google OAuth credentials
- A Resend account with a verified sending domain for production email

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and replace every placeholder. Prisma loads `.env` through `prisma.config.ts`; Next.js also loads it for local development.

3. Apply development migrations, generate the Prisma client, and seed the reference data in this order:

   ```bash
   npm run db:migrate
   npm run db:generate
   npm run db:seed
   ```

4. Start the application:

   ```bash
   npm run dev
   ```

Do not run the seed before migrations and client generation. The seed uses `DIRECT_URL` when configured, otherwise `DATABASE_URL`; that selected URL must be a direct `postgresql://` or `postgres://` connection. It performs a connection preflight and is designed to be rerunnable. It creates missing reference rows and updates rule metadata without replacing operational FX quotes.

## Database deployment

Apply committed migrations in CI or the production release phase before starting the new application version:

```bash
npm run db:migrate:deploy
npm run db:generate
```

Run `npm run db:seed` separately when initializing an environment or intentionally publishing the reviewed reference dataset. Do not use `prisma migrate dev` in production.

For serverless deployments, use the database provider's pooled PostgreSQL URL as `DATABASE_URL`, set `DIRECT_URL` to its direct connection for Prisma CLI operations, and tune `DATABASE_POOL_SIZE` to the provider's connection budget. Neither URL may be a Prisma Accelerate/Data Proxy URL because this application uses the PostgreSQL driver adapter directly.

## Authentication and email

Google OAuth and Resend magic links are configured through Auth.js. For Google, add this callback URL to the OAuth client:

```text
http://localhost:3000/api/auth/callback/google
```

Use the deployed origin instead of `localhost:3000` in production.

Before enabling production email:

1. Verify a domain or sending subdomain in Resend.
2. Set `EMAIL_FROM` to an address on that exact verified domain, for example `Smarrrt <hello@mail.example.com>`.
3. Set `RESEND_API_KEY`, `APP_URL`, and optionally `EMAIL_REPLY_TO`.
4. Send a magic-link and onboarding-email smoke test from the deployed environment.

Resend's `onboarding@resend.dev` domain is a sandbox intended for limited testing and can normally send only to the Resend account owner. The application rejects a `resend.dev` sender in production, so a verified sender is required.

### Welcome-email outbox

New users receive a durable `WELCOME` delivery record without making account creation wait on Resend. The protected `/api/cron/email-outbox` worker performs the delivery and keeps retryable failures pending with bounded backoff.

`vercel.json` schedules that endpoint every ten minutes. Set the same high-entropy `CRON_SECRET` in the Vercel project environment; Vercel Cron supplies it as `Authorization: Bearer <CRON_SECRET>`. Confirm that the selected Vercel plan supports the configured frequency, or adjust the schedule to the plan's limits.

For a local manual check, run the app and call the endpoint with the configured secret:

```powershell
Invoke-RestMethod http://localhost:3000/api/cron/email-outbox `
  -Headers @{ Authorization = "Bearer $env:CRON_SECRET" }
```

Never expose `CRON_SECRET` to browser code or prefix it with `NEXT_PUBLIC_`.

## Admin bootstrap

Set `ADMIN_EMAILS` to a comma-separated allowlist of normalized email addresses:

```dotenv
ADMIN_EMAILS="owner@example.com,operations@example.com"
```

On a matching user's successful sign-in, the account is promoted to `ADMIN` and the bootstrap is recorded in the admin audit log. After changing the allowlist, sign out and sign back in to trigger the check. Removing an address from `ADMIN_EMAILS` does not automatically demote an existing admin; role removal must be an explicit administrative database operation.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | Yes | PostgreSQL runtime connection; a provider pooler is preferred in serverless deployments. |
| `DIRECT_URL` | Production/pooled DB | Direct PostgreSQL connection used by Prisma CLI operations and the seed. |
| `DATABASE_POOL_SIZE` | No | Per-instance runtime pool size, default `5` (allowed range `1`–`20`). |
| `AUTH_SECRET` | Yes | High-entropy Auth.js signing/encryption secret. |
| `AUTH_URL` | Production | Canonical Auth.js origin. |
| `APP_URL` | Production | Canonical origin used in application email links. |
| `GOOGLE_CLIENT_ID` | Yes | Google OAuth client ID. |
| `GOOGLE_CLIENT_SECRET` | Yes | Google OAuth client secret. |
| `RESEND_API_KEY` | Yes for email | Resend API key. |
| `EMAIL_FROM` | Yes for email | Verified Resend sender, optionally with a display name. |
| `EMAIL_REPLY_TO` | No | Reply-to mailbox for transactional email. |
| `ADMIN_EMAILS` | For admin access | Comma-separated admin bootstrap allowlist. |
| `CRON_SECRET` | Yes for cron | Bearer secret protecting cron handlers. |
| `ENABLE_PLACEHOLDER_FX_SYNC` | No | Keep `false`; the current FX sync contains placeholder data. |

The application intentionally leaves placeholder FX synchronization disabled. Configure a real provider and review its source labeling before enabling or scheduling `/api/cron/sync-fx`.

## Developer commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run lint` | Run ESLint. |
| `npm run typecheck` | Run TypeScript without emitting files or build metadata. |
| `npm test` | Run focused pure unit tests with Node's test runner through `tsx`. |
| `npm run check` | Run lint, type-checking, and unit tests in sequence. |
| `npm run db:migrate` | Create/apply development migrations. |
| `npm run db:migrate:deploy` | Apply committed migrations in deployment. |
| `npm run db:generate` | Regenerate the Prisma client. |
| `npm run db:seed` | Run the configured idempotent seed. |

Commit schema migrations and `.env.example`, but never commit `.env`, provider keys, database credentials, or cron secrets.
