import { cn } from "@/lib/utils";

type CurrencyAmountProps = {
  value: string;
  className?: string;
  title?: string;
};

export function CurrencyAmount({ value, className, title }: CurrencyAmountProps) {
  return (
    <span
      title={title ?? value}
      className={cn(
        "block min-w-0 max-w-full overflow-wrap-anywhere font-semibold leading-tight tabular-nums",
        "text-[clamp(1.05rem,4.8vw,1.5rem)] sm:text-2xl",
        className,
      )}
    >
      {value}
    </span>
  );
}
