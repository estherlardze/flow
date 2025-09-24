import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CreateSequenceModalProps } from "./followup-sequence-modal.types";
import { useSequenceModal } from "./use-followup-sequence-modal";

export function SequenceModal({
  isOpen,
  onClose,
  onNext,
}: Readonly<CreateSequenceModalProps>) {
  const { formData, handleSubmit, handleClose, updateFormData, isFormValid } =
    useSequenceModal(onClose, onNext);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Create New Sequence
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="sequence-name"
              className="text-sm font-medium text-gray-700"
            >
              Sequence Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="sequence-name"
              placeholder="Enter sequence name..."
              value={formData.name}
              onChange={(e) => updateFormData({ name: e.target.value })}
              className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="sequence-description"
              className="text-sm font-medium text-gray-700"
            >
              Description <span className="text-gray-500">(optional)</span>
            </label>
            <Textarea
              id="sequence-description"
              placeholder="Describe your sequence..."
              value={formData.description}
              onChange={(e) => updateFormData({ description: e.target.value })}
              className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[80px] resize-none"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="sequence-type"
              className="text-sm font-medium text-gray-700"
            >
              Sequence Type <span className="text-red-500">*</span>
            </label>
            <Select
              value={formData.type}
              onValueChange={(value) => updateFormData({ type: value })}
            >
              <SelectTrigger className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="Select sequence type..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email Sequence</SelectItem>
                <SelectItem value="call">Call Sequence</SelectItem>
                <SelectItem value="sms">SMS Sequence</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3 space-y-3 space-y-reverse sm:space-y-0 pt-4 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!isFormValid}
              className="w-full sm:w-auto bg-blue-700 hover:bg-blue-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Next
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
