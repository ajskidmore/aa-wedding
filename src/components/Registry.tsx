import React from 'react';

const Registry: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="couple-names" style={{fontSize: '3.5rem'}}>Registry</h1>
        <div className="content-box-centered">
          <p>Your presence at our wedding is the greatest gift of all.</p>
          <p>However, if you would like to honor us with a gift, we have registered at a few of our favorite places.</p>
        </div>
        <button className="cta-button">View Registry</button>
      </div>
    </section>
  );
};

export default Registry;