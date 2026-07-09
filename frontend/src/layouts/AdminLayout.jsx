import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-950">
      {/* Sidebar */}
      <div
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          transition-transform
          duration-300
          lg:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <Sidebar
          role="admin"
          isOpen={sidebarOpen}
        />
      </div>

      {/* Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div
        className={`
          flex flex-1 flex-col
          transition-all
          duration-300
          ${
            sidebarOpen
              ? "lg:ml-72"
              : "lg:ml-20"
          }
        `}
      >
        {/* Header */}
        <Header
          title="Municipal Dashboard"
          subtitle="Manage complaints, departments, and analytics"
          notificationCount={5}
          userName="Administrator"
          userRole="Municipal Admin"
          onMenuClick={() =>
            setSidebarOpen(!sidebarOpen)
          }
        />

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;