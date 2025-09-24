import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SequencePageHeaderProps } from "./sequence-page-types";

export function SequencePageHeader({ onCreateSequence }: Readonly<SequencePageHeaderProps>) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Follow-Up Sequences
        </h1>
        <p className="text-gray-600">
          Manage and create automated follow-up sequences
        </p>
      </div>
      <Button
        onClick={onCreateSequence}
        className="bg-blue-700 hover:bg-blue-600 text-white rounded-lg px-4 py-2 font-medium transition-all duration-150 shadow-sm self-start sm:self-auto"
      >
        <Plus className="h-4 w-4 mr-2" />
        New Sequence
      </Button>
    </div>
  );
}
