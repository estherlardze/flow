export const statusOptions = [
  { value: "all", label: "All", order: 0 },
  { value: "new", label: "New", order: 1 },
  { value: "contacted", label: "Contacted", order: 2 },
  { value: "qualified", label: "Qualified", order: 3 },
  { value: "proposal", label: "Proposal", order: 4 },
  { value: "negotiation", label: "Negotiation", order: 5 },
  { value: "under_contract", label: "Under Contract", order: 6 },
  { value: "close_won", label: "Close Won", order: 7 },
  { value: "close_lost", label: "Close Lost", order: 8 },
];

export const sourceOptions = [
  { value: "all", label: "All Sources", color: "#6B7280" },
  { value: "website", label: "Website (Forms)", color: "#3B82F6" },
  { value: "social-media", label: "Social Media", color: "#8B5CF6" },
  { value: "referral", label: "Referral", color: "#10B981" },
  { value: "cold-call", label: "Cold Call", color: "#F59E0B" },
  { value: "email", label: "Email Campaign", color: "#06B6D4" },
  { value: "event", label: "Event / Networking", color: "#EC4899" },
  { value: "open-house", label: "Open House", color: "#84CC16" },
  { value: "sign-call", label: "Sign Call", color: "#F97316" },
  {
    value: "online-portal",
    label: "Online Portal (Zillow, Realtor.com, etc.)",
    color: "#6366F1",
  },
  { value: "paid-ads", label: "Paid Ads (Google/Facebook)", color: "#EF4444" },
  { value: "past-client", label: "Past Client", color: "#14B8A6" },
  {
    value: "sphere",
    label: "Sphere of Influence (Friends/Family)",
    color: "#A855F7",
  },
];

export const budgetOptions = [
  { value: "all", label: "All Budgets" },
  { value: "under-50k", label: "Under $50K" },
  { value: "50k-100k", label: "$50K - $100K" },
  { value: "100k-250k", label: "$100K - $250K" },
  { value: "250k-500k", label: "$250K - $500K" },
  { value: "500k-1m", label: "$500K - $1M" },
  { value: "over-1m", label: "Over $1M" },
];
