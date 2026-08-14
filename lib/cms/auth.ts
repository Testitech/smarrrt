import "server-only";
import type { AuthAdapter } from "better-content/core";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const cmsAuth: AuthAdapter = {
  async verifyRequest() {
    const session = await auth();
    if (!session?.user?.id) return null;
    const user = await prisma.user.findUnique({ where: { id: session.user.id }, select: { id: true, email: true, role: true, isActive: true } });
    if (!user) return null;
    return { userId: user.id, email: user.email ?? undefined, isAdmin: user.isActive && user.role === "ADMIN", isActive: user.isActive };
  },
};