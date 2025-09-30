import { z } from "zod";

// input schema (what comes from form / raw values)
export const CreateTransactionSchema = z.object({
  description: z.string().min(1),
  amount: z.number().nonnegative(),
  date: z.date(), // keep this strict
  category: z.string().min(1),
  type: z.enum(["income", "expense"]),
});

// type for form
export type CreateTransactionSchemaType = z.infer<
  typeof CreateTransactionSchema
>;
