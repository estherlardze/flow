import { useState, useEffect } from "react";
import {
  SequenceBuilderData,
  SequenceStep,
  SequenceBuilderModalProps,
} from "./sequence-builder.types";

export const useSequenceBuilder = ({
  isOpen,
  onClose,
  onSave,
  initialData,
  existingSteps,
  leadSelection,
}: SequenceBuilderModalProps) => {
  const [steps, setSteps] = useState<SequenceStep[]>(() => {
    if (existingSteps && existingSteps.length > 0) {
      return existingSteps.map((step, index) => ({
        ...step,
        title:
          step.title ||
          `${
            step.actionType.charAt(0).toUpperCase() + step.actionType.slice(1)
          } #${index + 1}`,
      }));
    }
    return [
      {
        id: "1",
        title: "Email #1",
        actionType: "email",
        content: "",
        delay: { value: 0, unit: "days" },
      },
    ];
  });

  useEffect(() => {
    if (isOpen) {
      if (existingSteps && existingSteps.length > 0) {
        setSteps(
          existingSteps.map((step, index) => ({
            ...step,
            title:
              step.title ||
              `${
                step.actionType.charAt(0).toUpperCase() +
                step.actionType.slice(1)
              } #${index + 1}`,
          }))
        );
      } else {
        setSteps([
          {
            id: "1",
            title: "Email #1",
            actionType: "email",
            content: "",
            delay: { value: 0, unit: "days" },
          },
        ]);
      }
    }
  }, [isOpen, existingSteps]);

  const addStep = () => {
    const newStepNumber = steps.length + 1;
    const newStep: SequenceStep = {
      id: Date.now().toString(),
      title: `Email #${newStepNumber}`,
      actionType: "email",
      content: "",
      delay: { value: 2, unit: "days" },
    };
    setSteps([...steps, newStep]);
  };

  const removeStep = (stepId: string) => {
    if (steps.length > 1) {
      setSteps(steps.filter((step) => step.id !== stepId));
    }
  };

  const updateStep = (stepId: string, updates: Partial<SequenceStep>) => {
    setSteps(
      steps.map((step) => (step.id === stepId ? { ...step, ...updates } : step))
    );
  };

  const handleSave = () => {
    const sequenceData: SequenceBuilderData = {
      basicInfo: initialData,
      steps,
      leadSelection: leadSelection || {
        selectionType: "all",
        criteria: { type: "all" },
      },
    };
    onSave(sequenceData);
    onClose();
  };

  return {
    steps,
    addStep,
    removeStep,
    updateStep,
    handleSave,
  };
};
