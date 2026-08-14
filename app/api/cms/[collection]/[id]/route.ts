import { createCmsHandlers } from "better-content/server";

import { cmsAdapter } from "@/lib/cms/adapter";
import { cmsAuth } from "@/lib/cms/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const handlers = createCmsHandlers({
  data: cmsAdapter,
  auth: cmsAuth,
  onError(error) {
    console.error("[cms] Landing content request failed", error);
  },
});

export const { GET, PATCH, PUT, DELETE } = handlers;
