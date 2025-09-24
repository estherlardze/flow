"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useCreateSequenceModal } from "./sequence-modal-create-hook";
import { CreateSequenceNameField } from "./sequence-modal-create-name-field";

import { CreateSequenceDescriptionField } from "./sequence-modal-create-description-field";
import { CreateSequenceTypeField } from "./sequence-modal-create-type-field";
import { CreateModalActionButtons } from "./sequence-modal-create-action-buttons";
import { CreateSequenceModalProps } from "./sequence-modal.types";


export function CreateSequenceModal({
  isOpen,
  onClose,
  onNext,
}: Readonly<CreateSequenceModalProps>) {
  const { form, onSubmit, handleClose } = useCreateSequenceModal(
    onClose,
    onNext
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Create New Sequence
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <CreateSequenceNameField control={form.control} />
            <CreateSequenceDescriptionField control={form.control} />
            <CreateSequenceTypeField control={form.control} />

            <CreateModalActionButtons
              onCancel={handleClose}
              isSubmitting={form.formState.isSubmitting}
            />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
