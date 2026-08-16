import { randomUUID } from "node:crypto";

import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import {
  calculatePofRequest,
  PofRequestError,
  readPofRequest,
} from "@/lib/pof-request";
import { prisma } from "@/lib/prisma";
import type { ApiResponse } from "@/types";
import { timelineFinancialSnapshot } from "@/lib/pof-engine";

const NO_STORE_HEADERS = {
  "Cache-Control": "private, no-store, max-age=0",
};

function slugPart(value: string): string {
  return value
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
}

function newTimelineSlug(
  countryName: string,
  purposeName: string,
  intakeKey: string,
): string {
  return [
    slugPart(countryName),
    slugPart(purposeName),
    intakeKey,
    randomUUID().replaceAll("-", "").slice(0, 8),
  ].join("-");
}

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      const response: ApiResponse<null> = {
        success: false,
        error: "You must be signed in to save a strategy.",
      };
      return NextResponse.json(response, {
        status: 401,
        headers: NO_STORE_HEADERS,
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { isActive: true },
    });
    if (!user?.isActive) {
      const response: ApiResponse<null> = {
        success: false,
        error: "This account is not permitted to save strategies.",
      };
      return NextResponse.json(response, {
        status: 403,
        headers: NO_STORE_HEADERS,
      });
    }

    const input = await readPofRequest(request);
    const { country, purpose, rule, fxRate, calculation } =
      await calculatePofRequest(input);


    const calculatedAt = new Date();
    const { targetAmount, monthlyDeposit } = timelineFinancialSnapshot(
      rule.amountScope,
      calculation,
    );
    const compoundKey = {
      userId: session.user.id,
      countryId: country.id,
      purposeId: purpose.id,
      intakeKey: input.intakeKey,
    };
    const timeline = await prisma.userTimeline.upsert({
      where: {
        userId_countryId_purposeId_intakeKey: compoundKey,
      },
      update: {
        intakeDate: input.intakeDate,
        currentBalance: input.currentBalance,
        targetAmount,
        monthlyDeposit,
        safeStartDate: calculation.safeStartDate,
        cautionStartDate: calculation.cautionStartDate,
        riskyStartDate: calculation.riskyStartDate,
        currentStatus: calculation.currentStatus,
        calculatedAt,
        ruleVersion: rule.ruleVersion,
        fxRateUsed: fxRate.parallelRate,
        amountScope: rule.amountScope,
        ruleSourceUrl: rule.sourceUrl,
      },
      create: {
        ...compoundKey,
        slug: newTimelineSlug(country.name, purpose.name, input.intakeKey),
        intakeDate: input.intakeDate,
        currentBalance: input.currentBalance,
        targetAmount,
        monthlyDeposit,
        safeStartDate: calculation.safeStartDate,
        cautionStartDate: calculation.cautionStartDate,
        riskyStartDate: calculation.riskyStartDate,
        currentStatus: calculation.currentStatus,
        calculatedAt,
        ruleVersion: rule.ruleVersion,
        fxRateUsed: fxRate.parallelRate,
        amountScope: rule.amountScope,
        ruleSourceUrl: rule.sourceUrl,
      },
      select: {
        slug: true,
      },
    });
    const response: ApiResponse<{ slug: string }> = {
      success: true,
      data: { slug: timeline.slug },
    };

    return NextResponse.json(response, {
      status: 200,
      headers: NO_STORE_HEADERS,
    });
  } catch (error) {
    if (error instanceof PofRequestError) {
      const response: ApiResponse<null> = {
        success: false,
        error: error.message,
      };

      return NextResponse.json(response, {
        status: error.status,
        headers: NO_STORE_HEADERS,
      });
    }

    console.error("[api/save-timeline] Failed", error);
    const response: ApiResponse<null> = {
      success: false,
      error: "Failed to save strategy. Please try again.",
    };
    return NextResponse.json(response, {
      status: 500,
      headers: NO_STORE_HEADERS,
    });
  }
}
