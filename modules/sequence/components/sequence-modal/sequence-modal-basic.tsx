"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSequenceModal } from "./sequence-modal-basic-hook";
import { SequenceNameField } from "./sequence-modal-basic-name-field";
import { SequenceDescriptionField } from "./sequence-modal-basic-description-field";

import { SequenceTypeField } from "./sequence-modal-basic-type-field";
import { LeadStatusField } from "./sequence-modal-basic-lead-status-field";
import { ModalActionButtons } from "./sequence-modal-basic-action-buttons";
import { CreateSequenceModalProps } from "./sequence-modal.types";

export function SequenceModal({
  isOpen,
  onClose,
  onNext,
}: Readonly<CreateSequenceModalProps>) {
  const { formData, updateFormData, handleSubmit, handleClose, isFormValid } =
    useSequenceModal(onClose, onNext);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        className="sm:max-w-md bg-white border-gray-200 animate-in fade-in-0 zoom-in-95 duration-200
      data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
      data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Create New Sequence
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <SequenceNameField
            value={formData.name}
            onChange={(value) => updateFormData("name", value)}
          />

          <SequenceDescriptionField
            value={formData.description || ""}
            onChange={(value) => updateFormData("description", value)}
          />

          <SequenceTypeField
            value={formData.type}
            onChange={(value) => updateFormData("type", value)}
          />

          <LeadStatusField
            value={formData.leadStatus || ""}
            onChange={(value) => updateFormData("leadStatus", value)}
          />

          <ModalActionButtons
            onCancel={handleClose}
            onSubmit={() => {}}
            isFormValid={isFormValid}
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
