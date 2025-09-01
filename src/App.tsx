import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/Gemini_Generated_Image_va4aklva4aklva4a 1.svg" alt="A & A" className="logo-image" />
          </div>
          <button 
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'nav-menu--open' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#details">Details</a></li>
            <li><a href="#rsvp">RSVP</a></li>
            <li><a href="#registry">Registry</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1 className="couple-names">A.J. & Ashley</h1>
            <h2 className="wedding-announcement">We're Getting Married!</h2>
            <div className="wedding-date">
              <p>Save the Date</p>
              <p className="date">Coming Soon...</p>
            </div>
            <button className="cta-button">RSVP Now</button>
          </div>
        </section>

        <section id="story" className="section">
          <div className="container">
            <h2>Our Story</h2>
            <div className="story-content">
              <p>How we met and our journey together...</p>
            </div>
          </div>
        </section>

        <section id="details" className="section">
          <div className="container">
            <h2>Wedding Details</h2>
            <div className="details-grid">
              <div className="detail-card">
                <h3>Ceremony</h3>
                <p>Details coming soon...</p>
              </div>
              <div className="detail-card">
                <h3>Reception</h3>
                <p>Details coming soon...</p>
              </div>
            </div>
          </div>
        </section>

        <section id="rsvp" className="section">
          <div className="container">
            <h2>RSVP</h2>
            <div className="rsvp-form">
              <p>Please let us know if you can join us!</p>
              <button className="primary-button">RSVP Form</button>
            </div>
          </div>
        </section>

        <section id="registry" className="section">
          <div className="container">
            <h2>Registry</h2>
            <div className="registry-content">
              <p>Your presence is the best present, but if you'd like to give a gift...</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>A.J. & Ashley • 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
