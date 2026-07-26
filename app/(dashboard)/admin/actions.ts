"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/dal";
import { processEmailOutbox } from "@/lib/email/outbox";
import { prisma } from "@/lib/prisma";

const MAX_ENTITY_ID_LENGTH = 128;
const MAX_AUDIT_ERROR_LENGTH = 500;

function readEntityId(formData: FormData, name: string): string | null {
  const value = formData.get(name);

  if (typeof value !== "string") return null;

  const normalized = value.trim();
  if (!normalized || normalized.length > MAX_ENTITY_ID_LENGTH) return null;

  return normalized;
}

function boundedAuditText(value: string | null): string | null {
  if (!value) return null;
  return value.replace(/[\r\n]+/g, " ").slice(0, MAX_AUDIT_ERROR_LENGTH);
}

function finish(status: string): never {
  revalidatePath("/admin");
  redirect(`/admin?status=${status}`);
}

function isSerializationConflict(error: unknown): boolean {
  return Boolean(
    error &&
    typeof error === "object" &&
    "code" in error &&
    error.code === "P2034",
  );
}

export async function retryFailedEmail(formData: FormData): Promise<never> {
  const actor = await requireAdmin();
  const deliveryId = readEntityId(formData, "deliveryId");

  if (!deliveryId) finish("invalid-request");

  const outcome = await prisma.$transaction(async (transaction) => {
    const authorizedActor = await transaction.user.findUnique({
      where: { id: actor.id },
      select: { role: true, isActive: true },
    });

    if (!authorizedActor?.isActive || authorizedActor.role !== "ADMIN") {
      return { kind: "forbidden" } as const;
    }

    const delivery = await transaction.emailDelivery.findUnique({
      where: { id: deliveryId },
      select: {
        id: true,
        eventKey: true,
        status: true,
        attempts: true,
        lastError: true,
      },
    });

    if (!delivery) return { kind: "missing" } as const;
    if (delivery.status !== "FAILED") {
      return { kind: "not-failed" } as const;
    }

    const claimed = await transaction.emailDelivery.updateMany({
      where: { id: delivery.id, status: "FAILED" },
      data: {
        status: "PENDING",
        attempts: 0,
        nextAttemptAt: new Date(),
        lockedAt: null,
        lastError: null,
      },
    });

    if (claimed.count !== 1) return { kind: "conflict" } as const;

    await transaction.adminAuditLog.create({
      data: {
        actorId: actor.id,
        action: "EMAIL_DELIVERY_REQUEUED",
        entityType: "EmailDelivery",
        entityId: delivery.id,
        metadata: {
          eventKey: delivery.eventKey,
          previousAttempts: delivery.attempts,
          previousError: boundedAuditText(delivery.lastError),
        },
      },
    });

    return { kind: "claimed", eventKey: delivery.eventKey } as const;
  });

  if (outcome.kind === "forbidden") redirect("/dashboard");
  if (outcome.kind === "missing") finish("email-missing");
  if (outcome.kind === "not-failed") finish("email-not-failed");
  if (outcome.kind === "conflict") finish("email-conflict");

  let deliveryResult:
    | Awaited<ReturnType<typeof processEmailOutbox>>
    | undefined;

  try {
    deliveryResult = await processEmailOutbox({
      eventKey: outcome.eventKey,
      limit: 1,
    });
  } catch (error) {
    // The row is already safely back in the durable queue. Infrastructure or
    // configuration failures are logged and left for the scheduled worker.
    console.error("[admin] Immediate email retry could not run", error);
  }

  if (deliveryResult?.sent === 1) finish("email-sent");
  if (deliveryResult?.failed === 1) finish("email-failed");

  finish("email-requeued");
}

export async function setUserActive(formData: FormData): Promise<never> {
  const actor = await requireAdmin();
  const userId = readEntityId(formData, "userId");
  const requestedState = formData.get("isActive");

  if (!userId || (requestedState !== "true" && requestedState !== "false")) {
    finish("invalid-request");
  }

  const nextIsActive = requestedState === "true";

  let outcome:
    | { kind: "forbidden" }
    | { kind: "missing" }
    | { kind: "self" }
    | { kind: "last-admin" }
    | { kind: "unchanged" }
    | { kind: "conflict" }
    | { kind: "updated"; isActive: boolean };

  try {
    outcome = await prisma.$transaction(
      async (transaction) => {
        const authorizedActor = await transaction.user.findUnique({
          where: { id: actor.id },
          select: { role: true, isActive: true },
        });

        if (!authorizedActor?.isActive || authorizedActor.role !== "ADMIN") {
          return { kind: "forbidden" } as const;
        }

        const target = await transaction.user.findUnique({
          where: { id: userId },
          select: { id: true, role: true, isActive: true },
        });

        if (!target) return { kind: "missing" } as const;
        if (target.isActive === nextIsActive) {
          return { kind: "unchanged" } as const;
        }
        if (!nextIsActive && target.id === actor.id) {
          return { kind: "self" } as const;
        }

        if (!nextIsActive && target.role === "ADMIN") {
          const otherActiveAdmins = await transaction.user.count({
            where: {
              role: "ADMIN",
              isActive: true,
              id: { not: target.id },
            },
          });

          if (otherActiveAdmins === 0) {
            return { kind: "last-admin" } as const;
          }
        }

        const updated = await transaction.user.updateMany({
          where: {
            id: target.id,
            isActive: target.isActive,
          },
          data: {
            isActive: nextIsActive,
          },
        });

        if (updated.count !== 1) {
          return { kind: "conflict" } as const;
        }

        // Only revoke sessions when the account is being deactivated.
        if (!nextIsActive) {
          await transaction.session.deleteMany({
            where: {
              userId: target.id,
            },
          });
        }

        await transaction.adminAuditLog.create({
          data: {
            actorId: actor.id,
            action: nextIsActive ? "USER_ACTIVATED" : "USER_DEACTIVATED",
            entityType: "User",
            entityId: target.id,
            metadata: {
              previousIsActive: target.isActive,
              nextIsActive,
              sessionsRevoked: !nextIsActive,
            },
          },
        });

        return { kind: "updated", isActive: nextIsActive } as const;
      },
      { isolationLevel: "Serializable" },
    );
  } catch (error) {
    if (isSerializationConflict(error)) finish("user-conflict");
    throw error;
  }

  if (outcome.kind === "forbidden") redirect("/dashboard");
  if (outcome.kind === "missing") finish("user-missing");
  if (outcome.kind === "self") finish("cannot-deactivate-self");
  if (outcome.kind === "last-admin") finish("cannot-deactivate-last-admin");
  if (outcome.kind === "unchanged") finish("user-unchanged");
  if (outcome.kind === "conflict") finish("user-conflict");

  finish(outcome.isActive ? "user-activated" : "user-deactivated");
}

export async function setUserRole(formData: FormData): Promise<never> {
  const actor = await requireAdmin();
  const userId = readEntityId(formData, "userId");
  const requestedRole = formData.get("role");

  if (!userId || (requestedRole !== "USER" && requestedRole !== "ADMIN")) {
    finish("invalid-request");
  }

  const nextRole = requestedRole;

  let outcome:
    | { kind: "forbidden" }
    | { kind: "missing" }
    | { kind: "self" }
    | { kind: "inactive" }
    | { kind: "last-admin" }
    | { kind: "unchanged" }
    | { kind: "conflict" }
    | { kind: "updated"; role: "USER" | "ADMIN" };

  try {
    outcome = await prisma.$transaction(
      async (transaction) => {
        const authorizedActor = await transaction.user.findUnique({
          where: { id: actor.id },
          select: {
            role: true,
            isActive: true,
          },
        });

        if (!authorizedActor?.isActive || authorizedActor.role !== "ADMIN") {
          return { kind: "forbidden" } as const;
        }

        const target = await transaction.user.findUnique({
          where: { id: userId },
          select: {
            id: true,
            role: true,
            isActive: true,
            email: true,
          },
        });

        if (!target) {
          return { kind: "missing" } as const;
        }

        if (target.role === nextRole) {
          return { kind: "unchanged" } as const;
        }

        if (target.id === actor.id && nextRole === "USER") {
          return { kind: "self" } as const;
        }

        if (!target.isActive && nextRole === "ADMIN") {
          return { kind: "inactive" } as const;
        }

        if (target.role === "ADMIN" && nextRole === "USER") {
          const otherActiveAdmins = await transaction.user.count({
            where: {
              role: "ADMIN",
              isActive: true,
              id: {
                not: target.id,
              },
            },
          });

          if (otherActiveAdmins === 0) {
            return { kind: "last-admin" } as const;
          }
        }

        const updated = await transaction.user.updateMany({
          where: {
            id: target.id,
            role: target.role,
          },
          data: {
            role: nextRole,
          },
        });

        if (updated.count !== 1) {
          return { kind: "conflict" } as const;
        }

        await transaction.adminAuditLog.create({
          data: {
            actorId: actor.id,
            action:
              nextRole === "ADMIN"
                ? "USER_PROMOTED_TO_ADMIN"
                : "ADMIN_DEMOTED_TO_USER",
            entityType: "User",
            entityId: target.id,
            metadata: {
              email: target.email,
              previousRole: target.role,
              nextRole,
            },
          },
        });

        return {
          kind: "updated",
          role: nextRole,
        } as const;
      },
      {
        isolationLevel: "Serializable",
      },
    );
  } catch (error) {
    if (isSerializationConflict(error)) {
      finish("role-conflict");
    }

    throw error;
  }

  if (outcome.kind === "forbidden") {
    redirect("/dashboard");
  }

  if (outcome.kind === "missing") {
    finish("user-missing");
  }

  if (outcome.kind === "self") {
    finish("cannot-demote-self");
  }

  if (outcome.kind === "inactive") {
    finish("cannot-promote-inactive-user");
  }

  if (outcome.kind === "last-admin") {
    finish("cannot-demote-last-admin");
  }

  if (outcome.kind === "unchanged") {
    finish("role-unchanged");
  }

  if (outcome.kind === "conflict") {
    finish("role-conflict");
  }

  finish(outcome.role === "ADMIN" ? "user-promoted" : "admin-demoted");
}
