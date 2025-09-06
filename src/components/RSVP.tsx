import React from 'react';

const RSVP: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="couple-names" style={{fontSize: '3.5rem'}}>RSVP</h1>
        <div className="content-box-centered">
          <p>Your presence would make our day complete.</p>
          <p>Please let us know if you can celebrate with us by responding before the date specified in your invitation.</p>
        </div>
        <button className="cta-button">RSVP Form</button>
      </div>
    </section>
  );
};

export default RSVP;