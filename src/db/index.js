import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "./schema";

const client = new Client({
  host: "192.168.51.246",
  port: 9432,
  user: "nodejs_course_admin",
  password: "my_password",
  database: "nodejs_course_database",
});

await client.connect();

export const db = drizzle(client, { schema });
