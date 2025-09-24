import { Row } from "@tanstack/react-table";
import { Lead } from "../lead-management-table/lead-management-table.types";

export interface ExportLeadsProps {
  trigger?: React.ReactNode;
  selectedRows?: Row<Lead>[];
  isGlobalExport?: boolean;
}
