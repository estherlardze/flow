"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Edit2, Save, X, Clock, Loader2 } from "lucide-react";

import { LeadDetailsFollowUpItemProps } from "./lead-details.types";
import { format } from "date-fns";

export default function LeadDetailsFollowUpItem({
  followUp,
  isEditing,
  editedStatus,
  setEditedStatus,
  onEdit,
  onSave,
  onCancel,
  isUpdating,
}: LeadDetailsFollowUpItemProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 group">
      {isEditing ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Clock className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Update Follow-up Status
              </p>
              <p className="text-xs text-gray-500">
                {format(
                  new Date(followUp.$updatedAt),
                  "MMM dd, yyyy 'at' h:mm a"
                )}
              </p>
            </div>
          </div>
          <Select value={editedStatus} onValueChange={setEditedStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="pending">pending</SelectItem>
              <SelectItem value="completed">completed</SelectItem>
              <SelectItem value="missed">missed</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex gap-2 justify-end">
            <Button onClick={onCancel} variant="outline" size="sm">
              <X className="h-3 w-3 mr-1" />
              Cancel
            </Button>
            <Button onClick={onSave} size="sm" disabled={isUpdating}>
              {isUpdating ? (
                <Loader2 className="h-3 w-3 mr-1 animate-spin" />
              ) : (
                <Save className="h-3 w-3 mr-1" />
              )}
              Save
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Clock className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {followUp.type.charAt(0).toUpperCase() +
                    followUp.type.slice(1)}{" "}
                  Follow-up
                </p>
                <p className="text-xs text-gray-500">
                  Scheduled:{" "}
                  {format(
                    new Date(followUp.scheduled_at),
                    "MMM dd, yyyy 'at' h:mm a"
                  )}
                </p>
              </div>
            </div>
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                onClick={onEdit}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-blue-600 hover:bg-blue-50 h-8 w-8 p-0"
                disabled={isEditing}
              >
                <Edit2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="bg-gray-50 rounded-md p-3 border-l-4 border-green-200">
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed text-sm mb-2">
              {followUp.message}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  followUp.status === "pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : followUp.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : followUp.status === "missed"
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {followUp.status}
              </span>
              <span>•</span>
              <span>{followUp.type}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
