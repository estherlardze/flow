"use client";

import { useState } from "react";
import { TagType } from "./manage-tags-modal.types";
import { useCreateTag } from "../../hooks/use-create-lead-tag";
import { useFetchTags } from "../../hooks/use-fetch-tags";

import { useDeleteTag } from "../../hooks/use-delete-lead-tag";
import { useUpdateLeadTag } from "../../hooks/use-update-lead-tag";

export function useManageTagsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [newTagName, setNewTagName] = useState("");
  const [editingTag, setEditingTag] = useState<TagType | null>(null);
  const [editingName, setEditingName] = useState("");
  const [deletingTagId, setDeletingTagId] = useState<string | null>(null);

  const { mutate: createTag, isPending: isCreatingLeadTag } = useCreateTag();
  const { data: fetchedTags, isPending: isFetchingTags } = useFetchTags();
  const { mutate: deleteTag } = useDeleteTag();
  const { mutate: updateTag, isPending: isUpdatingTag } = useUpdateLeadTag();

  const handleCreateTag = () => {
    if (!newTagName.trim()) return;
    createTag(newTagName);
    setNewTagName("");
  };

  const handleEditTag = (tag: TagType) => { 
    setEditingTag(tag);
    setEditingName(tag.name);
  };

  const handleSaveEdit = () => {
    if (!editingTag || !editingName.trim()) return;
    
    updateTag({
      tagId: editingTag.id,
      tag: editingName.trim()
    }, {
      onSuccess: () => {
        setEditingTag(null);
        setEditingName("");
      }
    });
  };

  const handleCancelEdit = () => {
    setEditingTag(null);
    setEditingName("");
  };

  const handleDeleteTag = (tagId: string) => {
    setDeletingTagId(tagId);
    deleteTag(tagId, {
      onSettled: () => {
        setDeletingTagId(null);
      },
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter") {
      action();
    }
  };

  const tags = (fetchedTags as any)?.success
    ? (fetchedTags as any).data?.rows?.map((tag: any) => ({
        id: tag.$id,
        name: tag.text,
      })) || []
    : [];

  return {
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
    isUpdatingTag
  };
}
