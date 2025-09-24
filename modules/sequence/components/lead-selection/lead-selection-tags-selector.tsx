import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { formatDisplayText } from "./lead-selection.utils";

import { TagsSelectorProps } from "./lead-selection.types";

export function TagsSelector({
  selectedTags,
  onTagToggle,
  availableTags,
}: Readonly<TagsSelectorProps>) {
  return (
    <div className="space-y-3">
      <Label>Select Tags</Label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {availableTags.map((tag) => (
          <div key={tag} className="flex items-center space-x-2">
            <Checkbox
              id={tag}
              checked={selectedTags.includes(tag)}
              onChange={() => onTagToggle(tag)}
            />
            <Label htmlFor={tag} className="text-sm cursor-pointer">
              {formatDisplayText(tag)}
            </Label>
          </div>
        ))}
      </div>
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedTags.map((tag) => (
            <Badge
              key={tag}
              variant="default"
              className="text-xs bg-blue-100 text-blue-800"
            >
              {formatDisplayText(tag)}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
