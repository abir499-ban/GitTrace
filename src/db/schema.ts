import { serial, integer, boolean, pgTable, varchar, date, bigint } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial('id').primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar().notNull(),
  isVerified: boolean().default(false),
  isAdmin: boolean().default(false),
  verifyPasswordToken: varchar(),
  verfiyPasswordTokenExpiry: bigint('verfiyPasswordTokenExpiry', { mode: 'number' }),
  verifyToken: varchar(),
  verifyTokenExpiry: bigint('verifyTokenExpiry', {
    mode: 'number'
  }),
});

