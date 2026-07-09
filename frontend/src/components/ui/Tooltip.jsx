import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tooltip = ({
  children,
  text,
  position = "top", // top | bottom | left | right
  delay = 200,
}) => {
  const [visible, setVisible] = useState(false);

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() =>
        setTimeout(() => setVisible(true), delay)
      }
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: position === "top" ? 6 : position === "bottom" ? -6 : 0,
              x: position === "left" ? 6 : position === "right" ? -6 : 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: 0.2,
            }}
            className={`
              absolute
              z-50
              whitespace-nowrap
              rounded-xl
              bg-gray-900
              px-3
              py-2
              text-xs
              font-medium
              text-white
              shadow-xl
              dark:bg-gray-700
              ${positions[position]}
            `}
          >
            {text}

            {/* Arrow */}

            {position === "top" && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700" />
            )}

            {position === "bottom" && (
              <div className="absolute left-1/2 bottom-full -translate-x-1/2 border-4 border-transparent border-b-gray-900 dark:border-b-gray-700" />
            )}

            {position === "left" && (
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900 dark:border-l-gray-700" />
            )}

            {position === "right" && (
              <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900 dark:border-r-gray-700" />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;