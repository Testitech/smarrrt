import { randomUUID } from "node:crypto";
import { Buffer } from "node:buffer";
import { put } from "@vercel/blob";

import { cmsAuth } from "@/lib/cms/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_IMAGE_BYTES = 3 * 1024 * 1024;

function detectImage(bytes: Uint8Array) {
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return { type: "image/jpeg", extension: "jpg" };
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) return { type: "image/png", extension: "png" };
  if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 && bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50) return { type: "image/webp", extension: "webp" };
  return null;
}

export async function POST(request: Request) {
  const identity = await cmsAuth.verifyRequest(request);
  if (!identity?.isActive || !identity.isAdmin) return Response.json({ error: "Administrator access required." }, { status: 403 });

  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!(file instanceof File)) return Response.json({ error: "Choose an image to upload." }, { status: 400 });
    if (file.size === 0 || file.size > MAX_IMAGE_BYTES) return Response.json({ error: "Images must be smaller than 3 MB." }, { status: 400 });

    const bytes = new Uint8Array(await file.arrayBuffer());
    const image = detectImage(bytes);
    if (!image) return Response.json({ error: "Use a JPEG, PNG, or WebP image." }, { status: 400 });

    const blob = await put(`cms/landing/${randomUUID()}.${image.extension}`, Buffer.from(bytes), {
      access: "public",
      contentType: image.type,
      addRandomSuffix: true,
    });
    return Response.json({ url: blob.url });
  } catch (error) {
    console.error("[cms] Image upload failed", error);
    return Response.json({ error: "Image upload failed. Try again." }, { status: 500 });
  }
}
