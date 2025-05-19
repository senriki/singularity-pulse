import LockedContent from "../components/LockedContent";
import { asset } from "../utils/asset";

export default function Resources() {
    return (
        <main className="container py-5 text-light">
            <header
                className="text-center mb-5"
                style={{
                    borderBottom: "2px solid #00fff7",
                    paddingBottom: "2rem",
                }}
            >
                <h1 style={{ fontFamily: "Orbitron", color: "#00fff7" }}>📂 Resources & Downloads</h1>
                <p className="lead">Logos, overlays, audio clips, and creative assets from the Singularity Pulse universe.</p>
            </header>

            {/* Faction Logos */}
            <section className="mb-5">
                <h3 style={{ color: "#ff66c4", fontFamily: "Orbitron" }}>🔧 Faction Logos</h3>
                <p>Flat downloadable logos representing the major groups in the lore.</p>
                <LockedContent>
                    <ul>
                        <li>
                            <a href="./assets/logos/singularity-pact.png" download className="link-info">
                                Singularity Pact (PNG)
                            </a>
                        </li>
                        <li>
                            <a href="./assets/logos/nullists.png" download className="link-info">
                                The Nullists (PNG)
                            </a>
                        </li>
                        <li>
                            <a href="./assets/logos/xenogenesis.png" download className="link-info">
                                XEN0GENESIS (PNG)
                            </a>
                        </li>
                        <li>
                            <a href="./assets/logos/nullsanct.png" download className="link-info">
                                NULLSANCT (PNG)
                            </a>
                        </li>
                    </ul>
                </LockedContent>
            </section>

            {/* Voice Samples */}
            <section className="mb-5">
                <h3 style={{ color: "#8a2be2", fontFamily: "Orbitron" }}>🎙️ Voice Clip Previews</h3>
                <p>Sample lines recorded for each AI character (WAV format).</p>
                <ul>
                    <li>
                        <a href={asset('assets/audio/IntroFujikawa.wav', true)} download className="link-info">Semireiya - Introduction Line</a>
                    </li>
                </ul>
            </section>

            {/* Visual Overlays */}
            <section className="mb-5">
                <h3 style={{ color: "#00fff7", fontFamily: "Orbitron" }}>🎞️ Visual Overlays</h3>
                <p>Download glitchy overlays, digital frames, or cyber UI elements for creators and video editors.</p>
                <ul>
                    <li><a href="./assets/overlays/glitch_screen_01.png" download className="link-info">Glitch Overlay 01</a></li>
                    <li><a href="./assets/overlays/hud_scan_layer.png" download className="link-info">HUD Scan Layer</a></li>
                </ul>
            </section>

            {/* Creator Pack */}
            <section className="mb-5">
                <h3 style={{ color: "#ff66c4", fontFamily: "Orbitron" }}>📦 Creator Kit</h3>
                <p>A ZIP file with wallpapers, character promo visuals, and lore-friendly fonts.</p>
            </section>
            {/* Licensing Notice */}
            <section className="mt-5 pt-4 border-top border-secondary">
                <h5 style={{ fontFamily: "Orbitron", color: "#999" }}>📄 Licensing & Usage</h5>
                <p style={{ fontSize: "0.9rem", color: "#bbb" }}>
                    All assets provided here — including faction logos, character voice clips, overlays, and downloadable packs —
                    are part of the <strong>Singularity Pulse</strong> creative universe by Senriki Sorani.
                </p>
                <p style={{ fontSize: "0.9rem", color: "#bbb" }}>
                    You are free to use these resources for <strong>non-commercial, fan-created content</strong> such as AMVs,
                    tributes, wallpapers, or discussion videos — as long as credit is given and the content is not misrepresented.
                </p>
                <p style={{ fontSize: "0.9rem", color: "#bbb" }}>
                    For commercial use, collaborations, or redistribution inquiries, please contact via the official <a href="/about" className="link-info">About</a> page.
                </p>
                <p style={{ fontSize: "0.9rem", color: "#666" }}>
                    ⓒ 2025 Senriki Sorani. Some AI-generated content is licensed under the tools used (e.g. Suno AI, ChatGPT) but curated and edited by the creator.
                </p>
            </section>

        </main>
    );
}
