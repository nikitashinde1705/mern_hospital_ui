import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Handle sidebar based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dashboard-wrapper">
      <Sidebar isOpen={sidebarOpen} />

      <div
        className="dashboard-content"
        style={{
          marginLeft: sidebarOpen ? "240px" : "0",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

       
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
