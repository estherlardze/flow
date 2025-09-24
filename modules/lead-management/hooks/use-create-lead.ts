"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { createLead } from "../services";
import { toast } from "sonner";
import { LeadFormData } from "../components/lead-form-sheet/lead-form-sheet.types";

export const useCreateLead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LeadFormData) => createLead(data),
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.LEADS,
      });
      
      toast.success("Lead created successfully!", {
        description: response?.message ?? "Your new lead has been added.",
      });
    },
    onError: () => {
      toast.error("Lead creation failed", {
        description: "Please try again later.",
      });
    },
  });
};