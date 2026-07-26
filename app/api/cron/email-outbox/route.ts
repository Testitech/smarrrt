import { NextRequest, NextResponse } from "next/server";

import { processEmailOutbox } from "@/lib/email/outbox";
import { hasValidCronAuthorization } from "@/lib/env";

export async function GET(request: NextRequest) {
  if (!hasValidCronAuthorization(request.headers.get("authorization"))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await processEmailOutbox({ limit: 10 });
    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error("[cron/email-outbox] Processing failed", error);
    return NextResponse.json(
      { success: false, error: "Email processing failed." },
      { status: 500 },
    );
  }
}
