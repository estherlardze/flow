"use client";

import { SequencePageHeader } from './sequence-page-header';
import { SequenceSearchFilter } from './sequence-page-search-filter';
import { SequenceEmptyState } from './sequence-page-empty-state';
import { SequenceListWrapper } from './sequence-page-list-wrapper';

import { SequenceModals } from './sequence-page-modals';
import { useSequenceManagement } from './sequence-page-management-hook';
import { useSequenceFilters } from './sequence-page-filters-hook';
import { useSequenceModals } from './sequence-page-modals-hook';

export default function Sequence() {
  const {
    sequences,
    editingSequence,
    currentFormData,
    handleCreateSequence,
    handleBuilderSave,
    handleEditSequence,
    handleUpdateSequence,
    handleDuplicateSequence,
    handleDeleteSequence,
    handleToggleStatus
  } = useSequenceManagement();

  const {
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
    filteredSequences
  } = useSequenceFilters(sequences);

  const {
    isCreateModalOpen,
    isBuilderModalOpen,
    openCreateModal,
    closeCreateModal,
    openBuilderModal,
    closeBuilderModal
  } = useSequenceModals();

  const handleCreateModalNext = (formData: any) => {
    handleCreateSequence(formData);
    closeCreateModal();
    openBuilderModal();
  };

  const handleEditSequenceWithModal = (sequenceId: string) => {
    handleEditSequence(sequenceId, openBuilderModal);
  };

  return (
    <div className="space-y-6">
      <SequencePageHeader onCreateSequence={openCreateModal} />

      {sequences.length > 0 && (
        <SequenceSearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filterStatus={filterStatus}
          onFilterChange={setFilterStatus}
        />
      )}

      <div className="animate-in fade-in-0 duration-300">
        {sequences.length === 0 ? (
          <SequenceEmptyState onCreateSequence={openCreateModal} />
        ) : (
          <SequenceListWrapper
            sequences={filteredSequences}
            onEdit={handleEditSequenceWithModal}
            onDuplicate={handleDuplicateSequence}
            onDelete={handleDeleteSequence}
            onToggleStatus={handleToggleStatus}
          />
        )}
      </div>

      <SequenceModals
        isCreateModalOpen={isCreateModalOpen}
        isBuilderModalOpen={isBuilderModalOpen}
        editingSequence={editingSequence}
        currentFormData={currentFormData}
        onCreateModalClose={closeCreateModal}
        onBuilderModalClose={closeBuilderModal}
        onCreateModalNext={handleCreateModalNext}
        onBuilderSave={handleBuilderSave}
        onUpdateSequence={handleUpdateSequence}
      />
    </div>
  );
}
