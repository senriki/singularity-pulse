// ============================
// FILE: components/Layout.jsx
// Equivalent to resources/views/layouts/app.blade.php
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      <ParticleBackground />
      <div className="overlay"></div>
      <Navbar />
      
      <main className="flex-grow-1 position-relative z-2">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
