export type SelectionType = "all" | "status" | "source" | "tags" | "individual";

export interface SequenceStep {
  id: string;
  title: string;
  actionType: "email" | "call" | "sms";
  content: string;
  delay: {
    value: number;
    unit: "hours" | "days" | "weeks";
  };
}

export interface SequenceBuilderData {
  basicInfo: {
    name: string;
    description: string;
    type: string;
  };
  steps: SequenceStep[];
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

export interface SequenceBuilderModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly onSave: (data: SequenceBuilderData) => void;
  readonly initialData: {
    name: string;
    description: string;
    type: string;
  };
  readonly existingSteps?: SequenceStep[];
  readonly leadSelection?: {
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

export interface SequenceStepContentProps {
  step: SequenceStep;
  onUpdate: (stepId: string, updates: Partial<SequenceStep>) => void;
  onRemove: (stepId: string) => void;
}

export interface SequenceStepFormProps {
  step: SequenceStep;
  isLastStep: boolean;
  onUpdate: (stepId: string, updates: Partial<SequenceStep>) => void;
  onRemove: (stepId: string) => void;
}

export interface SequenceStepTimelineProps {
  step: SequenceStep;
  isLastStep: boolean;
}