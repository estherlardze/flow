"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { toast } from "sonner";
import { deleteLeadTag } from "../services";

export const useDeleteTag = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tagId: string) => deleteLeadTag(tagId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.TAGS,
      });
      queryClient.invalidateQueries({
        queryKey: REACT_QUERY_KEYS.LEADS,
      });
      toast.success("Tag deleted successfully!", {
        description: "The tag has been removed.",
      });
    },
    onError: () => {
      toast.error("Delete failed", {
        description: "We couldn't remove the tag. Please try again.",
      });
    },
  });
};
