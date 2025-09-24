import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SequencesListProps } from "./followup-sequence.types";

import { SequenceModal } from "../sequence-modal/sequence-modal-basic";
import { useFollowupSequenceList } from "./use-followup-sequence-list";

export function SequencesList({ searchQuery, filterStatus }: Readonly<SequencesListProps>) {
  const { isModalOpen, handleCreateSequence, handleModalClose, handleNext } = useFollowupSequenceList();

  return (
    <>
      <Card className="shadow-sm border-gray-200">
        <CardHeader className="pb-4">
          <CardTitle className="text-gray-900 text-xl">Sequences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-10">
            <div className="bg-gray-50 rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No sequences yet</h3>
            <p className="text-gray-600 mb-6 max-w-sm mx-auto text-sm leading-relaxed">
              Create your first follow-up sequence to get started with automated communication.
            </p>
            <Button
              onClick={handleCreateSequence}
              className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 font-medium transition-all duration-150 shadow-sm rounded-lg"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Sequence
            </Button>
          </div>
        </CardContent>
      </Card>

      <SequenceModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onNext={handleNext}
      />
    </>
  );
}
