import { useState } from "react";

import SearchBar from "../../components/common/SearchBar";
import ComplaintCard from "../../components/cards/ComplaintCard";
import EmptyState from "../../components/common/EmptyState";
import Pagination from "../../components/common/Pagination";

const MyComplaints = () => {
  const [search, setSearch] = useState("");

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
      location: "Lawspet, Puducherry",
      date: "06 Jul 2026",
      priority: "Medium",
      status: "Resolved",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800",
      title: "Street Light Not Working",
      category: "Electricity",
      description:
        "Street lights are not functioning during night.",
      location: "Muthialpet",
      date: "05 Jul 2026",
      priority: "Low",
      status: "In Progress",
    },
  ];

  const filteredComplaints = complaints.filter(
    (complaint) =>
      complaint.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      complaint.category
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      complaint.status
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Complaints
          </h1>

          <p className="mt-2 text-gray-500">
            View and track all complaints you have submitted.
          </p>
        </div>

        <SearchBar
          placeholder="Search complaints..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      {/* Complaint Cards */}

      {filteredComplaints.length === 0 ? (
        <EmptyState
          title="No Complaints Found"
          description="You haven't submitted any complaints yet."
        />
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredComplaints.map((complaint) => (
              <ComplaintCard
                key={complaint.id}
                {...complaint}
                onView={() =>
                  console.log("View Complaint")
                }
              />
            ))}
          </div>

          {/* Pagination */}

          <Pagination
            currentPage={1}
            totalPages={1}
            onPageChange={() => {}}
          />
        </>
      )}
    </div>
  );
};

export default MyComplaints;