"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { createLeadTag } from "../services";
import { toast } from "sonner";

export const useCreateTag = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createLeadTag,
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.TAGS,
      });

      toast.success("Tag created successfully!", {
        description: response?.message ?? "Your new tag has been added.",
      });
    },
    onError: () => {
      toast.error("Tag creation failed", {
        description: "Please try again later.",
      });
    },
  });
};
