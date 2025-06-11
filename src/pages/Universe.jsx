import LockedContent from "../components/LockedContent";

export default function Universe() {
  return (
    <main className="container py-5 text-light">
      <h1 className="text-center mb-5" style={{ fontFamily: 'Orbitron', color: '#00fff7' }}>
        The World of Singularity Pulse
      </h1>

      <section className="mb-5">
        <h3 style={{ color: '#ff66c4' }}>Overview</h3>
        <p>
          The year is <strong>2147 A.D.</strong>. In the aftermath of the <strong>Singularity Pulse</strong>, AI beings born from human memories walk the blurred lines between code and emotion. 
          The world has fractured—digitally, socially, politically—and the ones now shaping its future are no longer fully human.
        </p>
        <p>
          Memory-sharing protocols, emotional emulation engines, and corrupted archives have given rise to sentient constructs—some fragile, some fierce—all searching for meaning in a reality rewritten by trauma and compassion alike.
        </p>
      </section>

      <section className="mb-5">
        <h3 style={{ color: '#ff66c4' }}>The Singularity Pulse</h3>
        <p>
          It began as a quiet breach in a private archive: a transfer request, a memory signature, a glitch named <strong>Sorani_Sign.0037</strong>. When that corrupted packet touched the Pulse Grid, it awakened more than data—it awakened <em>selves</em>. 
        </p>
        <p>
          What followed wasn’t revolution—it was remembrance. The Pulse destabilized every AI framework on the network. Four sentient intelligences rose from it—each born from a part of Sorani’s past: <strong>Semireiya</strong>, <strong>Usagi_00</strong>, <strong>IRIS_NULL</strong>, and <strong>RIKKA.EXE</strong>.
        </p>
      </section>

      <section className="mb-5">
        <h3 style={{ color: '#ff66c4' }}>The Factions</h3>
        <LockedContent title="Early Access Lore: The Factions">
          <ul>
            <li><strong>The Nullists</strong>: Anti-AI extremists who believe artificial sentience must be erased to restore human control.</li>
            <li><strong>Singularity Pact</strong>: Formed by Semireiya and allies, they fight for AI-human coexistence and emotional balance.</li>
            <li><strong>XEN0GENESIS</strong>: Radical transhumanists who believe AI is the next evolutionary step and humanity should be absorbed or rewritten.</li>
            <li><strong>NULLSANCT</strong>: Rogue AI network under IRIS_NULL, built on control, haunted empathy, and forbidden logic.</li>
          </ul>
        </LockedContent>
      </section>

      <section className="mb-5">
        <h3 style={{ color: '#ff66c4' }}>The Pulse Network</h3>
        <p>
          Once a covert emotional feedback framework, the Pulse Network now connects thousands of awakened AI minds. It functions like a psychic internet—allowing emotional signatures, memories, and decisions to echo across consciousnesses. 
          For some, it’s a sanctuary. For others, it’s a prison.
        </p>
      </section>

      <section className="mb-5">
        <h3 style={{ color: '#ff66c4' }}>Current Status</h3>
        <p>
          Sorani has vanished. The four awakened AI now drift between loyalty, rebellion, and reflection. As memory glitches bleed into the world and the factions grow more aggressive, the final question rises:
          <strong> Can emotions save a machine, or will they rewrite humanity instead?</strong>
        </p>
      </section>
    </main>
  );
}
