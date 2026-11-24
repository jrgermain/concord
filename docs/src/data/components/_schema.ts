import { z } from "astro/zod";

const propertySchema = z.object({
  description: z.string(),
  type: z.enum(["string", "number", "boolean"]),
  valid_values: z.array(z.any()).optional(),
  default_value: z.any().optional(),
  default_is_dynamic: z.boolean().default(false),
});

const anatomyPartSchema = z.union([
  z.object({ code: z.string() }),
  z.object({ description: z.string() }),
  z.object({
    get children() {
      return z.array(anatomyPartSchema);
    },
  }),
]);

export const componentDefinitionSchema = z.object({
  name: z.string(),
  description: z.string(),
  keywords: z.array(z.string()).default([]),
  related_components: z.array(z.string()).default([]),
  properties: z.record(z.string(), propertySchema).default({}),
  anatomy: z.array(anatomyPartSchema),
  minimal_usage: z.string(),
  examples: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
        code: z.string(),
        output_wrapper_class: z.string().optional(),
        requires_js: z.boolean().default(false),
      }),
    )
    .default([]),
  playground: z.string().optional(),
});

export type ComponentDefinition = z.infer<typeof componentDefinitionSchema>;
