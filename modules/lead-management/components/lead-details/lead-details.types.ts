import {
  Lead,
  Tag,
} from "../lead-management-table/lead-management-table.types";

export interface Note {
  id: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  agent_id: string;
}

export interface BackendNote {
  $id: string;
  content: string;
  $createdAt: string;
  $updatedAt: string;
  agent_id: string;
}

export interface BackendFollowUp {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  lead_id: string;
  message: string;
  scheduled_at: string;
  status: string;
  type: string;
}

export interface LeadDetailsProps {
  lead: Lead | null;
  triggerText?: string;
}

export interface LeadDetailsActivityTimelineProps {
  lead: TransformedLead;
}

export interface LeadDetailsAgentInfoProps {
  lead: TransformedLead;
}

export interface LeadDetailsContactInfoProps {
  lead: TransformedLead;
}

export interface LeadDetailsTagsProps {
  lead?: { tags?: Tag[] };
  showHeader?: boolean;
}

export interface LeadDetailsHeaderProps {
  lead: TransformedLead;
}

export interface LeadDetailsPropertyPreferencesProps {
  lead: TransformedLead;
}

export type RawLeadFromAppwrite = {
  $createdAt: string;
  $updatedAt: string;
  $id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  property_type: string;
  budget?: number | string;
  status?: string;
  agent_id?: string | null;
  last_contacted_at?: string | null;
  follow_up_id?: string | null;
  follow_up_date?: string | null;
  score?: number | null;
  source?: string;
  tag_id?: string | null;
  lead_message?: string;
  location?: string;
  preferred_contact_method?: string;
};

export type TransformedLead = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  property_type: string;
  budget: number;
  status: string;
  source: string;
  score: number;
  agent_id: string;
  tag_id: string;
  last_contacted_at: Date | null;
  follow_up_date: Date | null;
  location: string;
  preferred_contact_method: string;
  lead_message: string;
  notes: Note[];
  created_at: Date;
  updated_at: Date;
  tags?: Tag[];
};

export interface LeadDetailsNotesProps {
  notes: BackendNote[];
  isLoading?: boolean;
  leadId: string;
}

export interface LeadDetailsFollowUpsProps {
  followUps: BackendFollowUp[];
  isLoading?: boolean;
  leadId: string;
}

export interface LeadDetailsFollowUpItemProps {
  followUp: BackendFollowUp;
  isEditing: boolean;
  editedStatus: string;
  setEditedStatus: (status: string) => void;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  isUpdating: boolean;
}

export interface LeadDetailsFollowUpsHeaderProps {
  followUpsCount: number;
}
