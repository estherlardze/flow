import { Clock } from "lucide-react";

export default function NoFollowUp() {
  return (
    <div className="text-center py-8">
      <Clock className="w-12 h-12 mx-auto text-gray-300 mb-3" />
      <p className="text-gray-500 text-sm">No follow-ups scheduled</p>
    </div>
  );
}
