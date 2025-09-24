import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash2, Plus, Tag, Loader2 } from "lucide-react";
import { PageLoadingSpinner } from "@/components/loading-spinner/loading-spinner";
import { TagsListProps } from "./manage-tags-modal.types";
import { getTagVariant } from "@/lib/utils";

export function TagsList({
  tags,
  editingTag,
  editingName,
  setEditingName,
  handleEditTag,
  handleSaveEdit,
  handleCancelEdit,
  handleDeleteTag,
  handleKeyPress,
  isFetchingTags,
  deletingTagId,
  isUpdatingTag,
}: TagsListProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {isFetchingTags ? (
        <PageLoadingSpinner text="Loading tags..." />
      ) : tags?.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-lg border-2 border-dashed border-gray-300">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
            <Tag className="h-8 w-8 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No tags yet
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Get started by creating your first tag above.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
            <Plus className="h-4 w-4 mr-2" />
            Add a tag to organize your leads
          </div>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200">
              <TableHead className="text-blue-900 font-semibold py-3 px-4">
                Tag Name
              </TableHead>
              <TableHead className="text-blue-900 font-semibold text-right w-24 py-3 px-4">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tags &&
              Array.isArray(tags) &&
              tags.map((tag) => (
                <TableRow
                  key={tag.id}
                  className="hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/30 border-b border-gray-100 transition-all duration-200"
                >
                  <TableCell className="py-3">
                    {editingTag?.id === tag.id ? (
                      <div className="flex items-center gap-2">
                        <Input
                          value={editingName}
                          onChange={(e) => setEditingName(e.target.value)}
                          onKeyDown={(e) => handleKeyPress(e, handleSaveEdit)}
                          className="w-full h-8 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          autoFocus
                        />
                        <Button
                          size="sm"
                          onClick={handleSaveEdit}
                          disabled={!editingName.trim() || isUpdatingTag}
                          className="h-8 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium"
                        >
                          {isUpdatingTag ? (
                            <>
                              <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                              Saving...
                            </>
                          ) : (
                            "Save"
                          )}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleCancelEdit}
                          className="h-8 px-3 border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-medium"
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <Badge
                        variant={getTagVariant(tag.name)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium shadow-sm hover:shadow-md transition-shadow"
                      >
                        <Tag className="h-3 w-3" />
                        {tag.name}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right py-3 px-4">
                    {editingTag?.id !== tag.id && (
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleEditTag(tag)}
                          className="h-8 w-8 p-0 hover:bg-blue-100 text-blue-600 hover:text-blue-700 rounded-lg transition-all duration-200 hover:scale-105"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDeleteTag(tag.id)}
                          className="h-8 w-8 p-0 hover:bg-red-100 text-red-600 hover:text-red-700 rounded-lg transition-all duration-200 hover:scale-105"
                        >
                          {deletingTagId === tag.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Trash2 className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
