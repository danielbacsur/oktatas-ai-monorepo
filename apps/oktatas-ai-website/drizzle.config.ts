import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./utils/postgres.ts",
  out: "./.drizzle",
  verbose: false,
  strict: false,
  dbCredentials: {
    url: process.env.POSTGRES_URL as string,
  },
  dialect: "postgresql",
});
