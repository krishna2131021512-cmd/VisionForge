import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const CitizenLayout = () => {
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
          role="citizen"
          isOpen={sidebarOpen}
        />
      </div>

      {/* Mobile Overlay */}
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
          title="Citizen Dashboard"
          subtitle="Report, track, and manage your civic complaints"
          notificationCount={3}
          userName="Citizen User"
          userRole="Citizen"
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

export default CitizenLayout;