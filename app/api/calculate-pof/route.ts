import { NextResponse } from "next/server";

import { formatNaira } from "@/lib/format";
import { interpolateAnalysisText } from "@/lib/pof-engine";
import {
  calculatePofRequest,
  PofRequestError,
  readPofRequest,
} from "@/lib/pof-request";
import type { ApiResponse, PofApiResponse } from "@/types";

const NO_STORE_HEADERS = {
  "Cache-Control": "private, no-store, max-age=0",
};

export async function POST(request: Request) {
  try {
    const input = await readPofRequest(request);
    const { country, rule, fxRate, calculation } =
      await calculatePofRequest(input);
    const dates = {
      safeDate: calculation.safeStartDate.toLocaleDateString("en-NG", {
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }),
      cautionDate: calculation.cautionStartDate.toLocaleDateString("en-NG", {
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }),
    };
    const interpolationValues = {
      parallelRate: fxRate.parallelRate,
      cbnRate: fxRate.cbnRate,
      ...dates,
      nairaTarget: formatNaira(calculation.recommendedNairaTarget),
      monthlyDeposit: formatNaira(calculation.safeMonthlyDeposit),
      currencyCode: country.currencyCode,
      minAmountForeign: rule.minAmountForeign,
    };
    const response: PofApiResponse = {
      success: true,
      data: {
        rule: {
          ...rule,
          sourceCheckedAt: rule.sourceCheckedAt?.toISOString() ?? null,
          effectiveFrom: rule.effectiveFrom?.toISOString() ?? null,
          effectiveTo: rule.effectiveTo?.toISOString() ?? null,
          analysisText: interpolateAnalysisText(
            rule.analysisText,
            interpolationValues,
          ),
          nigerianSpecific: interpolateAnalysisText(
            rule.nigerianSpecific,
            interpolationValues,
          ),
        },
        calculation: {
          ...calculation,
          safeStartDate: calculation.safeStartDate.toISOString(),
          cautionStartDate: calculation.cautionStartDate.toISOString(),
          riskyStartDate: calculation.riskyStartDate.toISOString(),
        },
        fxRate: {
          ...fxRate,
          lastUpdated: fxRate.lastUpdated.toISOString(),
        },
      },
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

    console.error("[api/calculate-pof] Calculation failed", error);
    const response: ApiResponse<null> = {
      success: false,
      error: "Calculation failed. Please try again.",
    };

    return NextResponse.json(response, {
      status: 500,
      headers: NO_STORE_HEADERS,
    });
  }
}
