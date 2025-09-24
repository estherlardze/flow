import { Tag } from "lucide-react";

export function SectionHeader() {
  return (
    <h2 className="text-base font-semibold text-black mb-3 flex items-center">
      <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-md mr-2">
        <Tag className="h-3 w-3 text-blue-600" />
      </div>
      Tags & Labels
    </h2>
  );
}
