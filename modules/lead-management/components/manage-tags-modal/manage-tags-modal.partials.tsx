import React from "react";
import { CreateTagForm } from "./manage-tags-modal-create-form";
import { TagsList } from "./manage-tags-modal-list";
import { TagManagerModalContentProps } from "./manage-tags-modal.types";

export function TagManagerModalContent({
  tags,
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
  isUpdatingTag
}: TagManagerModalContentProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      <CreateTagForm
        newTagName={newTagName}
        setNewTagName={setNewTagName}
        handleCreateTag={handleCreateTag}
        handleKeyPress={handleKeyPress}
        isCreatingLeadTag={isCreatingLeadTag}
      />
      <TagsList
        tags={tags}
        editingTag={editingTag}
        editingName={editingName}
        setEditingName={setEditingName}
        handleEditTag={handleEditTag}
        handleSaveEdit={handleSaveEdit}
        handleCancelEdit={handleCancelEdit}
        handleDeleteTag={handleDeleteTag}
        handleKeyPress={handleKeyPress}
        isFetchingTags={isFetchingTags}
        deletingTagId={deletingTagId}
        isUpdatingTag={isUpdatingTag}
      />
    </div>
  );
}