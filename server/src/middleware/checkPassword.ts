import { createHash } from "./createHash";
import { ErrorWithStatus } from "../error/error-with-status";
import bcrypt from "bcrypt";

export const checkPassword = async (
  password: string,
  hashedPassword: string
) => {
  const isCorrect = await bcrypt.compare(password, hashedPassword);

  if (!isCorrect) {
    throw new ErrorWithStatus("Wrong password.", 401);
  }

  return isCorrect;
};
