import React, { useState } from "react";

const Tabs = ({
  tabs = [],
  defaultTab = 0,
  onChange = () => {},
  fullWidth = false,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onChange(index);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Buttons */}
      <div
        className={`
          flex
          gap-2
          rounded-2xl
          bg-gray-100
          p-2
          dark:bg-gray-800
        `}
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;

          return (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                px-5
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300
                ${
                  fullWidth ? "flex-1" : ""
                }
                ${
                  isActive
                    ? "bg-white text-emerald-600 shadow-md dark:bg-gray-900 dark:text-emerald-400"
                    : "text-gray-500 hover:bg-white hover:text-emerald-600 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-emerald-400"
                }
              `}
            >
              {tab.icon && tab.icon}

              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

export default Tabs;