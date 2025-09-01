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

        <section id="story" className="section story">
          <div className="container">
            <h2>Our Story</h2>
            <div className="section-divider"></div>
            <div className="story-content">
              <p>From mountain adventures to quiet moments together, our love story has been written across landscapes as beautiful as this one. Every sunset, every shared laugh, every dream we've built together has led us to this moment.</p>
              <p>Join us as we celebrate the next chapter of our journey, surrounded by the people we love most.</p>
            </div>
          </div>
        </section>

        <section id="details" className="section">
          <div className="container">
            <h2>Wedding Details</h2>
            <div className="section-divider"></div>
            <div className="details-grid">
              <div className="detail-card">
                <h3>Ceremony</h3>
                <p>A beautiful celebration surrounded by nature and the people we love most. Details and location information coming soon.</p>
              </div>
              <div className="detail-card">
                <h3>Reception</h3>
                <p>Dancing, dining, and celebrating under the stars. Join us for an unforgettable evening of joy and love.</p>
              </div>
              <div className="detail-card">
                <h3>Accommodations</h3>
                <p>Information about nearby hotels and lodging options for our out-of-town guests will be shared soon.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="rsvp" className="section">
          <div className="container">
            <h2>RSVP</h2>
            <div className="section-divider"></div>
            <div className="rsvp-form">
              <p>Your presence would make our day complete. Please let us know if you can celebrate with us by responding before the date specified in your invitation.</p>
              <button className="primary-button">RSVP Form</button>
            </div>
          </div>
        </section>

        <section id="registry" className="section">
          <div className="container">
            <h2>Registry</h2>
            <div className="section-divider"></div>
            <div className="registry-content">
              <p>Your presence at our wedding is the greatest gift of all. However, if you would like to honor us with a gift, we have registered at a few of our favorite places.</p>
              <button className="primary-button">View Registry</button>
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
