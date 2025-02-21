export default {
  schema: "./src/db/schema.js",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    host: "192.168.51.246",
    port: 9432,
    user: "nodejs_course_admin",
    password: "my_password",
    database: "nodejs_course_database",
  },
};
