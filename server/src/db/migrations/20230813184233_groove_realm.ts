import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("nick").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.text("description").notNullable();
      table.integer("permission").notNullable();
    })
    .createTable("bands", (table) => {
      table.increments("id").primary();
      table.string("name").unique().notNullable();
      table.integer("formed_year").notNullable();
      table.string("country").notNullable();
      table.text("description").notNullable();
    })
    .createTable("members", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("instrument").notNullable();
      table.date("birth").notNullable();
      table.text("description").notNullable();
    })
    .createTable("albums", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table
        .integer("band_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("bands")
        .onDelete("CASCADE");
      table.integer("release_year").notNullable();
      table.text("description").notNullable();
    })
    .createTable("songs", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.integer("duration").notNullable();
      table.text("description").notNullable();
    })
    .createTable("genres", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
    })
    .createTable("bands_genres", (table) => {
      table.increments("id").primary();
      table
        .integer("band_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("bands")
        .onDelete("CASCADE");
      table
        .integer("genre_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("genres")
        .onDelete("CASCADE");
    })
    .createTable("albums_genres", (table) => {
      table.increments("id").primary();
      table
        .integer("album_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("albums")
        .onDelete("CASCADE");
      table
        .integer("genre_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("genres")
        .onDelete("CASCADE");
    })
    .createTable("songs_albums", (table) => {
      table.increments("id").primary();
      table
        .integer("song_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("songs")
        .onDelete("CASCADE");
      table
        .integer("album_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("albums")
        .onDelete("CASCADE");
    })
    .createTable("songs_bands", (table) => {
      table.increments("id").primary();
      table
        .integer("song_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("songs")
        .onDelete("CASCADE");
      table
        .integer("band_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("bands")
        .onDelete("CASCADE");
    })
    .createTable("songs_genres", (table) => {
      table.increments("id").primary();
      table
        .integer("song_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("songs")
        .onDelete("CASCADE");
      table
        .integer("genre_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("genres")
        .onDelete("CASCADE");
    })
    .createTable("bands_members", (table) => {
      table.increments("id").primary();
      table
        .integer("band_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("bands")
        .onDelete("CASCADE");
      table
        .integer("member_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("members")
        .onDelete("CASCADE");
    });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("bands_members");
  await knex.schema.dropTableIfExists("songs_genres");
  await knex.schema.dropTableIfExists("songs_albums");
  await knex.schema.dropTableIfExists("songs_bands");
  await knex.schema.dropTableIfExists("albums_genres");
  await knex.schema.dropTableIfExists("bands_genres");
  await knex.schema.dropTableIfExists("genres");
  await knex.schema.dropTableIfExists("songs");
  await knex.schema.dropTableIfExists("albums");
  await knex.schema.dropTableIfExists("members");
  await knex.schema.dropTableIfExists("bands");
  await knex.schema.dropTableIfExists("users");
}
