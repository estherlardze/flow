import { Control } from "react-hook-form";
import { SequenceFormValues } from "./sequence-modal-create-schema";
import { SequenceFormData } from "../followup-sequence/followup-sequence.types";

export interface CreateSequenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: (data: SequenceFormData) => void;
}

export interface CreateSequenceNameFieldProps {
  control: Control<SequenceFormValues>;
}

export interface CreateSequenceDescriptionFieldProps {
  control: Control<SequenceFormValues>;
}

export interface CreateSequenceTypeFieldProps {
  control: Control<SequenceFormValues>;
}

export interface CreateModalActionButtonsProps {
  onCancel: () => void;
  isSubmitting: boolean;
}

export interface SequenceNameFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export interface SequenceDescriptionFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export interface SequenceTypeFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export interface LeadStatusFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export interface ModalActionButtonsProps {
  onCancel: () => void;
  onSubmit: () => void;
  isFormValid: boolean;
  isSubmitting?: boolean;
}
