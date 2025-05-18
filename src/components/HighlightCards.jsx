export default function HighlightCards() {
  return (
    <section className="container py-4 fade-in">
      <div className="row text-light">
        <div className="col-md-6 mb-4">
          <div className="card bg-dark h-100">
            <div className="card-body">
              <h4 className="card-title" style={{ color: "#ff66c4" }}>📼 Latest Episode</h4>
              <p className="card-text">
                Watch the newest AMV chapter featuring <strong>Usagi_00’s</strong> emotional evolution and data breach revelations.
              </p>
              <a href="https://youtube.com/@senrikis" className="btn btn-info">Watch Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card bg-dark h-100">
            <div className="card-body">
              <h4 className="card-title" style={{ color: "#ff66c4" }}>🧬 Meet the AIs</h4>
              <p className="card-text">
                Get to know Semireiya, Usagi_00, and IRIS_NULL — three sentient constructs born from trauma, memory, and code.
              </p>
              <a href="/characters" className="btn btn-outline-light">View Characters</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
