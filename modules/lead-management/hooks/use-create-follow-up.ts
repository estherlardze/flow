"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { createLeadFollowUp } from "../services";
import { toast } from "sonner";

export const useCreateFollowUp = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      leadId,
      scheduled_at,
      message,
    }: {
      leadId: string;
      scheduled_at: Date;
      message: string;
    }) => createLeadFollowUp(leadId, scheduled_at, message),

    onSuccess: (response, { leadId }) => {
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.FOLLOW_UPS_BY_LEAD(leadId),
      });
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.LEAD(leadId),
      });

      toast.success("Follow up created successfully!", {
        description: response?.message ?? "Your follow up has been scheduled.",
      });
    },

    onError: () => {
      toast.error("Follow up creation failed", {
        description: "Please try again later.",
      });
    },
  });
};
