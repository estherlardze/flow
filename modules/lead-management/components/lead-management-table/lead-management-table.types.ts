export interface Tag {
  $id: string;
  text: string;
  $createdAt: string;
  $updatedAt: string;
  $databaseId: string;
  $tableId: string;
  $permissions: string[];
  $sequence: number;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: "website" | "referral" | "ad" | "social" | "other" | "form";
  status:
    | "new"
    | "contacted"
    | "qualified"
    | "proposal"
    | "negotiation"
    | "under_contract"
    | "close_won"
    | "close_lost";
  budget: number;
  location: string;
  agent: string;
  tags: Tag[];
  createdDate: Date;
  updatedDate: Date;
  score?: number;
  last_contacted_at?: Date;
  follow_up_date?: Date;
}

export interface LeadManagementTableProps {
  data?: Lead[];
}

export interface ActionsMenuProps {
  lead: Lead;
}

export interface UseTablePaginationProps {
  currentPage: number;
  totalPages: number;
  showPages?: number;
}

export interface UseTablePaginationReturn {
  pageNumbers: (number | string)[];
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export interface LeadManagementTablePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPages?: number;
  className?: string;
}

export interface UseActionsMenuProps {
  lead: Lead;
}
