"use client";

import { useState, useEffect } from "react";
import { UseTagLeadModalProps } from "./tag-lead-modal.types";
import { useFetchTags } from "../../hooks/use-fetch-tags";
import { transformTagsResponse } from "./tag-lead-modal.utils";

import { TransformedTag } from "./tag-lead-modal.types";

export function useTagLeadModal({
  onUpdateTag,
  initialTag = "",
}: UseTagLeadModalProps) {
  const [selectedTag, setSelectedTag] = useState("");
  const { data: fetchedTags } = useFetchTags();
  const tags: TransformedTag[] = transformTagsResponse(fetchedTags);

  useEffect(() => {
    if (initialTag && tags.length > 0) {
      const initialTagObj = tags.find(tag => tag.text === initialTag);
      if (initialTagObj) {
        setSelectedTag(initialTagObj.id);
      }
    }
  }, [initialTag, tags]);

  const handleSave = () => {
    if (selectedTag) {
      onUpdateTag(selectedTag);
    }
  };

  const handleCancel = () => {
    if (initialTag && tags.length > 0) {
      const initialTagObj = tags.find(tag => tag.text === initialTag);
      setSelectedTag(initialTagObj?.id || "");
    } else {
      setSelectedTag("");
    }
  };

  return {
    selectedTag,
    setSelectedTag,
    handleSave,
    handleCancel,
  };
}
