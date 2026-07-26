import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group mb-6"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary shadow-sm">
                <span className="text-primary-foreground font-bold text-lg">
                  Sm
                </span>
              </div>

              <span className="font-heading text-3xl tracking-tight font-bold font-black">
                Sma<span className="text-primary">rrr</span>t
              </span>
            </Link>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              Smarrrt helps Nigerian visa applicants plan their Proof of Funds
              with source-linked reference amounts, indicative FX rates, and
              practical funding timelines built for clearer decisions.
            </p>

            <div className="mt-8 space-y-3">
              <p className="text-sm font-medium text-foreground">
                Trusted planning for:
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "🇨🇦 Canada",
                  "🇦🇺 Australia",
                  "🇳🇱 Netherlands",
                  "🇫🇮 Finland",
                  "🇸🇪 Sweden",
                ].map((country) => (
                  <span
                    key={country}
                    className="px-3 py-1 rounded-full bg-background border border-border text-sm text-muted-foreground"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6">Product</h3>

            <ul className="space-y-4">
              {[
                { label: "POF Calculator", href: "/calculator" },
                { label: "Funding Pace Planner", href: "/calculator#analyzer" },
                { label: "Indicative FX Rates", href: "/calculator#fx" },
                { label: "Dashboard", href: "/dashboard" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Extra */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-6">Important Notice</h3>

            <div className="rounded-2xl border border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20 dark:border-yellow-900 p-5">
              <p className="text-sm md:text-base leading-relaxed text-yellow-800 dark:text-yellow-300">
                Smarrrt provides planning guidance, not immigration or financial
                advice. Requirements and FX rates can change, and an indicative
                rate may not be executable. Recheck the linked official source
                and your provider&apos;s rate before acting.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Smarrrt. Built for Nigerian travel aspirants.
          </p>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>Built with</span>
            <span className="text-primary">●</span>
            <span>source-reviewed references</span>
            <span className="text-primary">●</span>
            <span>indicative FX context</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
