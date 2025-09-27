import React, { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/users/me");
        setUser(res.data);
      } catch (err) {
        console.error("Failed to load profile", err);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "60px 20px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#fff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "#1E293B",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            margin: "0 auto 20px",
            fontWeight: "bold",
          }}
        >
          {user.name ? user.name.charAt(0).toUpperCase() : "U"}
        </div>

        {/* Profile Info */}
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "10px" }}>
          {user.name || "Unnamed User"}
        </h2>
        <p style={{ color: "#6B7280", marginBottom: "20px" }}>{user.email}</p>

        {/* Bio */}
        {user.bio ? (
          <p
            style={{
              fontStyle: "italic",
              color: "#374151",
              marginBottom: "30px",
            }}
          >
            “{user.bio}”
          </p>
        ) : (
          <p style={{ color: "#9CA3AF", marginBottom: "30px" }}>
            No bio added yet.
          </p>
        )}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          style={{
            background: "#000",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "8px",
            border: "none",
            fontWeight: "500",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.opacity = 0.9)}
          onMouseOut={(e) => (e.target.style.opacity = 1)}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
  