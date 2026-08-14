import type { Item, ItemMap } from "better-content/core";
import { loadItemMap } from "better-content/server";
import { cmsAdapter } from "@/lib/cms/adapter";
import { LANDING_COLLECTION } from "@/lib/cms/content-shared";

export { LANDING_COLLECTION } from "@/lib/cms/content-shared";

export const landingDefaults: Item[] = [
  { id: "hero", eyebrow: "Built for Nigerian travel aspirants", headlineBefore: "Stop Guessing Your", headlineHighlight: "Proof of Funds.", headlineAfter: "Start Planning Clearly.", description: "Turn source-reviewed requirement references and indicative FX rates into a practical Naira estimate, then map a preparation timeline you can revisit as your plans change.", primaryCtaLabel: "Start My POF Plan", primaryCtaHref: "/calculator", secondaryCtaLabel: "View Supported Countries", secondaryCtaHref: "#countries", reassuranceOne: "Free to use", reassuranceTwo: "No credit card required", imageUrl: "/images/smarrrt-hero-placeholder.png", imageAlt: "A young Nigerian professional planning their international study finances", startLabel: "Start 6 months earlier", targetLabel: "Illustrative target", fxLabel: "Indicative FX", statusLabel: "Planning status: Earlier" },
  { id: "reality", eyebrow: "The Nigerian Reality", heading: "What a Basic Calculator Misses", description: "A useful plan separates official reference amounts from FX assumptions, timing heuristics, and the evidence unique to you." },
  { id: "myth-canada", country: "Canada", myth: "The published living-expense figure is my complete budget.", reality: "Treat the official amount as a planning baseline. Tuition, accompanying family, travel, fees, and exchange-rate movement may increase what you need.", order: 0 },
  { id: "myth-australia", country: "Australia", myth: "A calculator can tell me exactly what will be accepted.", reality: "A calculator can translate published requirements into an estimate. Your evidence, eligibility, and final assessment remain specific to your application.", order: 1 },
  { id: "myth-netherlands", country: "Netherlands", myth: "Once I reach the target, the source and timing no longer matter.", reality: "Keep traceable records for material deposits and follow the evidence or transfer instructions from your institution and the official authority.", order: 2 },
  { id: "how", eyebrow: "How it works", heading: "From confusion to clarity in 4 steps", description: "No spreadsheets. No guesswork. Just your personalised POF strategy in minutes." },
  { id: "how-step-1", title: "Select your destination", description: "Choose a supported destination and purpose from our source-reviewed rule set.", order: 0 },
  { id: "how-step-2", title: "Enter your intake date", description: "Tell us when you plan to travel or start school. We calculate everything backward from that date.", order: 1 },
  { id: "how-step-3", title: "See your Naira estimate", description: "Convert the reference amount using a stored indicative FX rate and a clearly disclosed planning buffer.", order: 2 },
  { id: "how-step-4", title: "Explore your funding pace", description: "Use a monthly planning heuristic to compare your balance, target, and remaining preparation time.", order: 3 },
  { id: "features", eyebrow: "Features", heading: "Everything you need to plan with confidence", description: "Built specifically around the financial realities Nigerian visa applicants face every day." },
  { id: "feature-1", title: "Source-Reviewed Timelines", description: "Choose a supported destination, purpose and intake date to compare your runway with practical planning windows linked to official rule sources.", order: 0 },
  { id: "feature-2", title: "Indicative FX Context", description: "Translate foreign-currency requirements with stored reference rates, then confirm the executable rate with your provider before moving money.", order: 1 },
  { id: "feature-3", title: "Funding Pace Planner", description: "Compare your balance with the estimate and explore a monthly funding pace. It is a planning heuristic, not an approval or compliance test.", order: 2 },
  { id: "final-cta", heading: "Your visa is too important to leave to guesswork.", description: "Build your financial strategy from source-reviewed references, indicative Naira estimates, and a timeline you can act on.", ctaLabel: "Generate Timeline", ctaHref: "/calculator", reassurance: "Free to use. No credit card. No spam." },
];

export const landingLoadConfig = {
  [LANDING_COLLECTION]: { defaults: landingDefaults, merge: "byId" as const, fallback: landingDefaults },
};

export async function loadLandingContent(): Promise<ItemMap> {
  return loadItemMap(cmsAdapter, landingLoadConfig);
}

export function landingItem(items: ItemMap, id: string): Item {
  return items[LANDING_COLLECTION]?.find((item) => item.id === id) ?? landingDefaults.find((item) => item.id === id) ?? { id };
}