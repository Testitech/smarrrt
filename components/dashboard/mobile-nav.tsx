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
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-border/50 bg-background/95 backdrop-blur-xl">
      <div className="grid grid-cols-4 h-16">
        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex flex-col items-center justify-center gap-1
                text-xs font-medium transition-colors
                
                ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                }
              `}
            >
              <item.icon
                className={`
                  w-5 h-5
                  ${isActive ? "scale-110" : ""}
                `}
              />

              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}