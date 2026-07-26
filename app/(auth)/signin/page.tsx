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
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="w-full max-w-xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary shadow-sm">
              <span className="text-primary-foreground font-black text-lg">
                Sm
              </span>
            </div>
            <span className="font-black text-4xl tracking-tight">
              Sma<span className="text-primary">rrr</span>t
            </span>
          </div>
          <p className="text-base text-muted-foreground">
            Your visa POF strategy dashboard
          </p>
        </div>

        <Card className="border-border shadow-xl rounded-3xl">
          <CardHeader className="text-center pb-6 pt-8 px-8">
            <CardTitle className="text-3xl md:text-4xl leading-tight">
              Your POF strategy is ready
            </CardTitle>
            <CardDescription className="text-lg leading-relaxed mt-3">
              Create a free account to view your personalised timeline, save
              your strategy, and revisit the rule and FX references behind it.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 px-8 pb-8">
            {errorMessage ? (
              <div
                role="alert"
                className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              >
                {errorMessage}
              </div>
            ) : null}

            {/* Google Sign In */}
            <form
              action={async () => {
                "use server";
                await signIn("google", { redirectTo: "/dashboard" });
              }}
            >
              <Button
                type="submit"
                className="w-full h-14 text-base font-semibold rounded-xl"
                size="lg"
              >
                {/* <Chrome className="w-5 h-5 mr-3" /> */}
                Continue with Google
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">or</span>
              </div>
            </div>

            {/* Magic Link */}
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
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
                autoComplete="email"
                inputMode="email"
                className="w-full h-14 px-5 text-base border border-input rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                variant="outline"
                className="w-full h-14 text-base font-semibold rounded-xl"
                size="lg"
              >
                Send Magic Link
              </Button>
            </form>

            {/* Fine print */}
            <p className="text-sm text-center text-muted-foreground pt-4 leading-relaxed">
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

        {/* Back link */}
        <p className="text-center text-base text-muted-foreground mt-8">
          Just browsing?{" "}
          <Link
            href="/calculator"
            className="text-primary font-medium hover:underline"
          >
            Use the calculator without signing in
          </Link>
        </p>
      </div>
    </div>
  );
}
