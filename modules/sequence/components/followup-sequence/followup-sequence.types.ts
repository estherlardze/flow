export interface SequencesListProps {
  searchQuery: string;
  filterStatus: string;
}

export interface SequenceFormData {
  name: string;
  description: string;
  type: string;
  leadStatus?: string;
}
