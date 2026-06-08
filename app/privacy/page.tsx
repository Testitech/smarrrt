// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { ArrowLeft, Shield } from "lucide-react"

// // ─────────────────────────────────────────
// // SECTION COMPONENT
// // ─────────────────────────────────────────

// function Section({
//   title,
//   children,
// }: {
//   title: string
//   children: React.ReactNode
// }) {
//   return (
//     <section className="space-y-3">
//       <h2 className="text-lg font-bold text-foreground">{title}</h2>
//       <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
//         {children}
//       </div>
//     </section>
//   )
// }

// // ─────────────────────────────────────────
// // PAGE
// // ─────────────────────────────────────────

// export const metadata = {
//   title: "Privacy Policy",
//   description: "How Smarrrt collects, uses, and protects your personal data.",
// }

// export default function PrivacyPage() {
//   const lastUpdated = "June 2026"

//   return (
//     <div className="min-h-screen bg-background">

//       {/* Header */}
//       <div className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-40">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
//           <Link href="/" className="flex items-center gap-2">
//             <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
//               <span className="text-primary-foreground font-bold text-xs">Sm</span>
//             </div>
//             <span className="font-bold">
//               Sma<span className="text-primary">rrr</span>t
//             </span>
//           </Link>
//           <Button asChild variant="ghost" size="sm">
//             <Link href="/">
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               Back
//             </Link>
//           </Button>
//         </div>
//       </div>

//       <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-10">

//         {/* Title */}
//         <div className="space-y-4">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
//               <Shield className="w-5 h-5 text-primary" />
//             </div>
//             <div>
//               <h1 className="text-3xl font-bold">Privacy Policy</h1>
//               <p className="text-sm text-muted-foreground">
//                 Last updated: {lastUpdated}
//               </p>
//             </div>
//           </div>
//           <p className="text-muted-foreground leading-relaxed">
//             Smarrrt is a Proof of Funds strategy tool built for Nigerian visa
//             aspirants. We take your privacy seriously. This policy explains
//             exactly what data we collect, why we collect it, and how we
//             protect it.
//           </p>
//         </div>

//         {/* Sections */}
//         <div className="space-y-8 divide-y divide-border">

//           <Section title="1. Information We Collect">
//             <p>
//               When you sign in with Google, we receive your name, email
//               address, and profile picture from Google. We store these in our
//               database to personalise your dashboard experience.
//             </p>
//             <p>
//               When you use the POF calculator, we store your selected country,
//               visa purpose, target intake date, and current account balance.
//               This information is used solely to calculate and display your
//               personalised POF strategy.
//             </p>
//             <p>
//               We do not collect your actual bank account details, account
//               numbers, BVN, NIN, or any other sensitive financial credentials.
//               The balance figure you enter is used only for calculation
//               purposes and is never shared.
//             </p>
//           </Section>

//           <Section title="2. How We Use Your Information">
//             <p>We use your information to:</p>
//             <ul className="list-none space-y-2 mt-2">
//               {[
//                 "Create and manage your Smarrrt account",
//                 "Display your personalised POF strategy dashboard",
//                 "Calculate your Naira targets using live parallel market FX rates",
//                 "Save your visa preparation timelines for future reference",
//                 "Send authentication emails (Magic Links) when you sign in",
//               ].map((item) => (
//                 <li key={item} className="flex items-start gap-2">
//                   <span className="text-primary mt-1 flex-shrink-0">→</span>
//                   {item}
//                 </li>
//               ))}
//             </ul>
//             <p className="mt-2">
//               We do not use your data for advertising, profiling, or any
//               purpose beyond providing the Smarrrt service.
//             </p>
//           </Section>

//           <Section title="3. Data Storage & Security">
//             <p>
//               Your data is stored in a PostgreSQL database hosted on Prisma
//               Postgres with SSL encryption enforced on all connections. We use
//               industry-standard security practices including encrypted
//               environment variables, server-side session management, and
//               role-based access controls.
//             </p>
//             <p>
//               Your POF strategy data is private by default. No other user can
//               view your saved timelines or account balance figures.
//             </p>
//           </Section>

//           <Section title="4. Third-Party Services">
//             <p>Smarrrt uses the following third-party services:</p>
//             <ul className="list-none space-y-2 mt-2">
//               {[
//                 {
//                   name: "Google OAuth",
//                   purpose: "Authentication — sign in with your Google account",
//                   link: "https://policies.google.com/privacy",
//                 },
//                 {
//                   name: "Resend",
//                   purpose: "Email delivery for Magic Link authentication",
//                   link: "https://resend.com/privacy",
//                 },
//                 {
//                   name: "Vercel",
//                   purpose: "Application hosting and deployment",
//                   link: "https://vercel.com/legal/privacy-policy",
//                 },
//                 {
//                   name: "Prisma Postgres",
//                   purpose: "Database hosting",
//                   link: "https://www.prisma.io/privacy",
//                 },
//               ].map((service) => (
//                 <li key={service.name} className="flex items-start gap-2">
//                   <span className="text-primary mt-1 flex-shrink-0">→</span>
//                   <span>
//                     <strong className="text-foreground">{service.name}</strong>
//                     {" "}— {service.purpose}.{" "}
                    
//                       href={service.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-primary hover:underline"
//                     >
//                       Privacy Policy ↗
//                     </a>
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </Section>

//           <Section title="5. FX Rate Data">
//             <p>
//               Exchange rate data displayed on Smarrrt is sourced from
//               third-party market data providers and is indicative only. We do
//               not guarantee the accuracy of FX rates and are not responsible
//               for any financial decisions made based on rates displayed on
//               this platform.
//             </p>
//             <p>
//               Always confirm exchange rates with your bureau de change or bank
//               before transacting.
//             </p>
//           </Section>

//           <Section title="6. Data Retention">
//             <p>
//               We retain your account data for as long as your account is
//               active. If you request account deletion, all your personal data,
//               saved strategies, and timelines will be permanently deleted
//               within 30 days.
//             </p>
//             <p>
//               Authentication session data is automatically expired after a
//               reasonable period of inactivity.
//             </p>
//           </Section>

//           <Section title="7. Your Rights">
//             <p>You have the right to:</p>
//             <ul className="list-none space-y-2 mt-2">
//               {[
//                 "Access the personal data we hold about you",
//                 "Request correction of inaccurate data",
//                 "Request deletion of your account and all associated data",
//                 "Withdraw consent for data processing at any time",
//               ].map((right) => (
//                 <li key={right} className="flex items-start gap-2">
//                   <span className="text-primary mt-1 flex-shrink-0">→</span>
//                   {right}
//                 </li>
//               ))}
//             </ul>
//             <p className="mt-2">
//               To exercise any of these rights, contact us at{" "}
              
//                 href="mailto:privacy@smarrrt.io"
//                 className="text-primary hover:underline"
//               >
//                 privacy@smarrrt.io
//               </a>
//             </p>
//           </Section>

//           <Section title="8. Changes to This Policy">
//             <p>
//               We may update this privacy policy from time to time. When we do,
//               we will update the &quot;Last updated&quot; date at the top of
//               this page. Continued use of Smarrrt after changes constitutes
//               acceptance of the updated policy.
//             </p>
//           </Section>

//           <Section title="9. Contact">
//             <p>
//               If you have any questions about this privacy policy or how we
//               handle your data, contact us at{" "}
              
//                 href="mailto:privacy@smarrrt.io"
//                 className="text-primary hover:underline"
//               >
//                 privacy@smarrrt.io
//               </a>
//             </p>
//           </Section>

//         </div>

//         {/* Footer nav */}
//         <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
//           <Button asChild>
//             <Link href="/">Back to Home</Link>
//           </Button>
//           <Button asChild variant="outline">
//             <Link href="/terms">View Terms of Use</Link>
//           </Button>
//         </div>

//       </div>
//     </div>
//   )
// }