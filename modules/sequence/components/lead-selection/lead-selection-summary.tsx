import { CheckCircle } from "lucide-react";
import { SelectionSummaryProps } from "./lead-selection.types";
import { getSelectionSummary } from "./lead-selection.utils";

export function SelectionSummary({
  selectionType,
  selectedStatus,
  selectedSource,
  selectedTags,
}: Readonly<SelectionSummaryProps>) {
  const summary = getSelectionSummary(
    selectionType,
    selectedStatus,
    selectedSource,
    selectedTags
  );

  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <CheckCircle className="h-4 w-4 text-blue-600" />
        <span className="text-sm font-medium text-blue-900">
          Selection Summary
        </span>
      </div>
      <p className="text-sm text-blue-800">{summary}</p>
    </div>
  );
}
