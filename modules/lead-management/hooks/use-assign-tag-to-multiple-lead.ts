"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { assignTagToMultipleLeads } from "../services";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { toast } from "sonner";

export const useAssignTagToMultipleLeads = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ leadIds, tagId }: { leadIds: string[]; tagId: string }) =>
      assignTagToMultipleLeads(leadIds, tagId),

    onSuccess: (response, { leadIds }) => {
      leadIds.forEach((leadId) => {
        queryClient.invalidateQueries({
          queryKey: REACT_QUERY_KEYS.LEAD(leadId),
        });
      });

      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.LEADS,
      });

      toast.success("Tags assigned successfully!", {
        description: response?.message ?? "Selected leads have been tagged.",
      });
    },

    onError: () => {
      toast.error("Tag assignment failed", {
        description:
          "We couldn't assign the tag to the selected leads. Please try again.",
      });
    },
  });
};
