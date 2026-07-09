import { useState } from "react";
import {
  ClipboardList,
  Filter,
  Plus,
} from "lucide-react";

import ComplaintTable from "../../components/dashboard/ComplaintTable";
import SearchBar from "../../components/common/SearchBar";
import Button from "../../components/common/Button";

const IssueManagement = () => {
  const [search, setSearch] = useState("");

  const complaints = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=500",
      title: "Large Pothole Near Bus Stand",
      description: "Road damage causing accidents.",
      category: "Road Damage",
      location: "Anna Salai",
      date: "08 Jul 2026",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500",
      title: "Garbage Overflow",
      description: "Garbage bins overflowing.",
      category: "Garbage",
      location: "Lawspet",
      date: "07 Jul 2026",
      priority: "Medium",
      status: "Assigned",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=500",
      title: "Street Light Failure",
      description: "Street lights not working.",
      category: "Electricity",
      location: "Muthialpet",
      date: "06 Jul 2026",
      priority: "Low",
      status: "Resolved",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500",
      title: "Water Leakage",
      description: "Pipeline leakage on the main road.",
      category: "Water Supply",
      location: "White Town",
      date: "05 Jul 2026",
      priority: "High",
      status: "In Progress",
    },
  ];

  const filteredComplaints = complaints.filter(
    (item) =>
      item.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.category
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.location
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Heading */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Issue Management
          </h1>

          <p className="mt-2 text-gray-500">
            View, assign and manage all reported civic
            complaints.
          </p>
        </div>

        <Button>
          <Plus size={18} />
          New Issue
        </Button>

      </div>

      {/* Search & Filter */}

      <div className="flex flex-col gap-4 md:flex-row">

        <div className="flex-1">
          <SearchBar
            placeholder="Search complaints..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <Button variant="outline">
          <Filter size={18} />
          Filters
        </Button>

      </div>

      {/* Summary */}

      <div className="grid gap-6 md:grid-cols-4">

        <div className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
          <ClipboardList
            className="mb-3 text-emerald-600"
            size={30}
          />

          <h3 className="text-3xl font-bold">
            {complaints.length}
          </h3>

          <p className="text-gray-500">
            Total Issues
          </p>
        </div>

        <div className="rounded-2xl bg-yellow-50 p-6 shadow-md dark:bg-yellow-900/20">
          <h3 className="text-3xl font-bold text-yellow-600">
            6
          </h3>

          <p>Pending</p>
        </div>

        <div className="rounded-2xl bg-blue-50 p-6 shadow-md dark:bg-blue-900/20">
          <h3 className="text-3xl font-bold text-blue-600">
            12
          </h3>

          <p>Assigned</p>
        </div>

        <div className="rounded-2xl bg-green-50 p-6 shadow-md dark:bg-green-900/20">
          <h3 className="text-3xl font-bold text-green-600">
            45
          </h3>

          <p>Resolved</p>
        </div>

      </div>

      {/* Complaint Table */}

      <ComplaintTable
        complaints={filteredComplaints}
        onView={(item) =>
          console.log("View", item)
        }
        onEdit={(item) =>
          console.log("Edit", item)
        }
        onDelete={(item) =>
          console.log("Delete", item)
        }
      />
    </div>
  );
};

export default IssueManagement;