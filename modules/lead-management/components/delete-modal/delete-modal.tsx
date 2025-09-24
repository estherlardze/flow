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
import { Trash2 } from "lucide-react";
import { DeleteLeadModalProps } from "./delete-modal.types";

export default function DeleteLeadModal({
  onDelete,
  leadName,
  title = "Delete Lead",
  description = "This action cannot be undone. Once deleted, the lead's data will be permanently removed.",
  trigger,
  isDeleting,
  isDeletingMultipleLeads = false,
}: DeleteLeadModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <button
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700
          hover:bg-red-50 hover:text-red-700 rounded-md cursor-pointer transition-colors w-full"
          >
            <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
              <Trash2 className="h-4 w-4 text-red-600" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-left">Delete Lead</span>
              <span className="text-xs text-gray-500 text-left">
                Permanently remove this lead
              </span>
            </div>
          </button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-black text-lg font-semibold">
            {leadName ? `Delete ${leadName}?` : title}
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm">
            {leadName
              ? `Are you sure you want to delete ${leadName}? This action cannot be undone.`
              : description}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex sm:justify-end">
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            Cancel
          </Button>
          <Button
            onClick={onDelete}
            disabled={isDeleting || isDeletingMultipleLeads }
            isLoading={isDeleting || isDeletingMultipleLeads }
            loadingText="Deleting..."
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
