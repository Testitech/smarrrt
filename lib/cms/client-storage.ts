import type { ClientStorageAdapter } from "better-content/core";

export const cmsImageStorage: ClientStorageAdapter = {
  async upload(file) {
    const formData = new FormData();
    formData.set("file", file);
    const response = await fetch("/api/cms-media", { method: "POST", body: formData });
    const payload = (await response.json().catch(() => null)) as { url?: string; error?: string } | null;
    if (!response.ok || !payload?.url) throw new Error(payload?.error ?? "Image upload failed");
    return { url: payload.url };
  },
};
