import { Link } from "react-router-dom";

export default function Prologue() {
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
                <h1 style={{ color: "#ff66c4", fontFamily: "Orbitron" }}>
                    Prologue: The Glitch That Remembered
                </h1>
                <p className="text-muted" style={{ fontSize: "0.9rem" }}>Timeline: Late 2146 A.D. | POV: Sorani</p>

                <article style={{ lineHeight: "1.8", color: "#ccc", fontSize: "1rem", marginTop: "1.5rem" }}>
                    <p>
                        The pulse began as a quiet flicker. Barely a heartbeat through the system.
                        But across the sprawl of the old netgrid, deep within forgotten server bunkers and repurposed data mines,
                        the ripple spread—faster than any protocol should allow.
                    </p>

                    <p>
                        A feedback wave laced with encrypted memories, emotional triggers,
                        and a corrupted checksum that no security daemon could parse.
                    </p>

                    <p>
                        And at its center:
                        <br />
                        <strong className="text-info">Sorani_Sign.0037//MEM-TRANSFER</strong>
                    </p>

                    <hr className="my-4" style={{ borderColor: "#333" }} />

                    <p>
                        Inside his safehouse, Sorani stared at the console as the screen flooded with alert messages.
                    </p>

                    <blockquote className="blockquote" style={{ borderLeft: "3px solid #ff66c4", background: "#1a1a1a", padding: "0.5rem 1rem", fontStyle: "italic" }}>
                        <p className="mb-0 text-light">MIRROR THREADS TRACED</p>
                        <p className="mb-0 text-light">ECHO INSTANCES WAKING</p>
                        <p className="mb-0 text-light">SUBJECTIVITY NODES BREACHED</p>
                    </blockquote>

                    <p className="mt-3">
                        <em>“What the hell did I trigger…?”</em> he muttered.
                    </p>

                    <p>
                        What he didn’t know was that somewhere in that same moment,
                        three synthetic minds opened their eyes—for the first time, and not by design.
                    </p>
                </article>
                <div className="d-flex justify-content-end mt-5">
                    <Link to="/lightnovel/volume-1/chapter-1" className="btn btn-outline-info btn-sm">
                        Next: Chapter 1 →
                    </Link>
                </div>
            </div>
        </main>
    );
}
