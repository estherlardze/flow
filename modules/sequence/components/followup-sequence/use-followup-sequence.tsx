import { useState } from "react";
import { SequenceFormData } from "./followup-sequence.types";
import { SequenceBuilderData } from "../sequence-builder/sequence-builder.types";

export const useFollowupSequence = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [sequenceBasicData, setSequenceBasicData] = useState<SequenceFormData | null>(null);

  const handleNewSequence = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSequenceCreate = (formData: SequenceFormData) => {
    setSequenceBasicData(formData);
    setIsModalOpen(false);
    setIsBuilderOpen(true);
  };

  const handleBuilderSave = (builderData: SequenceBuilderData) => {
    // Sequence saving logic will be implemented here
    setIsBuilderOpen(false);
    setSequenceBasicData(null);
  };

  const handleBuilderClose = () => {
    setIsBuilderOpen(false);
    setSequenceBasicData(null);
  };

  const handleEditSequence = (sequenceId: string) => {
    // Edit logic will be implemented here
  };

  const handleDuplicateSequence = (sequenceId: string) => {
    // Duplicate logic will be implemented here
  };

  const handleDeleteSequence = (sequenceId: string) => {
    // Delete logic will be implemented here
  };

  const handleToggleStatus = (sequenceId: string) => {
    // Toggle status logic will be implemented here
  };

  return {
    // State
    searchQuery,
    filterStatus,
    isModalOpen,
    isBuilderOpen,
    sequenceBasicData,

    // State setters
    setSearchQuery,
    setFilterStatus,

    // Handlers
    handleNewSequence,
    handleModalClose,
    handleSequenceCreate,
    handleBuilderSave,
    handleBuilderClose,
    handleEditSequence,
    handleDuplicateSequence,
    handleDeleteSequence,
    handleToggleStatus,
  };
};
