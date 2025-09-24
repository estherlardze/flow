"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useNotesModal } from "./use-notes-modal";

import { StickyNote } from "lucide-react";
import { NotesModalProps } from "./notes-modal.types";

export default function NotesModal({
  onAddNote,
  title = "Add Note",
  description = "Add a note to this lead. This will help you keep track of important information.",
  leadName,
  isCreatingNote,
}: NotesModalProps) {
  const { note, setNote, handleAddNote, handleCancel } = useNotesModal({
    onAddNote,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700
        hover:bg-yellow-50 hover:text-yellow-700 rounded-md cursor-pointer transition-colors w-full"
        >
          <div className="flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full">
            <StickyNote className="h-4 w-4 text-yellow-600" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-left">Add Note</span>
            <span className="text-xs text-gray-500">Create a note</span>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-black text-lg font-semibold">
            {leadName ? `Add Note for ${leadName}` : title}
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <Textarea
            placeholder="Enter your note here..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="min-h-[120px] resize-none border-gray-300 focus:border-blue-500
            focus:ring-blue-500/20 text-black placeholder:text-gray-400"
            autoFocus
          />
        </div>

        <DialogFooter className="flex gap-3 sm:justify-end">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            Clear
          </Button>
          <Button
            onClick={handleAddNote}
            disabled={!note.trim() || isCreatingNote}
            className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            isLoading={isCreatingNote}
            loadingText="Adding..."
          >
            Add Note
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
