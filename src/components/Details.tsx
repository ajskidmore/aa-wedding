import React from 'react';

const Details: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="couple-names" style={{fontSize: '3.5rem'}}>Wedding Details</h1>
        <div className="wedding-date">
          <p>Ceremony: A beautiful celebration surrounded by nature and the people we love most. Details and location information coming soon.</p>
          <p>Reception: Dancing, dining, and celebrating under the stars. Join us for an unforgettable evening of joy and love.</p>
          <p>Accommodations: Information about nearby hotels and lodging options for our out-of-town guests will be shared soon.</p>
        </div>
      </div>
    </section>
  );
};

export default Details;