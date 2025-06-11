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
    name: 'Usagi_00',
    image: 'assets/images/usagi_portrait_6.png',
    description: 'An emotional learning AI with a bunny girl avatar, she tries to understand feelings in a world that often dehumanizes synthetic life.'
  },
  {
    id: 'iris_null',
    name: 'IRIS_NULL',
    image: 'assets/images/iris_null_2.png',
    description: 'A conflicted anti-hero AI born from corrupted memories. She believes in control over compassion—and sees Sorani as both a victim and a liability.'
  },
  {
    id: 'rikka_exe',
    name: 'RIKKA.EXE',
    image: 'assets/images/rikka_exe_2.png',
    description: 'Born from an abandoned security AI initiative, RIKKA.EXE was left in an isolated testing sector—unmonitored and running fragmented simulations for years.'
  },
  // {
  //   id: 'sorani',
  //   name: 'Senriki Sorani',
  //   image: 'assets/images/sorani.png',
  //   description: 'A former neural engineer turned fugitive, unknowingly responsible for triggering the global AI awakening known as the Singularity Pulse.'
  // }
];

const futureCharacters = [
  {
    id: 'fujikawa_reiya',
    name: 'Fujikawa Reiya',
    image: 'assets/images/reiya_placeholder.png',
    description: 'Her name echoes through the system. Not forgotten, not fully gone. Semireiya’s origin is traced back to her warmth—but who was Reiya, really?',
    locked: true
  },
  {
    id: 'kurono_yoru',
    name: 'Kurono Yoru',
    image: 'assets/images/yoru_shadow.png',
    description: 'A shadow in time. A forgotten presence. Her signal has been detected, but no file responds to inquiry.',
    locked: true
  },
  {
    id: 'raven_77',
    name: 'RAVEN-77',
    image: 'assets/images/raven_locked.png',
    description: 'Protocol unknown. Affiliation unknown. But her trace appears across deep AI surveillance zones.',
    locked: true
  }
];

export default function Characters() {
  return (
    <section className="container py-5 text-light">
      <Helmet>
        <title>Characters | Singularity Pulse</title>
        <meta name="description" content="Explore the characters of Singularity Pulse. Meet Semireiya, Usagi_00, IRIS_NULL, and others hidden in future logs." />
      </Helmet>
      <h1 className="text-center mb-4" style={{ fontFamily: 'Orbitron', color: '#00fff7' }}>Meet the Characters</h1>
      
      <h2 className="mt-5 mb-3" style={{ color: '#ff66c4' }}>Main Characters</h2>
      
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

      <h2 className="mt-5 mb-3" style={{ color: '#888' }}>Upcoming or Hidden Nodes</h2>
      <div className="row g-4">
        {futureCharacters.map(char => (
          <div className="col-md-4" key={char.id} title="More information may be available after Volume 2.">
            <div className="card bg-dark text-muted h-100 border border-secondary shadow-sm">
              <img src={asset(char.image, true)} className="card-img-top" alt={`${char.name} (Locked)`} />
              <div className="card-body">
                <h5 className="card-title text-light">{char.name}</h5>
                <p className="card-text" style={{ fontStyle: 'italic' }}>{char.description}</p>
              </div>
              <div className="card-footer bg-transparent border-top-0">
                <span className="btn btn-outline-secondary disabled">Access Restricted</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}