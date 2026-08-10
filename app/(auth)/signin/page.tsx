import { signIn } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { SmarrrtLogo } from "@/components/shared/smarrrt-logo";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
      <path
        fill="#4285F4"
        d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.92h5.38a4.6 4.6 0 0 1-2 3.02v2.54h3.24c1.9-1.75 2.98-4.32 2.98-7.41Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.98-.9 6.63-2.43l-3.24-2.54c-.9.6-2.05.96-3.39.96-2.61 0-4.82-1.77-5.61-4.14H3.04v2.62A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.39 13.85A6.02 6.02 0 0 1 6.07 12c0-.64.11-1.27.32-1.85V7.53H3.04A10 10 0 0 0 2 12c0 1.61.38 3.14 1.04 4.47l3.35-2.62Z"
      />
      <path
        fill="#EA4335"
        d="M12 6.01c1.47 0 2.79.51 3.83 1.5l2.87-2.88A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.96 5.53l3.35 2.62C7.18 7.78 9.39 6.01 12 6.01Z"
      />
    </svg>
  );
}

function authErrorMessage(error: string | string[] | undefined) {
  const code = Array.isArray(error) ? error[0] : error;

  if (code === "AccessDenied" || code === "AccountDisabled") {
    return "This account is currently unavailable. Contact support if you believe this is a mistake.";
  }

  if (code) {
    return "We could not complete that sign-in. Please try again, or use the other sign-in method.";
  }

  return null;
}

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string | string[] }>;
}) {
  const errorMessage = authErrorMessage((await searchParams).error);

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-muted/35 px-4 py-10 sm:px-6 sm:py-14">
      <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

      <div className="w-full max-w-md">
        <Card className="rounded-2xl border-border/80 bg-background shadow-[0_24px_70px_-36px_rgba(0,0,0,0.5)] sm:rounded-3xl">
          <CardHeader className="items-center px-5 pb-5 pt-6 text-center sm:px-8 sm:pt-8">
            <SmarrrtLogo href="/" variant="header" className="mb-5" />
            <CardTitle className="text-2xl leading-tight tracking-tight sm:text-3xl">
              Welcome back
            </CardTitle>
            <CardDescription className="mt-1 max-w-sm text-sm leading-relaxed sm:text-base">
              Sign in to save your POF plans and continue where you left off.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5 px-5 pb-6 sm:px-8 sm:pb-8">
            {errorMessage ? (
              <div
                role="alert"
                className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              >
                {errorMessage}
              </div>
            ) : null}

            <form
              action={async () => {
                "use server";
                await signIn("google", { redirectTo: "/dashboard" });
              }}
            >
              <Button
                type="submit"
                variant="outline"
                className="h-12 w-full bg-background text-sm font-semibold sm:text-base"
                size="lg"
              >
                <GoogleIcon />
                Continue with Google
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-[0.68rem] font-semibold uppercase tracking-[0.16em]">
                <span className="bg-background px-3 text-muted-foreground">
                  or use email
                </span>
              </div>
            </div>

            <form
              action={async (formData: FormData) => {
                "use server";
                const value = formData.get("email");
                if (typeof value !== "string") return;

                const email = value.trim().toLowerCase();
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

                await signIn("resend", {
                  email,
                  redirectTo: "/dashboard",
                });
              }}
              className="space-y-3"
            >
              <label htmlFor="email" className="block text-sm font-semibold">
                Email address
              </label>
              <div className="relative">
                <Mail
                  className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  inputMode="email"
                  className="h-12 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-base outline-none transition-shadow placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/30"
                />
              </div>
              <Button
                type="submit"
                className="h-12 w-full text-sm font-semibold sm:text-base"
                size="lg"
              >
                Send sign-in link
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Password-free. We&apos;ll email you a secure sign-in link.
              </p>
            </form>

            <p className="pt-1 text-center text-xs leading-relaxed text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="underline hover:text-foreground">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline hover:text-foreground">
                Privacy Policy
              </Link>
              . We handle your data as described in the Privacy Policy.
            </p>
          </CardContent>
        </Card>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-1.5 font-semibold text-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Continue without signing in
          </Link>
        </p>
      </div>
    </main>
  );
}
