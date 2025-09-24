export interface Tag {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $databaseId: string;
  $tableId: string;
  $permissions: string[];
  $sequence: number;
  text: string;
}

export interface LeadTag {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $databaseId: string;
  $tableId: string;
  $permissions: string[];
  $sequence: number;
  lead_id: string;
  tag_id: string;
}

export interface Lead {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $databaseId: string;
  $tableId: string;
  $permissions: string[];
  $sequence: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  property_type: string;
  budget: string;
  location: string;
  lead_message: string;
  source: string;
  score: number;
  preferred_contact_method: string;
  status: string;
  last_contacted_at: string;
  agentId: string;
  follow_up_id: string;
  created_at: string;
  updated_at: string;
}

export interface FollowUp {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $databaseId: string;
  $tableId: string;
  $permissions: string[];
  $sequence: number;
  lead_id: string;
  message: string;
  scheduled_at: string;
  status: string;
  type: string;
}