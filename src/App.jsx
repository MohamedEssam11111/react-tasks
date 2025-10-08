import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Aauth from "./components/Aauth";
import "./App.css";
import Header, { Test } from "./components/header";
import Footer, { Testf } from "./components/footer";
import Counterf from "./components/counterf";
import Card from "./components/card";
import Controlled from "./components/Controlled";
import UnControlled from "./components/unControlled";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Users from "./pages/Users";
import User from "./pages/User";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import FormWithUseReducer from "./components/FormWithUseReducer";
import { ThemeContext } from "./context/ThemeContext";
function App() {
  const items = [
    { id: 1, name: "mohamed" },
    { id: 2, name: "mohamed" },
    { id: 3, name: "mohamed" },
    { id: 4, name: "mohamed" },
    { id: 5, name: "mohamed" },
  ];
  const { theme, themeToggle } = useContext(ThemeContext);
  return (
    <>
      <p>mohemed essam</p>
      <Header />
      <Footer />
      <Test />
      <Testf />
      <Counterf />
      <Card bcolor={"red"} tcolor={"black"} title={"for test"} />
      <Card bcolor={"green"} tcolor={"gold"} title={"for test"} />
      <Card bcolor={"gray"} tcolor={"blue"} title={"for test"} />

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <Aauth />

      <br />
      <br />
      <Controlled />
      <UnControlled />

      <nav
        style={{
          display: "flex",
          gap: "15px",
          margin: "20px",
          justifyContent: "space-around",
          backgroundColor: "rgb(23, 239, 23) ",
          padding: "5px",
          borderRadius: "8px",
          border: "3px white solid",
        }}
      >
        <NavLink to="/" className="animated-underline">
          home
        </NavLink>
        <NavLink to="/about" className="animated-underline">
          about
        </NavLink>
        <NavLink to="/not-found" className="animated-underline">
          not-found
        </NavLink>
        <NavLink to="/Users" className="animated-underline">
          users
        </NavLink>
        <NavLink to="/dashboard" className="animated-underline">
          dashboard
        </NavLink>
        <NavLink to="/posts" className="animated-underline">
          Posts
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/Users/:id" element={<User />} />
        <Route path="/not-found" element={<Notfound />} />
        <Route path="/*" element={<Notfound />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      {/* <Posts /> */}
      {/* prettier-ignore */}
      <div style={{padding:"10px",margin:"30px", width:"100%", background:"radial-gradient(circle,rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)" , fontSize:"30px" , color:"black"}}>useReducer</div>
      <FormWithUseReducer />
      {/* prettier-ignore */}
      <div style={{padding:"10px",margin:"30px", width:"100%", background:"radial-gradient(circle,rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)" , fontSize:"30px" , color:"black"}}>ThemeContext</div>
      {/* prettier-ignore */}
      <button onClick={themeToggle} className="theme-Toggle">Theme</button>
      <Card
        bcolor={theme === "light" ? "white" : "black"}
        tcolor={theme === "light" ? "black" : "white"}
        title={theme === "light" ? "light" : "dark"}
      />
    </>
  );
}
export default App;
