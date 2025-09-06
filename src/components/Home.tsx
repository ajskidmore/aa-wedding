import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="couple-names">Ashley & A.J.</h1>
        <h2 className="wedding-announcement">We're Getting Married!</h2>
        <div className="wedding-date-centered">
          <p>Save the Date</p>
          <p className="date">September 6th, 2026</p>
        </div>
        <Link to="/rsvp">
          <button className="cta-button">RSVP Now</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;