import React from "react";

const TextArea = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  rows = 5,
  error = "",
  disabled = false,
  required = false,
  maxLength,
  showCount = false,
  fullWidth = true,
  className = "",
}) => {
  return (
    <div className={`${fullWidth ? "w-full" : ""} mb-5`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200"
        >
          {label}

          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      {/* TextArea */}
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        className={`
          w-full
          rounded-xl
          border
          border-gray-300
          bg-white
          px-4
          py-3
          text-gray-800
          placeholder-gray-400
          outline-none
          resize-none
          transition-all
          duration-300
          focus:border-emerald-500
          focus:ring-4
          focus:ring-emerald-100
          dark:bg-gray-900
          dark:border-gray-700
          dark:text-white
          dark:placeholder-gray-500
          ${
            disabled
              ? "cursor-not-allowed opacity-60"
              : ""
          }
          ${className}
        `}
      />

      {/* Bottom Section */}
      <div className="flex items-center justify-between mt-2">
        {/* Error */}
        <div>
          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}
        </div>

        {/* Character Count */}
        {showCount && maxLength && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {(value || "").length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextArea;