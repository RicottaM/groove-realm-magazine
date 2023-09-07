import { Router } from "express";
import { memberController } from "./member.controller";
import { Validator } from "express-json-validator-middleware";
import { memberCreatedSchema, memberUpdatedSchema } from "./member.schema";

const { validate } = new Validator({});
const memberRouter = Router();

memberRouter.get("/:id", memberController.read);

memberRouter.get("/", memberController.readAll);

memberRouter.post(
  "/",
  validate({ body: memberCreatedSchema }),
  memberController.create
);

memberRouter.put(
  "/:id",
  validate({ body: memberUpdatedSchema }),
  memberController.update
);

memberRouter.delete("/:id", memberController.delete);

export default memberRouter;
