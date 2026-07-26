"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calculator,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const PRIMARY_NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "POF Calculator",
    href: "/calculator",
    icon: Calculator,
  },
  {
    label: "FX Rates",
    href: "/dashboard/fx-rates",
    icon: TrendingUp,
  },
];

const SETTINGS_NAV_ITEM = {
  label: "Settings",
  href: "/dashboard/settings",
  icon: Settings,
};

const ADMIN_NAV_ITEM = {
  label: "Admin",
  href: "/admin",
  icon: ShieldCheck,
};

type SidebarNavProps = {
  isAdmin?: boolean;
};

export function SidebarNav({ isAdmin = false }: SidebarNavProps) {
  const pathname = usePathname();
  const navItems = isAdmin
    ? [...PRIMARY_NAV_ITEMS, ADMIN_NAV_ITEM, SETTINGS_NAV_ITEM]
    : [...PRIMARY_NAV_ITEMS, SETTINGS_NAV_ITEM];
  const activeHref = navItems
    .filter(
      ({ href }) => pathname === href || pathname.startsWith(`${href}/`),
    )
    .sort((a, b) => b.href.length - a.href.length)[0]?.href;

  return (
    <nav aria-label="Dashboard navigation" className="flex-1 px-3 py-4">
      <ul className="space-y-2">
        {navItems.map((item) => {
          const isActive = activeHref === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon
                  aria-hidden="true"
                  className={`size-4 shrink-0 transition-transform motion-safe:duration-200 ${
                    isActive ? "scale-110" : "group-hover:scale-105"
                  }`}
                />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
