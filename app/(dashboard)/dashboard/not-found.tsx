import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Lock, Plus } from "lucide-react";

export default function DashboardNotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center">
              <Lock className="w-10 h-10 text-muted-foreground" />
            </div>
            <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">
                404
              </span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Strategy not found</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This POF strategy either doesn&apos;t exist or belongs to a
            different account. You can only view strategies saved to your own
            profile.
          </p>
        </div>

        {/* Security note */}
        <Card className="border-border text-left">
          <CardContent className="p-4 space-y-1">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
              Why am I seeing this?
            </p>
            <ul className="space-y-1.5 mt-2">
              {[
                "The strategy URL may have been typed incorrectly",
                "The strategy may have been deleted",
                "This strategy belongs to a different account",
              ].map((reason) => (
                <li
                  key={reason}
                  className="text-xs text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  {reason}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Button asChild>
            <Link href="/dashboard">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to My Dashboard
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/calculator">
              <Plus className="w-4 h-4 mr-2" />
              Create New Strategy
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
