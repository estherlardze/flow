"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ExportLeads from "../export-leads/export-leads";
import LeadFormSheet from "../lead-form-sheet/lead-form-sheet";

import TagManagerModal from "../manage-tags-modal/manage-tags-modal";
import CaptureTools from "../capture-tools";
import { useCreateLead } from "../../hooks/use-create-lead";
import { LeadFormData } from "../lead-form-sheet/lead-form-sheet.types";

export default function LeadManagementHeader() {
  const { mutate: createLead, isPending, isSuccess } = useCreateLead();

  const handleAddLead = (data: LeadFormData) => {
    createLead({ ...data, budget: String(data.budget) });
  };

  return (
    <div
      className="flex items-center justify-between py-6 px-6
    bg-white rounded-md mt-5"
    >
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Lead Management
        </h1>
        <p className="text-gray-600 text-sm">
          Manage and organize your leads efficiently
        </p>
      </div>

      <div className="flex items-center gap-3 ml-6">
        <TagManagerModal />
        <ExportLeads isGlobalExport={true} />

        <CaptureTools />

        <LeadFormSheet
          isLoading={isPending}
          isCreatingLeadSuccess={isSuccess}
          mode="create"
          onSave={handleAddLead}
          trigger={
            <Button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4" />
              Add Lead
            </Button>
          }
        />
      </div>
    </div>
  );
}
