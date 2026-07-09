import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Route Guards
import AdminRoutes from "./AdminRoutes";

// Layouts
import LandingLayout from "../layouts/LandingLayout";
import AuthLayout from "../layouts/AuthLayout";
import CitizenLayout from "../layouts/CitizenLayout";
import AdminLayout from "../layouts/AdminLayout";

// Landing Pages
import Landing from "../pages/landing/Landing";

// Auth Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

// Citizen Pages
import Dashboard from "../pages/citizen/Dashboard";
import ReportIssue from "../pages/citizen/ReportIssue";
import MyComplaints from "../pages/citizen/MyComplaints";
import IssueDetails from "../pages/citizen/IssueDetails";
import Notifications from "../pages/citizen/Notifications";
import Profile from "../pages/citizen/Profile";
import Settings from "../pages/citizen/Settings";
import HelpCenter from "../pages/citizen/HelpCenter";

// Admin Pages
import AdminDashboard from "../pages/admin/Dashboard";
import IssueManagement from "../pages/admin/IssueManagement";
import AdminIssueDetails from "../pages/admin/IssueDetails";
import Departments from "../pages/admin/Departments";
import Users from "../pages/admin/Users";
import Analytics from "../pages/admin/Analytics";
import Reports from "../pages/admin/Reports";
import AdminNotifications from "../pages/admin/Notifications";
import AdminProfile from "../pages/admin/Profile";
import AdminSettings from "../pages/admin/Settings";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= Landing ================= */}

        <Route element={<LandingLayout />}>
          <Route
            path="/"
            element={<Landing />}
          />
        </Route>

        {/* ================= Authentication ================= */}

        <Route element={<AuthLayout />}>
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />
        </Route>

        {/* ================= Citizen ================= */}

        <Route element={<CitizenLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/report-issue"
            element={<ReportIssue />}
          />

          <Route
            path="/my-complaints"
            element={<MyComplaints />}
          />

          <Route
            path="/issue/:id"
            element={<IssueDetails />}
          />

          <Route
            path="/notifications"
            element={<Notifications />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

          <Route
            path="/help-center"
            element={<HelpCenter />}
          />

        </Route>

        {/* ================= Admin ================= */}

        <Route element={<AdminRoutes />}>
          <Route element={<AdminLayout />}>

            <Route
              path="/admin/dashboard"
              element={<AdminDashboard />}
            />

            <Route
              path="/admin/issues"
              element={<IssueManagement />}
            />

            <Route
              path="/admin/issues/:id"
              element={<AdminIssueDetails />}
            />

            <Route
              path="/admin/departments"
              element={<Departments />}
            />

            <Route
              path="/admin/users"
              element={<Users />}
            />

            <Route
              path="/admin/analytics"
              element={<Analytics />}
            />

            <Route
              path="/admin/reports"
              element={<Reports />}
            />

            <Route
              path="/admin/notifications"
              element={<AdminNotifications />}
            />

            <Route
              path="/admin/profile"
              element={<AdminProfile />}
            />

            <Route
              path="/admin/settings"
              element={<AdminSettings />}
            />

          </Route>
        </Route>

        {/* ================= Fallback ================= */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;