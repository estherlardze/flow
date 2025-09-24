import { LeadSelectionType } from "./lead-selection.types";

export const getSelectionSummary = (
  selectionType: LeadSelectionType,
  selectedStatus: string,
  selectedSource: string,
  selectedTags: string[]
): string => {
    
  switch (selectionType) {
    case "all":
      return "All leads in the system";
    case "status":
      return selectedStatus
        ? `Leads with status: ${selectedStatus}`
        : "Select a status";
    case "source":
      return selectedSource
        ? `Leads from source: ${selectedSource}`
        : "Select a source";
    case "tags":
      return selectedTags.length > 0
        ? `Leads with tags: ${selectedTags.join(", ")}`
        : "Select tags";
    case "individual":
      return "Select individual leads";
    default:
      return "Select leads";
  }
};

export const formatDisplayText = (text: string): string => {
  return text
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
