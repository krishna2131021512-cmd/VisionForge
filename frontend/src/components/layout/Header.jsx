import React from "react";
import {
  Bell,
  Search,
  Sun,
  Moon,
  Menu,
  UserCircle,
} from "lucide-react";

const Header = ({
  title = "Dashboard",
  subtitle = "Welcome back!",
  search = "",
  onSearchChange = () => {},
  notificationCount = 0,
  darkMode = false,
  toggleDarkMode = () => {},
  onMenuClick = () => {},
  userName = "John Doe",
  userRole = "Citizen",
  profileImage = "",
}) => {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between gap-4 border-b border-gray-200 bg-white/90 px-6 py-4 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-900/90">
      
      {/* Left Section */}
      <div className="flex items-center gap-4">
        
        {/* Mobile Menu */}
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden dark:hover:bg-gray-800"
        >
          <Menu size={22} />
        </button>

        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            {title}
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Center Search */}
      <div className="hidden w-full max-w-md lg:block">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={onSearchChange}
            placeholder="Search..."
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              bg-gray-50
              py-3
              pl-11
              pr-4
              text-sm
              outline-none
              transition
              focus:border-emerald-500
              focus:ring-4
              focus:ring-emerald-100
              dark:border-gray-700
              dark:bg-gray-800
              dark:text-white
            "
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">

        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          className="rounded-xl p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {darkMode ? (
            <Sun size={20} />
          ) : (
            <Moon size={20} />
          )}
        </button>

        {/* Notification */}
        <button className="relative rounded-xl p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800">
          <Bell size={20} />

          {notificationCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {notificationCount > 99
                ? "99+"
                : notificationCount}
            </span>
          )}
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-800">

          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="h-11 w-11 rounded-full object-cover"
            />
          ) : (
            <UserCircle
              size={42}
              className="text-emerald-600"
            />
          )}

          <div className="hidden text-left md:block">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
              {userName}
            </h3>

            <p className="text-xs text-gray-500">
              {userRole}
            </p>
          </div>

        </div>

      </div>
    </header>
  );
};

export default Header;