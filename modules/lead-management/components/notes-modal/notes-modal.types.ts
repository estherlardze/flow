export interface NotesModalProps {
  onAddNote: (note: string) => void;
  title?: string;
  description?: string;
  leadName?: string;
  isCreatingNote?: boolean;
}

export interface UseNotesModalProps {
  onAddNote: (note: string) => void;
}
