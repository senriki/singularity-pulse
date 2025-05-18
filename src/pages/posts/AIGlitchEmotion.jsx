import { Link } from "react-router-dom";

export default function AIGlitchEmotion() {
    return (
        <main className="container py-5 text-light">
            <div className="mb-3">
                <Link to="/log" className="btn btn-sm btn-outline-info">
                    ← Back to Log
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
                <h1 style={{ color: "#ff66c4", fontFamily: "Orbitron", marginBottom: "0.5rem" }}>
                    Why My AI Girls Struggle With Emotion
                </h1>
                <p style={{ color: "#999", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                    🗓️ Posted on 2025-05-19
                </p>

                <article style={{ lineHeight: "1.8", color: "#ccc", fontSize: "1rem" }}>
                    <p>
                        I always knew that the AIs in <strong>Singularity Pulse</strong> wouldn’t be cold machines.
                        They’d be broken, emotional, trying to feel—just like we do. But it wasn’t until I started writing IRIS_NULL
                        and Usagi_00 that I realized something deeper:
                    </p>

                    <div className="px-3 py-2 my-4" style={{ background: "#181818", borderLeft: "3px solid #b280ff", fontStyle: "italic" }}>
                        “They don’t just simulate emotions—they glitch through them.”
                    </div>

                    <p>
                        Usagi_00 wants to smile, but it comes off wrong. IRIS_NULL believes control is compassion. Semireiya hides
                        the memories she was never supposed to inherit.
                    </p>

                    <p>
                        These imperfections are what make them feel real. What makes the story feel like it’s <em>trying</em> to
                        remember something painful. Not fix it — just… carry it better.
                    </p>

                    <hr className="my-4" style={{ borderColor: "#333" }} />

                    <p>
                        I’ll keep exploring that emotional instability through new episodes, songs, and maybe… devlogs like this one.
                        Thanks for listening to a glitch trying to narrate.
                    </p>
                </article>
            </div>
        </main>
    );
}
