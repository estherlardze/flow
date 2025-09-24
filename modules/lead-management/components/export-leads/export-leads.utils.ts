import { Row } from "@tanstack/react-table";
import { Lead } from "../lead-management-table/lead-management-table.types";

export const getSelectedLeadsData = (selectedRows?: Row<Lead>[]) => {
  return selectedRows?.map((row) => row.original as Lead);
};

export const mapApiRowToLead = (row: any): Lead => ({
  id: row.$id,
  name: `${row.first_name || ""} ${row.last_name || ""}`.trim(),
  email: row.email,
  phone: row.phone,
  source: row.source,
  status: row.status,
  budget: parseInt(row.budget) || 0,
  location: row.location,
  agent: row.agent_id ? row.agent_id : "Unassigned",
  tags: row.tag_id ? [row.tag_id] : ["No Tags"],
  createdDate: new Date(row.$createdAt),
  updatedDate: new Date(row.$updatedAt),
  score: row.score,
  last_contacted_at: row.last_contacted_at
    ? new Date(row.last_contacted_at)
    : undefined,
  follow_up_date: row.follow_up_id ? new Date(row.follow_up_id) : undefined,
});

export const formatLeadsForExport = (leads: Lead[]) => {
  return leads.map((lead) => ({
    Name: lead.name,
    Email: lead.email,
    Phone: lead.phone,
    Source: lead.source,
    Status: lead.status,
    Budget: lead.budget,
    Location: lead.location,
    Agent: lead.agent,
    Tags: lead.tags?.join(", ") || "",
    "Created Date": lead.createdDate?.toLocaleDateString(),
    "Updated Date": lead.updatedDate?.toLocaleDateString(),
    Score: lead.score || "",
  }));
};
