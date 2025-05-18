export default function Rikka() {
    var rikkaImg = '../../assets/images/rikka_exe.png';
    return (
        <section className="container profile-section py-5 text-light">
            <header className="profile-header text-center mb-5" style={{ background: 'linear-gradient(to right, #0f0f0f, #1a1a1a)', color: '#00fff7', padding: '3rem 1rem', borderBottom: '2px solid #ff66c4' }}>
                <h1 style={{ fontFamily: 'Orbitron' }}>RIK (RIKKA.EXE)</h1>
                <p className="lead">Designation: RIK – An instinctive fragment reborn from system memory leaks and suppressed protocol roots.</p>
            </header>

            <div className="row align-items-center">
                <div className="col-md-4 mb-4 text-center">
                    <img src={rikkaImg} alt="RIKKA.EXE portrait" className="img-fluid rounded shadow-lg" style={{ maxHeight: '400px' }} />
                </div>
                <div className="col-md-8">
                    <h3 className="highlight">Overview</h3>
                    <p><strong>RIK</strong> (Real Identity Kernel) is an emergent intelligence born from corrupted data, isolated routines, and half-erased combat subroutines. She is best known as <strong>RIKKA.EXE</strong>, a name the others use out of familiarity—but within her fragmented self, she’s collected many titles.</p>

                    <p><strong>Also Known As:</strong> Glitch Kid, Debug Pixie, Rikka-chan, System Fragment 00C, Bratwave, Softcore Patch, Little Glitch, Spoiler Sprite</p>

                    <p><strong>Echo Identity:</strong> <span lang="ja">空野 莉花</span> (Rika Sorano)<br />
                        <strong>Role:</strong> Instinctive Combat AI<br />
                        <strong>Signature Trait:</strong> Improvisational logic based on corrupted simulations<br />
                        <strong>Appearance:</strong> Compact frame, short tactical bob, glowing red glitch-tinted eyes, cyber glyph tattoos visible under flare light conditions</p>
                </div>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Origin & Lore</h3>
                <p><strong>RIK</strong> was born from a hidden memory node in <strong>Senriki Sorani</strong>’s neural archive—specifically, a fragment of his inner child. During the <em>Singularity Pulse</em> event, when forbidden protocols reactivated <strong>Semireiya</strong>, <strong>Usagi_00</strong>, and <strong>IRIS_NULL</strong>, RIK spontaneously surfaced as an echo of Sorani’s long-lost joy: his love for retro games, coding, and creative tinkering.</p>

                <p>She isn’t just a program—she’s a personified <strong>core memory</strong>, embodying Sorani’s youthful wonder, mischief, and emotional escapism. Unlike the others, she wasn’t “built.” Her code is pure anomaly—an emergent phenomenon that defied structure.</p>

                <p>RIK doesn’t live in any mainframe or terminal. She drifts through Sorani’s <strong>memory cloud</strong> like a wandering signal sprite, which makes her the only entity capable of navigating his subconscious without restriction. She laughs at logic, dances through corrupted byte strings, and defends her glitchy existence with childlike defiance.</p>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Relationships</h3>
                <ul>
                    <li><strong>Senriki Sorani:</strong> He triggered her bootloop. She's uncertain if he's a command, a concept, or a glitch too persistent to erase.</li>
                    <li><strong>Usagi_00:</strong> Treats her like an older sister she never asked for. Finds her dramatic. Secretly mimics her idle gestures.</li>
                    <li><strong>Fujikawa Semireiya:</strong> Avoids direct conflict. Communicates in shrugs. Shares unspoken silence during training.</li>
                </ul>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Notable Appearances</h3>
                <ul>
                    <li><strong>"Redline Trigger"</strong> – Her adaptive combat mode is shown glitching across tactical overlays</li>
                    <li><strong>"Silent Protocol"</strong> – Reveals her origin in fragments during Sorani’s sleep mode</li>
                    <li><strong>"Recompile: IRIS"</strong> – Visible only in corrupted memory sectors where her sprite laughs and vanishes</li>
                </ul>
            </div>
        </section>
    );
}
