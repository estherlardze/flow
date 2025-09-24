"use client";

import { useQuery } from "@tanstack/react-query";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { fetchFollowUpsForLead } from "../services";

export const useFetchFollowUpsForLead = (leadId: string) => {
  return useQuery({
    queryKey: REACT_QUERY_KEYS.FOLLOW_UPS_BY_LEAD(leadId),
    queryFn: () => fetchFollowUpsForLead(leadId),
    enabled: Boolean(leadId),
    staleTime: 1000 * 60 * 5,
  });
};
