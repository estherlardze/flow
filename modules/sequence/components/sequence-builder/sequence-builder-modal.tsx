"use client";

import { Plus, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SequenceBuilderModalProps } from "./sequence-builder.types";

import { useSequenceBuilder } from "./use-sequence-builder";
import { SequenceStepForm } from "./sequence-step-form";

export function SequenceBuilderModal({
  isOpen,
  onClose,
  onSave,
  initialData,
  existingSteps,
  leadSelection,
}: Readonly<SequenceBuilderModalProps>) {
  const { steps, addStep, removeStep, updateStep, handleSave } =
    useSequenceBuilder({
      isOpen,
      onClose,
      onSave,
      initialData,
      existingSteps,
      leadSelection,
    });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-gray-200 animate-in fade-in-0
      zoom-in-95 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 
      data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Build Your Sequence
          </DialogTitle>
          <p className="text-gray-600 mt-1">
            {initialData.name} -{" "}
            {initialData.type.charAt(0).toUpperCase() +
              initialData.type.slice(1)}{" "}
            Sequence
          </p>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          <div className="relative">
            {steps.map((step, index) => (
              <SequenceStepForm
                key={step.id}
                step={step}
                isLastStep={index === steps.length - 1}
                onUpdate={updateStep}
                onRemove={removeStep}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={addStep}
              variant="outline"
              className="border-blue-500 text-blue-600 hover:bg-blue-50"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Step
            </Button>
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3 space-y-3 space-y-reverse sm:space-y-0 pt-6 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              className="w-full sm:w-auto bg-blue-700 hover:bg-blue-600 text-white"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Sequence
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
