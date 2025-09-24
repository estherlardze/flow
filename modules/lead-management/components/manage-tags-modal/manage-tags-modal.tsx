"use client";

import React from "react";
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
import { Plus } from "lucide-react";

import { useManageTagsModal } from "./use-manage-tags-modal";
import { TagManagerModalProps } from "./manage-tags-modal.types";
import { TagManagerModalContent } from "./manage-tags-modal.partials";

export default function TagManagerModal({ trigger }: TagManagerModalProps) {
  const {
    tags,
    isOpen,
    setIsOpen,
    newTagName,
    setNewTagName,
    editingTag,
    editingName,
    setEditingName,
    handleCreateTag,
    handleEditTag,
    handleSaveEdit,
    handleCancelEdit,
    handleDeleteTag,
    handleKeyPress,
    isCreatingLeadTag,
    isFetchingTags,
    deletingTagId,
    isUpdatingTag,
  } = useManageTagsModal();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-none flex items-center gap-2 px-4 py-2 text-blue-500"
        >
          <Plus className="h-4 w-4 text-blue-500" />
          Manage Tags
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-xl font-semibold text-black">
            Manage Tags
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Create, edit, and delete tags for your tags.
          </DialogDescription>
        </DialogHeader>

        <TagManagerModalContent
          tags={tags}
          newTagName={newTagName}
          setNewTagName={setNewTagName}
          editingTag={editingTag}
          editingName={editingName}
          setEditingName={setEditingName}
          handleCreateTag={handleCreateTag}
          handleEditTag={handleEditTag}
          handleSaveEdit={handleSaveEdit}
          handleCancelEdit={handleCancelEdit}
          handleDeleteTag={handleDeleteTag}
          handleKeyPress={handleKeyPress}
          isCreatingLeadTag={isCreatingLeadTag}
          isFetchingTags={isFetchingTags}
          deletingTagId={deletingTagId}
          isUpdatingTag={isUpdatingTag}
        />

        <DialogFooter className="pt-4 border-t border-gray-200">
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            className="border-gray-300 hover:bg-gray-50 text-gray-700"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
