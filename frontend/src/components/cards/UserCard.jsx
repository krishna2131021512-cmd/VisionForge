import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Shield,
  UserCheck,
  UserX,
  ArrowRight,
} from "lucide-react";

const UserCard = ({
  avatar = "https://ui-avatars.com/api/?background=10B981&color=fff",
  name,
  email,
  phone,
  location,
  role = "Citizen",
  status = "Active",
  complaints = 0,
  joinedDate,
  onView,
}) => {
  const statusStyle =
    status === "Active"
      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
      : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";

  const roleStyle =
    role === "Admin"
      ? "from-purple-500 to-indigo-600"
      : "from-emerald-500 to-blue-600";

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
          ${roleStyle}
          opacity-10
          blur-3xl
        `}
      />

      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="h-20 w-20 rounded-full object-cover border-4 border-white shadow-lg"
        />

        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {name}
          </h2>

          <span
            className={`
              mt-2
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-gradient-to-r
              ${roleStyle}
              px-3
              py-1
              text-xs
              font-semibold
              text-white
            `}
          >
            <Shield size={14} />
            {role}
          </span>
        </div>
      </div>

      {/* Contact */}
      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
          <Mail size={18} className="text-emerald-600" />
          <span>{email}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
          <Phone size={18} className="text-blue-600" />
          <span>{phone}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
          <MapPin size={18} className="text-red-500" />
          <span>{location}</span>
        </div>

      </div>

      {/* Statistics */}
      <div className="mt-6 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-gray-100 p-4 text-center dark:bg-gray-800">
          <p className="text-2xl font-bold text-emerald-600">
            {complaints}
          </p>

          <p className="text-xs text-gray-500">
            Complaints
          </p>
        </div>

        <div className="rounded-2xl bg-gray-100 p-4 text-center dark:bg-gray-800">
          <p className="text-sm font-bold text-gray-800 dark:text-white">
            {joinedDate}
          </p>

          <p className="text-xs text-gray-500">
            Joined
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">

        <span
          className={`
            flex
            items-center
            gap-2
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            ${statusStyle}
          `}
        >
          {status === "Active" ? (
            <UserCheck size={16} />
          ) : (
            <UserX size={16} />
          )}

          {status}
        </span>

        <button
          onClick={onView}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-emerald-600
            to-blue-600
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:shadow-lg
          "
        >
          View
          <ArrowRight size={18} />
        </button>

      </div>
    </motion.div>
  );
};

export default UserCard;