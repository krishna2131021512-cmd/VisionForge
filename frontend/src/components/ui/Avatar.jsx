import React from "react";
import { User } from "lucide-react";

const sizes = {
  xs: "w-8 h-8 text-sm",
  sm: "w-10 h-10 text-base",
  md: "w-14 h-14 text-lg",
  lg: "w-20 h-20 text-xl",
  xl: "w-28 h-28 text-3xl",
};

const Avatar = ({
  src = "",
  alt = "User",
  name = "",
  size = "md",
  status = null, // online | offline | busy | away
  bordered = true,
  rounded = "full", // full | xl
  className = "",
}) => {
  const initials = name
    ? name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "";

  const statusColor = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    busy: "bg-red-500",
    away: "bg-yellow-400",
  };

  return (
    <div className="relative inline-block">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`
            ${sizes[size]}
            object-cover
            ${
              rounded === "full"
                ? "rounded-full"
                : "rounded-2xl"
            }
            ${
              bordered
                ? "border-4 border-white dark:border-gray-900 shadow-lg"
                : ""
            }
            ${className}
          `}
        />
      ) : (
        <div
          className={`
            ${sizes[size]}
            flex
            items-center
            justify-center
            bg-gradient-to-br
            from-emerald-500
            to-blue-600
            text-white
            font-bold
            ${
              rounded === "full"
                ? "rounded-full"
                : "rounded-2xl"
            }
            ${
              bordered
                ? "border-4 border-white dark:border-gray-900 shadow-lg"
                : ""
            }
            ${className}
          `}
        >
          {initials || <User size={24} />}
        </div>
      )}

      {status && (
        <span
          className={`
            absolute
            bottom-1
            right-1
            h-3.5
            w-3.5
            rounded-full
            border-2
            border-white
            dark:border-gray-900
            ${statusColor[status]}
          `}
        />
      )}
    </div>
  );
};

export default Avatar;