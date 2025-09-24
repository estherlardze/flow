"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLeadStatus } from "../services";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { toast } from "sonner";

export const useUpdateLeadStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ leadIds, status }: { leadIds: string[]; status: string }) =>
      updateLeadStatus(leadIds, status),

    onSuccess: (response, { leadIds }) => {
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.LEADS,
      });

      leadIds.forEach((leadId) => {
        queryClient.invalidateQueries({
          queryKey: REACT_QUERY_KEYS.LEAD(leadId),
        });
      });

      toast.success("Status updated successfully!", {
        description: response?.message ?? "Lead status has been updated.",
      });
    },

    onError: () => {
      toast.error("Update failed", {
        description: "We couldn't update the lead status. Please try again.",
      });
    },
  });
};
