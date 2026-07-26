import type { DefaultSession } from "next-auth";

type SmarrrtRole = "USER" | "ADMIN";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: SmarrrtRole;
      isActive: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    role: SmarrrtRole;
    isActive: boolean;
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    role: SmarrrtRole;
    isActive: boolean;
  }
}
