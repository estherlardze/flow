"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { assignTagToLead } from "../services";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { toast } from "sonner";

export const useAssignTagToLead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ leadId, tagId }: { leadId: string; tagId: string }) =>
      assignTagToLead(leadId, tagId),

    onSuccess: (response, { leadId }) => {
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.LEAD(leadId),
      });

      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.LEADS,
      });

      toast.success("Tag assigned successfully!", {
        description: response?.message ?? "The lead has been tagged.",
      });
    },

    onError: () => {
      toast.error("Tag assignment failed", {
        description: "We couldn't assign the tag. Please try again.",
      });
    },
  });
};
