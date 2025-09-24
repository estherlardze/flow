"use client";

import { useState } from "react";

export const useSequenceModals = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isBuilderModalOpen, setIsBuilderModalOpen] = useState(false);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  const openBuilderModal = () => setIsBuilderModalOpen(true);
  const closeBuilderModal = () => setIsBuilderModalOpen(false);

  const closeAllModals = () => {
    setIsCreateModalOpen(false);
    setIsBuilderModalOpen(false);
  };

  return {
    isCreateModalOpen,
    isBuilderModalOpen,
    openCreateModal,
    closeCreateModal,
    openBuilderModal,
    closeBuilderModal,
    closeAllModals,
  };
};
