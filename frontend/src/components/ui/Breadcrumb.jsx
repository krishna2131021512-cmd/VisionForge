import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = ({
  items = [],
  className = "",
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-sm ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {/* Home */}
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 text-gray-500 transition hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
          >
            <Home size={16} />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              {/* Separator */}
              <ChevronRight
                size={16}
                className="text-gray-400"
              />

              {/* Breadcrumb Item */}
              <li>
                {isLast ? (
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-500 transition hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;