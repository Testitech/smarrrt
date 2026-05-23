import type { Metadata } from "next";
import "./globals.css";
import { inter, spaceGrotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "Smarrrt — Visa POF Strategy Dashboard",
    template: "%s | Smarrrt",
  },
  description:
    "Stop guessing your Proof of Funds. Plan your exact Naira target, track parallel market rates, and build a bulletproof bank statement timeline for UK, Canada, US, and beyond.",
  keywords: [
    "proof of funds Nigeria",
    "visa bank statement Nigeria",
    "UK visa POF calculator",
    "Canada visa bank statement",
    "Nigerian visa financial requirements",
    "parallel market rate visa",
  ],
  authors: [{ name: "Smarrrt" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    title: "Smarrrt — Visa POF Strategy Dashboard",
    description:
      "The smart way for Nigerians to plan their visa Proof of Funds. Live parallel rates, embassy timelines, and statement health analysis.",
    siteName: "Smarrrt",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smarrrt — Visa POF Strategy Dashboard",
    description:
      "Stop guessing your POF. Plan your exact Naira target with live parallel market rates.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", `${inter.variable} ${spaceGrotesk.variable}`)}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
