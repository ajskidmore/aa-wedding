import React from 'react';

const Details: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="couple-names" style={{fontSize: '3.5rem'}}>Wedding Details</h1>
        <div className="wedding-date">
          <p>The ceremony and reception will be held on our family owned farm in Manistee, Michigan. More details to come!</p>
        </div>
      </div>
    </section>
  );
};

export default Details;