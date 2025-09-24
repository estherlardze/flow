"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLead } from "../services";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { toast } from "sonner";

import { LeadFormData } from "../components/lead-form-sheet/lead-form-sheet.types";

export const useUpdateLead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ leadId, data }: { leadId: string; data: LeadFormData }) =>
      updateLead(leadId, data),

    onSuccess: (response, { leadId}) => {
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.LEADS,
      });

       queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.LEAD(leadId),
      });

      toast.success("Lead updated successfully!", {
        description:
          response?.message ?? "The lead information has been saved.",
      });
    },

    onError: () => {
      toast.error("Update failed", {
        description: "We couldn't update the lead. Please try again.",
      });
    },
  });
};
