import { NextFunction, RequestHandler } from "express";
import { albumService } from "./album.service";
import { Request, Response } from "express";
import { ErrorWithStatus } from "../../error/error-with-status";

export const albumController: Record<string, RequestHandler> = {
  read: async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    try {
      const album = await albumService.readOne(id);

      res.json(album);
    } catch (error) {
      next(error);
    }
  },
  readAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const albums = await albumService.readAll();

      res.json(albums);
    } catch (error) {
      next(error);
    }
  },
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const message = await albumService.create(req.body);

      res.json(message);
    } catch (error) {
      next(error);
    }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    try {
      const message = await albumService.update(id, req.body);

      res.json(message);
    } catch (error) {
      next(error);
    }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    try {
      const message = await albumService.delete(id);

      res.json(message);
    } catch (error) {
      next(error);
    }
  },
};
