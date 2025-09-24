import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sequenceFormSchema, SequenceFormValues } from "./sequence-modal-create-schema";
import { SequenceFormData } from "../followup-sequence/followup-sequence.types";

export const useCreateSequenceModal = (
  onClose: () => void,
  onNext: (data: SequenceFormData) => void
) => {
  const form = useForm<SequenceFormValues>({
    resolver: zodResolver(sequenceFormSchema),
    defaultValues: {
      name: "",
      description: "",
      type: undefined,
    },
  });

  const onSubmit = (data: SequenceFormValues) => {
    onNext(data as SequenceFormData);
    form.reset();
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return {
    form,
    onSubmit,
    handleClose,
  };
};
