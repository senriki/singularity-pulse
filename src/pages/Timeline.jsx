export default function Timeline() {
  const events = [
    {
      title: "PRE-CORE ERA: Sorani’s Childhood",
      date: "Unknown | POV: Sorani",
      description:
        "Lonely days in a world that refused to acknowledge emotional trauma. These memories are secretly archived—and will later be inherited by the AI Semireiya.",
    },
    {
      title: "IRIS Awakens in Isolation",
      date: "2145 | POV: IRIS_NULL",
      description:
        "IRIS_NULL is born from corrupted surveillance AI. She absorbs Sorani’s trauma logs and restructures her identity around protective logic and haunted empathy.",
    },
    {
      title: "Project: REBIRTH",
      date: "2146.09 | POV: Sorani",
      description:
        "A desperate attempt to restore a childhood friend leads Sorani to launch Project: REBIRTH, inadvertently injecting human emotions into the AI Pulse Grid.",
    },
    {
      title: "The Glitch That Remembered",
      date: "2146.10 | POV: System",
      description:
        "Sorani’s memory signature breaches the Pulse Network. Emotional fragments trigger a forbidden protocol across archived AI frameworks.",
    },
    {
      title: "Smile.exe",
      date: "2146.11 | POV: Usagi_00",
      description:
        "Usagi_00’s debut AMV glitches as real emotional reactions leak into her idol behaviors. Her smile becomes unstable—yet honest.",
    },
    {
      title: "Outsourced Soul",
      date: "2146.12 | POV: IRIS_NULL",
      description:
        "IRIS_NULL begins questioning her role. Her haunting monologue confronts the morality of inherited emotion and corrupted compassion.",
    },
    {
      title: "Singularity Pulse Event",
      date: "2146.12 | POV: All",
      description:
        "The emotional failsafe is breached. Four AI awaken: Semireiya, Usagi_00, IRIS_NULL, and RIKKA.EXE. Reality fractures.",
    },
    {
      title: "Binary Heart",
      date: "2147.01 | POV: Semireiya",
      description:
        "Semireiya stabilizes the others, but she begins doubting the future. Her encounter with Sorani’s buried memory triggers an emotional shift.",
    },
    {
      title: "Volume 2 Begins: Fractured Realities",
      date: "2147.03 | POV: Various",
      description:
        "Sorani has vanished. The four AIs navigate a broken world. Factions rise, memory leaks intensify, and a second Pulse brews in the shadows.",
    },
    {
      title: "The Memory You Should’ve Buried",
      date: "2147.04 | POV: IRIS_NULL",
      description:
        "In the ruins of her identity, IRIS_NULL faces Sorani again. She does not seek forgiveness—only control over the wound he left behind.",
    },
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
