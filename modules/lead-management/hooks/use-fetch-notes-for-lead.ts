"use client";

import { useQuery } from "@tanstack/react-query";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { fetchNotesForLead } from "../services";

export const useFetchNotesForLead = (leadId: string) => {
  return useQuery({
    queryKey: REACT_QUERY_KEYS.NOTE(leadId),
    queryFn: () => fetchNotesForLead(leadId),
    enabled: !!leadId,
    staleTime: 1000 * 60 * 5,
  });
};
