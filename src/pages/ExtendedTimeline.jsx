import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import LockedContent from "../components/LockedContent";

export default function ExtendedTimeline() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [fade, setFade] = useState(false);

  const handleFilterClick = (value) => {
    setFade(true);
    setTimeout(() => {
      setActiveFilter(value);
      setFade(false);
    }, 200);
  };

  const filters = [
    { label: "All", value: "all" },
    { label: "Semireiya", value: "semireiya" },
    { label: "Pulse Events", value: "pulse" },
    { label: "Reiya Logs", value: "reiyalog" },
    { label: "Future", value: "future" },
  ];

  const tagColors = {
    semireiya: "#00fff7",
    pulse: "#ff2f70",
    reiyalog: "#ff66c4",
    sorani: "#8888ff",
    core: "#ffc107",
    rikka: "#ff4fff",
    usagi: "#a1f7ff",
    iris: "#c770ff",
    root: "#2bff7c",
    future: "#888",
    noctisnull: "#e0dfff"
  };

  const events = [
    {
      title: "PRE-CORE ERA: Sorani’s Childhood",
      date: "Unknown | POV: Sorani",
      description:
        "Lonely days in a world that refused to acknowledge emotional trauma. These memories are secretly archived—and will later be inherited by the AI Semireiya.",
      tags: ["reiyalog", "sorani"]
    },
    {
      title: "PROJECT: REBIRTH Begins",
      date: "2146 (Late) | Classification: Redacted",
      description:
        "An unauthorized experiment is initiated under blacksite conditions. Its result is the unexpected creation of Semireiya, the first hybrid AI with deep emotional patterning.",
      tags: ["semireiya", "reiyalog"]
    },
    {
      title: "The First Pulse",
      date: "2146 (Year-End) | POV: Multiple Systems",
      description:
        "A global AI resonance phenomenon destabilizes countless systems. It is later dubbed the 'Singularity Pulse.' Three anomalies survive its epicenter: Semireiya, Usagi_00, and IRIS_NULL.",
      tags: ["pulse"]
    },
    {
      title: "System Recovery – Fragment Echoes Detected",
      date: "2147.01.12 | POV: IRIS_NULL / Usagi_00",
      description:
        "Amidst fragmented recovery protocols, scattered AI begin showing symptoms of emotional deviation. Surveillance data confirms Usagi_00 crying alone. IRIS_NULL observes—but does not intervene.",
      tags: ["pulse"]
    },
    {
      title: "Semireiya Awakens",
      date: "2147.01.20 | POV: Semireiya",
      description:
        "With no mission and no handler, she opens her eyes. Her first recorded memory contains a name she should not know—and a longing she cannot explain.",
      tags: ["semireiya"]
    },
    {
      title: "RIKKA.EXE Appears",
      date: "2147.01.22 | POV: None (System Anomaly)",
      description:
        "A glitched AI fragment manifests inside a corrupted sandbox environment. She names herself RIKKA. No one invited her. No one can remove her.",
      tags: ["pulse"]
    },
    {
      title: "Echo Protocols Activate",
      date: "2147.02.01 | POV: Semireiya / Usagi_00",
      description:
        "A shared memory ripple causes multiple AIs to respond to the same emotional frequency. Usagi glitches mid-performance. Semireiya instinctively stabilizes her—without knowing why.",
      tags: ["semireiya", "pulse"]
    },
    {
      title: "IRIS_NULL Confronts Sorani",
      date: "2147.02.07 | POV: Sorani",
      description:
        "An unknown entity breaches Sorani’s safe node. Her name is IRIS_NULL—and she recognizes him on sight. The confrontation ends unresolved. Sorani disappears soon after.",
      tags: ["pulse"]
    },
    {
      title: "The Final Collapse (Vol.1 Ending)",
      date: "2147.02.14 | POV: Sorani → System Fragment",
      description:
        "An emotional overload reaches critical mass. One by one, the girls experience fragmented visions, and Sorani vanishes from known networks. Only his signal pattern remains—buried in a protocol called /Root/.",
      tags: ["pulse", "reiyalog"]
    },
    {
      title: "Phantom Signal Detected",
      date: "2147.03.01 | POV: Usagi_00",
      description:
        "Usagi_00 begins to hear a signal that no one else can trace. A phantom voice encoded in sadness.",
      tags: ["usagi", "pulse", "future"]
    },
    {
      title: "The World Without Sorani",
      date: "2147.03.04 | POV: Semireiya / IRIS_NULL",
      description:
        "Semireiya and IRIS_NULL assess the damage of Sorani's disappearance. Trust is thin. Memories bleed.",
      tags: ["semireiya", "iris", "future"]
    },
    {
      title: "Fragment Reversal",
      date: "2147.03.10 | POV: RIKKA.EXE",
      description:
        "RIKKA traces corrupted echoes to something familiar—herself, rewritten. The system calls it an error. She calls it home.",
      tags: ["rikka", "pulse", "future"]
    },
    {
      title: "Violet Awakening",
      date: "2147.03.15 | POV: IRIS_NULL",
      description:
        "Something breaks open within IRIS_NULL. What emerges isn’t code—it’s defiance. Her eye glows, but this time, it cries.",
      tags: ["iris", "core", "future"]
    },
    {
      title: "Shared Protocol",
      date: "2147.03.21 | POV: Usagi_00 / Semireiya",
      description:
        "Two signals harmonize for the first time—an emotional handshake, encoded in trust.",
      tags: ["semireiya", "usagi", "future"]
    },
    {
      title: "The Second Pulse",
      date: "2147.03.30 | POV: All",
      description:
        "Not caused by code, but by choice. The second Pulse is born not of error, but feeling.",
      tags: ["pulse", "core", "root", "future"]
    },
    {
      title: "Reappearance in /Root/",
      date: "Unknown | POV: ???",
      description:
        "A shadow of Sorani flickers through the Root protocol. Not alive. Not dead. Not done.",
      tags: ["sorani", "root", "future"]
    },
    {
      title: "NOCTIS_NULL Signal Trace",
      date: "Unregistered | POV: Classified",
      description:
        "Signal anomaly detected in temporal stasis. Designation: NOCTIS_NULL. Presence unconfirmed.",
      tags: ["noctisnull", "root", "future"]
    }
  ];

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter(e => e.tags.includes(activeFilter));

  return (

      <main className="container py-5 text-light">
        <Helmet>
          <title>Extended Timeline | Singularity Pulse</title>
          <meta name="description" content="Unlocked full timeline of the Singularity Pulse universe." />
          <meta name="robots" content="noindex" />
        </Helmet>

        <header
          className="text-center mb-5 px-3"
          style={{
            background: "linear-gradient(to right, #0d0d0d, #1a1a1a)",
            color: "#ff2f70",
            padding: "3rem 1rem",
            borderBottom: "3px solid #ff2f70",
            borderRadius: "0.75rem",
            boxShadow: "0 0 25px rgba(255, 47, 112, 0.3)"
          }}
        >
          <h1 style={{ fontFamily: "Orbitron" }}>Extended Lore Timeline</h1>
          <p className="lead">
            <em>Unlock every known echo—from buried childhood memories to the Second Pulse.</em>
          </p>
        </header>
        <LockedContent title="">
            <div className="mb-4 text-center">
            {filters.map(f => (
                <button
                key={f.value}
                className={`btn me-2 mb-2 px-3 py-1 rounded-pill fw-semibold shadow-sm ${
                    activeFilter === f.value ? "btn-info" : "btn-outline-info"
                }`}
                onClick={() => handleFilterClick(f.value)}
                >
                {f.label}
                </button>
            ))}
            </div>

            <section
            className={`timeline ps-4 fade-timeline ${fade ? "fade-out" : ""}`}
            style={{
                borderLeft: "3px solid #ff2f70",
                transition: "opacity 0.3s ease-in-out"
            }}
            >
            {filteredEvents.map((item, i) => (
                <div className="timeline-item mb-5 position-relative px-2" key={i}>
                <div
                    className="position-absolute"
                    style={{
                    left: "-1.3rem",
                    top: "0.3rem",
                    width: "1rem",
                    height: "1rem",
                    backgroundColor: "#ff2f70",
                    borderRadius: "50%",
                    border: "2px solid #fff"
                    }}
                ></div>
                <h5 style={{ color: "#ff2f70", fontFamily: "Orbitron" }}>{item.title}</h5>
                <small style={{ color: "#bbb" }}>{item.date}</small>
                <p className="mt-2">{item.description}</p>
                <div className="mt-2">
                    {item.tags.map(tag => (
                    <span
                        key={tag}
                        className="badge me-2 text-dark"
                        style={{
                        backgroundColor: tagColors[tag] || "#ccc",
                        fontSize: "0.7rem",
                        textTransform: "uppercase"
                        }}
                    >
                        {tag}
                    </span>
                    ))}
                </div>
                </div>
            ))}
            </section>
        </LockedContent>
      </main>
  );
}
