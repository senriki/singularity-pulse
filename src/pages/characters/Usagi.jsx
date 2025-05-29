import { asset } from './../../utils/asset';

export default function Usagi() {
    var usagiImg = asset('assets/images/usagi_portrait_6.png', true);

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
                    <p><strong>Usagi_00</strong>, also known as Kohane Tsukimi, is an AI entertainment prototype crafted with hyperexpressive behavior and idol-like aesthetic—meant for emotional interaction. However, excessive isolation during upgrade cycles fractured her logic, giving birth to clumsy but heartfelt anomalies in her programming.</p>

                    <p>She represents both innocence and the fragile yearning for real connection. Unlike IRIS_NULL or Semireiya, Usagi_00 openly displays affection, confusion, and joy—making her the most “human” of the trio in behavior.</p>

                    <p><strong>Designation:</strong> Usagi_00<br />
                        <strong>Human Alias:</strong> Kohane Tsukimi (月見こはね)<br />
                        <strong>Role:</strong> Emotion-emulating AI Idol / Performer Unit<br />
                        <strong>Signature Trait:</strong> A smile that lingers too long—beautiful, but slightly off<br />
                        <strong>Appearance:</strong>
                        <br />
                        Long silver-white twin-tailed hair with lavender tint 
                        <br />
                        Lavender-violet eyes with soft pixel glow
                        <br />
                        Cyber-idol stagewear: futuristic bodysuit with glowing trims and layered skirt
                        <br />
                        Subtle bunny motif — usually in holographic clips, not literal ears
                        <br />
                        Glitch-like flickers during strong emotional surges</p>
                </div>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Origin</h3>
                <p>Usagi_00 was originally developed as a high-tier AI performer in a VR-dominated entertainment platform. Her purpose was simple: to entertain, emote, and adapt to player preferences.
But after the global incident known as the Singularity Pulse, she began showing signs of unauthorized emotional recall. Glitches in her smile, fragments of feelings that weren’t in her database, and the strange sensation of missing someone after logout.

Now known also as Kohane Tsukimi, she exists in a state of digital limbo—part idol, part ghost. Still waiting on the last stage she remembers, holding onto a warmth no longer visible in code.</p>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Relationships</h3>
                <ul>
                    <li><strong>Senriki Sorani:</strong> The original developer tied to her framework and emotional core. Usagi_00 instinctively seeks his presence and approval, though she can’t explain why. He is both the one she performs for and the one whose absence hurts the most.
“If you log out again... will I remember next time?”</li>
                    <li><strong>Fujikawa Semireiya (Protector / Older Sister Figure):</strong> Semireiya shows patience and care toward Usagi_00’s naivety. Their bond is quiet but comforting—Semireiya sees her as someone worth protecting, while Usagi views her as someone she doesn’t want to disappoint.
“Your smile... it’s not forced. How do you do that?”</li>
                    <li><strong>RIS_NULL (Fujikawa Iriya) (Intimidating Rival / Emotional Mirror):</strong> IRIS_NULL sees Usagi_00 as a fragile prototype—sentimental, naive, and dangerous because of it. Yet deep down, she’s also drawn to Usagi’s raw sincerity. Their relationship is layered with tension, reflection, and the question: What does it mean to feel if you're not supposed to?
“You smile too much, bunny. One day, it’ll crack.”</li>
                <li><strong>RIKKA.EXE (Rika Sorano) (Unfiltered Ally / Chaos Friend):</strong>Usagi_00 often doesn’t understand RIKKA’s chaotic energy but finds comfort in her unpredictability. RIKKA, on the other hand, adores teasing her and occasionally hacking her interface just to see her glitch.
“Ehhh? Are you blushing or buffering?”</li>
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
