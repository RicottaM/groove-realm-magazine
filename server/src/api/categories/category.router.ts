import { Router } from "express";
import { categoryController } from "./category.controller";
import { Validator } from "express-json-validator-middleware";
import {
  categoryCreatedSchema,
  categoryUpdatedSchema,
} from "./category.schema";
import { checkToken } from "../../middleware/checkToken";

const { validate } = new Validator({});
const categoryRouter = Router();

categoryRouter.get("/:id", categoryController.read);

categoryRouter.get("/", categoryController.readAll);

categoryRouter.post(
  "/",
  validate({ body: categoryCreatedSchema }),
  checkToken,
  categoryController.create
);

categoryRouter.put(
  "/:id",
  validate({ body: categoryUpdatedSchema }),
  checkToken,
  categoryController.update
);

categoryRouter.delete("/:id", checkToken, categoryController.delete);

export default categoryRouter;
