// ============================
// FILE: components/Layout.jsx
// Equivalent to resources/views/layouts/app.blade.php
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <ParticleBackground />
      <div className="overlay"></div>
      <Navbar />
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Outlet />
      </main>
      <Footer />
      <audio id="pulseSound" src="/media/ping-glitch.mp3" preload="auto" />
    </>
  );
}
