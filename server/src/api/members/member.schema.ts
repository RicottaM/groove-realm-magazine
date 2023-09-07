import type { AllowedSchema } from "express-json-validator-middleware";

export const memberCreatedSchema: AllowedSchema = {
  type: "object",
  additionalProperties: false,
  required: ["name", "instrument", "birth", "description"],
  properties: {
    name: {
      type: "string",
    },
    instrument: {
      type: "string",
    },
    description: {
      type: "string",
    },
    birth: {
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
