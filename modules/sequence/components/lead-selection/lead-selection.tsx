"use client";

import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadSelectionProps } from "./lead-selection.types";
import { useLeadSelection } from "./use-lead-selection";

import { SelectionTypeSelector } from "./lead-selection-type-selector";
import { StatusSelector } from "./lead-selection-status-selector";
import { SourceSelector } from "./lead-selection-source-selector";
import { TagsSelector } from "./lead-selection-tags-selector";

import { IndividualSelector } from "./lead-selection-individual-selector";
import { SelectionSummary } from "./lead-selection-summary";

export function LeadSelection({
  onSelectionChange,
  initialSelection,
  availableStatuses = ["new", "contacted", "qualified", "converted", "lost"],
  availableSources = [
    "website",
    "social_media",
    "referral",
    "cold_call",
    "email",
  ],
  availableTags = ["hot_lead", "warm_lead", "cold_lead", "vip", "follow_up"],
}: Readonly<LeadSelectionProps>) {
  const {
    selectionType,
    selectedStatus,
    selectedSource,
    selectedTags,
    setSelectedStatus,
    setSelectedSource,
    handleSelectionTypeChange,
    handleTagToggle,
  } = useLeadSelection({ onSelectionChange, initialSelection });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Select Leads for Sequence
        </CardTitle>
        <p className="text-sm text-gray-600">
          Choose which leads this sequence should be applied to
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <SelectionTypeSelector
          selectionType={selectionType}
          onSelectionTypeChange={handleSelectionTypeChange}
        />

        {selectionType === "status" && (
          <StatusSelector
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
            availableStatuses={availableStatuses}
          />
        )}

        {selectionType === "source" && (
          <SourceSelector
            selectedSource={selectedSource}
            onSourceChange={setSelectedSource}
            availableSources={availableSources}
          />
        )}

        {selectionType === "tags" && (
          <TagsSelector
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
            availableTags={availableTags}
          />
        )}

        {selectionType === "individual" && <IndividualSelector />}

        <SelectionSummary
          selectionType={selectionType}
          selectedStatus={selectedStatus}
          selectedSource={selectedSource}
          selectedTags={selectedTags}
        />
      </CardContent>
    </Card>
  );
}
