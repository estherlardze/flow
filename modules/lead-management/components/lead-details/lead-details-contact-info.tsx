"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Lead } from "../lead-management-table/lead-management-table.types";
import { Mail, Phone, MapPin, ExternalLink, User } from "lucide-react";
import { LeadDetailsContactInfoProps } from "./lead-details.types";

export default function LeadDetailsContactInfo({
  lead,
}: LeadDetailsContactInfoProps) {
  return (
    <div>
      <h2 className="text-base font-semibold text-black mb-3 flex items-center">
        <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-md mr-2">
          <User className="h-3 w-3 text-blue-600" />
        </div>
        Contact Information
      </h2>
      <div className="grid gap-3">
        <div className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-200 hover:shadow-sm transition-all duration-200">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
              <Mail className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-black text-sm">Email Address</p>
              <p className="text-gray-600 text-sm mt-0.5">{lead.email}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>

        <div className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-200 hover:shadow-sm transition-all duration-200">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
              <Phone className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-black text-sm">Phone Number</p>
              <p className="text-gray-600 text-sm mt-0.5">{lead.phone}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg"
          >
            <Phone className="h-4 w-4" />
          </Button>
        </div>

        <div className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-200 hover:shadow-sm transition-all duration-200">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
              <MapPin className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-black text-sm">Location</p>
              <p className="text-gray-600 text-sm mt-0.5">{lead.location}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
