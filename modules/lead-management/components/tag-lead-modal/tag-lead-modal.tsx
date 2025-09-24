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
import { Tag } from "lucide-react";

import { TagLeadModalProps, TransformedTag } from "./tag-lead-modal.types";
import { useTagLeadModal } from "./use-tag-lead-modal";
import { useFetchTags } from "../../hooks/use-fetch-tags";
import { transformTagsResponse } from "./tag-lead-modal.utils";

import { InlineLoadingSpinner } from "@/components/loading-spinner/loading-spinner";

export default function TagLeadModal({
  onUpdateTag,
  initialTag = "",
  title = "Tag Lead",
  description = "Assign or update a tag for this lead.",
  leadName,
  trigger,
  isAssigningTags,
  isAssigningTag,
}: TagLeadModalProps) {
  const { selectedTag, setSelectedTag, handleSave, handleCancel } =
    useTagLeadModal({ onUpdateTag, initialTag });
  const { data: fetchedTags, isPending: isFetchingTags } = useFetchTags();
  const tags: TransformedTag[] = transformTagsResponse(fetchedTags);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <button
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700
          hover:bg-blue-50 hover:text-blue-700 rounded-md cursor-pointer transition-colors w-full"
          >
            <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
              <Tag className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-left">Tag Lead</span>
              <span className="text-xs text-gray-500">
                Assign or update tag
              </span>
            </div>
          </button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-black text-lg font-semibold">
            {leadName ? `Tag ${leadName}` : title}
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <label className="block text-sm font-medium text-black mb-2">
            Select a Tag
          </label>
          <Select
            value={selectedTag}
            onValueChange={setSelectedTag}
            disabled={isFetchingTags}
          >
            <SelectTrigger className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500/20">
              <SelectValue
                placeholder={
                  isFetchingTags ? "Loading tags..." : "Choose a tag"
                }
              />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {isFetchingTags ? (
                <div className="flex items-center justify-center py-4">
                  <InlineLoadingSpinner text="Loading tags..." size="sm" />
                </div>
              ) : (
                tags?.map((tag) => (
                  <SelectItem key={tag.id} value={tag.id}>
                    {tag.text}
                  </SelectItem>
                ))
              )}
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
            disabled={!selectedTag || isAssigningTags || isAssigningTag}
            isLoading={isAssigningTags || isAssigningTag}
            loadingText="Saving..."
            className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save Tag
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
