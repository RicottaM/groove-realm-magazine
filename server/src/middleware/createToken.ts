import jwt from "jsonwebtoken";

export const createToken = async (id: number) => {
  const token = jwt.sign({ userId: id }, String(process.env.SECRET), {
    expiresIn: "3h",
  });

  return token;
};
