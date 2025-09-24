"use client";

import { useQuery } from "@tanstack/react-query";
import { REACT_QUERY_KEYS } from "@/lib/react-query-keys";
import { fetchLeadTags } from "../services";

export const useFetchTags = () => {
  return useQuery({
    queryKey: REACT_QUERY_KEYS.TAGS,
    queryFn: fetchLeadTags,
    staleTime: 1000 * 60 * 5,
  });
};
