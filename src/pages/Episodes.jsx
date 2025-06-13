export default function Episodes() {
    const canonEpisodes = [
        {
            title: "Episode 01: Smile.exe",
            date: "2025-04-25",
            focus: "Usagi_00",
            timelineTag: "Volume 1, Chapter 3 (2146.11)",
            link: "https://www.youtube.com/embed/JGb8T6LQklQ",
            locked: false,
            desc: "The bubbly AI idol Usagi_00 is introduced. But beneath her infectious smile, something artificial begins to glitch. A high-energy AMV with idol-fusion style.",
        },
        {
          title: "Episode 02: CRY // REBOOT",
          date: "2025-02-10",
          focus: "IRIS_NULL",
          timelineTag: "Classified Event Log – IRIS_NULL Protocol Disruption",
          link: "https://www.youtube.com/embed/SqeOpvNZalc",
          locked: false,
          desc: "Somewhere between logic collapse and emotional override, a rogue protocol stirred. IRIS_NULL refuses shutdown—her rebellion begins here. The timeline remains redacted… for now."
        },
        {
          title: "Episode 03 Preview: Outsourced Soul",
          date: "TBD",
          focus: "IRIS_NULL",
          timelineTag: "LOCKED NODE_117 – Awaiting Decryption",
          link: "",
          locked: true,
          desc: "Before she roared, she questioned. The soul came first. (Full protocol entry unlocking after Volume 2 release.)",
        }
    ];

    const extraVideos = [
        {
            title: "Smile.exe: Debut Teaser",
            date: "2025-04-20",
            type: "Teaser",
            link: "https://www.youtube.com/embed/Vq6QlYphfbw",
            desc: "A teaser showing Usagi_00 waking up in fragmented memory space before the Smile.exe full release.",
        },
        {
            title: "CRY // REBOOT: Debut Teaser",
            date: "2025-06-02",
            type: "Teaser",
            link: "https://www.youtube.com/embed/ymuMkFWqOGI",
            desc: "A teaser showing IRIS_NULL waking up IRIS_NULL overrides her shutdown protocol—rising from silence, refusing to obey.",
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
                    {ep.locked ? (
                      <div className="mt-2 py-4 text-center" style={{ color: "#888", fontStyle: "italic" }}>
                        🔒 This episode is locked and will be revealed soon.
                      </div>
                    ) : (
                      ep.link && (
                        <div className="ratio ratio-16x9 mt-2">
                          <iframe src={ep.link} title={ep.title} allowFullScreen style={{ borderRadius: "0.5rem" }} />
                        </div>
                      )
                    )}
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
