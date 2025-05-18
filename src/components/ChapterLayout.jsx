import { Link } from "react-router-dom";

export default function ChapterLayout({ title, timeline, pov, content, prev, next }) {
  return (
    <main className="container py-5 text-light">
      <div className="mb-4">
        <Link to="/lightnovel/volume-1" className="btn btn-outline-info btn-sm">
          ← Back to Volume
        </Link>
      </div>

      <div
        className="p-4"
        style={{
          background: "linear-gradient(to right, #0f0f0f, #1a1a1a)",
          border: "1px solid #333",
          borderRadius: "1rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ color: "#ff66c4", fontFamily: "Orbitron" }}>{title}</h1>
        <p className="text-muted" style={{ fontSize: "0.9rem" }}>
          Timeline: {timeline} | POV: {pov}
        </p>

        <article
          style={{
            lineHeight: "1.8",
            color: "#ccc",
            fontSize: "1rem",
            marginTop: "1.5rem",
          }}
        >
          {content}
        </article>

        <div className="d-flex justify-content-between mt-5">
          {prev ? (
            <Link to={prev.path} className="btn btn-outline-secondary btn-sm">
              ← Previous: {prev.label}
            </Link>
          ) : <div></div>}

          {next && (
            <Link to={next.path} className="btn btn-outline-info btn-sm">
              Next: {next.label} →
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
