import { Button } from "@/components/ui/button";
import { CreateModalActionButtonsProps } from "./sequence-modal.types";

export function CreateModalActionButtons({
  onCancel,
  isSubmitting,
}: Readonly<CreateModalActionButtonsProps>) {
  return (
    <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3 space-y-3 space-y-reverse sm:space-y-0 pt-4 border-t border-gray-200">
      <Button
        type="button"
        variant="outline"
        onClick={onCancel}
        className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50"
      >
        Cancel
      </Button>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-blue-700 hover:bg-blue-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Next
      </Button>
    </div>
  );
}
