import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoutes = () => {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent"></div>
      </div>
    );
  }

  // If already logged in, redirect based on role
  if (isAuthenticated) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    }

    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default PublicRoutes;