import { SequenceStepTimelineProps } from "./sequence-builder.types";
import { getActionIcon, getActionColor, getIconComponent } from "./sequence-builder.utils";

export function SequenceStepTimeline({ step, isLastStep }: Readonly<SequenceStepTimelineProps>) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${getActionColor(
          step.actionType
        )} border-2 border-white shadow-sm`}
      >
        {getIconComponent(getActionIcon(step.actionType))}
      </div>
      {!isLastStep && <div className="w-0.5 h-16 bg-gray-200 mt-2"></div>}
    </div>
  );
}
