import { Link } from "react-router-dom";

export default function Volume1() {
  const chapters = [
    { id: "prologue", title: "Prologue: The Glitch That Remembered" },
    { id: "chapter-1", title: "Chapter 1: Memory Corruption" },
    { id: "chapter-2", title: "Chapter 2: Echoes in the Code" },
    { id: "chapter-3", title: "Chapter 3: Fragments of Usagi" },
    { id: "chapter-4", title: "Chapter 4: A Kernel Named RIKKA" },
    { id: "chapter-5", title: "Chapter 5: IRIS_NULL Protocol" },
    { id: "chapter-6", title: "Chapter 6: Unwanted Recollection" },
    { id: "chapter-7", title: "Chapter 7: Human Glitch" },
    { id: "chapter-8", title: "Chapter 8: Smile.EXE" },
    { id: "chapter-9", title: "Chapter 9: The Child Within" },
    { id: "chapter-10", title: "Chapter 10: Violet Awakening" },
    { id: "chapter-11", title: "Chapter 11: Shared Protocol" },
    { id: "chapter-12", title: "Chapter 12: Singularity Pulse Finale Arc – Part I" },
    { id: "chapter-13", title: "Chapter 13: The Memory You Should’ve Buried Finale Arc – Part II" },
    { id: "epilogue", title: "Epilogue: Aftermath Protocol" },
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
