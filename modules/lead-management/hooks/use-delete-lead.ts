"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLead } from "../services";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { toast } from "sonner";

export const useDeleteLead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (leadId: string) => deleteLead(leadId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.LEADS,
      });
      toast.success("Lead deleted successfully!", {
        description: "The lead has been removed.",
      });
    },
    onError: () => {
      toast.error("Delete failed", {
        description: "We couldn't remove the lead. Please try again.",
      });
    },
  });
};
