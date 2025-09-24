"use client";

import { SequenceListProps } from "./sequence-list.types";
import { SequenceListEmptyState } from "./sequence-list-empty-state";
import { SequenceCard } from "./sequence-card";

export function SequenceList({ sequences, onEdit, onDuplicate, onDelete, onToggleStatus }: Readonly<SequenceListProps>) {
  if (sequences.length === 0) {
    return <SequenceListEmptyState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sequences.map((sequence, index) => (
        <SequenceCard
          key={sequence.id}
          sequence={sequence}
          index={index}
          onEdit={onEdit}
          onDuplicate={onDuplicate}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  );
}
