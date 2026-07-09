import React from "react";
import { Search, X } from "lucide-react";

const SearchBar = ({
  value = "",
  onChange,
  placeholder = "Search...",
  onClear,
  className = "",
  disabled = false,
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Search Icon */}
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="
          w-full
          rounded-xl
          border
          border-gray-300
          bg-white
          py-3
          pl-12
          pr-12
          text-gray-800
          placeholder-gray-400
          shadow-sm
          transition-all
          duration-300
          outline-none
          focus:border-emerald-500
          focus:ring-4
          focus:ring-emerald-100
          dark:bg-gray-900
          dark:border-gray-700
          dark:text-white
          dark:placeholder-gray-500
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      />

      {/* Clear Button */}
      {value && (
        <button
          type="button"
          onClick={onClear}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            rounded-full
            p-1
            text-gray-500
            transition
            hover:bg-gray-100
            hover:text-red-500
            dark:hover:bg-gray-800
          "
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;