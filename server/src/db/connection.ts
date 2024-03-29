import Knex from "knex";
import knexFile from "../../knexfile";
import { Model, knexSnakeCaseMappers } from "objection";

const env = process.env.NODE_ENV || "development";

export const knex = Knex({ ...knexFile[env], ...knexSnakeCaseMappers() });

console.log("Connection successful!");

Model.knex(knex);
