"use client";

import { useAssignTagToLead } from "../../hooks/use-assign-tag-to-lead";
import { useCreateFollowUp } from "../../hooks/use-create-follow-up";
import { useCreateNote } from "../../hooks/use-create-note";
import { useDeleteLead } from "../../hooks/use-delete-lead";

import { useUpdateLead } from "../../hooks/use-update-lead";
import { LeadFormData } from "../lead-form-sheet/lead-form-sheet.types";
import { UseActionsMenuProps } from "./lead-management-table.types";

export function useActionsMenu({ lead }: UseActionsMenuProps) {
  const { mutate: deleteLead, isPending: isDeletingLead } = useDeleteLead();
  const { mutate: updateLead, isPending: isUpdatingLead } = useUpdateLead();
  const { mutate: assignTagToLead, isPending: isAssigningTagToLead } =
    useAssignTagToLead();
  const { mutate: createNote, isPending: isCreatingNote } = useCreateNote();

  const { mutate: createFollowUp, isPending: isCreatingFollowUp } = useCreateFollowUp();

  const handleAddNote = (note: string) => {
    createNote({ leadId: lead.id, content: note });
  };

  const handleScheduleFollowup = (date: Date, message: string) => {
    createFollowUp({ leadId: lead.id, scheduled_at: date, message });
  };

  const handleUpdateTag = (tagId: string) => {
    assignTagToLead({ leadId: lead.id, tagId });
  };

  const handleDeleteLead = () => {
    deleteLead(lead.id);
  };

  const handleEditLead = (updatedData: LeadFormData) => {
    updateLead({
      leadId: lead.id,
      data: { ...updatedData, budget: String(updatedData.budget) },
    });
  };

  return {
    handleAddNote,
    handleScheduleFollowup,
    handleUpdateTag,
    handleDeleteLead,
    handleEditLead,
    isDeletingLead,
    isUpdatingLead,
    isAssigningTagToLead,
    isCreatingNote,
    isCreatingFollowUp
  };
}
