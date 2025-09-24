import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CreateTagFormProps } from "./manage-tags-modal.types";

export function CreateTagForm({
  newTagName,
  setNewTagName,
  handleCreateTag,
  handleKeyPress,
  isCreatingLeadTag,
}: CreateTagFormProps) {
  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <Label
        htmlFor="new-tag"
        className="text-sm font-medium text-black mb-2 block"
      >
        Create New Tag
      </Label>
      <div className="flex gap-2">
        <motion.div layout className="flex-1">
          <Input
            id="new-tag"
            placeholder="Enter tag name"
            value={newTagName}
            onChange={(e) => setNewTagName(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e, handleCreateTag)}
            className="h-10 px-3 border border-gray-300 rounded-md
            hover:border-blue-400 focus:border-blue-500 focus:ring-2
            focus:ring-blue-500 focus:ring-opacity-50 outline-none transition-colors
            bg-white text-gray-900 placeholder-gray-500"
          />
        </motion.div>
        <AnimatePresence>
          {(newTagName.trim() || isCreatingLeadTag) && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <Button
                onClick={handleCreateTag}
                disabled={!newTagName.trim() || isCreatingLeadTag}
                isLoading={isCreatingLeadTag}
                loadingText="Creating..."
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 h-10 whitespace-nowrap"
              >
                <>
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
