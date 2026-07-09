import React from "react";
import {
  CheckCircle2,
  Clock3,
  AlertTriangle,
  UserCheck,
  Wrench,
  MapPin,
  FilePlus2,
} from "lucide-react";

const iconMap = {
  reported: {
    icon: <FilePlus2 size={18} />,
    color:
      "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300",
  },
  assigned: {
    icon: <UserCheck size={18} />,
    color:
      "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300",
  },
  progress: {
    icon: <Wrench size={18} />,
    color:
      "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300",
  },
  resolved: {
    icon: <CheckCircle2 size={18} />,
    color:
      "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300",
  },
  pending: {
    icon: <Clock3 size={18} />,
    color:
      "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-300",
  },
  rejected: {
    icon: <AlertTriangle size={18} />,
    color:
      "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300",
  },
};

const ActivityTimeline = ({
  activities = [],
  title = "Recent Activity",
}) => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white shadow-md dark:border-gray-800 dark:bg-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-5 dark:border-gray-800">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          {title}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Latest updates on complaints and activities.
        </p>
      </div>

      {/* Timeline */}
      <div className="p-6">
        {activities.length === 0 ? (
          <div className="py-14 text-center">
            <Clock3
              size={50}
              className="mx-auto text-gray-300"
            />

            <h3 className="mt-4 text-lg font-semibold text-gray-700 dark:text-white">
              No Recent Activity
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Activities will appear here once users interact
              with the system.
            </p>
          </div>
        ) : (
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

            {activities.map((activity, index) => {
              const item =
                iconMap[activity.type] ||
                iconMap.pending;

              return (
                <div
                  key={activity.id || index}
                  className="relative mb-8 flex gap-5 last:mb-0"
                >
                  {/* Icon */}
                  <div
                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800">

                    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">

                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {activity.title}
                      </h3>

                      <span className="text-xs text-gray-500">
                        {activity.time}
                      </span>

                    </div>

                    <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      {activity.description}
                    </p>

                    {activity.location && (
                      <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={15} />
                        {activity.location}
                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityTimeline;