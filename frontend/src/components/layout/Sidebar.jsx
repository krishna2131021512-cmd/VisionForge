import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FilePlus,
  ClipboardList,
  Bell,
  User,
  Settings,
  HelpCircle,
  BarChart3,
  Users,
  Building2,
  FileText,
  Shield,
  LogOut,
} from "lucide-react";

const Sidebar = ({
  role = "citizen",
  isOpen = true,
}) => {
  const citizenMenu = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      title: "Report Issue",
      icon: <FilePlus size={20} />,
      path: "/report",
    },
    {
      title: "My Complaints",
      icon: <ClipboardList size={20} />,
      path: "/complaints",
    },
    {
      title: "Notifications",
      icon: <Bell size={20} />,
      path: "/notifications",
    },
    {
      title: "Profile",
      icon: <User size={20} />,
      path: "/profile",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/settings",
    },
    {
      title: "Help",
      icon: <HelpCircle size={20} />,
      path: "/help",
    },
  ];

  const adminMenu = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin/dashboard",
    },
    {
      title: "Issue Management",
      icon: <ClipboardList size={20} />,
      path: "/admin/issues",
    },
    {
      title: "Departments",
      icon: <Building2 size={20} />,
      path: "/admin/departments",
    },
    {
      title: "Users",
      icon: <Users size={20} />,
      path: "/admin/users",
    },
    {
      title: "Analytics",
      icon: <BarChart3 size={20} />,
      path: "/admin/analytics",
    },
    {
      title: "Reports",
      icon: <FileText size={20} />,
      path: "/admin/reports",
    },
    {
      title: "Notifications",
      icon: <Bell size={20} />,
      path: "/admin/notifications",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/admin/settings",
    },
  ];

  const menu = role === "admin" ? adminMenu : citizenMenu;

  return (
    <aside
      className={`
        h-screen
        bg-white
        dark:bg-gray-900
        border-r
        border-gray-200
        dark:border-gray-800
        shadow-lg
        transition-all
        duration-300
        ${
          isOpen
            ? "w-72"
            : "w-20"
        }
      `}
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-20 border-b border-gray-200 dark:border-gray-800">
        {isOpen ? (
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-bold text-lg">
              VF
            </div>

            <div>
              <h2 className="font-bold text-gray-800 dark:text-white">
                Vision Forge
              </h2>

              <p className="text-xs text-gray-500">
                {role === "admin"
                  ? "Municipal Portal"
                  : "Citizen Portal"}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-bold">
            VF
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex flex-col gap-2 px-3">
        {menu.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              transition-all
              duration-200
              ${
                isActive
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }
            `
            }
          >
            {item.icon}

            {isOpen && (
              <span className="font-medium">
                {item.title}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="absolute bottom-6 left-0 w-full px-3">
        <button
          className="
            flex
            items-center
            gap-3
            w-full
            rounded-xl
            px-4
            py-3
            text-red-500
            hover:bg-red-50
            dark:hover:bg-red-900/20
            transition
          "
        >
          <LogOut size={20} />

          {isOpen && (
            <span className="font-medium">
              Logout
            </span>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;