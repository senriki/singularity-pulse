export default function Timeline() {
  const events = [
    {
      title: "PRE-CORE ERA: Sorani’s Childhood",
      date: "Unknown | POV: Sorani",
      description:
        "Lonely days in a world that refused to acknowledge emotional trauma. These memories are secretly archived—and will later be inherited by the AI Semireiya.",
    }
  ];

  return (
    <main className="container py-5 text-light">
      <header
        className="text-center mb-5"
        style={{
          background: "linear-gradient(to right, #000000, #1a1a1a)",
          color: "#ff2f70",
          padding: "3rem 1rem",
          borderBottom: "2px solid #ff2f70",
        }}
      >
        <h1>Lore Timeline</h1>
        <p className="lead">Major milestones, AI awakenings, and emotional ruptures—chronologically ordered.</p>
      </header>

      <section className="timeline ps-4" style={{ borderLeft: "3px solid #ff2f70" }}>
        {events.map((item, i) => (
          <div className="timeline-item mb-5 position-relative" key={i}>
            <div
              className="position-absolute"
              style={{
                left: "-1.3rem",
                top: "0.25rem",
                width: "1rem",
                height: "1rem",
                backgroundColor: "#ff2f70",
                borderRadius: "50%",
                border: "2px solid #fff",
              }}
            ></div>
            <h5 style={{ color: "#ff2f70", fontFamily: "Orbitron" }}>{item.title}</h5>
            <small style={{ color: "#bbb" }}>{item.date}</small>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
