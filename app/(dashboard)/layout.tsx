import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, LogOut } from "lucide-react";
import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { MobileNav } from "@/components/dashboard/mobile-nav";
import { SmarrrtLogo } from "@/components/shared/smarrrt-logo";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/signin");
  }

  if (!session.user.isActive) {
    redirect("/signin?error=AccountDisabled");
  }

  const isAdmin = session.user.role === "ADMIN";
  const displayName = session.user.name?.trim() || "Smarrrt user";
  const initial =
    displayName.charAt(0).toUpperCase() ||
    session.user.email?.charAt(0).toUpperCase() ||
    "U";

  return (
    <div className="min-h-screen bg-muted/30">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-background px-4 py-2 text-sm font-semibold shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Skip to content
      </a>
      {/* ───────────────── SIDEBAR DESKTOP ───────────────── */}
      <aside
        aria-label="Dashboard sidebar"
        className="fixed inset-y-0 left-0 z-50 hidden w-72 flex-col border-r border-border bg-background/95 backdrop-blur lg:flex"
      >
        {/* Logo */}
        <div className="px-6 py-7 border-b border-border">
          <SmarrrtLogo href="/dashboard" variant="large" />
        </div>

        {/* User */}
        <div className="px-6 py-5 border-b border-border">
          <div className="flex items-center gap-4">
            {session.user.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={session.user.image}
                alt=""
                className="w-12 h-12 rounded-2xl object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">
                  {initial}
                </span>
              </div>
            )}

            <div className="min-w-0">
              <p className="font-semibold truncate">{displayName}</p>

              <p className="text-sm text-muted-foreground truncate">
                {session.user.email}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <SidebarNav isAdmin={isAdmin} />

        {/* FX data notice */}
        <div className="px-4 pb-4">
          <div className="rounded-2xl border border-border bg-muted/40 p-4">
            <p className="text-sm font-semibold">FX planning references</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Review the source and recorded time before using an indicative
              rate in your plan.
            </p>
            <Link
              href="/dashboard/fx-rates"
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Review rates
              <ArrowRight aria-hidden="true" className="size-3" />
            </Link>
          </div>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-border">
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <Button
              type="submit"
              variant="ghost"
              className="h-11 w-full justify-start rounded-xl"
            >
              <LogOut aria-hidden="true" className="mr-2 size-4" />
              Sign out
            </Button>
          </form>
        </div>
      </aside>

      {/* ───────────────── MOBILE TOPBAR ───────────────── */}
      <header className="lg:hidden sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-4">
          <SmarrrtLogo href="/dashboard" variant="header" />

          <Link
            href="/dashboard/settings"
            aria-label="Open account overview"
            className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {session.user.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={session.user.image}
                alt=""
                className="size-9 rounded-xl object-cover"
              />
            ) : (
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                {initial}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* ───────────────── MAIN ───────────────── */}
      <div className="lg:pl-72">
        <main
          id="main-content"
          className="mx-auto max-w-6xl px-4 py-6 pb-24 sm:px-6 md:px-8 md:py-8 lg:pb-8"
        >
          {children}
        </main>
      </div>

      {/* ───────────────── MOBILE BOTTOM NAV ───────────────── */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur lg:hidden">
        <MobileNav isAdmin={isAdmin} />
      </div>
    </div>
  );
}
