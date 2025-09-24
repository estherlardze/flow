export type LeadSelectionType =
  | "all"
  | "status"
  | "source"
  | "tags"
  | "individual";

export interface LeadCriteria {
  type: LeadSelectionType;
  status?: string;
  source?: string;
  tags?: string[];
  leadIds?: string[];
}

export interface LeadSelectionData {
  selectionType: LeadSelectionType;
  criteria: LeadCriteria;
  selectedCount?: number;
}

export interface LeadSelectionProps {
  onSelectionChange: (selection: LeadSelectionData) => void;
  initialSelection?: LeadSelectionData;
  availableStatuses?: string[];
  availableSources?: string[];
  availableTags?: string[];
}

export interface SelectionTypeSelectorProps {
  selectionType: LeadSelectionType;
  onSelectionTypeChange: (type: LeadSelectionType) => void;
}

export interface StatusSelectorProps {
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  availableStatuses: string[];
}

export interface SourceSelectorProps {
  selectedSource: string;
  onSourceChange: (source: string) => void;
  availableSources: string[];
}

export interface TagsSelectorProps {
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  availableTags: string[];
}

export interface SelectionSummaryProps {
  selectionType: LeadSelectionType;
  selectedStatus: string;
  selectedSource: string;
  selectedTags: string[];
}
