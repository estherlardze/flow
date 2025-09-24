"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateFollowUp } from "../services";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { toast } from "sonner";

import { FollowUp } from "../services/types";

export const useUpdateFollowUp = (leadId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      followUpId,
      data,
    }: {
      followUpId: string;
      data: Partial<Pick<FollowUp, "message" | "scheduled_at" | "status" | "type">>;
    }) => updateFollowUp(followUpId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.FOLLOW_UPS_BY_LEAD(leadId),
      });
      toast.success("Follow-up updated successfully!", {
        description: "The follow-up has been updated.",
      });
    },
    onError: () => {
      toast.error("Update failed", {
        description: "We couldn't update the follow-up. Please try again.",
      });
    },
  });
};