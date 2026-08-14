import { SmarrrtMark } from "@/components/shared/smarrrt-logo";
import { cn } from "@/lib/utils";

export function BrandedLoader({ label = "Preparing Smarrrt…", className }: { label?: string; className?: string }) {
  return (
    <div role="status" aria-live="polite" className={cn("grid min-h-[55vh] place-items-center px-4 text-center", className)}>
      <div className="flex flex-col items-center gap-4">
        <span className="relative grid place-items-center">
          <span className="absolute size-20 rounded-3xl bg-primary/15 blur-xl" />
          <SmarrrtMark className="relative size-16 animate-[pulse_1.6s_ease-in-out_infinite] rounded-2xl text-lg motion-reduce:animate-none" />
        </span>
        <div><p className="font-semibold text-foreground">{label}</p><p className="mt-1 text-sm text-muted-foreground">Your plan is on its way.</p></div>
      </div>
    </div>
  );
}