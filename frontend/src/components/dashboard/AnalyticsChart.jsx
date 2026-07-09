import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const COLORS = [
  "#10B981",
  "#3B82F6",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
];

const AnalyticsChart = ({
  title = "Analytics",
  data = [],
  type = "bar",
  dataKey = "value",
  xKey = "name",
  height = 320,
}) => {
  const renderChart = () => {
    switch (type) {
      case "line":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey={xKey} />
              <YAxis />
              <Tooltip />
              <Legend />

              <Line
                type="monotone"
                dataKey={dataKey}
                stroke="#10B981"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );

      case "area":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey={xKey} />
              <YAxis />
              <Tooltip />
              <Legend />

              <Area
                type="monotone"
                dataKey={dataKey}
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.25}
              />
            </AreaChart>
          </ResponsiveContainer>
        );

      case "pie":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Pie
                data={data}
                dataKey={dataKey}
                nameKey={xKey}
                outerRadius={110}
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[index % COLORS.length]
                    }
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );

      default:
        return (
          <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey={xKey} />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar
                dataKey={dataKey}
                radius={[10, 10, 0, 0]}
                fill="#10B981"
              />
            </BarChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div
      className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-md
        dark:border-gray-800
        dark:bg-gray-900
      "
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          {title}
        </h2>
      </div>

      {renderChart()}
    </div>
  );
};

export default AnalyticsChart;