import { useState, useEffect } from "react";
import {
  LeadSelectionProps,
  LeadSelectionData,
  LeadSelectionType,
} from "./lead-selection.types";

export const useLeadSelection = ({
  onSelectionChange,
  initialSelection,
}: Pick<LeadSelectionProps, "onSelectionChange" | "initialSelection">) => {
    
  const [selectionType, setSelectionType] = useState<LeadSelectionType>(
    initialSelection?.selectionType || "all"
  );
  const [selectedStatus, setSelectedStatus] = useState<string>(
    initialSelection?.criteria.status || ""
  );
  const [selectedSource, setSelectedSource] = useState<string>(
    initialSelection?.criteria.source || ""
  );
  const [selectedTags, setSelectedTags] = useState<string[]>(
    initialSelection?.criteria.tags || []
  );

  const handleSelectionTypeChange = (type: LeadSelectionType) => {
    setSelectionType(type);
    if (type !== "status") setSelectedStatus("");
    if (type !== "source") setSelectedSource("");
    if (type !== "tags") setSelectedTags([]);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev: string[]) =>
      prev.includes(tag)
        ? prev.filter((t: string) => t !== tag)
        : [...prev, tag]
    );
  };

  useEffect(() => {
    const selectionData: LeadSelectionData = {
      selectionType,
      criteria: {
        type: selectionType,
        ...(selectionType === "status" && { status: selectedStatus }),
        ...(selectionType === "source" && { source: selectedSource }),
        ...(selectionType === "tags" && { tags: selectedTags }),
      },
    };
    onSelectionChange(selectionData);
  }, [
    selectionType,
    selectedStatus,
    selectedSource,
    selectedTags,
    onSelectionChange,
  ]);

  return {
    selectionType,
    selectedStatus,
    selectedSource,
    selectedTags,

    setSelectedStatus,
    setSelectedSource,

    handleSelectionTypeChange,
    handleTagToggle,
  };
};
