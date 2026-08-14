import { Card, CardContent } from "@/components/ui/card";

const pulse = "animate-pulse rounded bg-muted motion-reduce:animate-none";

export default function StrategyLoading() {
  return (
    <div className="space-y-8" aria-busy="true" aria-label="Loading your strategy">
      <div className="space-y-3"><div className={`h-4 w-32 ${pulse}`} /><div className={`h-10 w-full max-w-lg rounded-lg ${pulse}`} /><p className="text-sm text-muted-foreground">Loading your strategy…</p></div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{Array.from({ length: 4 }).map((_, index) => <Card key={index} className="rounded-2xl"><CardContent className="space-y-4 p-5"><div className={`h-4 w-28 ${pulse}`} /><div className={`h-9 w-full max-w-40 ${pulse}`} /><div className={`h-3 w-full ${pulse}`} /></CardContent></Card>)}</div>
      <Card className="rounded-2xl"><CardContent className="space-y-4 p-6"><div className={`h-7 w-48 ${pulse}`} /><div className="grid gap-3 sm:grid-cols-3">{Array.from({ length: 3 }).map((_, index) => <div key={index} className={`h-28 rounded-xl ${pulse}`} />)}</div><div className={`h-48 rounded-xl ${pulse}`} /></CardContent></Card>
    </div>
  );
}