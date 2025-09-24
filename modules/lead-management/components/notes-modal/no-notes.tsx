import { FileText } from "lucide-react";

export default function NoNotes() {
  return (
    <div className="text-center py-4 px-4 bg-gray-50 border border-gray-100 border-dashed rounded-lg">
      <FileText className="h-8 w-6 text-gray-400 mx-auto mb-2" />
      <p className="text-gray-500 text-sm font-medium">No notes yet</p>
      <p className="text-gray-400 text-xs mt-1">
        Notes added to this lead will appear here
      </p>
    </div>
  );
}
