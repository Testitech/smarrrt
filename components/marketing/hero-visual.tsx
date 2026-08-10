import Image from "next/image";
import { CalendarDays, Check, MapPin, TrendingUp } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[38rem] min-w-0 pb-12 pt-10 sm:pb-16 sm:pt-12 lg:mx-0 lg:pb-14">
      <div className="absolute inset-x-5 top-4 h-[86%] rounded-[2.5rem] bg-primary/15 sm:inset-x-8" />
      <div className="absolute left-2 top-0 z-20 flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold shadow-sm sm:left-7 sm:px-4 sm:text-sm">
        <CalendarDays className="size-4 text-primary" aria-hidden="true" />{" "}
        Start 6 months earlier
      </div>
      <div
        className="relative ml-auto aspect-4/5 w-[88%] overflow-hidden bg-muted shadow-[0_28px_70px_-32px_rgba(0,0,0,0.55)] sm:w-[84%]"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 78%, 88% 78%, 88% 100%, 18% 100%, 18% 92%, 0 92%)",
        }}
      >
        <Image
          src="/images/smarrrt-hero-placeholder.png"
          alt="A young Nigerian professional planning their international study finances"
          fill
          preload
          sizes="(max-width: 1023px) 88vw, 42vw"
          className="object-cover object-[58%_center] rounded-xl"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
      </div>
      <div className="absolute bottom-1 left-0 z-20 min-w-0 rounded-2xl border border-border/80 bg-background/95 p-4 shadow-xl backdrop-blur sm:bottom-5 sm:p-5">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Illustrative target
        </p>
        <p
          className="mt-1 text-[clamp(1.35rem,7vw,2rem)] font-bold leading-none tabular-nums tracking-tight"
          title="29,328,495 Nigerian naira"
        >
          ₦29.3M
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <MapPin className="size-3.5 text-primary" aria-hidden="true" /> Canada
          · Study
        </p>
      </div>
      <div className="absolute -right-10 top-[18%] z-20 hidden rounded-2xl border border-border/80 bg-background/95 p-4 shadow-xl backdrop-blur sm:block">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-primary/15">
            <TrendingUp className="size-4 text-primary" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              Indicative FX
            </p>
            <p className="font-bold tabular-nums">CAD 1 = ₦1,220</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[6.5rem] right-2 z-20 hidden items-center gap-2 rounded-full bg-foreground px-3 py-2 text-xs font-semibold text-background shadow-lg min-[390px]:flex sm:bottom-[8rem] sm:right-5">
        <Check className="size-3.5 text-primary" aria-hidden="true" /> Planning
        status: Earlier
      </div>
    </div>
  );
}
