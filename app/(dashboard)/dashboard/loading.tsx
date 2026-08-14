import { Card, CardContent } from "@/components/ui/card";

const pulse = "animate-pulse rounded bg-muted motion-reduce:animate-none";

export default function DashboardLoading() {
  return (
    <div className="space-y-8" aria-busy="true" aria-label="Preparing your dashboard">
      <div className="space-y-3"><div className={`h-4 w-28 ${pulse}`} /><div className={`h-10 w-full max-w-md rounded-lg ${pulse}`} /><p className="text-sm text-muted-foreground">Preparing your dashboard…</p></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 3 }).map((_, index) => <Card key={index} className="rounded-2xl"><CardContent className="space-y-4 p-5"><div className={`h-5 w-28 ${pulse}`} /><div className={`h-9 w-36 ${pulse}`} /><div className={`h-4 w-full ${pulse}`} /></CardContent></Card>)}</div>
      <div className="grid gap-4 md:grid-cols-2">{Array.from({ length: 2 }).map((_, index) => <Card key={index} className="rounded-2xl"><CardContent className="space-y-4 p-6"><div className={`h-6 w-40 ${pulse}`} /><div className="grid gap-3 sm:grid-cols-2"><div className={`h-24 rounded-xl ${pulse}`} /><div className={`h-24 rounded-xl ${pulse}`} /></div><div className={`h-10 rounded-lg ${pulse}`} /></CardContent></Card>)}</div>
    </div>
  );
}