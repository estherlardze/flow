import { useState } from "react";
import { SequenceFormData } from "../followup-sequence/followup-sequence.types";

export const useSequenceModal = (
  onClose: () => void,
  onNext: (data: SequenceFormData) => void
) => {
  const [formData, setFormData] = useState<SequenceFormData>({
    name: "",
    description: "",
    type: "",
    leadStatus: "",
  });

  const updateFormData = (field: keyof SequenceFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.name.trim() && formData.type) {
      onNext(formData);
      resetForm();
    }
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setFormData({ name: "", description: "", type: "", leadStatus: "" });
  };

  const isFormValid = Boolean(formData.name.trim() && formData.type);

  return {
    formData,
    updateFormData,
    handleSubmit,
    handleClose,
    isFormValid,
  };
};
