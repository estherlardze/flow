"use client";

import { useMemo, useState } from "react";
import {
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  SortingState,
  ColumnFiltersState,
  RowSelectionState,
  useReactTable,
} from "@tanstack/react-table";
import { columns } from "./lead-management-table-columns";
import { useFetchLeads } from "../../hooks/use-fetch-leads";
import { budgetFilterFn, tagFilterFn } from "./lead-management-table-filters";

import { transformLeads } from "./lead-management-table.utils";

export function useLeadReactTable() {
  const { data: leadsResponse, isLoading, isError } = useFetchLeads();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [globalFilter, setGlobalFilter] = useState("");

  const transformedLeads = useMemo(
    () => transformLeads(leadsResponse),
    [leadsResponse]
  );

  const table = useReactTable({
    data: transformedLeads,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: "includesString",
    filterFns: {
      budgetFilter: budgetFilterFn,
      tagFilter: tagFilterFn,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      rowSelection,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const selectedLeadIds = useMemo(() => {
    return table
      .getFilteredSelectedRowModel()
      .rows.map((row) => row.original.id);
  }, [table.getFilteredSelectedRowModel().rows]);

  const setStatusFilter = (status: string) => {
    if (status === "" || status === "all") {
      setColumnFilters((prev) => prev.filter((f) => f.id !== "status"));
    } else {
      setColumnFilters((prev) => {
        const filtered = prev.filter((f) => f.id !== "status");
        return [...filtered, { id: "status", value: status }];
      });
    }
  };

  const setSourceFilter = (source: string) => {
    if (source === "all") {
      setColumnFilters((prev) => prev.filter((f) => f.id !== "source"));
    } else {
      setColumnFilters((prev) => {
        const filtered = prev.filter((f) => f.id !== "source");
        return [...filtered, { id: "source", value: source }];
      });
    }
  };

  const setBudgetFilter = (budget: string) => {
    if (budget === "all") {
      setColumnFilters((prev) => prev.filter((f) => f.id !== "budget"));
    } else {
      setColumnFilters((prev) => {
        const filtered = prev.filter((f) => f.id !== "budget");
        return [...filtered, { id: "budget", value: budget }];
      });
    }
  };

  const setTagFilter = (tag: string) => {
    if (tag === "all") {
      setColumnFilters((prev) => prev.filter((f) => f.id !== "tags"));
    } else {
      setColumnFilters((prev) => {
        const filtered = prev.filter((f) => f.id !== "tags");
        return [...filtered, { id: "tags", value: tag }];
      });
    }
  };

  return {
    table,
    transformedLeads,
    isLoading,
    isError,
    setRowSelection,
    selectedLeadIds,
    setSelectedLeadIds: setRowSelection,
    setGlobalFilter,
    setStatusFilter,
    setSourceFilter,
    setBudgetFilter,
    setTagFilter,
  };
}
