import { NextResponse } from "next/server";
import { getSupportedPofOptions } from "@/lib/pof-options";
import type { ApiResponse } from "@/types";

const NO_STORE_HEADERS = {
  "Cache-Control": "private, no-store, max-age=0",
};

export async function GET() {
  try {
    const options = await getSupportedPofOptions();

    return NextResponse.json<ApiResponse<typeof options>>(
      { success: true, data: options },
      { headers: NO_STORE_HEADERS },
    );
  } catch (error) {
    console.error("[api/pof-options] Failed to load supported options", error);

    return NextResponse.json<ApiResponse<null>>(
      {
        success: false,
        error: "Unable to load supported visa options.",
      },
      { status: 500, headers: NO_STORE_HEADERS },
    );
  }
}
