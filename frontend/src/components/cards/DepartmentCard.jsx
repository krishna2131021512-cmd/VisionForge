import { motion } from "framer-motion";
import {
  Users,
  ClipboardList,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const DepartmentCard = ({
  name,
  description,
  icon,
  head,
  totalComplaints = 0,
  resolvedComplaints = 0,
  activeMembers = 0,
  color = "from-emerald-500 to-blue-600",
  onView,
}) => {
  const completion =
    totalComplaints > 0
      ? Math.round((resolvedComplaints / totalComplaints) * 100)
      : 0;

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
          -right-16
          -top-16
          h-36
          w-36
          rounded-full
          bg-gradient-to-br
          ${color}
          opacity-10
          blur-3xl
        `}
      />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div
          className={`
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
          `}
        >
          {icon}
        </div>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
          {completion}% Resolved
        </span>
      </div>

      {/* Department Name */}
      <h2 className="mt-5 text-2xl font-bold text-gray-800 dark:text-white">
        {name}
      </h2>

      {/* Description */}
      <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
        {description}
      </p>

      {/* Department Head */}
      <div className="mt-4 rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
        <p className="text-xs uppercase tracking-wide text-gray-500">
          Department Head
        </p>

        <h3 className="mt-1 font-semibold text-gray-800 dark:text-white">
          {head}
        </h3>
      </div>

      {/* Statistics */}
      <div className="mt-6 grid grid-cols-3 gap-3">

        <div className="rounded-xl bg-blue-50 p-3 text-center dark:bg-blue-900/20">
          <ClipboardList
            size={22}
            className="mx-auto mb-2 text-blue-600"
          />

          <h4 className="text-lg font-bold text-gray-800 dark:text-white">
            {totalComplaints}
          </h4>

          <p className="text-xs text-gray-500">
            Complaints
          </p>
        </div>

        <div className="rounded-xl bg-green-50 p-3 text-center dark:bg-green-900/20">
          <CheckCircle2
            size={22}
            className="mx-auto mb-2 text-green-600"
          />

          <h4 className="text-lg font-bold text-gray-800 dark:text-white">
            {resolvedComplaints}
          </h4>

          <p className="text-xs text-gray-500">
            Resolved
          </p>
        </div>

        <div className="rounded-xl bg-purple-50 p-3 text-center dark:bg-purple-900/20">
          <Users
            size={22}
            className="mx-auto mb-2 text-purple-600"
          />

          <h4 className="text-lg font-bold text-gray-800 dark:text-white">
            {activeMembers}
          </h4>

          <p className="text-xs text-gray-500">
            Members
          </p>
        </div>

      </div>

      {/* Progress */}
      <div className="mt-6">

        <div className="mb-2 flex justify-between text-sm">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            Resolution Progress
          </span>

          <span className="font-bold text-emerald-600">
            {completion}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className={`
              h-full
              rounded-full
              bg-gradient-to-r
              ${color}
            `}
            style={{
              width: `${completion}%`,
            }}
          />
        </div>

      </div>

      {/* Button */}
      <button
        onClick={onView}
        className="
          mt-8
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-gradient-to-r
          from-emerald-600
          to-blue-600
          py-3
          font-semibold
          text-white
          transition-all
          duration-300
          hover:shadow-lg
        "
      >
        View Department

        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
};

export default DepartmentCard;