"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface LeadDetailsProps {
  form: UseFormReturn<any>;
}

export function GetStartedLeadDetails({ form }: LeadDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-100 pb-2">
        <h2 className="text-lg font-semibold text-[#101014] flex items-center gap-2">
          <div className="w-1 h-4 bg-gradient-to-b from-[#4E53EE] to-[#7C3AED] rounded-full"></div>
          Lead Details
        </h2>
        <p className="text-xs text-[#6B7280] mt-1">Any additional information?</p>
      </div>

      <FormField
        control={form.control}
        name="lead_message"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium text-[#101014]">
              Message
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tell us more about your requirements, timeline, or any specific preferences..."
                className="min-h-[100px] rounded-xl border-gray-200 focus:border-[#4E53EE] focus:ring-[#4E53EE] transition-all duration-200 resize-none"
                rows={4}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}