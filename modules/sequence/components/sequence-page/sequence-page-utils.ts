import { SequenceListItem } from "./sequence-page-types";

export const mockSequences: SequenceListItem[] = [
  {
    id: "1",
    name: "Welcome Email Series",
    description: "Automated welcome emails for new leads",
    type: "email",
    status: "active",
    stepsCount: 3,
    createdAt: new Date("2025-09-01"),
    updatedAt: new Date("2025-09-10"),
    leadSelection: {
      selectionType: "status",
      criteria: {
        type: "status",
        status: "new",
      },
      selectedCount: 25,
    },
    steps: [
      { id: "1", actionType: "email", delay: { value: 0, unit: "days" } },
      { id: "2", actionType: "email", delay: { value: 2, unit: "days" } },
      { id: "3", actionType: "email", delay: { value: 7, unit: "days" } },
    ],
  },
  {
    id: "2",
    name: "Lead Nurturing Campaign",
    description: "Mixed follow-up sequence for qualified leads",
    type: "mixed",
    status: "draft",
    stepsCount: 5,
    createdAt: new Date("2025-09-05"),
    updatedAt: new Date("2025-09-08"),
    leadSelection: {
      selectionType: "tags",
      criteria: {
        type: "tags",
        tags: ["warm_lead", "qualified"],
      },
      selectedCount: 15,
    },
    steps: [
      { id: "1", actionType: "email", delay: { value: 0, unit: "days" } },
      { id: "2", actionType: "call", delay: { value: 3, unit: "days" } },
      { id: "3", actionType: "email", delay: { value: 5, unit: "days" } },
      { id: "4", actionType: "sms", delay: { value: 10, unit: "days" } },
      { id: "5", actionType: "call", delay: { value: 14, unit: "days" } },
    ],
  },
  {
    id: "3",
    name: "SMS Reminder Sequence",
    description: "Quick SMS reminders for urgent follow-ups",
    type: "sms",
    status: "active",
    stepsCount: 2,
    createdAt: new Date("2025-09-03"),
    updatedAt: new Date("2025-09-09"),
    leadSelection: {
      selectionType: "all",
      criteria: {
        type: "all",
      },
      selectedCount: 150,
    },
    steps: [
      { id: "1", actionType: "sms", delay: { value: 1, unit: "days" } },
      { id: "2", actionType: "sms", delay: { value: 3, unit: "days" } },
    ],
  },
];

export const FILTER_OPTIONS = [
  { value: "all", label: "All Sequences" },
  { value: "active", label: "Active" },
  { value: "draft", label: "Draft" },
] as const;

export const generateSequenceId = (): string => {
  return Date.now().toString();
};

export const createNewSequence = (
  builderData: any,
  currentFormData: any
): SequenceListItem => {
  return {
    id: generateSequenceId(),
    name: builderData.basicInfo.name,
    description: builderData.basicInfo.description,
    type: builderData.basicInfo.type,
    status: "draft",
    stepsCount: builderData.steps.length,
    createdAt: new Date(),
    updatedAt: new Date(),
    leadSelection: builderData.leadSelection,
    steps: builderData.steps.map((step: any) => ({
      id: step.id,
      actionType: step.actionType,
      delay: step.delay,
    })),
  };
};

export const updateExistingSequence = (
  editingSequence: SequenceListItem,
  builderData: any
): SequenceListItem => {
  return {
    ...editingSequence,
    name: builderData.basicInfo.name,
    description: builderData.basicInfo.description,
    type: builderData.basicInfo.type,
    stepsCount: builderData.steps.length,
    updatedAt: new Date(),
    leadSelection: builderData.leadSelection,
    steps: builderData.steps.map((step: any) => ({
      id: step.id,
      actionType: step.actionType,
      delay: step.delay,
    })),
  };
};

export const duplicateSequence = (
  sequence: SequenceListItem
): SequenceListItem => {
  return {
    ...sequence,
    id: generateSequenceId(),
    name: `${sequence.name} (Copy)`,
    status: "draft",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

export const toggleSequenceStatus = (
  sequence: SequenceListItem
): SequenceListItem => {
  return {
    ...sequence,
    status: sequence.status === "active" ? "draft" : "active",
    updatedAt: new Date(),
  };
};

export const filterSequences = (
  sequences: SequenceListItem[],
  searchQuery: string,
  filterStatus: string
): SequenceListItem[] => {
  return sequences.filter((sequence) => {
    const matchesSearch =
      sequence.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sequence.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || sequence.status === filterStatus;
    return matchesSearch && matchesFilter;
  });
};
