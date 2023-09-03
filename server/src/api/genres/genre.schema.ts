import type { AllowedSchema } from "express-json-validator-middleware";

export const genreCreatedSchema: AllowedSchema = {
  type: "object",
  additionalProperties: false,
  required: ["name"],
  properties: {
    name: {
      type: "string",
    },
  },
};

export const genreUpdatedSchema: AllowedSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    name: {
      type: "string",
    },
  },
};
