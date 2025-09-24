"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLeadTag } from "../services";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { toast } from "sonner";

export const useUpdateLeadTag = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ tagId, tag }: { tagId: string; tag: string }) =>
      updateLeadTag(tagId, tag),

    onSuccess: (response, { tagId }) => {
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.TAGS,
      });

      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.TAG(tagId),
      });

      toast.success("Tag updated successfully!", {
        description: response?.message ?? "The tag has been updated.",
      });
    },

    onError: () => {
      toast.error("Update failed", {
        description: "We couldn't update the tag. Please try again.",
      });
    },
  });
};
