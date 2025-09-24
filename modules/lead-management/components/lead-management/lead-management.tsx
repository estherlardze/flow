"use client";

import { LeadManagementFilters } from "../lead-management-filters/lead-management-filters";
import LeadManagementHeader from "../lead-management-header/lead-management-header";
import LeadManagementTable from "../lead-management-table/lead-management-table";
import { useLeadReactTable } from "../lead-management-table/use-lead-react-table";

export default function LeadsManagement() {
  const tableHook = useLeadReactTable();

  return (
    <main className="2xl:px-32">
      <LeadManagementHeader />
      <LeadManagementFilters
        onSearchChange={tableHook.setGlobalFilter}
        onStatusChange={tableHook.setStatusFilter}
        onSourceChange={tableHook.setSourceFilter}
        onBudgetChange={tableHook.setBudgetFilter}
        onTagChange={tableHook.setTagFilter}
      />
      <LeadManagementTable tableHook={tableHook} />
    </main>
  );
}
