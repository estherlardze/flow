"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { LeadFormSheetProps } from "./lead-form-sheet.types";
import { ContactInfoSection } from "./contact-info-section";
import { PropertyDetailsSection } from "./property-details-section";
import { LeadDetailsSection } from "./lead-details-section";

import { useLeadFormSheet } from "./use-lead-form-sheet";

export default function LeadFormSheet({
  mode,
  lead,
  onSave,
  trigger,
  isLoading,
  isUpdatingLead,
}: LeadFormSheetProps) {
  const { form, onSubmit, handleCancel } = useLeadFormSheet({
    mode,
    lead,
    onSave,
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <Button variant="outline" size="sm">
            {mode === "create" ? "Add Lead" : "Edit Lead"}
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="sm:max-w-[650px] overflow-y-auto p-0 custom-scrollbar">
        <div className="flex flex-col h-full">
          <SheetHeader className="px-6 py-4 border-b border-gray-100 bg-white">
            <SheetTitle className="text-xl font-semibold text-black">
              {mode === "create" ? "Add New Lead" : "Edit Lead"}
            </SheetTitle>
            <SheetDescription className="text-gray-600 mt-1">
              {mode === "create"
                ? "Fill in the details to create a new lead."
                : "Update the lead information below."}
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <ContactInfoSection form={form} />
                <PropertyDetailsSection form={form} />
                <LeadDetailsSection form={form} />
              </form>
            </Form>
          </div>

          <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
            <div className="flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                className="px-6 hover:bg-gray-50 border-gray-300"
              >
                Clear Form
              </Button>
              <Button
                isLoading={isLoading || isUpdatingLead}
                disabled={isLoading || isUpdatingLead}
                loadingText={mode === "create" ? "Adding..." : "Saving..."}
                type="button"
                onClick={form.handleSubmit(onSubmit)}
                className="px-6 bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
              >
                {mode === "create" ? "Add Lead" : "Save Changes"}
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
