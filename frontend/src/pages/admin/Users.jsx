import { useState } from "react";
import { Plus, Users as UsersIcon } from "lucide-react";

import UserCard from "../../components/cards/UserCard";
import SearchBar from "../../components/common/SearchBar";
import Button from "../../components/common/Button";

const Users = () => {
  const [search, setSearch] = useState("");

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+91 9876543210",
      location: "Puducherry",
      role: "Citizen",
      status: "Active",
      complaints: 12,
      joinedDate: "12 Jan 2026",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@example.com",
      phone: "+91 9123456780",
      location: "Lawspet",
      role: "Citizen",
      status: "Active",
      complaints: 7,
      joinedDate: "18 Feb 2026",
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      email: "admin@visionforge.com",
      phone: "+91 9988776655",
      location: "Municipal Office",
      role: "Admin",
      status: "Active",
      complaints: 0,
      joinedDate: "01 Jan 2025",
    },
    {
      id: 4,
      name: "Arun Prakash",
      email: "arun@example.com",
      phone: "+91 9345678901",
      location: "White Town",
      role: "Citizen",
      status: "Inactive",
      complaints: 3,
      joinedDate: "05 Mar 2026",
    },
    {
      id: 5,
      name: "Kavitha Devi",
      email: "kavitha@example.com",
      phone: "+91 9000012345",
      location: "Muthialpet",
      role: "Citizen",
      status: "Active",
      complaints: 16,
      joinedDate: "28 Dec 2025",
    },
    {
      id: 6,
      name: "Dinesh Kumar",
      email: "dinesh@example.com",
      phone: "+91 9445566778",
      location: "Puducherry",
      role: "Admin",
      status: "Active",
      complaints: 0,
      joinedDate: "15 Aug 2024",
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.role
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.location
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            User Management
          </h1>

          <p className="mt-2 text-gray-500">
            View and manage all registered citizens and administrators.
          </p>
        </div>

        <Button>
          <Plus size={18} />
          Add User
        </Button>
      </div>

      {/* Search */}

      <SearchBar
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Summary */}

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-md dark:bg-gray-900">
          <UsersIcon
            size={34}
            className="mb-4 text-emerald-600"
          />

          <h2 className="text-3xl font-bold">
            {users.length}
          </h2>

          <p className="mt-2 text-gray-500">
            Total Users
          </p>
        </div>

        <div className="rounded-3xl bg-green-50 p-6 shadow-md dark:bg-green-900/20">
          <h2 className="text-3xl font-bold text-green-600">
            {
              users.filter(
                (u) => u.status === "Active"
              ).length
            }
          </h2>

          <p className="mt-2 text-gray-500">
            Active Users
          </p>
        </div>

        <div className="rounded-3xl bg-blue-50 p-6 shadow-md dark:bg-blue-900/20">
          <h2 className="text-3xl font-bold text-blue-600">
            {
              users.filter(
                (u) => u.role === "Admin"
              ).length
            }
          </h2>

          <p className="mt-2 text-gray-500">
            Administrators
          </p>
        </div>
      </div>

      {/* User Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            {...user}
            onView={() => console.log(user)}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;