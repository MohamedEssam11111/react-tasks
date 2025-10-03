import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const islogin = localStorage.getItem("isAuth");
  return islogin ? children : <Navigate to={"/login"} replace />;
}

export default ProtectedRoute;
