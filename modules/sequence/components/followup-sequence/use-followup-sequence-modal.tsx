import { useState } from "react";
import { SequenceFormData } from "./followup-sequence.types";

export const useSequenceModal = (
  onClose: () => void,
  onNext: (data: SequenceFormData) => void
) => {
  const [formData, setFormData] = useState<SequenceFormData>({
    name: "",
    description: "",
    type: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.type) {
      onNext(formData);
    }
  };

  const handleClose = () => {
    setFormData({ name: "", description: "", type: "" });
    onClose();
  };

  const updateFormData = (updates: Partial<SequenceFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const isFormValid = formData.name.trim() && formData.type;

  return {
    formData,
    handleSubmit,
    handleClose,
    updateFormData,
    isFormValid,
  };
};
