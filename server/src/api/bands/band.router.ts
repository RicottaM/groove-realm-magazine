import { Router } from "express";
import { bandController } from "./band.controller";
import { Validator } from "express-json-validator-middleware";
import { bandCreatedSchema, bandUpdatedSchema } from "./band.schema";
import { checkToken } from "../../middleware/checkToken";

const { validate } = new Validator({});
const bandRouter = Router();

bandRouter.get("/:id", bandController.read);

bandRouter.get("/", bandController.readAll);

bandRouter.post(
  "/",
  validate({ body: bandCreatedSchema }),
  checkToken,
  bandController.create
);

bandRouter.put(
  "/:id",
  validate({ body: bandUpdatedSchema }),
  checkToken,
  bandController.update
);

bandRouter.delete("/:id", checkToken, bandController.delete);

export default bandRouter;
