import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "ai-glitch-emotion",
    title: "Why My AI Girls Struggle With Emotion",
    date: "2025-05-19",
    summary: "Behind the design of IRIS_NULL, Usagi_00, and Semireiya—and why emotional instability defines their growth.",
  }
];

export default function Log() {
  return (
    <main className="container py-5 text-light">
      <header
        className="text-center mb-5"
        style={{
          background: "linear-gradient(to right, #1a1a1a, #000000)",
          color: "#ff66c4",
          padding: "3rem 1rem",
          borderBottom: "2px solid #ff66c4",
        }}
      >
        <h1>Creator’s Log</h1>
        <p className="lead">Behind the scenes, AI notes, dev updates, and personal reflections from the Singularity Pulse project.</p>
      </header>

      <section className="row">
        {blogPosts.map((post) => (
          <div className="col-md-6 mb-4" key={post.id}>
            <div className="p-4 h-100" style={{ backgroundColor: "#131313", borderRadius: "1rem", border: "1px solid #333" }}>
              <h5 style={{ color: "#00fff7", fontFamily: "Orbitron" }}>{post.title}</h5>
              <div style={{ fontSize: "0.85rem", color: "#bbb" }}>🗓️ {post.date}</div>
              <p className="mt-2">{post.summary}</p>
              <Link to={`/log/${post.id}`} className="btn btn-outline-info btn-sm mt-2">Read Post</Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
