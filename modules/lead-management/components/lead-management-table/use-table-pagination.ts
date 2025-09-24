import { useMemo } from "react";
import {
  UseTablePaginationProps,
  UseTablePaginationReturn,
} from "./lead-management-table.types";

export const useTablePagination = ({
  currentPage,
  totalPages,
  showPages = 5,
}: UseTablePaginationProps): UseTablePaginationReturn => {
  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];
    const halfShow = Math.floor(showPages / 2);

    let startPage = Math.max(1, currentPage - halfShow);
    let endPage = Math.min(totalPages, startPage + showPages - 1);

    if (endPage - startPage + 1 < showPages) {
      startPage = Math.max(1, endPage - showPages + 1);
    }

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages, showPages]);

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return {
    pageNumbers,
    canGoPrevious,
    canGoNext,
  };
};
