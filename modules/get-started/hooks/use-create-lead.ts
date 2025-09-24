"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { createLead } from "../services";
import { toast } from "sonner";

import { UseFormReturn } from "react-hook-form";
import { LeadFormData } from "../components/get-started/get-started.types";

export const useCreateLead = (form?: UseFormReturn<LeadFormData>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createLead,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.LEADS,
      });
      toast.success("Lead submitted successfully!", {
        description: "We'll get back to you soon.",
      });
      form?.reset();
    },
    onError: () => {
      toast.error("Submission failed", {
        description: "Please try again later.",
      });
    },
  });
};
