import { createHash } from "node:crypto";

import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import ResendProvider from "next-auth/providers/resend";
import { Resend } from "resend";

import {
  queueWelcomeEmail,
  welcomeEmailEventKey,
} from "@/lib/email/outbox";
import { magicLinkEmail } from "@/lib/email/templates";
import { getEmailConfig, isAdminEmail } from "@/lib/env";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    ResendProvider({
      apiKey: process.env.RESEND_API_KEY,
      from:
        process.env.EMAIL_FROM ??
        "Smarrrt <missing-email-config@example.invalid>",
      async sendVerificationRequest({ identifier, url, token }) {
        const config = getEmailConfig();
        const template = magicLinkEmail(url);
        const resend = new Resend(config.apiKey);
        const hash = createHash("sha256")
          .update(`${identifier}\0${token}`)
          .digest("hex");
        const { data, error } = await resend.emails.send(
          {
            from: config.from,
            to: identifier,
            replyTo: config.replyTo,
            subject: template.subject,
            html: template.html,
            text: template.text,
          },
          { idempotencyKey: `smarrrt-auth-${hash}` },
        );

        if (error) {
          const resendError = new Error(`Resend rejected the sign-in email: ${error.message}`);
          Object.assign(resendError, { statusCode: error.statusCode });
          throw resendError;
        }

        if (!data?.id) {
          throw new Error(
            "Resend accepted no sign-in message and returned no error.",
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    verifyRequest: "/verify-email",
    error: "/signin",
  },
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;

      const existing = await prisma.user.findUnique({
        where: { email: user.email },
        select: { isActive: true },
      });

      return existing?.isActive ?? true;
    },
    async session({ session, user }) {
      session.user.id = user.id;
      session.user.role = user.role;
      session.user.isActive = user.isActive;
      return session;
    },
  },
  events: {
    async createUser({ user }) {
      if (!user.id || !user.email) return;

      try {
        await queueWelcomeEmail({
          userId: user.id,
          email: user.email,
          name: user.name,
        });
      } catch (error) {
        // Account creation must not be rolled back by an email-provider outage.
        console.error("[auth] Could not queue the welcome email", error);
      }
    },
    async signIn({ user }) {
      if (!user.id) return;

      const existing = await prisma.user.findUnique({
        where: { id: user.id },
        select: {
          role: true,
          email: true,
          createdAt: true,
          emailDeliveries: {
            where: { eventKey: welcomeEmailEventKey(user.id) },
            select: { id: true },
            take: 1,
          },
        },
      });
      if (!existing) return;

      const shouldPromote =
        existing.role !== "ADMIN" && isAdminEmail(existing.email);

      await prisma.$transaction(async (transaction) => {
        await transaction.user.update({
          where: { id: user.id },
          data: {
            lastLoginAt: new Date(),
            ...(shouldPromote ? { role: "ADMIN" as const } : {}),
          },
        });

        if (shouldPromote) {
          await transaction.adminAuditLog.create({
            data: {
              actorId: user.id,
              action: "ADMIN_ROLE_BOOTSTRAPPED",
              entityType: "User",
              entityId: user.id,
              metadata: { source: "ADMIN_EMAILS" },
            },
          });
        }
      });

      const accountAgeMs = Date.now() - existing.createdAt.getTime();
      const isRecentOnboarding =
        accountAgeMs >= -60_000 && accountAgeMs <= 24 * 60 * 60 * 1_000;

      if (
        existing.email &&
        isRecentOnboarding &&
        existing.emailDeliveries.length === 0
      ) {
        try {
          await queueWelcomeEmail({
            userId: user.id,
            email: existing.email,
            name: user.name,
          });
        } catch (error) {
          console.error("[auth] Could not reconcile the welcome email", error);
        }
      }
    },
  },
  session: {
    strategy: "database",
  },
});
