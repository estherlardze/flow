import { Edit, Copy, Trash2, Play, Pause, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SequenceCardDropdownProps } from "./sequence-list.types";

export function SequenceCardDropdown({
  sequenceId,
  status,
  onEdit,
  onDuplicate,
  onDelete,
  onToggleStatus,
}: Readonly<SequenceCardDropdownProps>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity ml-2"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-white">
        <DropdownMenuItem onClick={() => onEdit(sequenceId)}>
          <Edit className="h-4 w-4 mr-2" />
          Edit Sequence
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onDuplicate(sequenceId)}>
          <Copy className="h-4 w-4 mr-2" />
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => onToggleStatus(sequenceId)}
          className="text-gray-600"
        >
          {status === "active" ? (
            <>
              <Pause className="h-4 w-4 mr-2" />
              Pause Sequence
            </>
          ) : (
            <>
              <Play className="h-4 w-4 mr-2" />
              Activate Sequence
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => onDelete(sequenceId)}
          className="text-red-600 focus:text-red-600"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete Sequence
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
