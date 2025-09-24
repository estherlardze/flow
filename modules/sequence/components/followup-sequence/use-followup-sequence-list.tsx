import { useState } from "react";
import { SequenceFormData } from "./followup-sequence.types";

export const useFollowupSequenceList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateSequence = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleNext = (formData: SequenceFormData) => {
    console.log("Creating sequence:", formData);
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    handleCreateSequence,
    handleModalClose,
    handleNext,
  };
};
