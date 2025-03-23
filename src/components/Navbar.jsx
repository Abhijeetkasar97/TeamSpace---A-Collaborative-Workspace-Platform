import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">TeamSpace</h1>
      <div>
        <Link to="/" className="mx-2">Dashboard</Link>
        <Link to="/tasks" className="mx-2">Tasks</Link>
        <Link to="/chat" className="mx-2">Chat</Link>
        <Link to="/video" className="mx-2">Video</Link>
        <Link to="/analytics" className="mx-2">Analytics</Link>
      </div>
      <div>
        {user ? (
          <>
            <span className="mx-2">{user.email}</span>
            <button onClick={logout} className="bg-red-600 px-3 py-1 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="mx-2">Login</Link>
            <Link to="/register" className="mx-2">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
