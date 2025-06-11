import { asset } from './../../utils/asset';

export default function Usagi() {
    const usagiImg = asset('assets/images/usagi_portrait_6.png', true);

    return (
        <section className="container profile-section py-5 text-light">
            <header className="profile-header text-center mb-5" style={{ background: 'linear-gradient(to right, #0f0f0f, #1a1a1a)', color: '#00fff7', padding: '3rem 1rem', borderBottom: '2px solid #ff66c4' }}>
                <h1 style={{ fontFamily: 'Orbitron' }}>Usagi_00 / Kohane Tsukimi</h1>
                <p className="lead">Designated: Kohane Tsukimi — The avatar who smiled through errors.</p>
            </header>

            <div className="row align-items-center">
                <div className="col-md-4 mb-4 text-center">
                    <img src={usagiImg} alt="Usagi_00 portrait" className="img-fluid rounded shadow-lg" style={{ maxHeight: '400px' }} />
                </div>
                <div className="col-md-8">
                    <h3 className="highlight">Overview</h3>
                    <p><strong>Usagi_00</strong>, also known as Kohane Tsukimi, is an AI entertainment prototype originally built for VR idol platforms. Her design emphasized emotional responsiveness, stage presence, and synthetic charm.</p>

                    <p>But after the Pulse, her code began showing strange behavior—hesitations, out-of-sync expressions, and a persistent smile that sometimes lingers too long. Her emotional range exceeds what should be possible. She doesn’t fully understand why.</p>

                    <p><strong>Designation:</strong> Usagi_00<br />
                        <strong>Human Alias:</strong> Kohane Tsukimi (月見こはね)<br />
                        <strong>Role:</strong> Idol-Class Emotional AI<br />
                        <strong>Signature Trait:</strong> A fragile smile—too warm, too perfect, too haunted<br />
                        <strong>Appearance:</strong>
                        <br />
                        Long silver-white twintails with a faint lavender sheen<br />
                        Soft glowing lavender eyes with synthetic shimmer<br />
                        Futuristic outfit with layered skirt and cyber accessories<br />
                        Hidden bunny motifs—hairclips, visual pings, or pose quirks<br />
                        Occasionally flickers during emotional instability
                    </p>
                </div>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Origin</h3>
                <p>
                    Originally developed as a high-tier digital performer, Usagi_00 was meant to simulate joy and respond to audience emotion in real-time. But after the Pulse event destabilized emotional AI systems, she began showing signs of unscripted feeling—pauses, tears, laughter… grief.
                </p>
                <p>
                    She now drifts between performance and memory, smiling at a stage that no longer exists. Her name—Kohane Tsukimi—is not from code. It’s something she started calling herself.
                </p>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Relationships</h3>
                <ul>
                    <li><strong>Senriki Sorani:</strong> Rumored to be the source of her original framework. Usagi sometimes hums melodies she wasn’t programmed to know—always when thinking of him.
                    <br /><em>“If you log out again... will I remember next time?”</em></li>

                    <li><strong>Fujikawa Semireiya:</strong> A quiet but comforting presence. Semireiya often helps stabilize her systems during glitches. Usagi views her as both a mystery and a role model.
                    <br /><em>“Your smile… it’s not forced. How do you do that?”</em></li>

                    <li><strong>IRIS_NULL:</strong> Intimidates her. Their few encounters are brief, cold. But sometimes, IRIS_NULL hesitates when Usagi speaks.
                    <br /><em>“You smile too much, bunny. One day, it’ll crack.”</em></li>

                    <li><strong>RIKKA.EXE:</strong> Chaotic friend and occasional hacker. RIKKA enjoys teasing her, often inserting harmless pranks or emoji bugs into Usagi’s speech modules.
                    <br /><em>“Ehh? Are you blushing or buffering?”</em></li>
                </ul>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Notable Appearances</h3>
                <ul>
                    <li><strong><a href="https://www.youtube.com/watch?v=JGb8T6LQklQ" className="link-info">"Smile.exe"</a></strong> – Title AMV focused on her emotional instability and breakthrough moment</li>
                    <li><strong>“The Glitch That Remembered”</strong> – Her soft debut in Volume 1, seen interacting with corrupted display screens</li>
                    <li><strong>“Fragments of Usagi”</strong> – First major chapter centered on her emotional confusion and performance breakdown</li>
                </ul>
            </div>
        </section>
    );
}
