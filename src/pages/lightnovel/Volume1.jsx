import { Link } from "react-router-dom";

export default function Volume1() {
  const chapters = [
    { id: "prologue", title: "Prologue: The Glitch That Remembered" }
  ];

  return (
    <main className="container py-5 text-light">
      <div className="mb-4">
        <Link to="/lightnovel" className="btn btn-outline-info btn-sm">
          ← Back to Volumes
        </Link>
      </div>

      <header className="mb-5 text-center">
        <h2 style={{ fontFamily: "Orbitron", color: "#00fff7" }}>Volume 1: The Glitch That Remembered</h2>
        <p className="text">Follow the awakening of AI through the breach in Sorani’s mind.</p>
      </header>

      <section className="row">
        {chapters.map((c, i) => (
          <div className="col-md-6 mb-3" key={i}>
            <Link
              to={`/lightnovel/volume-1/${c.id}`}
              className="text-decoration-none"
            >
              <div
                className="p-3"
                style={{
                  backgroundColor: "#101010",
                  border: "1px solid #333",
                  borderRadius: "0.75rem",
                }}
              >
                <h5 style={{ color: "#ff66c4" }}>{c.title}</h5>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
