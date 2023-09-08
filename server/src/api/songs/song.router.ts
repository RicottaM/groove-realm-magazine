import { Router } from "express";
import { songController } from "./song.controller";
import { Validator } from "express-json-validator-middleware";
import { songCreatedSchema, songUpdatedSchema } from "./song.schema";

const { validate } = new Validator({});
const songRouter = Router();

songRouter.get("/:id", songController.read);

songRouter.get("/", songController.readAll);

songRouter.post(
  "/",
  validate({ body: songCreatedSchema }),
  songController.create
);

songRouter.put(
  "/:id",
  validate({ body: songUpdatedSchema }),
  songController.update
);

songRouter.delete("/:id", songController.delete);

export default songRouter;
