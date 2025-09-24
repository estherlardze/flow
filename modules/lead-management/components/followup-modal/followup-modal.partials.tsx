"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import {
  DatePickerProps,
  TimePickerProps,
  FollowupTriggerProps,
  MessageInputProps,
} from "./followup-modal.types";
import { generateTimeOptions, isDateDisabled } from "./followup-modal.utils";
import React from "react";

export function DatePicker({ selectedDate, onDateSelect }: DatePickerProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="followup-date" className="text-sm font-medium text-black">
        Select Date
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              `w-full justify-start text-left font-normal border-gray-300
              hover:bg-gray-50 hover:border-blue-500 focus:border-blue-500 focus:ring-blue-500/20`,
              !selectedDate && "text-gray-500"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
            {selectedDate ? (
              format(selectedDate, "PPP")
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 z-[100] relative"
          align="start"
          sideOffset={4}
          side="bottom"
        >
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              onDateSelect(date);
            }}
            disabled={(date) => isDateDisabled(date)}
            autoFocus
            className="rounded-md border"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export function TimePicker({ selectedTime, onTimeSelect }: TimePickerProps) {
  const timeOptions = generateTimeOptions();

  return (
    <div className="space-y-2">
      <Label htmlFor="followup-time" className="text-sm font-medium text-black">
        Select Time
      </Label>
      <Select value={selectedTime} onValueChange={onTimeSelect}>
        <SelectTrigger className="w-full border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:ring-blue-500/20 pr-3 [&>svg]:hidden">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-gray-400" />
            <SelectValue placeholder="-- --" />
          </div>
        </SelectTrigger>
        <SelectContent className="z-[100] bg-white">
          {timeOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export function MessageInput({ message, onMessageChange }: MessageInputProps) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor="followup-message"
        className="text-sm font-medium text-black"
      >
        Reminder Message
      </Label>
      <Textarea
        id="followup-message"
        placeholder="Add a reminder message..."
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
        className="min-h-[100px] resize-none border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 text-black placeholder:text-gray-400"
      />
    </div>
  );
}

export const FollowupTrigger = React.forwardRef<
  HTMLButtonElement,
  FollowupTriggerProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-md cursor-pointer transition-colors w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

FollowupTrigger.displayName = "FollowupTrigger";
