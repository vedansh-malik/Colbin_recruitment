import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/profile");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div 
      style={{
         display: "flex",
        justifyContent: "center", 
        padding: "50px", 
        fontFamily: "Inter, sans-serif"  
        }}>
      <form onSubmit={handleSubmit} style={{ width: "400px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Login</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "12px", margin: "8px 0" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "12px", margin: "8px 0" }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#000",
            color: "#fff",
            padding: "12px",
            marginTop: "12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
