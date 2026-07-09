import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const LandingLayout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingLayout;