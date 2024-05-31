import { Knex, knex as setupKnex } from "knex";
import { env } from "./env";

// o config precisa seguir o formato Knex.Config
export const config: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
};

export const knex = setupKnex(config);
