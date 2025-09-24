"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "../services";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { toast } from "sonner";

export const useDeleteNote = (leadId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (noteId: string) => deleteNote(noteId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.NOTE(leadId),
      });
      toast.success("Note deleted successfully!", {
        description: "The note has been removed.",
      });
    },
    onError: () => {
      toast.error("Delete failed", {
        description: "We couldn't remove the note. Please try again.",
      });
    },
  });
};
