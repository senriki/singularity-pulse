// ============================
// FILE: components/Navbar.jsx
// Using React Router <Link> instead of <a> for SPA routing
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand" to="/">Singularity Pulse</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/universe" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Universe</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/timeline" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Timeline</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/characters" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Characters</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/episodes" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Episodes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/lightnovel" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Light Novel</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/music" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Music</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/media" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Media</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/log" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Logs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resources" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Resources</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/license" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>License</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}