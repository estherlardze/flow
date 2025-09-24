import { Lead } from "./lead-management-table.types";
import { sourceOptions } from "../lead-management-filters/lead-management-filters.utils";

export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export const tagColors = ["default", "info", "success", "warning", "danger"];

export const getTagColor = (index: number) => {
  return tagColors[index % tagColors.length] as
    | "default"
    | "info"
    | "success"
    | "warning"
    | "danger";
};

export const getStatusVariant = (status: Lead["status"]) => {
  switch (status) {
    case "new":
      return "info";
    case "contacted":
      return "warning";
    case "negotiation":
      return "warning";
    case "close_won":
      return "success";
    case "close_lost":
      return "danger";
    default:
      return "default";
  }
};

export const getSourceVariant = (source: Lead["source"]) => {
  switch (source) {
    case "website":
      return "info";
    case "referral":
      return "success";
    case "ad":
      return "danger";
    case "form":
      return "info";
    default:
      return "default";
  }
};

export const getSourceColor = (source: Lead["source"]) => {
  const sourceOption = sourceOptions.find(option => option.value === source);
  return sourceOption?.color || "#6B7280"; // Default gray color
};

export const getColumnWidth = (columnId: string): string => {
  switch (columnId) {
    case "select":
      return "25px";
    case "name":
      return "70px";
    case "email":
      return "85px";
    case "phone":
      return "65px";
    case "source":
      return "50px";
    case "status":
      return "50px";
    case "budget":
      return "55px";
    case "location":
      return "65px";
    case "agent":
      return "55px";
    case "tags":
      return "65px";
    case "createdDate":
      return "50px";
    case "updatedDate":
      return "50px";
    case "actions":
      return "40px";
    default:
      return "auto";
  }
};

export const transformLeads = (apiResponse: any) => {
  if (!apiResponse?.data?.rows) return [];

  return apiResponse.data.rows.map((lead: any, index: number) => ({
    id: lead.$id || String(index + 1),
    name: `${lead.first_name ?? "Unknown"} ${lead.last_name ?? ""}`.trim(),
    email: lead.email ?? "No email",
    phone: lead.phone ?? "No phone",
    source: lead.source ?? "Unknown",
    status: lead.status ?? "New",
    budget: lead.budget ?? "N/A",
    location: lead.location ?? "N/A",
    agent: lead.agent_id ?? "Unassigned",
    tags: lead.tags || [],
    createdDate: lead.$createdAt ? new Date(lead.$createdAt) : new Date(),
    updatedDate: lead.$updatedAt ? new Date(lead.$updatedAt) : new Date(),
  }));
};
