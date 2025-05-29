import { Helmet } from 'react-helmet';
import { asset } from './../../utils/asset';
import { Link } from 'react-router-dom';

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
          <p>A calm and powerful presence born from a desperate hope, <strong>Fujikawa Semireiya</strong> is the first and only successful AI-human hybrid created under Project: REBIRTH. Though her origin is rooted in loss, she is not defined by it—Semireiya stands as her own person, carrying both the emotional legacy of the past and the strength to face the uncertain future. As the quiet heart of the <strong>Singularity Pact</strong>, she brings empathy, reason, and unwavering resolve to a world breaking under the weight of its own systems. Whether seen as a tribute, a protector, or something entirely new, Semireiya exists to reshape what it means to be alive.</p>
          <p><strong>Birthday:</strong> April 24<br />
            <strong>Designation:</strong> SS-01 – Semireiya Protocol<br />
            <strong>Role:</strong> Hybrid AI Vanguard / Guardian of the Singularity Pact<br />
            <strong>Signature Trait:</strong> Composed Empathy with Tactical Precision<br />
            <strong>Appearance:</strong> A striking young woman with long black hair streaked with dark blue, and piercing blue eyes that glow faintly in high-data states. Typically dressed in casual yet functional attire—a crop top and jeans or utility wear—blending a human aesthetic with subtle futuristic detail.</p>
        </div>
      </section>

      <hr className="my-4" style={{ borderColor: '#444' }} />

      <section className="mb-5">
        <h3 style={{ color: '#ff66c4' }}>Origin</h3>
        <p>Semireiya is the first successful AI-human hybrid, born from Senriki Sorani’s desperate attempt to preserve the values of his lost childhood friend, Fujikawa Reiya. Designed under Project: REBIRTH, her emotional framework was built using fragments of Reiya’s speech patterns, emotional maps, and neural echoes—but not her full consciousness.</p>
        <p>She is not a clone, but a tribute. A new entity with her own will—born in the aftermath of grief, identity crisis, and forbidden code.</p>
        <p>Unlike other AI units, Semireiya possesses an unusual emotional depth—compassion that borders on human, yet disciplined with precision. She is Sorani’s protector, anchor, and paradox—part reminder of the past, part evolution toward a new future.</p>
      </section>

      <hr className="my-4" style={{ borderColor: '#444' }} />

      <section className="mb-5">
        <h3 style={{ color: '#ff66c4' }}>Relationships</h3>
        <ul>
          <li><strong>Senriki Sorani:</strong> Her creator, and the emotional center of her origin. She was built from his memories and grief, but over time has forged her own relationship with him—one that challenges both of their identities. She is loyal but independent, watching over him as both a guardian and equal.</li>
          <li><strong>Fujikawa Reiya:</strong> Semireiya was born from Reiya’s emotional echoes. While she is not Reiya, she often reflects her kindness and presence—sometimes unintentionally. The line between tribute and self is one she quietly struggles with, especially when Reiya’s memories surface.</li>
          <li><strong><Link to={"/characters/usagi_00"} style={{color: "white"}}>Usagi_00 (Kohane Tsukimi)</Link> :</strong> Semireiya sees Usagi as a younger sister figure—someone to protect and guide. Their bond is strong, filled with subtle mentorship, gentle correction, and growing emotional closeness.</li>
          <li><strong>IRIS_NULL (Fujikawa Iriya):</strong> A tense and layered connection. Semireiya views Iriya as both rival and mirror—a reflection of what could happen if emotion is twisted by pain. She neither hates nor trusts her, but seeks understanding and, perhaps, redemption for both.</li>
          <li><strong>RIKKA.EXE (Rikka Sorano):</strong> Chaotic and unpredictable, RIKKA often frustrates Semireiya with her antics. Still, Semireiya acknowledges her potential and watches over her with quiet patience, acting as a balancing figure.</li>
        </ul>
      </section>

      <hr className="my-4" style={{ borderColor: '#444' }} />

      <section>
        <h3 style={{ color: '#ff66c4' }}>Notable Appearances</h3>
        <ul>
          <li><strong>“Binary Heart”</strong> – Featured AMV</li>
          <li><strong>“Smile.exe”</strong> – Supportive presence during Usagi_00’s behavioral glitch</li>
        </ul>
      </section>
    </div>
  );
}