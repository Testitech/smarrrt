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
import { HeroVisual } from "@/components/marketing/hero-visual";
import { CmsCheckText, CmsLink, CmsText, LandingCms } from "@/components/marketing/landing-cms";
import { auth } from "@/lib/auth";
import { loadLandingContent } from "@/lib/cms/content";
import { prisma } from "@/lib/prisma";

// ─────────────────────────────────────────
// STATIC DATA
// ─────────────────────────────────────────

const MYTHS = [
  {
    id: 1,
    cmsId: "myth-canada",
    country: "🇨🇦 Canada",
    myth: "The published living-expense figure is my complete budget.",
    reality:
      "Treat the official amount as a planning baseline. Tuition, accompanying family, travel, fees, and exchange-rate movement may increase what you need.",
  },
  {
    id: 2,
    cmsId: "myth-australia",
    country: "🇦🇺 Australia",
    myth: "A calculator can tell me exactly what will be accepted.",
    reality:
      "A calculator can translate published requirements into an estimate. Your evidence, eligibility, and final assessment remain specific to your application.",
  },
  {
    id: 3,
    cmsId: "myth-netherlands",
    country: "🇳🇱 Netherlands",
    myth: "Once I reach the target, the source and timing no longer matter.",
    reality:
      "Keep traceable records for material deposits and follow the evidence or transfer instructions from your institution and the official authority.",
  },
];

const FEATURES = [
  {
    icon: Calendar,
    title: "Source-Reviewed Timelines",
    description:
      "Choose a supported destination, purpose and intake date to compare your runway with practical planning windows linked to official rule sources.",
  },
  {
    icon: TrendingUp,
    title: "Indicative FX Context",
    description:
      "Translate foreign-currency requirements with stored reference rates, then confirm the executable rate with your provider before moving money.",
  },
  {
    icon: Shield,
    title: "Funding Pace Planner",
    description:
      "Compare your balance with the estimate and explore a monthly funding pace. It is a planning heuristic, not an approval or compliance test.",
  },
];

const COUNTRIES = [
  { flag: "🇨🇦", name: "Canada", tag: "IRCC study permit" },
  { flag: "🇦🇺", name: "Australia", tag: "Student visa funds" },
  { flag: "🇳🇱", name: "Netherlands", tag: "IND study amount" },
  { flag: "🇫🇮", name: "Finland", tag: "Migri income requirement" },
  { flag: "🇸🇪", name: "Sweden", tag: "Maintenance amount" },
];

const STEPS = [
  {
    step: "01",
    title: "Select your destination",
    description:
      "Choose a supported destination and purpose from our source-reviewed rule set.",
  },
  {
    step: "02",
    title: "Enter your intake date",
    description:
      "Tell us when you plan to travel or start school. We calculate everything backward from that date.",
  },
  {
    step: "03",
    title: "See your Naira estimate",
    description:
      "Convert the reference amount using a stored indicative FX rate and a clearly disclosed planning buffer.",
  },
  {
    step: "04",
    title: "Explore your funding pace",
    description:
      "Use a monthly planning heuristic to compare your balance, target, and remaining preparation time.",
  },
];

// ─────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────

export default async function LandingPage() {
  const [session, landingContent] = await Promise.all([auth(), loadLandingContent()]);
  const editorUser = session?.user?.id
    ? await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { role: true, isActive: true },
      })
    : null;
  const isAdmin = editorUser?.role === "ADMIN" && editorUser.isActive;

  return (
    <>
      <Navbar />

      <LandingCms initialItems={landingContent} isAdmin={isAdmin}>
      <div className="flex flex-col">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-background">
          <div className="mx-auto grid max-w-[100rem] min-w-0 items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-14 lg:px-8 lg:py-20">
            <div className="motion-reveal motion-reveal-immediate min-w-0 text-center lg:text-left">
              <Badge className="mb-5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
                <CmsText itemId="hero" fieldKey="eyebrow" />
              </Badge>

              <h1 className="mb-5 text-[clamp(2.45rem,7vw,5.75rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-balance">
                <CmsText itemId="hero" fieldKey="headlineBefore" />{" "}
                <CmsText itemId="hero" fieldKey="headlineHighlight" as="span" className="text-primary" />
                <br className="hidden sm:block" /> <CmsText itemId="hero" fieldKey="headlineAfter" />
              </h1>

              <p className="mx-auto mb-7 max-w-2xl text-base leading-relaxed text-muted-foreground text-balance sm:text-lg lg:mx-0 lg:text-xl">
                <CmsText itemId="hero" fieldKey="description" />
              </p>
              <div className="mx-auto flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
                <Button asChild size="lg" className="text-base">
                  <CmsLink itemId="hero" fieldKey="primaryCtaHref" fallbackHref="/calculator">
                    <CmsText itemId="hero" fieldKey="primaryCtaLabel" />
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </CmsLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base"
                >
                  <CmsLink itemId="hero" fieldKey="secondaryCtaHref" fallbackHref="#countries"><CmsText itemId="hero" fieldKey="secondaryCtaLabel" /></CmsLink>
                </Button>
              </div>

              {/* Trust signals */}
              <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 lg:justify-start">
                <CmsCheckText itemId="hero" fieldKey="reassuranceOne" />
                <CmsCheckText itemId="hero" fieldKey="reassuranceTwo" />
                <span className="text-sm font-medium text-muted-foreground">✓ Source-linked rule references</span>
                <span className="text-sm font-medium text-muted-foreground">✓ Multiple purposes supported</span>
              </div>
            </div>

            <HeroVisual />
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -z-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </section>

        {/* ── AGITATION — MYTH VS REALITY ── */}
        <section className="motion-reveal bg-foreground py-24 lg:py-32 2xl:py-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                <CmsText itemId="reality" fieldKey="eyebrow" />
              </Badge>
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-background mb-6 leading-tight text-balance">
                <CmsText itemId="reality" fieldKey="heading" />
              </h2>
              <p className="text-lg md:text-xl text-background/70 max-w-3xl mx-auto leading-relaxed text-balance">
                <CmsText itemId="reality" fieldKey="description" />
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MYTHS.map((item) => (
                <Card
                  key={item.id}
                  className="motion-card bg-background/5 border-background/10 backdrop-blur-sm rounded-2xl hover:bg-background/[0.07] hover:shadow-xl"
                >
                  <CardContent className="p-8 lg:p-10">
                    <p className="text-base font-semibold text-primary mb-6">
                      <CmsText itemId={item.cmsId} fieldKey="country">{item.country}</CmsText>
                    </p>

                    {/* Myth */}
                    <div className="flex gap-3 mb-4">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-red-400 uppercase tracking-wide mb-1">
                          The Myth
                        </p>
                        <p className="text-base leading-relaxed text-background/75">
                          <CmsText itemId={item.cmsId} fieldKey="myth">{item.myth}</CmsText>
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
                          <CmsText itemId={item.cmsId} fieldKey="reality">{item.reality}</CmsText>
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
        <section id="how-it-works" className="motion-reveal py-24 lg:py-32 2xl:py-40 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <CmsText itemId="how" fieldKey="eyebrow" />
              </Badge>
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-balance leading-tight">
                <CmsText itemId="how" fieldKey="heading" />
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mx-auto leading-relaxed text-balance">
                <CmsText itemId="how" fieldKey="description" />
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
              {STEPS.map((item, index) => (
                // Content stays mapped to stable CMS identifiers while layout remains code-owned.
                <div key={item.step} className="relative">
                  <div className="text-6xl lg:text-7xl font-bold text-primary/30 mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4"><CmsText itemId={`how-step-${index + 1}`} fieldKey="title">{item.title}</CmsText></h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    <CmsText itemId={`how-step-${index + 1}`} fieldKey="description">{item.description}</CmsText>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section id="features" className="motion-reveal py-24 lg:py-32 2xl:py-40 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <CmsText itemId="features" fieldKey="eyebrow" />
              </Badge>
              <h2 className="text-4xl md:text-5xl xl:text-6xl md:text-4xl font-bold mb-6 text-balance leading-tight">
                <CmsText itemId="features" fieldKey="heading" />
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
                <CmsText itemId="features" fieldKey="description" />
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {FEATURES.map((feature, index) => (
                <Card
                  key={feature.title}
                  className="motion-card border-border rounded-3xl shadow-sm hover:border-primary/30 hover:shadow-lg"
                >
                  <CardContent className="p-8 lg:p-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4"><CmsText itemId={`feature-${index + 1}`} fieldKey="title">{feature.title}</CmsText></h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      <CmsText itemId={`feature-${index + 1}`} fieldKey="description">{feature.description}</CmsText>
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
                Supported destinations. Source-linked planning.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
                Each active reference is reviewed against an official source.
                Requirements can change, so Smarrrt keeps that source within
                reach for your final check.
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
                      Document the Story Behind Your Funds
                    </h3>
                    <p className="text-base lg:text-lg text-yellow-700 dark:text-yellow-500 leading-relaxed">
                      Material or recent deposits may need a clear explanation
                      and supporting records. Keep traceable evidence of where
                      your funds came from and follow the official instructions
                      for your route. Smarrrt&apos;s funding pace is a planning
                      heuristic; it does not predict how an application will be
                      assessed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="motion-reveal py-32 lg:py-40 2xl:py-48 bg-foreground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight text-balance text-background/70">
              <CmsText itemId="final-cta" fieldKey="heading" />
            </h2>
            <p className="text-xl md:text-2xl text-background/70 leading-relaxed">
              <CmsText itemId="final-cta" fieldKey="description" />
            </p>
            <Button asChild size="lg" className="mt-8 max-w-full text-base">
              <Link href="/calculator">
                <CmsText itemId="final-cta" fieldKey="ctaLabel" />
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <p className="text-sm text-background/40 mt-6">
              <CmsText itemId="final-cta" fieldKey="reassurance" />
            </p>
          </div>
        </section>
      </div>
      </LandingCms>

      <Footer />
    </>
  );
}
