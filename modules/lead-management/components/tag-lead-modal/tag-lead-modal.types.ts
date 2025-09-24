export interface TagLeadModalProps {
  onUpdateTag: (tag: string) => void;
  initialTag?: string;
  title?: string;
  description?: string;
  leadName?: string;
  trigger?: React.ReactNode;
  isAssigningTags?: boolean;
  isAssigningTag?: boolean;
}

export interface UseTagLeadModalProps {
  onUpdateTag: (tag: string) => void;
  initialTag?: string;
}

export interface AppwriteTag {
  $id: string;
  text: string;
  $createdAt: string;
  $updatedAt: string;
  $databaseId: string;
  $permissions: string[];
  $sequence: number;
  $tableId: string;
}

export interface AppwriteTagsData {
  rows: AppwriteTag[];
  total: number;
}

export interface AppwriteTagsResponse {
  success: boolean;
  data: AppwriteTagsData;
}

export interface TransformedTag {
  id: string;
  text: string;
}
