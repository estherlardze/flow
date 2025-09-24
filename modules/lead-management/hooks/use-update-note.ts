"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateNote } from "../services";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { toast } from "sonner";

export const useUpdateNote = (leadId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ noteId, content }: { noteId: string; content: string }) =>
      updateNote(noteId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.NOTE(leadId),
      });
      toast.success("Note updated successfully!", {
        description: "The note content has been updated.",
      });
    },
    onError: () => {
      toast.error("Update failed", {
        description: "We couldn't update the note. Please try again.",
      });
    },
  });
};
