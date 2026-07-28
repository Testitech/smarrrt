import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  compact: {
    icon: "size-8 rounded-lg text-sm",
    text: "text-lg",
    gap: "gap-2",
    tagline: false,
  },
  header: {
    icon: "size-10 rounded-xl text-sm",
    text: "text-xl",
    gap: "gap-2.5",
    tagline: false,
  },
  large: {
    icon: "size-14 rounded-2xl text-lg",
    text: "text-4xl",
    gap: "gap-3",
    tagline: true,
  },
  footer: {
    icon: "size-11 rounded-xl text-base",
    text: "text-2xl",
    gap: "gap-3",
    tagline: false,
  },
} as const;

type SmarrrtLogoProps = {
  variant?: keyof typeof variants;
  href?: string;
  className?: string;
  showTagline?: boolean;
};

export function SmarrrtLogo({
  variant = "header",
  href,
  className,
  showTagline,
}: SmarrrtLogoProps) {
  const config = variants[variant];
  const tagline = showTagline ?? config.tagline;
  const content = (
    <span className={cn("inline-flex items-center", config.gap, className)}>
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center bg-primary font-black leading-none text-primary-foreground shadow-sm",
          config.icon,
        )}
      >
        Sm
      </span>
      <span className="min-w-0">
        <span
          className={cn(
            "block font-heading font-black leading-none tracking-normal text-foreground",
            config.text,
          )}
        >
          Sma<span className="text-primary">rrr</span>t
        </span>
        {tagline ? (
          <span className="mt-1 block text-sm font-medium leading-none text-muted-foreground">
            Visa POF Planning
          </span>
        ) : null}
      </span>
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      aria-label="Smarrrt"
      className="inline-flex rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
    >
      {content}
    </Link>
  );
}
