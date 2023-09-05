import { Request, Response, NextFunction } from "express";
import { loginService } from "./auth.service";
import { createToken } from "../../middleware/createToken";
import { checkPassword } from "../../middleware/checkPassword";

export const authController = {
  login: async (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
      const user = await loginService.getUser(email);

      await checkPassword(password, user.password);

      const token = await createToken(user.id);
      const cookieAge = 3 * 60 * 60 * 1000;

      res.cookie("token", token, { maxAge: cookieAge, httpOnly: true });

      res.json({ message: "Login successful.", user });
    } catch (error) {
      next(error);
    }
  },
  addUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const message = await loginService.createUser(req.body);

      res.json(message);
    } catch (error) {
      next(error);
    }
  },
  getUsers: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await loginService.getUsers();

      res.json(users);
    } catch (error) {
      next(error);
    }
  },
};
