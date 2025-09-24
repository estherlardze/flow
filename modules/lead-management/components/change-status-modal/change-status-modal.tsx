"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Activity } from "lucide-react";

import { ChangeStatusModalProps } from "./change-status-modal.types";
import { availableStatuses } from "./change-status-modal.utils";
import { useChangeStatusModal } from "./use-change-status-modal";

export default function ChangeStatusModal({
  onUpdateStatus,
  initialStatus = "",
  title = "Change Status",
  description = "Update the status of this lead.",
  leadName,
  trigger,
  isUpdatingLeadStatus
}: ChangeStatusModalProps) {
  const { selectedStatus, setSelectedStatus, handleSave, handleCancel } =
    useChangeStatusModal({ onUpdateStatus, initialStatus });

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <button
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700
          hover:bg-gray-50 hover:text-gray-700 rounded-md cursor-pointer transition-colors w-full"
          >
            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
              <Activity className="h-4 w-4 text-gray-600" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-left">Change Status</span>
              <span className="text-xs text-gray-500">
                Update lead status
              </span>
            </div>
          </button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-black text-lg font-semibold">
            {leadName ? `Change Status for ${leadName}` : title}
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <label className="block text-sm font-medium text-black mb-2">
            Select Status
          </label>
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500/20">
              <SelectValue placeholder="Choose a status" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {availableStatuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <DialogFooter className="flex sm:justify-end">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!selectedStatus || isUpdatingLeadStatus}
            isLoading={isUpdatingLeadStatus}
            loadingText="Updating..."
            className="bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Update Status
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
