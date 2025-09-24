import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Edit } from "lucide-react";
import { ActionsMenuProps } from "./lead-management-table.types";

import { useActionsMenu } from "./use-actions-menu";
import LeadDetails from "../lead-details/lead-details";
import NotesModal from "../notes-modal/notes-modal";
import FollowupModal from "../followup-modal/followup-modal";

import TagLeadModal from "../tag-lead-modal/tag-lead-modal";
import DeleteLeadModal from "../delete-modal/delete-modal";
import LeadFormSheet from "../lead-form-sheet/lead-form-sheet";

export default function ActionsMenu({ lead }: ActionsMenuProps) {
  const {
    handleAddNote,
    handleScheduleFollowup,
    handleUpdateTag,
    handleDeleteLead,
    handleEditLead,
    isDeletingLead,
    isUpdatingLead,
    isAssigningTagToLead,
    isCreatingNote,
    isCreatingFollowUp,
  } = useActionsMenu({ lead });

  const formSheetLead = {
    id: lead.id,
    first_name: lead.name.split(" ")[0] || "",
    last_name: lead.name.split(" ").slice(1).join(" ") || "",
    email: lead.email,
    phone: lead.phone,
    property_type: "house",
    budget: lead.budget,
    location: lead.location,
    lead_message: "",
    source: lead.source,
    score: 0,
    preferred_contact_method: "email",
    status: lead.status,
    last_contacted_at: new Date(),
    agentId: lead.agent,
    tagId: lead.tags?.[0]?.$id || "",
    follow_up_id: "",
    created_at: lead.createdDate,
    updated_at: lead.updatedDate,
    tags: lead.tags,
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 w-8 p-0 hover:bg-gray-100 transition-colors"
        >
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4 text-gray-600" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 bg-white border border-gray-200 shadow-lg rounded-lg p-1"
      >
        <LeadDetails lead={lead} triggerText="View Details" />

        <LeadFormSheet
          mode="edit"
          isUpdatingLead={isUpdatingLead}
          lead={formSheetLead}
          onSave={handleEditLead}
          trigger={
            <div
              className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50
            hover:text-gray-900 rounded-md cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                <Edit className="h-4 w-4 text-gray-600" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Edit Lead</span>
                <span className="text-xs text-gray-500">
                  Update information
                </span>
              </div>
            </div>
          }
        />

        <DropdownMenuSeparator className="my-1" />

        <NotesModal
          onAddNote={handleAddNote}
          leadName={lead.name}
          isCreatingNote={isCreatingNote}
        />

        <FollowupModal
          onScheduleFollowup={handleScheduleFollowup}
          leadName={lead.name}
          isCreatingFollowUp={isCreatingFollowUp}
        />

        <TagLeadModal
          onUpdateTag={handleUpdateTag}
          initialTag={lead.tags?.[0]?.text || ""}
          leadName={lead.name}
          isAssigningTag={isAssigningTagToLead}
        />

        <DropdownMenuSeparator className="my-1" />

        <DeleteLeadModal
          onDelete={handleDeleteLead}
          leadName={lead.name}
          isDeleting={isDeletingLead}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
