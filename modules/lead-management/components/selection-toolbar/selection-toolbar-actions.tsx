"use client";

import { SelectionToolbarActionsProps } from "./selection-toolbar.types";
import DeleteLeadModal from "../delete-modal/delete-modal";
import TagLeadModal from "../tag-lead-modal/tag-lead-modal";
import FollowupModal from "../followup-modal/followup-modal";

import ChangeStatusModal from "../change-status-modal/change-status-modal";
import {
  DeleteTrigger,
  TagTrigger,
  FollowupTrigger,
  StatusTrigger,
  ExportTrigger,
} from "./selection-toolbar.partials";
import ExportLeads from "../export-leads/export-leads";
import { useSelectionToolbar } from "./use-selection-toolbar";

export default function SelectionToolbarActions({
  selectedCount = 0,
  selectedLeadIds = [],
  selectedRows = [],
}: SelectionToolbarActionsProps) {
  const {
    handleDeleteSelected,
    handleTagSelected,
    handleScheduleFollowup,
    handleStatusUpdate,
    isDeletingMultipleLeads,
    isUpdatingLeadStatus,
    isAssigningTags,
  } = useSelectionToolbar({ selectedCount, selectedLeadIds });

  return (
    <div className="flex items-center gap-1">
      <DeleteLeadModal
        isDeletingMultipleLeads={isDeletingMultipleLeads}
        onDelete={handleDeleteSelected}
        leadName={`${selectedCount} selected lead${
          selectedCount > 1 ? "s" : ""
        }`}
        trigger={<DeleteTrigger selectedCount={selectedCount} />}
      />

      <div className="w-px h-6 bg-gray-200 mx-1" />

      <TagLeadModal
        isAssigningTags={isAssigningTags}
        onUpdateTag={handleTagSelected}
        leadName={`${selectedCount} selected lead${
          selectedCount > 1 ? "s" : ""
        }`}
        trigger={<TagTrigger selectedCount={selectedCount} />}
      />

      <div className="w-px h-6 bg-gray-200 mx-1" />

      <ChangeStatusModal
        isUpdatingLeadStatus={isUpdatingLeadStatus}
        onUpdateStatus={handleStatusUpdate}
        leadName={`${selectedCount} selected lead${
          selectedCount > 1 ? "s" : ""
        }`}
        trigger={<StatusTrigger selectedCount={selectedCount} />}
      />

      <FollowupModal
        onScheduleFollowup={handleScheduleFollowup}
        leadName={`${selectedCount} selected lead${
          selectedCount > 1 ? "s" : ""
        }`}
        trigger={<FollowupTrigger selectedCount={selectedCount} />}
      />

      <ExportLeads
        isGlobalExport={false}
        selectedRows={selectedRows}
        trigger={<ExportTrigger selectedCount={selectedCount} />}
      />
    </div>
  );
}
