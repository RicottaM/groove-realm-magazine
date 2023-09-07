import { Router } from "express";
import { albumController } from "./album.controller";
import { Validator } from "express-json-validator-middleware";
import { albumCreatedSchema, albumUpdatedSchema } from "./album.schema";
import { checkToken } from "../../middleware/checkToken";

const { validate } = new Validator({});
const albumRouter = Router();

albumRouter.get("/:id", albumController.read);

albumRouter.get("/", albumController.readAll);

albumRouter.post(
  "/",
  validate({ body: albumCreatedSchema }),
  checkToken,
  albumController.create
);

albumRouter.put(
  "/:id",
  validate({ body: albumUpdatedSchema }),
  checkToken,
  albumController.update
);

albumRouter.delete("/:id", checkToken, albumController.delete);

export default albumRouter;
