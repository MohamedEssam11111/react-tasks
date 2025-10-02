import React from "react";
import { Link, Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <>
      <div>Dashboard</div>
      {/* prettier-ignore */}
      <nav>
        <Link to="profile"className="animated-underline" style={{ padding: "5px" }}>
          Profile
        </Link>
        <Link to="settings" className="animated-underline" style={{ padding: "5px" }}>
          Setting
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Dashboard;
