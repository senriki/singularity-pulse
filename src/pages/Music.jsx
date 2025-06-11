export default function Music() {
    const canonTracks = [
        {
            title: "Smile.exe",
            character: "Usagi_00",
            type: "Canon Song",
            timeline: "Volume 1, Chapter 3",
            link: "https://www.youtube.com/watch?v=JGb8T6LQklQ",
            desc: "The glitch that smiled. Usagi_00's identity flickers between joy and chaos in this emotional idol-fusion anthem.",
        },
        {
            title: "CRY // REBOOT",
            character: "IRIS_NULL",
            type: "Canon Song",
            timeline: "Unknown",
            link: "https://www.youtube.com/watch?v=SqeOpvNZalc",
            desc: "The moment IRIS_NULL overrides her shutdown protocol—rising from silence, refusing to obey",
        },
    ];

    const extraTracks = [
        {
            title: "Fractured Mirror | Date A Bullet AMV - Kurumi & Fallen Queen: A Cyberpunk Tragedy",
            character: "Tokisasi Kurumi (Date a Live)",
            type: "Inspired / Anime Fusion",
            timeline: "Non-canon",
            link: "https://www.youtube.com/watch?v=r025_W6nJfY",
            desc: "This track is a cyberpunk elegy intertwining poetic lyrics with a futuristic soundscape. It’s a tale of lost friendship, tragic betrayal, and the heart-wrenching beauty of a broken crown. Watch as Kurumi confronts the ghost of her past, embodied by the fallen queen—her best friend whose death reshaped their fates into a legacy of sorrow and defiant resilience.",
        },
        {
            title: "🔥 BLOOD HUNT – OFFICIAL RELEASE | Solo Leveling AMV – Dark Red Hood Tale in Rap Metal x Electronic",
            character: "Sung Jin-woo (Solo Leveling)",
            type: "Inspired / Anime Fusion",
            timeline: "Non-canon",
            link: "https://www.youtube.com/watch?v=Twsf0IH30To",
            desc: "This track embodies raw intensity, cyber-futuristic energy, and anime-style action. If you're into Solo Leveling, cyberpunk anime, or dark fantasy battles, this is for you!",
        },
        {
            title: "Dream Override | Re:Zero AMV - Rem’s Eternal Slumber: A Cyberpunk Tragedy",
            character: "Rem (Re:Zero)",
            type: "Inspired / Anime Fusion",
            timeline: "Non-canon",
            link: "https://www.youtube.com/watch?v=Z9qpaTFOtiQ",
            desc: "This track is a cyberpunk fairy tale weaving fragmented memories, broken signals, and a silent plea that may never be answered. Inspired by Rem’s journey in Re:Zero, the AMV explores the fragile balance between hope and resignation—where dreams become cages, and reality fades like a dying transmission.",
        },
        {
            title: "Abyss Frequency – OFFICIAL RELEASE | Honkai: Star Rail AMV/GMV – Acheron’s Tragic Elegy",
            character: "Acheron (HSR)",
            type: "Inspired / Anime Fusion",
            timeline: "Non-canon",
            link: "https://www.youtube.com/watch?v=Z9qpaTFOtiQ",
            desc: "This track is a melancholic anthem, intertwining poetic lyrics with a cinematic soundscape. It tells the story of a swordswoman who carries the weight of memories that should have faded, yet still resonate in the silence. A song of solitude, sacrifice, and the echoes of a fate she cannot escape.",
        },
        {
            title: "Venom.exe – OFFICIAL RELEASE | NieR: Automata AMV/GMV – Corrupted AI’s Final Plea",
            character: "2B (NieR: Automata Ver1.1a)",
            type: "Inspired / Anime Fusion",
            timeline: "Non-canon",
            link: "https://www.youtube.com/watch?v=yXS5UTK4X24",
            desc: "This track is a high-speed, glitch-ridden anthem built on broken memories and desperate longing. It tells the story of an AI prince, cursed and forgotten, who reaches out one last time in hopes of rewriting his fate. But salvation comes at a cost... and not all fairy tales end in love.",
        },
    ];

    return (
        <main className="container py-5 text-light">
            <header
                className="text-center mb-5"
                style={{
                    background: "linear-gradient(to right, #0f0f0f, #1a1a1a)",
                    color: "#00fff7",
                    padding: "3rem 1rem",
                    borderBottom: "2px solid #00fff7",
                }}
            >
                <h1>Music Library</h1>
                <p className="lead">AI-powered songs from the Singularity Pulse universe — emotion, glitch, and identity in every note.</p>
            </header>

            <section className="mb-5">
                <h3 className="mb-3" style={{ color: "#00fff7", fontFamily: "Orbitron" }}>🎵 Canon Music</h3>
                <div className="row">
                    {canonTracks.map((track, i) => (
                        <div className="col-md-6 mb-4" key={i}>
                            <div className="p-4 h-100" style={{ backgroundColor: "#131313", border: "1px solid #333", borderRadius: "1rem" }}>
                                <h5 style={{ fontFamily: "Orbitron", color: "#ff66c4" }}>{track.title}</h5>
                                <div style={{ fontSize: "0.9rem", color: "#bbb" }}>Character: <strong>{track.character}</strong> | Type: {track.type}</div>
                                <div style={{ fontSize: "0.85rem", color: "#66ccff", marginTop: "0.3rem" }}>📍 {track.timeline}</div>
                                <p className="mt-2">{track.desc}</p>
                                <a href={track.link} className="btn btn-outline-info btn-sm mt-2" target="_blank" rel="noopener noreferrer">▶ Listen on YouTube</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="mb-3" style={{ color: "#8a2be2", fontFamily: "Orbitron" }}>🎶 Extra / Inspired Tracks</h3>
                <div className="row">
                    {extraTracks.map((track, i) => (
                        <div className="col-md-6 mb-4" key={i}>
                            <div className="p-4 h-100" style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "1rem" }}>
                                <h5 style={{ fontFamily: "Orbitron", color: "#b280ff" }}>{track.title}</h5>
                                <div style={{ fontSize: "0.9rem", color: "#bbb" }}>Character: <strong>{track.character}</strong> | Type: {track.type}</div>
                                <div style={{ fontSize: "0.85rem", color: "#66ccff", marginTop: "0.3rem" }}>📍 {track.timeline}</div>
                                <p className="mt-2">{track.desc}</p>
                                <a href={track.link} className="btn btn-outline-light btn-sm mt-2" target="_blank" rel="noopener noreferrer">▶ Listen on YouTube</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
