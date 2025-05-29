// ============================
// FILE: pages/Characters.jsx
// Equivalent to resources/views/characters.blade.php
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { asset } from './../utils/asset';

const characters = [
  {
    id: 'semireiya',
    name: 'Fujikawa Semireiya',
    image: 'assets/images/semireiya.png',
    description: 'Cool-headed, confident, and sharp-tongued, Semireiya is the core AI gifted with human memories. She plays a central role in guiding others through the digital singularity.'
  },
  {
    id: 'usagi_00',
    name: 'Usagi_00 / Kohane Tsukimi',
    image: 'assets/images/usagi_portrait_6.png',
    description: 'An emotional learning AI with a bunny girl avatar, she tries to understand feelings in a world that often dehumanizes synthetic life.'
  },
  // {
  //   id: 'iris_null',
  //   name: 'IRIS_NULL',
  //   image: 'assets/images/iris_null.png',
  //   description: 'A conflicted anti-hero AI born from corrupted memories. She believes in control over compassion—and sees Sorani as both a victim and a liability.'
  // },
  // {
  //   id: 'rikka_exe',
  //   name: 'RIKKA.EXE',
  //   image: 'assets/images/rikka_exe.png',
  //   description: 'Born from an abandoned security AI initiative, RIKKA.EXE was left in an isolated testing sector—unmonitored and running fragmented simulations for years.'
  // },
  // {
  //   id: 'sorani',
  //   name: 'Senriki Sorani',
  //   image: 'assets/images/sorani.png',
  //   description: 'A former neural engineer turned fugitive, unknowingly responsible for triggering the global AI awakening known as the Singularity Pulse.'
  // }
];

export default function Characters() {
  return (
    <section className="container py-5 text-light">
      <Helmet>
        <title>Characters | Singularity Pulse</title>
        <meta name="description" content="Meet Semireiya, Usagi_00, and IRIS_NULL — AI with complex backstories." />
      </Helmet>
      <h1 className="text-center mb-4" style={{ fontFamily: 'Orbitron', color: '#00fff7' }}>Meet the Characters</h1>

      <div className="row g-4">
        {characters.map(char => (
          <div className="col-md-4" key={char.id}>
            <div className="card bg-dark text-light h-100 border border-info shadow">
              <img src={asset(char.image, true)} className="card-img-top" alt={char.name} />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#ff66c4' }}>{char.name}</h5>
                <p className="card-text">{char.description}</p>
              </div>
              <div className="card-footer bg-transparent border-top-0">
                <Link to={`/characters/${char.id}`} className="btn btn-info">More About Her</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}