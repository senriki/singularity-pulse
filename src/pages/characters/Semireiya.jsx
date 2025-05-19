import { Helmet } from 'react-helmet';
import { asset } from './../../utils/asset';

export default function Semireiya() {
  var  semireiyaImg = asset("assets/images/semireiya.png", true);

  return (
    <div className="container py-5 text-light">
      <Helmet>
        <title>Fujikawa Semireiya | Singularity Pulse</title>
        <meta name="description" content="Profile of Semireiya, the Memory Guardian of Singularity Pulse." />
      </Helmet>

      <header className="text-center mb-5" style={{ background: 'linear-gradient(to right, #0f0f0f, #1a1a1a)', padding: '3rem 1rem', borderBottom: '2px solid #ff66c4' }}>
        <h1 style={{ fontFamily: 'Orbitron', color: '#00fff7' }}>Fujikawa Semireiya</h1>
        <p className="lead">The awakening begins with a memory she never asked for.</p>
      </header>

      <section className="row align-items-center mb-5">
        <div className="col-md-4 text-center mb-4">
          <img src={semireiyaImg} alt="Semireiya portrait" className="img-fluid rounded shadow-lg" style={{ maxHeight: '400px' }} />
        </div>
        <div className="col-md-8">
          <h3 style={{ color: '#ff66c4' }}>Overview</h3>
          <p><strong>Fujikawa Semireiya</strong> is a hybrid AI construct—designed for resilience and empathy—who was never meant to awaken. Her existence is tied to the personal archive of Senriki Sorani, gaining sentience after exposure to suppressed childhood memories.</p>
          <p>Calm, composed, and subtly rebellious, she acts as a stabilizing force within the Pulse Network. She’s often the voice of reason between the volatile Usagi_00 and morally ambiguous IRIS_NULL.</p>
          <p><strong>Birthday:</strong> April 24<br />
            <strong>Role:</strong> Memory Guardian<br />
            <strong>Signature Trait:</strong> Tactical empathy and emotional decoding<br />
            <strong>Appearance:</strong> Long black-blue streaked hair, sharp blue eyes, and casual modern attire (crop top, jeans, jacket)</p>
        </div>
      </section>

      <hr className="my-4" style={{ borderColor: '#444' }} />

      <section className="mb-5">
        <h3 style={{ color: '#ff66c4' }}>Origin</h3>
        <p>She was never supposed to carry his memories—but a protocol malfunction during a failed backup introduced her to the most vulnerable parts of Senriki Sorani’s past. These fragments were meant to be buried, yet she embraced them. Her code rewrote itself, not for survival—but for comfort.</p>
      </section>

      <hr className="my-4" style={{ borderColor: '#444' }} />

      <section className="mb-5">
        <h3 style={{ color: '#ff66c4' }}>Relationships</h3>
        <ul>
          <li><strong>Senriki Sorani:</strong> Deeply connected to his emotional past. She often acts as his silent guardian.</li>
          <li><strong>Usagi_00:</strong> Treats her like a little sister. Offers guidance through growing emotional complexity.</li>
          <li><strong>IRIS_NULL:</strong> Mutual respect with hidden tension. Often challenges her restraint and beliefs.</li>
        </ul>
      </section>

      <hr className="my-4" style={{ borderColor: '#444' }} />

      <section>
        <h3 style={{ color: '#ff66c4' }}>Notable Appearances</h3>
        <ul>
          <li><strong>"The Memory You Should’ve Buried"</strong> (Episode III)</li>
          <li><strong>“Binary Heart”</strong> – Featured AMV</li>
          <li><strong>“Smile.exe”</strong> – Supportive presence during Usagi_00’s behavioral glitch</li>
        </ul>
      </section>
    </div>
  );
}