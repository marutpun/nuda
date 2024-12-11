import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const turso = createClient({
  url: process.env.VITE_TURSO_DATABASE_URL!,
  authToken: process.VITE_env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(turso);