import React from "react";
import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  Info,
  XCircle,
  Clock,
} from "lucide-react";

const notificationStyles = {
  success: {
    icon: <CheckCircle2 size={20} />,
    bg: "bg-green-100 dark:bg-green-900/30",
    text: "text-green-600",
    border: "border-green-200 dark:border-green-800",
  },

  warning: {
    icon: <AlertTriangle size={20} />,
    bg: "bg-yellow-100 dark:bg-yellow-900/30",
    text: "text-yellow-600",
    border: "border-yellow-200 dark:border-yellow-800",
  },

  error: {
    icon: <XCircle size={20} />,
    bg: "bg-red-100 dark:bg-red-900/30",
    text: "text-red-600",
    border: "border-red-200 dark:border-red-800",
  },

  info: {
    icon: <Info size={20} />,
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600",
    border: "border-blue-200 dark:border-blue-800",
  },
};

const NotificationPanel = ({
  notifications = [],
  title = "Notifications",
  onViewAll = () => {},
}) => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white shadow-md dark:border-gray-800 dark:bg-gray-900">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <Bell className="text-emerald-600" size={22} />

          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {title}
          </h2>
        </div>

        <button
          onClick={onViewAll}
          className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
        >
          View All
        </button>
      </div>

      {/* Notifications */}
      <div className="max-h-[500px] overflow-y-auto">

        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <Bell
              size={55}
              className="text-gray-300"
            />

            <h3 className="mt-4 text-lg font-semibold text-gray-700 dark:text-white">
              No Notifications
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              You're all caught up.
            </p>
          </div>
        ) : (
          notifications.map((notification) => {
            const style =
              notificationStyles[
                notification.type
              ] ||
              notificationStyles.info;

            return (
              <div
                key={notification.id}
                className={`border-b border-gray-100 p-5 transition hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/40`}
              >
                <div className="flex gap-4">

                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.bg}`}
                  >
                    <span className={style.text}>
                      {style.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <div className="flex items-center justify-between">

                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {notification.title}
                      </h3>

                      {!notification.read && (
                        <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
                      )}

                    </div>

                    <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      {notification.message}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                      <Clock size={14} />
                      {notification.time}
                    </div>

                  </div>

                </div>
              </div>
            );
          })
        )}

      </div>
    </div>
  );
};

export default NotificationPanel;