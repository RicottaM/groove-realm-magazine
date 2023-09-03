import { createHash } from "../../middleware/createHash";
import { ErrorWithStatus } from "../../error/error-with-status";
import { UserCreated } from "./users/user";
import { User } from "./users/user.model";
import bcrypt from "bcrypt";

export const loginService = {
  getUser: async (email: string) => {
    const user = await User.query().findOne({ email });

    if (!user) {
      throw new ErrorWithStatus("Wrong email.", 401);
    }

    return user;
  },
  createUser: async (userCreated: UserCreated) => {
    const email = userCreated.email;
    const user = await User.query().findOne({ email });

    if (user) {
      throw new ErrorWithStatus("E-mail already in use.", 400);
    }

    userCreated.password = await createHash(userCreated.password);

    const newUser = await User.query().insert(userCreated).returning("*");

    if (!newUser) {
      throw new ErrorWithStatus(`Couldn't add a new user.`, 404);
    }

    return {
      message: "User has been added.",
    };
  },
  getUsers: async () => {
    const users = await User.query();

    if (!users) {
      throw new ErrorWithStatus("Wrong email.", 401);
    }

    return users;
  },
};
