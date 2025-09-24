"use client";

import { useState, useMemo } from "react";
import { SequenceListItem } from "./sequence-page-types";
import { filterSequences } from "./sequence-page-utils";

export const useSequenceFilters = (sequences: SequenceListItem[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredSequences = useMemo(() => {
    return filterSequences(sequences, searchQuery, filterStatus);
  }, [sequences, searchQuery, filterStatus]);

  return {
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
    filteredSequences,
  };
};
