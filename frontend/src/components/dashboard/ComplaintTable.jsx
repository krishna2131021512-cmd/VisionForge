import React from "react";
import {
  Eye,
  Pencil,
  Trash2,
  MapPin,
  Calendar,
} from "lucide-react";

const statusColors = {
  Pending:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",

  Assigned:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",

  "In Progress":
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",

  Resolved:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",

  Rejected:
    "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
};

const priorityColors = {
  Low: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",

  Medium:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",

  High:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",

  Critical:
    "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
};

const ComplaintTable = ({
  complaints = [],
  onView = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md dark:border-gray-800 dark:bg-gray-900">

      {/* Header */}

      <div className="border-b border-gray-200 px-6 py-5 dark:border-gray-800">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Complaint Management
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          View and manage reported civic issues.
        </p>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-100 dark:bg-gray-800">

            <tr className="text-left">

              <th className="px-6 py-4 text-sm font-semibold">
                Complaint
              </th>

              <th className="px-6 py-4 text-sm font-semibold">
                Category
              </th>

              <th className="px-6 py-4 text-sm font-semibold">
                Location
              </th>

              <th className="px-6 py-4 text-sm font-semibold">
                Date
              </th>

              <th className="px-6 py-4 text-sm font-semibold">
                Priority
              </th>

              <th className="px-6 py-4 text-sm font-semibold">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {complaints.length === 0 ? (

              <tr>

                <td
                  colSpan={7}
                  className="py-16 text-center text-gray-500"
                >
                  No complaints available.
                </td>

              </tr>

            ) : (

              complaints.map((complaint) => (

                <tr
                  key={complaint.id}
                  className="border-b border-gray-100 transition hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/40"
                >

                  {/* Complaint */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <img
                        src={complaint.image}
                        alt={complaint.title}
                        className="h-14 w-14 rounded-xl object-cover"
                      />

                      <div>

                        <h3 className="font-semibold text-gray-800 dark:text-white">
                          {complaint.title}
                        </h3>

                        <p className="mt-1 line-clamp-1 text-sm text-gray-500">
                          {complaint.description}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Category */}

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                      {complaint.category}
                    </span>
                  </td>

                  {/* Location */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">

                      <MapPin size={16} />

                      {complaint.location}

                    </div>

                  </td>

                  {/* Date */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">

                      <Calendar size={16} />

                      {complaint.date}

                    </div>

                  </td>

                  {/* Priority */}

                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityColors[complaint.priority]}`}
                    >
                      {complaint.priority}
                    </span>

                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColors[complaint.status]}`}
                    >
                      {complaint.status}
                    </span>

                  </td>

                  {/* Actions */}

                  <td className="px-6 py-5">

                    <div className="flex items-center justify-center gap-2">

                      <button
                        onClick={() => onView(complaint)}
                        className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        onClick={() => onEdit(complaint)}
                        className="rounded-lg bg-yellow-100 p-2 text-yellow-600 transition hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() => onDelete(complaint)}
                        className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ComplaintTable;