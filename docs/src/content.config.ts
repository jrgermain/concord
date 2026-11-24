import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import * as path from "node:path";
import { componentDefinitionSchema } from "./data/components/_schema";

const components = defineCollection({
  loader: glob({
    pattern: "*.yaml",
    base: path.resolve(import.meta.dirname, "data/components"),
    generateId: ({ entry }) => entry.replace(/\.yaml$/, ""),
  }),

  schema: componentDefinitionSchema,
});

export const collections = { components };
