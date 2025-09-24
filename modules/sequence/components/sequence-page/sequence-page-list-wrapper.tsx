import { SequenceList } from "../sequence-list/sequence-list";
import { SequenceListWrapperProps } from "./sequence-page-types";

export function SequenceListWrapper({
  sequences,
  onEdit,
  onDuplicate,
  onDelete,
  onToggleStatus
}: Readonly<SequenceListWrapperProps>) {
  return (
    <div className="animate-in fade-in-0 duration-300">
      <SequenceList
        sequences={sequences}
        onEdit={onEdit}
        onDuplicate={onDuplicate}
        onDelete={onDelete}
        onToggleStatus={onToggleStatus}
      />
    </div>
  );
}
