"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calculator,
  TrendingUp,
  Settings,
} from "lucide-react";

const NAV_ITEMS = [
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
    label: "Live FX Rates",
    href: "/dashboard/fx-rates",
    icon: TrendingUp,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 px-3 py-4 space-y-2">
      {NAV_ITEMS.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              group flex items-center gap-3 rounded-xl px-4 py-3
              text-sm font-medium transition-all duration-200
              
              ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-primary-foreground hover:text-primary hover:bg-background/10"
              }
            `}
          >
            <item.icon
              className={`
                w-4 h-4 shrink-0 transition-transform
                ${isActive ? "scale-110" : "group-hover:scale-105"}
              `}
            />

            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
