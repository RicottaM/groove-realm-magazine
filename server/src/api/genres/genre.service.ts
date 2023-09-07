import { ErrorWithStatus } from "../../error/error-with-status";
import { GenreCreated, GenreUpdated } from "./genre";
import { Genre } from "./genre.model";

export const genreService = {
  readOne: async (id: number) => {
    const genre = await Genre.query().findById(id);

    if (!genre) {
      throw new ErrorWithStatus(
        `Couldn't find any genre with given id: ${id}`,
        404
      );
    }

    return { genre };
  },
  readAll: async () => {
    const genres = await Genre.query();

    if (!genres) {
      throw new ErrorWithStatus(`Couldn't find any genres.`, 404);
    }

    return { genres };
  },
  create: async (genreCreated: GenreCreated) => {
    await Genre.query().insert(genreCreated);

    return {
      message: "Genre has been added.",
    };
  },
  update: async (id: number, genreUpdated: GenreUpdated) => {
    const genre = await Genre.query()
      .findById(id)
      .update(genreUpdated)
      .returning("*");

    if (!genre) {
      throw new ErrorWithStatus(
        `Couldn't find any genre with given id: ${id}`,
        404
      );
    }

    return {
      message: "Genre has been updated.",
    };
  },
  delete: async (id: number) => {
    const genre = await Genre.query().deleteById(id).returning("*");

    if (!genre) {
      throw new ErrorWithStatus(
        `Couldn't find any genre with given id: ${id}`,
        404
      );
    }
    return {
      message: "Genre has been deleted.",
    };
  },
};
