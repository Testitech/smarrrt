"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, ArrowLeft } from "lucide-react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log to error monitoring service in production
    console.error("[Smarrrt Error]", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 -z-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 -z-10 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />

      <div className="max-w-lg w-full text-center space-y-8">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 flex items-center justify-center">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center animate-pulse">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-foreground">
            Something went wrong
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            We hit an unexpected error while loading this page. This has been
            logged automatically. You can try again or head back to safety.
          </p>

          {/* Error digest for support */}
          {error.digest && (
            <div className="inline-flex items-center gap-2 bg-muted/50 border border-border rounded-lg px-3 py-1.5">
              <span className="text-xs text-muted-foreground font-mono">
                Error ID: {error.digest}
              </span>
            </div>
          )}
        </div>

        {/* What this means for POF */}
        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 text-left space-y-2">
          <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-400 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Your data is safe
          </p>
          <p className="text-sm text-yellow-700 dark:text-yellow-500">
            Any saved POF strategies and timelines in your dashboard are
            unaffected. This error only affects the current page view.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </div>

        {/* Brand */}
        <p className="text-xs text-muted-foreground">
          <Link
            href="/"
            className="hover:text-primary transition-colors font-semibold"
          >
            Sma<span className="text-primary">rrr</span>t
          </Link>{" "}
          — Visa POF Strategy Dashboard
        </p>
      </div>
    </div>
  );
}
