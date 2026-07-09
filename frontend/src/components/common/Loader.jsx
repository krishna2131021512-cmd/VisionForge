import React from "react";
import { Loader2 } from "lucide-react";

const sizes = {
  sm: {
    spinner: 20,
    text: "text-sm",
  },
  md: {
    spinner: 32,
    text: "text-base",
  },
  lg: {
    spinner: 48,
    text: "text-lg",
  },
};

const Loader = ({
  size = "md",
  message = "Loading...",
  fullScreen = false,
  className = "",
}) => {
  const current = sizes[size];

  const content = (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${className}`}
    >
      {/* Animated Spinner */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-emerald-400 blur-xl opacity-30 animate-pulse"></div>

        <Loader2
          size={current.spinner}
          className="relative text-emerald-600 animate-spin"
        />
      </div>

      {/* Loading Text */}
      {message && (
        <p
          className={`${current.text} font-medium text-gray-600 dark:text-gray-300`}
        >
          {message}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return content;
};

export default Loader;