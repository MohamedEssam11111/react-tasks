import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const handleClick = (e) => {
    e.preventDefault();
    alert(`welcome to the dashboard ${name}😅`);
    localStorage.setItem("isAuth", true);
    navigate("/dashboard");
  };
  return (
    <form onSubmit={handleClick}>
      <h1>login page</h1>
      <label htmlFor="user-name">Enter your name</label>
      <input
        type="text"
        name="user-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" style={{ marginLeft: "15px" }}>
        logIn
      </button>
    </form>
  );
}

export default Login;
