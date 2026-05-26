import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { MobileNav } from "@/components/dashboard/mobile-nav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/signin");
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* ───────────────── SIDEBAR DESKTOP ───────────────── */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 z-50 w-72 flex-col border-r border-border bg-background/95 backdrop-blur">
        {/* Logo */}
        <div className="px-6 py-7 border-b border-border">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary shadow-sm">
              <span className="text-primary-foreground font-bold text-lg">
                Sm
              </span>
            </div>

            <div>
              <p className="font-heading text-2xl tracking-tight">
                Sma<span className="text-primary">rrr</span>t
              </p>

              <p className="text-sm text-muted-foreground">
                Visa POF Intelligence
              </p>
            </div>
          </Link>
        </div>

        {/* User */}
        <div className="px-6 py-5 border-b border-border">
          <div className="flex items-center gap-4">
            {session.user.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={session.user.image}
                alt={session.user.name ?? "User"}
                className="w-12 h-12 rounded-2xl object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">
                  {session.user.name?.charAt(0) ?? "U"}
                </span>
              </div>
            )}

            <div className="min-w-0">
              <p className="font-semibold truncate">{session.user.name}</p>

              <p className="text-sm text-muted-foreground truncate">
                {session.user.email}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <SidebarNav />

        {/* FX Card */}
        <div className="px-4 pb-4">
          <div className="rounded-3xl border border-border bg-muted/50 p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold">Parallel Market</p>

              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                Live
              </span>
            </div>

            <div className="space-y-3">
              {[
                { pair: "USD", rate: "₦1,650" },
                { pair: "GBP", rate: "₦2,050" },
                { pair: "CAD", rate: "₦1,220" },
              ].map((rate) => (
                <div
                  key={rate.pair}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm text-muted-foreground">
                    {rate.pair}/NGN
                  </span>

                  <span className="font-mono font-semibold">{rate.rate}</span>
                </div>
              ))}
            </div>
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
              className="w-full justify-start rounded-2xl h-11"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign out
            </Button>
          </form>
        </div>
      </aside>

      {/* ───────────────── MOBILE TOPBAR ───────────────── */}
      <header className="lg:hidden sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
              <span className="text-primary-foreground font-bold">Sm</span>
            </div>

            <span className="font-heading text-xl tracking-tight">
              Sma<span className="text-primary">rrr</span>t
            </span>
          </Link>

          {session.user.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={session.user.image}
              alt="User"
              className="w-9 h-9 rounded-xl"
            />
          ) : (
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">
                {session.user.name?.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </header>

      {/* ───────────────── MAIN ───────────────── */}
      <div className="lg:pl-72">
        <main className="p-6 md:p-8 max-w-6xl mx-auto pb-24 md:pb-0">
          {children}
        </main>
      </div>

      {/* ───────────────── MOBILE BOTTOM NAV ───────────────── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur">
        <div className="grid grid-cols-4 h-20">
          <MobileNav />
        </div>
      </div>
    </div>
  );
}
