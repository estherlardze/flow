import { z } from "zod";

export const leadFormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  preferred_contact_method: z.enum(["email", "phone", "text"], {
    message: "Please select a preferred contact method",
  }),
  property_type: z.enum(
    ["house", "apartment", "condo", "townhouse", "land", "commercial"],
    {
      message: "Please select a property type",
    }
  ),
  budget: z.number().min(1, "Budget must be greater than 0"),
  location: z.string().min(1, "Location is required"),
  lead_message: z.string().optional(),
  source: z.enum(
    [
      "website",
      "social-media",
      "referral",
      "cold-call",
      "email",
      "event",
      "open-house",
      "sign-call",
      "online-portal",
      "paid-ads",
      "past-client",
      "sphere",
    ],
    { message: "Please select a source" }
  ),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
