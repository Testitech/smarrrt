import { createContentHandler } from "better-content/server";

import { cmsAdapter } from "@/lib/cms/adapter";
import { landingLoadConfig } from "@/lib/cms/content";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const { GET } = createContentHandler({
  data: cmsAdapter,
  collections: landingLoadConfig,
  cacheControl: "no-store",
  onError(error) {
    console.error("[cms] Public landing content request failed", error);
  },
});
