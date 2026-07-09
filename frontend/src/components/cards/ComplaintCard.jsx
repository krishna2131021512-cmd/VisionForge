import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Eye,
  ArrowRight,
} from "lucide-react";

const priorityColors = {
  Low: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  Medium:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  High: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  Critical:
    "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
};

const statusColors = {
  Pending:
    "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",

  Assigned:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",

  "In Progress":
    "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",

  Resolved:
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",

  Rejected:
    "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
};

const ComplaintCard = ({
  image,
  title,
  category,
  description,
  location,
  date,
  priority = "Low",
  status = "Pending",
  onView,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{ duration: 0.3 }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
        shadow-md
        transition-all
        duration-300
        hover:shadow-2xl
        dark:border-gray-800
        dark:bg-gray-900
      "
    >
      {/* Image */}

      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 hover:scale-110"
        />

        {/* Status */}

        <span
          className={`
            absolute
            left-4
            top-4
            rounded-full
            px-3
            py-1
            text-xs
            font-semibold
            ${statusColors[status]}
          `}
        >
          {status}
        </span>

        {/* Priority */}

        <span
          className={`
            absolute
            right-4
            top-4
            rounded-full
            px-3
            py-1
            text-xs
            font-semibold
            ${priorityColors[priority]}
          `}
        >
          {priority}
        </span>
      </div>

      {/* Content */}

      <div className="p-6">

        <div className="mb-3 flex items-center justify-between">

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            {category}
          </span>

        </div>

        <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-white">
          {title}
        </h3>

        <p className="line-clamp-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
          {description}
        </p>

        {/* Info */}

        <div className="mt-5 space-y-3">

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <MapPin size={16} />
            {location}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Calendar size={16} />
            {date}
          </div>

        </div>

        {/* Footer */}

        <div className="mt-6 flex items-center justify-between">

          <button
            onClick={onView}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-emerald-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-emerald-700
            "
          >
            <Eye size={18} />
            View Details
          </button>

          <ArrowRight
            size={22}
            className="text-gray-400 transition group-hover:translate-x-2"
          />

        </div>

      </div>
    </motion.div>
  );
};

export default ComplaintCard;