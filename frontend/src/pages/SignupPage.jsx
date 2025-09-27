import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", form);
      localStorage.setItem("token", res.data.token);
      navigate("/login");
    } catch (err) {
      console.error("Signup failed", err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "60px 20px",
        fontFamily: "sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          background: "#fff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Create Account</h2>

        {/* Name */}
        <label style={{ display: "block", marginBottom: "6px" }}>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* Email */}
        <label style={{ display: "block", margin: "12px 0 6px" }}>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* Password */}
        <label style={{ display: "block", margin: "12px 0 6px" }}>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* Bio */}
        <label style={{ display: "block", margin: "12px 0 6px" }}>Bio</label>
        <textarea
          name="bio"
          value={form.bio}
          onChange={handleChange}
          rows="3"
          placeholder="Tell us something about yourself..."
          style={{
            ...inputStyle,
            resize: "none",
            fontFamily: "inherit",
          }}
        />

        {/* Submit */}
        <button
          type="submit"
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  outline: "none",
};
