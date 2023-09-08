import type { AllowedSchema } from "express-json-validator-middleware";

export const songCreatedSchema: AllowedSchema = {
  type: "object",
  additionalProperties: false,
  required: ["title", "duration", "description"],
  properties: {
    title: {
      type: "string",
    },
    duration: {
      type: "number",
    },
    description: {
      type: "string",
    },
  },
};

export const songUpdatedSchema: AllowedSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    title: {
      type: "string",
    },
    duration: {
      type: "number",
    },
    description: {
      type: "string",
    },
  },
};
