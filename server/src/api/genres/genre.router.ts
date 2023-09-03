import { Router } from "express";
import { genreController } from "./genre.controller";
import { Validator } from "express-json-validator-middleware";
import { genreCreatedSchema, genreUpdatedSchema } from "./genre.schema";

const { validate } = new Validator({});
const genreRouter = Router();

genreRouter.get("/:id", genreController.read);

genreRouter.get("/", genreController.readAll);

genreRouter.post(
  "/",
  validate({ body: genreCreatedSchema }),
  genreController.create
);

genreRouter.put(
  "/:id",
  validate({ body: genreUpdatedSchema }),
  genreController.update
);

genreRouter.delete("/:id", genreController.delete);

export default genreRouter;
