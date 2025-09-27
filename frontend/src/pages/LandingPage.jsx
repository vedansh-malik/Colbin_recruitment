import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px 80px",
        fontFamily: "Inter, sans-serif"
      }}
    >
      {/* Left Section */}
      <div style={{ flex: 1,  paddingRight: "40px" }}>
        <h1 style={{ fontSize: "4rem", fontWeight: "bold", lineHeight: "1.2" }}>
          Technical<br></br> Interview<br></br> Platform for<br></br> Modern Teams
        </h1>
        <p style={{ marginTop: "20px", fontSize: "1.1rem", color: "#555" }}>
          Conduct seamless technical interviews with our real-time collaborative
          coding platform. Support for 30+ programming languages, live code
          execution, and comprehensive assessment tools.
        </p>
        <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
          <button
            onClick={() => navigate("/signup")}
            style={{
              background: "#000",
              color: "#F5F5F5",
              padding: "12px 20px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Create Interview Room
          </button>
          <button
            style={{
              background: "#fff",
              border: "1px solid #ddd",
              padding: "12px 20px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Watch Demo
          </button>
        </div>
        <p style={{ marginTop: "20px", color: "#777" }}>
          Trusted by 1000+ hiring managers at leading tech companies
        </p>
      </div>

      {/* Right Section */}
      <div
        style={{
          flex: 1,
          background: "#f9f9f9",
          padding: "20px",
          borderRadius: "10px",
          fontFamily: "monospace",
          fontSize: "0.95rem",
        }}
      >
        <pre>
{`// Collaborative coding in action
function greet(name) {
  return \`Hello, \${name}!\`;
}

// User 1: Alice
const message = greet("World");
console.log(message); // Output: Hello, World!

// User 2: Bob
// TODO: Add more features to the greeting function`}
        </pre>
      </div>
    </div>
  );
}
