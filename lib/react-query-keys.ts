export const REACT_QUERY_KEYS = {
  LEADS: ["leads"] as const,
  LEAD: (id: string) => ["lead", id] as const,

  TAGS: ["tags"] as const,
  TAG: (id: string) => ["tag", id] as const,

  NOTES: ["notes"] as const,
  NOTE: (id: string) => ["note", id] as const,

  FOLLOW_UPS: ["followUps"] as const,
  FOLLOW_UP: (id: string) => ["followUp", id] as const,
  FOLLOW_UPS_BY_LEAD: (leadId: string) => ["followUps", leadId] as const,
};
