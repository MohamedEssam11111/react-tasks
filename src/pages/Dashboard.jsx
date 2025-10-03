import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  const signOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };
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
      <button onClick={signOut}>logOut</button>
    </>
  );
}

export default Dashboard;
