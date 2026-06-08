# Smarrrt — Developer TODO

> Last updated: June 2026
> Status: MVP in active development

---

## 🔴 Critical (Must fix before launch)

### 1. Database Seeding
- [ ] Fix `ETIMEDOUT` error in `prisma/seed.ts`
- [ ] Investigate `PrismaPg` adapter syntax for seed context (mentor GitHub issue open)
- [ ] Seed all 10 countries into `Country` table
- [ ] Seed all 6 visa purposes into `VisaPurpose` table
- [ ] Seed all POF rules into `PofRule` table (study rules done, need work/visit/tourism/business/PR rules)
- [ ] Seed study intakes for all 10 countries
- [ ] Seed initial FX rates into `FxRate` table
- [ ] Verify seeded data via `npx prisma studio`

### 2. Vercel Deployment
- [ ] Confirm latest commit is always picked up on redeploy
- [ ] Add all environment variables to Vercel production settings
- [ ] Verify `prisma generate && next build` runs correctly on Vercel
- [ ] Test Google OAuth on production Vercel URL
- [ ] Update `AUTH_URL` in Vercel env vars to production URL

### 3. Calculator → Dashboard Save Flow
- [ ] Build `POST /api/save-timeline` route
- [ ] After auth gate on `/calculator` — save the user's selections to `UserTimeline` table
- [ ] Generate unique slug for saved timeline
- [ ] Redirect to `/dashboard/[slug]` after saving
- [ ] Handle duplicate saves (same country + purpose + intake date)

---

## 🟡 Important (Core features not yet wired)

### 4. Live FX Rate Integration
- [ ] Research and sign up for AbokiFX API or alternative Nigerian FX data provider
- [ ] Replace mock `fetchParallelRates()` in `app/api/cron/sync-fx/route.ts` with real API call
- [ ] Replace mock `fetchCbnRates()` with real CBN API call
- [ ] Test cron job locally using manual GET request with `CRON_SECRET` header
- [ ] Verify `vercel.json` cron schedule `0 */2 * * *` runs correctly on Vercel Pro
- [ ] Add Slack or email alert if FX sync fails (Sentry integration optional)

### 5. FX Rail Component
- [ ] Wire `components/dashboard/fx-rail.tsx` to live `/api/fx-rates` endpoint
- [ ] Replace static sidebar FX ticker in `(dashboard)/layout.tsx` with live data
- [ ] Test auto-refresh every 5 minutes works correctly
- [ ] Show `isFresh` indicator correctly (green = updated within 3hrs, yellow = stale)

### 6. POF Rules — Missing Visa Purposes
Currently only Study + Visit rules seeded for UK and USA. Need to add:
- [ ] Work visa rules for all 10 countries
- [ ] Tourism visa rules for all 10 countries
- [ ] Business visa rules for all 10 countries
- [ ] Permanent Residency rules for all 10 countries
- [ ] Visit visa rules for remaining 8 countries (NL, FI, AU, FR, SE, MT, ES, CA)

### 7. Calculator Page — Post-Auth Save
- [ ] Detect if user is logged in on `/calculator` page
- [ ] If logged in — show "Save This Strategy" button instead of gate card
- [ ] Pass selections to save API after calculation
- [ ] Show success toast after saving

### 8. Magic Link Auth
- [ ] Verify Resend domain OR switch `EMAIL_FROM` permanently to `onboarding@resend.dev`
- [ ] Test magic link email delivery end to end
- [ ] Confirm magic link redirects to `/dashboard` correctly after click
- [ ] Add custom email template branding (Smarrrt logo, yellow CTA button)

---

## 🟢 Nice to Have (Post-MVP)

### 9. User Profile & Settings
- [ ] Build `app/(dashboard)/dashboard/settings/page.tsx`
- [ ] Allow user to update name and email preferences
- [ ] Delete account option with cascade delete of all timelines

### 10. FX Rate History & Alerts
- [ ] Store historical FX rate snapshots in a new `FxRateHistory` table
- [ ] Build FX rate trend chart on dashboard
- [ ] Email alert when parallel rate drops by >5% (favorable buying window)
- [ ] Email alert when user's Safe period begins

### 11. Statement Health PDF Export
- [ ] Wire up "Export Plan as PDF" button in `statement-analyzer.tsx`
- [ ] Generate PDF with month-by-month deposit plan, Naira targets, embassy rules
- [ ] Use a library like `jsPDF` or `react-pdf`

### 12. Additional Countries
- [ ] Germany (EUR, study intakes April + October, blocked account requirement)
- [ ] Ireland (EUR, not Schengen — separate visa)
- [ ] Norway (NOK)
- [ ] Portugal (EUR, Digital Nomad Visa popular)
- [ ] New Zealand (NZD)

### 13. Landing Page
- [ ] Add real testimonials section once first users onboard
- [ ] Add FAQ section covering common Nigerian visa POF questions
- [ ] Add blog/resources section for SEO (UK POF calculator, Canada visa bank statement etc.)
- [ ] Add WhatsApp share button on calculator results (viral loop)

### 14. Analytics & Monitoring
- [ ] Add Vercel Analytics (already available on dashboard)
- [ ] Add Vercel Speed Insights
- [ ] Set up Sentry for error monitoring in production
- [ ] Track calculator usage events (country selected, purpose selected, strategy saved)

### 15. Performance
- [ ] Fix slow local development compile times (Windows 10 hardware limitation)
- [ ] Add `next/image` for any images added later
- [ ] Audit bundle size after MVP is complete

---

## 🔧 Technical Debt

- [ ] `lib/prisma.ts` — confirm singleton pattern works correctly with Prisma v7 adapter
- [ ] `prisma.config.ts` — confirm `migrate` seed config is correct for Prisma v7
- [ ] `components/dashboard/fx-rail.tsx` — remove hardcoded fallback rates once cron job is live
- [ ] `app/calculator/page.tsx` — replace hardcoded `TEASER_DATA` with API call once DB is seeded
- [ ] `app/(dashboard)/dashboard/[slug]/page.tsx` — wire "Recalculate" button
- [ ] All `@ts-ignore` or `any` types — audit and fix before launch
- [ ] Add proper loading skeletons to all dashboard pages
- [ ] `tsconfig.json` — confirm `include` paths cover `prisma/**/*` for seed compilation

---

## 📁 Files Still Needed

- [ ] `app/(dashboard)/dashboard/fx-rates/page.tsx` — full FX rates page
- [ ] `app/(dashboard)/dashboard/settings/page.tsx` — user settings
- [ ] `app/privacy/page.tsx` — Privacy Policy page
- [ ] `app/terms/page.tsx` — Terms of Use page
- [ ] `components/shared/toast.tsx` — global toast notification system
- [ ] `lib/fonts.ts` — confirm font file path and exports are correct across all layouts

---

## ✅ Completed

- [x] Project scaffolded with Next.js 16, TypeScript, Tailwind, Shadcn
- [x] Prisma v7 schema designed and migrated
- [x] Database live on Prisma Postgres cloud
- [x] `lib/prisma.ts` — singleton client
- [x] `lib/pof-engine.ts` — full calculation engine
- [x] `lib/fx.ts` — FX utilities and formatting
- [x] `lib/auth.ts` — NextAuth v5 with Google OAuth + Magic Links
- [x] `types/index.ts` — global TypeScript types
- [x] `app/api/auth/[...nextauth]/route.ts`
- [x] `app/api/fx-rates/route.ts`
- [x] `app/api/calculate-pof/route.ts`
- [x] `app/api/cron/sync-fx/route.ts`
- [x] `vercel.json` — cron schedule configured
- [x] `app/globals.css` — Smarrrt brand theme
- [x] `app/layout.tsx` — root layout with fonts
- [x] `app/(marketing)/layout.tsx`
- [x] `app/(marketing)/page.tsx` — full landing page
- [x] `app/(auth)/signin/page.tsx`
- [x] `app/(dashboard)/layout.tsx` — sidebar + mobile header
- [x] `app/(dashboard)/dashboard/page.tsx`
- [x] `app/(dashboard)/dashboard/[slug]/page.tsx`
- [x] `app/calculator/page.tsx`
- [x] `app/not-found.tsx`
- [x] `app/error.tsx`
- [x] `app/(dashboard)/dashboard/not-found.tsx`
- [x] `components/shared/navbar.tsx`
- [x] `components/shared/footer.tsx`
- [x] `components/dashboard/fx-rail.tsx`
- [x] `components/dashboard/pof-calendar.tsx`
- [x] `components/dashboard/statement-analyzer.tsx`
- [x] `components/dashboard/pof-analysis.tsx`
- [x] Google OAuth working end to end ✅
- [x] User creation in database on first login ✅
- [x] Session management working ✅