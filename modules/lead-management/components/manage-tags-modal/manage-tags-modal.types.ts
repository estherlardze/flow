export interface TagManagerModalProps {
  trigger?: React.ReactNode;
}

export interface TagType {
  id: string;
  name: string;
}

export interface TagManagerModalContentProps {
  tags: TagType[];
  newTagName: string;
  setNewTagName: (name: string) => void;
  editingTag: TagType | null;
  editingName: string;
  setEditingName: (name: string) => void;
  handleCreateTag: () => void;
  handleEditTag: (tag: TagType) => void;
  handleSaveEdit: () => void;
  handleCancelEdit: () => void;
  handleDeleteTag: (tagId: string) => void;
  handleKeyPress: (e: React.KeyboardEvent, action: () => void) => void;
  isCreatingLeadTag?: boolean;
  isFetchingTags?: boolean;
  deletingTagId?: string | null;
  isUpdatingTag?: boolean;
}

export interface Tag {
  id: string;
  name: string;
}

export interface TagsListProps {
  tags: Tag[];
  editingTag: Tag | null;
  editingName: string;
  setEditingName: (name: string) => void;
  handleEditTag: (tag: Tag) => void;
  handleSaveEdit: () => void;
  handleCancelEdit: () => void;
  handleDeleteTag: (id: string) => void;
  handleKeyPress: (e: React.KeyboardEvent, action: () => void) => void;
  isFetchingTags?: boolean;
  deletingTagId?: string | null;
  isUpdatingTag?: boolean;
}

export interface CreateTagFormProps {
  newTagName: string;
  setNewTagName: (name: string) => void;
  handleCreateTag: () => void;
  handleKeyPress: (e: React.KeyboardEvent, action: () => void) => void;
  isCreatingLeadTag?: boolean;
}
