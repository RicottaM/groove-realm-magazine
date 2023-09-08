import { ErrorWithStatus } from "../../error/error-with-status";
import { SongCreated, SongUpdated } from "./song";
import { Song } from "./song.model";

export const songService = {
  readOne: async (id: number) => {
    const song = await Song.query().findById(id);

    if (!song) {
      throw new ErrorWithStatus(
        `Couldn't find any song with given id: ${id}`,
        404
      );
    }

    return { song };
  },
  readAll: async () => {
    const songs = await Song.query();

    if (!songs) {
      throw new ErrorWithStatus(`Couldn't find any songs.`, 404);
    }

    return { songs };
  },
  create: async (songCreated: SongCreated) => {
    await Song.query().insert(songCreated);

    return {
      message: "song has been added.",
    };
  },
  update: async (id: number, songUpdated: SongUpdated) => {
    const song = await Song.query()
      .findById(id)
      .update(songUpdated)
      .returning("*");

    if (!song) {
      throw new ErrorWithStatus(
        `Couldn't find any song with given id: ${id}`,
        404
      );
    }

    return {
      message: "song has been updated.",
    };
  },
  delete: async (id: number) => {
    const song = await Song.query().deleteById(id).returning("*");

    if (!song) {
      throw new ErrorWithStatus(
        `Couldn't find any song with given id: ${id}`,
        404
      );
    }
    return {
      message: "song has been deleted.",
    };
  },
};
