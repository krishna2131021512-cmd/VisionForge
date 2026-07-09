import {
  ClipboardList,
  CheckCircle2,
  Clock3,
  AlertTriangle,
} from "lucide-react";

import StatsCard from "../../components/cards/StatsCard";
import ComplaintCard from "../../components/cards/ComplaintCard";
import NotificationPanel from "../../components/dashboard/NotificationPanel";
import ActivityTimeline from "../../components/dashboard/ActivityTimeline";

const CitizenDashboard = () => {
  const complaints = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800",
      title: "Large Pothole Near Bus Stand",
      category: "Road Damage",
      description:
        "Large pothole causing traffic congestion and accidents.",
      location: "Anna Salai, Puducherry",
      date: "08 Jul 2026",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
      title: "Garbage Overflow",
      category: "Garbage",
      description:
        "Garbage has not been collected for several days.",
      location: "Lawspet",
      date: "06 Jul 2026",
      priority: "Medium",
      status: "Resolved",
    },
  ];

  const notifications = [
    {
      id: 1,
      title: "Complaint Assigned",
      message:
        "Your complaint has been assigned to the Road Department.",
      time: "2 hours ago",
      type: "info",
      read: false,
    },
    {
      id: 2,
      title: "Complaint Resolved",
      message:
        "Garbage complaint has been resolved successfully.",
      time: "Yesterday",
      type: "success",
      read: true,
    },
  ];

  const activities = [
    {
      id: 1,
      type: "reported",
      title: "Complaint Submitted",
      description:
        "You reported a pothole near Anna Salai.",
      location: "Anna Salai",
      time: "08 Jul 2026",
    },
    {
      id: 2,
      type: "assigned",
      title: "Assigned to Department",
      description:
        "Road Department accepted your complaint.",
      location: "Puducherry",
      time: "09 Jul 2026",
    },
    {
      id: 3,
      type: "progress",
      title: "Repair Work Started",
      description:
        "Municipal workers have started repair work.",
      location: "Anna Salai",
      time: "10 Jul 2026",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-gray-500">
          Here's an overview of your complaints and
          activities.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Complaints"
          value="18"
          icon={<ClipboardList size={28} />}
          change="+3 this month"
        />

        <StatsCard
          title="Resolved"
          value="12"
          icon={<CheckCircle2 size={28} />}
          color="from-green-500 to-emerald-600"
          change="67%"
        />

        <StatsCard
          title="Pending"
          value="5"
          icon={<Clock3 size={28} />}
          color="from-yellow-500 to-orange-500"
          change="Awaiting Action"
        />

        <StatsCard
          title="Critical"
          value="1"
          icon={<AlertTriangle size={28} />}
          color="from-red-500 to-pink-600"
          change="High Priority"
        />
      </div>

      {/* Recent Complaints */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          Recent Complaints
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {complaints.map((complaint) => (
            <ComplaintCard
              key={complaint.id}
              {...complaint}
            />
          ))}
        </div>
      </div>

      {/* Activity & Notifications */}
      <div className="grid gap-8 lg:grid-cols-2">
        <ActivityTimeline
          title="Recent Activity"
          activities={activities}
        />

        <NotificationPanel
          notifications={notifications}
        />
      </div>
    </div>
  );
};

export default CitizenDashboard;