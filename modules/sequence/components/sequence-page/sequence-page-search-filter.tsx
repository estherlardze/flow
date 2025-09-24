"use client";

import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FILTER_OPTIONS } from "./sequence-page-utils";

import { SequenceSearchFilterProps } from "./sequence-page-types";

export function SequenceSearchFilter({
  searchQuery,
  onSearchChange,
  filterStatus,
  onFilterChange,
}: Readonly<SequenceSearchFilterProps>) {
  return (
    <div
      className="bg-white rounded-lg border border-gray-200 p-4 shadow-none animate-in fade-in-0
    slide-in-from-top-2 duration-300"
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
        <div className="w-full sm:w-80">
          <div className="relative group">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400
            group-focus-within:text-blue-500 transition-colors duration-200"
            />
            <Input
              placeholder="Search sequences..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
              bg-white hover:border-gray-300 hover:shadow-sm"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Filter className="h-5 w-5 text-gray-400" />
          <Select value={filterStatus} onValueChange={onFilterChange}>
            <SelectTrigger
              className="min-w-[120px] px-3 py-2 rounded-md text-sm font-medium border transition-all duration-200
            cursor-pointer flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border-gray-200
            text-gray-600 hover:border-gray-300 hover:bg-gray-50"
            >
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="min-w-[160px] rounded-md bg-white shadow-lg">
              {FILTER_OPTIONS.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="text-sm"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
