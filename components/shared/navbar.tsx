import Link from "next/link";
import { auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { SmarrrtLogo } from "@/components/shared/smarrrt-logo";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 px-3 py-3 backdrop-blur-xl sm:px-5">
      <div className="mx-auto max-w-7xl rounded-2xl border border-border/70 bg-background/95 px-3 shadow-sm sm:px-5 lg:px-6">
        <div className="flex h-16 items-center justify-between gap-3">
          <SmarrrtLogo href="/" variant="compact" />

          <nav className="hidden items-center gap-7 md:flex lg:gap-9">
            <Link
              href="/#how-it-works"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              How it works
            </Link>
            <Link
              href="/#countries"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              Countries
            </Link>
            <Link
              href="/#features"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
          </nav>

          <div className="flex min-w-0 items-center gap-3">
            {session?.user ? (
              <div className="flex items-center gap-3">
                <span className="hidden text-sm text-muted-foreground md:block">
                  {session.user.name?.split(" ")[0]}
                </span>
                <Button asChild size="sm" className="h-10 px-4">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              </div>
            ) : (
              <Button asChild size="sm" className="h-10 px-3 sm:px-4">
                <Link href="/signin">
                  <LogIn className="size-4" />
                  <span className="hidden min-[360px]:inline">Start Planning</span>
                  <span className="min-[360px]:hidden">Start</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
