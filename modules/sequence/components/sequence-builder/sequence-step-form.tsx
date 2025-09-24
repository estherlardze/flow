import { SequenceStepFormProps } from "./sequence-builder.types";
import { SequenceStepTimeline } from "./sequence-step-timeline";
import { SequenceStepContent } from "./sequence-step-content";


export function SequenceStepForm({
  step,
  isLastStep,
  onUpdate,
  onRemove,
}: Readonly<SequenceStepFormProps>) {
  return (
    <div className="relative flex items-start space-x-4 mb-8">
      <SequenceStepTimeline step={step} isLastStep={isLastStep} />
      <SequenceStepContent step={step} onUpdate={onUpdate} onRemove={onRemove} />
    </div>
  );
}
