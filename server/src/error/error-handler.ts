import { Request, Response, NextFunction } from "express";
import { ErrorWithStatus } from "./error-with-status";
import { ValidationError } from "express-json-validator-middleware";

export const errorHandler = (
  error: ErrorWithStatus,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  error.status = error.status || 500;
  error.message = error.message || "An error has occured.";

  if (error instanceof ValidationError) {
    res.status(400).json({
      errors: error.validationErrors,
    });
  }

  res.status(error.status).json({
    status: error.status,
    message: error.message,
  });
};
