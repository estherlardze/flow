"use client";

import React from "react";
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
import { ContactInfoProps } from "./get-started.types";

export function GetStartedContactInfo({ form }: ContactInfoProps) {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-100 pb-2">
        <h2 className="text-lg font-semibold text-[#101014] flex items-center gap-2">
          <div className="w-1 h-4 bg-gradient-to-b from-[#4E53EE] to-[#7C3AED] rounded-full"></div>
          Contact Info
        </h2>
        <p className="text-xs text-[#6B7280] mt-1">Tell us how to reach you</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#101014]">
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="John"
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
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#101014]">
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Doe"
                    className="h-11 rounded-xl border-gray-200 focus:border-[#4E53EE] focus:ring-[#4E53EE] transition-all duration-200"
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
              <FormLabel className="text-sm font-medium text-[#101014]">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="john@example.com"
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
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-[#101014]">
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
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
          name="preferred_contact_method"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-[#101014]">
                Preferred Contact Method
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full h-11 rounded-xl border-gray-200 focus:border-[#4E53EE] focus:ring-[#4E53EE] transition-all duration-200">
                    <SelectValue placeholder="Select contact method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
