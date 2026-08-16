"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Menu } from "lucide-react";

import { DASHBOARD_NAV_ITEMS, isDashboardItemActive } from "@/components/dashboard/sidebar-nav";
import { SmarrrtLogo } from "@/components/shared/smarrrt-logo";
import { SubmitButton } from "@/components/shared/submit-button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type MobileDashboardMenuProps = {
  isAdmin: boolean;
  signOutAction: () => Promise<void>;
};

export function MobileDashboardMenu({
  isAdmin,
  signOutAction,
}: MobileDashboardMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const items = DASHBOARD_NAV_ITEMS.filter(
    (item) => !item.adminOnly || isAdmin,
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Open dashboard menu"
          className="size-10 rounded-xl"
        >
          <Menu aria-hidden="true" className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton
        className="left-0 top-0 h-dvh w-[min(20rem,calc(100vw-2rem))] max-w-none -translate-x-0 -translate-y-0 content-start rounded-none rounded-r-2xl p-0 data-open:slide-in-from-left data-closed:slide-out-to-left"
      >
        <DialogHeader className="border-b border-border p-5 pr-14 text-left">
          <SmarrrtLogo href="/dashboard" variant="header" />
          <DialogTitle className="sr-only">Dashboard menu</DialogTitle>
          <DialogDescription>Navigate your Smarrrt account.</DialogDescription>
        </DialogHeader>

        <nav aria-label="Mobile dashboard navigation" className="min-h-0 flex-1 overflow-y-auto p-3">
          <ul className="space-y-1">
            {items.map((item) => {
              const isActive = isDashboardItemActive(pathname, item.href);


              return (
                <li key={item.href}>
                  <DialogClose asChild>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex min-h-11 items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-[background-color,color,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground active:scale-[0.99]"}`}
                    >
                      <item.icon aria-hidden="true" className="size-4 shrink-0" />
                      {item.label}
                    </Link>
                  </DialogClose>
                </li>
              );
            })}
          </ul>
        </nav>

        <form action={signOutAction} className="border-t border-border p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <SubmitButton
            pendingLabel="Signing out…"
            type="submit"
            variant="ghost"
            className="h-11 w-full justify-start rounded-xl text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut aria-hidden="true" className="mr-2 size-4" />
            Sign out
          </SubmitButton>
        </form>
      </DialogContent>
    </Dialog>
  );
}
