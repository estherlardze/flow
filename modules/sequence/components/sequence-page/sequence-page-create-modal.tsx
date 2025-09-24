import { SequenceModal } from "@/modules/sequence/components/sequence-modal/sequence-modal-basic";
import { SequenceCreateModalProps } from "./sequence-page-types";

export function SequenceCreateModal({
  isOpen,
  onClose,
  onNext,
}: Readonly<SequenceCreateModalProps>) {
  return (
    <SequenceModal
      isOpen={isOpen}
      onClose={onClose}
      onNext={onNext}
    />
  );
}
