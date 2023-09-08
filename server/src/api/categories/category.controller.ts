import { NextFunction, RequestHandler } from "express";
import { categoryService } from "./category.service";
import { Request, Response } from "express";
import { ErrorWithStatus } from "../../error/error-with-status";

export const categoryController: Record<string, RequestHandler> = {
  read: async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    try {
      const category = await categoryService.readOne(id);

      res.json(category);
    } catch (error) {
      next(error);
    }
  },
  readAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categorys = await categoryService.readAll();

      res.json(categorys);
    } catch (error) {
      next(error);
    }
  },
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const message = await categoryService.create(req.body);

      res.json(message);
    } catch (error) {
      next(error);
    }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    try {
      const message = await categoryService.update(id, req.body);

      res.json(message);
    } catch (error) {
      next(error);
    }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    try {
      const message = await categoryService.delete(id);

      res.json(message);
    } catch (error) {
      next(error);
    }
  },
};
