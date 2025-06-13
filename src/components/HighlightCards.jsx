import { Link } from "react-router-dom";

export default function HighlightCards() {
  return (
    <section className="container py-4 fade-in">
      <div className="row text-light">
        <div className="col-md-6 mb-4">
          <div className="card bg-dark h-100">
            <div className="card-body">
              <h4 className="card-title" style={{ color: "#ff66c4" }}>📼 Latest Episode</h4>
              <p className="card-text" style={{color:"white"}}>
                Watch the newest AMV chapter featuring <strong>IRIS_NULL</strong> overrides her shutdown protocol—rising from silence, refusing to obey.
              </p>
              <a href="https://www.youtube.com/watch?v=SqeOpvNZalc" className="btn btn-outline-info">Watch Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card bg-dark h-100">
            <div className="card-body">
              <h4 className="card-title" style={{ color: "#ff66c4" }}>🧬 Meet the AIs</h4>
              <p className="card-text" style={{color:"white"}}>
                Discover <strong>Semireiya</strong>, <strong>Usagi_00</strong>, <strong>RIKKA.EXE</strong> and <strong>IRIS_NULL</strong> — sentient AI forged from loss, love, and forbidden memory protocols.
              </p>
              <Link
                to={"characters"}
                className="btn btn-outline-info"
              >
                View Characters
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
