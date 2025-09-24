"use client";

import { useCallback } from "react";
import { UseSelectionToolbarProps } from "./selection-toolbar.types";
import { useDeleteMultipleLeads } from "../../hooks/use-delete-multiple-leads";
import { useUpdateLeadStatus } from "../../hooks/use-update-lead-status";
import { useAssignTagToMultipleLeads } from "../../hooks/use-assign-tag-to-multiple-lead";

export const useSelectionToolbar = ({
  selectedCount,
  selectedLeadIds = [],
}: UseSelectionToolbarProps) => {
  const { mutate: deleteLeads, isPending: isDeletingMultipleLeads } =
    useDeleteMultipleLeads();
  const { mutate: updateLeadStatus, isPending: isUpdatingLeadStatus } =
    useUpdateLeadStatus();
  const { mutate: assignTagToMultiple, isPending: isAssigningTags } =
    useAssignTagToMultipleLeads();

  const noop = useCallback(() => alert("action button clicked"), []);

  const handleDeleteSelected = useCallback(() => {
    deleteLeads(selectedLeadIds);
  }, [selectedCount]);

  const handleTagSelected = useCallback(
    (tagId: string) => {
      if (selectedLeadIds.length > 0) {
        assignTagToMultiple({ leadIds: selectedLeadIds, tagId });
      }
    },
    [selectedLeadIds]
  );

  const handleScheduleFollowup = useCallback(
    (date: Date, message: string) => {
      console.log(
        `Scheduling followup for ${selectedCount} selected lead${
          selectedCount > 1 ? "s" : ""
        } on ${date.toISOString()}:`,
        message
      );
    },
    [selectedCount]
  );

  const handleStatusUpdate = useCallback(
    (status: string) => {
      if (selectedLeadIds.length > 0) {
        updateLeadStatus({ leadIds: selectedLeadIds, status });
      }
    },
    [selectedCount]
  );

  return {
    noop,
    handleDeleteSelected,
    handleTagSelected,
    handleScheduleFollowup,
    handleStatusUpdate,
    isDeletingMultipleLeads,
    isUpdatingLeadStatus,
    isAssigningTags,
  };
};
