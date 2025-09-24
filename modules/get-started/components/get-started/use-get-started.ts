"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema } from "./get-started.schema";
import { LeadFormData } from "./get-started.types";
import { useCreateLead } from "../../hooks/use-create-lead";

export function useGetStarted() {
  const form = useForm<LeadFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      preferred_contact_method: "",
      property_type: "",
      budget: "",
      location: "",
      lead_message: "",
    },
  });

  const { mutate: createLead, isPending } = useCreateLead(form);


  const onSubmit = async (data: LeadFormData) => {
    createLead(data);
  };

  return {
    form,
    isSubmitting: isPending,
    onSubmit,
  };
}
