import { Router } from "express";
import { Validator } from "express-json-validator-middleware";
import { authController } from "./auth.controller";
import { userCreatedSchema } from "../users/user.schema";

const { validate } = new Validator({});
const authRouter = Router();

authRouter.post("/login", authController.login);

authRouter.post(
  "/new-user",
  validate({ body: userCreatedSchema }),
  authController.addUser
);

authRouter.get("/users", authController.getUsers);

export default authRouter;
