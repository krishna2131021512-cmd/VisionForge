import {
  ClipboardList,
  CheckCircle2,
  Clock3,
  Users,
} from "lucide-react";

import StatsCard from "../../components/cards/StatsCard";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";
import ComplaintTable from "../../components/dashboard/ComplaintTable";
import NotificationPanel from "../../components/dashboard/NotificationPanel";

const monthlyData = [
  { name: "Jan", value: 42 },
  { name: "Feb", value: 55 },
  { name: "Mar", value: 68 },
  { name: "Apr", value: 81 },
  { name: "May", value: 74 },
  { name: "Jun", value: 96 },
];

const complaints = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400",
    title: "Large Pothole Near Bus Stand",
    description: "Road damage causing traffic.",
    category: "Road Damage",
    location: "Anna Salai",
    date: "08 Jul 2026",
    priority: "High",
    status: "Pending",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400",
    title: "Garbage Overflow",
    description: "Garbage not collected.",
    category: "Garbage",
    location: "Lawspet",
    date: "07 Jul 2026",
    priority: "Medium",
    status: "Assigned",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=400",
    title: "Street Light Not Working",
    description: "Lights are off at night.",
    category: "Electricity",
    location: "Muthialpet",
    date: "06 Jul 2026",
    priority: "Low",
    status: "Resolved",
  },
];

const notifications = [
  {
    id: 1,
    title: "New Complaint",
    message: "A new pothole complaint has been submitted.",
    type: "info",
    time: "5 min ago",
    read: false,
  },
  {
    id: 2,
    title: "Complaint Resolved",
    message: "Road Department resolved Complaint #104.",
    type: "success",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    title: "Department Alert",
    message: "Water Department has 15 pending complaints.",
    type: "warning",
    time: "Today",
    read: true,
  },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Municipal Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Monitor complaints, departments and city performance.
        </p>
      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Complaints"
          value="1,248"
          icon={<ClipboardList size={28} />}
          change="+18%"
        />

        <StatsCard
          title="Resolved"
          value="934"
          icon={<CheckCircle2 size={28} />}
          color="from-green-500 to-emerald-600"
          change="75%"
        />

        <StatsCard
          title="Pending"
          value="214"
          icon={<Clock3 size={28} />}
          color="from-yellow-500 to-orange-500"
          change="17%"
        />

        <StatsCard
          title="Active Citizens"
          value="8,425"
          icon={<Users size={28} />}
          color="from-blue-500 to-cyan-600"
          change="+120"
        />
      </div>

      {/* Charts */}

      <div className="grid gap-8 xl:grid-cols-2">
        <AnalyticsChart
          title="Monthly Complaints"
          type="bar"
          data={monthlyData}
        />

        <AnalyticsChart
          title="Complaint Trend"
          type="line"
          data={monthlyData}
        />
      </div>

      {/* Complaint Table */}

      <ComplaintTable
        complaints={complaints}
        onView={(item) => console.log(item)}
        onEdit={(item) => console.log(item)}
        onDelete={(item) => console.log(item)}
      />

      {/* Notifications */}

      <NotificationPanel
        title="Recent Notifications"
        notifications={notifications}
      />
    </div>
  );
};

export default AdminDashboard;