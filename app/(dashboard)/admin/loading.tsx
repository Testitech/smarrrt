import { Card, CardContent } from "@/components/ui/card";

const pulse = "animate-pulse rounded bg-muted motion-reduce:animate-none";

export default function AdminLoading() {
  return (
    <div className="space-y-8" aria-busy="true" aria-label="Loading admin operations">
      <div className="rounded-3xl border border-border/60 p-6 md:p-8"><div className={`h-4 w-32 ${pulse}`} /><div className={`mt-4 h-10 w-full max-w-sm rounded-lg ${pulse}`} /><p className="mt-4 text-sm text-muted-foreground">Loading operations…</p></div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{Array.from({ length: 4 }).map((_, index) => <Card key={index}><CardContent className="space-y-3 p-5"><div className={`h-4 w-24 ${pulse}`} /><div className={`h-9 w-20 ${pulse}`} /><div className={`h-3 w-full ${pulse}`} /></CardContent></Card>)}</div>
      <Card><CardContent className="space-y-4 p-6"><div className={`h-6 w-36 ${pulse}`} />{Array.from({ length: 4 }).map((_, index) => <div key={index} className={`h-12 rounded-lg ${pulse}`} />)}</CardContent></Card>
    </div>
  );
}