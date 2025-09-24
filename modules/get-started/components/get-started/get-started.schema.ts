import { z } from "zod";

export const formSchema = z.object({
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  phone: z.string().optional(),
  preferred_contact_method: z.string().min(1, "Please select a contact method"),
  property_type: z.string().min(1, "Please select a property type"),
  budget: z.string().optional(),
  location: z.string().optional(),
  lead_message: z.string().optional(),
});
