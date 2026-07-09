import NotificationPanel from "../../components/dashboard/NotificationPanel";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "Complaint Submitted",
      message:
        "Your complaint regarding a pothole has been successfully submitted.",
      type: "success",
      time: "Just now",
      read: false,
    },
    {
      id: 2,
      title: "Complaint Assigned",
      message:
        "Your complaint has been assigned to the Road Department.",
      type: "info",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      title: "Work In Progress",
      message:
        "Municipal workers have started repairing the reported issue.",
      type: "warning",
      time: "Yesterday",
      read: true,
    },
    {
      id: 4,
      title: "Complaint Resolved",
      message:
        "Your reported garbage issue has been successfully resolved.",
      type: "success",
      time: "2 days ago",
      read: true,
    },
    {
      id: 5,
      title: "Complaint Rejected",
      message:
        "The submitted complaint could not be verified. Please upload clearer evidence.",
      type: "error",
      time: "3 days ago",
      read: true,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Heading */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Notifications
        </h1>

        <p className="mt-2 text-gray-500">
          Stay updated with the latest activities related to your complaints.
        </p>
      </div>

      {/* Notification Panel */}
      <NotificationPanel
        title="All Notifications"
        notifications={notifications}
        onViewAll={() => console.log("View All")}
      />
    </div>
  );
};

export default Notifications;