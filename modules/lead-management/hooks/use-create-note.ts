"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { createNoteForLead } from "../services";
import { toast } from "sonner";

export const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ leadId, content }: { leadId: string; content: string }) =>
      createNoteForLead(leadId, content),

    onSuccess: (response, { leadId }) => {
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.NOTES,
      });
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.NOTE(leadId),
      })
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.LEAD(leadId),
      });

      toast.success("Note created successfully!", {
        description: response?.message ?? "Your new note has been added.",
      });
    },

    onError: () => {
      toast.error("Note creation failed", {
        description: "Please try again later.",
      });
    },
  });
};
