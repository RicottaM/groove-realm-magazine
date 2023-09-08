import type { AllowedSchema } from "express-json-validator-middleware";

export const categoryCreatedSchema: AllowedSchema = {
  type: "object",
  additionalProperties: false,
  required: ["name"],
  properties: {
    name: {
      type: "string",
    },
  },
};

export const categoryUpdatedSchema: AllowedSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    name: {
      type: "string",
    },
  },
};
