import { Input } from "@/components/ui/input";
import { SequenceNameFieldProps } from "./sequence-modal.types";

export function SequenceNameField({ value, onChange }: Readonly<SequenceNameFieldProps>) {
  return (
    <div className="space-y-2">
      <label htmlFor="sequence-name" className="text-sm font-medium text-gray-700">
        Sequence Name <span className="text-red-500">*</span>
      </label>
      <Input
        id="sequence-name"
        placeholder="Enter sequence name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        required
      />
    </div>
  );
}
