import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Smarrrt — Visa POF Strategy Dashboard",
    template: "%s | Smarrrt",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  description:
    "Build a source-reviewed Proof of Funds estimate, compare indicative FX rates, and map a practical preparation timeline for supported study destinations.",
  keywords: [
    "proof of funds Nigeria",
    "visa bank statement Nigeria",
    "Canada study permit POF calculator",
    "Australia student visa funds",
    "Nigerian visa financial requirements",
    "parallel market rate visa",
  ],
  authors: [{ name: "Smarrrt" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    title: "Smarrrt — Visa POF Strategy Dashboard",
    description:
      "Source-reviewed reference amounts, indicative FX estimates, and practical Proof of Funds preparation timelines for Nigerians.",
    siteName: "Smarrrt",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smarrrt — Visa POF Strategy Dashboard",
    description:
      "Turn source-reviewed POF references and indicative FX rates into a practical Naira planning estimate.",
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
      className="h-full"
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
