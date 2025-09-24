import { UseFormReturn } from "react-hook-form";
import { LeadFormValues } from "./lead-form-sheet.schema";

export interface Tag {
  $id: string;
  text: string;
  $createdAt: string;
  $updatedAt: string;
  $databaseId: string;
  $tableId: string;
  $permissions: string[];
  $sequence: number;
}

export interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  property_type: string;
  budget: number;
  location: string;
  lead_message: string;
  source: string;
  score: number;
  preferred_contact_method: string;
  status: string;
  last_contacted_at: Date;
  agentId: string;
  tagId: string;
  follow_up_id: string;
  created_at: Date;
  updated_at: Date;
  tags?: Tag[];
}

export interface LeadFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  preferred_contact_method: string;
  property_type: string;
  budget: number | string;
  location: string;
  lead_message?: string;
  source: string;
}

export interface LeadFormSheetProps {
  mode: "create" | "edit";
  lead?: Lead;
  onSave: (data: LeadFormData) => void;
  trigger?: React.ReactNode;
  isLoading?: boolean;
  isCreatingLeadSuccess?: boolean;
  isUpdatingLead?: boolean;
}

export type ContactMethod = "email" | "phone" | "text";

export type PropertyType =
  | "house"
  | "apartment"
  | "condo"
  | "townhouse"
  | "land"
  | "commercial";

export interface FormSectionProps {
  form: UseFormReturn<LeadFormValues>;
}

export type ContactInfoSectionProps = FormSectionProps;
export type LeadDetailsSectionProps = FormSectionProps;
export type PropertyDetailsSectionProps = FormSectionProps;

export interface UseLeadFormSheetProps {
  mode: "create" | "edit";
  lead?: Lead;
  onSave: (data: LeadFormValues) => void;
}
