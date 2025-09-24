import { Row } from "@tanstack/react-table";
import { Lead } from "./lead-management-table.types";

export const budgetFilterFn = (
  row: Row<Lead>,
  columnId: string,
  filterValue: string
): boolean => {
  const budget = row.getValue(columnId) as number;

  switch (filterValue) {
    case "under-50k":
      return budget < 50000;
    case "50k-100k":
      return budget >= 50000 && budget < 100000;
    case "100k-250k":
      return budget >= 100000 && budget < 250000;
    case "250k-500k":
      return budget >= 250000 && budget < 500000;
    case "500k-1m":
      return budget >= 500000 && budget < 1000000;
    case "over-1m":
      return budget >= 1000000;
    default:
      return true;
  }
};

export const tagFilterFn = (
  row: Row<Lead>,
  columnId: string,
  filterValue: string
): boolean => {
  if (filterValue === "all") return true;
  const tags = row.getValue(columnId) as any[];
  return tags.some((tag: any) => tag.$id === filterValue);
};
