import { Users, Filter, Tag, User } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectionTypeSelectorProps } from "./lead-selection.types";

export function SelectionTypeSelector({
  selectionType,
  onSelectionTypeChange,
}: Readonly<SelectionTypeSelectorProps>) {
  return (
    <div className="space-y-4">
      <Label className="text-base font-medium">Selection Method</Label>
      <Select value={selectionType} onValueChange={onSelectionTypeChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Choose how to select leads..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              All Leads
            </div>
          </SelectItem>
          <SelectItem value="status">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              By Status
            </div>
          </SelectItem>
          <SelectItem value="source">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              By Source
            </div>
          </SelectItem>
          <SelectItem value="tags">
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              By Tags
            </div>
          </SelectItem>
          <SelectItem value="individual">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Individual Leads
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
