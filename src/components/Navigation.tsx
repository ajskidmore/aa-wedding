import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src="/Group 3.svg" alt="A & A" className="logo-image" />
          </Link>
        </div>
        <button 
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu--open' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/story" className={location.pathname === '/story' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Our Story</Link></li>
          <li><Link to="/details" className={location.pathname === '/details' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Details</Link></li>
          <li><Link to="/rsvp" className={location.pathname === '/rsvp' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>RSVP</Link></li>
          <li><Link to="/registry" className={location.pathname === '/registry' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Registry</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;