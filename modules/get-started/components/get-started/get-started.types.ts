import { z } from "zod";
import { formSchema } from "./get-started.schema";
import { UseFormReturn } from "react-hook-form";

export type LeadFormData = z.infer<typeof formSchema>;

export interface ContactInfoProps {
  form: UseFormReturn<LeadFormData>;
}
