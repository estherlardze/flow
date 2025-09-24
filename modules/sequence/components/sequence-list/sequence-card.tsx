import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SequenceCardProps } from "./sequence-list.types";
import {
  getTypeIcon,
  getTypeColor,
  getStatusColor,
  formatTypeLabel,
  formatDate,
  getLeadSelectionLabel,
} from "./sequence-list.utils";
import { SequenceCardActions } from "./sequence-card-actions";
import { SequenceCardDropdown } from "./sequence-card-dropdown";

export function SequenceCard({
  sequence,
  index,
  onEdit,
  onDuplicate,
  onDelete,
  onToggleStatus,
}: Readonly<SequenceCardProps>) {
  return (
    <Card
      className="group hover:shadow-lg transition-all duration-300 border border-gray-200
      hover:border-gray-300 bg-white animate-in fade-in-0 slide-in-from-bottom-4"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors mb-2">
              {sequence.name}
            </h3>
            {sequence.description && (
              <p className="text-sm text-gray-600 mt-1 line-clamp-2 leading-relaxed">
                {sequence.description}
              </p>
            )}
          </div>
          <SequenceCardDropdown
            sequenceId={sequence.id}
            status={sequence.status}
            onEdit={onEdit}
            onDuplicate={onDuplicate}
            onDelete={onDelete}
            onToggleStatus={onToggleStatus}
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge
            variant="default"
            className={`flex items-center gap-1.5 border ${getTypeColor(
              sequence.type
            )}`}
          >
            {getTypeIcon(sequence.type)}
            {formatTypeLabel(sequence.type)}
          </Badge>
          <div className="flex items-center gap-2">
            <Badge
              variant="default"
              className={`border ${getStatusColor(sequence.status)}`}
            >
              {sequence.status === "active" ? "Active" : "Draft"}
            </Badge>
            <Badge
              variant="default"
              className="text-xs border-gray-300 bg-gray-50 text-gray-700"
            >
              {getLeadSelectionLabel(sequence.leadSelection.selectionType)}
            </Badge>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Steps</span>
          <span className="font-medium text-gray-900">
            {sequence.stepsCount} {sequence.stepsCount === 1 ? "step" : "steps"}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Target Leads</span>
          <span className="font-medium text-gray-900">
            {sequence.leadSelection.selectedCount
              ? `${sequence.leadSelection.selectedCount} leads`
              : "All leads"}
          </span>
        </div>

        <SequenceCardActions
          sequenceId={sequence.id}
          onEdit={onEdit}
          onDuplicate={onDuplicate}
        />

        <div className="text-xs text-gray-500 pt-2 border-t border-gray-100">
          Created {formatDate(sequence.createdAt)}
        </div>
      </CardContent>
    </Card>
  );
}
