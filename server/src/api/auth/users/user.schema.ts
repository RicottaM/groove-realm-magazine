import type { AllowedSchema } from "express-json-validator-middleware";

export const userCreatedSchema: AllowedSchema = {
  type: "object",
  additionalProperties: false,
  required: ["nick", "email", "password", "description", "permission"],

  properties: {
    nick: {
      type: "string",
    },
    email: {
      type: "string",
    },
    password: {
      type: "string",
    },
    description: {
      type: "string",
    },
    permission: {
      type: "integer",
    },
  },
};
