"use client";

import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { LeadDetailsSectionProps } from "./lead-form-sheet.types";
import { sourceOptions } from "../lead-management-filters/lead-management-filters.utils";

export const LeadDetailsSection: React.FC<LeadDetailsSectionProps> = ({
  form,
}) => {
  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-black mb-1">Lead Details</h3>
        <p className="text-sm text-gray-600">
          Additional information about this lead
        </p>
      </div>

      <div className="space-y-5">
        <FormField
          control={form.control}
          name="source"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-black">
                Lead Source <span className="text-red-500">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg">
                    <SelectValue placeholder="Select where this lead came from" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  {sourceOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lead_message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-black">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter any additional details about this lead..."
                  className="min-h-[120px] border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none rounded-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
