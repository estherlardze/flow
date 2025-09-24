import { useState } from "react";
import { UseNotesModalProps } from "./notes-modal.types";

export function useNotesModal({ onAddNote }: UseNotesModalProps) {
  const [note, setNote] = useState("");

  const handleAddNote = () => {
    if (note.trim()) {
      onAddNote(note.trim());
      setNote("");
    }
  };

  const handleCancel = () => {
    setNote("");
  };

  return {
    note,
    setNote,
    handleAddNote,
    handleCancel,
  };
}
