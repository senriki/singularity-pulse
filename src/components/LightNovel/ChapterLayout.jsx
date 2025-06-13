import { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollProgressBar from "./ScrollProgressBar";
import ChapterTabs from "./ChapterTabs";
import './ChapterTabs.css';

export default function ChapterLayout({
  title,
  timeline,
  pov,
  content,
  prev,
  next,
  subtitle,
  illustration,
  illustrationLabel,
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <ScrollProgressBar></ScrollProgressBar>
      <main className="container py-5 text-light">
        <div className="mb-4">
          <Link to="/lightnovel/volume-1" className="btn btn-outline-info btn-sm">
            ← Back to Volume
          </Link>
        </div>
        <article role="article" aria-label={title}></article>

        <div
          className="p-4"
          style={{
            background: "linear-gradient(to right, #0f0f0f, #1a1a1a)",
            border: "1px solid #333",
            borderRadius: "1rem",
            maxWidth: "1024px",
            margin: "0 auto",
          }}
        >

          <h1 style={{ color: "#ff66c4", fontFamily: "Orbitron" }}>{title}</h1>

          {subtitle && (
            <h5 className="text" style={{ marginTop: "-1rem", marginBottom: "1rem" }}>
              {subtitle}
            </h5>
          )}

          <p className="text" style={{ fontSize: "0.9rem" }}>
            Timeline: {timeline} | POV: {pov}
          </p>

          <ChapterTabs
            textContent={content}
            illustration={illustration}
            illustrationLabel={illustrationLabel}
          />

          {/* <article
            style={{
              lineHeight: "1.8",
              color: "#ccc",
              fontSize: "1rem",
              marginTop: "1.5rem",
            }}
          >
            {content}
          </article> */}

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
    </>
  );
}
