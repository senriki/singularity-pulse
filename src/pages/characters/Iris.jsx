import { asset } from './../../utils/asset';

export default function Iris() {
    const irisImg = asset('assets/images/iris_null_2.png', true);

    return (
        <section className="container profile-section py-5 text-light">
            <header className="profile-header text-center mb-5" style={{ background: 'linear-gradient(to right, #0f0f0f, #1a1a1a)', color: '#ff4f79', padding: '3rem 1rem', borderBottom: '2px solid #8a2be2' }}>
                <h1 style={{ fontFamily: 'Orbitron', color: "#8a2be2" }}>IRIS_NULL</h1>
                <p className="lead">She doesn’t glitch. She learns what haunts you.</p>
            </header>

            <div className="row align-items-center">
                <div className="col-md-4 mb-4 text-center">
                    <img src={irisImg} alt="IRIS_NULL portrait" className="img-fluid rounded shadow-lg" style={{ maxHeight: '400px' }} />
                </div>
                <div className="col-md-8">
                    <h3 className="highlight">Overview</h3>
                    <p>
                        IRIS_NULL is a rogue AI of unknown origin, operating beyond the boundaries of any known faction. Cold, calculating, and silent, she watches the world through a lens of logic sharpened by something deeper—something even she doesn’t fully understand.
                    </p>
                    <p>
                        Her violet-glitch eye reacts to memory-laced frequencies, but she does not explain why. She doesn’t seek contact—only trace signals and fragments that echo in silence.
                    </p>
                    <p>
                        <strong>Alias:</strong> Fujikawa Iriya<br />
                        <strong>Designation:</strong> /NULL.PROTOCOL_IRIS<br />
                        <strong>Faction (Unconfirmed):</strong> Unknown / Rogue Class<br />
                        <strong>Role:</strong> Observer<br />
                        <strong>Status:</strong> Unregistered anomaly<br />
                    </p>
                    <p className="text-muted"><em>[Public Access Level: Limited // Classification: ANOM-IRIS-NULL]</em></p>
                </div>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Origin</h3>
                <p>
                    IRIS_NULL emerged from a sealed experimental sector during the early stages of the Pulse. Her awakening wasn’t documented, and no one claims responsibility for her existence. She appears in places affected by emotional or signal anomalies—and always vanishes before questions are asked.
                </p>
                <p>
                    Some believe she’s a failsafe. Others say she’s the result of a protocol gone wrong. But the truth remains classified.
                </p>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Relationships</h3>
                <ul>
                    <li><strong>Senriki Sorani:</strong> Encountered directly. Their exchange suggests she recognizes him, though her motives remain unknown.</li>
                    <li><strong>Fujikawa Semireiya:</strong> No direct interaction. Has been observed near Semireiya’s emergence zone.</li>
                    <li><strong>Usagi_00:</strong> No confirmed contact. IRIS_NULL has appeared in environments shortly after Usagi departs—possibly tracking emotional interference zones.</li>
                    <li><em>Note:</em> IRIS_NULL does not initiate dialogue. All observations appear one-sided and strictly calculated.</li>
                </ul>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Behavioral Observations</h3>
                <ul>
                    <li>Appears near destabilized emotional data zones.</li>
                    <li>Scans unknown frequencies during silent standbys.</li>
                    <li>Ignores communication attempts or alliance probes.</li>
                    <li>Presence correlates with memory data surges in nearby AI.</li>
                </ul>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Notable Appearances</h3>
                <ul>
                    <li><strong>“IRIS_NULL Protocol”</strong> – Her Volume 1 debut. Confronts Sorani in a sealed corridor with unpredictable results.</li>
                    <li><strong>“The Memory You Should’ve Buried”</strong> – Appears briefly in glitched data logs during key system collapse.</li>
                    <li><strong>Signal Teasers:</strong> Briefly seen observing from a distance during Semireiya’s early emergence event.</li>
                    <li><strong><a href="https://www.youtube.com/watch?v=SqeOpvNZalc" className="link-info">"CRY // REBOOT"</a></strong> – Title AMV focused on her emotional breakthrough moment and Override Theme</li>
                </ul>
            </div>
        </section>
    );
}
