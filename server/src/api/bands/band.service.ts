import { NextFunction } from "express";
import { ErrorWithStatus } from "../../error/error-with-status";
import { BandCreated, BandUpdated } from "./band";
import { Band } from "./band.model";

export const bandService = {
  readOne: async (id: number) => {
    const band = await Band.query().findById(id);

    if (!band) {
      throw new ErrorWithStatus(`Couldn't find band with given id: ${id}`, 404);
    }

    return { band };
  },
  readAll: async () => {
    const bands = await Band.query();

    if (!bands) {
      throw new ErrorWithStatus(`Couldn't find any band.`, 404);
    }

    return { bands };
  },
  create: async (bandCreated: BandCreated) => {
    const newBand = await Band.query().insert(bandCreated).returning("*");

    if (!newBand) {
      throw new ErrorWithStatus(`Couldn't add a new band.`, 404);
    }

    return {
      message: "Band has been added.",
    };
  },
  update: async (id: number, bandUpdated: BandUpdated) => {
    const band = await Band.query()
      .findById(id)
      .update(bandUpdated)
      .returning("*");

    if (!band) {
      throw new ErrorWithStatus(`Couldn't find band with given id: ${id}`, 404);
    }

    return {
      message: "Band has been updated.",
    };
  },
  delete: async (id: number) => {
    const band = await Band.query().deleteById(id).returning("*");

    if (!band) {
      throw new ErrorWithStatus(`Couldn't find band with given id: ${id}`, 404);
    }

    return {
      message: "Band has been deleted.",
    };
  },
};
