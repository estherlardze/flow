"use client";

import React from "react";
import { Home } from "lucide-react";
import { LeadDetailsPropertyPreferencesProps } from "./lead-details.types";

export default function LeadDetailsPropertyPreferences({
  lead,
}: LeadDetailsPropertyPreferencesProps) {
  return (
    <div>
      <h2 className="text-base font-semibold text-black mb-3 flex items-center">
        <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-md mr-2">
          <Home className="h-3 w-3 text-blue-600" />
        </div>
        Property Preferences
      </h2>
      <div className="">
        <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-blue-200 hover:shadow-sm transition-all duration-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-50 rounded-lg">
              <Home className="h-4 w-4 text-blue-600" />
            </div>
            <span className="font-medium text-black text-sm">
              Property Type
            </span>
          </div>
          <p className="text-gray-600 text-sm ml-11">{lead.property_type}</p>
        </div>
      </div>
    </div>
  );
}
