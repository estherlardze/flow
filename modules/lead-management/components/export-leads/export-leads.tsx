"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, FileText, FileSpreadsheet } from "lucide-react";

import { useEffect } from "react";
import { toast } from "@/lib/toast";
import { LoadingSpinner } from "@/components/loading-spinner/loading-spinner";
import { ExportLeadsProps } from "./export-leads.types";

import { useExportLead } from "./use-export-lead";

export default function ExportLeads({
  trigger,
  selectedRows,
  isGlobalExport,
}: ExportLeadsProps) {
  const { handleExportCSV, handleExportExcel, isPending, error } = useExportLead(isGlobalExport);

  useEffect(() => {
    if (error) {
      toast.error("Failed to fetch leads for export");
    }
  }, [error]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 border-blue-300 text-blue-500
          hover:bg-blue-50 hover:border-blue-400"
          >
            <Download className="h-4 w-4" />
            Export Leads
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 p-2 bg-white">
        <div className="px-2 py-1.5">
          <p className="text-sm font-medium text-gray-900">Export Format</p>
          <p className="text-xs text-gray-500">
            Choose your preferred file format
          </p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => handleExportCSV(selectedRows)}
          disabled={isPending}
          className="flex items-start gap-3 p-3 cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
        >
          {isPending ? (
            <LoadingSpinner size="sm" />
          ) : (
            <FileText className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          )}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-900">
              CSV Format
            </span>
            <span className="text-xs text-gray-600">
              Comma-separated values, compatible with most spreadsheet
              applications
            </span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleExportExcel(selectedRows)}
          disabled={isPending}
          className="flex items-start gap-3 p-3 cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
        >
          {isPending ? (
            <LoadingSpinner size="sm" />
          ) : (
            <FileSpreadsheet className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
          )}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-900">
              Excel Format
            </span>
            <span className="text-xs text-gray-600">
              Microsoft Excel format with enhanced formatting and formulas
              support
            </span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
