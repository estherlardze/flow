export type SelectionType = "all" | "status" | "source" | "tags" | "individual";
export type SequenceType = "email" | "call" | "sms" | "mixed";

export interface SequenceListItem {
  id: string;
  name: string;
  description: string;
  type: SequenceType;
  status: "active" | "draft";
  stepsCount: number;
  createdAt: Date;
  updatedAt: Date;
  leadSelection: {
    selectionType: SelectionType;
    criteria: {
      type: SelectionType;
      status?: string;
      source?: string;
      tags?: string[];
      leadIds?: string[];
    };
    selectedCount?: number;
  };
  steps: {
    id: string;
    actionType: "email" | "call" | "sms";
    delay: {
      value: number;
      unit: "hours" | "days" | "weeks";
    };
  }[];
}

export interface SequenceFormData {
  name: string;
  description: string;
  type: string;
  leadStatus?: string;
}

export interface SequenceBuilderData {
  basicInfo: {
    name: string;
    description: string;
    type: string;
  };
  steps: {
    id: string;
    title: string;
    actionType: "email" | "call" | "sms";
    content: string;
    delay: {
      value: number;
      unit: "hours" | "days" | "weeks";
    };
  }[];
  leadSelection: {
    selectionType: SelectionType;
    criteria: {
      type: SelectionType;
      status?: string;
      source?: string;
      tags?: string[];
      leadIds?: string[];
    };
    selectedCount?: number;
  };
}

export interface SequencePageHeaderProps {
  readonly onCreateSequence: () => void;
}

export interface SequenceSearchFilterProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  filterStatus: string;
  onFilterChange: (value: string) => void;
}

export interface SequenceEmptyStateProps {
  onCreateSequence: () => void;
}

export interface SequenceListWrapperProps {
  sequences: SequenceListItem[];
  onEdit: (sequenceId: string) => void;
  onDuplicate: (sequenceId: string) => void;
  onDelete: (sequenceId: string) => void;
  onToggleStatus: (sequenceId: string) => void;
}

export interface SequenceModalsProps {
  isCreateModalOpen: boolean;
  isBuilderModalOpen: boolean;
  editingSequence: SequenceListItem | null;
  currentFormData: SequenceFormData | null;
  onCreateModalClose: () => void;
  onBuilderModalClose: () => void;
  onCreateModalNext: (formData: SequenceFormData) => void;
  onBuilderSave: (builderData: SequenceBuilderData) => void;
  onUpdateSequence: (builderData: SequenceBuilderData) => void;
}

export interface SequenceCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: (formData: any) => void;
}
