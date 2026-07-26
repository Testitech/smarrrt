import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header */}
      <div className="space-y-2">
        <div className="h-8 w-52 rounded-md bg-muted" />
        <div className="h-4 w-96 rounded-md bg-muted" />
      </div>

      {/* Explainer banner */}
      <Card>
        <CardContent className="p-4 flex gap-3">
          <div className="h-5 w-5 rounded-full bg-muted shrink-0" />
          <div className="space-y-2 flex-1">
            <div className="h-4 w-40 rounded bg-muted" />
            <div className="h-3 w-full rounded bg-muted" />
            <div className="h-3 w-[90%] rounded bg-muted" />
            <div className="h-3 w-[75%] rounded bg-muted" />
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="h-6 w-48 rounded bg-muted" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-4 space-y-3">
                <div className="h-5 w-20 rounded bg-muted" />
                <div className="h-8 w-28 rounded bg-muted" />
                <div className="h-3 w-20 rounded bg-muted" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Detailed cards */}
      <div className="space-y-4">
        <div className="h-6 w-52 rounded bg-muted" />

        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between">
                <div className="space-y-2">
                  <div className="h-6 w-40 rounded bg-muted" />
                  <div className="h-4 w-28 rounded bg-muted" />
                </div>

                <div className="h-8 w-32 rounded-full bg-muted" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="h-28 rounded-xl bg-muted" />
                <div className="h-28 rounded-xl bg-muted" />
              </div>

              <div className="h-12 rounded-lg bg-muted" />

              <div className="h-4 w-48 rounded bg-muted" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
