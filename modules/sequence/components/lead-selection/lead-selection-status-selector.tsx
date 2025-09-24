import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StatusSelectorProps } from "./lead-selection.types";

export function StatusSelector({
  selectedStatus,
  onStatusChange,
  availableStatuses,
}: Readonly<StatusSelectorProps>) {
  return (
    <div className="space-y-2">
      <Label htmlFor="status-select">Select Status</Label>
      <Select value={selectedStatus} onValueChange={onStatusChange}>
        <SelectTrigger>
          <SelectValue placeholder="Choose lead status..." />
        </SelectTrigger>
        <SelectContent>
          {availableStatuses.map((status) => (
            <SelectItem key={status} value={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
