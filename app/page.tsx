import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Calendar,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

// ─────────────────────────────────────────
// STATIC DATA
// ─────────────────────────────────────────

const MYTHS = [
  {
    id: 1,
    country: "🇬🇧 United Kingdom",
    myth: "UKVI only needs the money for 28 days.",
    reality:
      "If you rely on CBN rates, bank delays for Form A/PTA alone can take 3 months. Nigerian applicants need a 90-day buffer minimum.",
  },
  {
    id: 2,
    country: "🇨🇦 Canada",
    myth: "I'll just borrow the money a week before applying.",
    reality:
      "IRCC specifically targets Nigerian applications for financial manipulation. A sudden large deposit is near-certain grounds for refusal.",
  },
  {
    id: 3,
    country: "🇺🇸 United States",
    myth: "I need the money ready when I book my visa interview.",
    reality:
      "Your university needs POF BEFORE issuing the I-20. Without the I-20 you cannot even book the interview. Start 6 months earlier.",
  },
];

const FEATURES = [
  {
    icon: Calendar,
    title: "Dynamic Embassy Timelines",
    description:
      "Select your intake date and we reverse-engineer your exact Safe, Caution, and Risky months to start saving — specific to your country and visa type.",
  },
  {
    icon: TrendingUp,
    title: "Live Parallel vs. CBN Rates",
    description:
      "Stop calculating with official rates you cannot access. We track the real parallel market so you know exactly how much Naira you need today.",
  },
  {
    icon: Shield,
    title: "Statement Health Analyzer",
    description:
      "Input your current balance and we calculate your safe monthly deposit limit to avoid lump-sum rejection flags at the embassy.",
  },
];

const COUNTRIES = [
  { flag: "🇬🇧", name: "United Kingdom", tag: "28-day rule" },
  { flag: "🇺🇸", name: "United States", tag: "I-20 required" },
  { flag: "🇨🇦", name: "Canada", tag: "6-month history" },
  { flag: "🇦🇺", name: "Australia", tag: "Genuine savings" },
  { flag: "🇳🇱", name: "Netherlands", tag: "IND strict" },
  { flag: "🇫🇷", name: "France", tag: "Campus France" },
  { flag: "🇸🇪", name: "Sweden", tag: "Migrationsverket" },
  { flag: "🇫🇮", name: "Finland", tag: "Migri portal" },
  { flag: "🇲🇹", name: "Malta", tag: "Identity Malta" },
  { flag: "🇪🇸", name: "Spain", tag: "Apostille needed" },
];

const STEPS = [
  {
    step: "01",
    title: "Select your destination",
    description:
      "Choose your target country and visa purpose from our database of embassy rules.",
  },
  {
    step: "02",
    title: "Enter your intake date",
    description:
      "Tell us when you plan to travel or start school. We calculate everything backward from that date.",
  },
  {
    step: "03",
    title: "See your Naira target",
    description:
      "Get the exact amount in Naira at the real parallel rate — with a volatility buffer built in.",
  },
  {
    step: "04",
    title: "Follow your deposit plan",
    description:
      "Our Statement Health Analyzer tells you exactly how much to deposit each month to stay under the lump-sum radar.",
  },
];

// ─────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
                Built for Nigerian travel aspirants
              </Badge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-balance mb-6">
                Stop Guessing Your{" "}
                <span className="text-primary">Proof of Funds.</span> Start
                Planning with Reality.
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed">
                Don&apos;t let FX volatility or embassy lump-sum flags ruin your
                visa chances. Map your exact Naira target, track parallel market
                rates, and build a bulletproof bank statement timeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base">
                  <Link href="/calculator">
                    Calculate My POF Timeline — It&apos;s Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base"
                >
                  <Link href="#countries">View Supported Countries</Link>
                </Button>
              </div>

              {/* Trust signals */}
              <div className="mt-10 flex flex-wrap justify-center gap-6">
                {[
                  "✓ No credit card required",
                  "✓ Live parallel market rates",
                  "✓ 10 countries supported",
                ].map((signal) => (
                  <span
                    key={signal}
                    className="text-sm text-muted-foreground font-medium"
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -z-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </section>

        {/* ── AGITATION — MYTH VS REALITY ── */}
        <section className="bg-foreground py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                The Nigerian Reality
              </Badge>
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-background mb-6 leading-tight text-balance">
                What the Embassy Doesn&apos;t Tell You
              </h2>
              <p className="text-lg md:text-xl text-background/70 max-w-3xl mx-auto leading-relaxed text-balance">
                Generic visa guides were not written for Nigerians. Here is what
                actually happens when you apply from Nigeria.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MYTHS.map((item) => (
                <Card
                  key={item.id}
                  className="bg-background/5 border-background/10 backdrop-blur-sm rounded-2xl hover:bg-background/[0.07] transition-all"
                >
                  <CardContent className="p-8 lg:p-10">
                    <p className="text-base font-semibold text-primary mb-6">
                      {item.country}
                    </p>

                    {/* Myth */}
                    <div className="flex gap-3 mb-4">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-red-400 uppercase tracking-wide mb-1">
                          The Myth
                        </p>
                        <p className="text-base leading-relaxed text-background/75">
                          {item.myth}
                        </p>
                      </div>
                    </div>

                    {/* Reality */}
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-green-400 uppercase tracking-wide mb-1">
                          The Reality
                        </p>
                        <p className="text-sm text-background/70">
                          {item.reality}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                How it works
              </Badge>
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-balance leading-tight">
                From confusion to clarity in 4 steps
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mx-auto leading-relaxed text-balance">
                No spreadsheets. No guesswork. Just your personalised POF
                strategy in minutes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
              {STEPS.map((item) => (
                <div key={item.step} className="relative">
                  <div className="text-6xl lg:text-7xl font-bold text-primary/30 mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section id="features" className="py-24 lg:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Features
              </Badge>
              <h2 className="text-4xl md:text-5xl xl:text-6xl md:text-4xl font-bold mb-6 text-balance leading-tight">
                Everything you need to get approved
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
                Built specifically around the financial realities Nigerian visa
                applicants face every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {FEATURES.map((feature) => (
                <Card
                  key={feature.title}
                  className="border-border rounded-3xl shadow-sm hover:shadow-lg transition-all"
                >
                  <CardContent className="p-8 lg:p-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── COUNTRIES ── */}
        <section id="countries" className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Supported Countries
              </Badge>
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-balance">
                10 countries. Every major visa route.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
                From the UK&apos;s 28-day rule to Canada&apos;s organic history
                requirement — each country has its own rules and we know all of
                them.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {COUNTRIES.map((country) => (
                <Card
                  key={country.name}
                  className="border-border rounded-2xl hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4">{country.flag}</div>
                    <p className="text-lg font-bold">{country.name}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {country.tag}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── LUMP SUM WARNING ── */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-yellow-200 rounded-3xl shadow-sm dark:bg-yellow-950/20 dark:border-yellow-800">
              <CardContent className="p-8 lg:p-12">
                <div className="flex gap-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold">
                      The Lump Sum Trap — Read This Before You Apply
                    </h3>
                    <p className="text-base lg:text-lg text-yellow-700 dark:text-yellow-500 leading-relaxed">
                      Embassies like Canada&apos;s IRCC and Australia&apos;s DHA
                      train case officers to detect &quot;account dumping&quot;
                      — when applicants suddenly deposit large sums just before
                      applying. A ₦500,000 account that suddenly shows
                      ₦15,000,000 is an automatic red flag for financial
                      manipulation. Smarrrt helps you build your balance
                      gradually so your statement tells a credible, organic
                      financial story.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-32 lg:py-40 bg-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight text-balance text-background/70">
              Your visa is too important to leave to guesswork.
            </h2>
            <p className="text-xl md:text-2xl text-background/70 leading-relaxed">
              Let&apos;s build your financial strategy — based on real embassy
              rules and real Naira rates.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-7 rounded-xl">
              <Link href="/calculator">
                Generate My Custom Timeline
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <p className="text-sm text-background/40 mt-6">
              Free to use. No credit card. No spam.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
