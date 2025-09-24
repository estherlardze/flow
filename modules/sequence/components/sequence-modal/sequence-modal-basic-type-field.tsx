import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { SequenceTypeFieldProps } from "./sequence-modal.types";

export function SequenceTypeField({ value, onChange }: Readonly<SequenceTypeFieldProps>) {
  return (
    <div className="space-y-2">
      <label htmlFor="sequence-type" className="text-sm font-medium text-gray-700">
        Sequence Type <span className="text-red-500">*</span>
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          className={cn(
            "w-full px-3 py-2 rounded-md text-sm font-medium border transition-all duration-200 cursor-pointer flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
            value
              ? "bg-blue-50 border-blue-200 text-blue-700"
              : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
          )}
        >
          <SelectValue placeholder="Select sequence type..." />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="email">Email Sequence</SelectItem>
          <SelectItem value="call">Call Sequence</SelectItem>
          <SelectItem value="sms">SMS Sequence</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
