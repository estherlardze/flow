"use client";

import * as React from "react";
import {
  Trash2,
  Tag,
  Calendar,
  Activity,
  Download,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  DeleteTriggerProps,
  TagTriggerProps,
  FollowupTriggerProps,
  StatusTriggerProps,
  ExportTriggerProps,
  AssignTriggerProps,
} from "./selection-toolbar.types";

export const DeleteTrigger = React.forwardRef<
  HTMLButtonElement,
  DeleteTriggerProps
>(({ selectedCount, className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="ghost"
      size="sm"
      title={`Delete ${selectedCount} selected lead${
        selectedCount > 1 ? "s" : ""
      }`}
      className={cn(
        `flex flex-col items-center gap-1 px-2 py-1.5 h-auto rounded-md transition-all
        duration-200 hover:bg-red-50 active:bg-red-100 group hover:scale-100 active:scale-100`,
        className
      )}
      {...props}
    >
      <Trash2 className="h-4 w-4 text-red-500 group-hover:text-red-600" />
      <span className="text-xs font-medium text-black text-center leading-tight">
        Delete
      </span>
    </Button>
  );
});

export const TagTrigger = React.forwardRef<HTMLButtonElement, TagTriggerProps>(
  ({ selectedCount, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="ghost"
        size="sm"
        title={`Tag ${selectedCount} selected lead${
          selectedCount > 1 ? "s" : ""
        }`}
        className={cn(
          `flex flex-col items-center gap-1 px-2 py-1.5 h-auto rounded-md transition-all
          duration-200 hover:bg-gray-50 active:bg-gray-100 group hover:scale-100 active:scale-100`,
          className
        )}
        {...props}
      >
        <Tag className="h-4 w-4 text-gray-400 group-hover:text-gray-500" />
        <span className="text-xs font-medium text-black text-center leading-tight">
          Tag
        </span>
      </Button>
    );
  }
);

export const FollowupTrigger = React.forwardRef<
  HTMLButtonElement,
  FollowupTriggerProps
>(({ selectedCount, className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="ghost"
      size="sm"
      title={`Schedule follow-up for ${selectedCount} selected lead${
        selectedCount > 1 ? "s" : ""
      }`}
      className={cn(
        `flex flex-col items-center gap-1 px-2 py-1.5 h-auto rounded-md transition-all
        duration-200 hover:bg-gray-50 active:bg-gray-100 group hover:scale-100 active:scale-100`,
        className
      )}
      {...props}
    >
      <Calendar className="h-4 w-4 text-gray-400 group-hover:text-gray-500" />
      <span className="text-xs font-medium text-black text-center leading-tight">
        Follow-up
      </span>
    </Button>
  );
});

export const StatusTrigger = React.forwardRef<
  HTMLButtonElement,
  StatusTriggerProps
>(({ selectedCount, className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="ghost"
      size="sm"
      title={`Update status for ${selectedCount} selected lead${
        selectedCount > 1 ? "s" : ""
      }`}
      className={cn(
        `flex flex-col items-center gap-1 px-2 py-1.5 h-auto rounded-md transition-all
        duration-200 hover:bg-gray-50 active:bg-gray-100 group hover:scale-100 active:scale-100`,
        className
      )}
      {...props}
    >
      <Activity className="h-4 w-4 text-gray-400 group-hover:text-gray-500" />
      <span className="text-xs font-medium text-black text-center leading-tight">
        Status
      </span>
    </Button>
  );
});

export const ExportTrigger = React.forwardRef<
  HTMLButtonElement,
  ExportTriggerProps
>(({ selectedCount, className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="ghost"
      size="sm"
      title={`Export ${selectedCount} selected lead${
        selectedCount > 1 ? "s" : ""
      } to CSV`}
      className={cn(
        `flex flex-col items-center gap-1 px-2 py-1.5 h-auto rounded-md
        transition-all duration-200 hover:bg-blue-50 active:bg-blue-100 group hover:scale-100 active:scale-100`,
        className
      )}
      {...props}
    >
      <Download className="h-4 w-4 text-blue-600 group-hover:text-blue-700" />
      <span className="text-xs font-medium text-black text-center leading-tight">
        Export
      </span>
    </Button>
  );
});

ExportTrigger.displayName = "ExportTrigger";
StatusTrigger.displayName = "StatusTrigger";
FollowupTrigger.displayName = "FollowupTrigger";

TagTrigger.displayName = "TagTrigger";
DeleteTrigger.displayName = "DeleteTrigger";
