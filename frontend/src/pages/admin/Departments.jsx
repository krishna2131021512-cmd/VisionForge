import {
  Truck,
  Droplets,
  Lightbulb,
  Trash2,
  Trees,
  Building2,
} from "lucide-react";

import DepartmentCard from "../../components/cards/DepartmentCard";
import SearchBar from "../../components/common/SearchBar";

const Departments = () => {
  const departments = [
    {
      id: 1,
      name: "Road Department",
      description:
        "Responsible for road maintenance, potholes, and public infrastructure.",
      head: "Mr. Rajesh Kumar",
      icon: <Truck size={28} />,
      totalComplaints: 245,
      resolvedComplaints: 198,
      activeMembers: 32,
    },
    {
      id: 2,
      name: "Water Supply",
      description:
        "Handles water leakage, pipeline maintenance and supply issues.",
      head: "Mrs. Priya Sharma",
      icon: <Droplets size={28} />,
      color: "from-cyan-500 to-blue-600",
      totalComplaints: 172,
      resolvedComplaints: 151,
      activeMembers: 21,
    },
    {
      id: 3,
      name: "Electricity",
      description:
        "Maintains street lights and public electrical infrastructure.",
      head: "Mr. Arun Kumar",
      icon: <Lightbulb size={28} />,
      color: "from-yellow-500 to-orange-500",
      totalComplaints: 98,
      resolvedComplaints: 87,
      activeMembers: 18,
    },
    {
      id: 4,
      name: "Sanitation",
      description:
        "Responsible for garbage collection and public cleanliness.",
      head: "Mrs. Kavitha",
      icon: <Trash2 size={28} />,
      color: "from-green-500 to-emerald-600",
      totalComplaints: 310,
      resolvedComplaints: 276,
      activeMembers: 42,
    },
    {
      id: 5,
      name: "Parks & Gardens",
      description:
        "Maintains public parks, gardens and green spaces.",
      head: "Mr. Dinesh",
      icon: <Trees size={28} />,
      color: "from-lime-500 to-green-600",
      totalComplaints: 54,
      resolvedComplaints: 49,
      activeMembers: 11,
    },
    {
      id: 6,
      name: "Public Buildings",
      description:
        "Maintains government buildings and public facilities.",
      head: "Mrs. Lakshmi",
      icon: <Building2 size={28} />,
      color: "from-purple-500 to-indigo-600",
      totalComplaints: 67,
      resolvedComplaints: 58,
      activeMembers: 16,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Departments
          </h1>

          <p className="mt-2 text-gray-500">
            Manage municipal departments and monitor their
            performance.
          </p>
        </div>

        <SearchBar placeholder="Search department..." />
      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {departments.map((department) => (
          <DepartmentCard
            key={department.id}
            {...department}
            onView={() =>
              console.log(department.name)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Departments;