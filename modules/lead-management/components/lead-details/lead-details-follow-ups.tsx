"use client";

import React from "react";
import {
  LeadDetailsFollowUpsProps,
  BackendFollowUp,
} from "./lead-details.types";
import { useLeadDetailsFollowUp } from "./use-lead-details-follow-up";
import NoFollowUp from "./lead-details-no-follow-up";

import LeadDetailsFollowUpsHeader from "./lead-details-follow-ups-header";
import LeadDetailsFollowUpItem from "./lead-details-follow-up-item";

export default function LeadDetailsFollowUps({
  followUps,
  leadId,
}: LeadDetailsFollowUpsProps) {
  const {
    editingFollowUpId,
    editedStatus,
    setEditedStatus,
    updateFollowUpMutation,
    handleEditFollowUp,
    handleSaveFollowUp,
    handleCancelEdit,
  } = useLeadDetailsFollowUp(leadId);

  return (
    <div>
      <LeadDetailsFollowUpsHeader followUpsCount={followUps.length} />

      <div className="space-y-3">
        {followUps.length === 0 ? (
          <NoFollowUp />
        ) : (
          followUps.map((followUp: BackendFollowUp) => (
            <LeadDetailsFollowUpItem
              key={followUp.$id}
              followUp={followUp}
              isEditing={editingFollowUpId === followUp.$id}
              editedStatus={editedStatus}
              setEditedStatus={setEditedStatus}
              onEdit={() => handleEditFollowUp(followUp)}
              onSave={handleSaveFollowUp}
              onCancel={handleCancelEdit}
              isUpdating={updateFollowUpMutation.isPending}
            />
          ))
        )}
      </div>
    </div>
  );
}
