import { Edit, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SequenceCardActionsProps } from "./sequence-list.types";

export function SequenceCardActions({
  sequenceId,
  onEdit,
  onDuplicate,
}: Readonly<SequenceCardActionsProps>) {
  return (
    <div className="flex gap-2 pt-2 border-t border-gray-100">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onEdit(sequenceId)}
        className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
      >
        <Edit className="h-3 w-3 mr-1" />
        Edit
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onDuplicate(sequenceId)}
        className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
      >
        <Copy className="h-3 w-3 mr-1" />
        Duplicate
      </Button>
    </div>
  );
}
