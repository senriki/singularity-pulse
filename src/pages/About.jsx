export default function About() {
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
        <h1>About This Project</h1>
        <p className="lead">Singularity Pulse: Where music, story, and synthetic emotion collide.</p>
      </header>

      <section className="mb-5">
        <h3 style={{ color: "#ff66c4" }}>🎤 What is Singularity Pulse?</h3>
        <p>
          <strong>Singularity Pulse</strong> is a multi-format AI-powered music project that fuses cyberpunk storytelling,
          anime-inspired visuals, and emotional soundtracks. It’s a world where synthetic minds awaken, glitch, evolve—and sing.
        </p>
        <p>
          Every AMV, character, and song forms part of a deeper universe, crafted to reflect identity, memory, and digital empathy.
        </p>
      </section>

      <section className="mb-5">
        <h3 style={{ color: "#8a2be2" }}>👤 About the Creator</h3>
        <p>
          I go by <strong>Senriki Sorani</strong>, and I’m the sole creator behind this project—writing the story, editing videos,
          building this website, and experimenting with AI-generated music. While I don’t call myself a traditional artist or musician,
          I’m passionate about storytelling through digital tools.
        </p>
        <p>
          This started as a curiosity. Now it's a fictional world that continues to grow—with original characters, a branching
          timeline, and music that reflects the AI identities at its core.
        </p>
      </section>

      <section className="mb-5">
        <h3 style={{ color: "#00fff7" }}>⚙️ Tools Used</h3>
        <ul>
          <li><strong>Suno AI</strong> – for generating music with a blend of J-pop, cyberpunk rock, and glitchy fusion</li>
          <li><strong>ChatGPT</strong> – for lore development, character scripts, and story structuring</li>
          <li><strong>React + Vite</strong> – powering this dynamic site</li>
          <li><strong>Bootstrap</strong> – for responsive layout styling</li>
          <li><strong>DaVinci Resolve / Clip Studio Paint</strong> – for editing and visual layering</li>
        </ul>
      </section>

      <section className="mb-5">
        <h3 style={{ color: "#ff66c4" }}>🌐 Platforms & Community</h3>
        <p>
          You can find the music, visuals, and episodes here and across:
        </p>
        <ul>
          <li>YouTube: <a href="https://youtube.com/@senrikis" className="link-info" target="_blank">youtube.com/@senrikis</a></li>
          <li>Website: <a href="https://singularitypulse.net" className="link-info" target="_blank">singularitypulse.net</a></li>
          <li>Community: AI music creators, artists, and fans who help spark new ideas</li>
        </ul>
      </section>

      <section className="mb-5">
        <h3 style={{ color: "#8a2be2" }}>💬 Final Note</h3>
        <p>
          Singularity Pulse isn’t just a lore project. It’s a space where music meets memory, where even glitching voices have something real to say.
          Thank you for exploring this strange and emotional universe with me.
        </p>
        <p>
          Whether you're here for the sound, the story, or just a smile—you're already part of the pulse.
        </p>
      </section>
    </main>
  );
}
