import { createHash } from "../../middleware/createHash";
import { ErrorWithStatus } from "../../error/error-with-status";
import { UserCreated } from "../users/user";
import { User } from "../users/user.model";
import EmailValidator from "email-validator";
import passwordSchema from "./passwordSchema";

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

    if (!EmailValidator.validate(email)) {
      throw new ErrorWithStatus("Invalid email.", 400);
    }

    const user = await User.query().findOne({ email });

    if (user) {
      throw new ErrorWithStatus("Email already in use.", 400);
    }

    if (!passwordSchema.validate(userCreated.password)) {
      throw new ErrorWithStatus("Invalid password.", 400);
    }

    userCreated.password = await createHash(userCreated.password);

    const newUser = await User.query().insert(userCreated);

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
