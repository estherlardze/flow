"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Tag as TagIcon } from "lucide-react";
import { LeadDetailsTagsProps } from "./lead-details.types";

import { getIntentColorForTag } from "../lead-management-table/lead-management-table.partials";

export default function LeadDetailsTags({ lead }: LeadDetailsTagsProps) {
  const hasTags = lead?.tags && lead.tags.length > 0;

  return (
    <div>
      <h2 className="text-base font-semibold text-black mb-3 flex items-center">
        <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-md mr-2">
          <TagIcon className="h-3 w-3 text-blue-600" />
        </div>
        Tags & Labels
      </h2>
      {hasTags ? (
        <div className="flex flex-wrap gap-2">
          {lead.tags!.map((tag) => (
            <Badge
              key={tag.$id}
              className="text-sm text-white px-3 py-1 rounded-lg font-medium"
              style={{ backgroundColor: getIntentColorForTag(tag.text) }}
            >
              <TagIcon className="h-3 w-3 mr-1" />
              {tag.text}
            </Badge>
          ))}
        </div>
      ) : (
        <Badge className="bg-gray-100 text-gray-600 border-gray-200 px-3 py-1 text-xs font-medium rounded-lg">
          <TagIcon className="h-3 w-3 mr-1" />
          No tags
        </Badge>
      )}
    </div>
  );
}
