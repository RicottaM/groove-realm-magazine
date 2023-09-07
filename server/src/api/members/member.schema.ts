import type { AllowedSchema } from "express-json-validator-middleware";

export const memberCreatedSchema: AllowedSchema = {
  type: "object",
  additionalProperties: false,
  required: ["name"],
  properties: {
    name: {
      type: "string",
    },
  },
};

export const memberUpdatedSchema: AllowedSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    name: {
      type: "string",
    },
  },
};
