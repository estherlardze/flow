import { SequenceModal } from "@/modules/sequence/components/sequence-modal/sequence-modal-basic";
import { SequenceBuilderModal } from "@/modules/sequence/components/sequence-builder/sequence-builder-modal";
import { SequenceModalsProps } from './sequence-page-types';

export function SequenceModals({
  isCreateModalOpen,
  isBuilderModalOpen,
  editingSequence,
  currentFormData,
  onCreateModalClose,
  onBuilderModalClose,
  onCreateModalNext,
  onBuilderSave,
  onUpdateSequence
}: Readonly<SequenceModalsProps>) {
  const handleModalClose = () => {
    onCreateModalClose();
    onBuilderModalClose();
  };

  return (
    <>
      <SequenceModal
        isOpen={isCreateModalOpen}
        onClose={handleModalClose}
        onNext={onCreateModalNext}
      />

      <SequenceBuilderModal
        isOpen={isBuilderModalOpen}
        onClose={handleModalClose}
        onSave={editingSequence ? onUpdateSequence : onBuilderSave}
        initialData={editingSequence ? {
          name: editingSequence.name,
          description: editingSequence.description,
          type: editingSequence.type
        } : {
          name: currentFormData?.name || '',
          description: currentFormData?.description || '',
          type: currentFormData?.type || 'email'
        }}
        existingSteps={editingSequence ? editingSequence.steps.map((step, index) => ({
          id: step.id,
          title: `${step.actionType.charAt(0).toUpperCase() + step.actionType.slice(1)} #${index + 1}`,
          actionType: step.actionType,
          content: '',
          delay: step.delay
        })) : undefined}
        leadSelection={currentFormData?.leadStatus ? {
          selectionType: 'status',
          criteria: {
            type: 'status',
            status: currentFormData.leadStatus
          },
          selectedCount: 0
        } : undefined}
      />
    </>
  );
}
