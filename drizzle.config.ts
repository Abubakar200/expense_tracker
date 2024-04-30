import "dotenv/config"
import { defineConfig } from 'drizzle-kit'
export default defineConfig({
 schema: "./utils/schema.ts",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.NEXT_PUBLIC_DATABASE_URL!,
  },
  verbose: true,
  strict: true,
})