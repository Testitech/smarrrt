import "server-only";

import { prisma } from "@/lib/prisma";

export type SupportedPofPurpose = {
  id: string;
  name: string;
  slug: string;
  icon: string;
  amountScope: "TOTAL_ESTIMATE" | "LIVING_COSTS_ONLY" | "VARIABLE_REQUIREMENT";
};

export type SupportedPofCountry = {
  id: string;
  name: string;
  isoCode: string;
  currencyCode: string;
  flagEmoji: string;
  purposes: SupportedPofPurpose[];
};

export async function getSupportedPofOptions(now = new Date()) {
  const countries = await prisma.country.findMany({
    where: {
      isActive: true,
      pofRules: {
        some: {
          isActive: true,
          purpose: { isActive: true },
          AND: [
            { OR: [{ effectiveFrom: null }, { effectiveFrom: { lte: now } }] },
            { OR: [{ effectiveTo: null }, { effectiveTo: { gte: now } }] },
          ],
        },
      },
    },
    select: {
      id: true,
      name: true,
      isoCode: true,
      currencyCode: true,
      flagEmoji: true,
      pofRules: {
        where: {
          isActive: true,
          purpose: { isActive: true },
          AND: [
            { OR: [{ effectiveFrom: null }, { effectiveFrom: { lte: now } }] },
            { OR: [{ effectiveTo: null }, { effectiveTo: { gte: now } }] },
          ],
        },
        select: {
          amountScope: true,
          purpose: {
            select: {
              id: true,
              name: true,
              slug: true,
              icon: true,
            },
          },
        },
      },
    },
    orderBy: { name: "asc" },
  });

  return countries.map((country) => ({
    id: country.isoCode,
    name: country.name,
    isoCode: country.isoCode,
    currencyCode: country.currencyCode,
    flagEmoji: country.flagEmoji,
    purposes: country.pofRules
      .map((rule) => ({
        ...rule.purpose,
        amountScope: rule.amountScope,
      }))
      .sort((a, b) => a.name.localeCompare(b.name)),
  })) satisfies SupportedPofCountry[];
}
