export interface FollowupModalProps {
  onScheduleFollowup: (date: Date, message: string) => void;
  leadName?: string;
  trigger?: React.ReactNode;
  isCreatingFollowUp?: boolean;
}

export interface DatePickerProps {
  selectedDate?: Date;
  onDateSelect: (date: Date | undefined) => void;
}

export interface TimePickerProps {
  selectedTime?: string;
  onTimeSelect: (time: string) => void;
}

export interface MessageInputProps {
  message: string;
  onMessageChange: (message: string) => void;
}

export interface FollowupTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface UseFollowupModalProps {
  onScheduleFollowup: (date: Date, message: string) => void;
  leadName?: string;
}

export interface TimeOption {
  value: string;
  label: string;
}
