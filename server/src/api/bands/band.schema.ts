import type { AllowedSchema } from "express-json-validator-middleware";

export const bandCreatedSchema: AllowedSchema = {
  type: "object",
  additionalProperties: false,
  required: ["name", "formedYear", "description", "country"],
  properties: {
    name: {
      type: "string",
    },
    formedYear: {
      type: "number",
    },
    description: {
      type: "string",
    },
    country: {
      type: "string",
    },
  },
};

export const bandUpdatedSchema: AllowedSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    name: {
      type: "string",
    },
    formedYear: {
      type: "number",
    },
    description: {
      type: "string",
    },
    country: {
      type: "string",
    },
  },
};
