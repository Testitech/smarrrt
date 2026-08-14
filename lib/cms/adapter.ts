import "server-only";
import type { DataAdapter, Query } from "better-content/core";
import type { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

const collection = "landingSections";
const fields: Record<string, readonly string[]> = {
  hero: ["eyebrow","headlineBefore","headlineHighlight","headlineAfter","description","primaryCtaLabel","primaryCtaHref","secondaryCtaLabel","secondaryCtaHref","reassuranceOne","reassuranceTwo","imageUrl","imageAlt","startLabel","targetLabel","fxLabel","statusLabel"],
  reality: ["eyebrow","heading","description"],
  "myth-canada": ["country","myth","reality","order"],
  "myth-australia": ["country","myth","reality","order"],
  "myth-netherlands": ["country","myth","reality","order"],
  how: ["eyebrow","heading","description"],
  "how-step-1": ["title","description","order"],
  "how-step-2": ["title","description","order"],
  "how-step-3": ["title","description","order"],
  "how-step-4": ["title","description","order"],
  features: ["eyebrow","heading","description"],
  "feature-1": ["title","description","order"],
  "feature-2": ["title","description","order"],
  "feature-3": ["title","description","order"],
  "final-cta": ["heading","description","ctaLabel","ctaHref","reassurance"],
};

function checkCollection(value: string) { if (value !== collection) throw new Error("Unsupported CMS collection"); }
function sanitize(id: string, input: Record<string, unknown>) {
  const allowed = fields[id];
  if (!allowed) throw new Error("Unsupported CMS item");
  const output: Record<string, string | number> = {};
  for (const [key, value] of Object.entries(input)) {
    if (key === "id") continue;
    if (!allowed.includes(key)) throw new Error("Unsupported CMS field");
    if (key === "order") { if (!Number.isInteger(value) || Number(value) < 0 || Number(value) > 100) throw new Error("Invalid CMS order"); output[key] = Number(value); continue; }
    if (typeof value !== "string" || value.length > 2000) throw new Error("Invalid CMS value");
    output[key] = value.trim();
  }
  return output;
}
function row(row: { itemId: string; data: Prisma.JsonValue; order: number }) { return { id: row.itemId, ...((row.data as Record<string, unknown>) ?? {}), order: row.order }; }

export const cmsAdapter = {
  async fetchCollection(name, query?: Query) { checkCollection(name); const rows = await prisma.cmsItem.findMany({ where: { collection: name }, orderBy: { order: "asc" }, take: Math.min(query?.limit ?? 100, 100), skip: query?.offset ?? 0 }); return rows.map(row); },
  async fetchById(name, id) { checkCollection(name); const found = await prisma.cmsItem.findUnique({ where: { collection_itemId: { collection: name, itemId: id } } }); return found ? row(found) : null; },
  async create() { throw new Error("Landing content uses stable item identifiers"); },
  async createWithId(name, id, data) { checkCollection(name); const clean = sanitize(id, data as Record<string, unknown>); const created = await prisma.cmsItem.create({ data: { collection: name, itemId: id, data: clean, order: Number(clean.order ?? 0) } }); return row(created) as never; },
  async update(name, id, data) { checkCollection(name); const clean = sanitize(id, data as Record<string, unknown>); const existing = await prisma.cmsItem.findUnique({ where: { collection_itemId: { collection: name, itemId: id } }, select: { data: true, order: true } }); if (!existing) throw new Error("CMS item not found"); const merged = { ...(existing.data as Record<string, unknown>), ...clean }; await prisma.cmsItem.update({ where: { collection_itemId: { collection: name, itemId: id } }, data: { data: merged as Prisma.InputJsonObject, order: Number(clean.order ?? existing.order) } }); },
  async upsert(name, id, data) { checkCollection(name); const clean = sanitize(id, data as Record<string, unknown>); const existing = await prisma.cmsItem.findUnique({ where: { collection_itemId: { collection: name, itemId: id } }, select: { data: true, order: true } }); const merged = { ...((existing?.data as Record<string, unknown>) ?? {}), ...clean }; await prisma.cmsItem.upsert({ where: { collection_itemId: { collection: name, itemId: id } }, create: { collection: name, itemId: id, data: merged as Prisma.InputJsonObject, order: Number(clean.order ?? 0) }, update: { data: merged as Prisma.InputJsonObject, order: Number(clean.order ?? existing?.order ?? 0) } }); },
  async delete() { throw new Error("Required landing content cannot be deleted"); },
} as DataAdapter;