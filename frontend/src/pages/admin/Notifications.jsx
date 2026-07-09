import NotificationPanel from "../../components/dashboard/NotificationPanel";

const notifications = [
  {
    id: 1,
    title: "New Complaint Received",
    message:
      "A new road damage complaint has been submitted near Anna Salai.",
    type: "info",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: 2,
    title: "Complaint Assigned",
    message:
      "Complaint #VF-2026-104 has been assigned to the Road Department.",
    type: "success",
    time: "30 minutes ago",
    read: false,
  },
  {
    id: 3,
    title: "High Priority Alert",
    message:
      "A critical drainage complaint requires immediate attention.",
    type: "warning",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 4,
    title: "Complaint Resolved",
    message:
      "Garbage overflow complaint at Lawspet has been resolved successfully.",
    type: "success",
    time: "Yesterday",
    read: true,
  },
  {
    id: 5,
    title: "Department Delay",
    message:
      "Water Supply Department has 18 unresolved complaints pending.",
    type: "error",
    time: "Yesterday",
    read: true,
  },
  {
    id: 6,
    title: "Weekly Report Generated",
    message:
      "Weekly municipal performance report is ready for download.",
    type: "info",
    time: "2 days ago",
    read: true,
  },
];

const Notifications = () => {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Notifications
        </h1>

        <p className="mt-2 text-gray-500">
          View all municipal alerts, complaint updates, and
          system notifications.
        </p>
      </div>

      {/* Notification Panel */}
      <NotificationPanel
        title="Municipal Notifications"
        notifications={notifications}
        onViewAll={() => console.log("View All")}
      />
    </div>
  );
};

export default Notifications;