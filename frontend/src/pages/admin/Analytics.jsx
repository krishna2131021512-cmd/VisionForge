import AnalyticsChart from "../../components/dashboard/AnalyticsChart";
import StatsCard from "../../components/cards/StatsCard";
import {
  ClipboardList,
  CheckCircle2,
  Clock3,
  AlertTriangle,
} from "lucide-react";

const monthlyComplaints = [
  { name: "Jan", value: 120 },
  { name: "Feb", value: 145 },
  { name: "Mar", value: 170 },
  { name: "Apr", value: 190 },
  { name: "May", value: 165 },
  { name: "Jun", value: 220 },
];

const resolvedTrend = [
  { name: "Jan", value: 90 },
  { name: "Feb", value: 110 },
  { name: "Mar", value: 135 },
  { name: "Apr", value: 150 },
  { name: "May", value: 170 },
  { name: "Jun", value: 200 },
];

const categoryData = [
  { name: "Road", value: 220 },
  { name: "Garbage", value: 170 },
  { name: "Water", value: 120 },
  { name: "Drainage", value: 80 },
  { name: "Electricity", value: 95 },
];

const departmentPerformance = [
  { name: "Road", value: 88 },
  { name: "Water", value: 76 },
  { name: "Garbage", value: 91 },
  { name: "Electricity", value: 83 },
  { name: "Drainage", value: 71 },
];

const Analytics = () => {
  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Analytics Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Monitor complaint trends, department performance,
          and platform statistics.
        </p>
      </div>

      {/* Statistics */}

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
          change="+12%"
        />

        <StatsCard
          title="Pending"
          value="214"
          icon={<Clock3 size={28} />}
          color="from-yellow-500 to-orange-500"
          change="-5%"
        />

        <StatsCard
          title="Critical"
          value="42"
          icon={<AlertTriangle size={28} />}
          color="from-red-500 to-pink-600"
          change="+3%"
        />
      </div>

      {/* Charts */}

      <div className="grid gap-8 xl:grid-cols-2">
        <AnalyticsChart
          title="Monthly Complaints"
          type="bar"
          data={monthlyComplaints}
        />

        <AnalyticsChart
          title="Complaint Resolution Trend"
          type="line"
          data={resolvedTrend}
        />
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <AnalyticsChart
          title="Complaint Categories"
          type="pie"
          data={categoryData}
        />

        <AnalyticsChart
          title="Department Performance (%)"
          type="area"
          data={departmentPerformance}
        />
      </div>

      {/* Summary */}

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900">
          <h2 className="text-2xl font-bold">
            Best Performing Department
          </h2>

          <p className="mt-4 text-4xl font-bold text-emerald-600">
            Sanitation
          </p>

          <p className="mt-2 text-gray-500">
            91% complaints resolved within target time.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900">
          <h2 className="text-2xl font-bold">
            Average Resolution Time
          </h2>

          <p className="mt-4 text-4xl font-bold text-blue-600">
            2.8 Days
          </p>

          <p className="mt-2 text-gray-500">
            Average time required to resolve a complaint.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900">
          <h2 className="text-2xl font-bold">
            Citizen Satisfaction
          </h2>

          <p className="mt-4 text-4xl font-bold text-purple-600">
            94%
          </p>

          <p className="mt-2 text-gray-500">
            Based on post-resolution feedback received.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;