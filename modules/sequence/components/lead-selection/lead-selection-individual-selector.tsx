import { User } from "lucide-react";
import { Label } from "@/components/ui/label";

export function IndividualSelector() {
  return (
    <div className="space-y-2">
      <Label>Individual Lead Selection</Label>
      <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
        <User className="h-8 w-8 text-gray-400 mx-auto mb-2" />
        <p className="text-sm text-gray-600">
          Individual lead selection will be implemented in the next step
        </p>
        <p className="text-xs text-gray-500 mt-1">
          This will allow you to pick specific leads from a searchable list
        </p>
      </div>
    </div>
  );
}
