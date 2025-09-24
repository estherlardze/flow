import { SequenceFormData } from "./followup-sequence.types";

export interface CreateSequenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: (data: SequenceFormData) => void;
}
