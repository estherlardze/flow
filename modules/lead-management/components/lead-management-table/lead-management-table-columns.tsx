import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown } from "lucide-react";

import { format } from "date-fns";
import { Lead } from "./lead-management-table.types";
import ActionsMenu from "./lead-management-table-actions-menu";
import {
  NameWithAvatar,
  SourceBadge,
  StatusBadge,
  TagsBadge,
} from "./lead-management-table.partials";
import { budgetFilterFn, tagFilterFn } from "./lead-management-table-filters";

export const columns: ColumnDef<Lead>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={table.getIsSomePageRowsSelected()}
        onChange={(event) =>
          table.toggleAllPageRowsSelected(event.target.checked)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onChange={(event) => row.toggleSelected(event.target.checked)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    size: 50,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-medium"
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <NameWithAvatar name={row.getValue("name")} />,
    size: 200,
    maxSize: 250,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="text-gray-600 whitespace-nowrap truncate max-w-[200px]">
        {row.getValue("email")}
      </div>
    ),
    size: 220,
    maxSize: 250,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="text-gray-600 font-mono tracking-wide whitespace-nowrap">
        {row.getValue("phone")}
      </div>
    ),
    size: 180,
  },
  {
    accessorKey: "source",
    header: "Source",
    cell: ({ row }) => <SourceBadge source={row.getValue("source")} />,
    size: 120,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
    size: 120,
  },
  {
    accessorKey: "budget",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-medium"
        >
          Budget
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const budget = parseFloat(row.getValue("budget"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(budget);
      return (
        <div className="font-medium text-gray-900 whitespace-nowrap">
          {formatted}
        </div>
      );
    },
    filterFn: budgetFilterFn,
    size: 120,
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => (
      <div className="text-gray-600 whitespace-nowrap">
        {row.getValue("location")}
      </div>
    ),
    size: 160,
  },
  {
    accessorKey: "agent",
    header: "Agent",
    cell: ({ row }) => (
      <div className="text-gray-900 whitespace-nowrap">
        {row.getValue("agent")}
      </div>
    ),
    size: 140,
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => <TagsBadge tags={row.getValue("tags")} />,
    filterFn: tagFilterFn,
    size: 150,
  },
  {
    accessorKey: "createdDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-medium"
        >
          Created
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("createdDate") as Date;
      return (
        <div className="text-gray-600 whitespace-nowrap">
          {format(date, "MMM dd, yyyy")}
        </div>
      );
    },
    size: 120,
  },
  {
    accessorKey: "updatedDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-medium"
        >
          Updated
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("updatedDate") as Date;
      return (
        <div className="text-gray-600 whitespace-nowrap">
          {format(date, "MMM dd, yyyy")}
        </div>
      );
    },
    size: 120,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <ActionsMenu lead={row.original} />,
    size: 80,
  },
];
