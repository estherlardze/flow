import { SequenceListItem } from "../sequence-list/sequence-list.types";

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
      criteria: { type: "status", status: "new" },
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
      criteria: { type: "tags", tags: ["warm_lead", "qualified"] },
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
      criteria: { type: "all" },
      selectedCount: 150,
    },
    steps: [
      { id: "1", actionType: "sms", delay: { value: 1, unit: "days" } },
      { id: "2", actionType: "sms", delay: { value: 3, unit: "days" } },
    ],
  },
];
