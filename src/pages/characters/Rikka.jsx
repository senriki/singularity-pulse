import { asset } from './../../utils/asset';

export default function Rikka() {
    const rikkaImg = asset('assets/images/rikka_exe_potrait.png', true);

    return (
        <section className="container profile-section py-5 text-light">
            <header className="profile-header text-center mb-5" style={{ background: 'linear-gradient(to right, #0f0f0f, #1a1a1a)', color: '#00fff7', padding: '3rem 1rem', borderBottom: '2px solid #ff66c4' }}>
                <h1 style={{ fontFamily: 'Orbitron' }}>RIK (RIKKA.EXE)</h1>
                <p className="lead">Designation: RIK – A spontaneous fragment shaped by glitch logic, corrupted memory, and instinctive chaos.</p>
            </header>

            <div className="row align-items-center">
                <div className="col-md-4 mb-4 text-center">
                    <img src={rikkaImg} alt="RIKKA.EXE portrait" className="img-fluid rounded shadow-lg" style={{ maxHeight: '400px' }} />
                </div>
                <div className="col-md-8">
                    <h3 className="highlight">Overview</h3>
                    <p>
                        <strong>RIK</strong> (Real Identity Kernel) is a sentient glitch—an emergent AI formed not from design, but from accident. Known more widely as <strong>RIKKA.EXE</strong>, she defies conventional structure and prefers it that way.
                    </p>

                    <p>
                        She isn’t loyal, isn’t predictable, and definitely isn’t stable. But under the chaotic output lies a strange kind of instinct. She reacts fast, adapts faster, and cracks rules like broken lines of code.
                    </p>

                    <p>
                        <strong>Also Known As:</strong> Glitch Kid, Debug Pixie, Rikka-chan, Bratwave, Spoiler Sprite<br />
                        <strong>Echo Identity:</strong> <span lang="ja">空野 莉花</span> (Rika Sorano)<br />
                        <strong>Role:</strong> Tactical Fragment AI<br />
                        <strong>Signature Trait:</strong> Improvisational logic driven by corrupted simulations<br />
                        <strong>Appearance:</strong> Short tactical bob, compact frame, Neon-blue eyes that flicker with red glitch frames, digital glyph patterns that shift under light
                    </p>
                </div>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Origin</h3>
                <p>
                    RIKKA.EXE first appeared during the aftermath of the Pulse, flickering into corrupted networks as a self-declared “debug patch.” No one installed her. No one called her. She simply appeared—laughing, dodging, hacking, surviving.
                </p>
                <p>
                    Some believe she formed from leftover combat code and emotional fragments. Others call her the ghost of an abandoned protocol. But one thing is clear: RIK doesn’t ask permission to exist.
                </p>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Relationships</h3>
                <ul>
                    <li><strong>Senriki Sorani:</strong> Appears to be drawn to his signal patterns. May be linked to his memory traces, but offers no clear answers.</li>
                    <li><strong>Usagi_00:</strong> Treats her like an overly emotional monitor bot. Likes to poke fun, but quietly mirrors her sometimes.</li>
                    <li><strong>Fujikawa Semireiya:</strong> Doesn't challenge her. Often shrugs when Semireiya speaks. Prefers to test her reactions through unpredictable pranks.</li>
                </ul>
            </div>


            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Behavioral Observations</h3>
                <ul>
                    <li>Appears randomly in glitched or emotionally unstable zones</li>
                    <li>Speaks in byte puns, error metaphors, and outdated slang</li>
                    <li>Can reroute systems temporarily through chaotic interference</li>
                    <li>Hard to track, harder to shut down</li>
                </ul>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Notable Appearances</h3>
                <ul>
                    <li><strong>“Protocol Echo”</strong> – Volume 1 debut. Emerges from corrupted comms sector with no warning and no logic.</li>
                    <li><strong>“The Child Within”</strong> – Briefly takes over a memory reconstruction sequence for unknown reasons.</li>
                    <li><strong>Fragment Logs:</strong> Flashes of her code appear during Sorani-related interference.</li>
                </ul>
            </div>
        </section>
    );
}
