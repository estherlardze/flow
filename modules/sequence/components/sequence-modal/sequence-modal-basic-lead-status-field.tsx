import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { LeadStatusFieldProps } from "./sequence-modal.types";

export function LeadStatusField({ value, onChange }: Readonly<LeadStatusFieldProps>) {
  return (
    <div className="space-y-2">
      <label htmlFor="lead-status" className="text-sm font-medium text-gray-700">
        Target Lead Status <span className="text-gray-500">(optional)</span>
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
          <SelectValue placeholder="Select lead status to target..." />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="new">New Leads</SelectItem>
          <SelectItem value="contacted">Contacted Leads</SelectItem>
          <SelectItem value="qualified">Qualified Leads</SelectItem>
          <SelectItem value="converted">Converted Leads</SelectItem>
          <SelectItem value="won">Won Leads</SelectItem>
          <SelectItem value="lost">Lost Leads</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-xs text-gray-500">
        The sequence will be attached to all leads with this status. Leave empty to select manually later.
      </p>
    </div>
  );
}
