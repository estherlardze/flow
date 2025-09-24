import { ContactMethod, PropertyType } from "./lead-form-sheet.types";
import { LeadFormValues } from "./lead-form-sheet.schema";
import { DEFAULT_VALUES } from "./lead-form-sheet.default";

export const contactMethodOptions: { value: ContactMethod; label: string }[] = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "text", label: "Text Message" },
];

export const propertyTypeOptions: { value: PropertyType; label: string }[] = [
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "condo", label: "Condo" },
  { value: "townhouse", label: "Townhouse" },
  { value: "land", label: "Land" },
  { value: "commercial", label: "Commercial" },
];

export function getResetValues(
  mode: "create" | "edit",
  lead?: Partial<LeadFormValues>
): LeadFormValues {
  if (mode === "edit" && lead) {
    return {
      ...DEFAULT_VALUES,
      ...lead,
      preferred_contact_method:
        lead.preferred_contact_method as LeadFormValues["preferred_contact_method"],
      property_type: lead.property_type as LeadFormValues["property_type"],
    };
  }
  return DEFAULT_VALUES;
}

