"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SelectionToolbarProps } from "./selection-toolbar.types";
import SelectionToolbarActions from "./selection-toolbar-actions";

export default function SelectionToolbar({
  selectedCount,
  onClose,
  selectedRows,
}: SelectionToolbarProps) {
  const isVisible = selectedCount > 0;
  const selectedLeadIds = selectedRows.map(
    (row) => (row.original as { id: string }).id
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
            duration: 0.3,
          }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-6 py-4 min-w-[300px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium text-blue-900">
                    {selectedCount} lead{selectedCount > 1 ? "s" : ""} selected
                  </span>
                </div>
                <SelectionToolbarActions
                  selectedLeadIds={selectedLeadIds}
                  selectedCount={selectedCount}
                  selectedRows={selectedRows}
                />
              </div>
              {onClose && (
                <button
                  onClick={onClose}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 active:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all duration-200 group"
                  aria-label="Close toolbar"
                >
                  <svg
                    className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
