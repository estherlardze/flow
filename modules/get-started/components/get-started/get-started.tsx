"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { GetStartedContactInfo } from "./get-started-contact-info";

import { GetStartedPropertyDetails } from "./get-started-property-details";
import { GetStartedLeadDetails } from "./get-started-lead-details";
import { useGetStarted } from "./use-get-started";

export default function GetStarted() {
  const { form, isSubmitting, onSubmit } = useGetStarted();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-gray-100 mb-4">
            <div className="w-2 h-2 bg-[#4E53EE] rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">
              LeadFlow Agent
            </span>
          </div>
          <h1
            className="text-4xl font-light tracking-tight bg-gradient-to-r from-[#4E53EE]
          to-[#7C3AED] bg-clip-text text-transparent"
          >
            LeadFlow
          </h1>
          <p className="text-[#6B7280] text-sm mt-2 font-medium">
            Find your dream property with expert guidance
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 bg-white/70 backdrop-blur-sm rounded-2xl p-8
            shadow-xl border border-white/20"
          >
            <GetStartedContactInfo form={form} />

            <GetStartedPropertyDetails form={form} />

            <GetStartedLeadDetails form={form} />

            <Button
              type="submit"
              disabled={isSubmitting}
              isLoading={isSubmitting}
              loadingText="Submitting..."
              className="w-full h-12 bg-gradient-to-r from-[#4E53EE] to-[#7C3AED] hover:from-[#3d42d1] hover:to-[#6b21a8]
              text-white rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50
              disabled:cursor-not-allowed
              transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Submit
            </Button>
          </form>
        </Form>

        <div className="text-center mt-6">
          <p className="text-xs text-[#6B7280]">
            Powered by{" "}
            <span className="font-medium text-[#4E53EE]">sleekteq</span>
          </p>
        </div>
      </div>
    </div>
  );
}
