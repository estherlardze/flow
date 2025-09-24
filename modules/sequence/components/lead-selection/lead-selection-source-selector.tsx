import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatDisplayText } from "./lead-selection.utils";
import { SourceSelectorProps } from "./lead-selection.types";

export function SourceSelector({
  selectedSource,
  onSourceChange,
  availableSources,
}: Readonly<SourceSelectorProps>) {
  return (
    <div className="space-y-2">
      <Label htmlFor="source-select">Select Source</Label>
      <Select value={selectedSource} onValueChange={onSourceChange}>
        <SelectTrigger>
          <SelectValue placeholder="Choose lead source..." />
        </SelectTrigger>
        <SelectContent>
          {availableSources.map((source) => (
            <SelectItem key={source} value={source}>
              {formatDisplayText(source)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
