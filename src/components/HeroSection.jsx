import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const glitchRef = useRef(null);
  const originalText = "Welcome to Singularity Pulse";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  useEffect(() => {
    const glitchText = glitchRef.current;

    const handleHover = () => {
      let iterations = 0;
      const interval = setInterval(() => {
        glitchText.textContent = originalText
          .split("")
          .map((char, i) => {
            if (i < iterations) return originalText[i];
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");
        if (iterations >= originalText.length) clearInterval(interval);
        iterations += 1 / 2;
      }, 30);
    };

    // glitchText.addEventListener("mouseenter", handleHover);

    return () => {
      // glitchText.removeEventListener("mouseenter", handleHover);
    };
  }, []);

  return (
    <section className="d-flex align-items-center justify-content-center text-center fade-in" style={{ height: "100vh", position: "relative", zIndex: 2 }}>
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "3rem", borderRadius: "1rem", border: "1px solid rgba(255, 255, 255, 0.1)", backdropFilter: "blur(6px)", maxWidth: "720px" }}>
        <h1 className="glitch mb-3" ref={glitchRef}>{originalText}</h1>
        <p className="lead">
          An original AI-driven story world—where music, memories, and machines collide.<br />
          Born from AMVs. Fueled by emotion. Written in code, heart, and glitch.
        </p>
        <Link 
          to={"universe"}
          className="btn btn-outline-info mt-4 glow-button"
        >
          Explore the Lore
        </Link>
      </div>
    </section>
  );
}
