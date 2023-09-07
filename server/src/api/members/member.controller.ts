import { NextFunction, RequestHandler } from "express";
import { memberService } from "./member.service";
import { Request, Response } from "express";

export const memberController: Record<string, RequestHandler> = {
  read: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const member = await memberService.readOne(id);

      res.json(member);
    } catch (error) {
      next(error);
    }
  },
  readAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const members = await memberService.readAll();

      res.json(members);
    } catch (error) {
      next(error);
    }
  },
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const member = await memberService.create(req.body);

      res.json(member);
    } catch (error) {
      next(error);
    }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const message = await memberService.update(id, req.body);

      res.json(message);
    } catch (error) {
      next(error);
    }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const message = await memberService.delete(id);

      res.json(message);
    } catch (error) {
      next(error);
    }
  },
};
