"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import Avatar from "@/components/ui/avatar";
import {
  getInitials,
  getSourceColor,
  LEAD_SOURCES,
} from "./lead-details.utils";

import { getStatusInfo } from "./lead-details.partials";
import { LeadDetailsHeaderProps } from "./lead-details.types";

export default function LeadDetailsHeader({ lead }: LeadDetailsHeaderProps) {
  const statusInfo = getStatusInfo(lead.status);
  const sourceColor = getSourceColor(
    lead.source as (typeof LEAD_SOURCES)[number]
  );

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar
            name={`${lead.first_name} ${lead.last_name}`}
            initials={getInitials(lead.first_name)}
            showAsButton={false}
          />
          <div>
            <h1 className="text-xl font-bold text-black">
              {lead.first_name} {lead.last_name}
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Real Estate Lead • {lead.location}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Badge
            className={`${statusInfo.color} border px-3 py-1 font-medium text-sm rounded-lg`}
          >
            {statusInfo.icon}
            <span className="ml-2">{lead.status}</span>
          </Badge>

          <Badge
            className={`${sourceColor} border px-3 py-1 font-medium text-sm rounded-lg`}
          >
            {lead.source}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        <div className="text-center p-3 bg-white rounded-lg border border-blue-200 shadow-sm">
          <div className="text-lg font-bold text-blue-600 mb-1">
            ${lead.budget.toLocaleString()}
          </div>
          <div className="text-xs font-medium text-gray-600">Budget</div>
        </div>
        <div className="text-center p-3 bg-white rounded-lg border border-blue-200 shadow-sm">
          <div className="text-lg font-bold text-blue-600 mb-1">
            {lead?.score}
          </div>
          <div className="text-xs font-medium text-gray-600">Lead Score</div>
        </div>
        <div className="text-center p-3 bg-white rounded-lg border border-blue-200 shadow-sm">
          <div className="text-lg font-bold text-blue-600 mb-1">
            {lead.source}
          </div>
          <div className="text-xs font-medium text-gray-600">Source</div>
        </div>
        <div className="text-center p-3 bg-white rounded-lg border border-blue-200 shadow-sm">
          <div className="text-lg font-bold text-blue-600 mb-1">
            {lead.status}
          </div>
          <div className="text-xs font-medium text-gray-600">Status</div>
        </div>
      </div>
    </div>
  );
}
