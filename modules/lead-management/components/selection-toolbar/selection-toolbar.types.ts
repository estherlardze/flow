import { Row } from "@tanstack/react-table";
import { ButtonHTMLAttributes } from "react";
import { Lead } from "../lead-management-table/lead-management-table.types";

interface BaseTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selectedCount: number;
  className?: string;
}

export interface SelectionToolbarProps {
  selectedCount: number;
  selectedRows: Row<Lead>[];
  onClose?: () => void;
}

export interface SelectionToolbarActionsProps {
  selectedCount?: number;
  selectedLeadIds?: string[];
  selectedRows?: Row<Lead>[];
}

export type DeleteTriggerProps = BaseTriggerProps;
export type TagTriggerProps = BaseTriggerProps;
export type FollowupTriggerProps = BaseTriggerProps;
export type StatusTriggerProps = BaseTriggerProps;
export type ExportTriggerProps = BaseTriggerProps;
export interface AssignTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}


export interface UseSelectionToolbarProps {
  selectedCount: number;
  selectedLeadIds?: string[];
}
