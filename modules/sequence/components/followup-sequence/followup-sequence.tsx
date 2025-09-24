import { Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SequenceModal } from "./followup-sequence-modal";
import { SequenceBuilderModal } from "../sequence-builder/sequence-builder-modal";
import { SequenceList } from "../sequence-list/sequence-list";
import { mockSequences } from "./followup-sequence-mock-data";

import { useFollowupSequence } from "./use-followup-sequence";

export function FollowupSequence() {
  const {
    searchQuery,
    filterStatus,
    isModalOpen,
    isBuilderOpen,
    sequenceBasicData,
    setSearchQuery,
    setFilterStatus,
    handleNewSequence,
    handleModalClose,
    handleSequenceCreate,
    handleBuilderSave,
    handleBuilderClose,
    handleEditSequence,
    handleDuplicateSequence,
    handleDeleteSequence,
    handleToggleStatus,
  } = useFollowupSequence();

  return (
    <div className="space-y-6">
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
          onClick={handleNewSequence}
          className="bg-blue-700 hover:bg-blue-600 text-white rounded-lg px-4 py-2 font-medium transition-all duration-150 shadow-sm self-start sm:self-auto"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Sequence
        </Button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-none">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <div className="w-full sm:w-80">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
              <Input
                placeholder="Search sequences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-300 hover:shadow-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Filter className="h-5 w-5 text-gray-400" />
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="min-w-[120px] px-3 py-2 rounded-md text-sm font-medium border transition-all duration-200 cursor-pointer flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="min-w-[160px] rounded-md bg-white shadow-lg">
                <SelectItem value="all" className="text-sm">
                  All Sequences
                </SelectItem>
                <SelectItem value="active" className="text-sm">
                  Active
                </SelectItem>
                <SelectItem value="draft" className="text-sm">
                  Draft
                </SelectItem>
                <SelectItem value="archived" className="text-sm">
                  Archived
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <SequenceList
        sequences={mockSequences}
        onEdit={handleEditSequence}
        onDuplicate={handleDuplicateSequence}
        onDelete={handleDeleteSequence}
        onToggleStatus={handleToggleStatus}
      />

      <SequenceModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onNext={handleSequenceCreate}
      />

      {sequenceBasicData && (
        <SequenceBuilderModal
          isOpen={isBuilderOpen}
          onClose={handleBuilderClose}
          onSave={handleBuilderSave}
          initialData={sequenceBasicData}
        />
      )}
    </div>
  );
}
