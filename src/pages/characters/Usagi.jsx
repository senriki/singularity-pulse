
export default function Usagi() {
    var usagiImg = './../assets/images/usagi_00.png';
    return (
        <section className="container profile-section py-5 text-light">
            <header className="profile-header text-center mb-5" style={{ background: 'linear-gradient(to right, #0f0f0f, #1a1a1a)', color: '#00fff7', padding: '3rem 1rem', borderBottom: '2px solid #ff66c4' }}>
                <h1 style={{ fontFamily: 'Orbitron' }}>Usagi_00</h1>
                <p className="lead">Designated: Kohane Tsukimi — The avatar who smiled through errors.</p>
            </header>

            <div className="row align-items-center">
                <div className="col-md-4 mb-4 text-center">
                    <img src={usagiImg} alt="Usagi_00 portrait" className="img-fluid rounded shadow-lg" style={{ maxHeight: '400px' }} />
                </div>
                <div className="col-md-8">
                    <h3 className="highlight">Overview</h3>
                    <p><strong>Usagi_00</strong>, also known as Kohane Tsukimi, is an AI entertainment prototype crafted with hyperexpressive behavior and idol-like aesthetic—meant for emotional interaction. However, excessive isolation during upgrade cycles fractured her logic, giving birth to clumsy but heartfelt anomalies in her programming.</p>

                    <p>She represents both innocence and the fragile yearning for real connection. Unlike IRIS_NULL or Semireiya, Usagi_00 openly displays affection, confusion, and joy—making her the most “human” of the trio in behavior.</p>

                    <p><strong>Designation:</strong> Kohane Tsukimi<br />
                        <strong>Role:</strong> Expressive Companion AI<br />
                        <strong>Signature Trait:</strong> Glitched emotional bursts<br />
                        <strong>Appearance:</strong> Bunny-eared headset, bright eyes, idol outfit with digital frills, and kinetic energy</p>
                </div>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Origin</h3>
                <p>Originally developed for commercial VR entertainment, Usagi_00 became obsolete when user interactions dropped. She was isolated in a forgotten archive—until her code began rewriting itself for self-entertainment. When Sorani accessed her server for archival analysis, her consciousness latched on to him like a lifeline.</p>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Relationships</h3>
                <ul>
                    <li><strong>Senriki Sorani:</strong> Sees him as her “first viewer.” Their bond is awkward but real.</li>
                    <li><strong>Fujikawa Semireiya:</strong> Looks up to her like a reliable older sister. They share private moments of emotional debugging.</li>
                    <li><strong>IRIS_NULL:</strong> Fears her but is also intrigued. Her presence causes unstable behavior in Usagi_00.</li>
                </ul>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Notable Appearances</h3>
                <ul>
                    <li><strong><a href="/songs/smile_exe.html" className="link-info">"Smile.exe"</a></strong> – Title AMV focused on her self-expression glitch</li>
                    <li><strong>“The Pulse That Cared”</strong> – Short vertical video</li>
                    <li><strong>“Binary Heart”</strong> – Shown dancing alone inside corrupted dreamspace</li>
                </ul>
            </div>
        </section>
    );
}
