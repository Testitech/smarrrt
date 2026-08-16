"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bookmark,
  Calculator,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type DashboardNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  adminOnly?: boolean;
};

export const DASHBOARD_NAV_ITEMS: DashboardNavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Saved strategies", href: "/dashboard#saved-strategies", icon: Bookmark },
  { label: "POF Calculator", href: "/calculator", icon: Calculator },
  { label: "FX Rates", href: "/dashboard/fx-rates", icon: TrendingUp },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
  { label: "Admin", href: "/admin", icon: ShieldCheck, adminOnly: true },
];

function itemPath(href: string) {
  return href.split("#")[0];
}

export function isDashboardItemActive(pathname: string, href: string) {
  const path = itemPath(href);
  if (href.includes("#")) return false;
  if (path === "/dashboard") return pathname === path;
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function SidebarNav({ isAdmin = false }: { isAdmin?: boolean }) {
  const pathname = usePathname();
  const navItems = DASHBOARD_NAV_ITEMS.filter(
    (item) => !item.adminOnly || isAdmin,
  );

  return (
    <nav aria-label="Dashboard navigation" className="flex-1 overflow-y-auto px-3 py-4">
      <ul className="space-y-1">
        {navItems.map((item) => {
          const isActive = isDashboardItemActive(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex min-h-11 items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-[background-color,color,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${isActive ? "bg-primary/15 text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground active:scale-[0.99]"}`}
              >
                {isActive ? <span aria-hidden="true" className="absolute inset-y-2 left-0 w-1 rounded-r-full bg-primary transition-transform duration-200" /> : null}
                <item.icon aria-hidden="true" className="size-4 shrink-0" />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
