import "server-only";

import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

import { PrismaClient } from "../generated/prisma";
import { getDatabasePoolSize, getDatabaseUrl } from "./env";

const globalForPrisma = globalThis as typeof globalThis & {
  smarrrtPrisma?: PrismaClient;
  smarrrtPostgresPool?: Pool;
};

function createPool(): Pool {
  const pool = new Pool({
    connectionString: getDatabaseUrl(),
    connectionTimeoutMillis: 10_000,
    idleTimeoutMillis: 30_000,
    max: getDatabasePoolSize(),
  });

  pool.on("error", (error) => {
    console.error("[database] An idle PostgreSQL connection failed", error);
  });

  return pool;
}

const pool = globalForPrisma.smarrrtPostgresPool ?? createPool();
const adapter = new PrismaPg(pool);

export const prisma =
  globalForPrisma.smarrrtPrisma ??
  new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.smarrrtPrisma = prisma;
  globalForPrisma.smarrrtPostgresPool = pool;
}
