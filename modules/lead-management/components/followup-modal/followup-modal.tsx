"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { useFollowupModal } from "./use-followup-modal";
import { FollowupModalProps } from "./followup-modal.types";
import {
  DatePicker,
  MessageInput,
  FollowupTrigger,
  TimePicker,
} from "./followup-modal.partials";

export default function FollowupModal({
  onScheduleFollowup,
  leadName,
  trigger,
  isCreatingFollowUp,
}: FollowupModalProps) {
  const {
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    message,
    setMessage,
    handleScheduleFollowup,
    handleCancel,
  } = useFollowupModal({ onScheduleFollowup, leadName });

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <FollowupTrigger>
            <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full">
              <CalendarIcon className="h-4 w-4 text-indigo-600" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-left">Set Follow Up</span>
              <span className="text-xs text-gray-500 text-left">
                Schedule date & time
              </span>
            </div>
          </FollowupTrigger>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-black text-lg font-semibold">
            Set Follow Up
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm">
            Schedule a reminder with specific date and time. We'll send you an
            email notification when the scheduled time arrives.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <DatePicker
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
              />
            </div>

            <div className="col-span-1">
              <TimePicker
                selectedTime={selectedTime}
                onTimeSelect={setSelectedTime}
              />
            </div>
          </div>

          <MessageInput message={message} onMessageChange={setMessage} />
        </div>

        <DialogFooter className="flex gap-3 sm:justify-end">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            Cancel
          </Button>
          <Button
            onClick={handleScheduleFollowup}
            disabled={
              !selectedDate ||
              !selectedTime ||
              !message.trim() ||
              isCreatingFollowUp
            }
            loadingText="Scheduling..."
            isLoading={isCreatingFollowUp}
            className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50
            disabled:cursor-not-allowed"
          >
            Save Reminder
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
