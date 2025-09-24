import { useState } from "react";
import { toast } from "sonner";
import { UseFollowupModalProps } from "./followup-modal.types";

export function useFollowupModal({
  onScheduleFollowup,
  leadName,
}: UseFollowupModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [message, setMessage] = useState("");

  const handleScheduleFollowup = () => {
    if (selectedDate && selectedTime && message.trim()) {
      const [hours, minutes] = selectedTime.split(":").map(Number);
      const combinedDateTime = new Date(selectedDate);
      combinedDateTime.setHours(hours, minutes, 0, 0);

      onScheduleFollowup(combinedDateTime, message.trim());

      setSelectedDate(undefined);
      setSelectedTime("");
      setMessage("");
    }
  };

  const handleCancel = () => {
    setSelectedDate(undefined);
    setSelectedTime("");
    setMessage("");
  };

  return {
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    message,
    setMessage,
    handleScheduleFollowup,
    handleCancel,
  };
}
