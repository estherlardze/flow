export interface ChangeStatusModalProps {
  onUpdateStatus: (status: string) => void;
  initialStatus?: string;
  title?: string;
  description?: string;
  leadName?: string;
  trigger?: React.ReactNode;
  isUpdatingLeadStatus?: boolean;
}

export interface UseChangeStatusModalProps {
  onUpdateStatus: (status: string) => void;
  initialStatus?: string;
}

export interface UseChangeStatusModalProps {
  onUpdateStatus: (status: string) => void;
  initialStatus?: string;
}
