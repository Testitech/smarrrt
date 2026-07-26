import { NextResponse } from "next/server";

import { getAllFxRates, getRateAge, isRateFresh } from "@/lib/fx";
import type { ApiResponse, FxRateDto } from "@/types";

type FxRateResponse = FxRateDto & {
  isFresh: boolean;
  age: string;
};

export async function GET() {
  try {
    const rates = await getAllFxRates();
    const ratesWithMeta = rates.map((rate) => ({
      ...rate,
      lastUpdated: rate.lastUpdated.toISOString(),
      isFresh: isRateFresh(rate.lastUpdated),
      age: getRateAge(rate.lastUpdated),
    }));
    const response: ApiResponse<FxRateResponse[]> = {
      success: true,
      data: ratesWithMeta,
    };

    return NextResponse.json(response, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
      },
    });
  } catch (error) {
    console.error("[api/fx-rates] Failed to fetch rates", error);
    const response: ApiResponse<null> = {
      success: false,
      error: "Failed to fetch FX rates. Please try again.",
    };

    return NextResponse.json(response, { status: 500 });
  }
}
