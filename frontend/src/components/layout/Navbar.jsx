import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  LogIn,
  UserPlus,
  ShieldCheck,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Features",
    path: "#features",
  },
  {
    name: "FAQ",
    path: "#faq",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-950/80">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 text-xl font-bold text-white shadow-lg">
            VF
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-800 dark:text-white">
              Vision Forge
            </h1>

            <p className="text-xs text-gray-500">
              Smart Civic Platform
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-sm font-medium text-gray-600 transition hover:text-emerald-600 dark:text-gray-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}

        <div className="hidden items-center gap-3 md:flex">

          <NavLink
            to="/login"
            className="flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold transition hover:border-emerald-500 hover:text-emerald-600 dark:border-gray-700 dark:text-white"
          >
            <LogIn size={18} />

            Login
          </NavLink>

          <NavLink
            to="/register"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
          >
            <UserPlus size={18} />

            Register
          </NavLink>

          <NavLink
            to="/login"
            className="flex items-center gap-2 rounded-xl border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-600 hover:text-white"
          >
            <ShieldCheck size={18} />

            Admin
          </NavLink>
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
          className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden dark:hover:bg-gray-800"
        >
          {mobileOpen ? (
            <X />
          ) : (
            <Menu />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 dark:border-gray-800 dark:bg-gray-950 md:hidden">

          <div className="flex flex-col gap-5">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="font-medium text-gray-700 dark:text-gray-300"
                onClick={() =>
                  setMobileOpen(false)
                }
              >
                {item.name}
              </a>
            ))}

            <hr className="border-gray-300 dark:border-gray-700" />

            <NavLink
              to="/login"
              className="rounded-xl border border-gray-300 py-3 text-center font-semibold dark:border-gray-700"
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 py-3 text-center font-semibold text-white"
            >
              Register
            </NavLink>

            <NavLink
              to="/login"
              className="rounded-xl border border-emerald-600 py-3 text-center font-semibold text-emerald-600"
            >
              Admin Login
            </NavLink>

          </div>
        </div>
      )}
    </header>
  );
}