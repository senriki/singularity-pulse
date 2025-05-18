export default function Episodes() {
    const canonEpisodes = [
        {
            title: "Episode 01: Smile.exe",
            date: "2025-04-25",
            focus: "Usagi_00",
            timelineTag: "Volume 1, Chapter 3 (2146.11)",
            link: "https://www.youtube.com/embed/JGb8T6LQklQ",
            desc: "The bubbly AI idol Usagi_00 is introduced. But beneath her infectious smile, something artificial begins to glitch. A high-energy AMV with idol-fusion style.",
        },
        {
            title: "Episode 02: Blood Hunt",
            date: "2025-02-10",
            focus: "Semireiya",
            timelineTag: "Volume 1, Chapter 2 (2146.10)",
            link: "https://www.youtube.com/embed/Twsf0IH30To",
            desc: "When Semireiya enters a berserker trance, no enemy stands a chance. This combat-driven AMV dives into the consequences of protocol override and lost control.",
        },
        {
            title: "Episode 03: Horizon’s Lullaby",
            date: "2025-03-30",
            focus: "Sorani",
            timelineTag: "Volume 1, Chapter 5 (2146.12)",
            link: "https://www.youtube.com/embed/VIDEO_ID_3",
            desc: "A tribute to Nanashi Mumei and the emotional cracks behind Sorani’s calm. This marks the emotional turning point in the timeline after the Singularity Pulse event.",
        },
        {
            title: "Episode 04: Outsourced Soul",
            date: "2025-05-16",
            focus: "IRIS_NULL",
            timelineTag: "Volume 2, Chapter 1 (2147.01)",
            link: "https://www.youtube.com/embed/VIDEO_ID_4",
            desc: "IRIS_NULL delivers a haunting monologue as she rewrites her function from guardian to judgment. Her birth of logic is infected by buried empathy.",
        },
        {
            title: "Episode 05: Binary Heart",
            date: "2025-06-XX",
            focus: "Semireiya",
            timelineTag: "Volume 2, Chapter 2 (2147.02+)",
            link: "https://www.youtube.com/embed/5DnOec3Ywrs",
            desc: "Semireiya reflects on her purpose. Her stability begins to crack as emotional residue from Sorani threatens her defined logic.",
        },
    ];

    const extraVideos = [
        {
            title: "The Pulse That Cared (Short)",
            date: "2025-04-XX",
            type: "Vertical Short",
            link: "https://www.youtube.com/embed/VIDEO_ID_SHORT_1",
            desc: "A brief emotional glitch from Usagi_00 as she tries to comfort another construct using a broken song fragment.",
        },
        {
            title: "Recalibrate (Glitch Monologue)",
            date: "2025-05-XX",
            type: "Special Clip",
            link: "https://www.youtube.com/embed/VIDEO_ID_SHORT_2",
            desc: "IRIS_NULL POV glitch segment — pure distortion, poetic fragments, and corrupted logic.",
        },
        {
            title: "Smile.exe: Debut Teaser",
            date: "2025-04-20",
            type: "Teaser",
            link: "https://www.youtube.com/embed/Vq6QlYphfbw",
            desc: "A teaser showing Usagi_00 waking up in fragmented memory space before the Smile.exe full release.",
        },
        {
            title: "Community B-Day Anthem",
            date: "2025-05-18",
            type: "Special Music",
            link: "https://www.youtube.com/embed/VIDEO_ID_SHORT_4",
            desc: "A non-canon tribute song celebrating a streamer’s birthday. Produced as a side anthem by Sorani.",
        },
    ];

    return (
        <main className="container py-5 text-light">
            <header
                className="text-center mb-5"
                style={{
                    background: "linear-gradient(to right, #0f0f0f, #1a1a1a)",
                    color: "#ff2f70",
                    padding: "3rem 1rem",
                    borderBottom: "2px solid #ff2f70",
                }}
            >
                <h1>Episode Tracker</h1>
                <p className="lead">Follow every major AMV, character debut, and narrative short in Singularity Pulse — canon and beyond.</p>
            </header>

            <section className="mb-5">                
                <h3 className="mb-3" style={{ color: "#00fff7", fontFamily: "Orbitron" }}>🎥 Canon Story Episodes</h3>
                {canonEpisodes.map((ep, i) => (
                    <div className="mb-4 p-4" style={{ backgroundColor: "#131313", borderRadius: "1rem", border: "1px solid #333" }} key={i}>
                        <h5 style={{ fontFamily: "Orbitron", color: "#ff2f70" }}>{ep.title}</h5>
                        <div style={{ color: "#aaa", fontSize: "0.9rem" }}>
                            Released: {ep.date} | Focus: {ep.focus}
                        </div>
                        {ep.timelineTag && (
                            <div style={{ fontSize: "0.85rem", color: "#66ccff", marginTop: "0.25rem" }}>
                                📍 Lore Timeline: {ep.timelineTag}
                            </div>
                        )}
                        <div className="ratio ratio-16x9 mt-2">
                            <iframe src={ep.link} title={ep.title} allowFullScreen style={{ borderRadius: "0.5rem" }} />
                        </div>
                        <p className="mt-3">{ep.desc}</p>
                    </div>
                ))}
            </section>

            <section>
                <h3 className="mb-3" style={{ color: "#8a2be2", fontFamily: "Orbitron" }}>🎞️ Shorts & Specials</h3>
                {extraVideos.map((vid, i) => (
                    <div className="mb-4 p-4" style={{ backgroundColor: "#0f0f0f", borderRadius: "1rem", border: "1px solid #2a2a2a" }} key={i}>
                        <h5 style={{ fontFamily: "Orbitron", color: "#8a2be2" }}>{vid.title}</h5>
                        <div style={{ color: "#aaa", fontSize: "0.9rem" }}>Released: {vid.date} | Type: {vid.type}</div>
                        <div className="ratio ratio-16x9 mt-2">
                            <iframe src={vid.link} title={vid.title} allowFullScreen style={{ borderRadius: "0.5rem" }} />
                        </div>
                        <p className="mt-3">{vid.desc}</p>
                    </div>
                ))}
            </section>
        </main>
    );
}
