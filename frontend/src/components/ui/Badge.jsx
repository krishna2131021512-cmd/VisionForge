import React from "react";

const variants = {
  success:
    "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800",

  warning:
    "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800",

  danger:
    "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800",

  info:
    "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",

  primary:
    "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800",

  secondary:
    "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700",

  purple:
    "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800",
};

const sizes = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
  lg: "px-4 py-2 text-base",
};

const Badge = ({
  children,
  variant = "primary",
  size = "md",
  rounded = "full",
  icon = null,
  className = "",
}) => {
  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        font-semibold
        border
        ${
          rounded === "full"
            ? "rounded-full"
            : "rounded-xl"
        }
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {icon && icon}
      {children}
    </span>
  );
};

export default Badge;