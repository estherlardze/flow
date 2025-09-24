"use client";

import React from "react";
import { Calendar, MessageSquare, Clock } from "lucide-react";
import { LeadDetailsActivityTimelineProps } from "./lead-details.types";
import { formatDate } from "./lead-details.utils";

export default function LeadDetailsActivityTimeline({
  lead,
}: LeadDetailsActivityTimelineProps) {
  return (
    <div>
      <h2 className="text-base font-semibold text-black mb-3 flex items-center">
        <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-md mr-2">
          <Calendar className="h-3 w-3 text-blue-600" />
        </div>
        Recent Activity
      </h2>
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-200 hover:shadow-sm transition-all duration-200">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-50 rounded-lg flex-shrink-0">
            <Calendar className="h-4 w-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-black text-sm">Lead Created</p>
            <p className="text-gray-600 text-xs mt-1">
              {formatDate(lead?.created_at, "Creation date unavailable")}
            </p>
          </div>
        </div>

        {lead?.last_contacted_at ? (
          <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-200 hover:shadow-sm transition-all duration-200">
            <div className="flex items-center justify-center w-8 h-8 bg-green-50 rounded-lg flex-shrink-0">
              <MessageSquare className="h-4 w-4 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-black text-sm">Last Contacted</p>
              <p className="text-gray-600 text-xs mt-1">
                {formatDate(lead?.last_contacted_at)}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg flex-shrink-0">
              <MessageSquare className="h-4 w-4 text-gray-400" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-500 text-sm">
                Last Contacted
              </p>
              <p className="text-gray-400 text-xs mt-1">No contact history</p>
            </div>
          </div>
        )}

        {lead?.follow_up_date ? (
          <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-200 hover:shadow-sm transition-all duration-200">
            <div className="flex items-center justify-center w-8 h-8 bg-orange-50 rounded-lg flex-shrink-0">
              <Clock className="h-4 w-4 text-orange-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-black text-sm">Follow-up Date</p>
              <p className="text-gray-600 text-xs mt-1">
                {formatDate(lead?.follow_up_date)}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg flex-shrink-0">
              <Clock className="h-4 w-4 text-gray-400" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-500 text-sm">
                Follow-up Date
              </p>
              <p className="text-gray-400 text-xs mt-1">
                No follow-up scheduled
              </p>
            </div>
          </div>
        )}

        <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-200 hover:shadow-sm transition-all duration-200">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-50 rounded-lg flex-shrink-0">
            <Clock className="h-4 w-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-black text-sm">Last Updated</p>
            <p className="text-gray-600 text-xs mt-1">
              {formatDate(lead?.updated_at, "Update date unavailable")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
