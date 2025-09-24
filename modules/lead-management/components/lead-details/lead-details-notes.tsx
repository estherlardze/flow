"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Edit2, Save, X, User, Trash2, Loader2 } from "lucide-react";

import { LeadDetailsNotesProps, BackendNote } from "./lead-details.types";
import { format } from "date-fns";
import NoNotes from "../notes-modal/no-notes";
import { useLeadDetailsNote } from "./use-lead-details-note";

export default function LeadDetailsNotes({
  notes,
  leadId,
}: LeadDetailsNotesProps) {
  const {
    editingNoteId,
    editedContent,
    setEditedContent,
    isDeletingNote,
    isUpdatingNote,
    handleEditNote,
    handleSaveNote,
    handleCancelEdit,
    handleDeleteNote,
  } = useLeadDetailsNote(leadId);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-black flex items-center">
          <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-md mr-2">
            <FileText className="h-3 w-3 text-blue-600" />
          </div>
          Agent Notes
          {notes.length > 0 && (
            <span className="ml-2 bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-medium">
              {notes.length}
            </span>
          )}
        </h2>
      </div>

      <div className="space-y-3">
        {notes.length === 0 ? (
          <NoNotes />
        ) : (
          notes.map((note: BackendNote) => (
            <div
              key={note.$id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              {editingNoteId === note.$id ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Editing Note
                      </p>
                      <p className="text-xs text-gray-500">
                        {format(
                          new Date(note.$updatedAt),
                          "MMM dd, yyyy 'at' h:mm a"
                        )}
                      </p>
                    </div>
                  </div>
                  <Textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    className="min-h-[100px] border-gray-200 focus:border-blue-300 focus:ring-blue-200"
                    placeholder="Note content..."
                  />
                  <div className="flex gap-2 justify-end">
                    <Button
                      onClick={handleCancelEdit}
                      variant="outline"
                      size="sm"
                      className="border-gray-200 text-gray-600 hover:bg-gray-50"
                    >
                      <X className="h-3 w-3 mr-1" />
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSaveNote}
                      size="sm"
                      isLoading={isUpdatingNote}
                      disabled={editedContent.trim() === "" || isUpdatingNote}
                      loadingText="Saving..."
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Save className="h-3 w-3 mr-1" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Agent Note
                        </p>
                        <p className="text-xs text-gray-500">
                          {format(
                            new Date(note.$createdAt),
                            "MMM dd, yyyy 'at' h:mm a"
                          )}
                          {new Date(note.$updatedAt) >
                            new Date(note.$createdAt) && (
                            <span className="ml-2 text-blue-600 text-xs">
                              • edited{" "}
                              {format(new Date(note.$updatedAt), "MMM dd")}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        onClick={() => handleEditNote(note)}
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-blue-600 hover:bg-blue-50 h-8 w-8 p-0"
                        disabled={editingNoteId !== null || isDeletingNote}
                      >
                        <Edit2 className="h-3 w-3" />
                      </Button>
                      <Button
                        onClick={() => handleDeleteNote(note.$id)}
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-red-600 hover:bg-red-50 h-8 w-8 p-0"
                        disabled={editingNoteId !== null || isDeletingNote}
                      >
                        {isDeletingNote ? (
                          <Loader2 className="h-3 w-3 text-red-500 animate-spin" />
                        ) : (
                          <Trash2 className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-md p-3 border-l-4 border-blue-200">
                    <p className="text-gray-700 whitespace-pre-wrap leading-relaxed text-sm">
                      {note.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
