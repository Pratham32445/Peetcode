import { z } from "zod";

export const Problem = z.object({
  title: z.string().min(4, "Min 4 length is required"),
  desc: z.string().min(10, "Min 10 length is required"),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]),
  example: z
    .string()
    .array()
    .min(1, "Atleast one Example is required")
    .nonempty("Example cannot be empty"),
  constraints: z
    .string()
    .array()
    .min(1, "Atleast one constraints is required")
    .nonempty("Example constraints be empty"),
  topics: z
    .string()
    .array()
    .min(1, "Atleast one topics is required")
    .nonempty("topics cannot be empty"),
});

