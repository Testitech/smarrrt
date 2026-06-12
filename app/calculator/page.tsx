"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  Calculator,
  TrendingUp,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  CalendarClock,
} from "lucide-react";

// ─────────────────────────────────────────
// STATIC DATA
// Hardcoded for the ungated calculator
// Real data comes from DB post-auth
// ─────────────────────────────────────────

const COUNTRIES = [
  { id: "gb", name: "United Kingdom", flag: "🇬🇧", currency: "GBP" },
  { id: "us", name: "United States", flag: "🇺🇸", currency: "USD" },
  { id: "ca", name: "Canada", flag: "🇨🇦", currency: "CAD" },
  { id: "au", name: "Australia", flag: "🇦🇺", currency: "AUD" },
  { id: "nl", name: "Netherlands", flag: "🇳🇱", currency: "EUR" },
  { id: "fr", name: "France", flag: "🇫🇷", currency: "EUR" },
  { id: "se", name: "Sweden", flag: "🇸🇪", currency: "SEK" },
  { id: "fi", name: "Finland", flag: "🇫🇮", currency: "EUR" },
  { id: "mt", name: "Malta", flag: "🇲🇹", currency: "EUR" },
  { id: "es", name: "Spain", flag: "🇪🇸", currency: "EUR" },
];

const PURPOSES = [
  { id: "study", name: "Study", icon: "🎓" },
  { id: "work", name: "Work", icon: "💼" },
  { id: "visit", name: "Visit", icon: "✈️" },
  { id: "tourism", name: "Tourism", icon: "🏖️" },
  { id: "business", name: "Business", icon: "🤝" },
  { id: "permanent-residency", name: "Permanent Residency", icon: "🏡" },
];

// Teaser data — enough to show value, not the full strategy
type TeaserEntry = {
  minAmount: number;
  safeMonthsBeforeIntake: number;
  cautionMonthsBeforeIntake: number;
  riskyMonthsBeforeIntake: number;
  requiresHistory: boolean;
  teaserNote: string;
};

const TEASER_DATA: Record<string, Record<string, TeaserEntry>> = {
  gb: {
    study: {
      minAmount: 12006,
      safeMonthsBeforeIntake: 3,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: true,
      teaserNote:
        "UKVI requires funds held for 28 consecutive days. Nigerian applicants need a 90-day buffer for FX sourcing.",
    },
    visit: {
      minAmount: 3000,
      safeMonthsBeforeIntake: 3,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "UK visit visa refusal rates for Nigerians are high. A clean 6-month statement matters more than balance size.",
    },
    work: {
      minAmount: 2500,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "UK Skilled Worker visa requires employer sponsorship. Personal maintenance funds needed for settlement period.",
    },
    tourism: {
      minAmount: 2000,
      safeMonthsBeforeIntake: 3,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "Same route as UK visit visa. Show genuine tourism intent and strong ties to Nigeria.",
    },
    business: {
      minAmount: 2000,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "UK business visitor visa requires invitation letter from a UK company.",
    },
    "permanent-residency": {
      minAmount: 3000,
      safeMonthsBeforeIntake: 6,
      cautionMonthsBeforeIntake: 3,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: true,
      teaserNote:
        "ILR requires 12 months of clean financial history. Start preparation well in advance.",
    },
  },
  us: {
    study: {
      minAmount: 35000,
      safeMonthsBeforeIntake: 6,
      cautionMonthsBeforeIntake: 4,
      riskyMonthsBeforeIntake: 2,
      requiresHistory: true,
      teaserNote:
        "F-1 visa requires POF before your university issues the I-20. Start 6 months before your intake.",
    },
    visit: {
      minAmount: 3000,
      safeMonthsBeforeIntake: 3,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "B-2 visa has high refusal rates for Nigerians. Show strong ties to Nigeria.",
    },
    work: {
      minAmount: 5000,
      safeMonthsBeforeIntake: 3,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "H-1B requires employer sponsorship and lottery selection. O-1 has no cap.",
    },
    tourism: {
      minAmount: 3000,
      safeMonthsBeforeIntake: 3,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "Same B-2 route as visit visa. Apply 3-4 months before intended travel.",
    },
    business: {
      minAmount: 4000,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "B-1 business visa. No working for pay permitted in the US.",
    },
    "permanent-residency": {
      minAmount: 15000,
      safeMonthsBeforeIntake: 6,
      cautionMonthsBeforeIntake: 3,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: true,
      teaserNote:
        "Green Card sponsor must show 125% of federal poverty level. USCIS processing takes 12-36 months.",
    },
  },
  ca: {
    study: {
      minAmount: 20635,
      safeMonthsBeforeIntake: 6,
      cautionMonthsBeforeIntake: 4,
      riskyMonthsBeforeIntake: 2,
      requiresHistory: true,
      teaserNote:
        "IRCC scrutinises Nigerian applications for account dumping. Build organic history over 6 months.",
    },
    visit: {
      minAmount: 3000,
      safeMonthsBeforeIntake: 3,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "Canada TRV has high refusal rate for Nigerians. Extensive documentation required.",
    },
    work: {
      minAmount: 5000,
      safeMonthsBeforeIntake: 3,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "LMIA from employer required for most work permits.",
    },
    tourism: {
      minAmount: 3000,
      safeMonthsBeforeIntake: 3,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Same TRV route as visit visa.",
    },
    business: {
      minAmount: 4000,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "Show clear business purpose and invitation from Canadian company.",
    },
    "permanent-residency": {
      minAmount: 13757,
      safeMonthsBeforeIntake: 6,
      cautionMonthsBeforeIntake: 3,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: true,
      teaserNote:
        "Express Entry draws happen every 2 weeks. Maintain funds year-round.",
    },
  },
  au: {
    study: {
      minAmount: 29710,
      safeMonthsBeforeIntake: 5,
      cautionMonthsBeforeIntake: 3,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: true,
      teaserNote:
        "DHA checks for genuine savings. GTE statement must explain intent to return to Nigeria.",
    },
    visit: {
      minAmount: 5000,
      safeMonthsBeforeIntake: 3,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "Subclass 600 visitor visa. Show return flight and hotel booking.",
    },
    work: {
      minAmount: 5000,
      safeMonthsBeforeIntake: 3,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "TSS Subclass 482 requires employer sponsorship.",
    },
    tourism: {
      minAmount: 5000,
      safeMonthsBeforeIntake: 3,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Same Subclass 600 route as visit visa.",
    },
    business: {
      minAmount: 3000,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "Subclass 600 business stream. ETA not available for Nigerians.",
    },
    "permanent-residency": {
      minAmount: 10000,
      safeMonthsBeforeIntake: 6,
      cautionMonthsBeforeIntake: 3,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: true,
      teaserNote:
        "SkillSelect points-based system. 65 points minimum required.",
    },
  },
  nl: {
    study: {
      minAmount: 13200,
      safeMonthsBeforeIntake: 4,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "IND requires funds in your personal account only — not family accounts.",
    },
    visit: {
      minAmount: 840,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "Schengen visa €70/day. Show accommodation and return flight.",
    },
    work: {
      minAmount: 2500,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "TWV work permit employer-led. Highly Skilled Migrant route available.",
    },
    tourism: {
      minAmount: 840,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Schengen short-stay visa. Apply at VFS Netherlands Lagos.",
    },
    business: {
      minAmount: 1500,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Schengen business visa. 90/180 day rule applies.",
    },
    "permanent-residency": {
      minAmount: 3000,
      safeMonthsBeforeIntake: 6,
      cautionMonthsBeforeIntake: 3,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: true,
      teaserNote: "5 years residence + NT2 Dutch language exam required.",
    },
  },
  fr: {
    study: {
      minAmount: 7380,
      safeMonthsBeforeIntake: 4,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "Campus France registration mandatory before consulate appointment.",
    },
    visit: {
      minAmount: 840,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Schengen visa. Apply at VFS France Nigeria.",
    },
    work: {
      minAmount: 2000,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "OFII medical exam required upon arrival in France.",
    },
    tourism: {
      minAmount: 840,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "July-August: longest Schengen processing times.",
    },
    business: {
      minAmount: 1500,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "Schengen business visa. Invitation from French company required.",
    },
    "permanent-residency": {
      minAmount: 3000,
      safeMonthsBeforeIntake: 6,
      cautionMonthsBeforeIntake: 3,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: true,
      teaserNote:
        "Carte de Résident after 5 years. B1 French level recommended.",
    },
  },
  se: {
    study: {
      minAmount: 102816,
      safeMonthsBeforeIntake: 4,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Apply via Migrationsverket portal. Processing 2-4 months.",
    },
    visit: {
      minAmount: 840,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Schengen visa through VFS Sweden Nigeria.",
    },
    work: {
      minAmount: 1800,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Employer must advertise role in EU first.",
    },
    tourism: {
      minAmount: 840,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Apply early for summer travel to Sweden.",
    },
    business: {
      minAmount: 1200,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Schengen 90/180 rule applies.",
    },
    "permanent-residency": {
      minAmount: 2500,
      safeMonthsBeforeIntake: 6,
      cautionMonthsBeforeIntake: 3,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: true,
      teaserNote: "4 years work permit = eligible for PR.",
    },
  },
  fi: {
    study: {
      minAmount: 6720,
      safeMonthsBeforeIntake: 4,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Apply through Enter Finland portal. Processing 1-3 months.",
    },
    visit: {
      minAmount: 840,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "Popular for Northern Lights tourism. Apply early for Jan/Feb.",
    },
    work: {
      minAmount: 1800,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Finland has shortage of tech, healthcare workers.",
    },
    tourism: {
      minAmount: 840,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Schengen visa. Biometrics at VFS Helsinki in Nigeria.",
    },
    business: {
      minAmount: 1200,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Schengen 90/180 rule applies.",
    },
    "permanent-residency": {
      minAmount: 2500,
      safeMonthsBeforeIntake: 6,
      cautionMonthsBeforeIntake: 3,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: true,
      teaserNote: "4 years continuous lawful stay required.",
    },
  },
  mt: {
    study: {
      minAmount: 7800,
      safeMonthsBeforeIntake: 3,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "Identity Malta Agency handles permits. English medium of instruction.",
    },
    visit: {
      minAmount: 840,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Malta Schengen visa. Popular for summer beach tourism.",
    },
    work: {
      minAmount: 1500,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "iGaming, hospitality, financial services growing in Malta.",
    },
    tourism: {
      minAmount: 840,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Valletta is UNESCO World Heritage site.",
    },
    business: {
      minAmount: 1200,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Strong fintech sector in Malta.",
    },
    "permanent-residency": {
      minAmount: 2000,
      safeMonthsBeforeIntake: 6,
      cautionMonthsBeforeIntake: 3,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: true,
      teaserNote:
        "MPRP requires significant investment. 5-year standard route available.",
    },
  },
  es: {
    study: {
      minAmount: 7200,
      safeMonthsBeforeIntake: 4,
      cautionMonthsBeforeIntake: 2,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "All Nigerian documents must be apostilled. August: Spanish admin closed.",
    },
    visit: {
      minAmount: 840,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote:
        "Spain popular for beach holidays. Processing: 15 calendar days.",
    },
    work: {
      minAmount: 1800,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Digital Nomad Visa: €2,160/month income required.",
    },
    tourism: {
      minAmount: 840,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "Avoid July-August applications — peak processing times.",
    },
    business: {
      minAmount: 1500,
      safeMonthsBeforeIntake: 2,
      cautionMonthsBeforeIntake: 1,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: false,
      teaserNote: "August: avoid — Spanish offices closed for vacaciones.",
    },
    "permanent-residency": {
      minAmount: 2500,
      safeMonthsBeforeIntake: 6,
      cautionMonthsBeforeIntake: 3,
      riskyMonthsBeforeIntake: 1,
      requiresHistory: true,
      teaserNote: "5 years residence + DELE A2 Spanish language test required.",
    },
  },
};

// FX rates (fallback — real rates come from API post-auth)
const FX_RATES: Record<string, { parallel: number; cbn: number }> = {
  GBP: { parallel: 2050, cbn: 1980 },
  USD: { parallel: 1650, cbn: 1580 },
  CAD: { parallel: 1220, cbn: 1160 },
  AUD: { parallel: 1075, cbn: 1020 },
  EUR: { parallel: 1790, cbn: 1720 },
  SEK: { parallel: 160, cbn: 152 },
};

// ─────────────────────────────────────────
// CONSTANTS — DATES
// ─────────────────────────────────────────

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const FULL_MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const INTAKE_MONTHS = FULL_MONTH_NAMES.map((label, i) => ({
  value: String(i),
  label,
}));

const NOW = new Date();
const CURRENT_MONTH_INDEX = NOW.getMonth();
const CURRENT_YEAR = NOW.getFullYear();

const INTAKE_YEARS = [
  CURRENT_YEAR,
  CURRENT_YEAR + 1,
  CURRENT_YEAR + 2,
  CURRENT_YEAR + 3,
];

// ─────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────

function formatNaira(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function getMonthsUntilIntake(intakeDate: Date) {
  const now = new Date();
  return (
    (intakeDate.getFullYear() - now.getFullYear()) * 12 +
    (intakeDate.getMonth() - now.getMonth())
  );
}

function getTimelineStatus(
  monthsRemaining: number,
  safeMonths: number,
  cautionMonths: number,
): "safe" | "caution" | "risky" {
  if (monthsRemaining >= safeMonths) return "safe";
  if (monthsRemaining >= cautionMonths) return "caution";
  return "risky";
}

// Is a given month (0-indexed) in a given year already in the past?
function isMonthDisabled(monthValue: string, yearValue: string): boolean {
  if (!yearValue) return false;
  const year = parseInt(yearValue, 10);
  const month = parseInt(monthValue, 10);
  if (year > CURRENT_YEAR) return false;
  if (year < CURRENT_YEAR) return true;
  return month < CURRENT_MONTH_INDEX;
}

// ─────────────────────────────────────────
// STATUS CONFIG
// ─────────────────────────────────────────

const STATUS_CONFIG = {
  safe: {
    label: "Safe — Good time to start",
    icon: CheckCircle,
    className:
      "border-green-200 bg-green-50 text-green-700 dark:bg-green-950/20 dark:border-green-800 dark:text-green-400",
    barClass:
      "bg-green-50 border-green-200 text-green-700 dark:bg-green-950/20 dark:border-green-800 dark:text-green-400",
  },
  caution: {
    label: "Caution — Time is getting tight",
    icon: Clock,
    className:
      "border-yellow-200 bg-yellow-50 text-yellow-700 dark:bg-yellow-950/20 dark:border-yellow-800 dark:text-yellow-400",
    barClass:
      "bg-yellow-50 border-yellow-200 text-yellow-700 dark:bg-yellow-950/20 dark:border-yellow-800 dark:text-yellow-400",
  },
  risky: {
    label: "Risky — Very little time left",
    icon: AlertTriangle,
    className:
      "border-red-200 bg-red-50 text-red-700 dark:bg-red-950/20 dark:border-red-800 dark:text-red-400",
    barClass:
      "bg-red-50 border-red-200 text-red-700 dark:bg-red-950/20 dark:border-red-800 dark:text-red-400",
  },
};

// ─────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────

export default function CalculatorPage() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState("");
  const [intakeMonth, setIntakeMonth] = useState("");
  const [intakeYear, setIntakeYear] = useState("");
  const [showTeaser, setShowTeaser] = useState(false);

  const country = COUNTRIES.find((c) => c.id === selectedCountry);
  const teaser =
    selectedCountry && selectedPurpose
      ? TEASER_DATA[selectedCountry]?.[selectedPurpose]
      : null;
  const fx = country ? FX_RATES[country.currency] : null;

  // Intake date derived from the two pickers
  const intakeDate = useMemo(() => {
    if (!intakeMonth || !intakeYear) return null;
    return new Date(parseInt(intakeYear, 10), parseInt(intakeMonth, 10), 1);
  }, [intakeMonth, intakeYear]);

  const monthsRemaining = intakeDate ? getMonthsUntilIntake(intakeDate) : null;

  const timelineStatus =
    teaser && monthsRemaining !== null
      ? getTimelineStatus(
          monthsRemaining,
          teaser.safeMonthsBeforeIntake,
          teaser.cautionMonthsBeforeIntake,
        )
      : null;

  const nairaTarget =
    teaser && fx ? Math.ceil(teaser.minAmount * fx.parallel * 1.05) : 0;

  const canGenerate =
    !!selectedCountry && !!selectedPurpose && !!intakeMonth && !!intakeYear;

  function handleGenerate() {
    if (!canGenerate) return;
    setShowTeaser(true);
  }

  function handleMonthChange(val: string) {
    setIntakeMonth(val);
    setShowTeaser(false);
  }

  function handleYearChange(val: string) {
    setIntakeYear(val);
    // If the previously selected month is now in the past for this year, clear it
    if (intakeMonth && isMonthDisabled(intakeMonth, val)) {
      setIntakeMonth("");
    }
    setShowTeaser(false);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                Sm
              </span>
            </div>
            <span className="font-bold text-lg">
              Sma<span className="text-primary">rrr</span>t
            </span>
          </div>
          <Button asChild variant="outline" size="sm">
            <a href="/signin">Sign in to save</a>
          </Button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Hero */}
        <div className="text-center space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Free POF Calculator
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold">
            Calculate Your Visa Proof of Funds
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select your destination, visa purpose, and intake date to see your
            exact Naira target and preparation timeline — based on real parallel
            market rates.
          </p>
        </div>

        {/* Selectors */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Calculator className="w-4 h-4 text-primary" />
              Select Your Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Country */}
              <div className="space-y-2">
                <label className="text-sm font-semibold">
                  Destination Country
                </label>
                <Select
                  value={selectedCountry}
                  onValueChange={(val) => {
                    setSelectedCountry(val);
                    setShowTeaser(false);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select country..." />
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRIES.map((c) => (
                      <SelectItem key={c.id} value={c.id}>
                        {c.flag} {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Purpose */}
              <div className="space-y-2">
                <label className="text-sm font-semibold">Visa Purpose</label>
                <Select
                  value={selectedPurpose}
                  onValueChange={(val) => {
                    setSelectedPurpose(val);
                    setShowTeaser(false);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select purpose..." />
                  </SelectTrigger>
                  <SelectContent>
                    {PURPOSES.map((p) => (
                      <SelectItem key={p.id} value={p.id}>
                        {p.icon} {p.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Intake Month */}
              <div className="space-y-2">
                <label className="text-sm font-semibold">Intake Month</label>
                <Select
                  value={intakeMonth}
                  onValueChange={handleMonthChange}
                  disabled={!intakeYear}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        intakeYear ? "Select month..." : "Select year first"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {INTAKE_MONTHS.map((m) => {
                      const disabled = isMonthDisabled(m.value, intakeYear);
                      return (
                        <SelectItem
                          key={m.value}
                          value={m.value}
                          disabled={disabled}
                        >
                          {m.label}
                          {disabled ? " — past" : ""}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              {/* Intake Year */}
              <div className="space-y-2">
                <label className="text-sm font-semibold">Intake Year</label>
                <Select value={intakeYear} onValueChange={handleYearChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year..." />
                  </SelectTrigger>
                  <SelectContent>
                    {INTAKE_YEARS.map((y) => (
                      <SelectItem key={y} value={String(y)}>
                        {y}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={!canGenerate}
              className="w-full"
              size="lg"
            >
              Generate My POF Timeline
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Teaser Results */}
        {showTeaser &&
          teaser &&
          country &&
          fx &&
          intakeDate &&
          monthsRemaining !== null &&
          timelineStatus && (
            <div className="space-y-6">
              {/* Months remaining — hero card */}
              <Card
                className={`border ${STATUS_CONFIG[timelineStatus].className}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-background/60 border border-current/20 flex items-center justify-center flex-shrink-0">
                        <CalendarClock className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide font-semibold opacity-70">
                          Time until your intake
                        </p>
                        <p className="text-2xl font-bold">
                          {monthsRemaining <= 0
                            ? "This is your intake month"
                            : monthsRemaining === 1
                              ? "1 month remaining"
                              : `${monthsRemaining} months remaining`}
                        </p>
                        <p className="text-sm opacity-70 mt-0.5">
                          Target intake:{" "}
                          <span className="font-semibold">
                            {FULL_MONTH_NAMES[intakeDate.getMonth()]}{" "}
                            {intakeDate.getFullYear()}
                          </span>
                        </p>
                      </div>
                    </div>
                    <Badge className={STATUS_CONFIG[timelineStatus].className}>
                      {(() => {
                        const Icon = STATUS_CONFIG[timelineStatus].icon;
                        return <Icon className="w-3.5 h-3.5 mr-1" />;
                      })()}
                      {STATUS_CONFIG[timelineStatus].label}
                    </Badge>
                  </div>

                  {/* Contextual note based on status */}
                  <p className="text-sm mt-4 leading-relaxed opacity-80">
                    {timelineStatus === "safe" &&
                      `You're ahead of schedule. The recommended preparation window for ${country.name} — ${PURPOSES.find((p) => p.id === selectedPurpose)?.name} starts ${teaser.safeMonthsBeforeIntake} months before intake. Start building your account history now.`}
                    {timelineStatus === "caution" &&
                      `Time is getting tight. Ideally preparation should have started ${teaser.safeMonthsBeforeIntake} months before intake — you now have ${monthsRemaining} month${monthsRemaining === 1 ? "" : "s"}. It can still work, but every deposit from now on matters.`}
                    {timelineStatus === "risky" &&
                      `This is a high-risk window. With ${monthsRemaining <= 0 ? "no time" : `only ${monthsRemaining} month${monthsRemaining === 1 ? "" : "s"}`} left, building a credible financial history will be very difficult. Consider whether a later intake is more realistic.`}
                  </p>
                </CardContent>
              </Card>

              {/* FX snapshot */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      POF Required
                    </p>
                    <p className="text-lg font-bold naira-amount">
                      {country.currency} {teaser.minAmount.toLocaleString()}
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Parallel Rate
                    </p>
                    <p className="text-lg font-bold naira-amount">
                      ₦{fx.parallel.toLocaleString()}
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Naira Target
                    </p>
                    <p className="text-lg font-bold naira-amount text-yellow-700 dark:text-yellow-400">
                      {formatNaira(nairaTarget)}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Teaser note */}
              <Card className="border-border">
                <CardContent className="p-4 flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">
                      {country.flag} {country.name} —{" "}
                      {PURPOSES.find((p) => p.id === selectedPurpose)?.name}{" "}
                      Visa:
                    </strong>{" "}
                    {teaser.teaserNote}
                  </p>
                </CardContent>
              </Card>

              {/* Mini calendar — teaser */}
              <div>
                <h2 className="text-lg font-bold mb-3">
                  Preparation Timeline Preview
                </h2>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                  {Array.from({ length: 12 }).map((_, i) => {
                    // i = months from now (0 = current month)
                    const cellDate = new Date(
                      CURRENT_YEAR,
                      CURRENT_MONTH_INDEX + i,
                      1,
                    );
                    const monthsToIntakeFromHere = monthsRemaining - i;
                    const status = getTimelineStatus(
                      monthsToIntakeFromHere,
                      teaser.safeMonthsBeforeIntake,
                      teaser.cautionMonthsBeforeIntake,
                    );
                    const isCurrentMonth = i === 0;
                    const isIntakeMonth =
                      cellDate.getMonth() === intakeDate.getMonth() &&
                      cellDate.getFullYear() === intakeDate.getFullYear();

                    return (
                      <div
                        key={i}
                        className={`
                        relative rounded-lg p-2 text-center border text-xs font-semibold
                        ${isCurrentMonth ? "ring-2 ring-primary" : ""}
                        ${STATUS_CONFIG[status].barClass}
                      `}
                      >
                        {isIntakeMonth && (
                          <span className="absolute -top-2 -right-1 bg-primary text-primary-foreground text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                            Intake
                          </span>
                        )}
                        <p>{MONTH_NAMES[cellDate.getMonth()]}</p>
                        <p className="text-[10px] opacity-60">
                          {cellDate.getFullYear()}
                        </p>
                        <p className="text-xs mt-0.5 opacity-70">
                          {status === "safe"
                            ? "✓"
                            : status === "caution"
                              ? "!"
                              : "✕"}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-4 mt-3 flex-wrap">
                  {[
                    {
                      status: "safe" as const,
                      icon: CheckCircle,
                      label: "Safe — Start now",
                    },
                    {
                      status: "caution" as const,
                      icon: Clock,
                      label: "Caution — Getting tight",
                    },
                    {
                      status: "risky" as const,
                      icon: AlertTriangle,
                      label: "Risky — Too late",
                    },
                  ].map((item) => (
                    <div
                      key={item.status}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground"
                    >
                      <item.icon
                        className={`w-3.5 h-3.5 ${
                          item.status === "safe"
                            ? "text-green-600"
                            : item.status === "caution"
                              ? "text-yellow-600"
                              : "text-red-600"
                        }`}
                      />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Lump sum warning */}
              {teaser.requiresHistory && (
                <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
                  <CardContent className="p-4 flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-red-700 dark:text-red-400 mb-1">
                        Lump Sum Risk — Account History Required
                      </p>
                      <p className="text-sm text-red-600 dark:text-red-500">
                        This embassy actively checks for sudden large deposits.
                        You need {teaser.safeMonthsBeforeIntake}+ months of
                        organic account history. A last-minute lump sum will
                        trigger a rejection.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Gate — Sign up CTA */}
              <Card className="border-primary/30 bg-foreground">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center gap-3 mb-2">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <Shield className="w-6 h-6 text-primary" />
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-background">
                    Your full POF strategy is ready
                  </h3>
                  <p className="text-background/60 text-sm max-w-md mx-auto">
                    Create a free account to unlock your complete 12-month
                    calendar, Statement Health Analyzer, monthly deposit plan,
                    and Nigerian-specific embassy intelligence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      onClick={() => router.push("/signin")}
                      size="lg"
                      className="text-base"
                    >
                      Unlock Full Strategy — Free
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <p className="text-xs text-background/40">
                    No credit card. No spam. Takes 10 seconds with Google.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
      </div>
    </div>
  );
}
