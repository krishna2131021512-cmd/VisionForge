import React from "react";
import { Inbox } from "lucide-react";
import Button from "./Button";

const EmptyState = ({
  icon = <Inbox size={64} />,
  title = "Nothing Here",
  description = "There is currently no data to display.",
  buttonText,
  onButtonClick,
  illustration,
}) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-center rounded-2xl border border-dashed border-gray-300 bg-white dark:bg-gray-900 dark:border-gray-700 shadow-sm">

      {/* Illustration or Icon */}
      <div className="mb-6">
        {illustration ? (
          <img
            src={illustration}
            alt="Empty State"
            className="w-48 h-auto mx-auto"
          />
        ) : (
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300">
            {icon}
          </div>
        )}
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-3 max-w-md text-gray-500 dark:text-gray-400">
        {description}
      </p>

      {/* Optional Button */}
      {buttonText && (
        <div className="mt-8">
          <Button onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default EmptyState;