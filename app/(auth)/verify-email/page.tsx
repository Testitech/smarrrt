import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Check your email",
  robots: { index: false, follow: false },
};

export default function VerifyEmailPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <Card className="w-full max-w-lg rounded-3xl shadow-xl">
        <CardHeader className="items-center px-8 pt-10 text-center">
          <div className="mb-3 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Mail className="size-7" aria-hidden="true" />
          </div>
          <CardTitle className="text-3xl">Check your inbox</CardTitle>
          <CardDescription className="max-w-md text-base leading-relaxed">
            We sent a secure, one-time sign-in link. Open it in the same browser
            to continue to your Smarrrt dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 px-8 pb-10">
          <div className="rounded-2xl border bg-muted/40 p-4 text-sm text-muted-foreground">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              Check spam or promotions if it has not arrived after a minute.
            </p>
          </div>
          <Button asChild variant="outline" className="h-12 w-full rounded-xl">
            <Link href="/signin">Use a different email</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
