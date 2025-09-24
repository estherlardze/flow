"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchLeads } from "../services";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";

export const useFetchLeads = (isGlobalExport?: boolean) => {
  return useQuery({
    queryKey: REACT_QUERY_KEYS.LEADS,
    queryFn: fetchLeads,
    enabled: isGlobalExport,
    staleTime: 1000 * 60 * 5,
  });
};
