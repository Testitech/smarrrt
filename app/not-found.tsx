// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft, AlertTriangle } from "lucide-react";

// export default function NotFound() {
//   return (
//     <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute top-1/4 left-1/4 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 right-1/4 -z-10 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />

//       <div className="max-w-lg w-full text-center space-y-8">
//         {/* Icon */}
//         <div className="flex justify-center">
//           <div className="relative">
//             <div className="w-24 h-24 rounded-2xl bg-muted flex items-center justify-center">
//               <AlertTriangle className="w-12 h-12 text-muted-foreground" />
//             </div>
//             <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
//               <span className="text-primary-foreground text-xs font-bold">
//                 ?
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Text */}
//         <div className="space-y-3">
//           <div className="flex items-center justify-center gap-2">
//             <span className="text-7xl md:text-8xl font-bold text-primary">
//               404
//             </span>
//           </div>
//           <h1 className="text-2xl font-bold text-foreground">
//             Looks like you&apos;ve gone off your visa route
//           </h1>
//           <p className="text-muted-foreground leading-relaxed">
//             The page you&apos;re looking for can&apos;t be found. <br />
//             <br /> It may have been removed, renamed, or the link may be
//             incorrect.
//           </p>
//         </div>

//         {/* Smarrrt-specific hint */}
//         <div className="bg-muted/50 border border-border rounded-xl p-4 text-left space-y-2">
//           <p className="text-sm font-semibold text-foreground">
//             Were you looking for one of these?
//           </p>
//           <div className="space-y-1">
//             {[
//               { label: "POF Calculator", href: "/calculator" },
//               { label: "My Dashboard", href: "/dashboard" },
//               { label: "Sign In", href: "/signin" },
//             ].map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
//               >
//                 <span className="text-primary">→</span>
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="flex flex-col sm:flex-row gap-3 justify-center">
//           <Button asChild>
//             <Link href="/">
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               Back to Home
//             </Link>
//           </Button>
//           <Button asChild variant="outline">
//             <Link href="/calculator">Try the Calculator</Link>
//           </Button>
//         </div>

//         {/* Brand */}
//         <p className="text-xs text-muted-foreground">
//           <Link
//             href="/"
//             className="hover:text-primary transition-colors font-semibold"
//           >
//             Sma<span className="text-primary">rrr</span>t
//           </Link>{" "}
//           — Visa POF Strategy Dashboard
//         </p>
//       </div>
//     </div>
//   );
// }

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
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-2xl w-full">
        {/* Brand */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold text-lg"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                Sm
              </span>
            </div>

            <span>
              Sma<span className="text-primary">rrr</span>t
            </span>
          </Link>
        </div>

        <div className="border border-border rounded-3xl bg-card p-8 md:p-12 shadow-sm">
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
