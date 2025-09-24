"use client";

import React from "react";
import { Clock } from "lucide-react";
import { LeadDetailsFollowUpsHeaderProps } from "./lead-details.types";

export default function LeadDetailsFollowUpsHeader({
  followUpsCount,
}: LeadDetailsFollowUpsHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-base font-semibold text-black flex items-center">
        <div className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-md mr-2">
          <Clock className="h-3 w-3 text-green-600" />
        </div>
        Follow-ups
        {followUpsCount > 0 && (
          <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">
            {followUpsCount}
          </span>
        )}
      </h2>
    </div>
  );
}
