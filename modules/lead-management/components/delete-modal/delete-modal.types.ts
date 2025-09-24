export interface DeleteLeadModalProps {
  onDelete: () => void;
  leadName?: string;
  title?: string;
  description?: string;
  trigger?: React.ReactNode;
  isDeleting?: boolean;
  isDeletingMultipleLeads?: boolean;
}
