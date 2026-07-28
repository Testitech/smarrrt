import Link from "next/link";
import { auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { SmarrrtLogo } from "@/components/shared/smarrrt-logo";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/70">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <SmarrrtLogo href="/" variant="header" />

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/#how-it-works"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How it works
            </Link>

            <Link
              href="/#countries"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Countries
            </Link>

            <Link
              href="/#features"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            {session?.user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground hidden md:block">
                  {session.user.name?.split(" ")[0]}
                </span>

                <Button asChild size="lg">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              </div>
            ) : (
              <Button asChild size="lg" className="max-w-44 sm:max-w-none">
                <Link href="/signin">
                  <LogIn className="w-4 h-4 mr-2" />
                  Start Planning
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
