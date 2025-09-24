"use client";

import { useState } from "react";
import { SequenceListItem, SequenceFormData, SequenceBuilderData } from "./sequence-page-types";
import { mockSequences, createNewSequence, updateExistingSequence, duplicateSequence, toggleSequenceStatus } from "./sequence-page-utils";

export const useSequenceManagement = () => {
  const [sequences, setSequences] = useState<SequenceListItem[]>(mockSequences);
  const [editingSequence, setEditingSequence] =
    useState<SequenceListItem | null>(null);
  const [currentFormData, setCurrentFormData] =
    useState<SequenceFormData | null>(null);

  const handleCreateSequence = (formData: SequenceFormData) => {
    setCurrentFormData(formData);
  };

  const handleBuilderSave = (builderData: SequenceBuilderData) => {
    if (currentFormData) {
      const newSequence = createNewSequence(builderData, currentFormData);
      setSequences((prev) => [...prev, newSequence]);
      setCurrentFormData(null);
    }
  };

  const handleEditSequence = (sequenceId: string, openModal?: () => void) => {
    const sequence = sequences.find((s) => s.id === sequenceId);
    if (sequence) {
      setEditingSequence(sequence);
      if (openModal) {
        openModal();
      }
    }
  };

  const handleUpdateSequence = (builderData: SequenceBuilderData) => {
    if (editingSequence) {
      const updatedSequence = updateExistingSequence(
        editingSequence,
        builderData
      );
      setSequences((prev) =>
        prev.map((s) => (s.id === editingSequence.id ? updatedSequence : s))
      );
      setEditingSequence(null);
    }
  };

  const handleDuplicateSequence = (sequenceId: string) => {
    const sequence = sequences.find((s) => s.id === sequenceId);
    if (sequence) {
      const duplicatedSequence = duplicateSequence(sequence);
      setSequences((prev) => [...prev, duplicatedSequence]);
    }
  };

  const handleDeleteSequence = (sequenceId: string) => {
    setSequences((prev) => prev.filter((s) => s.id !== sequenceId));
  };

  const handleToggleStatus = (sequenceId: string) => {
    setSequences((prev) =>
      prev.map((s) => (s.id === sequenceId ? toggleSequenceStatus(s) : s))
    );
  };

  const resetStates = () => {
    setEditingSequence(null);
    setCurrentFormData(null);
  };

  return {
    sequences,
    editingSequence,
    currentFormData,
    handleCreateSequence,
    handleBuilderSave,
    handleEditSequence,
    handleUpdateSequence,
    handleDuplicateSequence,
    handleDeleteSequence,
    handleToggleStatus,
    resetStates,
  };
};
