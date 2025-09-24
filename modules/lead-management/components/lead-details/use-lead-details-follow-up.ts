"use client";

import { useState } from "react";
import { useUpdateFollowUp } from "../../hooks/use-update-follow-up";
import { BackendFollowUp } from "./lead-details.types";

export const useLeadDetailsFollowUp = (leadId: string) => {
  const [editingFollowUpId, setEditingFollowUpId] = useState<string | null>(
    null
  );
  const [editedStatus, setEditedStatus] = useState("");

  const updateFollowUpMutation = useUpdateFollowUp(leadId);

  const handleEditFollowUp = (followUp: BackendFollowUp) => {
    setEditingFollowUpId(followUp.$id);
    setEditedStatus(followUp.status);
  };

  const handleSaveFollowUp = async () => {
    if (!editingFollowUpId) return;

    await updateFollowUpMutation.mutateAsync({
      followUpId: editingFollowUpId,
      data: {
        status: editedStatus,
      },
    });

    setEditingFollowUpId(null);
  };

  const handleCancelEdit = () => {
    setEditingFollowUpId(null);
  };

  return {
    editingFollowUpId,
    editedStatus,
    setEditedStatus,
    updateFollowUpMutation,
    handleEditFollowUp,
    handleSaveFollowUp,
    handleCancelEdit,
  };
};
