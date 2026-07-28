import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calculator,
  Home,
  LayoutDashboard,
  SearchX,
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      <div className="max-w-2xl w-full">
        <div className="border border-border rounded-xl bg-card p-6 shadow-sm md:p-10">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
              <SearchX className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center space-y-4">
            <p className="text-primary font-semibold tracking-wide">
              ERROR 404
            </p>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Page Not Found
            </h1>

            <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
              The page you&apos;re looking for may have been removed, renamed,
              or the link is no longer valid. If you were trying to access a
              visa strategy, the record might no longer exist.
            </p>
          </div>

          {/* Quick actions */}
          <div className="grid sm:grid-cols-3 gap-3 mt-10">
            <Link
              href="/"
              className="border border-border rounded-xl p-4 hover:border-primary transition-colors"
            >
              <Home className="w-5 h-5 text-primary mb-2" />
              <p className="font-semibold">Home</p>
              <p className="text-xs text-muted-foreground mt-1">
                Return to the landing page
              </p>
            </Link>

            <Link
              href="/calculator"
              className="border border-border rounded-xl p-4 hover:border-primary transition-colors"
            >
              <Calculator className="w-5 h-5 text-primary mb-2" />
              <p className="font-semibold">Calculator</p>
              <p className="text-xs text-muted-foreground mt-1">
                Generate a new POF strategy
              </p>
            </Link>

            <Link
              href="/dashboard"
              className="border border-border rounded-xl p-4 hover:border-primary transition-colors"
            >
              <LayoutDashboard className="w-5 h-5 text-primary mb-2" />
              <p className="font-semibold">Dashboard</p>
              <p className="text-xs text-muted-foreground mt-1">
                View your saved timelines
              </p>
            </Link>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-10">
            <Button asChild size="lg">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back Home
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/calculator">Open Calculator</Link>
            </Button>
          </div>

          {/* Footer note */}
          <div className="mt-10 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              Need a fresh strategy? Generate one in the calculator and save it
              to your dashboard after signing in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
