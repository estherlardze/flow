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

import { contactMethodOptions } from "./lead-form-sheet.utils";
import { ContactInfoSectionProps } from "./lead-form-sheet.types";

export const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ form }) => {
  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-black mb-1">Contact Information</h3>
        <p className="text-sm text-gray-600">Basic contact details for the lead</p>
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-black">First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter first name"
                    className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-black">Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter last name"
                    className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-black">Email Address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter email address"
                  className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-black">Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter phone number"
                  className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preferred_contact_method"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-black">Preferred Contact Method</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select contact method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  {contactMethodOptions.map((option) => (
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
      </div>
    </div>
  );
};