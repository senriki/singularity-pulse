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
            title: "Blood Hunt",
            character: "Semireiya",
            type: "Canon Song",
            timeline: "Volume 1, Chapter 2",
            link: "https://www.youtube.com/watch?v=Twsf0IH30To",
            desc: "Semireiya’s berserker override is triggered—unleashing her raw rage beneath the calm exterior. A battle-ready cyber-rock track.",
        },
        {
            title: "Horizon’s Lullaby",
            character: "Senriki Sorani",
            type: "Tribute / Soft Ending",
            timeline: "Volume 1, Chapter 5",
            link: "https://www.youtube.com/watch?v=VIDEO_ID_3",
            desc: "A gentle goodbye for a fading memory. Sorani reflects on the past through a tribute inspired by Nanashi Mumei’s farewell.",
        },
        {
            title: "Outsourced Soul",
            character: "IRIS_NULL",
            type: "Canon Song",
            timeline: "Volume 2, Chapter 1",
            link: "https://www.youtube.com/watch?v=VIDEO_ID_4",
            desc: "IRIS_NULL questions her synthetic soul in this haunting industrial rock ballad—part logic, part broken empathy.",
        },
        {
            title: "Binary Heart",
            character: "Semireiya",
            type: "Canon Song",
            timeline: "Volume 2, Chapter 2",
            link: "https://www.youtube.com/watch?v=VIDEO_ID_5",
            desc: "A reflection on fractured logic and unspoken pain. Semireiya’s inner stability is tested in this dual-emotion anthem.",
        },
    ];

    const extraTracks = [
        {
            title: "Zani: Lucid Runner",
            character: "Zani (Wuthering Waves)",
            type: "Inspired / Anime Fusion",
            timeline: "Non-canon",
            link: "https://www.youtube.com/watch?v=VIDEO_ID_ZANI",
            desc: "A high-energy electronic track blending J-pop, French, and Japanese vocals inspired by Zani from Wuthering Waves.",
        },
        {
            title: "Roshidere: Freeze My Smile",
            character: "Roshidere OC / Inspired",
            type: "Anime Tribute",
            timeline: "Non-canon",
            link: "https://www.youtube.com/watch?v=VIDEO_ID_ROSHI",
            desc: "Based on the energy and bittersweet charm of Roshidere (The Dangers in My Heart). Emotional yet upbeat.",
        },
        {
            title: "Smile.exe (Anthem Ver.)",
            character: "Usagi_00",
            type: "Special / B-Day Anthem",
            timeline: "Community Event",
            link: "https://www.youtube.com/watch?v=VIDEO_ID_6",
            desc: "A cheerful version of Smile.exe — built for celebration, with punchy vocals and community spirit.",
        },
        {
            title: "AI Dangdut - Virtual Hati",
            character: "N/A",
            type: "Experimental / Dangdut Fusion",
            timeline: "Non-canon",
            link: "https://www.youtube.com/watch?v=VIDEO_ID_DANGDUT",
            desc: "An experimental AI track fusing Indonesian dangdut with Vocaloid-style Japanese lyrics. Playful and genre-bending.",
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


            <section className="row">
                {canonTracks.map((track, i) => (
                    <div className="col-md-6 mb-4" key={i}>
                        <div
                            className="p-4 h-100"
                            style={{
                                backgroundColor: "#131313",
                                border: "1px solid #333",
                                borderRadius: "1rem",
                            }}
                        >
                            <h5 style={{ fontFamily: "Orbitron", color: "#ff66c4" }}>{track.title}</h5>
                            <div style={{ fontSize: "0.9rem", color: "#bbb" }}>
                                Character: <strong>{track.character}</strong> | Type: {track.type}
                            </div>
                            <div style={{ fontSize: "0.85rem", color: "#66ccff", marginTop: "0.3rem" }}>
                                📍 {track.timeline}
                            </div>
                            <p className="mt-2">{track.desc}</p>
                            <a
                                href={track.link}
                                className="btn btn-outline-info btn-sm mt-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ▶ Listen on YouTube
                            </a>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
