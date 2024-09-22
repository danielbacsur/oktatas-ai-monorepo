import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { postgres } from "@/utils/postgres";
import Google from "next-auth/providers/google";
import NextAuth from "next-auth";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(postgres),
  providers: [Google],
});
