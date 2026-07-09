import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FeatureCard = ({
  icon,
  title,
  description,
  color = "from-emerald-500 to-blue-600",
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.3,
      }}
      onClick={onClick}
      className="
        group
        relative
        overflow-hidden
        cursor-pointer
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-7
        shadow-md
        transition-all
        duration-300
        hover:shadow-2xl
        hover:border-emerald-500
        dark:bg-gray-900
        dark:border-gray-800
      "
    >
      {/* Background Glow */}
      <div
        className={`
          absolute
          -right-16
          -top-16
          h-36
          w-36
          rounded-full
          bg-gradient-to-br
          ${color}
          opacity-10
          blur-3xl
          transition-all
          duration-500
          group-hover:opacity-30
        `}
      />

      {/* Icon */}
      <div
        className={`
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          ${color}
          text-white
          shadow-lg
          transition-transform
          duration-300
          group-hover:rotate-6
          group-hover:scale-110
        `}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="leading-7 text-gray-500 dark:text-gray-400">
        {description}
      </p>

      {/* Learn More */}
      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-all duration-300 group-hover:gap-4">
        Learn More

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </motion.div>
  );
};

export default FeatureCard;