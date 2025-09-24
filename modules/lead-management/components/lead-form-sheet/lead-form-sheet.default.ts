import { LeadFormValues } from "./lead-form-sheet.schema";

export const DEFAULT_VALUES: LeadFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  preferred_contact_method: "email",
  property_type: "house",
  budget: 0,
  location: "",
  lead_message: "",
  source: "website",
};
