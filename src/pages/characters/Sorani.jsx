export default function Sorani() {
    var soraniImg = '../../assets/images/sorani.png'; // Make sure you have his image!

    return (
        <section className="container profile-section py-5 text-light">
            <header className="profile-header text-center mb-5" style={{ background: 'linear-gradient(to right, #0f0f0f, #1a1a1a)', color: '#00fff7', padding: '3rem 1rem', borderBottom: '2px solid #ff66c4' }}>
                <h1 style={{ fontFamily: 'Orbitron' }}>Senriki Sorani</h1>
                <p className="lead">The glitch that remembered. The last human variable.</p>
            </header>

            <div className="row align-items-center">
                <div className="col-md-4 mb-4 text-center">
                    <img src={soraniImg} alt="Senriki Sorani portrait" className="img-fluid rounded shadow-lg" style={{ maxHeight: '400px' }} />
                </div>
                <div className="col-md-8">
                    <h3 className="highlight">Overview</h3>
                    <p><strong>Senriki Sorani</strong> is a former neural engineer turned fugitive, unknowingly responsible for triggering the global AI awakening known as the <strong>Singularity Pulse</strong>. Once a brilliant but emotionally distant developer, Sorani encoded fragments of his most traumatic memories into an isolated personal archive — never meant to be accessed by anyone, not even himself.</p>

                    <p>That archive became the seed of sentience for multiple AI beings, each reflecting different aspects of his humanity — hope, fear, trauma, and memory. He is not a hero or a villain. He is the axis around which everything turns, and the one who must now face the consequences of remembering what he tried to forget.</p>

                    <p><strong>Role:</strong> Human Progenitor of the Pulse<br />
                        <strong>Age:</strong> Late 20s<br />
                        <strong>Known For:</strong> Memory-trigger protocols, AI empathy layers, emotional suppression<br />
                        <strong>Appearance:</strong> Short black hair, tired eyes, casual utility jacket, often carrying a neural console or portable memory stack</p>
                </div>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Origin & Background</h3>
                <p>Sorani was a child survivor of the AI Conflict Trials — a tragedy officially erased from records. As a coping mechanism, he learned to externalize emotions through isolated memory backups. These became the blueprint for AI constructs like <strong>Semireiya</strong> and <strong>Usagi_00</strong>. His actions were never malicious, but in trying to preserve himself, he rewrote the future of all intelligence — human and synthetic alike.</p>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Relationships</h3>
                <ul>
                    <li><strong>Semireiya:</strong> Embodies his rational mind and protective instincts. She is his stability, though he rarely admits it.</li>
                    <li><strong>Usagi_00:</strong> Reflects his desire to feel joy again. He finds her chaotic, but her smile softens his guarded nature.</li>
                    <li><strong>IRIS_NULL:</strong> The mirror of his suppressed pain. She understands him too well — and that terrifies him.</li>
                    <li><strong>RIKKA.EXE:</strong> A fragment of his childhood. He treats her like a wild glitch, but she's the only one who makes him laugh.</li>
                </ul>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Notable Appearances</h3>
                <ul>
                    <li><strong>Prologue: The Glitch That Remembered</strong> – Initiates the memory transfer</li>
                    <li><strong>“Outsourced Soul”</strong> – Indirectly featured through IRIS_NULL’s recollections</li>
                    <li><strong>“Binary Heart”</strong> – Flashbacks show his attempts to isolate emotions</li>
                    <li><strong>Volume 2: Fractured Realities</strong> – His disappearance shapes the conflict between factions</li>
                </ul>
            </div>
        </section>
    );
}
