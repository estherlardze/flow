import { Mail } from "lucide-react";

export function SequenceListEmptyState() {
  return (
    <div className="text-center py-12">
      <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <Mail className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">No sequences yet</h3>
      <p className="text-gray-600">Create your first sequence to get started with automated follow-ups.</p>
    </div>
  );
}
