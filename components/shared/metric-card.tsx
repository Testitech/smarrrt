import { Card, CardContent } from "@/components/ui/card";
import { CurrencyAmount } from "@/components/shared/currency-amount";
import { cn } from "@/lib/utils";

type MetricCardProps = {
  label: string;
  value: string;
  sub?: string;
  className?: string;
  valueClassName?: string;
};

export function MetricCard({
  label,
  value,
  sub,
  className,
  valueClassName,
}: MetricCardProps) {
  return (
    <Card
      className={cn(
        "min-w-0 rounded-xl border-border/60 bg-background/80 shadow-sm",
        className,
      )}
    >
      <CardContent className="flex h-full min-w-0 flex-col justify-between gap-3 p-4">
        <p className="text-[11px] font-semibold uppercase leading-tight tracking-wide text-muted-foreground">
          {label}
        </p>
        <CurrencyAmount value={value} className={valueClassName} />
        {sub ? (
          <p className="text-xs leading-relaxed text-muted-foreground">{sub}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}
