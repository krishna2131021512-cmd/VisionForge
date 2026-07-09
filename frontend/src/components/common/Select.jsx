import React from "react";
import { ChevronDown } from "lucide-react";

const Select = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  error = "",
  disabled = false,
  required = false,
  icon = null,
  fullWidth = true,
  className = "",
}) => {
  return (
    <div className={`${fullWidth ? "w-full" : ""} mb-5`}>
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

      <div className="relative">
        {/* Left Icon */}
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            {icon}
          </div>
        )}

        {/* Select */}
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full
            appearance-none
            rounded-xl
            border
            border-gray-300
            bg-white
            px-4
            py-3
            text-gray-800
            outline-none
            transition-all
            duration-300
            focus:border-emerald-500
            focus:ring-4
            focus:ring-emerald-100
            dark:bg-gray-900
            dark:border-gray-700
            dark:text-white
            ${
              icon
                ? "pl-12"
                : ""
            }
            pr-12
            ${
              disabled
                ? "cursor-not-allowed opacity-60"
                : ""
            }
            ${className}
          `}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Dropdown Arrow */}
        <ChevronDown
          size={20}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        />
      </div>

      {/* Error */}
      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;