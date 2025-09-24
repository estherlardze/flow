"use client";

import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { propertyTypeOptions } from "./lead-form-sheet.utils";
import { PropertyDetailsSectionProps } from "./lead-form-sheet.types";

export const PropertyDetailsSection: React.FC<PropertyDetailsSectionProps> = ({
  form,
}) => {
  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-black mb-1">
          Property Details
        </h3>
        <p className="text-sm text-gray-600">
          Information about the property they're interested in
        </p>
      </div>

      <div className="space-y-5">
        <FormField
          control={form.control}
          name="property_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-black">
                Property Type
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  {propertyTypeOptions.map((option) => (
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

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-black">
                  Budget ($)
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter budget"
                    className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
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
                <FormLabel className="text-sm font-medium text-black">
                  Location
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter location"
                    className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
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
};
