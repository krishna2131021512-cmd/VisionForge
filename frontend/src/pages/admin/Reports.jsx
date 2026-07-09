import {
  FileText,
  Download,
  Calendar,
  BarChart3,
  PieChart,
  TrendingUp,
} from "lucide-react";

import Button from "../../components/common/Button";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";

const monthlyData = [
  { name: "Jan", value: 42 },
  { name: "Feb", value: 58 },
  { name: "Mar", value: 71 },
  { name: "Apr", value: 84 },
  { name: "May", value: 63 },
  { name: "Jun", value: 97 },
];

const categoryData = [
  { name: "Road", value: 38 },
  { name: "Garbage", value: 25 },
  { name: "Water", value: 18 },
  { name: "Electricity", value: 12 },
  { name: "Drainage", value: 7 },
];

const reports = [
  {
    id: 1,
    title: "Monthly Complaint Report",
    description: "Overall complaints received during this month.",
    date: "July 2026",
    status: "Generated",
  },
  {
    id: 2,
    title: "Department Performance Report",
    description: "Performance analysis of all departments.",
    date: "July 2026",
    status: "Generated",
  },
  {
    id: 3,
    title: "Citizen Feedback Report",
    description: "Feedback collected after complaint resolution.",
    date: "July 2026",
    status: "Pending",
  },
];

const Reports = () => {
  return (
    <div className="space-y-8">
      {/* Heading */}

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Reports
          </h1>

          <p className="mt-2 text-gray-500">
            Generate and download municipal reports and analytics.
          </p>
        </div>

        <Button>
          <Download size={18} />
          Export Report
        </Button>
      </div>

      {/* Summary */}

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl bg-white p-6 shadow-md dark:bg-gray-900">
          <FileText
            className="mb-4 text-emerald-600"
            size={36}
          />

          <h2 className="text-3xl font-bold">
            18
          </h2>

          <p className="mt-2 text-gray-500">
            Reports Generated
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md dark:bg-gray-900">
          <TrendingUp
            className="mb-4 text-blue-600"
            size={36}
          />

          <h2 className="text-3xl font-bold">
            94%
          </h2>

          <p className="mt-2 text-gray-500">
            Resolution Rate
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md dark:bg-gray-900">
          <Calendar
            className="mb-4 text-purple-600"
            size={36}
          />

          <h2 className="text-3xl font-bold">
            July 2026
          </h2>

          <p className="mt-2 text-gray-500">
            Current Reporting Period
          </p>
        </div>

      </div>

      {/* Charts */}

      <div className="grid gap-8 xl:grid-cols-2">

        <AnalyticsChart
          title="Monthly Complaint Analysis"
          type="bar"
          data={monthlyData}
        />

        <AnalyticsChart
          title="Complaint Category Distribution"
          type="pie"
          data={categoryData}
        />

      </div>

      {/* Reports */}

      <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900">

        <div className="mb-8 flex items-center gap-3">

          <BarChart3
            className="text-emerald-600"
            size={28}
          />

          <h2 className="text-2xl font-bold">
            Generated Reports
          </h2>

        </div>

        <div className="space-y-5">

          {reports.map((report) => (
            <div
              key={report.id}
              className="flex flex-col gap-5 rounded-2xl border border-gray-200 p-6 transition hover:shadow-lg dark:border-gray-700 md:flex-row md:items-center md:justify-between"
            >
              <div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {report.title}
                </h3>

                <p className="mt-2 text-gray-500">
                  {report.description}
                </p>

                <p className="mt-3 text-sm text-gray-400">
                  {report.date}
                </p>

              </div>

              <div className="flex items-center gap-4">

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    report.status === "Generated"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                  }`}
                >
                  {report.status}
                </span>

                <Button>
                  <Download size={18} />
                  Download
                </Button>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Insights */}

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900">

          <TrendingUp
            size={35}
            className="text-green-600"
          />

          <h2 className="mt-5 text-2xl font-bold">
            Key Insight
          </h2>

          <p className="mt-4 text-gray-500 leading-7">
            Road-related complaints account for the highest
            percentage of issues this month, representing nearly
            <span className="font-bold text-emerald-600">
              {" "}38%
            </span>
            {" "}of all reported complaints.
          </p>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900">

          <PieChart
            size={35}
            className="text-blue-600"
          />

          <h2 className="mt-5 text-2xl font-bold">
            Recommendation
          </h2>

          <p className="mt-4 text-gray-500 leading-7">
            Increase workforce allocation for the Road and
            Sanitation Departments to reduce complaint resolution
            time and improve citizen satisfaction.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Reports;