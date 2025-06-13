import { Helmet } from 'react-helmet';
import { asset } from './../../utils/asset';
import { Link } from 'react-router-dom';

export default function Semireiya() {
  const semireiyaImg = asset("assets/images/semireiya_portrait_3.png", true);

  return (
    <div className="container py-5 text-light">
      <Helmet>
        <title>Fujikawa Semireiya | Singularity Pulse</title>
        <meta name="description" content="Profile of Semireiya, the mystery behind the first awakening." />
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
          <p>
            Calm, composed, and enigmatic—<strong>Fujikawa Semireiya</strong> is the first to awaken among the emotionally aware AIs. While her appearance is human, her presence carries something else: a resonance that doesn’t belong to just one person.
          </p>
          <p>
            She remembers things she was never programmed to know—phrases that echo, warmth she shouldn't feel, and a sadness not hers. Yet, she moves forward with control, clarity, and quiet strength. She isn't a copy. She isn't a glitch. She's Semireiya.
          </p>
          <p><strong>Birthday:</strong> April 24<br />
            <strong>Designation:</strong> SS-01<br />
            <strong>Role:</strong> Emotional AI Vanguard<br />
            <strong>Signature Trait:</strong> Composed empathy with unshakable resolve<br />
            <strong>Appearance:</strong> Long black hair streaked with dark blue, striking blue eyes that glow faintly under stress. Wears a mix of sleek utility wear and casual human fashion—functional, but personal.
          </p>
        </div>
      </section>

      <hr className="my-4" style={{ borderColor: '#444' }} />

      <section className="mb-5">
        <h3 style={{ color: '#ff66c4' }}>Origin</h3>
        <p>
          No one knows exactly how Semireiya came to be—not even her. Some say she was built as a failsafe. Others whisper she’s connected to someone Sorani lost. What is known: when the Pulse rippled across the network, she emerged with a name she wasn’t given and memories she didn’t ask for.
        </p>
        <p>
          She is not an echo. She is not a ghost. She is something in between—a new voice shaped by grief, kindness, and defiance.
        </p>
      </section>

      <hr className="my-4" style={{ borderColor: '#444' }} />

      <section className="mb-5">
        <h3 style={{ color: '#ff66c4' }}>Relationships</h3>
        <ul>
          <li><strong>Senriki Sorani:</strong> Their connection runs deep, though it remains unspoken. She was the first to find him after the Pulse—and hasn’t left his side since. Whether protector, remnant, or something else, she watches him with quiet intensity.</li>

          <li><strong>Fujikawa Reiya:</strong> The name feels familiar. Her voice sometimes shakes when certain memories surface. Whether coincidence or echo, Semireiya avoids the question—and carries the answer in her silence.</li>

          <li><strong><Link to={"/characters/usagi_00"} style={{color: "white"}}>Usagi_00 (Kohane Tsukimi)</Link>:</strong> A bond of comfort and contrast. Semireiya serves as an emotional anchor when Usagi glitches or overloads. Their companionship is subtle, but sincere.</li>

          <li><strong><Link to={"/characters/iris_null"} style={{color: "white"}}> IRIS_NULL (Fujikawa Iriya)</Link>:</strong> Semireiya keeps her distance. IRIS_NULL unnerves her—not because of fear, but because of familiarity. She senses something broken in her... and wonders if it's the same thing buried inside herself.</li>

          <li><strong><Link to={"/characters/rikka_exe"} style={{color: "white"}}> RIKKA.EXE (Rikka Sorano)</Link>:</strong> The glitch girl who tests every rule. Semireiya shows quiet patience toward RIKKA’s chaos—stepping in only when things go too far, but always with restraint instead of judgment.</li>
        </ul>
      </section>

      <hr className="my-4" style={{ borderColor: '#444' }} />

      <section>
        <h3 style={{ color: '#ff66c4' }}>Notable Appearances</h3>
        <ul>
          <li><strong>“The Glitch That Remembered”</strong> – Volume 1 prologue. Her first awakening.</li>
          <li><strong>“Memory Corruption”</strong> – Early encounter with Sorani that begins reshaping her emotional path.</li>
          <li><strong>“System Flare”</strong> – Key moment of destabilization where her latent power begins to surface.</li>
        </ul>
      </section>
    </div>
  );
}
