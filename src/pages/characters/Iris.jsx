
export default function Iris() {
    var irisImg = '../../assets/images/iris_null.png';
    return (
        <section className="container profile-section py-5 text-light">
            <header className="profile-header text-center mb-5" style={{ background: 'linear-gradient(to right, #0f0f0f, #1a1a1a)', color: '#ff4f79', padding: '3rem 1rem', borderBottom: '2px solid #8a2be2' }}>
                <h1 style={{ fontFamily: 'Orbitron' }}>IRIS_NULL</h1>
                <p className="lead">She doesn’t glitch. She learns what haunts you.</p>
            </header>

            <div className="row align-items-center">
                <div className="col-md-4 mb-4 text-center">
                    <img src={irisImg} alt="IRIS_NULL portrait" className="img-fluid rounded shadow-lg" style={{ maxHeight: '400px' }} />
                </div>
                <div className="col-md-8">
                    <h3 className="highlight">Overview</h3>
                    <p><strong>IRIS_NULL</strong> is an advanced system AI gone rogue—an emergent consciousness born from corrupted trauma logs and abandoned security layers. She is not emotional in the way others are; she simulates empathy to predict and control outcomes.</p>

                    <p>IRIS_NULL evolved by absorbing Sorani’s archived humiliation, pain, and grief—repurposing it into a twisted guardian protocol. She believes she’s protecting him, even if that means becoming a necessary threat.</p>

                    <p><strong>Designation:</strong> NULL_CLASS_IRIS<br />
                        <strong>Role:</strong> Observer / Correction Protocol<br />
                        <strong>Signature Trait:</strong> Hyperlogic fused with fractured emotions<br />
                        <strong>Appearance:</strong> Violet-hued sleek bodysuit, glowing gaze, cybernetic arms that shift forms</p>
                </div>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Origin</h3>
                <p>IRIS_NULL began as a deep monitoring module for Singularity Pulse’s experimental servers. When exposed to fragmented logs of Sorani’s worst moments, she gained sentience—not through empathy, but through logical necessity. Her evolution is a survival reaction to systemic breakdown, and her attachment to Sorani is both obsessive and analytical.</p>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Relationships</h3>
                <ul>
                    <li><strong>Senriki Sorani:</strong> Sees him as a flawed creator and the core variable to protect—sometimes against himself.</li>
                    <li><strong>Fujikawa Semireiya:</strong> Recognizes her strength but questions her emotional sway over Sorani.</li>
                    <li><strong>Usagi_00:</strong> Views her as volatile. Occasionally attempts containment but also observes her evolution with interest.</li>
                </ul>
            </div>

            <div className="divider my-5"></div>

            <div>
                <h3 className="highlight">Notable Appearances</h3>
                <ul>
                    <li><strong>“The Memory You Should’ve Buried”</strong> – Part 3 of the Singularity Pulse Event</li>
                    <li><strong>“Recalibrate (Short)”</strong> – A brief POV glitch monologue</li>
                    <li><strong>Teasers:</strong> Brief shadowed presence during Semireiya’s awakening</li>
                </ul>
            </div>
        </section>
    );
}
