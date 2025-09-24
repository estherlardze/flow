"use client";

import { useState } from "react";
import { UseChangeStatusModalProps } from "./change-status-modal.types";

export function useChangeStatusModal({
  onUpdateStatus,
  initialStatus = "",
}: UseChangeStatusModalProps) {
  const [selectedStatus, setSelectedStatus] = useState(initialStatus);

  const handleSave = () => {
    if (selectedStatus) {
      onUpdateStatus(selectedStatus);
    }
  };

  const handleCancel = () => {
    setSelectedStatus(initialStatus);
  };

  return {
    selectedStatus,
    setSelectedStatus,
    handleSave,
    handleCancel,
  };
}
