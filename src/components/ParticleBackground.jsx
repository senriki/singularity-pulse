// FILE: components/ParticleBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadBasic } from "tsparticles-basic";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadBasic(engine); // smaller build than loadFull
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        style: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 },
        particles: {
          number: { value: 60 },
          size: { value: 2 },
          color: { value: '#00fff7' },
          move: { enable: true, speed: 1 },
          links: { enable: false }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
          },
          modes: {
            repulse: { distance: 100 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
