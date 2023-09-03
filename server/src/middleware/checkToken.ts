import jwt, { VerifyErrors, VerifyOptions } from "jsonwebtoken";
import { ErrorWithStatus } from "../error/error-with-status";
import { NextFunction, Request, Response } from "express";

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  jwt.verify(token, String(process.env.SECRET), (err: VerifyErrors | null) => {
    if (err) {
      throw new ErrorWithStatus("Token expired or invalid.", 401);
    } else {
      next();
    }
  });
};
