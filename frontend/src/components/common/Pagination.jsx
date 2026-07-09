import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  siblingCount = 1,
}) => {
  if (totalPages <= 1) return null;

  const range = [];

  const totalPageNumbers = siblingCount * 2 + 5;

  if (totalPages <= totalPageNumbers) {
    for (let i = 1; i <= totalPages; i++) {
      range.push(i);
    }
  } else {
    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(
      currentPage + siblingCount,
      totalPages
    );

    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPages - 1;

    range.push(1);

    if (showLeftDots) {
      range.push("left-dots");
    }

    for (let i = leftSibling; i <= rightSibling; i++) {
      if (i !== 1 && i !== totalPages) {
        range.push(i);
      }
    }

    if (showRightDots) {
      range.push("right-dots");
    }

    if (totalPages !== 1) {
      range.push(totalPages);
    }
  }

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap mt-6">
      {/* Previous */}
      <button
        onClick={() =>
          currentPage > 1 &&
          onPageChange(currentPage - 1)
        }
        disabled={currentPage === 1}
        className="
          flex
          items-center
          gap-1
          rounded-xl
          border
          border-gray-300
          bg-white
          px-4
          py-2
          text-sm
          font-medium
          transition
          hover:bg-gray-100
          disabled:cursor-not-allowed
          disabled:opacity-50
          dark:bg-gray-900
          dark:border-gray-700
          dark:hover:bg-gray-800
        "
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      {/* Page Numbers */}
      {range.map((page, index) => {
        if (
          page === "left-dots" ||
          page === "right-dots"
        ) {
          return (
            <span
              key={index}
              className="px-2 text-gray-500"
            >
              <MoreHorizontal size={18} />
            </span>
          );
        }

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              w-10
              h-10
              rounded-xl
              font-semibold
              transition
              ${
                currentPage === page
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
              }
            `}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        onClick={() =>
          currentPage < totalPages &&
          onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className="
          flex
          items-center
          gap-1
          rounded-xl
          border
          border-gray-300
          bg-white
          px-4
          py-2
          text-sm
          font-medium
          transition
          hover:bg-gray-100
          disabled:cursor-not-allowed
          disabled:opacity-50
          dark:bg-gray-900
          dark:border-gray-700
          dark:hover:bg-gray-800
        "
      >
        Next
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;