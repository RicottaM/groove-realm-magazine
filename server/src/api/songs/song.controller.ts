import { NextFunction, RequestHandler } from "express";
import { songService } from "./song.service";
import { Request, Response } from "express";

export const songController: Record<string, RequestHandler> = {
  read: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const song = await songService.readOne(id);

      res.json(song);
    } catch (error) {
      next(error);
    }
  },
  readAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const songs = await songService.readAll();

      res.json(songs);
    } catch (error) {
      next(error);
    }
  },
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const song = await songService.create(req.body);

      res.json(song);
    } catch (error) {
      next(error);
    }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const message = await songService.update(id, req.body);

      res.json(message);
    } catch (error) {
      next(error);
    }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const message = await songService.delete(id);

      res.json(message);
    } catch (error) {
      next(error);
    }
  },
};
