import { useCallback } from "react";
import * as XLSX from "xlsx";
import { Lead } from "../lead-management-table/lead-management-table.types";
import {
  formatLeadsForExport,
  getSelectedLeadsData,
  mapApiRowToLead,
} from "./export-leads.utils";
import { useFetchLeads } from "../../hooks/use-fetch-leads";

export const useExportLead = (isGlobalExport?: boolean) => {
  const {
    data: allLeads,
    isLoading: isPending,
    error,
  } = useFetchLeads(isGlobalExport);

  const exportToCSV = useCallback((leads: Lead[], filename: string) => {
    const data = formatLeadsForExport(leads);
    const headers = Object.keys(data[0] || {});
    const csvContent = [
      headers.join(","),
      ...data.map((row) =>
        headers
          .map((header) => {
            const value = row[header as keyof typeof row] || "";
            const stringValue = String(value);
            return stringValue.includes(",") || stringValue.includes('"')
              ? `"${stringValue.replace(/"/g, '""')}"`
              : stringValue;
          })
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }, []);

  const exportToExcel = useCallback((leads: Lead[], filename: string) => {
    const data = formatLeadsForExport(leads);
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");
    XLSX.writeFile(workbook, filename);
  }, []);

  const handleExportCSV = useCallback(
    (selectedRows?: any[]) => {
      if (isGlobalExport && (isPending || error)) return;

      let leads: Lead[];
      if (isGlobalExport) {
        leads = (allLeads as any)?.data?.rows?.map(mapApiRowToLead) || [];
      } else {
        leads = getSelectedLeadsData(selectedRows) || [];
      }
      if (!leads || leads.length === 0) return;

      const filename = `leads_export_${
        new Date().toISOString().split("T")[0]
      }.csv`;
      exportToCSV(leads, filename);
    },
    [exportToCSV, isGlobalExport, allLeads, isPending, error]
  );

  const handleExportExcel = useCallback(
    (selectedRows?: any[]) => {
      if (isGlobalExport && (isPending || error)) return;

      let leads: Lead[];
      if (isGlobalExport) {
        leads = (allLeads as any)?.data?.rows?.map(mapApiRowToLead) || [];
      } else {
        leads = getSelectedLeadsData(selectedRows) || [];
      }
      if (!leads || leads.length === 0) return;

      const filename = `leads_export_${
        new Date().toISOString().split("T")[0]
      }.xlsx`;
      exportToExcel(leads, filename);
    },
    [exportToExcel, isGlobalExport, allLeads, isPending, error]
  );

  return {
    handleExportCSV,
    handleExportExcel,
    isPending,
    error,
  };
};
