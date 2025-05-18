import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main
      className="container d-flex flex-column align-items-center justify-content-center text-center"
      style={{ minHeight: "80vh", color: "#ccc" }}
    >
      <div
        style={{
          border: "1px solid #333",
          background: "linear-gradient(to right, #0f0f0f, #1a1a1a)",
          borderRadius: "1rem",
          padding: "3rem",
          maxWidth: "600px",
        }}
      >
        <h1 style={{ fontFamily: "Orbitron", color: "#ff2f70", fontSize: "3rem" }}>
          404: Signal Lost
        </h1>
        <p className="mt-3" style={{ color: "#bbb" }}>
          This page doesn’t exist in the Pulse Network.<br />
          Maybe it was corrupted, hidden, or never indexed at all.
        </p>

        <div className="my-4 glitch" style={{ fontSize: "1.2rem", color: "#00fff7" }}>
          <em>“Destination not found... fallback to core memory.”</em>
        </div>

        <Link to="/" className="btn btn-outline-info mt-3 glow-button">
          Return to Home
        </Link>
      </div>
    </main>
  );
}
