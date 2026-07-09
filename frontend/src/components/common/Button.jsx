import React from "react";
import { Loader2 } from "lucide-react";

const variants = {
  primary:
    "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl",

  secondary:
    "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",

  outline:
    "border border-emerald-600 text-emerald-600 hover:bg-emerald-50",

  danger:
    "bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl",

  ghost:
    "text-gray-700 hover:bg-gray-100",

  dark:
    "bg-gray-900 hover:bg-black text-white",

  success:
    "bg-green-600 hover:bg-green-700 text-white",

  warning:
    "bg-yellow-500 hover:bg-yellow-600 text-white",
};

const sizes = {
  sm: "px-3 py-2 text-sm",

  md: "px-5 py-2.5 text-base",

  lg: "px-6 py-3 text-lg",

  xl: "px-8 py-4 text-xl",
};

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  rounded = "rounded-xl",
  loading = false,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  className = "",
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={loading || disabled}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        font-semibold
        transition-all
        duration-300
        active:scale-95
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${rounded}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {loading ? (
        <>
          <Loader2 size={18} className="animate-spin" />
          Loading...
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default Button;