"use client";

import { useState } from "react";
import { useDeleteNote } from "../../hooks/use-delete-note";
import { useUpdateNote } from "../../hooks/use-update-note";
import { BackendNote } from "./lead-details.types";

export const useLeadDetailsNote = (leadId: string) => {
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editedContent, setEditedContent] = useState("");

  const { mutate: deleteNote, isPending: isDeletingNote } =
    useDeleteNote(leadId);
  const { mutate: updateNote, isPending: isUpdatingNote } =
    useUpdateNote(leadId);

  const handleEditNote = (note: BackendNote) => {
    setEditingNoteId(note.$id);
    setEditedContent(note.content);
  };

  const handleSaveNote = () => {
    if (editingNoteId && editedContent.trim()) {
      updateNote(
        { noteId: editingNoteId, content: editedContent },
        {
          onSuccess: () => {
            setEditingNoteId(null);
            setEditedContent("");
          },
        }
      );
    }
  };

  const handleCancelEdit = () => {
    setEditingNoteId(null);
    setEditedContent("");
  };

  const handleDeleteNote = (noteId: string) => {
    deleteNote(noteId);
  };

  return {
    editingNoteId,
    editedContent,
    setEditedContent,
    isDeletingNote,
    isUpdatingNote,
    handleEditNote,
    handleSaveNote,
    handleCancelEdit,
    handleDeleteNote,
  };
};