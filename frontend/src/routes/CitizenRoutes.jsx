import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const CitizenRoutes = () => {
  const {
    isAuthenticated,
    isCitizen,
    loading,
  } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isCitizen) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <Outlet />;
};

export default CitizenRoutes;