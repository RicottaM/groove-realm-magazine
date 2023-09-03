import { NextFunction, RequestHandler } from "express";
import { genreService } from "./genre.service";
import { Request, Response } from "express";

export const genreController: Record<string, RequestHandler> = {
  read: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const genre = await genreService.readOne(id);

      res.json(genre);
    } catch (error) {
      next(error);
    }
  },
  readAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const genres = await genreService.readAll();

      res.json(genres);
    } catch (error) {
      next(error);
    }
  },
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const genre = await genreService.create(req.body);

      res.json(genre);
    } catch (error) {
      next(error);
    }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const message = await genreService.update(id, req.body);

      res.json(message);
    } catch (error) {
      next(error);
    }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const message = await genreService.delete(id);

      res.json(message);
    } catch (error) {
      next(error);
    }
  },
};
