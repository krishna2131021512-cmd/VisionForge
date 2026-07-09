import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  error = "",
  disabled = false,
  required = false,
  icon = null,
  fullWidth = true,
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className={`${fullWidth ? "w-full" : ""} mb-5`}>
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200"
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1">*</span>
          )}
        </label>
      )}

      <div className="relative">
        {/* Left Icon */}
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}

        {/* Input */}
        <input
          id={name}
          name={name}
          type={isPassword && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          autoComplete="off"
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
              icon
                ? "pl-12"
                : ""
            }
            ${
              isPassword
                ? "pr-12"
                : ""
            }
            ${
              disabled
                ? "cursor-not-allowed opacity-60"
                : ""
            }
            ${className}
          `}
        />

        {/* Password Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-emerald-600"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        )}
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

export default Input;