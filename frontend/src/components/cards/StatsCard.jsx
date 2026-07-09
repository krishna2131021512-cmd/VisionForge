import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const StatsCard = ({
  title,
  value,
  icon,
  change,
  trend = "up",
  color = "from-emerald-500 to-blue-600",
  subtitle = "",
}) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-md
        transition-all
        duration-300
        hover:shadow-2xl
        dark:border-gray-800
        dark:bg-gray-900
      "
    >
      {/* Background Glow */}
      <div
        className={`
          absolute
          -right-14
          -top-14
          h-32
          w-32
          rounded-full
          bg-gradient-to-br
          ${color}
          opacity-10
          blur-3xl
        `}
      />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-800 dark:text-white">
            {value}
          </h2>
        </div>

        <div
          className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            ${color}
            text-white
            shadow-lg
          `}
        >
          {icon}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        {change && (
          <div
            className={`
              flex
              items-center
              gap-2
              rounded-full
              px-3
              py-1
              text-sm
              font-semibold
              ${
                trend === "up"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
                  : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400"
              }
            `}
          >
            {trend === "up" ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} />
            )}

            {change}
          </div>
        )}

        {subtitle && (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {subtitle}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default StatsCard;