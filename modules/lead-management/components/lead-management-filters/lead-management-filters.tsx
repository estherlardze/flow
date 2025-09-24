"use client";

import { useState, useCallback, useMemo } from "react";
import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useFetchTags } from "../../hooks/use-fetch-tags";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  statusOptions,
  sourceOptions,
  budgetOptions,
} from "./lead-management-filters.utils";

export function LeadManagementFilters({
  onSearchChange,
  onStatusChange,
  onSourceChange,
  onBudgetChange,
  onTagChange,
}: {
  onSearchChange?: (query: string) => void;
  onStatusChange?: (status: string) => void;
  onSourceChange?: (source: string) => void;
  onBudgetChange?: (budget: string) => void;
  onTagChange?: (tag: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [budgetFilter, setBudgetFilter] = useState("all");
  const [tagFilter, setTagFilter] = useState("all");

  const { data: tagsResponse } = useFetchTags();

  const tagOptions = useMemo(() => {
    const defaultOptions = [{ value: "all", label: "All Tags" }];

    if (
      !tagsResponse ||
      typeof tagsResponse !== "object" ||
      !("success" in tagsResponse)
    ) {
      return defaultOptions;
    }

    if (!tagsResponse.success || !tagsResponse.data?.rows) {
      return defaultOptions;
    }

    return [
      ...defaultOptions,
      ...tagsResponse.data.rows.map((tag: any) => ({
        value: tag.$id,
        label: tag.text,
      })),
    ];
  }, [tagsResponse]);

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchQuery(value);
      onSearchChange?.(value);
    },
    [onSearchChange]
  );

  const handleStatusChange = useCallback(
    (value: string) => {
      setStatusFilter(value);
      onStatusChange?.(value);
    },
    [onStatusChange]
  );

  const handleSourceChange = useCallback(
    (value: string) => {
      setSourceFilter(value);
      onSourceChange?.(value);
    },
    [onSourceChange]
  );

  const handleBudgetChange = useCallback(
    (value: string) => {
      setBudgetFilter(value);
      onBudgetChange?.(value);
    },
    [onBudgetChange]
  );

  const handleTagChange = useCallback(
    (value: string) => {
      setTagFilter(value);
      onTagChange?.(value);
    },
    [onTagChange]
  );

  return (
    <Card className="p-4 bg-white border border-blue-200 shadow mt-5 mb-10">
      <div className="flex items-center justify-between gap-3 ">
        <div className="w-80 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search by name, email or phone..."
            className="pl-10 pr-4 h-9 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500
            focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <Select value={statusFilter} onValueChange={handleStatusChange}>
            <SelectTrigger
              className="h-11 bg-white border border-gray-300 rounded-md text-gray-900 focus:ring-2
              focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            >
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
              {statusOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="text-gray-900"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sourceFilter} onValueChange={handleSourceChange}>
            <SelectTrigger
              className="h-11 bg-white border border-gray-300 rounded-md text-gray-900
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            >
              <SelectValue placeholder="Source" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
              {sourceOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="text-gray-900"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={budgetFilter} onValueChange={handleBudgetChange}>
            <SelectTrigger
              className="h-11 bg-white border border-gray-300 rounded-md text-gray-900
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            >
              <SelectValue placeholder="Budget" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
              {budgetOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="text-gray-900"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={tagFilter} onValueChange={handleTagChange}>
            <SelectTrigger
              className="h-11 bg-white border border-gray-300 rounded-md text-gray-900
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            >
              <SelectValue placeholder="Tags" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
              {tagOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="text-gray-900"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
}
