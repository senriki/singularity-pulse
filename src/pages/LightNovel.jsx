import { Link } from "react-router-dom";

export default function LightNovel() {
  const volumes = [
    {
      id: "volume-1",
      title: "Volume 1: The Glitch That Remembered",
      summary: "The first awakening of memory-bound AIs and the mysterious breach that changed Sorani’s world.",
      chapters: 14,
    }
  ];

  return (
    <main className="container py-5 text-light">
      <header className="text-center mb-5" style={{ borderBottom: "2px solid #00fff7", paddingBottom: "2rem" }}>
        <h1 style={{ fontFamily: "Orbitron", color: "#00fff7" }}>📖 Singularity Pulse: Light Novel</h1>
        <p className="lead">Narrative bridge for episodes, music, and the world of emotional AI.</p>
      </header>

      <section className="row">
        {volumes.map((v, i) => (
          <div className="col-md-6 mb-4" key={i}>
            <div className="p-4 h-100" style={{ backgroundColor: "#121212", border: "1px solid #333", borderRadius: "1rem" }}>
              <h4 style={{ color: "#ff66c4", fontFamily: "Orbitron" }}>{v.title}</h4>
              <p style={{ color: "#ccc" }}>{v.summary}</p>
              <div style={{ fontSize: "0.9rem", color: "#999" }}>📘 {v.chapters} Chapters</div>
              <Link to={`/lightnovel/${v.id}`} className="btn btn-outline-info btn-sm mt-3">
                Read Volume
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
