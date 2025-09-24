"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchLeadById } from "../services";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";

export const useFetchLeadById = (leadId: string) => {
  return useQuery({
    queryKey: REACT_QUERY_KEYS.LEAD(leadId),
    queryFn: () => fetchLeadById(leadId),
    enabled: Boolean(leadId),
    staleTime: 1000 * 60 * 5,
  });
};
