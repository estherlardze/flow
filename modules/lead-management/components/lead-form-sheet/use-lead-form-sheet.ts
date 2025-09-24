"use client";

import { useEffect, useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, LeadFormValues } from "./lead-form-sheet.schema";

import { UseLeadFormSheetProps } from "./lead-form-sheet.types";
import { getResetValues } from "./lead-form-sheet.utils";
import { DEFAULT_VALUES } from "./lead-form-sheet.default";

export function useLeadFormSheet({
  mode,
  lead,
  onSave,
}: UseLeadFormSheetProps) {
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const resetValues = useMemo(
    () =>
      getResetValues(
        mode,
        lead
          ? {
              ...lead,
              preferred_contact_method:
                lead.preferred_contact_method as LeadFormValues["preferred_contact_method"],
              property_type:
                lead.property_type as LeadFormValues["property_type"],
              source:
                lead.source as LeadFormValues["source"],
            }
          : undefined
      ),
    [mode, lead]
  );

  useEffect(() => {
    form.reset(resetValues);
  }, [resetValues, form]);

  const onSubmit = useCallback(
    (data: LeadFormValues) => {
      onSave(data);
    },
    [onSave]
  );

  const handleCancel = useCallback(() => {
    form.reset(DEFAULT_VALUES);
  }, [form]);

  return {
    form,
    onSubmit,
    handleCancel,
  };
}
