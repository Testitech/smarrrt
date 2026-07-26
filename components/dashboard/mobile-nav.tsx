"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calculator,
  TrendingUp,
  Settings,
  ShieldCheck,
} from "lucide-react";

const PRIMARY_NAV_ITEMS = [
  {
    label: "Home",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Calculator",
    href: "/calculator",
    icon: Calculator,
  },
  {
    label: "Rates",
    href: "/dashboard/fx-rates",
    icon: TrendingUp,
  },
];

const SETTINGS_NAV_ITEM = {
  label: "Account",
  href: "/dashboard/settings",
  icon: Settings,
};

const ADMIN_NAV_ITEM = {
  label: "Admin",
  href: "/admin",
  icon: ShieldCheck,
};

type MobileNavProps = {
  isAdmin?: boolean;
};

export function MobileNav({ isAdmin = false }: MobileNavProps) {
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
    <nav
      aria-label="Mobile dashboard navigation"
      className="pb-[env(safe-area-inset-bottom)]"
    >
      <ul
        className={`grid h-16 ${isAdmin ? "grid-cols-5" : "grid-cols-4"}`}
      >
        {navItems.map((item) => {
          const isActive = activeHref === item.href;

          return (
            <li key={item.href} className="min-w-0">
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex h-full flex-col items-center justify-center gap-1 px-1 text-[11px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:text-xs ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon
                  aria-hidden="true"
                  className={`size-5 transition-transform motion-safe:duration-200 ${
                    isActive ? "scale-110" : ""
                  }`}
                />
                <span className="max-w-full truncate">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
