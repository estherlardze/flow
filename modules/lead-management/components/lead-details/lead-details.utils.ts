import { Lead } from "../lead-management-table/lead-management-table.types";
import { RawLeadFromAppwrite, TransformedLead } from "./lead-details.types";
import { format } from "date-fns";

export const getInitials = (name: string) => {
  return name
    ?.split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export const getSourceColor = (source: Lead["source"]) => {
  return "bg-blue-50 text-blue-700 border-blue-200";
};

export const transformLeadDetails = (
  lead: RawLeadFromAppwrite
): TransformedLead => {
  return {
    id: lead.$id,
    first_name: lead.first_name,
    last_name: lead.last_name,
    email: lead.email,
    phone: lead.phone,
    property_type: lead.property_type,
    budget:
      typeof lead.budget === "string" ? Number(lead.budget) : lead.budget || 0,
    status: lead.status || "new",
    source: lead.source || "unknown",
    score: lead.score ?? 0,
    agent_id: lead.agent_id ?? "",
    tag_id: lead.tag_id ?? "",
    last_contacted_at: lead.last_contacted_at
      ? new Date(lead.last_contacted_at)
      : null,
    follow_up_date: lead.follow_up_date ? new Date(lead.follow_up_date) : null,
    location: lead.location || "",
    preferred_contact_method: lead.preferred_contact_method || "",
    lead_message: lead.lead_message || "",
    notes: [],
    created_at: new Date(lead.$createdAt),
    updated_at: new Date(lead.$updatedAt),
  };
};

export const LEAD_STATUSES = [
  "new",
  "contacted",
  "qualified",
  "proposal",
  "negotiation",
  "under_contract",
  "close_won",
  "close_lost",
] as const;

export const LEAD_SOURCES = [
  "website",
  "referral",
  "ad",
  "social",
  "other",
  "form",
] as const;

export const formatDate = (
  date: Date | null | undefined,
  fallback: string = "Date unavailable"
) => {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return fallback;
  }
  return format(date, "MMMM dd, yyyy 'at' h:mm a");
};
