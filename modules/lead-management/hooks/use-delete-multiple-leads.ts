"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMultipleLeads } from "../services";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { toast } from "sonner";

export const useDeleteMultipleLeads = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (leadIds: string[]) => deleteMultipleLeads(leadIds),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.LEADS,
      });
      toast.success("Leads deleted successfully!", {
        description: data?.message ?? "The selected leads have been removed.",
      });
    },
    onError: () => {
      toast.error("Delete failed", {
        description: "We couldn't remove the selected leads. Please try again.",
      });
    },
  });
};
