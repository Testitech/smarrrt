// import "server-only";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { PrismaClient } from "../generated/prisma";
// import { Pool } from "pg";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// const adapter = new PrismaPg(pool);

// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     adapter,
//     log:
//       process.env.NODE_ENV === "development"
//         ? ["query", "error", "warn"]
//         : ["error"],
//   });

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma;
// }

import "server-only";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma";
import { Pool } from "pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// 1. Keep this as a clean, plain object
const prismaOptions = {
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
} as any; // Shuts up errors regarding dynamic assignments

// 2. Attach the adapter if the database string is live
if (process.env.DATABASE_URL) {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);
  prismaOptions.adapter = adapter;
}

// 3. Force-cast 'prismaOptions' into what the PrismaClient constructor expects
export const prisma =
  globalForPrisma.prisma ?? new PrismaClient(prismaOptions as any);

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
