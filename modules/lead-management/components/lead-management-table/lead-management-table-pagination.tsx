import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTablePagination } from "./use-table-pagination";
import { LeadManagementTablePaginationProps } from "./lead-management-table.types";


const LeadManagementTablePagination = React.forwardRef<HTMLDivElement, LeadManagementTablePaginationProps>(
  ({ currentPage, totalPages, onPageChange, showPages = 5, className }, ref) => {
    const { pageNumbers, canGoPrevious, canGoNext } = useTablePagination({
      currentPage,
      totalPages,
      showPages,
    });

    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-between px-2", className)}
      >
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={!canGoPrevious}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>

          <div className="flex items-center space-x-1">
            {pageNumbers.map((page, index) => (
              <React.Fragment key={index}>
                {page === "..." ? (
                  <span className="flex h-8 w-8 items-center justify-center">
                    <MoreHorizontal className="h-4 w-4" />
                  </span>
                ) : (
                  <Button
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => onPageChange(page as number)}
                    className="h-8 w-8 p-0"
                  >
                    {page}
                  </Button>
                )}
              </React.Fragment>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={!canGoNext}
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>

        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>Page {currentPage} of {totalPages}</span>
        </div>
      </div>
    );
  }
);

LeadManagementTablePagination.displayName = "LeadManagementTablePagination";

export { LeadManagementTablePagination };