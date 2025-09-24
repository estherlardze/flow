"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface PropertyDetailsProps {
  form: UseFormReturn<any>;
}

export function GetStartedPropertyDetails({ form }: PropertyDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-100 pb-2">
        <h2 className="text-lg font-semibold text-[#101014] flex items-center gap-2">
          <div className="w-1 h-4 bg-gradient-to-b from-[#4E53EE] to-[#7C3AED] rounded-full"></div>
          Property Details
        </h2>
        <p className="text-xs text-[#6B7280] mt-1">What are you looking for?</p>
      </div>

      <div className="space-y-4">
        <FormField
          control={form.control}
          name="property_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-[#101014]">
                Property Type
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full h-11 rounded-xl border-gray-200 focus:border-[#4E53EE] focus:ring-[#4E53EE] transition-all duration-200">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#101014]">
                  Budget ($)
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="500000"
                    className="h-11 rounded-xl border-gray-200 focus:border-[#4E53EE] focus:ring-[#4E53EE] transition-all duration-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#101014]">
                  Location
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="City, State"
                    className="h-11 rounded-xl border-gray-200 focus:border-[#4E53EE] focus:ring-[#4E53EE] transition-all duration-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}