import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Shield } from "lucide-react"

// ─────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────

export const metadata: Metadata = {
  title: "Privacy Policy | Smarrrt",
  description:
    "Learn how Smarrrt collects, uses, stores and protects your personal information.",
}

// ─────────────────────────────────────────
// REUSABLE COMPONENTS
// ─────────────────────────────────────────

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-4 pt-8 first:pt-0">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>

      <div className="space-y-3 text-sm leading-7 text-muted-foreground">
        {children}
      </div>
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-[7px] h-2 w-2 rounded-full bg-primary shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

// ─────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────

export default function PrivacyPage() {
  const lastUpdated = "June 2026"

  return (
    <div className="min-h-screen bg-background">

      {/* Header */}

      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">

          <Link href="/" className="flex items-center gap-2">

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-xs font-bold text-primary-foreground">
                Sm
              </span>
            </div>

            <span className="text-lg font-bold">
              Sma<span className="text-primary">rrr</span>t
            </span>

          </Link>

          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>

        </div>
      </header>

      {/* Main */}

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">

        {/* Hero */}

        <div className="mb-12 rounded-2xl border bg-card p-8 shadow-sm">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>

            <div className="space-y-3">

              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  Privacy Policy
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                  Last updated: {lastUpdated}
                </p>
              </div>

              <p className="leading-7 text-muted-foreground">
                Smarrrt is a Proof of Funds planning platform built to help
                Nigerian visa applicants prepare financially for their study,
                work and relocation goals. Protecting your personal information
                is important to us. This Privacy Policy explains what
                information we collect, why we collect it, how we use it and
                the choices you have regarding your data.
              </p>

            </div>

          </div>

        </div>

        {/* Sections */}

        <div className="divide-y">

          {/* 1 */}

          <Section title="1. Information We Collect">

            <p>
              When you create an account using Google, we receive basic profile
              information including your name, email address and profile
              picture. This information is used only to create and personalise
              your Smarrrt account.
            </p>

            <p>
              When using the Proof of Funds calculator, we store information
              such as your selected country, visa purpose, intended intake,
              estimated account balance and generated timeline so you can return
              to your saved strategy at any time.
            </p>

            <p>
              We do <strong>not</strong> collect your bank account number, BVN,
              NIN, debit card information, passwords or online banking
              credentials. The balance you provide is used only for planning
              calculations.
            </p>

          </Section>

          {/* 2 */}

          <Section title="2. How We Use Your Information">

            <p>Your information helps us provide and improve Smarrrt.</p>

            <BulletList
              items={[
                "Create and manage your account",
                "Display your personalised Proof of Funds strategy",
                "Calculate estimated funding targets using exchange rates",
                "Save your planning timelines for future access",
                "Authenticate your account securely",
                "Improve the reliability and performance of the platform",
              ]}
            />

            <p>
              We do not sell your personal information or use it for targeted
              advertising.
            </p>

          </Section>

          {/* 3 */}

          <Section title="3. Data Storage & Security">

            <p>
              Your information is stored securely using PostgreSQL with Prisma
              ORM. Connections to our database are encrypted and access is
              restricted to authorised services only.
            </p>

            <p>
              We follow industry standard security practices including secure
              authentication, encrypted environment variables and protected
              server side sessions.
            </p>

            <p>
              Every user's planning data remains private. Other users cannot
              access your saved timelines, balances or planning history.
            </p>

          </Section>

          {/* 4 */}

          <Section title="4. Third Party Services">

            <p>
              To operate Smarrrt reliably, we rely on trusted third party
              providers for authentication, hosting, database management and
              email delivery.
            </p>

            <div className="space-y-4">

              {[
                {
                  name: "Google OAuth",
                  purpose: "Secure sign in with your Google account.",
                  link: "https://policies.google.com/privacy",
                },
                {
                  name: "Resend",
                  purpose: "Delivery of authentication emails and Magic Links.",
                  link: "https://resend.com/privacy",
                },
                {
                  name: "Vercel",
                  purpose: "Hosting and deployment of the Smarrrt application.",
                  link: "https://vercel.com/legal/privacy-policy",
                },
                {
                  name: "Prisma Postgres",
                  purpose: "Secure storage of application data.",
                  link: "https://www.prisma.io/privacy",
                },
              ].map((service) => (
                <div
                  key={service.name}
                  className="rounded-xl border p-4 transition-colors hover:bg-muted/40"
                >
                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h3 className="font-medium text-foreground">
                        {service.name}
                      </h3>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {service.purpose}
                      </p>
                    </div>

                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      Privacy
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>

                  </div>
                </div>
              ))}

            </div>

          </Section>

          {/* 5 */}

          <Section title="5. Exchange Rate Information">

            <p>
              Smarrrt may display estimated exchange rates obtained from
              publicly available market data sources to help users plan their
              Proof of Funds strategy.
            </p>

            <div className="rounded-xl border-l-4 border-amber-500 bg-amber-500/10 p-4">

              <p className="text-sm leading-7">
                Exchange rates constantly change. The figures displayed on
                Smarrrt are provided for planning purposes only and should not
                be treated as financial advice or guaranteed market prices.
              </p>

            </div>

            <p>
              Before making any financial transaction, always confirm the
              current exchange rate with your bank or preferred Bureau de
              Change.
            </p>

          </Section>

          {/* 6 */}

          <Section title="6. Data Retention">

            <p>
              We retain your information only for as long as it is reasonably
              necessary to provide the Smarrrt service and comply with legal
              obligations.
            </p>

            <BulletList
              items={[
                "Your account information remains available while your account is active.",
                "Saved planning timelines remain available until you delete them or close your account.",
                "Authentication sessions automatically expire after a period of inactivity.",
                "When you request account deletion, your personal information is permanently removed within a reasonable period unless we are legally required to retain specific records.",
              ]}
            />

          </Section>

          {/* 7 */}

          <Section title="7. Your Rights">

            <p>
              Depending on applicable laws, you may have the right to:
            </p>

            <BulletList
              items={[
                "Access the personal information we hold about you.",
                "Request correction of inaccurate information.",
                "Request deletion of your account and associated data.",
                "Withdraw consent where processing is based on consent.",
              ]}
            />

            <p>
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:privacy@smarrrt.io"
                className="font-medium text-primary hover:underline"
              >
                privacy@smarrrt.io
              </a>
              .
            </p>

          </Section>

          {/* 8 */}

          <Section title="8. Changes to This Privacy Policy">

            <p>
              As Smarrrt evolves, we may update this Privacy Policy from time to
              time to reflect new features, legal requirements or improvements
              to our services.
            </p>

            <p>
              Whenever material changes are made, the <strong>Last updated</strong>{" "}
              date at the top of this page will be revised.
            </p>

            <p>
              Continued use of Smarrrt after those updates indicates acceptance
              of the revised Privacy Policy.
            </p>

          </Section>

          {/* 9 */}

          <Section title="9. Contact">

            <p>
              Questions, feedback or privacy related concerns are always
              welcome.
            </p>

            <div className="rounded-xl border bg-muted/40 p-5">

              <p className="font-medium">
                Email
              </p>

              <a
                href="mailto:privacy@smarrrt.io"
                className="mt-2 inline-block text-primary hover:underline"
              >
                privacy@smarrrt.io
              </a>

            </div>

          </Section>
        </div>

        {/* Footer */}

        <div className="space-y-6 border-t pt-8">

          <div className="rounded-xl border bg-muted/40 p-5">
            <p className="text-sm text-muted-foreground leading-7">
              By continuing to use Smarrrt, you acknowledge that you have read
              and understood this Privacy Policy. If you do not agree with any
              part of this policy, please discontinue use of the service.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">

            <Button asChild className="sm:flex-1">
              <Link href="/">
                Back to Home
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="sm:flex-1"
            >
              <Link href="/terms">
                View Terms of Use
              </Link>
            </Button>

          </div>

          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Smarrrt. All rights reserved.
          </p>

        </div>

      </div>

    </div>
  )
}
