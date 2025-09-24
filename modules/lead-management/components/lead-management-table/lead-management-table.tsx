"use client";

import { flexRender } from "@tanstack/react-table";
import { columns } from "./lead-management-table-columns";
import { LeadManagementTablePagination } from "./lead-management-table-pagination";
import SelectionToolbar from "../selection-toolbar/selection-toolbar";

import { getColumnWidth } from "./lead-management-table.utils";
import ErrorComponent from "@/components/error/error";
import { InlineLoadingSpinner } from "@/components/loading-spinner/loading-spinner-presets";
import NoLeadFound from "../no-lead-found/no-lead-found";

import { useLeadReactTable } from "./use-lead-react-table";

export default function LeadManagementTable({
  tableHook,
}: {
  tableHook?: ReturnType<typeof useLeadReactTable>;
}) {
  const defaultTableHook = useLeadReactTable();
  const { table, transformedLeads, isLoading, isError, setSelectedLeadIds } =
    tableHook || defaultTableHook;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <InlineLoadingSpinner text="Loading leads..." />
      </div>
    );
  }

  if (isError) {
    return <ErrorComponent />;
  }

  if (!transformedLeads || transformedLeads.length === 0) {
    return <NoLeadFound />;
  }

  return (
    <div className="w-full max-w-full mt-6">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
          <table className="w-max min-w-full caption-bottom text-sm">
            <thead className="bg-blue-50/40 border-b border-gray-200">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        className="text-gray-700 font-semibold px-4 py-3 text-left align-middle [&:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm bg-transparent border-b-0"
                        style={{
                          width: getColumnWidth(header.id),
                        }}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="border-b border-gray-100 hover:bg-blue-50/30 transition-all duration-200 ease-in-out data-[state=selected]:bg-blue-50 data-[state=selected]:border-blue-200 group"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="py-3 px-4 align-middle [&:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm group-hover:text-gray-900 transition-colors duration-200"
                        style={{
                          width: getColumnWidth(cell.column.id),
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="h-32 text-center py-8 px-4 align-middle"
                  >
                    <div className="text-gray-600 text-sm font-medium">No leads found</div>
                    <div className="text-gray-500 text-xs mt-1">Try adjusting your filters or add some leads</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-blue-50/40">
          <div className="flex-1 text-sm text-gray-600">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected
          </div>
          <LeadManagementTablePagination
            currentPage={table.getState().pagination.pageIndex + 1}
            totalPages={table.getPageCount()}
            onPageChange={(page: number) => table.setPageIndex(page - 1)}
          />
        </div>
      </div>

      <SelectionToolbar
        selectedCount={table.getFilteredSelectedRowModel().rows.length}
        selectedRows={table.getFilteredSelectedRowModel().rows}
        onClose={() => setSelectedLeadIds({})}
      />
    </div>
  );
}
