export interface SequenceListItem {
  id: string;
  name: string;
  description: string;
  type: "email" | "call" | "sms" | "mixed";
  status: "active" | "draft";
  stepsCount: number;
  createdAt: Date;
  updatedAt: Date;
  leadSelection: {
    selectionType: "all" | "status" | "source" | "tags" | "individual";
    criteria: {
      type: "all" | "status" | "source" | "tags" | "individual";
      status?: string;
      source?: string;
      tags?: string[];
      leadIds?: string[];
    };
    selectedCount?: number;
  };
  steps: Array<{
    id: string;
    actionType: "email" | "call" | "sms";
    delay: {
      value: number;
      unit: "hours" | "days" | "weeks";
    };
  }>;
}

export interface SequenceListProps {
  sequences: SequenceListItem[];
  onEdit: (sequenceId: string) => void;
  onDuplicate: (sequenceId: string) => void;
  onDelete: (sequenceId: string) => void;
  onToggleStatus: (sequenceId: string) => void;
}

export interface SequenceCardActionsProps {
  sequenceId: string;
  onEdit: (sequenceId: string) => void;
  onDuplicate: (sequenceId: string) => void;
}

export interface SequenceCardDropdownProps {
  sequenceId: string;
  status: string;
  onEdit: (sequenceId: string) => void;
  onDuplicate: (sequenceId: string) => void;
  onDelete: (sequenceId: string) => void;
  onToggleStatus: (sequenceId: string) => void;
}

export interface SequenceCardProps {
  sequence: SequenceListItem;
  index: number;
  onEdit: (sequenceId: string) => void;
  onDuplicate: (sequenceId: string) => void;
  onDelete: (sequenceId: string) => void;
  onToggleStatus: (sequenceId: string) => void;
}
