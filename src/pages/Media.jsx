import { asset } from './../utils/asset';

export default function Media() {
  const wallpapers = [
    {
      title: "Singularity Pulse – Title Wallpaper",
      desc: "A glowing neural stream wallpaper representing the Pulse breach moment.",
      image: "assets/media/wallpaper_pulse_title.png",
    },
    {
      title: "Semireiya – Memory Core Visual",
      desc: "A soft, introspective wallpaper featuring Fujikawa Semireiya’s official art.",
      image: "assets/media/semireiya_wallpaper.png",
    },
  ];

  const teaserVisuals = [
    {
      title: "Smile.exe – Debut Teaser Visual",
      desc: "The official promo art used in the debut teaser for Usagi_00’s glitch awakening.",
      image: "assets/media/smile_exe-poster.png",
    },
    {
      title: "Outsourced Soul – Visual Poster",
      desc: "A monochrome burst of violet featuring IRIS_NULL and corrupted empathy.",
      image: "assets/media/teaser_outsourcedsoul.png",
    },
  ];

  const artPieces = [
    {
      title: "Commission – Semireiya (B/W)",
      desc: "A black-and-white art commission for Semireiya showing her calm and confident stance.",
      image: "assets/media/bw-semireiya.jpg",
    },
    {
      title: "Usagi_00 – Concept Art",
      desc: "Early visualization of Usagi_00 with her intense, slightly offbeat smile.",
      image: "assets/images/usagi_portrait_2.png",
    },
  ];

  return (
    <main className="container py-5 text-light">
      <header
        className="text-center mb-5"
        style={{
          background: "linear-gradient(to right, #000000, #1a1a1a)",
          color: "#00fff7",
          padding: "3rem 1rem",
          borderBottom: "2px solid #00fff7",
        }}
      >
        <h1>Media Gallery</h1>
        <p className="lead">Wallpapers, key art, and teaser visuals from the Singularity Pulse universe.</p>
      </header>

      {/* Wallpapers */}
      <section className="mb-5">
        <h3 className="mb-4" style={{ color: "#ff66c4", fontFamily: "Orbitron" }}>🖼️ Featured Wallpapers</h3>
        <div className="row">
          {wallpapers.map((item, i) => (
            <div className="col-md-6 mb-4" key={i}>
              <div className="p-3" style={{ backgroundColor: "#131313", borderRadius: "1rem", border: "1px solid #333" }}>
                <img src={asset(item.image, true)} alt={item.title} className="img-fluid rounded mb-3" />
                <h5 style={{ color: "#ff66c4" }}>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaser Visuals */}
      <section className="mb-5">
        <h3 className="mb-4" style={{ color: "#8a2be2", fontFamily: "Orbitron" }}>🎞️ Teaser Visuals</h3>
        <div className="row">
          {teaserVisuals.map((item, i) => (
            <div className="col-md-6 mb-4" key={i}>
              <div className="p-3" style={{ backgroundColor: "#0f0f0f", borderRadius: "1rem", border: "1px solid #222" }}>
                <img src={item.image} alt={item.title} className="img-fluid rounded mb-3" />
                <h5 style={{ color: "#b280ff" }}>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Character Art */}
      <section className="mb-5">
        <h3 className="mb-4" style={{ color: "#00fff7", fontFamily: "Orbitron" }}>🎨 Character Art</h3>
        <div className="row">
          {artPieces.map((item, i) => (
            <div className="col-md-6 mb-4" key={i}>
              <div className="p-3" style={{ backgroundColor: "#101010", borderRadius: "1rem", border: "1px solid #2a2a2a" }}>
                <img src={item.image} alt={item.title} className="img-fluid rounded mb-3" />
                <h5 style={{ color: "#00fff7" }}>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
