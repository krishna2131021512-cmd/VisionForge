import { Outlet } from "react-router-dom";
import ThemeToggle from "../components/layout/ThemeToggle";

const AuthLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* Theme Toggle */}
      <div className="absolute right-6 top-6 z-50">
        <ThemeToggle />
      </div>

      {/* Logo */}
      <div className="absolute left-6 top-6 z-50 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-blue-600 text-lg font-bold text-white shadow-lg">
          VF
        </div>

        <div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            Vision Forge
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Smart Civic Platform
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Vision Forge. All Rights Reserved.
      </footer>
    </div>
  );
};

export default AuthLayout;