import { NextFunction } from "express";
import { ErrorWithStatus } from "../../error/error-with-status";
import { AlbumCreated, AlbumUpdated } from "./album";
import { Album } from "./album.model";

export const albumService = {
  readOne: async (id: number) => {
    const album = await Album.query().findById(id);

    if (!album) {
      throw new ErrorWithStatus(
        `Couldn't find album with given id: ${id}`,
        404
      );
    }

    return { album };
  },
  readAll: async () => {
    const albums = await Album.query();

    if (!albums) {
      throw new ErrorWithStatus(`Couldn't find any album.`, 404);
    }

    return { albums };
  },
  create: async (albumCreated: AlbumCreated) => {
    await Album.query().insert(albumCreated);

    return {
      message: "album has been added.",
    };
  },
  update: async (id: number, albumUpdated: AlbumUpdated) => {
    const album = await Album.query()
      .findById(id)
      .update(albumUpdated)
      .returning("*");

    if (!album) {
      throw new ErrorWithStatus(
        `Couldn't find album with given id: ${id}`,
        404
      );
    }

    return {
      message: "album has been updated.",
    };
  },
  delete: async (id: number) => {
    const album = await Album.query().deleteById(id).returning("*");

    if (!album) {
      throw new ErrorWithStatus(
        `Couldn't find album with given id: ${id}`,
        404
      );
    }

    return {
      message: "album has been deleted.",
    };
  },
};
