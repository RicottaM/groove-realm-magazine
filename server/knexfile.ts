import type { Knex } from "knex";

// Update with your config settings.

const development: Knex.Config = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./src/db/dev.sqlite3",
  },
  migrations: {
    directory: "./src/db/migrations",
  },
  seeds: {
    directory: "./src/db/seeds",
  },
  pool: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    afterCreate: (connection: any, cb: any) =>
      connection.run("PRAGMA foreign_keys = ON", cb),
  },
};

const production: Knex.Config = {
  client: "postgresql",
  connection: {
    database: process.env.DATABASE_NAME,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: "./src/db/migrations",
  },
};

const knexConfig: Record<string, Knex.Config> = {
  development,
  production,
};

export default knexConfig;
