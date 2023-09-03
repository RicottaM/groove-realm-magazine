import { NextFunction, RequestHandler } from "express";
import { bandService } from "./band.service";
import { Request, Response } from "express";
import { ErrorWithStatus } from "../../error/error-with-status";

export const bandController: Record<string, RequestHandler> = {
  read: async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    try {
      const band = await bandService.readOne(id);

      res.json(band);
    } catch (error) {
      next(error);
    }
  },
  readAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bands = await bandService.readAll();

      res.json(bands);
    } catch (error) {
      next(error);
    }
  },
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const message = await bandService.create(req.body);

      res.json(message);
    } catch (error) {
      next(error);
    }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    try {
      const message = await bandService.update(id, req.body);

      res.json(message);
    } catch (error) {
      next(error);
    }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    try {
      const message = await bandService.delete(id);

      res.json(message);
    } catch (error) {
      next(error);
    }
  },
};
