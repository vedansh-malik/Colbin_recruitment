import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 40px",
        borderBottom: "1px solid #E5E7EB",
        background: "#fff", // ensure visible
        position: "sticky", // keeps it on top
        top: 0,
        zIndex: 1000,
        fontFamily: "Inter, sans-serif"
      }}
    >
      {/* Logo / Home */}
      <Link
        to="/"
        style={{
          fontWeight: "bold",
          fontSize: "1.3rem",
          textDecoration: "none",
          color: "#000",
        }}
      >
        Colbin
      </Link>

      {/* Links */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {!token ? (
          <>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#000", fontWeight: "500" }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#000", fontWeight: "500" }}
            >
              Signup
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "#000", fontWeight: "500" }}
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              style={{
                background: "#000",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
