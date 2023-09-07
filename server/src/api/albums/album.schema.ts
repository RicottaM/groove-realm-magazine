import type { AllowedSchema } from "express-json-validator-middleware";

export const albumCreatedSchema: AllowedSchema = {
  type: "object",
  additionalProperties: false,
  required: ["bandId", "title", "releaseYear", "description"],
  properties: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    release_year: {
      type: "integer",
    },
    bandId: {
      type: "integer",
    },
  },
};

export const albumUpdatedSchema: AllowedSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    release_year: {
      type: "integer",
    },
    bandId: {
      type: "integer",
    },
  },
};
