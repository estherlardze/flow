import { Textarea } from "@/components/ui/textarea";
import { SequenceDescriptionFieldProps } from "./sequence-modal.types";

export function SequenceDescriptionField({ value, onChange }: Readonly<SequenceDescriptionFieldProps>) {
  return (
    <div className="space-y-2">
      <label htmlFor="sequence-description" className="text-sm font-medium text-gray-700">
        Description <span className="text-gray-500">(optional)</span>
      </label>
      <Textarea
        id="sequence-description"
        placeholder="Describe your sequence..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[120px] resize-none"
        rows={5}
      />
    </div>
  );
}
