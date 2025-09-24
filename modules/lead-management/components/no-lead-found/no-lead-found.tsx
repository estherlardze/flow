"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Upload, Plus, Users } from "lucide-react";

export default function NoLeadFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <div className="relative mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center shadow-sm border border-blue-200/50">
          <Users className="w-10 h-10 text-blue-600" />
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-sm -z-10" />
      </div>

      <div className="max-w-md space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
          No leads yet
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Start building your real estate pipeline by importing existing contacts or creating your first lead.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-8">
        <Button
          variant="outline"
          className="flex items-center gap-2.5 px-6 py-3 h-auto border-gray-200
          hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 rounded-lg shadow-sm"
        >
          <Upload className="w-4 h-4 text-gray-600" />
          <span className="font-medium">Import Leads</span>
        </Button>

        <Button
          className="flex items-center gap-2.5 px-6 py-3 h-auto bg-blue-600
          hover:bg-blue-700 text-white shadow-sm hover:shadow-md transition-all duration-200 rounded-lg"
        >
          <Plus className="w-4 h-4" />
          <span className="font-medium">Create Lead</span>
        </Button>
      </div>

      <div className="mt-12 text-sm text-gray-500">
        <p>
          Need help?{" "}
          <a
            href="mailto:info@sleekteq.com"
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
}
