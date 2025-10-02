import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>User {id}</h1>
      <button onClick={() => navigate("/Users")}>User page</button>
      <button onClick={() => navigate("/")}>Home page</button>
    </>
  );
}
export default User;
