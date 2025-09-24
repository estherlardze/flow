import { z } from "zod";

export const sequenceFormSchema = z.object({
  name: z.string().min(1, "Sequence name is required").max(100, "Name must be less than 100 characters"),
  description: z.string().max(500, "Description must be less than 500 characters").optional(),
  type: z.enum(["email", "call", "sms"]).refine((val) => val, {
    message: "Please select a sequence type",
  }),
});

export type SequenceFormValues = z.infer<typeof sequenceFormSchema>;
